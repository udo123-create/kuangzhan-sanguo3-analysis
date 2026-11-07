
var MapConfig={
	open:true,
	open_1:false,
	func_1:function(){
		if(MapConfig.open&&Macro.unit(1)){
			MapConfig.open=false;
			MapConfig.open_1=true;
			Macro.camMoveTo(cc.p(3300,"current"),1,1);
			Macro.allUnitAction(function(unit){
				unit.stand(true);
	                  	});
		           var dialog = {
				timeToNext : 3.5,
				text : [
			        		{
			        		0:"周瑜：早闻赵将军威名，今次我倒要试试你的身手。",
			        		},
			        		{
			        		0:"赵云：那我也瞧瞧六郡八十一州大都督是不是浪得虚名！",
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
			Dialog.create(8.5,dialog,func);
			Macro.doLater(4.5,function(){
				g_sharedFightLayer.myhero && Macro.camMoveTo(cc.p(g_sharedFightLayer.myhero.pos.x,"current"),1,1);
				Macro.doLater(6.5,function(){
					g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero);
				});
			});
		}
		if(MapConfig.open_1&&Macro.unit(1)&&Macro.unit(1).hp<=Macro.unit(1).maxHp*0.3){
			MapConfig.open_1=false;
	            	Macro.setUnitSpawn(false);
	            	Macro.allUnitAction(function(unit){
	                        	unit.stand(true);
	                  	});
	                  	var dialog = {
	                  		skip:true,
				timeToNext : 4,
				text : [
					{
			        		0:"周瑜：赵将军果然身手了得，我旗下水师十万，吴蜀联军，必定大破曹操。",
			        		},
				]
			} 
			var func = function(){
				Macro.doLater(1,function(){
					g_sharedTaskManager.nextTask();
				})
			}
			Dialog.create(5.5,dialog,func);
		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:50000*(1+0.5*(gDifficulty-1)),tag:998},
			{time:0,id:"Gate",x:3600,faction:-1,hp:433115*(1+0.5*(gDifficulty-1)),drop:{gold:{num:170,ct:5}},},
            		{time:0,id:"WeiChiHou",x:800,hp:30000,faction:-1,direction:1,tag:2,unitType:"boss",movementSpeed:0.5,},
			{time:1,id:"pikemanWu",x:1200,faction:-1,direction:-1,lvl:31,},
			{time:3,id:"bowmanWu",x:1500,faction:-1,direction:-1,lvl:31,},
			{time:4,id:"pikemanWu",x:1500,faction:-1,direction:-1,lvl:31,},
			{time:5,id:"pikemanWu",x:2300,faction:-1,direction:-1,lvl:31,},
			{time:3,id:"bowmanWu",x:2500,faction:-1,direction:-1,lvl:31,},
			{time:4,id:"pikemanWu",x:3000,faction:-1,direction:-1,lvl:31,},
			{time:6,id:"pikemanWu",x:3100,faction:-1,direction:-1,lvl:31,},
			{time:8,id:"pikemanWu",x:3200,faction:-1,direction:-1,lvl:31},
			{time:9,id:"bowmanWu",x:3200,faction:-1,direction:-1,lvl:31,},

			{time:20,id:"fatManWu",x:3800,faction:-1,direction:-1,lvl:31,drop:{heal:{percent:0.1,ct:2}},},
			{time:22,id:"pikemanWu",x:3800,faction:-1,direction:-1,lvl:31,},
//			{time:13,id:"mage",x:3200,faction:-1,direction:-1,lvl:17,drop:{gold:{num:300,ct:2}}},
			{time:24,id:"bowmanWu",x:3800,faction:-1,direction:-1,lvl:31,},

			{time:26,id:"shieldmanWu",x:3800,faction:-1,direction:-1,lvl:31,drop:{heal:{percent:0.1,ct:2}},},
			{time:28,id:"pikemanWu",x:3800,faction:-1,direction:-1,lvl:31,},
			{time:32,id:"bowmanWu",x:3800,faction:-1,direction:-1,lvl:31,},
			{time:33,id:"bowmanWu",x:3800,faction:-1,direction:-1,lvl:31,},
		],
		[
			{time:1,id:"pikemanWu",x:3800,faction:-1,lvl:31,},
			{time:2,id:"pikemanWu",x:3800,faction:-1,lvl:31,},
			{time:3,id:"mageWu",x:3800,faction:-1,lvl:31,},
			{time:4,id:"bowmanWu",x:3800,faction:-1,lvl:31,},
			{time:8,id:"pikemanWu",x:3800,faction:-1,lvl:31,drop:{heal:{percent:0.1,ct:2}},},
			{time:9,id:"bowmanWu",x:3800,faction:-1,lvl:31,},
			{time:13,id:"bowmanWu",x:3800,faction:-1,lvl:31,},			
			{time:14,id:"pikemanWu",x:3800,faction:-1,lvl:31,},
			{time:17,id:"pikemanWu",x:3800,faction:-1,lvl:31,},
			{time:19,id:"fatManWu",x:3800,faction:-1,lvl:31,},

			{time:22,id:"shieldmanWu",x:3800,faction:-1,lvl:31,},
			{time:23,id:"pikemanWu",x:3800,faction:-1,lvl:31,},
			{time:25,id:"bowmanWu",x:3800,faction:-1,lvl:31,},

			{time:33,id:"pikemanWu",x:3800,faction:-1,lvl:31,},
			{time:35,id:"pikemanWu",x:3800,faction:-1,lvl:31,},
			{time:37,id:"mageWu",x:3800,faction:-1,lvl:31,},

			{time:45,id:"shieldmanWu",x:3800,faction:-1,lvl:31,},
			{time:47,id:"pikemanWu",x:3800,faction:-1,lvl:31,},
			{time:50,id:"bowmanWu",x:3800,faction:-1,lvl:31,},

			{time:55,id:"shieldmanWu",x:3800,faction:-1,lvl:31,drop:{heal:{percent:0.1,ct:2}},},

			{time:60,id:"ZhouYu",name:"周瑜",lvl:1,x:3550,faction:-1,direction:-1,unitType:"boss",drop:{gold:{num:150,ct:3}},tag:1,status:{unDead:1},func:function(unit){unit.stand(1);
			Macro.setUnitSpawn(false);}	
			},
			{time:60,id:"pikemanWu",x:3800,faction:-1,lvl:31,},
			{time:62,id:"bowmanWu",x:3800,faction:-1,lvl:31,},

			{time:65,id:"pikemanWu",x:3800,faction:-1,lvl:31,},
			{time:68,id:"pikemanWu",x:3800,faction:-1,lvl:31,},
			{time:70,id:"mageWu",x:3800,faction:-1,lvl:31,},
			{time:63,id:"fatManWu",x:3800,faction:-1,lvl:31,},
		],
	],		
	task:[
		
		{
//			taskFinishLatency:11,
			win:[
				{type:"killUnit",faction:-1,text:'阻止魏斥候逃脱',id:'WeiChiHou',},
			],
			lose:[
				{type:"unitPosition",faction:-1,posX:3500,text:"别让小兵逃回城门",noText:true,id:'WeiChiHou',},
				/* {if(g_sharedFightLayer.unit(1).pos.x > 3799),id:'general',} */
			],
			finishFunc:function(){
				Macro.flee();
			},
        
		},
       		{
//			taskFinishLatency:10,
			win:[
					{type:"killUnit",faction:-1,text:"击败'大都督'周瑜",id:'ZhouYu',},
				],
			lose:[],		
	            	update:function(){
	            		MapConfig.func_1();			
	            	},
	            	finishFunc:function(){
				Macro.flee();
			},
		},		
	],
	init:function(){
		g_sharedFightLayer.registerEdge(3500,-1)
	},
	config:{
		disable:{
//			myhero:true,ability:true,
		},
		drop:{rage:{chance:1,num:1},gold:{chance:0.5,num:680,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:5008,gold:0,gem:0},
	}
};