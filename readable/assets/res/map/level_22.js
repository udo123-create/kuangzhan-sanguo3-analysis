var MapConfig={
	open:true,
	open_1:false,  
	open_222:true,    
	func_1:function(){
		if(MapConfig.open_222&&Macro.unit(1)){
			cc.log(111);
			MapConfig.open_222=false;
			Macro.setUnitBtnDisable(true);
			Macro.setUnitHpFrameVisible(Macro.unit(1),false);
			g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero);
//			     	Macro.allUnitAction(function(unit){
//						if(unit.faction==1 && unit!=g_sharedFightLayer.myhero && unit!=Macro.unit(1)&&unit!=Macro.unit(2)&&unit!=Macro.unit(3)){
//								unit.moveTo(400);
//								Macro.doLater(2,function(){
//									unit.fadeOut();
//								})
//						}	                        
//		            	});
		}
		if(MapConfig.open&&g_sharedFightLayer.myhero&&Macro.unit(1)&&g_sharedFightLayer.myhero.pos.x>=2500){
		     	Macro.allUnitAction(function(unit){
					if(unit.faction==1 && unit!=g_sharedFightLayer.myhero && unit!=Macro.unit(1)&&unit!=Macro.unit(2)&&unit!=Macro.unit(3)){
							unit.moveTo(400);
							Macro.doLater(2,function(){
								unit.fadeOut();
							})
					}	                        
	            	});
			MapConfig.open=false;
			MapConfig.open_1=true;
			Macro.allUnitAction(function(unit){
	                      	unit.stand(true);
	                  	});
	                  	Macro.camMoveTo(cc.p(2850,"current"),1,1);
	                  	var dialog = {
	                  		skip:true,
				timeToNext : 3,
				text : [
			        		{
			        		0:"孙策：前方是赵云部队？",
			        		},
			        		{
			        		0:"赵云：正是。此间主公有难，徐州告急，还请让我方军队通过！",
			        		},
			        		{
			        		0:"孙策：难得相见何不切磋一下？公瑾你先带小妹离开。",
			        	       	},
			        		{
			        		0:"周瑜：......伯符你自行小心。",
			        		},
			        	]
			} 
			var func = function(){
				Macro.doLater(1,function(){
//					Macro.camMoveTo(cc.p(g_sharedFightLayer.myhero,"current"),1,1);
//					Macro.unit(1).faction=-1;
					Macro.unit(1).setFaction(-1);
					Macro.unit(2).setFaction(-1);
					Macro.unit(3).setFaction(-1);
					Macro.setUnitHpFrameVisible(Macro.unit(1),true);
					g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero);
//					g_sharedFightLayer.myhero.stand(false);
		     			Macro.allUnitAction(function(unit){
	                     			unit.setAI(true);
	                  			});
					Macro.unit(2).direction=1;
					Macro.unit(3).direction=1;
					Macro.unit(2).moveTo(3900);
					Macro.unit(3).moveTo(3900);
					Macro.doLater(1,function(){
						Macro.unit(2).fadeOut();
						Macro.unit(3).fadeOut();
					})
					Macro.doLater(1,function(){
						g_sharedTaskManager.nextTask();
					})
				})
			}
			Dialog.create(13.5,dialog,func);
		}
	},
	func_2:function(){
		if(MapConfig.open_1&&Macro.unit(1).hp<=Macro.unit(1).maxHp*0.1){
			MapConfig.open_1=false;
			Macro.allUnitAction(function(unit){
		                        unit.stand(true);
		                        unit.setAI(false);
			});
	            var dialog = {
		        	timeToNext : 3.5,
		         	text : [
		        		{
		        		0:"孙策：赵将军确实武艺过人。实不相瞒，我本奉袁术之命在此拦截你......",
		        		},
		        		{
		        		0:"赵云：为何要投靠袁术这种虚妄小人？！",
		        		},
		        		{
		        		0:"孙策：此行有幸遇到众多贤士，我已决意回到江东重振家业。",
		        		1:"             他日相遇，你我再一决高下！",		        		
		        		},
		        		{
		        		0:"赵云：一言为定！",
		        		},
		        	]
		        } 
			var func = function(){
					Macro.doLater(0.5,function(){
					g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero);
					g_sharedTaskManager.nextTask();
				})
			}
			Dialog.create(15.5,dialog,func);
		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:22000*(1+0.5*(gDifficulty-1)),},
			{time:0,id:"Gate",x:3600,faction:-1,hp:113760*(1+0.5*(gDifficulty-1)),drop:{gold:{num:55,ct:5}},},
		
			{time:0,id:"Block",x:2200,hp:168000000,faction:-1,deadOnNextStage:1,},
	
			{time:1,id:"pikemanWu",x:2500,faction:-1,lvl:17},
			{time:2,id:"pikemanWu",x:2500,faction:-1,lvl:17},
			{time:3,id:"pikemanWu",x:2500,faction:-1,lvl:17},

			{time:4,id:"pikemanWu",x:2500,faction:-1,lvl:17},
