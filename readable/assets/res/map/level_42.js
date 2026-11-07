var MapConfig={
	open:true,
	open_1:true,      
	open_2:true,  
	open_3:true,  
	func_1:function(){
		if(MapConfig.open&&Macro.unit(1)&&Macro.unit(1).hp<=Macro.unit(1).maxHp*0.4){
			MapConfig.open=false;
			Macro.allUnitAction(function(unit){
		                        unit.stand(true);
			});
			var dialog = {
				skip:true,
				timeToNext : 3,
				text : [
			        		{
			        		0:"孙尚香：没想到你这厮还挺厉害的嘛，那就留在本郡主旁边保护我吧。",
			        		},
			        		{
			        		0:"赵云：............我怎么变成保姆了...",
			        		},
				]
			}
			var func = function(){
	     			Macro.allUnitAction(function(unit){
                     			unit.setAI(true);
                  			});
                  			Macro.unit(1).hp=100000;
                  			Macro.unit(1).maxHp=100000;
                  			Macro.unit(1).setFaction(1);
                  			Macro.unit(1).direction=1;
                  			Macro.unit(1).movementSpeed=1;
                  			Macro.setUnitHpFrameVisible(Macro.unit(1),false);
                  			g_sharedTaskManager.nextTask();
			}
			Dialog.create(7,dialog,func); 
		}
	},
	func_2:function(){
		if(MapConfig.open_1&&g_sharedFightLayer.myhero && g_sharedFightLayer.myhero.pos.x>=2810){
			MapConfig.open_1=false;
			Macro.camMoveTo(cc.p(3300,"current"),1,1);
			Macro.allUnitAction(function(unit){
		                        unit.stand(true);
			});
			Macro.doLater(0.5,function(){
				Macro.unit(4).playAnim({movementID:"dead10",loop:0});
			});
			var dialog = {
				timeToNext : 3,
				text : [
			        		{
			        		0:"蔡瑁：蔡瑁张允带十万水师来降。",
			        		},
			        		{
			        		0:"曹操：有此十万水师，赤壁一战，大势已定。",
			        		},
			        		{
			        		0:"张辽：是哪个小贼躲在暗处？",
			        		},
			        		{
			        		0:"赵云、孙尚香：......",
			        		},
				]
			}
			var func = function(){
				Macro.doLater(1,function(){
					g_sharedTaskManager.nextTask();
				})
			}
			Dialog.create(13.5,dialog,func);
			Macro.doLater(10,function(){
				g_sharedFightLayer.myhero && Macro.camMoveTo(cc.p(g_sharedFightLayer.myhero.pos.x,"current"),1,1);
			});
		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:50000*(1+0.5*(gDifficulty-1)),tag:998},
			{time:0,id:"Gate",x:3600,faction:-1,hp:462820*(1+0.5*(gDifficulty-1)),drop:{gold:{num:170,ct:5}},},
	
			{time:0,id:"SunShangxiang",lvl:1,x:1500,tag:1,faction:-1,hp:175000,unitType:"boss",},	
		],
		[
			{time:0,id:"Block",x:2700,hp:101570,faction:-1,deadOnNextStage:1,},
				
			{time:0,id:"fatManWei",x:2500,faction:-1,lvl:32,},
			{time:1,id:"pikemanWei",x:2900,faction:-1,lvl:32,drop:{heal:{percent:0.1,ct:2}},},
			{time:1,id:"bowmanWei",x:2900,faction:-1,lvl:32},	

			{time:2,id:"shieldmanWei",x:2900,faction:-1,lvl:32},
			{time:3,id:"shieldmanWei",x:2900,faction:-1,lvl:32},
			{time:5,id:"bowmanWei",x:2900,faction:-1,lvl:32},
			{time:6,id:"bowmanWei",x:2900,faction:-1,lvl:32},	

			{time:17,id:"fatManWei",x:2900,faction:-1,lvl:32,},
			{time:17,id:"pikemanWei",x:2900,faction:-1,lvl:32,},
			{time:18,id:"bowmanWei",x:2900,faction:-1,lvl:32},	
			{time:19,id:"shieldmanWei",x:2900,faction:-1,lvl:32},

			{time:25,id:"fatManWei",x:2900,faction:-1,lvl:32,},
			{time:26,id:"pikemanWei",x:2900,faction:-1,lvl:32,},
			{time:28,id:"pikemanWei",x:2900,faction:-1,lvl:32},	
			{time:30,id:"shieldmanWei",x:2900,faction:-1,lvl:32},

			{time:35,id:"bowmanWei",x:2900,faction:-1,lvl:32,drop:{heal:{percent:0.1,ct:2}},},	
			{time:36,id:"bowmanWei",x:2900,faction:-1,lvl:32},	
			{time:37,id:"bowmanWei",x:2900,faction:-1,lvl:32},	

			{time:40,id:"shieldmanWei",x:2900,faction:-1,lvl:32,},
			{time:42,id:"pikemanWei",x:2900,faction:-1,lvl:32,},
			{time:45,id:"pikemanWei",x:2900,faction:-1,lvl:32},	
			{time:46,id:"shieldmanWei",x:2900,faction:-1,lvl:32},

			{time:50,id:"shieldmanWei",x:2900,faction:-1,lvl:32,},
			{time:51,id:"mageWei",x:2900,faction:-1,lvl:32,},
			{time:52,id:"bowmanWei",x:2900,faction:-1,lvl:32},	
			{time:53,id:"shieldmanWei",x:2900,faction:-1,lvl:32},
			{time:55,id:"pikemanWei",x:2900,faction:-1,lvl:32,drop:{heal:{percent:0.1,ct:2}},},
			{time:56,id:"pikemanWei",x:2900,faction:-1,lvl:32},	
		],
		[
			{time:0,id:"CaoCao2",x:3450,tag:2,faction:-1,hp:6000000000,func:function(unit){unit.stand(1);},},
			{time:0,id:"ZhangLiao",x:3600,tag:3,faction:-1,hp:600000000,func:function(unit){unit.stand(1);},},
			{time:0,id:"CaiMao",x:3200,tag:4,faction:1,hp:600000000,func:function(unit){unit.stand(1);},},
			{time:0,id:"ZhangYun",x:3120,tag:5,faction:1,hp:60000000,func:function(unit){unit.stand(1);},},	
		],
	],		

	
	task:[	
		{
	//		taskFinishLatency:0,
			win:[
				{type:"killUnit",faction:-1,text:'击败孙尚香',id:'DiaoChan',},
			],
			lose:[
				
			],
		    	func:function(){
				Macro.setGameEdge(0,2200);	
		    	},
			update:function(){
				MapConfig.func_1();
			},
        
		},
       	{
	//		taskTextShowLatency:0,
			win:[
					{type:"allClear",faction:-1,text:'保护孙尚香',},
				],
			lose:[
//			     {type:"killUnit",faction:1,id:'SunShangxiang',noText:true,},
				],	
			func:function(){
				Macro.setGameEdge(0,2800);
				Macro.doLater(6,function(){
					Macro.showMessage('孤军深入，不能造兵',5);
				})
			},
			finishFunc:function(){
				
			},
			update:function(){
				if(MapConfig.open_3&&Macro.unit(1).hp<=0){
					MapConfig.open_3=false;
					Macro.showMessage('盟友战死，任务失败',3);
					Macro.doLater(5,function(){
						g_sharedGameLayer.onFail();
					});
				}
				},	
		},
	       	{
	//		taskTextShowLatency:0,
			win:[
					{type:"killUnit",faction:-1,text:'保护孙尚香',id:'CaoRen',noText:true,},
				],
			lose:[
				
				],	
			func:function(){
				Macro.setGameEdge(0,3800);
				Macro.unit(1).moveTo(2805);
				Macro.unit(1).setAI(false);
			},
			finishFunc:function(){
//				Macro.unit(1).moveTo(3005);
			},
			update:function(){
				if(MapConfig.open_2&&Macro.unit(1).hp<=0){
					MapConfig.open_2=false;
					Macro.showMessage('盟友战死，任务失败',3);
					Macro.doLater(3,function(){
						g_sharedGameLayer.onFail();
					});
				}
				MapConfig.func_2();
			},	
		},		
	],
	init:function(){
		g_sharedFightLayer.registerEdge(3500,-1)
	},
	config:{
		disable:{
//			myhero:true,ability:true,
			unit:true,
		},
		drop:{rage:{chance:1,num:1},gold:{chance:0.5,num:700,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:5506,gold:0,gem:0},
	}
};