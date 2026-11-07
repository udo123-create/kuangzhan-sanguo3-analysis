var MapConfig={
	open_2:true,
	func_2:function(){
		if(MapConfig.open_2 && Macro.unit(1)){
			MapConfig.open_2=false;
			var config={camX:3300,camSpeed:1,dialogTime:3,unitID:1,timeToNext:3,camMoveTime:3,
				dialog:{
		        	timeToNext : 3,
		         	text : [
		         		{
		        			0:"张角：苍天已死，汉室必亡！九气共合，黄天不灭!",
		        		},
		        	],
                    func:function(){
                    },
		        },
			}
//	 		Macro.bossAppear(config);			
		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:10000*(1+0.5*(gDifficulty-1)),},
			{time:0,id:"Gate",x:3600,faction:-1,hp:47000*(1+0.5*(gDifficulty-1)),drop:{gold:{num:4,ct:5}},},
			{time:0,id:"mage",x:4000,faction:-1,lvl:7,movementSpeed:0.4,
				spell:{ability:{id:"thunderLight",damage:200,color:"hua",},cooldown:5,
         	    config:{}},//{type:"channel2",castTime:0.1,channelInterval:0.1,},},
			},
			{time:0,id:"huangJinPikeMan",x:2000,faction:-1,lvl:7,hide:{pos:2000,range:600,func:null}},
			{time:0,id:"bowMan",x:2400,faction:-1,lvl:7,hide:{pos:2000,range:600,func:null}},
			{time:0,id:"huangJinPikeMan",x:2100,y:145,faction:-1,lvl:7,hide:{pos:2000,range:400,func:null},},
			{time:0,id:"bowMan",x:2500,faction:-1,lvl:7,hide:{pos:2000,range:600,func:null}},
			{time:0,id:"huangJinPikeMan",x:2100,faction:-1,lvl:7,hide:{pos:2000,range:600,func:null},},
			{time:0,id:"huangJinPikeMan",x:2400,faction:-1,lvl:7,hide:{pos:2000,range:400,func:null}},
		
//            {time:4,id:"ZhangJiao",hp:8000,x:1111,faction:-1,unitType:"boss",drop:{gold:{num:5,ct:3},},spell:SpellConfig.ZhangJiao_Stage,
//                stage:[
//                    {hp:0.6,spell:SpellConfig.ZhangJiao_Stage2,func:function(unit){
//                                g_sharedFightLayer.setBackgroundColorTrans(cc.c3b(140,140,140))
//                                unit.chat("蝼蚁们，见识我的真正力量!");
//                            }
//                     },
//                     {hp:0.3,spell:SpellConfig.ZhangJiao_Stage3,func:function(unit){
//                                g_sharedFightLayer.setBackgroundColorTrans(cc.c3b(80,80,80))
//                                unit.chat("蝼蚁们，见识我的真正力量!");
//                            }
//                     },
//                ],
//                func:function(unit){
//                    unit.setAI(false);
//                    var ct = 0;
//                    g_sharedFightLayer.camShake(4,1,0.001);
//                    Macro.schedule(unit,function(){
//                        for(var i = 0;i<=7;i++){
//                            var func = function(){
//                                ct++;
//                                g_sharedFightLayer.camShake(0.5,3);
//                                if(ct==8){
//                                    for(var j =0;j<=2;j++){
//                                        var effect = Effect.Animation.createWithSetName("huadian",6,"res/ability/huadian.plist",1);
//                                        g_sharedFightLayer.addChild(effect);
//                                        var pos = cc.p(unit.pos.x-40+j*40,400+kit.rndInt(-30,30))
//                                        effect.setPosition(pos);
//                                        
//                                        var earth = Effect.EarthCrack(pos.x,pos.y-280);
//                                        g_sharedFightLayer.addChild(earth);
//                                    }
//                                    g_audioEffectPlay("res/sound/jineng_lightShock.ogg");
//                                    g_audioEffectPlay("res/sound/explode.ogg");
//                                    for(var k =1;k<=6;k++){ 
//                                        var imgPath ="res/ability/stoneSpike/ashe.png"
//                                        var frag = new GameUnit.Fragment({imgPath:imgPath},{fx:kit.rndInt(-10,10),fy:15+kit.rndInt(0,5),yOnEarth:unit.pos.y,pos:cc.p(unit.pos.x+kit.rndInt(-40,40),unit.pos.y+kit.rndInt(-40,40))});
//                                        g_sharedFightLayer && g_sharedFightLayer.addChild(frag);
//                                    }
////                                    unit.castAbility({  
////                                        ability:{id:"Leap"},
////                                    });
//                                    var lighthurt = LightHurtEffect.create(cc.p(0,80),"hua",2); 
//                                    unit.addChild(lighthurt); 
//                                    var particle = cc.ParticleSystem.create("res/particles/thunderExplode.plist");
//                                    particle.setPosition(unit.getMidPoint());
//                                    particle.setPositionType(cc.PARTICLE_TYPE_GROUPED);
//                                    g_sharedFightLayer.addChild(particle,2000);
//                                    particle.setAutoRemoveOnFinish(true);
//                                    unit.setVisible(true);
//                                }else{
//                                    var effect = Effect.Animation.createWithSetName("huadian",6,"res/ability/huadian.plist",1);
//                                    g_sharedFightLayer.addChild(effect);
//                                    var pos = cc.p(unit.pos.x+kit.rndInt(-150,150),400+kit.rndInt(-30,30))
//                                    effect.setPosition(pos);
//                                    
//                                    var earth = Effect.EarthCrack(pos.x,pos.y-280);
//                                    g_sharedFightLayer.addChild(earth);
//                                    g_audioEffectPlay("res/sound/jineng_lightShock.ogg");
//                                }
//                            }
//                            Macro.schedule(unit,func,i*0.25,1);
//                        }
//                    },2.7,1);
//                    
//                    unit.setVisible(false);
//    				var dialog={
//    		        	timeToNext : 3,
//    		         	text : [
//    		         		{
//    		        			0:"张角：苍天已死，汉室必亡！九气共合，黄天不灭!",
//    		        		},
//    		        	],
//                        endFunc:function(){
//                            unit.introduce(function(unit){unit.setAI(true);unit.chat(["苍天已死，黄天当立！","我乃天公将军，天选之人!"]);});
//                        },
//    		        }
//
//        	 		Dialog.create(4,dialog);
//                    g_sharedFightLayer.setBackgroundColorTrans(cc.c3b(200,200,200));
//                },
//            },
            {time:0,id:"fatManShu_lv5",x:300,faction:1,lvl:6,},
            {time:0,id:"fatManShu_lv5",x:400,faction:1,lvl:6,},
			{time:0,id:"huangJinPikeMan",x:2600,faction:-1,lvl:7,},
			{time:0,id:"bowMan",x:1500,faction:-1,lvl:7,},
			{time:0,id:"huangJinPikeMan",x:2500,faction:-1,lvl:7,},
			{time:0,id:"huangJinPikeMan",x:2000,faction:-1,lvl:7,},
//			{time:0,id:"shieldMan",x:1400,faction:-1,lvl:7,},
//			{time:0,id:"huangJinPikeMan",x:1500,faction:-1,lvl:7,},
//			{time:0,id:"huangJinPikeMan",x:1500,faction:-1,lvl:7,},
			{time:0,id:"shieldMan",x:1700,faction:-1,lvl:7,},
			{time:0,id:"huangJinPikeMan",x:1800,faction:-1,lvl:7,},
			{time:1,id:"huangJinPikeMan",x:2550,y:150,faction:-1,lvl:7,},
			{time:2,id:"bowMan",x:3200,y:150,faction:-1,lvl:7,},
//			{time:3,id:"huangJinPikeMan",x:3550,y:140,faction:-1,lvl:7,},
			{time:3,id:"huangJinPikeMan",x:3500,faction:-1,lvl:7,},
			{time:9,id:"huangJinPikeMan",x:3800,y:140,faction:-1,lvl:7,},	
			{time:10,id:"huangJinPikeMan",x:3500,y:150,faction:-1,lvl:7,},
			{time:10,id:"bowMan",x:3600,faction:-1,lvl:7,},
//			{time:10,id:"huangJinPikeMan",x:3800,faction:-1,lvl:7,},
				
			{time:12,id:"huangJinPikeMan",x:3800,faction:-1,lvl:7,},
			{time:15,id:"huangJinPikeMan",x:3500,faction:-1,lvl:7,},
			{time:15,id:"shieldMan",x:3800,faction:-1,lvl:7,drop:{heal:{percent:0.1,ct:2}},},
						
//			{time:16,id:"shieldMan",x:3800,y:150,faction:-1,lvl:7,},
			{time:17,id:"huangJinPikeMan",x:3800,y:150,faction:-1,lvl:7,},	
			{time:20,id:"bowMan",x:3800,y:150,faction:-1,lvl:7,},
			{time:23,id:"shieldMan",x:3800,y:140,faction:-1,lvl:7,},
			{time:26,id:"huangJinPikeMan",x:3800,faction:-1,lvl:7,},
//			{time:25,id:"huangJinPikeMan",x:3800,faction:-1,lvl:7,},
//			{time:26,id:"huangJinPikeMan",x:3800,faction:-1,lvl:7,},
			{time:28,id:"mage",x:3800,faction:-1,lvl:1,drop:{heal:{percent:0.1,ct:3}},},
		],
		[
//          {time:10,id:"mage",x:3800,faction:-1,lvl:7,},
            {time:15,id:"shieldMan",x:3800,y:140,faction:-1,lvl:7,},
            {time:15,id:"shieldMan",x:3800,y:140,faction:-1,lvl:7,},
            {time:15,id:"bowMan",x:3800,faction:-1,lvl:7,},
			{time:30,id:"mage",x:3800,faction:-1,lvl:1,},
//			{time:30,id:"mage",x:3800,faction:-1,lvl:7,},
//			{time:40,id:"mage",x:3800,faction:-1,lvl:7,},
//			{time:50,id:"mage",x:3800,y:140,faction:-1,lvl:7,},
			{time:60,id:"mage",x:3800,faction:-1,lvl:1,},
//			{time:70,id:"mage",x:3800,faction:-1,lvl:7,},
			{time:90,id:"mage",x:3800,faction:-1,lvl:1,},
//			{time:90,id:"mage",x:3800,faction:-1,lvl:7,drop:{heal:{percent:0.1,ct:3}},},
			
//			{time:100,id:"mage",x:3800,y:150,faction:-1,lvl:7,},
////			{time:110,id:"mage",x:3800,y:150,faction:-1,lvl:7,},
			{time:120,id:"mage",x:3800,faction:-1,lvl:1,},
//			{time:130,id:"mage",x:3800,faction:-1,lvl:7,},

//			{time:140,id:"mage",x:3800,faction:-1,lvl:7,},
//
//			{time:150,id:"mage",x:3800,faction:-1,lvl:7,},
//			{time:160,id:"mage",x:3800,faction:-1,lvl:7,drop:{heal:{percent:0.1,ct:3}},},
            {time:0,id:"shieldMan",x:3800,y:140,faction:-1,lvl:7,},
            {time:0,id:"shieldMan",x:3800,y:140,faction:-1,lvl:7,},
            {time:0,id:"bowMan",x:3800,faction:-1,lvl:7,},
            {time:4,id:"ZhangJiao",hp:18000*Math.pow(1.5,(gDifficulty-1)),x:3500,faction:-1,unitType:"boss",drop:{gold:{num:5,ct:3},},spell:SpellConfig.ZhangJiao_Stage,
                stage:[
                    {hp:0.6,spell:SpellConfig.ZhangJiao_Stage2,func:function(unit){
                                g_sharedFightLayer.setBackgroundColorTrans(cc.c3b(140,140,140))
                                unit.chat("蝼蚁们，见识我的真正力量!");
                                unit.castAbility(SpellConfig.ZhangJiao_Stage2[0],true);
                            }
                     },
                     {hp:0.3,spell:SpellConfig.ZhangJiao_Stage3,func:function(unit){
                                g_sharedFightLayer.setBackgroundColorTrans(cc.c3b(80,80,80))
                                unit.chat("不可能！！");
                                unit.castAbility({ability:{damage:400,id:"ShockWave"}},true);
                            }
                     },
                ],
                func:function(unit){
                    g_audioEngine.TransitToMusic(g_res.music.bossFight);
                    Macro.setInGameCg(true);
                    var camID = Macro.camMoveTo({x:3500,y:"current"});
                    unit.setAI(false);
                    var ct = 0;
                    g_sharedFightLayer.camShake(4,1,0.001);
                    Macro.schedule(unit,function(){
                        for(var i = 0;i<=7;i++){
                            var func = function(){
                                ct++;
                                g_sharedFightLayer.camShake(0.5,3);
                                if(ct==8){
                                    for(var j =0;j<=2;j++){
                                        var effect = Effect.Animation.createWithSetName("huadian",6,"res/ability/huadian.plist",1);
                                        g_sharedFightLayer.addChild(effect);
                                        var pos = cc.p(unit.pos.x-40+j*40,400+kit.rndInt(-30,30))
                                        effect.setPosition(pos);
                                        
                                        var earth = Effect.EarthCrack(pos.x,pos.y-280);
                                        g_sharedFightLayer.addChild(earth);
                                    }
                                    g_audioEffectPlay("res/sound/jineng_lightShock.ogg");
                                    g_audioEffectPlay("res/sound/explode.ogg");
                                    for(var k =1;k<=6;k++){ 
                                        var imgPath ="res/ability/stoneSpike/ashe.png"
                                        var frag = new GameUnit.Fragment({imgPath:imgPath},{fx:kit.rndInt(-10,10),fy:15+kit.rndInt(0,5),yOnEarth:unit.pos.y,pos:cc.p(unit.pos.x+kit.rndInt(-40,40),unit.pos.y+kit.rndInt(-40,40))});
                                        g_sharedFightLayer && g_sharedFightLayer.addChild(frag);
                                    }
//                                    unit.castAbility({  
//                                        ability:{id:"Leap"},
//                                    });
                                    var lighthurt = LightHurtEffect.create(cc.p(0,80),"hua",2); 
                                    unit.addChild(lighthurt); 
                                    var particle = cc.ParticleSystem.create("res/particles/thunderExplode.plist");
                                    particle.setPosition(unit.getMidPoint());
                                    particle.setPositionType(cc.ParticleSystem.TYPE_GROUPED);
                                    g_sharedFightLayer.addChild(particle,2000);
                                    particle.setAutoRemoveOnFinish(true);
                                    unit.setVisible(true);
                                }else{
                                    var effect = Effect.Animation.createWithSetName("huadian",6,"res/ability/huadian.plist",1);
                                    g_sharedFightLayer.addChild(effect);
                                    var pos = cc.p(unit.pos.x+kit.rndInt(-150,150),400+kit.rndInt(-30,30))
                                    effect.setPosition(pos);
                                    
                                    var earth = Effect.EarthCrack(pos.x,pos.y-280);
                                    g_sharedFightLayer.addChild(earth);
                                    g_audioEffectPlay("res/sound/jineng_lightShock.ogg");
                                }
                            }
                            Macro.schedule(unit,func,i*0.25,1);
                        }
                    },2.7,1);
                    
                    unit.setVisible(false);
    				var dialog={
    		        	timeToNext : 3,
    		         	text : [
    		         		{
    		        			0:"张角：苍天已死，汉室必亡！九气共合，黄天不灭!",
    		        		},
    		        	],
                        endFunc:function(){
                            unit.introduce(function(unit){
                                                            unit.setAI(true);
                                                            unit.chat(["苍天已死，黄天当立！","我乃天公将军，天选之人!"]);
                                                            Macro.setInGameCg(false);
                                                            Macro.camMoveTo(camID);
                                                         }
                                           );
                        },
    		        }

        	 		Dialog.create(4,dialog);
                    g_sharedFightLayer.setBackgroundColorTrans(cc.c3b(200,200,200));
                },
            },
//			{time:45,id:"shieldMan",x:3800,faction:-1,lvl:7,lvl:7,},
//////			{time:48,id:"shieldMan",x:3800,y:150,faction:-1,lvl:7,},
////			{time:49,id:"bowMan",x:3800,y:150,faction:-1,lvl:7,},
//			{time:52,id:"bowMan",x:3800,y:150,faction:-1,lvl:7,},
////			{time:60,id:"huangJinPikeMan",x:3800,faction:-1,lvl:7,},
//			{time:61,id:"huangJinPikeMan",x:3800,faction:-1,lvl:7,},
////
//			{time:60,id:"huangJinPikeMan",x:3800,faction:-1,lvl:7,},
////			{time:63,id:"shieldMan",x:3800,y:150,faction:-1,lvl:7,},e
//			{time:68,id:"bowMan",x:3800,y:150,faction:-1,lvl:7,},
////			{time:70,id:"huangJinPikeMan",x:3800,faction:-1,lvl:7,},
////			{time:71,id:"huangJinPikeMan",x:3800,faction:-1,lvl:7,},
////			{time:72,id:"bowMan",x:3800,y:150,faction:-1,lvl:7,},
//            {time:73,id:"mageQun",x:3700,y:150,faction:-1,lvl:7,},
////			{time:78,id:"huangJinPikeMan",x:3800,y:150,faction:-1,lvl:7,drop:{heal:{percent:0.1,ct:3}},},
//			{time:80,id:"huangJinPikeMan",x:3750,y:150,faction:-1,lvl:7,},
////
////
////			{time:85,id:"bowMan",x:3800,y:150,faction:-1,lvl:7,},
//			{time:88,id:"bowMan",x:3800,y:150,faction:-1,lvl:7,},
//			{time:92,id:"bowMan",x:3800,y:150,faction:-1,lvl:7,},
////			
////			{time:95,id:"huangJinPikeMan",x:3800,faction:-1,lvl:7,},
////			{time:99,id:"huangJinPikeMan",x:3800,faction:-1,lvl:7,},
//			{time:103,id:"bowMan",x:3800,y:150,faction:-1,lvl:7,},
//			{time:107,id:"bowMan",x:3800,y:150,faction:-1,lvl:7,},
			],
	],	
	task:[
		
		{
			win:[
				{type:"allClear",faction:-1,text:'击溃张角先锋军',textNum:true},
			],
			lose:[
//				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
			],
			finishFunc:function(){
				Macro.flee();
			},
		},
		{
            taskTextShowLatency:15,
			win:[
				{type:"killUnit",faction:-1,text:'击败张角',id:'ZhangJiao',},
		
			],
			lose:[
//				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
			],
			finishFunc:function(){
				Macro.flee();
			},
			update:function(){
				MapConfig.func_2();
			}
		},
	
	],
	init:function(){
		g_sharedFightLayer.registerEdge(3500,-1)
//		cc.msgbox(1)
//		g_sharedFightLayer.myhero.pos.x = 500;
//		g_sharedFightLayer.setCam(cc.p(2000,null));
//		g_sharedFightLayer.camMoveBy(cc.p(-500,null),0,5);
	},
	config:{
		disable:{
//			myhero:true,ability:true,
		},
		drop:{rage:{chance:0.5,num:1.2},gold:{chance:0.5,num:35,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:224,gold:0,gem:0},
	}
};