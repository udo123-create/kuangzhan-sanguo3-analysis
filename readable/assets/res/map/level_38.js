var MapConfig={
	open_0:true,
	open:true,
	open_1:true,
	open_2:true,
	open_3:true,
	open_3_1:true,
	func_1:function(){
		if(MapConfig.open && Macro.unit(1)){
			MapConfig.open = false;
			Macro.setUnitHpFrameVisible(Macro.unit(1),false);
			Macro.allUnitAction(function(unit){
				if(g_sharedFightLayer.myhero && unit!=g_sharedFightLayer.myhero){
					unit.stand(true);
				}
			});
		}
		if(MapConfig.open_1&&g_sharedFightLayer.myhero && g_sharedFightLayer.myhero.pos.x>=2500){
			MapConfig.open_1=false;
			g_sharedTaskManager.nextTask();
			Macro.setUnitSpawn(false);
			Macro.unit(1).stand(true);
//		               Macro.allUnitAction(function(unit){
//	                        unit.setAI(false);
//	                   });
			Macro.camMoveTo(cc.p(3200,"current"),1,1);
			g_sharedFightLayer.myhero.stand();
			var dialog = {
				//skip:true,
				timeToNext : 2.5,
				text : [
			         	{
			        		0:"赵云：恕子龙护主不利！现在就送夫人和少主回城！",
			        		},
			        		{
			        		0:"糜夫人：赵将军......",
			        		},
				]
			}
			var func = function(){
	        			Macro.setUnitSpawn(true);
				g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero);
				Macro.allUnitAction(function(unit){
               				unit.setAI(true);
          			});
	                  		Macro.unit(1).moveTo(400,true);
//	                  					Macro.doLater(1,function(){
//								g_sharedTaskManager.nextTask();
//							});
			}
			Macro.doLater(2,function(){
				Dialog.create(5.5,dialog,func);
			});
	             }
	},
	func_2:function(){
		if(MapConfig.open_2&&Macro.unit(1).pos.x<=600){
			MapConfig.open_2=false;
			Macro.camMoveTo(cc.p(Macro.unit(1).pos.x,"current"),1,1);
			Macro.allUnitAction(function(unit){
		                        unit.stand(true);
			});
			Macro.doLater(0.5,function(){
				g_sharedFightLayer.createUnit({time:0,id:"WeiBingZhang",unitType:"boss",tag:2,hp:100,x:360,attack:15000,faction:1,direction:1,movementSpeed:0.3,});
			});
			Macro.unit(1).setFaction(-1);
			Macro.setUnitSpawn(false);
//			Macro.allUnitAction(function(unit){
//				if(unit!=Macro.unit(2))
//		                        unit.stand(true);
//		             });
		           var dialog = {
		           	 //skip:true,
				timeToNext : 3,
				text : [
			         	{
			        		0:"糜夫人：赵将军，少主就交给你了......",
			        		},
			        		{
			        		0:"赵云：夫人！！！！！！！！！",
			        		},
				]
			}
			var func = function(){
//          				Macro.doLater(2,function(){
				g_sharedTaskManager.nextTask();
				Macro.unit(2).setFaction(-1);
				Macro.unit(2).attack=5;
//					});
			}
	        		Dialog.create(6.5,dialog,func);
		}
	},
	func_3:function(){
		if(MapConfig.open_3_1&&Macro.unit(2)){
			MapConfig.open_3_1=false;
			Macro.setUnitHpFrameVisible(Macro.unit(2),false);
		}
		if(MapConfig.open_3&&Macro.unit(2).hp<=0){
			MapConfig.open_3=false;
			Macro.doLater(2,function(){
				g_sharedTaskManager.nextTask();
			})
		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:50000*(1+0.5*(gDifficulty-1)),tag:998},
			{time:0,id:"Gate",x:3600,faction:-1,hp:354275*(1+0.5*(gDifficulty-1)),drop:{gold:{num:160,ct:5}},},
			//伏兵
        			{time:0,id:"pikemanWei",x:1320,faction:-1,lvl:28,hide:{pos:1320,range:500,func:null},},
			{time:0,id:"pikemanWei",x:1310,y:150,faction:-1,lvl:28,hide:{pos:1310,range:500,func:null},},
			{time:0,id:"bowmanWei",x:1350,y:145,faction:-1,lvl:28,hide:{pos:1350,range:500,func:null},},
			{time:0,id:"bowmanWei",x:1390,faction:-1,lvl:28,hide:{pos:1390,range:500,func:null},},
						
			{time:0,id:"shieldmanWei",x:1620,faction:-1,lvl:28,hide:{pos:1620,range:500,func:null},},
//			{time:0,id:"shieldmanWei",x:1610,y:150,faction:-1,lvl:28,hide:{pos:1610,range:500,func:null},},
			{time:0,id:"bowmanWei",x:1650,y:145,faction:-1,lvl:28,hide:{pos:1650,range:500,func:null},},
			{time:0,id:"bowmanWei",x:1690,faction:-1,lvl:28,hide:{pos:1690,range:500,func:null},},
				
//			{time:0,id:"shieldmanWei",x:2420,faction:-1,lvl:28,hide:{pos:2420,range:500,func:null},},
//			{time:0,id:"shieldmanWei",x:2410,y:150,faction:-1,lvl:28,hide:{pos:2410,range:500,func:null},},
//			{time:0,id:"bowmanWei",x:2450,y:145,faction:-1,lvl:28,hide:{pos:2450,range:500,func:null},},
//			{time:0,id:"mageWei",x:2490,faction:-1,lvl:24,hide:{pos:2490,range:500,func:null},drop:{heal:{percent:0.4,ct:1}},},
		
			//演员 勿改等级
			{time:0,id:"MsGan",x:3150,faction:1,direction:-1,hp:12000,attack:50,tag:1,unitType:"boss",movementSpeed:0.45,},
			{time:0,id:"pikemanWei",x:3400,faction:-1,hp:100,attack:5,},
			{time:0,id:"pikemanWei",x:3300,y:170,faction:-1,hp:100,attack:5,},
			{time:0,id:"pikemanWei",x:3350,y:190,faction:-1,hp:100,attack:5,},
		
			{time:0,id:"pikemanWei",x:2900,faction:-1,hp:100,attack:5,},
			{time:0,id:"pikemanWei",x:3000,y:170,faction:-1,hp:100,attack:5,},
			{time:0,id:"pikemanWei",x:2950,y:190,faction:-1,hp:100,attack:5,},		
		],
		[			
			{time:2,id:"shieldmanWei",x:3800,faction:-1,lvl:28,},
			{time:2,id:"pikemanWei",x:3800,faction:-1,lvl:28,},
			{time:3,id:"pikemanWei",x:3500,faction:-1,lvl:28,},
			{time:5,id:"pikemanWei",x:3800,faction:-1,lvl:28,},
			{time:7,id:"pikemanWei",x:3800,faction:-1,lvl:28},
//			{time:8,id:"shieldmanWei",x:3800,faction:-1,lvl:28,},
			{time:10,id:"pikemanWei",x:3800,faction:-1,lvl:28,},
			{time:11,id:"pikemanWei",x:3800,faction:-1,lvl:28,},
			{time:12,id:"bowmanWei",x:3800,faction:-1,lvl:28,drop:{heal:{percent:0.1,ct:1}},},
			{time:14,id:"pikemanWei",x:3800,faction:-1,lvl:28},
			{time:18,id:"pikemanWei",x:3800,faction:-1,lvl:28,},
			{time:19,id:"bowmanWei",x:3800,faction:-1,lvl:28,},
				
			{time:25,id:"pikemanWei",x:3800,faction:-1,lvl:28,},
			{time:26,id:"shieldmanWei",x:3800,faction:-1,lvl:28,},
			{time:32,id:"pikemanWei",x:3800,faction:-1,lvl:28,},
            	
			{time:34,id:"pikemanWei",x:3800,faction:-1,lvl:28,},			
			{time:37,id:"bowmanWei",x:3800,faction:-1,lvl:28,},
			
			{time:42,id:"shieldmanWei",x:3800,faction:-1,lvl:28,},
			{time:44,id:"bowmanWei",x:3800,faction:-1,lvl:28,},
			{time:47,id:"mageWei",x:3800,faction:-1,lvl:28,drop:{heal:{percent:0.1,ct:1}},},


			{time:50,id:"bowmanWei",x:3800,faction:-1,lvl:28,},
//      			{time:52,id:"bowmanWei",x:3800,faction:-1,lvl:28,},
//      			{time:55,id:"bowmanWei",x:3800,faction:-1,lvl:28,},
			{time:52,id:"XuHuang",lvl:1,x:3800,faction:-1,unitType:"boss",hp:58000,attack:2400,drop:{gold:{num:150,ct:3}},status:{noDismember:1},},

			{time:57,id:"pikemanWei",x:3800,faction:-1,lvl:28,},
			{time:58,id:"bowmanWei",x:3800,faction:-1,lvl:28,},
			{time:59,id:"bowmanWei",x:3800,faction:-1,lvl:28,},

			{time:63,id:"bowmanWei",x:3800,faction:-1,lvl:28,},
			{time:65,id:"pikemanWei",x:3800,faction:-1,lvl:28,},
      			{time:64,id:"bowmanWei",x:3800,faction:-1,lvl:28,},
//			{time:67,id:"mageWei",x:3800,faction:-1,lvl:28,},
			
			{time:70,id:"bowmanWei",x:3800,faction:-1,lvl:28,},
//      			{time:72,id:"bowmanWei",x:3800,faction:-1,lvl:28,},
//      			{time:75,id:"bowmanWei",x:3800,faction:-1,lvl:28,},
			{time:77,id:"pikemanWei",x:3800,faction:-1,lvl:28,},
			{time:78,id:"bowmanWei",x:3800,faction:-1,lvl:28,},
//			{time:79,id:"bowmanWei",x:3800,faction:-1,lvl:28,},
//			{time:83,id:"bowmanWei",x:3800,faction:-1,lvl:28,},
			{time:85,id:"pikemanWei",x:3800,faction:-1,lvl:28,},
      			{time:84,id:"bowmanWei",x:3800,faction:-1,lvl:28,},
//			{time:87,id:"mageWei",x:3800,faction:-1,lvl:28,},
		],
		[
		],		
	],	
	task:[		
		{
			win:[
				{type:"killUnit",faction:-1,text:'营救糜夫人',id:'DiaoChan',noText:true,},
			],
			lose:[
//				{type:"killUnit",faction:1,posX:100,id:'MsGan',noText:true,},
				{type:"time",faction:1,require:48,text:'营救糜夫人',textNum:true,},
			],
			func:function(){
		//		Macro.setUnitHpFrameVisible(Macro.unit(1),false);
				Macro.doLater(5,function(){
				Macro.showMessage('援兵未到，孤军奋战',5);
				})
			},
            		update:function(){
				MapConfig.func_1();
				if(MapConfig.open_0&&Macro.unit(1).hp<=0){
					MapConfig.open_0=false;
//					Macro.showMessage('盟友战死，任务失败',3);
					Macro.doLater(0.5,function(){
						g_sharedGameLayer.onFail();
					});
				}
			},
		},
       	{
       			taskTextShowLatency:8,
			win:[
				{type:"unitPosition",faction:1,posX:200,text:"护送糜夫人回城！",id:"GongsunZan",},
			],
			lose:[
				{type:"killUnit",faction:1,posX:100,id:'MsGan',noText:true,},
			],
			func:function(){
				Macro.setUnitHpFrameVisible(Macro.unit(1),false);
//				Macro.unit(1).setAI(false);
//				Macro.unit(1).moveTo(400);
			},
            		update:function(){
				MapConfig.func_2();
			},
		},
	       	{
			win:[
				{type:"killUnit",faction:-1,text:"杀死凶手:魏兵长！",id:"WeiBingZhang",noText:true,},
			],
			lose:[
				{type:"time",faction:1,require:13,text:'杀死凶手！',textNum:true,},
			],
			func:function(){
//				Macro.setUnitHpFrameVisible(Macro.unit(1),false);
//				Macro.unit(1).setAI(false);
//				Macro.unit(1).moveTo(400);
			},
            		update:function(){
				MapConfig.func_3();
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
		drop:{rage:{chance:1,num:1},gold:{chance:0.5,num:620,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:3770,gold:0,gem:0},
	}
};