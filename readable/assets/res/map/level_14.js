var MapConfig={
	open:true,
	open_1:true,
	unit :[
		[
			{time:0,id:"Gate",x:200,faction:1,hp:12000*(1+0.5*(gDifficulty-1)),},
			{time:0,id:"Gate",x:3600,faction:-1,hp:60570*(1+0.5*(gDifficulty-1)),drop:{gold:{num:13,ct:5}},},

			{time:0,id:"Block",x:1400,hp:12000,faction:-1,deadOnNextStage:1,},
			{time:0,id:"pikemanQun",x:1500,faction:-1,lvl:10,},
			{time:0,id:"pikemanQun",x:1600,y:145,faction:-1,lvl:10,},
//			{time:1,id:"shieldmanQun",x:1700,faction:-1,lvl:10,},
			{time:1,id:"pikemanQun",x:2000,y:165,faction:-1,lvl:10,},
			{time:2,id:"pikemanQun",x:2100,y:165,faction:-1,lvl:10,},
		
			{time:3,id:"pikemanQun",x:2300,faction:-1,lvl:10,},
//			{time:4,id:"shieldmanQun",x:3600,faction:-1,lvl:10,},
			{time:6,id:"pikemanQun",x:2800,faction:-1,lvl:10,},
			{time:7,id:"pikemanQun",x:3000,faction:-1,lvl:10,},
			{time:9,id:"pikemanQun",x:3600,y:140,faction:-1,hp:1000,attack:50,},
			{time:10,id:"pikemanQun",x:3600,faction:-1,hp:1500,attack:50,},
			{time:12,id:"pikemanQun",x:3600,faction:-1,hp:1500,attack:50,},
			{time:16,id:"shieldmanQun",x:3600,y:150,faction:-1,hp:5000,attack:20,},
			{time:17,id:"pikemanQun",x:3600,y:150,faction:-1,hp:1500,attack:50,},
			{time:21,id:"shieldmanQun",x:3600,faction:-1,hp:5000,attack:80,},
			{time:25,id:"pikemanQun",x:3600,faction:-1,hp:1500,attack:50,},
			
			{time:35,id:"pikemanQun",x:3600,faction:-1,hp:1500,attack:50,},
			{time:38,id:"pikemanQun",x:3600,faction:-1,hp:1500,attack:50,},

		],
			[
			{time:0,id:"shieldmanWei",x:2000,faction:1,direction:-1,tag:11,lvl:10,func:function(unit){unit.stand(1)}},
			{time:0,id:"pikemanWei",x:2050,y:165,faction:1,direction:-1,tag:12,lvl:10,func:function(unit){unit.stand(1)}},
			{time:0,id:"shieldmanWei",x:2100,y:165,faction:1,direction:-1,tag:13,lvl:10,func:function(unit){unit.stand(1)}},
			{time:0,id:"pikemanWei",x:2150,faction:1,direction:-1,lvl:10,tag:14,func:function(unit){unit.stand(1)}},
			{time:0,id:"shieldmanWei",x:3600,faction:1,direction:-1,lvl:10,tag:15,func:function(unit){unit.stand(1)}},
			{time:0,id:"CaoCao1",name:"曹操",x:1750,faction:1,direction:-1,hp:1500,attack:50,tag:1,ai:{tryToMove:1,},func:function(unit){unit.stand(1);
//			Macro.setUnitSpawn(false);
			}},
			{time:0,id:"GuoJia",name:"郭嘉",x:1950,faction:1,direction:-1,hp:1500,attack:50,tag:2,ai:{tryToMove:1,},func:function(unit){unit.stand(1);
			Macro.setUnitSpawn(false);
			}},
		/*	{time:0,id:"PeiyuanShao",x:3800,faction:-1,hp:12000,attack:70,unitType:"boss",
					spell:{ability:{id:"lightShock",times:1,damage:100,},
                    cooldown:15,
                    config:{type:"channel",castTime:1,channelInterval:1,},
            },},*/	
//            		{time:0,id:"Gate",hp:12000,x:3500,faction:-1},
//           		{time:0,id:"fatManQun",x:3600,faction:-1,lvl:10,},
			{time:2,id:"pikemanQun",x:3600,faction:-1,lvl:10,},
			{time:3,id:"bowmanQun",x:3600,faction:-1,lvl:10,},
			{time:5,id:"shieldmanQun",x:3600,faction:-1,lvl:10,},
			{time:9,id:"pikemanQun",x:3600,y:140,faction:-1,lvl:10,},
			{time:10,id:"pikemanQun",x:3600,faction:-1,lvl:10,},
			{time:12,id:"pikemanQun",x:3600,faction:-1,lvl:10,},
//			{time:16,id:"fatManQun",x:3600,y:150,faction:-1,lvl:10,},
			{time:17,id:"bowmanQun",x:3600,y:150,faction:-1,lvl:10,},
			{time:21,id:"pikemanQun",x:3600,faction:-1,lvl:10,},
			{time:25,id:"pikemanQun",x:3600,faction:-1,lvl:10,},

//			{time:30,id:"fatManQun",x:3800,faction:-1,lvl:10,},
			{time:31,id:"pikemanQun",x:3800,faction:-1,lvl:10,},
			{time:33,id:"shieldmanQun",x:3800,y:150,faction:-1,lvl:10,},
			{time:35,id:"pikemanQun",x:3800,y:150,faction:-1,lvl:10,},
			{time:37,id:"pikemanQun",x:3800,faction:-1,lvl:10,},
//			{time:40,id:"mageQun",x:3800,faction:-1,lvl:10,},

			{time:45,id:"pikemanQun",x:3800,faction:-1,lvl:10,},
			{time:48,id:"pikemanQun",x:3800,faction:-1,lvl:10,},
			{time:50,id:"shieldmanQun",x:3800,y:150,faction:-1,lvl:10,},
			{time:53,id:"bowmanQun",x:3800,y:150,faction:-1,lvl:10,},
//			{time:57,id:"fatManQun",x:3800,faction:-1,lvl:10,},
			{time:60,id:"shieldmanQun",x:3800,faction:-1,lvl:10,},
				
			{time:100,id:"shieldmanQun",x:3800,y:150,faction:-1,lvl:10,},
			{time:103,id:"bowmanQun",x:3800,y:150,faction:-1,lvl:10,},
			{time:107,id:"pikemanQun",x:3800,faction:-1,lvl:10,},
			{time:110,id:"shieldmanQun",x:3800,faction:-1,lvl:10,},
//			{time:112,id:"mageQun",x:3800,faction:-1,lvl:10,},
			],
	],	
	task:[
		
		{
			taskFinishLatency:13,
			win:[
				{type:"allClear",faction:-1,text:'前去与曹操会合',},
			],
			lose:[
//				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
			],
			func:function(){
				Macro.setGameEdge(0,1500);	
			},

		},
		{
			win:[
//				{type:"killUnit",faction:-1,text:'斩杀张角',id:'general1',},
				{type:"siege",faction:-1,text:'攻破敌方城门！'},				
			],
			lose:[
//				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
			],
			func:function(){
				Macro.setGameEdge(0,3800);	
			},
			finishFunc:function(){
				Macro.flee();
			},
			update:function(){
			            if(g_sharedFightLayer.myhero&&g_sharedFightLayer.myhero.pos.x>=1400&&MapConfig.open_1){
			            	MapConfig.open_1=false;
				     	Macro.allUnitAction(function(unit){
			                        	unit.stand(true);
			                  	});
			            	Macro.camMoveTo(cc.p(1750,"current"),1,1);
				            var dialog = {
				            	skip:true,
					        	timeToNext : 2.5,
					         	text : [
					        		{
					        		0:"曹操：刘备出兵增援于我？",
					        		},
					        		{
					        		0:"郭嘉：刘备远来救援，也是一片好心。还请赵将军带兵攻破城门。",
					        		},
					        		{
					        		0:"赵云：攻破敌城无异于囊中探物！",
					        		},
					        	]
					} 
					var func = function(){
						Macro.doLater(1,function(){
		//					Macro.camMoveTo(cc.p(g_sharedFightLayer.myhero,"current"),1,1);
							Macro.camFollow(g_sharedFightLayer.myhero,60);
							Macro.setUnitSpawn(true);
							g_sharedFightLayer.myhero && g_sharedFightLayer.myhero.stand(false);
				     			Macro.allUnitAction(function(unit){
			                     		unit.setAI(true);
			                  			});
							Macro.unit(11).direction=1;
							Macro.unit(12).direction=1;
							Macro.unit(13).direction=1;
							Macro.unit(14).direction=1;
							Macro.unit(15).direction=1;

							Macro.unit(1).direction=1;
							Macro.unit(2).direction=1;
							Macro.unit(1).moveTo(2500);
							Macro.unit(2).moveTo(2500);
							Macro.doLater(2,function(){
								Macro.unit(1).fadeOut();
								Macro.unit(2).fadeOut();
							})
						})
					}
					Dialog.create(9,dialog,func);
				}
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
		},
		drop:{rage:{chance:0.5,num:1.2},gold:{chance:0.5,num:100,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:409,gold:0,gem:0},
	}
};