
var MapConfig={
	open:true,
	open_1:true,
	func_1:function(){
        			  if(MapConfig.open && g_sharedFightLayer.myhero){
		            	MapConfig.open=false;
		            	MapConfig.open_1=true;
		            	Macro.setUnitBtnDisable(true);
		            	Macro.setUnitSpawn(false);
		            	var zhangFei = g_sharedFightLayer.createUnit({time:0,id:"ZhangFei4",name:"张飞",movementSpeed:1.0,lvl:1,x:2500,faction:-1,status:{unDead:1},unitType:"boss",drop:{gold:{num:25,ct:3}},tag:1,
		            		
				             func:function(unit){
//                    unit.setOpacity(200);
				             	 
				                 unit.setInvisible(true);
				                 Macro.schedule(unit,function(){
				                     unit.setInvisible(false);
				                     unit.castAbility({ability:{id:"Leap",anim:{movementID:"attack4",start:10,stun:true,speed:0.7,stand:true}}},true);
				                 },1.3,1);
				             },
				         	stage:[
 				         	    {hp:0.5,
		     spell:{
					ability:{id:"Howl2",damage:30,},
                	cooldown:8,
                	config:{startSound:"res/sound/man.ogg",endSound:"res/sound/man5.ogg",
                		alert:{type:"direction",width:420},
	                		castTime:1.2,name:"怒吼",
	              			anim:{movementID:"attack5",loop:false,speed:1,},
                		    anim2:{movementID:"attack5",loop:false,start:37,pause:true,time:0.5,stun:true,
                		    	   child:{movementID:"attack5",start:37,stun:true,loop:false,
                		    	          child:{movementID:"stand",stun:true,loop:false,},
                		    	         },
                		    	  },
              		},
              },
 				         	     func:function(unit){
 				         	     	 
//				             	 var particle = cc.ParticleSystem.create("res/NewUi/Shop/yubiStarLight.plist");
//                                    particle.setPosition(unit.getMidPoint());
//                                    particle.setPositionType(cc.ParticleSystem.TYPE_RELATIVE);
//                                    unit.addChild(particle/*,10000*/);
 				         	     	 
			     	                  Macro.allUnitAction(function(unit){
		                        	         unit.stand(true);
		                              });
				         		 	  unit.chat("好小子，看来得动真格了");
		 		                      Macro.doLater(1,function(){
		 		                      	  unit.setColor(cc.c3b(253, 1, 1));
                       					  unit.applyParticle({head:{id:"blackfire"},chest:{id:"blackfire"},left_arm:{id:"blackfire"},right_arm:{id:"blackfire"},left_leg:{id:"blackfire"},right_leg:{id:"blackfire"},});
			 			                  unit.castAbility({ability:{id:"flameGun2",anim:{movementID:"attack2",start:0,stun:true,speed:1,stand:true}}},true);
		 			                  });
		 		                      Macro.doLater(2,function(){
			     	                  	Macro.allUnitAction(function(unit){
		                        	         unit.setAI(true);
		                              	});
		 			                  });
				         		 }
				         		},
				         	],
		            	});
						Macro.doLater(2,function(){
                            zhangFei.introduce(function(unit){
                                                         }
                            );
						});

			     	Macro.allUnitAction(function(unit){
		                        	unit.stand(true);
		            });
	            var dialog = {
							skip:true,
				        	timeToNext : 2,
				         	text : [
                            {
                                0:"",
                                1:"",
                                2:"",
                            },
			         		{
			        			0:"张飞：听大哥说你骁勇善战，助其大破敌军",
			        			1:"       可敢与我大战三十，哦不，三百回合？",
			        		},
			        		{
			        			0:"赵云：子龙不过雕虫小技，三哥面前不敢称勇",
			        		},
                          	{
                                0:"张飞：好你个小子，不管不管，咱们先比试一番!",
                          	},
				        		]
				}
				var func = function(){
					Macro.camFollow("myhero",10);
					Macro.allUnitAction(function(unit){
	                	unit.setAI(true);
	            	});
		 		    Macro.doLater(4,function(){
			 			Macro.showMessage('武将单挑，不可造兵',4);
		 			});
				}
				Dialog.create(14,dialog,func);
			}
			
			if(MapConfig.open_1&&Macro.unit(1)&&Macro.unit(1).hp<=1){
				MapConfig.open_1=false;
				Macro.allUnitAction(function(unit){
	                unit.stand(true);
	            });
	            var dialog = {
							skip:true,
				        	timeToNext : 3,
				         	text : [
				        		{
				        		0:"张飞：哈哈，痛快！果真有点本事！",
				        		},
				        		]
				}
				var func = function(){
					g_sharedTaskManager.nextTask();
				}
				Dialog.create(4,dialog,func);
			}
	},
	unit :[
		[
			{time:0,id:"Gate",x:200,faction:1,hp:12000*(1+0.5*(gDifficulty-1)),},
			{time:0,id:"Gate",x:3600,faction:-1,hp:65755*(1+0.5*(gDifficulty-1)),drop:{gold:{num:15,ct:5}},},

		],
	],		

	task:[
		
		{
			win:[
				{type:"killUnit",faction:-1,text:'挑战张飞',id:'DiaoChan',},
			],
			lose:[
			],
        		update:function(){
        			MapConfig.func_1();
        		},
		},
	],
	init:function(){
		g_sharedFightLayer.registerEdge(3500,-1);
		g_sharedFightLayer.myhero.pos.x = 2000;
		Macro.camDisFollow("myhero");
		Macro.setCam(cc.p(2250,"current"));

	},
	config:{
		disable:{
		},
		drop:{rage:{chance:0.5,num:1.2},gold:{chance:0.5,num:100,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:447,gold:0,gem:0},
	}
};