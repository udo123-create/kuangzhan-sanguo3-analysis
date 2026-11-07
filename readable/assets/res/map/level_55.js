var MapConfig={
	open1:true,
	open1_2:true,
	open2:true,
	open2_2:true,
	open2_3:true,
		
	open2_4:true,
	open2_5:true,
	open2_6:true,
	open2_7:true,
	func1:function(){
		if(MapConfig.open1 && Macro.unit(1)){
			MapConfig.open1=false;
			Macro.allUnitAction(function(unit){
				unit.stand(true);
			});							                                            							         
			Macro.camFollow(Macro.unit(1));
			
	        var dialog = {
	            skip:true,
		        timeToNext : 1,
				text : [
				        {
				          0:"樊氏：赵将军名闻天下，今日一见果然威仪出众",
				        },
				        {
				          0:"赵云：夫人言重了",
				        },
				        {
				          0:"樊氏：只是不知这文武双全，是否名副其实？",
				        },
				       ]
			}
			var func = function(){
			    Macro.camFollow(g_sharedFightLayer.myhero);
			    Macro.allUnitAction(function(unit){
				    unit.setAI(true);
			    });							                                            							         
			}
			Dialog.create(7,dialog,func);
		}
		
		if(MapConfig.open1_2 && Macro.unit(1) && Macro.unit(1).hp<=1){
			MapConfig.open1_2=false;
			
			Macro.allUnitAction(function(unit){
		         unit.stand(true);
			});
	        
	        var dialog = {
	            skip:true,
		        timeToNext : 1,
				text : [
				        {
				          0:"樊氏：将军果然名不虚传，樊氏佩服",
				        },
				       ]
			}
			var func = function(){
			    Macro.unit(1).moveTo(3400,true);
				Macro.doLater(0.5,function(){
					Macro.unit(1).fadeOut();
			    });
				Macro.doLater(1,function(){
					g_sharedTaskManager.nextTask();
			    });
			}
			Dialog.create(2,dialog,func);
		}
	},
	func2:function(){
		if(MapConfig.open2 && Macro.unit(2)){
			MapConfig.open2=false;
			
			Macro.allUnitAction(function(unit){
				unit.stand(true);
			});							                                            							         
			Macro.camMoveTo(cc.p(3400,"current"),1,1);
			
	        var dialog = {
	            skip:true,
		        timeToNext : 1,
				text : [
				        {
				          0:"赵范：将军觉得家嫂如何？",
				        },
				        {
				          0:"赵云：樊夫人可谓才貌并举",
				        },
				        {
				          0:"赵范：家嫂寡居已有三载。",
				          1:"        若不嫌弃，与尊兄为妻如何",
				        },
				        {
				          0:"赵云：吾与汝即为泽袍，汝嫂即吾嫂，岂可乱来！",
				          1:"        居心叵测，看枪！",
				        },
				       ]
			}
			var func = function(){
			    Macro.camFollow(g_sharedFightLayer.myhero,60);
			    Macro.unit(2).setAI(true);
//			    setInterval(
//			       function(){
//			  	       Macro.unit(2).chat("快来人啊！");
//				       Effect.Smoke(Macro.unit(2).pos.x+275,160);
//				       g_sharedFightLayer.createUnit({time:0,id:"shieldmanQun",x:Macro.unit(2).pos.x+200,faction:-1,lvl:50,ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},});
//			 	       g_sharedFightLayer.createUnit({time:0,id:"shieldmanQun",x:Macro.unit(2).pos.x+250,faction:-1,lvl:50,ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},});
//				       g_sharedFightLayer.createUnit({time:0,id:"shieldmanQun",x:Macro.unit(2).pos.x+300,faction:-1,lvl:50,ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},});
//				       g_sharedFightLayer.createUnit({time:0,id:"shieldmanQun",x:Macro.unit(2).pos.x+350,faction:-1,lvl:50,ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},});
//			    },15000);
			}
			Dialog.create(11,dialog,func);
		}
		if(MapConfig.open2_4 && Macro.unit(2) && Macro.unit(2).hp<=Macro.unit(2).maxHp*0.8){
			    MapConfig.open2_4=false;
			    Macro.unit(2).chat("快来人啊！");
				Effect.Smoke(Macro.unit(2).pos.x+275,160);
				g_sharedFightLayer.createUnit({time:0,id:"shieldmanQun",x:Macro.unit(2).pos.x+200,faction:-1,lvl:50,ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},});
			 	g_sharedFightLayer.createUnit({time:0,id:"shieldmanQun",x:Macro.unit(2).pos.x+250,faction:-1,lvl:50,ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},});
				g_sharedFightLayer.createUnit({time:0,id:"shieldmanQun",x:Macro.unit(2).pos.x+300,faction:-1,lvl:50,ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},});
				g_sharedFightLayer.createUnit({time:0,id:"shieldmanQun",x:Macro.unit(2).pos.x+350,faction:-1,lvl:50,ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},});
	    }
		if(MapConfig.open2_5 && Macro.unit(2) && Macro.unit(2).hp<=Macro.unit(2).maxHp*0.6){
			    MapConfig.open2_5=false;
			    Macro.unit(2).chat("快来人啊！");
				Effect.Smoke(Macro.unit(2).pos.x+275,160);
				g_sharedFightLayer.createUnit({time:0,id:"shieldmanQun",x:Macro.unit(2).pos.x+200,faction:-1,lvl:50,ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},});
			 	g_sharedFightLayer.createUnit({time:0,id:"shieldmanQun",x:Macro.unit(2).pos.x+250,faction:-1,lvl:50,ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},});
				g_sharedFightLayer.createUnit({time:0,id:"shieldmanQun",x:Macro.unit(2).pos.x+300,faction:-1,lvl:50,ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},});
				g_sharedFightLayer.createUnit({time:0,id:"shieldmanQun",x:Macro.unit(2).pos.x+350,faction:-1,lvl:50,ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},});
	    }
		if(MapConfig.open2_6 && Macro.unit(2) && Macro.unit(2).hp<=Macro.unit(2).maxHp*0.4){
			    MapConfig.open2_6=false;
			    Macro.unit(2).chat("快来人啊！");
				Effect.Smoke(Macro.unit(2).pos.x+275,160);
				g_sharedFightLayer.createUnit({time:0,id:"shieldmanQun",x:Macro.unit(2).pos.x+200,faction:-1,lvl:50,ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},});
			 	g_sharedFightLayer.createUnit({time:0,id:"shieldmanQun",x:Macro.unit(2).pos.x+250,faction:-1,lvl:50,ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},});
				g_sharedFightLayer.createUnit({time:0,id:"shieldmanQun",x:Macro.unit(2).pos.x+300,faction:-1,lvl:50,ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},});
				g_sharedFightLayer.createUnit({time:0,id:"shieldmanQun",x:Macro.unit(2).pos.x+350,faction:-1,lvl:50,ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},});
	    }
		if(MapConfig.open2_7 && Macro.unit(2) && Macro.unit(2).hp<=Macro.unit(2).maxHp*0.2){
			    MapConfig.open2_7=false;
			    Macro.unit(2).chat("快来人啊！");
				Effect.Smoke(Macro.unit(2).pos.x+275,160);
				g_sharedFightLayer.createUnit({time:0,id:"shieldmanQun",x:Macro.unit(2).pos.x+200,faction:-1,lvl:50,ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},});
			 	g_sharedFightLayer.createUnit({time:0,id:"shieldmanQun",x:Macro.unit(2).pos.x+250,faction:-1,lvl:50,ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},});
				g_sharedFightLayer.createUnit({time:0,id:"shieldmanQun",x:Macro.unit(2).pos.x+300,faction:-1,lvl:50,ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},});
				g_sharedFightLayer.createUnit({time:0,id:"shieldmanQun",x:Macro.unit(2).pos.x+350,faction:-1,lvl:50,ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},});
	    }
	    
		if(MapConfig.open2_2 && Macro.unit(2) && Macro.unit(2).hp<=1){
			MapConfig.open2_2=false;
//			clearInterval();//清除计时

			Macro.allUnitAction(function(unit){
				unit.stand(true);
			});
			Macro.camMoveTo(cc.p(3400,"current"),1,1);
			Macro.unit(3).moveTo(3400);
	        var dialog = {
	            skip:true,
		        timeToNext : 1,
				text : [
				        {
				          0:" ",
				        },
				        {
				          0:"樊氏：此亦美事，将军何如此？",
				        },
				        {
				          0:"赵云：主公新定江汉，枕席未安",
				          1:"      云安敢废事而贪欢",
				        },
				        {
				          0:"赵范：子龙乃真丈夫，吾不再强求",
				        },
				       ]
			}
			var func = function(){
			    g_sharedTaskManager.nextTask();
			    Macro.camFollow(g_sharedFightLayer.myhero,60);
			    Macro.flee();
			}
			Dialog.create(9,dialog,func);
			
		}
		if(MapConfig.open2_3 && Macro.unit(3) && Macro.unit(3).pos.x<=3400){
			    MapConfig.open2_3=false;
			    Macro.unit(3).stand(true);
	    }
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:150000*(1+0.5*(gDifficulty-1)),},
            {time:0,id:"Gate",x:3600,faction:-1,hp:850000*(1+0.5*(gDifficulty-1)),drop:{gold:{num:2,ct:5}},},
		
			{time:0,id:"FanShi",x:3400,faction:-1,unitType:"boss",tag:1,status:{unDead:1},unitType:"boss",
				ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},
				hp:250000*Math.pow(1.5,(gDifficulty-1)),attack:8500*Math.pow(1.5,(gDifficulty-1)),
			},

		],
		[
			{time:12,id:"specialShieldMan",faction:-1,lvl:43,drop:{heal:{percent:0.2,ct:2}},},
			{time:13,id:"specialShieldMan",faction:-1,lvl:43,drop:{heal:{percent:0.2,ct:3}},},
			{time:0,id:"ZhaoFan",x:3400,faction:-1,unitType:"boss",tag:2,status:{unDead:1},unitType:"boss",
			 ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},
			hp:240000*Math.pow(1.5,(gDifficulty-1)),attack:7000*Math.pow(1.5,(gDifficulty-1)),
			},
			{time:0,id:"FanShi",x:3800,faction:-1,tag:3,status:{unDead:1},func:function(unit){unit.stand(3);},
			  spell:{
	                  ability:{id:"powerStrike"},
                      cooldown:6000,
                      config:{castTime:3,},
              },
			},
		],
	],	
	task:[
		{
            taskTextShowLatency:8,
			win:[
				  {type:"killUnit",faction:-1,text:'名闻天下',id:'null',},
			],
			lose:[
			],
    		func:function(){
       			Macro.setGameEdge(0,3800);
    		},
			update:function(){
				MapConfig.func1();
			},
            finishFunc:function(){
			},
		},
		{
			win:[
				  {type:"killUnit",faction:-1,id:'ZhaoFan',text:'怒斥赵范'},
			],
			lose:[
			],
			func:function(){
                Macro.setGameEdge(0,3800);
            },
			update:function(){
				MapConfig.func2();
			},
            finishFunc:function(){
			},
		},
	],
	init:function(){
	},
	config:{
		disable:{
		},
	}
};