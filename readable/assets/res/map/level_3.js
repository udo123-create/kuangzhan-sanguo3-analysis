var MapConfig={
	ct:0,
	open_1:true,
	open_2:true,
	open_2_1:true,
	open_2_2:true,
	open_3:true,
	open_3_1:true,
	open_3_2:true,
	open_3_3:true,
	func_1:function(){
		if(MapConfig.open_1&&Macro.unit(2)){
			MapConfig.open_1=false;
			Macro.allUnitAction(function(unit){
		                        unit.stand(true);
			});
			var dialog = {
						skip:true,
			        	timeToNext : 2.5,
			         	text : [
			         	    {
			        		0:"士兵：报，皇叔正在前方攻打黄巾军",
			        		},
			        		{
			        		0:"赵云：我军速前去接应",
			        		},
			        	]
			}
			var func = function(){
          			Macro.doLater(0.5,function(){
          				Macro.allUnitAction(function(unit){
		                        		unit.setAI(true);
					});
					g_sharedTaskManager.nextTask();
				});
	        		}
	        		Dialog.create(5.5,dialog,func);
		}
	},
	func_2:function(){
//		if(MapConfig.open_2_2 && g_sharedGameLayer.getMenuButton("unit2") && g_sharedGameLayer.getMenuButton("unit2").cooldownData && g_sharedGameLayer.getMenuButton("unit2").cooldownData.timer<=0 ){
//			MapConfig.open_2_2=false;
//			Macro.guideButton("unit2",10000,"速速造兵支援前线",false,true,winSize.width/2,160);
//		}
		if(MapConfig.open_2 && Macro.unit(5)&& Macro.unit(5).hp<0){
			MapConfig.open_2=false;
			Macro.setGameEdge(0,3800);
		}
		if(MapConfig.open_2_1 && g_sharedFightLayer.myhero && g_sharedFightLayer.myhero.pos.x>1700 && !MapConfig.open_2){	
	       		MapConfig.open_2_1=false;
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
			        		0:"赵云：公孙将军派我前来接应皇叔回营！",
			        		},
			        		{
			        		0:"刘备：黄巾贼势大，子龙切不可轻敌。",
			        		},
			        		{
			        		0:"赵云：皇叔且放心，看我大破敌军",
			        		},
			        	]
			        } 
			var func = function(){
		//		Macro.setGameEdge(0,3800);
				Macro.doLater(1,function(){
					g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero,10);
					Macro.setUnitSpawn(true);
					g_sharedFightLayer.myhero && g_sharedFightLayer.myhero.stand(false);
     					Macro.allUnitAction(function(unit){
                 					unit.setAI(true);
              				});
					Macro.unit(1).direction=1;
					Macro.unit(1).moveTo(3800);
					Macro.doLater(2,function(){
					Macro.unit(1).fadeOut();
						Macro.doLater(1,function(){
							g_sharedTaskManager.nextTask();
						})
					});
					Macro.unit(50).dead();
				})
			}
			Macro.guideArrow(false);
			Dialog.create(12,dialog,func);
		  }
	},
	func_3:function(){
		if(MapConfig.open_3 && Macro.unit(6)&& Macro.unit(6).hp <= Macro.unit(6).maxHp*0.9){
			MapConfig.open_3=false;
			Macro.showMessage('多多造兵，更快破城',5);
		}
		if(MapConfig.open_3_1 && Macro.unit(6)&& Macro.unit(6).hp <= Macro.unit(6).maxHp*0.4){
			MapConfig.open_3_1=false;
			Macro.showMessage('多多造兵，更快破城',5);
		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:6000*(1+0.5*(gDifficulty-1)),},
            {time:0,id:"Gate",x:3600,faction:-1,hp:15000*(1+0.5*(gDifficulty-1)),drop:{gold:{num:2,ct:5}},tag:6},
			{time:0,id:"pikemanShu",x:320,faction:1,lvl:1,tag:2,},
			{time:0,id:"pikemanShu",x:700,faction:1,lvl:2,},
			{time:0,id:"pikemanShu",x:380,faction:1,lvl:1,},
			{time:0,id:"bowManShu",x:300,faction:1,lvl:1,},
			{time:0,id:"bowManShu",x:280,faction:1,lvl:1,},
		],
		[
			{time:0,id:"Block",x:2000,hp:8000,faction:-1,tag:50,},
			{time:0,id:"shieldMan",x:1300,faction:-1,lvl:1,},
			{time:2,id:"shieldMan",x:1800,faction:-1,lvl:1,},
			{time:6,id:"shieldMan",x:1800,y:165,faction:-1,lvl:1},
			{time:9,id:"shieldMan",x:2200,y:165,faction:-1,lvl:1},
			{time:12,id:"shieldMan",x:2200,faction:-1,lvl:1,tag:3,},
			{time:15,id:"shieldMan",x:2200,faction:-1,lvl:1,tag:4,},
			{time:17,id:"shieldMan",x:2200,faction:-1,lv:1,tag:5,drop:{heal:{percent:0.1,ct:2}},},
		    {time:0,id:"LiuBei",name:"刘备",x:2300,faction:1,direction:-1,hp:1500,attack:50,tag:1,func:function(unit){unit.stand(1);}},
		],
		[
            {time:0,id:"shieldMan",x:3500,faction:-1,lvl:1,},
            {time:0,id:"shieldMan",x:3600,faction:-1,lvl:1,},
           	{time:0,id:"shieldMan",x:4000,faction:-1,lvl:1,},
//			{time:1,id:"huangJinPikeMan",x:4000,faction:-1,lvl:2,},
//			{time:2,id:"huangJinPikeMan",x:4000,faction:-1,lvl:2,},
			{time:3,id:"shieldMan",x:4000,faction:-1,lvl:2,},
			{time:10,id:"shieldMan",x:4000,y:140,faction:-1,lvl:3,},

			{time:15,id:"huangJinPikeMan",x:4000,faction:-1,lvl:2,},
			{time:18,id:"huangJinPikeMan",x:4000,y:150,faction:-1,lvl:3,},
			{time:20,id:"shieldMan",x:4000,y:150,faction:-1,lvl:2,drop:{heal:{percent:0.1,ct:2}},},
			{time:23,id:"huangJinPikeMan",x:4000,faction:-1,lvl:3,},


			{time:28,id:"PeiyuanShao",lvl:1,x:3800,faction:-1,attack:250,unitType:"boss",drop:{gold:{num:3,ct:3}}},	
//			{time:22,id:"huangJinPikeMan",x:4000,faction:-1,lvl:3,},
//			{time:30,id:"huangJinPikeMan",x:4000,faction:-1,lvl:2,},
//			{time:30,id:"shieldMan",x:4000,y:150,faction:-1,lvl:2,},
			{time:35,id:"huangJinPikeMan",x:4000,y:150,faction:-1,lvl:3,},
//			{time:40,id:"huangJinPikeMan",x:4000,faction:-1,lvl:3,},
			{time:45,id:"huangJinPikeMan",x:4000,faction:-1,lvl:3,drop:{heal:{percent:0.1,ct:2}},},
//			{time:50,id:"huangJinPikeMan",x:4000,faction:-1,lvl:3,},
			{time:55,id:"huangJinPikeMan",x:4000,faction:-1,lvl:3,},
			{time:60,id:"huangJinPikeMan",x:4000,faction:-1,lvl:3,},
//			{time:61,id:"shieldMan",x:4000,faction:-1,lvl:3,},
//			{time:65,id:"huangJinPikeMan",x:4000,faction:-1,lvl:3,},
			{time:70,id:"huangJinPikeMan",x:4000,faction:-1,lvl:3,},
//			{time:75,id:"shieldMan",x:4000,faction:-1,lvl:3,},
//			{time:76,id:"huangJinPikeMan",x:4000,faction:-1,lvl:3,},
		],
	],	
	task:[
		{
            taskTextShowLatency:0,
//          taskFinishLatency:5,  
			win:[
				{type:"killUnit",faction:-1,text:'与孙坚会合',id:'DiaoChan',noText:true,},
			],
			lose:[
			],
			func:function(){
				Macro.setGameEdge(0,2100);
			},
			update:function(){
				MapConfig.func_1();
			}
		},
		{
//			taskFinishLatency:11,
			win:[
				{type:"killUnit",faction:-1,id:'DiaoChan',text:'前去接应刘备',},
			],
			lose:[
			],
			func:function(){
				Macro.doLater(6,function(){
					Macro.guideArrow(true,"right",2150);
					Macro.showMessage('枪兵可克制盾兵！',6);
				})
				Macro.doLater(25,function(){
					Macro.showMessage('速速造兵支援前线！',7);
				})	
			},
			update:function(){
				MapConfig.func_2();
			} 
		},
		{
			win:[
				{type:"siege",faction:-1,text:'攻破前方城门'},				
			],
			lose:[
			],
			func:function(){
				Macro.doLater(7,function(){
					Macro.showMessage('前去攻打敌城',5);
//					Macro.guideArrow(true,"right",3200);
				})	
			},
			finishFunc:function(){
				Macro.flee();
			},	
			update:function(){
				MapConfig.func_3();
//				MapConfig.t += 1;
//				if(Macro.unit(10)&& Macro.unit(10).attacker!=g_sharedFightLayer.myhero&&MapConfig.t>300){
//					MapConfig.t=0;
//					Macro.showMessage('速去攻打敌城门',2)
//				}
			},
        },
	
	],
	init:function(){
		g_sharedFightLayer.registerEdge(3500,-1)
	},
	config:{
		disable:{
//			unit:true,ability:true,  //不能出兵  不能用技能
		},
		drop:{rage:{chance:0.5,num:1.2},gold:{chance:0.5,num:17,type:"total"},},
		recommendItem:{type:"soldier",content:{id:"pikeman"},text:"升级你的枪兵吧",forceGuide:true},
		gameEdge:{left:0,right:3800},
		reward:{exp:163,gold:0,gem:0},
		showTitleLatency:7.5,
	}
};