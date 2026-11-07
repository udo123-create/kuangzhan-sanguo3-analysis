
var MapConfig={
	open_1:true,  
	open_1_1:true,  
	func_1:function(){
		if(MapConfig.open_1 && Macro.unit(1)){
			MapConfig.open_1=false;
			Macro.setUnitSpawn(false);
			Macro.camMoveTo(cc.p(3300,"current"),1,1);
            		Macro.allUnitAction(function(unit){
				if(unit!=Macro.unit(1)){
					unit.stand(true);
				}
				else{
					Macro.doLater(1,function(){
						Macro.unit(1).stand(true);
					})
				}
            		});
			Macro.doLater(1,function(){
				var dialog = {
					skip:true,
				        	timeToNext : 3,
					text : [
				        		{
				        		0:"曹丕：赵将军如肯归顺我军，必定厚礼相待！",
				        		},
				        		{
				        		0:"赵云：子龙得军师之令前来出战，毋须再多妄言！",
				        		},
				        	]
				} 
				var func = function(){
					Macro.allUnitAction(function(unit){
						unit.setAI(true);
					})
					g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero);
					Macro.setUnitSpawn(true);
				}
				Dialog.create(7,dialog,func);	
			});		
		}
		if(MapConfig.open_1_1 && Macro.unit(1) && Macro.unit(1).hp<=Macro.unit(1).maxHp*0.3){
			MapConfig.open_1_1=false;
			Macro.setUnitSpawn(false);
			Macro.allUnitAction(function(unit){
//				if(unit!=Macro.unit(1)){
				unit.stand(true);
//				}
			})
	        		var dialog = {
	        			skip:true,
				timeToNext : 2.5,
				text : [
			        		{
			        		0:"曹丕：哼，今次切磋到此为止，来日再战！",
			        		},
			        	]
			} 
			var func = function(){
				Macro.setUnitSpawn(true);
				Macro.allUnitAction(function(unit){
					unit.setAI(true);
				})
				Macro.unit(1).moveTo(50000,true);
				Macro.doLater(2,function(){
					Macro.unit(1).fadeOut();
				})
//				Macro.flee();
				g_sharedTaskManager.nextTask();		
			}
			Dialog.create(3.5,dialog,func);			
		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:35000*(1+0.5*(gDifficulty-1)),},
			{time:0,id:"Gate",x:3600,faction:-1,hp:176840*(1+0.5*(gDifficulty-1)),drop:{gold:{num:100,ct:5}},},

			{time:0,id:"shieldmanWei",x:3800,faction:-1,lvl:20},
			{time:5,id:"pikemanWei",x:3800,faction:-1,lvl:20},	
			{time:6,id:"pikemanWei",x:3800,faction:-1,lvl:20},	
			{time:7,id:"pikemanWei",x:3800,faction:-1,lvl:20},	

			{time:10,id:"shieldmanWei",x:3800,faction:-1,lvl:20},
			{time:15,id:"pikemanWei",x:3800,faction:-1,lvl:20},	
			{time:16,id:"pikemanWei",x:3800,faction:-1,lvl:20},	
			{time:17,id:"pikemanWei",x:3800,faction:-1,lvl:20},	

			{time:23,id:"shieldmanWei",x:3800,faction:-1,lvl:20},
			{time:28,id:"pikemanWei",x:3800,faction:-1,lvl:20},	
			{time:29,id:"pikemanWei",x:3800,faction:-1,lvl:20},	
			{time:30,id:"pikemanWei",x:3800,faction:-1,lvl:20},	

			{time:35,id:"CaoPi",lvl:1,x:3600,faction:-1,unitType:"boss",tag:1,status:{unDead:1},drop:{gold:{num:130,ct:3}},},
			{time:35,id:"shieldmanWei",x:3800,faction:-1,lvl:20},
			{time:40,id:"pikemanWei",x:3800,faction:-1,lvl:20},	
			{time:41,id:"pikemanWei",x:3800,faction:-1,lvl:20},	
			{time:42,id:"pikemanWei",x:3800,faction:-1,lvl:20},	

			{time:50,id:"bowmanWei",x:3800,faction:-1,lvl:20},	
			{time:51,id:"bowmanWei",x:3800,faction:-1,lvl:20},	
			{time:52,id:"bowmanWei",x:3800,faction:-1,lvl:20,drop:{heal:{percent:0.1,ct:2}}},	

			{time:56,id:"shieldmanWei",x:3800,faction:-1,lvl:20},
			{time:58,id:"pikemanWei",x:3800,faction:-1,lvl:20},	
			{time:60,id:"pikemanWei",x:3800,faction:-1,lvl:20},	
			{time:61,id:"pikemanWei",x:3800,faction:-1,lvl:20},	

			{time:62,id:"bowmanWei",x:3800,faction:-1,lvl:20},	
			{time:65,id:"bowmanWei",x:3800,faction:-1,lvl:20},	
			{time:67,id:"bowmanWei",x:3800,faction:-1,lvl:20,drop:{heal:{percent:0.1,ct:2}}},
			{time:68,id:"shieldmanWei",x:3800,faction:-1,lvl:20},
			{time:70,id:"pikemanWei",x:3800,faction:-1,lvl:20},	
			{time:75,id:"pikemanWei",x:3800,faction:-1,lvl:20},	
			{time:76,id:"pikemanWei",x:3800,faction:-1,lvl:20},	

			{time:80,id:"bowmanWei",x:3800,faction:-1,lvl:20},	
			{time:81,id:"bowmanWei",x:3800,faction:-1,lvl:20},	
			{time:82,id:"bowmanWei",x:3800,faction:-1,lvl:20,drop:{heal:{percent:0.1,ct:2}}},
		],
		[
			{time:3,id:"fatManWei",x:3800,faction:-1,lvl:20},
			{time:4,id:"shieldmanWei",x:3800,faction:-1,lvl:20},
			{time:5,id:"pikemanWei",x:3800,faction:-1,lvl:20},	
			{time:6,id:"pikemanWei",x:3800,faction:-1,lvl:20},	
			{time:7,id:"pikemanWei",x:3800,faction:-1,lvl:20},	
			{time:10,id:"bowmanWei",x:3800,faction:-1,lvl:20},	
			{time:13,id:"bowmanWei",x:3800,faction:-1,lvl:20},	

			{time:18,id:"shieldmanWei",x:3800,faction:-1,lvl:20},
			{time:20,id:"pikemanWei",x:3800,faction:-1,lvl:20},	
			{time:23,id:"pikemanWei",x:3800,faction:-1,lvl:20},	
			{time:24,id:"pikemanWei",x:3800,faction:-1,lvl:20},	
			{time:28,id:"mageWei",x:3800,faction:-1,lvl:20},	
			{time:29,id:"bowmanWei",x:3800,faction:-1,lvl:20,drop:{heal:{percent:0.1,ct:4}}},	

			{time:33,id:"shieldmanWei",x:3800,faction:-1,lvl:20},
			{time:35,id:"pikemanWei",x:3800,faction:-1,lvl:20},	
			{time:36,id:"pikemanWei",x:3800,faction:-1,lvl:20},

			{time:40,id:"healerWei",x:3800,faction:-1,lvl:20},	
			{time:41,id:"pikemanWei",x:3800,faction:-1,lvl:20},	
			{time:43,id:"pikemanWei",x:3800,faction:-1,lvl:20},	
			{time:46,id:"bowmanWei",x:3800,faction:-1,lvl:20},	
			{time:47,id:"bowmanWei",x:3800,faction:-1,lvl:20},	

			{time:50,id:"CaoPi2",lvl:1,x:3600,unitType:"boss",faction:-1,status:{noDismember:1},},	

			{time:51,id:"shieldmanWei",x:3800,faction:-1,lvl:20},	
			{time:53,id:"pikemanWei",x:3800,faction:-1,lvl:20},	
			{time:55,id:"bowmanWei",x:3800,faction:-1,lvl:20},	
			{time:58,id:"bowmanWei",x:3800,faction:-1,lvl:20},	
				
			{time:71,id:"shieldmanWei",x:3800,faction:-1,lvl:20},	
			{time:73,id:"pikemanWei",x:3800,faction:-1,lvl:20},	
			{time:75,id:"bowmanWei",x:3800,faction:-1,lvl:20},	
			{time:78,id:"bowmanWei",x:3800,faction:-1,lvl:20},	
		],
	],		
	task:[	
		{
			win:[
//				{type:"allClear",faction:-1,text:'逼迫曹丕退兵'},
				{type:"killUnit",faction:-1,text:'逼迫曹丕退兵',id:'ZhenJi',},
			],
			lose:[
				
			],
		    func:function(){
		    },
			update:function(){
				MapConfig.func_1();
			},
        
		},
       	{
//	        taskTextShowLatency:3,  
//          taskFinishLatency:5,
			win:[
					{type:"killUnit",faction:-1,text:'打败曹丕',id:'CaoPi2',},
				],
			lose:[
				
				],	
			func:function(){
			},
			update:function(){
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
		drop:{rage:{chance:1,num:1},gold:{chance:0.5,num:350,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:1472,gold:0,gem:0},
	}
};