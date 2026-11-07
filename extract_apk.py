"""Static extraction only; never imports or executes APK content. Python stdlib."""
import argparse
import collections
import hashlib
import json
from pathlib import Path, PurePosixPath
import struct
import zipfile


def manifest(data):
    strings, nodes, offset = [], [], 8
    while offset < len(data):
        kind, header, size = struct.unpack_from('<HHI', data, offset)
        if size < 8 or offset + size > len(data):
            raise ValueError('Invalid binary XML chunk')
        if kind == 1:
            count, _, flags, start, _ = struct.unpack_from('<5I', data, offset + 8)
            for i in range(count):
                pos = offset + start + struct.unpack_from('<I', data, offset + header + 4*i)[0]
                if flags & 256:
                    def length(p):
                        v = data[p]
                        return (((v & 127) << 8) | data[p+1], p+2) if v & 128 else (v, p+1)
                    _, pos = length(pos)
                    length_, pos = length(pos)
                    value = data[pos:pos+length_].decode('utf-8')
                else:
                    length_ = struct.unpack_from('<H', data, pos)[0]
                    pos += 2
                    if length_ & 32768:
                        length_ = ((length_ & 32767) << 16) | struct.unpack_from('<H', data, pos)[0]
                        pos += 2
                    value = data[pos:pos+length_*2].decode('utf-16le')
                strings.append(value)
        elif kind == 258:
            _, name, attr_start, attr_size, count, _, _, _ = struct.unpack_from('<II6H', data, offset+16)
            attrs = {}
            for i in range(count):
                p = offset + 16 + attr_start + i*attr_size
                _, key, raw, _, _, value_type, value = struct.unpack_from('<IIIHBBI', data, p)
                attrs[strings[key]] = strings[raw] if raw != 0xffffffff else strings[value] if value_type == 3 else value
            nodes.append({'tag': strings[name], 'attributes': attrs})
        offset += size
    return nodes


def dump(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2), encoding='utf-8')


def extract(apk, dest):
    dest = dest.resolve()
    dest.mkdir(parents=True, exist_ok=True)
    raw = dest / 'local-only-original'
    publish = dest / 'upload'
    publish.mkdir(exist_ok=True)
    inventory, animations = [], []
    with zipfile.ZipFile(apk) as z:
        if z.testzip():
            raise ValueError('APK CRC validation failed')
        for info in z.infolist():
            parts = PurePosixPath(info.filename).parts
            if any(p in ('..', '.') or ':' in p or '\\' in p for p in parts) or PurePosixPath(info.filename).is_absolute():
                raise ValueError('Unsafe archive path')
            target = raw.joinpath(*parts).resolve()
            if not target.is_relative_to(raw.resolve()):
                raise ValueError('Archive path escapes destination')
            if info.is_dir():
                continue
            data = z.read(info)
            selected = info.filename.startswith(('assets/res/', 'assets/src/', 'assets/script/')) or info.filename in ('assets/main.jsc', 'assets/project.json', 'AndroidManifest.xml')
            if selected:
                target.parent.mkdir(parents=True, exist_ok=True)
                target.write_bytes(data)
            inventory.append({'path': info.filename, 'bytes': len(data), 'sha256': hashlib.sha256(data).hexdigest(), 'extracted_locally': selected})
            # Keep readable source in Git directly. Other assets are bundled below.
            if info.filename.startswith('assets/res/') and target.suffix in ('.js', '.json', '.vsh', '.fsh') or info.filename == 'assets/project.json':
                out = publish / 'readable' / info.filename
                out.parent.mkdir(parents=True, exist_ok=True)
                out.write_bytes(data)
            if info.filename.endswith('.ExportJson'):
                content = json.loads(data)
                for animation in content.get('animation_data', []):
                    animations.append({'file': info.filename, 'name': animation.get('name'), 'actions': [{'name': m.get('name'), 'duration': m.get('dr'), 'scale': m.get('sc')} for m in animation.get('mov_data', [])], 'bones': len(content.get('armature_data', [{}])[0].get('bone_data', [])), 'atlases': content.get('config_file_path'), 'textures': content.get('config_png_path')})
        dump(publish / 'reports/manifest-decoded.json', manifest(z.read('AndroidManifest.xml')))
        dump(publish / 'reports/animations.json', animations)
        dump(publish / 'reports/inventory.json', inventory)
        stats = {'apk_sha256': hashlib.sha256(apk.read_bytes()).hexdigest(), 'apk_bytes': apk.stat().st_size, 'file_count': len(inventory), 'extensions': dict(collections.Counter(PurePosixPath(i['path']).suffix for i in inventory)), 'source_status': 'Partial: plaintext map scripts/configurations extracted; JSC, DEX and native libraries are compiled, not recovered source.'}
        dump(publish / 'reports/summary.json', stats)
        for name, predicate in [
            ('game-resources.zip', lambda n: n.startswith('assets/res/')),
            ('compiled-javascript.zip', lambda n: n.endswith('.jsc') and n.startswith('assets/'))
        ]:
            with zipfile.ZipFile(publish / name, 'w', zipfile.ZIP_DEFLATED) as bundle:
                for info in z.infolist():
                    if predicate(info.filename) and not info.is_dir():
                        bundle.writestr(info.filename, z.read(info))
        reports = publish / 'reports'
        for name in ['stageConfig', 'ability', 'soldier', 'equipment', 'ZhaoYun_Define']:
            dump(reports / (name + '.json'), json.loads(z.read('assets/res/config/' + name + '.json')))
    # Verify bundled assets and every extracted original against the recorded hashes.
    for item in inventory:
        if item['extracted_locally']:
            assert hashlib.sha256((raw / item['path']).read_bytes()).hexdigest() == item['sha256']
    for bundle in publish.glob('*.zip'):
        with zipfile.ZipFile(bundle) as z:
            assert z.testzip() is None
    print(json.dumps({'verified_files': len(inventory), 'animation_sets': len(animations), 'hero_actions': [len(a['actions']) for a in animations if a['name'] == 'zhaoyun'], 'bundles': {p.name: p.stat().st_size for p in publish.glob('*.zip')}}, ensure_ascii=False))


if __name__ == '__main__':
    p = argparse.ArgumentParser()
    p.add_argument('apk', type=Path)
    p.add_argument('destination', type=Path)
    args = p.parse_args()
    extract(args.apk, args.destination)
