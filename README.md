# 狂斩三国3 APK 静态解析资料

这是一份 APK 静态提取与结构分析资料，**不是官方原始源码，也不是可直接构建的 Android / 微信游戏工程**。未运行安装包，未破解支付或联网验证。供代码与资源结构研究及后续 Claude 分析使用。

## 已确认的基本信息

- Android 包名：`com.koogame.sanguo3`
- AndroidManifest 声明版本：`1.0.5`，versionCode `6`
- APK 大小：33,040,717 字节，共 3,175 个文件
- 引擎线索：Cocos2d、JavaScript 原生绑定；存在 `libcocos2dx.so`、`project.json`、Cocos Studio `.ExportJson` 与 `.plist` 图集
- 主体游戏代码为 `.jsc` 编译文件；`classes.dex` 与 `.so` 为编译后的 Android / 原生代码，尚未反编译
- APK 根目录另有 VERSION `3.1.9`，用途未确认，不能用它替代 Android 清单中的应用版本

## 从哪里开始看

| 路径 | 内容 | 可读性 |
| --- | --- | --- |
| `CLAUDE_READING_GUIDE.md` | 给后续分析者的入口与证据范围 | 可直接阅读 |
| `reports/summary.json` | APK SHA-256、大小、扩展名统计 | JSON |
| `reports/inventory.json` | 每个 APK 文件的路径、大小和 SHA-256 | JSON |
| `reports/manifest-decoded.json` | Android 二进制清单起始节点与属性解码 | JSON，数值型枚举/资源 ID 保留原值 |
| `readable/assets/project.json` | 引擎配置与模块加载清单 | 原文件 |
| `readable/assets/res/map/` | 地图/场景 JavaScript 数据脚本 | 原文件，不等于完整战斗逻辑 |
| `readable/assets/res/config/` | 关卡、装备、技能、兵种、成长等配置 | 原文件 |
| `reports/animations.json` | 全部 ExportJson 的动作、骨骼数、图集关系 | 提取摘要 |
| `game-resources.zip` | `assets/res/` 全部图片、动画、地图、声音和配置，保留原路径 | 需先解压 |
| `compiled-javascript.zip` | `assets/` 中全部 228 个 `.jsc` 文件 | 编译产物，不是 JS 源码 |
| 原 APK 中的 `classes.dex` 与 `lib/armeabi/libcocos2dx.so` | 仅列于 inventory，未纳入上传包 | 尚未反编译 |
| `extract_apk.py` | 本次提取脚本 | Python 标准库，无需安装依赖 |

资源 ZIP 与 `readable` 有意包含部分重复文件：前者保持完整资源关系，后者方便网页直接查看及代码检索。GitHub 页面通常不能浏览 ZIP 内部，使用 Claude 时应克隆仓库后解压。

## 角色图片如何生成

赵云并非一张完整图片加18帧动画的简单序列。本包采用 **Cocos 骨骼动画 + 图集部件 + 可替换皮肤**：

1. `assets/res/armatures/zhaoyun/zhaoyun.ExportJson`：45 个骨骼与26个动作条目，记录层级、变换与关键帧。
2. `zhaoyun0.plist`、`zhaoyun1.plist`、`zhaoyun2.plist`：三个图集的裁切、旋转、偏移信息。
3. 对应的 `zhaoyun0.png`、`zhaoyun1.png`、`zhaoyun2.png`：身体和服饰等图像部件。
4. `assets/res/armatures/zhaoyun/skin/`：不同铠甲、身体部件和武器贴图。

动作包括跑步、呼吸、后退、被攻击、失败、站立砍击、跃起砍击、直线刺击、横劈、旋转攻击、冲刺、后冲等。原命名含重复和修订版本，不代表26种独立玩法。仅将 PNG 拼在一起不能准确还原动画，还需解释骨骼、关键帧、图集裁切与绘制顺序。

## 可确认的游戏配置

- 60条剧情关卡配置，从“艺成下山”到“巧夺长沙”；普通、困难、噩梦分别有掉落字段。
- 赵云1～50级成长表。
- 6种技能：顺势一击、绝杀冲阵、神鬼乱舞、烈焰冲刺、雷霆一击、巨石封域。
- 6种兵种：枪兵、弓兵、刀兵、锤兵、军师、医师。
- 45条装备配置，30条宝珠配置。
- 存在强化、合成、探索、奖励关卡、商店等数据。

这些是包内配置记录，未验证当前运行版本是否启用全部记录，也未验证服务器是否仍可用。

## 提取与校验

```sh
python extract_apk.py /path/to/game.apk ./result
```

脚本检查 ZIP 路径与 CRC，记录所有文件的 SHA-256，并校验选取的本地提取文件与资源压缩包。其输出为 `local-only-original/` 和 `upload/`；前者包含本地分析原件，不用于 Git 上传。原 APK、支付 SDK 插件包、开发者本机密钥与无关项目内容没有纳入仓库。

## 范围与权属

原游戏资源和编译代码来自用户提供的 APK，本仓库未将它们声明为原创或赋予开源许可，权利仍归原权利人。公开可读不等于授予商业复用许可。新游戏项目的原创代码、占位美术及后续生成素材未混入这份资料。

日期：2026-11-06。结论来自静态文件解析，不是运行测试。
