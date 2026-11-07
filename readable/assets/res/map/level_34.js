var MapConfig={
	open:true,
	open_1:true,
	func_1:function(){
 		if(MapConfig.open&&g_sharedFightLayer.myhero&&g_sharedFightLayer.myhero.pos.x>=2000){
	            	MapConfig.open=false;
		     	Macro.allUnitAction(function(unit){
				unit.stand(true);
	                  	});
	                  	Macro.setUnitSpawn(false);
	            	Macro.camMoveTo(cc.p(2100,"current"),1,1);
			var dialog = {
				skip:true,
				timeToNext : 2.5,
				text : [
			        		{
			        		0:"刘备：我已两次前往隆中，未曾见到诸葛先生。",
			        		},
			        		{
			        		0:"赵云：让子龙去前方探探。",
			        		},
				]
			} 
			var func = function(){
				Macro.doLater(1,function(){
	//				Macro.camMoveTo(cc.p(g_sharedFightLayer.myhero,"current"),1,1);
					g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero);
					Macro.setUnitSpawn(true);
					g_sharedFightLayer.myhero && g_sharedFightLayer.myhero.stand(false);
			 		Macro.allUnitAction(function(unit){
	                 				unit.setAI(true);
	              			});
					Macro.unit(1).direction=1;
					Macro.doLater(1,function(){
						Macro.unit(1).fadeOut();
						g_sharedTaskManager.nextTask();
					})
				})
			}
			Dialog.create(7.5,dialog,func);
		}
	},
	func_2:function(){
		if(MapConfig.open_1&&Macro.unit(2)&&Macro.unit(2).hp<=Macro.unit(2).maxHp*0.2){
			MapConfig.open_1=false;
		     	Macro.allUnitAction(function(unit){
				unit.stand(true);
	                  	});
	                  	Macro.setUnitSpawn(false);
	                  	var dialog = {
	                  		skip:true,
				timeToNext : 3.3,
				text : [
			        		{
			        		0:"？？？：此地乃这乱世中难得的清静太平，你们岂敢擅闯？！",
			        		},
			        		{
			        		0:"赵云：隆中虽静，可曾想过山外的涂炭苍生？",
			        		1:"             我们来请诸葛先生出山，给天下一个太平！",
			        		},
			        		{
			        		0:"赵云：如果先生知道诸葛孔明的信息，还请告诉我们。",
			        		},
			        		{
			        		0:"？？？：......远在天边，近在眼前。",
			        		},
				]
			}
			var func = function(){
				Macro.doLater(1,function(){
					g_sharedTaskManager.nextTask();
				})
			}
			Dialog.create(16.5,dialog,func); 
		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:40000*(1+0.5*(gDifficulty-1)),},
			{time:0,id:"Gate",x:3600,faction:-1,hp:269670*(1+0.5*(gDifficulty-1)),drop:{gold:{num:150,ct:5}},},
		
			{time:0,id:"Block",x:2000,hp:48450,faction:-1,deadOnNextStage:1,},

			{time:0,id:"mageQun",x:1000,faction:-1,lvl:24,},
			{time:2,id:"mageQun",x:1800,faction:-1,lvl:24,},
			{time:6,id:"mageQun",x:1800,y:165,faction:-1,lvl:24},
		
			{time:13,id:"mageQun",x:2200,faction:-1,lvl:24,},
			{time:16,id:"mageQun",x:2200,y:140,faction:-1,lv:28,},
//			{time:10,id:"huangJinPikeMan",x:3600,faction:-1,hp:1500,attack:50,},
//			{time:12,id:"huangJinPikeMan",x:3600,faction:-1,hp:1500,attack:50,},
//			{time:16,id:"shieldMan",x:3600,y:150,faction:-1,hp:5000,attack:20,},
//			{time:17,id:"huangJinPikeMan",x:3600,y:150,faction:-1,hp:1500,attack:50,},
//			{time:21,id:"shieldMan",x:3600,faction:-1,hp:5000,attack:80,},
//			{time:25,id:"huangJinPikeMan",x:3600,faction:-1,hp:1500,attack:50,},
//			
//			{time:35,id:"huangJinPikeMan",x:3600,faction:-1,hp:1500,attack:50,},
//			{time:38,id:"huangJinPikeMan",x:3600,faction:-1,hp:1500,attack:50,},
			{time:0,id:"LiuBei",x:2300,faction:1,direction:-1,attack:50,tag:1,func:function(unit){unit.stand(1);
			}},
		],
		[
			//空阶段，演戏用
		],
		[
           	{time:0,id:"mageQun",x:4000,faction:-1,lvl:24,},
			{time:1,id:"mageQun",x:4000,faction:-1,lvl:24,},
			{time:5,id:"healerQun",x:4000,faction:-1,lvl:24,},
		//	{time:6,id:"shieldMan",x:4000,faction:-1,lvl:2,drop:{heal:{percent:0.2,ct:1}}},
			{time:10,id:"mageQun",x:4000,y:140,faction:-1,lvl:24,},

//			{time:15,id:"mageQun",x:4000,faction:-1,lvl:24,drop:{gold:{num:300,ct:2}}},
//			{time:16,id:"mageQun",x:4000,y:150,faction:-1,lvl:24,drop:{gold:{num:300,ct:2}}},
			{time:18,id:"healerQun",x:4000,y:150,faction:-1,lvl:24,},
			{time:20,id:"mageQun",x:4000,faction:-1,lvl:24,},


			{time:21,id:"ZhugeLiang",name:"???",lvl:1,x:3800,faction:-1,attack:250,unitType:"boss",tag:2,status:{unDead:1},drop:{gold:{num:300,ct:3}},},	
			{time:21,id:"mageQun",x:3700,faction:-1,lvl:24,},
//			{time:28,id:"mageQun",x:4000,faction:-1,lvl:24,drop:{gold:{num:300,ct:2}}},
			{time:30,id:"healerQun",x:4000,y:150,faction:-1,lvl:24,drop:{gold:{num:10,ct:2}}},
//			{time:31,id:"mageQun",x:4000,y:150,faction:-1,lvl:24,},
//			{time:40,id:"mageQun",x:4000,faction:-1,lvl:24,},
			{time:41,id:"healerQun",x:4000,faction:-1,lvl:24,drop:{heal:{percent:0.1,ct:2}}},
			{time:50,id:"mageQun",x:4000,faction:-1,lvl:24,},
//			{time:51,id:"mageQun",x:4000,faction:-1,lvl:24,drop:{heal:{percent:0.2,ct:1}}},
//			{time:60,id:"mageQun",x:4000,faction:-1,lvl:24,},
			{time:61,id:"healerQun",x:4000,faction:-1,lvl:24,drop:{heal:{percent:0.1,ct:2}}},
			{time:61,id:"mageQun",x:4000,faction:-1,lvl:24,drop:{heal:{percent:0.1,ct:2}}},
		],
	],	
	task:[
		{
//			taskFinishLatency:2.5,
			win:[
				{type:"allClear",faction:-1,text:'与刘备会合',textNum:true,},
			],
			lose:[
//				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
			],
			func:function(){
				Macro.setGameEdge(0,2100);
				Macro.doLater(5,function(){
					Macro.showMessage('进入隆中，不能带兵',4);
				})	
			},
			update:function(){
//	           		MapConfig.func_1();
	      	 	},
		},
		{
//			taskFinishLatency:2.5,
			win:[
				{type:"killUnit",faction:-1,text:'与刘备对话',id:'DiaoChan',},
			],
			lose:[
//				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
			],
			func:function(){
				Macro.setGameEdge(0,2500);
//				Macro.doLater(5,function(){
//					Macro.showMessage('进入隆中，不能带兵',4);
//				})	
			},
			update:function(){
	           		MapConfig.func_1();
	      	 	},
		},
		{
			win:[
				{type:"killUnit",faction:-1,text:'寻找诸葛亮',id:'general1',},
//				{type:"siege",faction:-1,text:'攻破敌方城门'},				
			],
			lose:[
//				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
//				{type:"time",require:100,text:"100秒内攻破敌城"},
			],
			func:function(){
				Macro.setGameEdge(0,3800);	
			},
			update:function(){
	           		MapConfig.func_2();
	      	 	},	
        },
	
	],
	init:function(){
		g_sharedFightLayer.registerEdge(3500,-1)
//		var ct = 0;
//	        var func = function(unit){
//	            ct++;
//	                 cc.log("该阶段敌人全灭检测:"+ct+"人击杀!共需:"+g_sharedTaskManager.getStageFactionUnitCount(-1,0))           
//	            if(ct>=g_sharedTaskManager.getStageFactionUnitCount(-1,0)){
//	                			               	   Macro.allUnitAction(function(unit){
//							if(unit!=g_sharedFightLayer.myhero){
//								unit.setAI(false);
//						};
//				});
//	                g_trigger_unitDead.release(this);
//	            }
//	        }
//	        g_trigger_unitDead.add(func)

//		g_sharedFightLayer.myhero.pos.x = 500;
//		g_sharedFightLayer.setCam(cc.p(2000,null));
//		g_sharedFightLayer.camMoveBy(cc.p(-500,null),0,5);
	},
	config:{
		disable:{
//			myhero:true,ability:true,
			unit:true,
		},
		drop:{rage:{chance:1,num:1},gold:{chance:0.5,num:520,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:2584,gold:0,gem:0},
	}
};