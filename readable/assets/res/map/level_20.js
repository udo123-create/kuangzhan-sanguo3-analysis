
var MapConfig={
	open:true,
	open_1_1:true,
	open_1:true,
	open_2:true,     
	func_1:function(){
		if(MapConfig.open&&Macro.unit(1)&&Macro.unit(1).pos.x<1000){
			MapConfig.open=false;
			Macro.showMessage('小心伏兵截杀王允',5);
			Macro.doLater(3,function(){
				var sodier=[
					{time:0,id:"shieldmanQun",x:1300,faction:-1,lvl:16},
					{time:0,id:"bowmanQun",x:1350,faction:-1,lvl:16},
					{time:0,id:"bowmanQun",x:1400,faction:-1,lvl:16},
					{time:0,id:"bowmanQun",x:1450,faction:-1,lvl:16},
				]
				Effect.Smoke(1400,160);
				for(var i=0;i<5;i++){
					g_sharedFightLayer.createUnit(sodier[i])
				}
			})
		}
	},
	func_2:function(){
            if(!MapConfig.open_1 && Macro.unit(2))
                Macro.unit(2).moveTo(3400,true);  
			if(Macro.unit(2)&&MapConfig.open_1 && Macro.unit(2).hp<=Macro.unit(2).maxHp*0.1){
				MapConfig.open_1=false;
                Macro.unit(2).removeStatus("unDead");
				Macro.setUnitSpawn(false);
	            		var dialog = {
				        	timeToNext : 3.5,
				         	text : [
					        		{
					        		0:"董卓：吾儿奉先，快来护驾！",
					        		},
				        		]
				} 
				var func = function(){
				}
				Dialog.create(50,dialog,func);
				Macro.unit(2).direction=1;
//				Macro.unit(2).moveTo(3800,true);
//				Macro.doLater(0.1,function(){
//					Macro.unit(2).setAI(false);
//				});
				Macro.allUnitAction(function(unit){
					if(unit.faction==1){
						unit.stand(true);
						unit.setAI(false);
					}else if(unit.faction==-1){
						if(unit!=Macro.unit(2)){
							unit.fadeOut();
                            cc.log('fadeOut')
						}
					}
                });	         
                if(Macro.unit(2).pos.x<2500)
                        Macro.unit(2).pos.x = 2500;
//                Macro.unit(2).movementSpeed*=2;
//                Macro.unit(2).moveSpeed*=2;
                
    			var lvbu = g_sharedFightLayer.createUnit({time:0,id:"LvBu20",x:3550,faction:1,tag:3,movementSpeed:3,})
				lvbu.setDirection(-1);
				Macro.camFollow(Macro.unit(2),60);
				if(lvbu){
					Macro.doLater(2,function(){
						Macro.camMoveTo(cc.p(3500,"current"),1,1);
						Macro.camFollow(Macro.unit(3),60)
						Macro.unit(3).moveTo(100);
					})
				}
			}
			if(MapConfig.open_2&&Macro.unit(2)&&Macro.unit(2).hp<=0){ 
				MapConfig.open_2=false;
				Macro.camFollow(Macro.unit(3),60);
	            		var dialog = {
				        	timeToNext : 3,
				         	text : [
				         	{
				        		0:"吕布：老贼，我与你不共戴天！",
				        		},
				        		{
				        		0:"吕布：将你碎尸万段，也难解夺妻之恨!",
				        		},
//				        		{
//								0:"吕布：董贼已死，赵将军可班师回营了。",
//				        		},
				        	]
				        } 
				var func = function(){
					Macro.doLater(1,function(){
						g_sharedTaskManager.nextTask();
					});
					Macro.camFollow(g_sharedFightLayer.myhero,30);
				}
				Macro.doLater(1,function(){
					Dialog.create(7,dialog,func);
				});			
			}
	},
	unit :[
		[
			{time:0,id:"Gate",x:200,faction:1,hp:20000*(1+0.5*(gDifficulty-1)),tag:998},
			{time:0,id:"Gate",x:3600,faction:-1,hp:97680*(1+0.5*(gDifficulty-1)),drop:{gold:{num:38,ct:5}},},
            		{time:0,id:"WangYun",x:3250,faction:1,tag:1},
//			{time:0,id:"WangYun",x:450,faction:1,tag:1},


			{time:3,id:"shieldmanQun",x:3800,faction:-1,lvl:16,},
			{time:4,id:"pikemanQun",x:3800,faction:-1,lvl:16,},
			{time:5,id:"pikemanQun",x:3800,faction:-1,lvl:16,},

			{time:7,id:"bowmanQun",x:3800,faction:-1,lvl:16},
//			{time:8,id:"bowmanQun",x:3800,faction:-1,lvl:16},
			{time:9,id:"bowmanQun",x:3800,faction:-1,lvl:16},

			{time:16,id:"pikemanQun",x:3800,faction:-1,lvl:16,},
			{time:16,id:"pikemanQun",x:3800,faction:-1,lvl:16,},

			{time:20,id:"bowmanQun",x:3800,faction:-1,lvl:16},
			{time:21,id:"bowmanQun",x:3800,faction:-1,lvl:16},

			{time:25,id:"pikemanQun",x:3800,faction:-1,lvl:16},
			{time:26,id:"pikemanQun",x:3800,faction:-1,lvl:16},
			{time:27,id:"bowmanQun",x:3800,faction:-1,lvl:16},
			{time:29,id:"bowmanQun",x:3900,faction:-1,lvl:16},		
			{time:30,id:"bowmanQun",x:3900,faction:-1,lvl:16},

			{time:35,id:"pikemanQun",x:3800,faction:-1,lvl:16,},
			{time:36,id:"pikemanQun",x:3800,faction:-1,lvl:16,},

			{time:40,id:"bowmanQun",x:3800,faction:-1,lvl:16},
			{time:41,id:"bowmanQun",x:3800,faction:-1,lvl:16},

			{time:42,id:"shieldmanQun",x:3800,faction:-1,lvl:16,drop:{heal:{percent:0.1,ct:3}},},
			{time:46,id:"bowmanQun",x:3800,faction:-1,lvl:16},
			{time:49,id:"pikemanQun",x:3800,faction:-1,lvl:16},
			{time:53,id:"bowmanQun",x:3900,faction:-1,lvl:16},		
			{time:54,id:"mageQun",x:3900,faction:-1,lvl:16,drop:{heal:{percent:0.1,ct:3}},},

			{time:57,id:"bowmanQun",x:3800,faction:-1,lvl:16},
			{time:59,id:"bowmanQun",x:3800,faction:-1,lvl:16},

			{time:61,id:"pikemanQun",x:3800,faction:-1,lvl:16},
			{time:63,id:"bowmanQun",x:3800,faction:-1,lvl:16},
			{time:65,id:"shieldmanQun",x:3800,faction:-1,lvl:16},
			{time:67,id:"bowmanQun",x:3900,faction:-1,lvl:16},
		],
		[
			{time:8,id:"pikemanQun",x:3800,faction:-1,lvl:16},      
                
			{time:10,id:"bowmanQun",x:3800,faction:-1,lvl:16},
                
			{time:15,id:"pikemanQun",x:3800,faction:-1,lvl:16},
                
			{time:20,id:"bowmanQun",x:3800,faction:-1,lvl:16},
                
			{time:25,id:"pikemanQun",x:3800,faction:-1,lvl:16},
                
			{time:30,id:"pikemanQun",x:3800,faction:-1,lvl:16},
                
			{time:35,id:"bowmanQun",x:3800,faction:-1,lvl:16},

			{time:5,id:"DongZhuo",lvl:1,x:3640,faction:-1,tag:2,status:"unDead",unitType:"boss",spell:SpellConfig.DongZhuo_Stage1,
                hp:21000,
                stage:[
                    {hp:0.7,spell:SpellConfig.DongZhuo_Stage2,func:function(unit){
                                unit.chat("可恶的家伙！我要生啖你的血肉！");
                                g_sharedFightLayer.nextUnitWave();
                            }
                     },
                     {hp:0.5,spell:SpellConfig.DongZhuo_Stage3,func:function(unit){
                                
                                unit.chat("卫兵何在！取赵云首级赏千金封万户侯！",2);
                                unit.initAI({move:{posX:3300}})
//                                unit.moveTo(3000,true);
                                Macro.schedule(unit,function(){Macro.showMessage("董卓禁卫倾巢而出！");g_audioEffectPlay("res/sound/charge.ogg");},2,1);
                                
                                g_sharedFightLayer.nextUnitWave();
                            }
                     },
                ],
                func:function(unit){
                    unit.setVisible(false);
                    Macro.bossComeOutCgStart(unit,3500,1.5,function(){unit.chat(["老夫纵横沙场几十年，","从未荒废杀人之术！"]);});
                    var func1 = function(){
                        unit.setVisible(true);
                        unit.castAbility({ability:{id:"Rampage",fx:50,force:35,fiction:3.2,anim:{movementID:"attack2",time:1.8,stun:true,start:5,speed:0.5}}},true);
                        for(var i =1;i<=8;i++){
                            GameUnit.Fragment.create(unit,null,kit.rndInt(-12,-5),kit.rndInt(10,22));
                        }
                        g_sharedFightLayer.camShake(2,5);
                    }
                    Macro.schedule(unit,func1,1.1,1);
                },				
			},
//			{time:50,id:"specialFatMan",x:3800,faction:-1,lvl:15,},
		],
        [

			{time:3,id:"bowmanQun",x_tag:200,faction:-1,lvl:16,target_tag:2,smoke:1},		

			{time:7,id:"pikemanQun",x_tag:-100,faction:-1,lvl:16,target_tag:2,smoke:1},

			{time:11,id:"bowmanQun",x_tag:200,faction:-1,lvl:16,target_tag:2,smoke:1},	
			{time:17,id:"pikemanQun",x_tag:-150,faction:-1,lvl:16,target_tag:2,smoke:1},

			{time:25,id:"pikemanQun",x_tag:-200,faction:-1,lvl:16,target_tag:2,smoke:1},

			{time:29,id:"bowmanQun",x_tag:333,faction:-1,lvl:16,target_tag:2,smoke:1},	
			{time:30,id:"pikemanQun",x_tag:-223,faction:-1,lvl:16,target_tag:2,smoke:1},

			{time:38,id:"bowmanQun",x_tag:444,faction:-1,lvl:16,target_tag:2,smoke:1},
			{time:40,id:"bowmanQun",x_tag:253,faction:-1,lvl:16,target_tag:2,smoke:1},
                
			{time:45,id:"pikemanQun",x_tag:-222,faction:-1,lvl:16,target_tag:2,smoke:1},
                
			{time:55,id:"pikemanQun",x_tag:-333,faction:-1,lvl:16,target_tag:2,smoke:1},
                
        ],
            
        [
			{time:1,id:"bowmanQun",x_hero:400,faction:-1,lvl:16,smoke:true,func:function(){g_audioEffectPlay("res/sound/charge.ogg");}},		

			{time:1,id:"pikemanQun",x_hero:700,faction:-1,lvl:16,smoke:true},

//			{time:4,id:"bowmanQun",x_hero:500,faction:-1,lvl:16,smoke:true},	
			{time:4,id:"pikemanQun",x_hero:700,faction:-1,lvl:16,smoke:true},

			{time:7,id:"pikemanQun",x_hero:700,faction:-1,lvl:16,smoke:true,func:function(){g_audioEffectPlay("res/sound/charge.ogg");}},

			{time:9,id:"bowmanQun",x_hero:300,faction:-1,lvl:16,smoke:true},	
			{time:11,id:"pikemanQun",x_hero:700,faction:-1,lvl:16,smoke:true},

//			{time:14,id:"bowmanQun",x_hero:400,faction:-1,lvl:16,smoke:true},
			{time:14,id:"bowmanQun",x_hero:700,faction:-1,lvl:16,smoke:true},

			{time:15,id:"bowmanQun",x_hero:500,faction:-1,lvl:16,smoke:true,func:function(){g_audioEffectPlay("res/sound/charge.ogg");}},		

//			{time:17,id:"pikemanQun",x_hero:700,faction:-1,lvl:16,smoke:true},

			{time:19,id:"bowmanQun",x_hero:400,faction:-1,lvl:16,smoke:true},	
//			{time:21,id:"pikemanQun",x_hero:700,faction:-1,lvl:16,smoke:true},

			{time:24,id:"pikemanQun",x_hero:300,faction:-1,lvl:16,smoke:true,func:function(){g_audioEffectPlay("res/sound/charge.ogg");}},

			{time:27,id:"bowmanQun",x_hero:600,faction:-1,lvl:16,smoke:true},	
//			{time:32,id:"pikemanQun",x_hero:700,faction:-1,lvl:16,smoke:true},

			{time:33,id:"bowmanQun",x_hero:555,faction:-1,lvl:16,smoke:true},
			{time:36,id:"bowmanQun",x_hero:700,faction:-1,lvl:16,smoke:true},
                
        ],
	],		

	
	task:[
		
		{
			taskFinishLatency:2,
			win:[
				{type:"unitPosition",faction:1,posX:400,text:'护送王允回城',id:'WangYun',fadeOut:1.5,},
			],
			lose:[
				{type:"killUnit",faction:1,posX:100,id:'WangYun',noText:true,},
			],
			func:function(){
				g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero);
			},
			finishFunc:function(){
				Macro.flee();
			},
			update:function(){
				MapConfig.func_1();
				if(Macro.unit(1) && MapConfig.open_1_1){
					MapConfig.open_1_1=false;
					Macro.unit(1).moveTo(200);
				}
			},
		},
       	{
			taskTextShowLatency:2,
			win:[
					{type:"killUnit",faction:-1,text:'斩杀董卓',id:'DongZhuo11',},
				],
			lose:[
				
				],	
			func:function(){
			},	
			update:function(){
				MapConfig.func_2();
			}
		},		
	],
	init:function(){
		g_sharedFightLayer.registerEdge(3500,-1)

			g_sharedFightLayer.myhero ? g_sharedFightLayer.myhero.pos.x=3000 : 5;
	},
	config:{
		disable:{
		},
		drop:{rage:{chance:1,num:1},gold:{chance:0.5,num:160,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:702,gold:0,gem:0},
	}
};