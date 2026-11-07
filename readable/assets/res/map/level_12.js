var MapConfig={
	open:true,
	open1:false,
	unit :[
		[
			{time:0,id:"Gate",x:200,faction:1,hp:11000*(1+0.5*(gDifficulty-1)),},
			{time:0,id:"Gate",x:3600,faction:-1,hp:51215*(1+0.5*(gDifficulty-1)),drop:{gold:{num:9,ct:5}},},

			{time:0,id:"pikemanQun",x:1000,faction:-1,lvl:9,},
//			{time:0,id:"shieldmanQun",x:1200,faction:-1,lvl:9,},
//			{time:0,id:"bowmanQun",x:1400,faction:-1,lvl:9,},
			{time:1,id:"pikemanQun",x:1450,faction:-1,lvl:9,},
			{time:2,id:"pikemanQun",x:1500,y:150,faction:-1,lvl:9,},
			{time:3.5,id:"pikemanQun",x:3550,faction:-1,lvl:9,},
			{time:5,id:"pikemanQun",x:3600,y:170,faction:-1,lvl:9,},
			{time:6.5,id:"pikemanQun",x:3650,faction:-1,lvl:9,},
			{time:8,id:"pikemanQun",x:3700,faction:-1,lvl:9,},
			{time:9,id:"bowmanQun",x:3800,y:170,faction:-1,lvl:9,},
			{time:9.5,id:"bowmanQun",x:3900,y:165,faction:-1,lvl:9,},
			{time:14,id:"shieldmanQun",x:4000,faction:-1,lvl:9,},
//			{time:15,id:"shieldmanQun",x:4050,faction:-1,lvl:9,},
			{time:15,id:"bowmanQun",x:4100,faction:-1,lvl:9,},
			{time:20,id:"pikemanQun",x:4200,faction:-1,lvl:9,},
			{time:21,id:"pikemanQun",x:4230,y:150,faction:-1,lvl:9,},
			{time:22,id:"pikemanQun",x:4260,faction:-1,lvl:9,},
			{time:30,id:"pikemanQun",x:4290,y:170,faction:-1,lvl:9,},
			{time:31,id:"pikemanQun",x:4310,faction:-1,lvl:9,},
			{time:32,id:"pikemanQun",x:4340,faction:-1,lvl:9,},
			{time:36,id:"bowmanQun",x:4400,y:150,faction:-1,lvl:9,},
			{time:37,id:"bowmanQun",x:4450,faction:-1,lvl:9,},
//			{time:17,id:"bowmanQun",x:2500,y:170,faction:-1,lvl:9,},
//			{time:18,id:"fatManQun",x:2550,faction:-1,lvl:9,},
			{time:42,id:"shieldmanQun",x:4700,faction:-1,lvl:9,},
			{time:46,id:"bowmanQun",x:4800,y:170,faction:-1,lvl:9,drop:{heal:{percent:0.1,ct:2}},},
			{time:47,id:"bowmanQun",x:4900,y:165,faction:-1,lvl:9,},
		],
		[				
//			{time:0,id:"GaoShun",x:3800,faction:-1,unitType:"boss",tag:1,
//					spell:{ability:{id:"moonChopped",num:1,damage:100},
//                    cooldown:15,
//                    config:{castTime:1.5,channelInterval:0.5,},
//                    },},
			{time:0,id:"GaoShun",lvl:1,x:3800,faction:-1,unitType:"boss",tag:1,drop:{gold:{num:18,ct:3}}},
           	{time:2,id:"shieldmanQun",x:3600,faction:-1,lvl:9,drop:{gold:{num:300,ct:2}}},
			{time:3,id:"shieldmanQun",x:3600,faction:-1,lvl:9,},
			{time:4,id:"bowmanQun",x:3600,faction:-1,lvl:9,drop:{heal:{percent:0.1,ct:2}}},
			{time:5,id:"bowmanQun",x:3600,faction:-1,lvl:9,drop:{gold:{num:300,ct:2}}},
			{time:6,id:"bowmanQun",x:3600,faction:-1,lvl:9,drop:{gold:{num:300,ct:2}}},
			{time:7,id:"bowmanQun",x:3600,faction:-1,lvl:9,drop:{gold:{num:300,ct:2}}},

			{time:9,id:"bowmanQun",x:4700,faction:-1,lvl:9,},
			{time:10,id:"bowmanQun",x:4700,faction:-1,lvl:9,},

			{time:15,id:"pikemanQun",x:3600,faction:-1,lvl:9,},
			{time:16,id:"shieldmanQun",x:3600,faction:-1,lvl:9,drop:{gold:{num:300,ct:2}}},
			{time:17,id:"pikemanQun",x:3600,faction:-1,lvl:9,},

			{time:20,id:"pikemanQun",x:3700,faction:-1,lvl:9,drop:{heal:{percent:0.1,ct:1}}},
			{time:22,id:"pikemanQun",x:3900,faction:-1,lvl:9,},
			{time:23,id:"pikemanQun",x:3950,faction:-1,lvl:9,},
			{time:25,id:"pikemanQun",x:4000,faction:-1,lvl:9,},

			{time:30,id:"pikemanQun",x:3950,faction:-1,lvl:9,},
			{time:31,id:"shieldmanQun",x:4000,faction:-1,lvl:9,},
			{time:33,id:"pikemanQun",x:3950,faction:-1,lvl:9,},
			{time:34,id:"bowmanQun",x:4000,faction:-1,lvl:9,},

			{time:40,id:"shieldmanQun",x:3950,faction:-1,lvl:9,},
			{time:41,id:"pikemanQun",x:4000,faction:-1,lvl:9,},
			{time:43,id:"bowmanQun",x:3950,faction:-1,lvl:9,},
			{time:45,id:"bowmanQun",x:4000,faction:-1,lvl:9,},

			{time:50,id:"pikemanQun",x:3950,faction:-1,lvl:9,},
			{time:53,id:"shieldmanQun",x:4000,faction:-1,lvl:9,},
			{time:56,id:"pikemanQun",x:3950,faction:-1,lvl:9,},
			{time:60,id:"bowmanQun",x:4000,faction:-1,lvl:9,},

			{time:65,id:"shieldmanQun",x:3950,faction:-1,lvl:9,},
			{time:68,id:"pikemanQun",x:4000,faction:-1,lvl:9,},
			{time:70,id:"bowmanQun",x:3950,faction:-1,lvl:9,},
			{time:73,id:"bowmanQun",x:4000,faction:-1,lvl:9,},
			],
			[
			],
	],	
	task:[
		
//		{
//			win:[
//				{type:"allClear",faction:-1,text:'守住城门',},
//			],
//			lose:[
////				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
//			],
//		},
		{
			win:[
				{type:"allClear",faction:-1,text:'歼灭高顺先锋军',textNum:true,},
		
			],
			lose:[
//				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
			],
		},
       	{
			win:[
				{type:"killUnit",faction:-1,text:'二劝忠将军高顺',id:'GaoShun'},
		
			],
			lose:[
//                {type:"time",require:100};
//				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
			],
		},
	       	{
			taskTextShowLatency:2,
			win:[
				{type:"killUnit",faction:-1,text:'击杀忠将军高顺',id:'GaoShun'},
		
			],
			lose:[
//                {type:"time",require:100};
//				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
			],
			finishFunc:function(){
				Macro.flee();
			},
		},	
	],
	update:function(){
		if(MapConfig.open&&Macro.unit(1)&&Macro.unit(1).hp<=Macro.unit(1).maxHp*0.8){
			MapConfig.open=false;
			MapConfig.open1=true;
			Macro.setUnitSpawn(false);
		     	Macro.allUnitAction(function(unit){
				unit.stand(true);
			});
//	            	Macro.camMoveTo(cc.p(1600,"current"),1,1);
	            	var dialog = {
	            		skip:true,
				        	timeToNext : 3,
				         	text : [
				        		{
				        		0:"赵云：高将军清廉大义，何必为奸人所用，何不效忠玄德公以成大业！",
				        		},
				        		{
				        		0:"高顺：一派胡言！有道是忠臣不侍二主！",
				        		},
				        	]
			} 
			var func = function(){
				Macro.doLater(1,function(){
//					Macro.camMoveTo(cc.p(g_sharedFightLayer.myhero,"current"),1,1);
				g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero,60);
				Macro.setUnitSpawn(true);
				g_sharedFightLayer.myhero && g_sharedFightLayer.myhero.stand(false);
	     			Macro.allUnitAction(function(unit){
                     		unit.setAI(true);
                  			});
					})
			}
			Dialog.create(7.5,dialog,func);
		}
		if(MapConfig.open1&&Macro.unit(1)&&Macro.unit(1).hp<=Macro.unit(1).maxHp*0.5){
			MapConfig.open1=false;
			Macro.setUnitSpawn(false);
	     		Macro.allUnitAction(function(unit){
				unit.stand(true);
			});
			var dialog = {
				skip:true,
			        	timeToNext : 2.5,
			         	text : [
			        		{
			        		0:"赵云：将军三思！良禽择木而栖，贤臣择主而侍！",
			        		},
			        		{
			        		0:"高顺：休得多言！看斧！",
			        		},
			        	]
			} 
			var func = function(){
				g_sharedTaskManager.nextTask();
				Macro.doLater(1,function(){
					Macro.camFollow(g_sharedFightLayer.myhero,60);
					Macro.setUnitSpawn(true);
					g_sharedFightLayer.myhero.stand(false);
	     				Macro.allUnitAction(function(unit){
	                 				unit.setAI(true);
	              			});
				})
			}
			Dialog.create(6.5,dialog,func);
	}
},
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
//        drop:{gold:{lvl:2,chance:0.3}},
		drop:{rage:{chance:0.5,num:1.2},gold:{chance:0.5,num:80,type:"total"},},
	 	gameEdge:{left:0,right:3800},
        		reward:{exp:343,gold:0,gem:0},
	}
};