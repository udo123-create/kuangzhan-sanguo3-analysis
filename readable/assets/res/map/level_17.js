var MapConfig={
	open:true,
	open_1:false,
	func_1:function(){
		 if(MapConfig.open&&Macro.unit(1)){
	            	MapConfig.open=false;
	            	MapConfig.open_1=true;
	            	Macro.setUnitSpawn(false);
		     	Macro.allUnitAction(function(unit){
				unit.stand(true);
	                  	});
		            Macro.camMoveTo(cc.p(3300,"current"),1,1);
		            var dialog = {
			        	timeToNext : 3.5,
			         	text : [
				        		{
				        		0:"吕布：小贼！你倒是自己送上门来了？既然你一心寻死，今日我便成全你！",
				        		},
				        		{
				        		0:"赵云：纵使龙潭虎穴，子龙也要闯一闯！",
				        		},
					]
			   } 
			var func = function(){
				Macro.doLater(1,function(){
	//					Macro.camMoveTo(cc.p(g_sharedFightLayer.myhero,"current"),1,1);
	//					Macro.camFollow(g_sharedFightLayer.myhero);
					Macro.setUnitSpawn(true);
					g_sharedFightLayer.myhero && g_sharedFightLayer.myhero.stand(false);
		     			Macro.allUnitAction(function(unit){
		                 			unit.setAI(true);
		              		});
				})
			}
			Dialog.create(8,dialog,func);
			Macro.doLater(4.5,function(){
				Macro.camMoveTo(cc.p(g_sharedFightLayer.myhero.pos.x-100,"current"),1,1);
				Macro.doLater(6,function(){
					Macro.camFollow(g_sharedFightLayer.myhero,60);
				});
			});
		}
		if(MapConfig.open_1&&Macro.unit(1)&&Macro.unit(1).hp<=Macro.unit(1).maxHp*0.3){
	            	MapConfig.open_1=false;
	            	Macro.setUnitSpawn(false);
	            	g_sharedFightLayer.createUnit({time:0,id:"HaoMeng",name:"郝萌",tag:2,x:3550,faction:-1,ai:{tryToMove:1,},func:function(unit){unit.stand(1);},});
		     	Macro.allUnitAction(function(unit){
				unit.stand(true);
	                  	});
	            	Macro.camMoveTo(cc.p(3300,"current"),1,1);
			var dialog = {
				skip:true,
				timeToNext : 2.5,
				         text : [
				        		{
				        		0:"郝萌：将军，城中有变！董卓他......",
				        		},
				        		{
				        		0:"吕布：义父？",
				        		},
				        	]
			} 
			var func = function(){
				Macro.doLater(0.5,function(){
					Macro.camMoveTo(cc.p(g_sharedFightLayer.myhero.pos.x,"current"),1,1);
	//					Macro.camFollow(g_sharedFightLayer.myhero);
	//					Macro.setUnitSpawn(true);
					g_sharedFightLayer.myhero.stand(true);
					Macro.unit(1).direction=1;
					Macro.unit(1).moveTo(4500);
					Macro.doLater(1,function(){
						Macro.unit(1).fadeOut();
						Macro.doLater(1,function(){
							g_sharedTaskManager.nextTask();
						})
					})
				})
			}
			Dialog.create(5.5,dialog,func);
		}
	}, 	
//	}
	unit :[
		[
			{time:0,id:"Gate",x:200,faction:1,hp:15000*(1+0.5*(gDifficulty-1)),},
			{time:0,id:"Gate",x:3600,faction:-1,hp:77245*(1+0.5*(gDifficulty-1)),drop:{gold:{num:22,ct:5}},},
			{time:0,id:"pikemanQun",x:1000,faction:-1,lvl:13,},
			{time:1,id:"pikemanQun",x:2000,y:150,faction:-1,lvl:13,},
			{time:2,id:"pikemanQun",x:2200,y:150,faction:-1,lvl:13,},
			{time:2,id:"shieldmanQun",x:2200,y:150,faction:-1,lvl:13,},
			{time:3,id:"pikemanQun",x:3900,y:150,faction:-1,lvl:13,},
			{time:5,id:"pikemanQun",x:2600,faction:-1,lvl:13,},
			{time:7,id:"pikemanQun",x:2800,faction:-1,lvl:13,},
			{time:9,id:"pikemanQun",x:3800,faction:-1,lvl:13,},
			{time:12,id:"pikemanQun",x:3800,faction:-1,lvl:13,},
			{time:15,id:"shieldmanQun",x:3800,faction:-1,lvl:13,},
			{time:19,id:"pikemanQun",x:3500,faction:-1,lvl:13,},
			{time:23,id:"shieldmanQun",x:3800,faction:-1,lvl:13,},
			{time:25,id:"pikemanQun",x:3900,y:150,faction:-1,lvl:13,},
			{time:28,id:"pikemanQun",x:3800,faction:-1,lvl:13,},
			{time:31,id:"pikemanQun",x:3800,faction:-1,lvl:13,},
			{time:38,id:"shieldmanQun",x:3800,faction:-1,lvl:13,},
			{time:40,id:"pikemanQun",x:3800,faction:-1,lvl:13,},
			{time:42,id:"pikemanQun",x:3800,faction:-1,lvl:13,},
			{time:44,id:"pikemanQun",x:3800,faction:-1,lvl:13,},
			{time:53,id:"pikemanQun",x:3800,faction:-1,lvl:13,},
			{time:55,id:"LiJue",lvl:1,x:3800,faction:-1,unitType:"boss",drop:{heal:{percent:0.1,ct:2}},},	
			{time:58,id:"shieldmanQun",x:3800,faction:-1,lvl:13,},
			{time:60,id:"pikemanQun",x:3800,faction:-1,lvl:13,},
			{time:62,id:"pikemanQun",x:3800,faction:-1,lvl:13,},
			{time:65,id:"bowmanQun",x:3800,faction:-1,lvl:13,},
			{time:68,id:"bowmanQun",x:3800,faction:-1,lvl:13,},
			{time:70,id:"bowmanQun",x:3800,faction:-1,lvl:13,},
//			{time:88,id:"shieldmanQun",x:3800,faction:-1,lvl:13,},
//			{time:90,id:"bowmanQun",x:3800,faction:-1,lvl:13,},
		],
		[
			{time:0,id:"shieldmanQun",x:3800,faction:-1,lvl:13,},
			{time:3,id:"shieldmanQun",x:3800,faction:-1,lvl:13,},
			{time:4,id:"bowmanQun",x:3800,faction:-1,lvl:13,},
			{time:5,id:"bowmanQun",x:3800,faction:-1,lvl:13,},
			{time:6,id:"bowmanQun",x:3800,faction:-1,lvl:13,drop:{heal:{percent:0.1,ct:2}},},
				
			{time:8,id:"LvBu",lvl:1,x:3650,faction:-1,unitType:"boss",tag:1,status:{unDead:1},drop:{gold:{num:35,ct:3},heal:{percent:0.1,ct:2}},
			attackRange:350,attackRate:1,antiInteruptLvl:2,movementSpeed:1.8,
				spell:{
			ability:{id:"moonChopped",damage:600,range:400,name:"天下无双",},
				cooldown:15,
				config:{
					alert:{type:"direction",width:1050},
				     castTime:3.1,channelInterval:1,
					anim:{movementID:"attack16",speed:1,start:0,time:1,stunTimeOnFinish:0.5,stun:true}
					},
		},
			},
				
			{time:13,id:"pikemanQun",x:3600,faction:-1,lvl:13,},
			{time:18,id:"bowmanQun",x:3600,faction:-1,lvl:13,},	
//			{time:16,id:"pikemanQun",x:3600,faction:-1,lvl:13,},
			{time:23,id:"pikemanQun",x:3600,faction:-1,lvl:13,},
			{time:30,id:"shieldmanQun",x:3600,faction:-1,lvl:13,},
			{time:38,id:"pikemanQun",x:3600,faction:-1,lvl:13,},	

			{time:43,id:"pikemanQun",x:3600,faction:-1,lvl:13,},
			{time:45,id:"bowmanQun",x:3600,faction:-1,lvl:13,},
			{time:50,id:"shieldmanQun",x:3600,faction:-1,lvl:13,},	
		],
	],	
	task:[
		{
//			taskFinishLatency:11,
			win:[
				{type:"killUnit",faction:-1,text:'斩杀李稚然',id:'LiJue'},	
		
			],
			lose:[
//				{type:"time",require:133,text:'限时破城',textNum:true,},
			],
			finishFunc:function(){
				Macro.flee();
			},
		},
       		{
			win:[
				{type:"killUnit",faction:-1,text:'击败吕布',id:'YuanShu'},
		
			],
			lose:[
//				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
			],
			finishFunc:function(){
				Macro.flee();
			},
			update:function(){
	           		MapConfig.func_1();
			},
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
		drop:{rage:{chance:0.5,num:1.2},gold:{chance:0.5,num:120,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:535,gold:0,gem:0},
	}
};