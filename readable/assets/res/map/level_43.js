var MapConfig={
	open:true,
	open_1:true,
	open_2:true,
	func_1:function(){
		if(MapConfig.open){
			MapConfig.open = false;
			Macro.allUnitAction(function(unit){
				if(g_sharedFightLayer.myhero && unit!=g_sharedFightLayer.myhero){
					unit.setAI(false);
				}
			});
		}
		if(MapConfig.open_1&&g_sharedFightLayer.myhero && g_sharedFightLayer.myhero.pos.x>=2500){
			MapConfig.open_1=false;
//		               Macro.allUnitAction(function(unit){
//	                        unit.setAI(false);
//	                   });
			Macro.camMoveTo(cc.p(3200,"current"),1,1);
			g_sharedFightLayer.myhero && g_sharedFightLayer.myhero.stand();
			var dialog = {
				skip:true,
				timeToNext : 2.5,
				text : [
			         	{
			        		0:"赵云：恕子龙护主不利！现在就送夫人和少主回城！",
			        		},
			        		{
			        		0:"甘夫人：赵将军......",
			        		},
				]
			}
			var func = function(){
				g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero);
				Macro.allUnitAction(function(unit){
					unit.setAI(true);
				});
				Macro.unit(1).moveTo(400);
				Macro.doLater(1,function(){
					g_sharedTaskManager.nextTask();
				});
			}
			Dialog.create(5.5,dialog,func);
		}
	},
	func_2:function(){
		if(MapConfig.open_2){
			MapConfig.open_2=false;
//			Macro.unit(1).setAI(false);
			Macro.doLater(2,function(){
				Macro.unit(1).moveTo(100);
				Macro.doLater(2,function(){
					Macro.unit(1).fadeOut();
				})
			})
		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:50000*(1+0.5*(gDifficulty-1)),tag:998},
			{time:0,id:"Gate",x:3600,faction:-1,hp:494410*(1+0.5*(gDifficulty-1)),drop:{gold:{num:170,ct:5}},},
			{time:0,id:"SunShangxiang",x:2450,hp:150000,faction:1,tag:1,},
			{time:0,id:"ZhangLiao",lvl:1,x:3400,faction:-1,hp:120000*Math.pow(1.5,(gDifficulty-1)),attack:4200*Math.pow(1.2,(gDifficulty-1)),unitType:"boss",status:{noDismember:1},drop:{gold:{num:200,ct:3}},},
		
			{time:0,id:"pikemanWei",x:3800,faction:-1,lvl:33,},
			{time:1,id:"pikemanWei",x:3800,faction:-1,lvl:33,},
			{time:3,id:"pikemanWei",x:3800,faction:-1,lvl:33,},		
		],
		[	
//			{time:0,id:"XuHuang",x:3600,faction:-1,},
					
			{time:2,id:"shieldmanWei",x:3800,faction:-1,lvl:33,},
			{time:2,id:"pikemanWei",x:3800,faction:-1,lvl:33,},
//			{time:3,id:"pikemanWei",x:3500,faction:-1,lvl:5,},
			{time:5,id:"bowmanWei",x:3800,faction:-1,lvl:33,},
			{time:7,id:"pikemanWei",x:3800,faction:-1,lvl:33},
			{time:8,id:"shieldmanWei",x:3800,faction:-1,lvl:33,drop:{heal:{percent:0.1,ct:1}},},
//			{time:10,id:"pikemanWei",x:3600,faction:-1,lvl:5,},
			{time:10,id:"pikemanWei",x:3800,faction:-1,lvl:33,},
			{time:12,id:"bowmanWei",x:3800,faction:-1,lvl:33,},
			{time:14,id:"pikemanWei",x:3800,faction:-1,lvl:33},
			{time:18,id:"shieldmanWei",x:3800,faction:-1,lvl:33,},
			{time:19,id:"bowmanWei",x:3800,faction:-1,lvl:33,},
//			{time:25,id:"pikemanWei",x:3600,faction:-1,lvl:5,},
//			{time:26,id:"shieldmanWei",x:3600,faction:-1,lvl:4,drop:{heal:{num:0.2,ct:1}},},
			{time:32,id:"pikemanWei",x:3600,faction:-1,lvl:33,},
			
//			{time:32,id:"ChengYuanzhi",x:3800,faction:-1,lvl:4,unitType:"boss",},
            	
			{time:34,id:"pikemanWei",x:3800,faction:-1,lvl:33,},			
//			{time:37,id:"bowmanWei",x:3800,faction:-1,lvl:3,drop:{heal:{num:0.2,ct:1}},},
			
			{time:42,id:"shieldmanWei",x:3800,faction:-1,lvl:5,},
			{time:44,id:"bowmanWei",x:3800,faction:-1,lvl:33,},
			{time:47,id:"pikemanWei",x:3800,faction:-1,lvl:33,},
					
			{time:50,id:"mageWei",x:3800,faction:-1,lvl:33,},
          		{time:52,id:"bowmanWei",x:3800,faction:-1,lvl:33,},
          		{time:55,id:"bowmanWei",x:3800,faction:-1,lvl:33,},
    			{time:57,id:"pikemanWei",x:3800,faction:-1,lvl:33,},
    			{time:58,id:"fatManQun",x:3800,faction:-1,lvl:33,},
    			{time:59,id:"bowmanWei",x:3800,faction:-1,lvl:33,},
    			{time:63,id:"bowmanWei",x:3800,faction:-1,lvl:33,},
    			{time:65,id:"pikemanWei",x:3800,faction:-1,lvl:33,},
          		{time:64,id:"mageWei",x:3800,faction:-1,lvl:33,},
    			{time:67,id:"bowmanWei",x:3800,faction:-1,lvl:33,},
    		
    			{time:68,id:"fatManQun",x:3800,faction:-1,lvl:33,},
    			{time:69,id:"bowmanWei",x:3800,faction:-1,lvl:33,},
    			{time:73,id:"bowmanWei",x:3800,faction:-1,lvl:33,},
    			{time:75,id:"pikemanWei",x:3800,faction:-1,lvl:33,},
          		{time:74,id:"mageWei",x:3800,faction:-1,lvl:33,},
    			{time:77,id:"bowmanWei",x:3800,faction:-1,lvl:33,},
		],		
	],	
	task:[		
		{
			win:[
				{type:"killUnit",faction:-1,text:'击败张辽',id:'ZhangLiao',},
			],
			lose:[
				{type:"killUnit",faction:1,posX:100,id:'MsGan',noText:true,},
			],
			func:function(){
//				Macro.doLater(5,function(){
//				Macro.showMessage('援兵未到，孤军奋战',5);
//				})
			},
            		update:function(){
				if(MapConfig.open_1 && Macro.unit(1) && Macro.unit(1).hp<=0){
            				MapConfig.open_1=false;
					Macro.showMessage('盟友战死，任务失败',3);
					Macro.doLater(3,function(){
						g_sharedGameLayer.onFail();
					});
				}
//				MapConfig.func_1();
			},
		},
       	{
			win:[
				{type:"time",faction:1,require:80,text:'让孙尚香离开',textNum:true,},
			],
			lose:[
//				{type:"killUnit",faction:1,posX:100,id:'SunShangxiang',noText:true,},
			],
			func:function(){
//				Macro.unit(1).setAI(false);
//				Macro.unit(1).moveTo(100);
			},
            		update:function(){
				MapConfig.func_2();
			},
			finishFunc:function(){
				Macro.flee();
			},
		},
	
	],
	init:function(){
		g_sharedFightLayer.registerEdge(3500,-1)
		g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero)
		g_sharedFightLayer.myhero.pos.x = 2600;
	},
	config:{
		disable:{
//			myhero:true,ability:true,
//			g_sharedFightLayer.myhero.pos.x = 2800;
//			unit:true,
		},
		drop:{rage:{chance:1,num:1},gold:{chance:0.5,num:720,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:6054,gold:0,gem:0},
	}
};