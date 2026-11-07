
var MapConfig={
	open:true,
	open_1:false,
	unit :[
		[
			{time:0,id:"Gate",x:200,faction:1,hp:12000*(1+0.5*(gDifficulty-1)),},
			{time:0,id:"Gate",x:3600,faction:-1,hp:65755*(1+0.5*(gDifficulty-1)),drop:{gold:{num:15,ct:5}},},

            		{time:0,id:"pikemanQun",x:1000,faction:-1,direction:-1,lvl:13,tag:2,},
			{time:0,id:"bowmanQun",x:1200,faction:-1,direction:-1,lvl:13,},
			{time:4,id:"pikemanQun",x:1500,faction:-1,direction:-1,lvl:13,},
			{time:4,id:"pikemanQun",x:2300,faction:-1,direction:-1,lvl:13,},
			{time:4,id:"fatManQun",x:2500,faction:-1,direction:-1,lvl:13,},
						
							
			{time:5,id:"bowmanQun",x:3300,faction:-1,direction:-1,lvl:13,},
			{time:6,id:"pikemanQun",x:3300,faction:-1,direction:-1,lvl:13,},
			{time:8,id:"pikemanQun",x:3300,faction:-1,direction:-1,lvl:13,},
			{time:9,id:"bowmanQun",x:3300,faction:-1,direction:-1,lvl:13,drop:{heal:{percent:0.1,ct:1}},},

			{time:13,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:13,},
			{time:16,id:"bowmanQun",x:3800,faction:-1,direction:-1,lvl:13,},

			{time:20,id:"pikemanQun",x:3100,faction:-1,direction:-1,lvl:13,},
			{time:21,id:"pikemanQun",x:3200,faction:-1,direction:-1,lvl:13,},
			{time:23,id:"bowmanQun",x:3200,faction:-1,direction:-1,lvl:13,},

			{time:26,id:"shieldmanQun",x:3800,faction:-1,direction:-1,lvl:13,},
			{time:27,id:"bowmanQun",x:3800,faction:-1,direction:-1,lvl:13,},

			{time:30,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:13,},
			{time:31,id:"bowmanQun",x:3800,faction:-1,direction:-1,lvl:13,},
			{time:35,id:"shieldmanQun",x:3800,faction:-1,direction:-1,lvl:13,},
			{time:36,id:"bowmanQun",x:3800,faction:-1,direction:-1,lvl:13,},

			{time:38,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:13,},
			{time:40,id:"bowmanQun",x:3800,faction:-1,direction:-1,lvl:13,},
			{time:42,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:13,drop:{heal:{percent:0.1,ct:2}},},
			{time:43,id:"bowmanQun",x:3800,faction:-1,direction:-1,lvl:13,},

		],
		[

//			{time:1,id:"shieldmanQun",x:3800,faction:-1,lvl:13,tag:3,},
			{time:2,id:"pikemanQun",x:3800,faction:-1,lvl:13,},
			{time:3,id:"bowmanQun",x:3800,faction:-1,lvl:13,},
			{time:4,id:"bowmanQun",x:3800,faction:-1,lvl:13,},
//			{time:5,id:"shieldmanQun",x:3600,faction:-1,lvl:13,},
//			{time:6,id:"bowmanQun",x:3800,faction:-1,lvl:13,},
			{time:7,id:"bowmanQun",x:3800,faction:-1,lvl:13,},	

//			{time:8,id:"shieldmanQun",x:3800,faction:-1,lvl:13,},
			{time:9,id:"pikemanQun",x:3800,faction:-1,lvl:13,drop:{heal:{percent:0.1,ct:2}},},
//			{time:10,id:"shieldmanQun",x:3800,faction:-1,lvl:13,},	
//			{time:11,id:"pikemanQun",x:3800,faction:-1,lvl:13,},
//			{time:12,id:"bowmanQun",x:3800,faction:-1,lvl:13,},
			{time:13,id:"pikemanQun",x:3800,faction:-1,lvl:13,},
		
			{time:14,id:"pikemanQun",x:3800,faction:-1,lvl:13,},
			{time:17,id:"bowmanQun",x:3800,faction:-1,lvl:13,drop:{heal:{percent:0.1,ct:4}},},
			{time:18,id:"pikemanQun",x:3800,faction:-1,lvl:13,},

//			{time:25,id:"shieldmanQun",x:3800,faction:-1,lvl:13,},			
			{time:27,id:"pikemanQun",x:3800,faction:-1,lvl:13,},
//			{time:29,id:"pikemanQun",x:3800,faction:-1,lvl:13,},
//			{time:35,id:"fatManQun",x:3800,faction:-1,lvl:13,drop:{heal:{percent:0.4,ct:1}},},			
			{time:38,id:"pikemanQun",x:3800,faction:-1,lvl:13,},
			{time:40,id:"pikemanQun",x:3800,faction:-1,lvl:13,},
			{time:45,id:"bowmanQun",x:3800,faction:-1,lvl:13,},
//			{time:46,id:"mageQun",x:3800,faction:-1,lvl:13,},

		],
	],		

	task:[
		
		{
			win:[
				{type:"killUnit",faction:-1,text:'前去打探敌情',id:'DiaoChan',},
			],
			lose:[
//				{type:"unitPosition",faction:-1,posX:3600,text:"别让小兵逃回城门"},
				/* {if(g_sharedFightLayer.unit(1).pos.x > 3799),id:'general',} */
			],
        		update:function(){
        			  if(MapConfig.open&&g_sharedFightLayer.myhero&&g_sharedFightLayer.myhero.pos.x>=2500){
		            	MapConfig.open=false;
		            	MapConfig.open_1=true;
		            	Macro.setUnitSpawn(false);
		            	var zhangLiao = g_sharedFightLayer.createUnit({time:0,id:"ZhangLiao",name:"张辽",lvl:1,x:3050,faction:-1,status:{unDead:1},unitType:"boss",drop:{gold:{num:25,ct:3}},tag:1,
//							func:function(unit){unit.stand(1);},
				             func:function(unit){
				                 unit.setInvisible(true);
				                 Macro.schedule(unit,function(){
				                     unit.setInvisible(false);
				                    unit.castAbility({ability:{id:"Leap",anim:{movementID:"attack3",start:3,stun:true,speed:0.4,stand:true}}},true);
				                 },1.3,1);
				             },
//		            		stage:[ //阶段
//				                    {
//				                        hp:0.5,
//				                        qte:{
//				                                group:[{direction:45,y:290},{direction:90,y:320},{direction:135,y:290}],
//				                                onSuccess:{caster:this.myhero,spell:{ability:{id:"SSYJ"}}},
////				                                onFail:{caster:this.myhero,spell:{ability:{id:"SSYJ"}}},
//				                            },
//				                    },
//				                ],
		            	});
						Macro.doLater(2,function(){
                            zhangLiao.introduce(function(unit){
//                                                            unit.setAI(true);
//                                                          unit.chat(["吾普施符水，救人万病！天下归道！"]);
//                                                            Macro.setInGameCg(false);
                                                         }
                            );
						})

//				g_sharedFightLayer.createUnit({time:0,id:"specialShieldMan",x:2900,faction:-1,lvl:7,});
//				g_sharedFightLayer.createUnit({time:0,id:"specialShieldMan",x:2950,faction:-1,lvl:6,});
			     	Macro.allUnitAction(function(unit){
		                        	unit.stand(true);
		                  	});
		            	Macro.camMoveTo(cc.p(2800,"current"),1,1);
		            	var dialog = {
		            		skip:true,
				        	timeToNext : 3,
				         	text : [
				        		{
				        		0:"",
				        		},
				        		{
				        		0:"张辽：吕布令我在此埋伏。你们这群乌合之众，休想再往前一步。",
				        		},
				        		{
				        		0:"赵云：董卓残暴不仁，百姓怨声载道。简直死有余辜！",
				        		},
				        	]
				} 
				var func = function(){
					Macro.doLater(1,function(){
//					Macro.camMoveTo(cc.p(g_sharedFightLayer.myhero,"current"),1,1);
					Macro.camFollow(g_sharedFightLayer.myhero,60);
					Macro.setUnitSpawn(true);
					g_sharedFightLayer.myhero.stand(false);
		     			Macro.allUnitAction(function(unit){
	                     		unit.setAI(true);
	                  			});
	                  			g_sharedTaskManager.nextTask();
						})
				}
				Dialog.create(8,dialog,func);
			}
        		},
		},
       		{
//			taskFinishLatency:10,
			win:[
					{type:"killUnit",faction:-1,text:'击杀张辽',id:'DiaoChan',},
				],
			lose:[],
			finishFunc:function(){
				Macro.flee();
			},		
		            update:function(){						
				 if(MapConfig.open_1&&g_sharedFightLayer.myhero&&Macro.unit(1).hp<=Macro.unit(1).maxHp*0.1){
			            	MapConfig.open_1=false;
			            	Macro.setUnitSpawn(false);
		//	            	MapConfig.open_1=true;
					g_sharedFightLayer.createUnit({time:0,id:"CaoCao1",name:"曹操",tag:2,x:300,faction:1,func:function(unit){unit.stand(1);},});
					g_sharedFightLayer.createUnit({time:0,id:"GuoJia",name:"郭嘉",x:200,y:130,faction:1,func:function(unit){unit.stand(1);},});
				     	Macro.allUnitAction(function(unit){
				                        unit.stand(true);
				                        unit.setAI(false);
			                  	});
			            	Macro.camMoveTo(cc.p(500,"current"),1,1);
			            	var dialog = {
					        	timeToNext : 3,
					         	text : [
					        		{
					        		0:"曹操：赵将军且慢，刀下留人。",
					        		},
					        		{
					        		0:"赵云：............",
					        		},
					        		{
					        		0:"张辽：敌人人多势众，不易恋战！下次定取了这曹贼。",
					        		},
					        	]
					} 
					var func1 = function(){
		//					Macro.doLater(1,function(){
		//					Macro.camMoveTo(cc.p(g_sharedFightLayer.myhero.pos.x,"current"),1,1);
		////					Macro.camFollow(g_sharedFightLayer.myhero);
		////					g_sharedFightLayer.myhero.stand(false);
		//					Macro.doLater(2,function(){
		//					g_sharedTaskManager.nextTask();
		//					});
		//						});
		//					Macro.doLater(10,function(){
						g_sharedTaskManager.nextTask();
		//					});
					}
					Dialog.create(11.5,dialog,func1);
					Macro.doLater(7.5,function(){
						Macro.camMoveTo(cc.p(Macro.unit(1).pos.x,"current"),1,1);
					});
				}
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
		drop:{rage:{chance:0.5,num:1.2},gold:{chance:0.5,num:100,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:447,gold:0,gem:0},
	}
};