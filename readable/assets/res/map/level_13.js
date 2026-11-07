var MapConfig={
	open:true,
	open_1:true,
	unit :[
		[
			{time:0,id:"Gate",x:200,faction:1,hp:11000*(1+0.5*(gDifficulty-1)),tag:998},
			{time:0,id:"Gate",x:3600,faction:-1,hp:55730*(1+0.5*(gDifficulty-1)),drop:{gold:{num:11,ct:5}},},
			{time:0,id:"shieldmanQun",x:1500,faction:-1,lvl:9,},
			{time:0,id:"pikemanQun",x:2000,y:150,faction:-1,lvl:9,},
			{time:0,id:"pikemanQun",x:2200,y:150,faction:-1,lvl:9,},
			{time:0,id:"pikemanQun",x:3800,y:150,faction:-1,lvl:9,},
			{time:2,id:"pikemanQun",x:3900,y:150,faction:-1,lvl:9,},
			{time:0,id:"bowmanQun",x:3800,faction:-1,lv:9,},
//			{time:1,id:"bowmanQun",x:2500,faction:-1,hp:2000,attack:80,},
			{time:6,id:"shieldmanQun",x:3800,faction:-1,lvl:9,},
			{time:10,id:"pikemanQun",x:3800,faction:-1,lvl:9,},
			{time:13,id:"pikemanQun",x:3800,faction:-1,lvl:9,},
//			{time:15,id:"bowmanQun",x:3500,faction:-1,hp:2000,attack:80,},
			{time:18,id:"shieldmanQun",x:3800,faction:-1,lvl:9,},

			{time:20,id:"shieldmanQun",x:3800,faction:-1,lvl:9,},
			{time:23,id:"bowmanQun",x:3800,faction:-1,lv:9,},
			{time:24,id:"bowmanQun",x:3800,faction:-1,hp:2000,attack:80,},

			{time:30,id:"shieldmanQun",x:3800,faction:-1,lvl:9,},
			{time:33,id:"pikemanQun",x:3800,faction:-1,lvl:9,},
			{time:35,id:"pikemanQun",x:3800,faction:-1,lvl:9,},
			{time:40,id:"bowmanQun",x:3800,faction:-1,hp:2000,attack:80,},
			{time:42,id:"shieldmanQun",x:3800,faction:-1,lvl:9,},

			{time:50,id:"shieldmanQun",x:3800,faction:-1,lvl:9,},
			{time:55,id:"shieldmanQun",x:3800,faction:-1,lvl:9,},
			{time:58,id:"pikemanQun",x:3800,faction:-1,lvl:9,},
			{time:62,id:"pikemanQun",x:3500,faction:-1,hp:2000,attack:80,},

			{time:65,id:"bowmanQun",x:3800,faction:-1,lvl:9,},
			{time:67,id:"bowmanQun",x:3800,faction:-1,lvl:9,},
			{time:69,id:"bowmanQun",x:3800,faction:-1,lvl:9,},

		],
		[	
			{time:3,id:"pikemanQun",x:3800,faction:-1,lvl:20,},
			{time:5,id:"pikemanQun",x:3800,faction:-1,lvl:20,},
			{time:9,id:"pikemanQun",x:3800,faction:-1,lvl:20,},
			{time:12,id:"pikemanQun",x:3800,faction:-1,lvl:20,},
			{time:15,id:"pikemanQun",x:3800,faction:-1,lvl:20,},
			{time:19,id:"pikemanQun",x:3800,faction:-1,lvl:20,},
			{time:23,id:"pikemanQun",x:3800,faction:-1,lvl:20,},
						
			{time:24,id:"HuaXiong",lvl:1,x:3800,faction:-1,unitType:"boss",drop:{gold:{num:20,ct:3}},
//				spell:{ability:{id:"batterStrike",num:1,damage:250,},
//                    cooldown:15,
//                    config:{castTime:1.5,channelInterval:0.5,},
//                    },
            },
//           	{time:2,id:"pikemanQun",x:3600,faction:-1,lvl:8,drop:{gold:{num:300,ct:2}}},
//			{time:3,id:"pikemanQun",x:3800,faction:-1,lvl:8,},
//			{time:10,id:"pikemanQun",x:3800,faction:-1,lvl:8,drop:{heal:{percent:0.2,ct:1}}},
//			{time:13,id:"pikemanQun",x:3800,faction:-1,lvl:8,drop:{gold:{num:300,ct:2}}},
//			{time:20,id:"pikemanQun",x:3800,faction:-1,lvl:8,},
//			{time:22,id:"pikemanQun",x:3800,faction:-1,lvl:8,drop:{gold:{num:300,ct:2}}},
//			{time:33,id:"pikemanQun",x:3800,faction:-1,lvl:8,},
//			{time:34,id:"pikemanQun",x:3800,faction:-1,lvl:8,drop:{heal:{percent:0.1,ct:1}}},
//			{time:45,id:"pikemanQun",x:3800,faction:-1,lvl:8,},
//			{time:47,id:"pikemanQun",x:3800,faction:-1,lvl:8,},
//			{time:48,id:"pikemanQun",x:3800,faction:-1,lvl:8,},
		],		
	],	
	task:[
		
		{
			taskFinishLatency:10,
			win:[
				{type:"allClear",faction:-1,text:'歼灭董卓军先锋',textNum:true},
			],
			lose:[
//				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
			],
            func:function(){
//            	cc.msgbox(2);
//                Macro.unit(1).setAI(false);  //屏蔽AI，让单位接收指令，指令完需要重新设置为true开启AI.
//                Macro.unit(1).moveTo(1000);
//                Macro.doLater(2,function(){
//                            
//                            Macro.allUnitAction(function(unit){
//                                                    unit.setAI(false);
//                                                    unit.stand();
//                                                });
//                        });
            },
		},
       	{
			win:[
				{type:"killUnit",faction:-1,text:'斩杀华雄',id:'HuaXiong',},
			],
			lose:[
			//	{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
			],
			func:function(){
				Macro.setUnitBtnDisable(true);
				var dialog = {
				        	timeToNext : 3,
				         	text : [
				        		{
				        		0:"关羽：子龙，主公令你先行回营。为兄替你上阵！",
				        		},
				        		{
				        		0:"赵云：我这就回去。二哥且小心那华雄！",
				        		},
				        	]
		        		}
		        var func = function(){
		       // 	Macro.setUnitSpawn(true);
				//	Macro.camFollow(g_sharedFightLayer.myhero);
		        }
				Macro.doLater(2,function(){
//					cc.msgbox(1);
				     	Macro.allUnitAction(function(unit){
						if(g_sharedFightLayer.myhero && unit!=g_sharedFightLayer.myhero)
			                     	unit.fadeOut();
			            	});
					var guanyu=g_sharedFightLayer.createUnit({time:0,id:"GuanYu",x:500,faction:1,ai:"player",hp:20000*Math.pow(1.5,(gDifficulty-1)),attack:800*Math.pow(1.5,(gDifficulty-1)),attackRange:450,tag:1,
				                    spell:{ability:{id:"Meteorite",num:5,damage:150,},
				                    cooldown:10,
				                    config:{castTime:0.5,channelInterval:0.5,},
				                    },
	                    		});
					g_sharedFightLayer.myhero && g_sharedFightLayer.myhero.stand(true);
					Macro.camMoveTo(cc.p(670,"current"),1,1);
					Dialog.create(6,dialog,func);
					Macro.doLater(2,function(){
						g_sharedFightLayer.myhero && g_sharedFightLayer.myhero.moveTo(10);
						Macro.doLater(2,function(){
							g_sharedFightLayer.myhero && g_sharedFightLayer.myhero.remove();
							g_sharedFightLayer.setMyHero(guanyu);
							Macro.camFollow(g_sharedFightLayer.myhero,60);
						})
					})
				})   
			},
			update:function(){
				
				
			},
		},
	],
	init:function(){
		g_sharedFightLayer.registerEdge(3500,-1)
//		Macro.setCam(cc.p(2000,"current"));
//		Macro.camMoveBy(cc.p(-500,"current"),0,5);
//        var dialog = {
//        	timeToNext : 5,
//         	text : [
//         		
//        		{
//        		0:"喽啰:",
//        		1:"哈哈哈哈哈哈哈哈哈哈哈",
//        			},
//        	]
//        }
//        var func = function(){
//			Macro.setCam(cc.p(VISIBLE_WIDTH/2,"current"));
//            Macro.doLater(function(){
//                                        Macro.showText("示例用弹出文本");
//                                    },2);
//                                       
//                             
//              
//        }
//
//		Dialog.create(5,dialog,func);
	},
	config:{
		disable:{
//			myhero:true,ability:true,
		},
		drop:{rage:{chance:0.5,num:1.2},gold:{chance:0.5,num:90,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:375,gold:0,gem:0},
	}
};