//			{time:5,id:"mage",x:2600,faction:-1,lvl:17},		
			{time:7,id:"pikemanWu",x:2500,faction:-1,lvl:17},
			{time:7,id:"bowmanWu",x:2500,faction:-1,lvl:17,},		


			{time:13,id:"pikemanWu",x:2500,faction:-1,lvl:17,},
			{time:14,id:"pikemanWu",x:2500,faction:-1,lvl:17,},
			{time:17,id:"shieldmanWu",x:2500,faction:-1,lvl:17},	

			{time:25,id:"bowmanWu",x:2500,faction:-1,lvl:17,},
			{time:26,id:"pikemanWu",x:2500,faction:-1,lvl:17,},
			{time:29,id:"bowmanWu",x:2500,faction:-1,lvl:17},	

			{time:30,id:"shieldmanWu",x:2500,faction:-1,lvl:17},
			{time:37,id:"shieldmanWu",x:2500,faction:-1,lvl:17},
			{time:38,id:"bowmanWu",x:2500,faction:-1,lvl:17},
//			{time:40,id:"mageWu",x:2500,faction:-1,lvl:17,},	

			{time:43,id:"bowmanWu",x:2500,faction:-1,lvl:17,},
			{time:45,id:"pikemanWu",x:2500,faction:-1,lvl:17,},
			{time:46,id:"bowmanWu",x:2500,faction:-1,lvl:17,drop:{heal:{percent:0.1,ct:4}}},	

			{time:50,id:"mageWu",x:2600,faction:-1,lvl:17},
			{time:52,id:"bowmanWu",x:2500,faction:-1,lvl:17},
				
			{time:60,id:"fatManWu",x:3800,faction:-1,lvl:17,},
			{time:61,id:"pikemanWu",x:3800,faction:-1,lvl:17,},
			{time:62,id:"bowmanWu",x:3900,faction:-1,lvl:17},	

			{time:68,id:"shieldmanWu",x:3800,faction:-1,lvl:17},
			{time:70,id:"shieldmanWu",x:3800,faction:-1,lvl:17},
			{time:72,id:"bowmanWu",x:3800,faction:-1,lvl:17},
			{time:73,id:"bowmanWu",x:3900,faction:-1,lvl:17},	

			{time:80,id:"fatManWu",x:3800,faction:-1,lvl:17,},
			{time:82,id:"pikemanWu",x:3800,faction:-1,lvl:17,},
			{time:86,id:"bowmanWu",x:3900,faction:-1,lvl:17},	
			{time:89,id:"shieldmanWu",x:3800,faction:-1,lvl:17,drop:{heal:{percent:0.1,ct:2}}},	

		],
		[
			{time:0,id:"SunCe",lvl:1,x:2780,faction:1,direction:-1,drop:{gold:{num:70,ct:3},heal:{percent:0.1,ct:2}},unitType:"boss",func:function(unit){unit.stand(1);},tag:1,status:{unDead:1},
//					stage:[ //阶段
//				                    {
//				                        hp:0.8,
//				                        qte:{
//				                                group:[{direction:90,y:290},{direction:90,y:290},{direction:90,y:290},{direction:90,y:290}],
//				                                onSuccess:{caster:this.myhero,spell:{ability:{id:"SSYJ"}}},
////				                                onFail:{caster:this.myhero,spell:{ability:{id:"SSYJ"}}},
//				                            },
//				                    },
//				            ],
			},
			{time:0,id:"ZhouYu",x:3000,faction:1,direction:-1,func:function(unit){unit.stand(1);},tag:2,ai:{tryToMove:1,},},
			{time:0,id:"SunShangxiang",x:3140,faction:1,direction:-1,func:function(unit){unit.stand(1);},tag:3,ai:{tryToMove:1,},},
			
//			{time:0,id:"fatManWu",x:3800,faction:-1,lvl:17,},
//			{time:1,id:"pikemanWu",x:3800,faction:-1,lvl:17,},
//			{time:2,id:"bowmanWu",x:3900,faction:-1,lvl:17},	
//
//			{time:5,id:"shieldmanWu",x:3800,faction:-1,lvl:17},
//			{time:7,id:"shieldmanWu",x:3800,faction:-1,lvl:17},
//			{time:9,id:"bowmanWu",x:3800,faction:-1,lvl:17},
//			{time:10,id:"bowmanWu",x:3900,faction:-1,lvl:17},	
//
//			{time:12,id:"fatManWu",x:3800,faction:-1,lvl:17,},
//			{time:20,id:"pikemanWu",x:3800,faction:-1,lvl:17,},
//			{time:20,id:"bowmanWu",x:3900,faction:-1,lvl:17},	
//			{time:21,id:"shieldmanWu",x:3800,faction:-1,lvl:17},
//
//			{time:30,id:"fatManWu",x:3800,faction:-1,lvl:17,},
//			{time:31,id:"pikemanWu",x:3800,faction:-1,lvl:17,},
//			{time:33,id:"pikemanWu",x:3900,faction:-1,lvl:17},	
//			{time:35,id:"shieldmanWu",x:3800,faction:-1,lvl:17},
//
//			{time:39,id:"bowmanWu",x:3900,faction:-1,lvl:17},	
//			{time:40,id:"bowmanWu",x:3900,faction:-1,lvl:17},	
//			{time:41,id:"bowmanWu",x:3900,faction:-1,lvl:17},	
//
//			{time:48,id:"shieldmanWu",x:3800,faction:-1,lvl:17,},
//			{time:49,id:"pikemanWu",x:3800,faction:-1,lvl:17,},
//			{time:52,id:"pikemanWu",x:3900,faction:-1,lvl:17},	
//			{time:55,id:"shieldmanWu",x:3800,faction:-1,lvl:17},
//
//			{time:58,id:"CaoRen",x:3800,faction:-1,},
//
//			{time:59,id:"shieldmanWu",x:3800,faction:-1,lvl:17,},
//			{time:60,id:"mage",x:3800,faction:-1,lvl:17,},
//			{time:62,id:"bowmanWu",x:3900,faction:-1,lvl:17},	
//			{time:65,id:"shieldmanWu",x:3800,faction:-1,lvl:17},
//			{time:70,id:"pikemanWu",x:3800,faction:-1,lvl:17,},
//			{time:71,id:"pikemanWu",x:3900,faction:-1,lvl:17},	
		],
	],		

	
	task:[
		
		{
	//		taskFinishLatency:0,
			win:[
				{type:"allClear",faction:-1,text:'赶回徐州支援刘备',textNum:true,},
			],
			lose:[
				
			],
		    func:function(){
		    	Macro.setGameEdge(0,2400);	
		    },
			update:function(){
				
			},
        
		},
	{
			win:[
					{type:"killUnit",faction:-1,text:'击败孙策',id:'DiaoChan',noText:true,},
				],
			lose:[
				
				],	
			func:function(){
				Macro.setGameEdge(0,3800);
//				if(Macro.unit(1)){
//					Macro.setUnitBtnDisable(true);
//					Macro.setUnitHpFrameVisible(Macro.unit(1),false);
//					Macro.camFollow(g_sharedFightLayer.myhero);
//					     	Macro.allUnitAction(function(unit){
//								if(unit.faction==1 && unit!=g_sharedFightLayer.myhero && unit!=Macro.unit(1)&&unit!=Macro.unit(2)&&unit!=Macro.unit(3)){
//										unit.moveTo(400);
//										Macro.doLater(2,function(){
//											unit.fadeOut();
//										})
//								}	                        
//				            	});
//				}
			},
			update:function(){
//				if(MapConfig.open_222){
//					MapConfig.open_222=false;
//				}
				MapConfig.func_1();
			},	
	},
       	{
//			taskTextShowLatency:16,
			win:[
					{type:"killUnit",faction:-1,text:'击败孙策',id:'SunCe',},
				],
			lose:[
				
				],	
			func:function(){
				Macro.allUnitAction(function(unit){
					if(g_sharedFightLayer.myhero && unit.faction==1 && unit!=g_sharedFightLayer.myhero){
						unit.moveTo(400);
						Macro.doLater(2,function(){
							unit.fadeOut();
						})
					}	                        
				});
				g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero);
				Macro.setGameEdge(0,3800);
			},
			update:function(){
				MapConfig.func_1();
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
		},
		drop:{rage:{chance:1,num:1},gold:{chance:0.5,num:210,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:844,gold:0,gem:0},
	}
};