var MapConfig={
	open:true,
	func_1:function(){
		if(MapConfig.open&&Macro.unit(1)){
	            	MapConfig.open=false;
	            	Macro.setUnitSpawn(false);
		     	Macro.allUnitAction(function(unit){
	                        unit.stand(true);
	                  	});
	            	Macro.camMoveTo(cc.p(3300,"current"),1,1);
	            	var dialog = {
			        	timeToNext : 3,
			         	text : [
				        		{
				        		0:"袁术：来者何人，居然坏了我的好事！",
				        		},
				        		{
				        		0:"赵云：我军在前线鏖战，你却在后方捣鬼！纳命来！",
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
			Dialog.create(7,dialog,func);
			Macro.doLater(3.5,function(){
				Macro.camMoveTo(cc.p(g_sharedFightLayer.myhero.pos.x,"current"),1,1);
				Macro.doLater(5,function(){
					Macro.camFollow(g_sharedFightLayer.myhero,60);
				});
			});
		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:200,faction:1,hp:14000*(1+0.5*(gDifficulty-1)),},
			{time:0,id:"Gate",x:3600,faction:-1,hp:71305*(1+0.5*(gDifficulty-1)),drop:{gold:{num:18,ct:5}},},

			{time:0,id:"pikemanQun",x:2000,y:150,faction:-1,lvl:12,},
			{time:1,id:"pikemanQun",x:2200,y:150,faction:-1,lvl:12,},
			{time:1,id:"pikemanQun",x:3800,y:150,faction:-1,lvl:12,},
			{time:2,id:"pikemanQun",x:3900,y:150,faction:-1,lvl:12,},
			{time:4,id:"pikemanQun",x:3800,faction:-1,lvl:12,},
			{time:6,id:"bowmanQun",x:3800,faction:-1,lvl:12,},
			{time:10,id:"pikemanQun",x:3800,faction:-1,lvl:12,},
			{time:13,id:"pikemanQun",x:3800,faction:-1,lvl:12,},
			{time:15,id:"bowmanQun",x:3500,faction:-1,lvl:12,},
			{time:18,id:"pikemanQun",x:3800,faction:-1,lvl:12,},
			{time:30,id:"pikemanQun",x:3800,faction:-1,lvl:12,},
			{time:31,id:"pikemanQun",x:3800,faction:-1,lvl:12,},
			{time:33,id:"shieldmanQun",x:3800,faction:-1,lvl:12,},	
			{time:35,id:"bowmanQun",x:3600,faction:-1,lvl:12,},
			{time:37,id:"pikemanQun",x:3700,y:170,faction:-1,lvl:12,},
			{time:39,id:"bowmanQun",x:3800,faction:-1,lvl:12,},
			{time:40,id:"pikemanQun",x:3800,faction:-1,lvl:12,},

			{time:42,id:"pikemanQun",x:3850,faction:-1,lvl:12,},	

			{time:45,id:"pikemanQun",x:3800,faction:-1,lvl:12,},
			{time:50,id:"pikemanQun",x:3800,faction:-1,lvl:12,},
			{time:53,id:"pikemanQun",x:3850,faction:-1,lvl:12,},	

			{time:58,id:"shieldmanQun",x:3800,faction:-1,lvl:12,},
			{time:61,id:"pikemanQun",x:3800,faction:-1,lvl:12,},
			{time:62,id:"mageQun",x:3800,faction:-1,lvl:11,drop:{heal:{percent:0.1,ct:4}},},
		],
		[
			{time:0,id:"shieldmanQun",x:3800,faction:-1,lvl:12,},
			{time:3,id:"bowmanQun",x:3800,faction:-1,lvl:12,},
			{time:4,id:"shieldmanQun",x:3800,faction:-1,lvl:12,},
			{time:6,id:"pikemanQun",x:3800,faction:-1,lvl:12,},
			{time:9,id:"bowmanQun",x:3800,faction:-1,lvl:12,drop:{heal:{percent:0.1,ct:1}},},
			{time:15,id:"pikemanQun",x:3800,faction:-1,lvl:12,},	
			{time:16,id:"shieldmanQun",x:3600,faction:-1,lvl:12,},
//			{time:23,id:"bowmanQun",x:3800,faction:-1,lvl:12,},
//			{time:24,id:"bowmanQun",x:3800,faction:-1,lvl:12,},
			{time:25,id:"pikemanQun",x:3800,faction:-1,lvl:12,drop:{heal:{percent:0.1,ct:2}},},
//			{time:28,id:"huangJinPikeMan",x:3800,faction:-1,lvl:12,},
			{time:28,id:"YuanShu",lvl:1,x:3600,faction:-1,unitType:"boss",drop:{gold:{num:30,ct:3}},tag:1,status:{noDismember:1},},
            {time:28,id:"mageQun",x:3700,faction:-1,lvl:12,},

			{time:29,id:"bowmanQun",x:3800,faction:-1,lvl:12,},
			{time:30,id:"shieldmanQun",x:3800,faction:-1,lvl:12,},
			{time:35,id:"bowmanQun",x:3800,faction:-1,lvl:12,},
			{time:39,id:"pikemanQun",x:3800,faction:-1,lvl:12,},
			{time:41,id:"pikemanQun",x:3800,faction:-1,lvl:12,},

			{time:50,id:"shieldmanQun",x:3800,faction:-1,lvl:12,drop:{heal:{percent:0.1,ct:2}},},
			{time:53,id:"pikemanQun",x:3800,faction:-1,lvl:12,},
			{time:56,id:"bowmanQun",x:3800,faction:-1,lvl:12,},

			{time:60,id:"shieldmanQun",x:3800,faction:-1,lvl:12,},
			{time:63,id:"pikemanQun",x:3800,faction:-1,lvl:12,},
			{time:66,id:"bowmanQun",x:3800,faction:-1,lvl:12,},
			{time:70,id:"mage",x:3800,faction:-1,lvl:12,},

			{time:75,id:"shieldmanQun",x:3800,faction:-1,lvl:12,},
			{time:78,id:"pikemanQun",x:3800,faction:-1,lvl:12,},
		],
	],	
	task:[
		
		{
			win:[
				{type:"allClear",faction:-1,text:'歼灭袁术先锋军',textNum:true,},
		
			],
			lose:[
//				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
			],
			func:function(){
				Macro.doLater(5,function(){
				Macro.showMessage('兵粮寸断，不能出兵',5);
				})
			},
		},
       		{
			win:[
				{type:"killUnit",faction:-1,text:'斩杀袁术',id:'YuanShu'},
		
			],
			lose:[
//				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
			],
			update:function(){
				MapConfig.func_1();
			}  
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
            		unit:true,
		},
		drop:{rage:{chance:0.5,num:1.2},gold:{chance:0.5,num:110,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:489,gold:0,gem:0},
	}
};