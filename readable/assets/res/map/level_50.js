
var MapConfig={
	open_1:true,   
	open_1_1:true,   
	open_1_2:false,  
	open_1_3:false,               
	func_1:function(){
		if(MapConfig.open_1 && Macro.unit(1)){
			MapConfig.open_1=false;
//			var config={camX:3300,camSpeed:1,dialogTime:4,unitID:1,camOnce:1,timeToNext : 3,
//				dialog:{
//				        	timeToNext : 3,
//					text : [
//				         	{
//				        		0:"曹操：我百万大军居然葬身火海，诸葛村夫和周瑜小儿何在？！",
//				        		},
//				        	]
//				}
//			}
//			Macro.bossAppear(config);
		}
		if(MapConfig.open_1_1&&Macro.unit(1) && Macro.unit(1).hp<=Macro.unit(1).maxHp*0.50){
			Macro.camFollow(Macro.unit(1),60);
			MapConfig.open_1_1=false;
	    		Macro.allUnitAction(function(unit){
                			unit.stand(true);
			});
			Macro.setUnitSpawn(false);
       			var dialog = {
		        		timeToNext : 3,
		         	text : [
		        			{
		        			0:"曹操：众将士！",
		        			},
		        		]
			} 
			var func = function(){
				Macro.allUnitAction(function(unit){
		            		unit.setAI(true);
		            		Macro.setUnitHpFrameVisible(Macro.unit(1),false);
		        		});
				Macro.setUnitSpawn(true);
				g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero,60);
				Macro.unit(1).movementSpeed=4;
				Macro.unit(1).moveTo(4100,true);
				Macro.doLater(2,function(){
					Macro.unit(1).fadeOut();
				})
			}
			Dialog.create(3,dialog,func);
			MapConfig.open_1_2=true;
			Macro.doLater(2,function(){
				var caocao_x = Macro.unit(1).pos.x
				g_sharedFightLayer.createUnit({time:0,id:"ZhangLiao",x:caocao_x+400,hp:160000*Math.pow(1.5,(gDifficulty-1)),attack:4000*Math.pow(1.5,(gDifficulty-1)),status:{noDismember:1},faction:-1,
					ability:{
						ability:{id:"Meteorite",num:10,damage:4000},
						cooldown:12,
						config:{
							castTime:2,
            	                  anim:{movementID:"attack17",speed:0.22,loop:false,start:0,time:2.5,},
            	                  anim2:{movementID:"attack17",speed:0.6,loop:false,start:13,stun:true,
                                         child:{movementID:"stand",start:0,stun:true,stunTimeOnFinish:0.3}
            	                        },
					        },
				        },
				})
				g_sharedFightLayer.createUnit({time:0,id:"ZhangHe",x:caocao_x+400,hp:160000*Math.pow(1.5,(gDifficulty-1)),attack:4000*Math.pow(1.5,(gDifficulty-1)),status:{noDismember:1},faction:-1,
					spell:{
						ability:{id:"rotationKnife",ftimes:0.7,btimes:0.6,stimes:0.1,range:600,damage:1000,},
						cooldown:15,
				            	config:{
					            	castTime:0.67,
					            	anim:{movementID:"attack2",speed:1,start:0,},
					            	anim2:{movementID:"attack2",speed:1,loop:false,start:22,time:0.1,stunTimeOnFinish:0.2,stun:true,}
				            	},
			            	}
	        			})
	        		})
		}
		if(MapConfig.open_1_2 && g_sharedFightLayer.myhero && g_sharedFightLayer.myhero.pos.x>2600){
			    cc.log("赵云越线了")
			    g_sharedFightLayer.createUnit({time:0,id:"CaoCao2",unitType:"boss",status:{unDead:1},x:3700,faction:-1,hp:200000*Math.pow(1.5,(gDifficulty-1)),attack:6000*Math.pow(1.5,(gDifficulty-1)),tag:10,
            })
			var unit =[
				{time:0,id:"shieldmanWei",x:3800,faction:-1,lvl:39},
				{time:0,id:"shieldmanWei",x:4000,faction:-1,lvl:39},
				{time:0,id:"mageWei",x:4300,faction:-1,lvl:39},
				{time:0,id:"mageWei",x:4300,faction:-1,lvl:39},

				{time:0,id:"shieldmanWei",x:4600,faction:-1,lvl:39},
				{time:0,id:"shieldmanWei",x:4800,faction:-1,lvl:39},
				{time:0,id:"bowmanWei",x:5200,faction:-1,lvl:39},
				{time:0,id:"bowmanWei",x:5300,faction:-1,lvl:39},


				{time:0,id:"shieldmanWei",x:5800,faction:-1,lvl:39},
				{time:0,id:"shieldmanWei",x:5900,faction:-1,lvl:39},
				{time:0,id:"bowmanWei",x:6200,faction:-1,lvl:39},
				{time:0,id:"bowmanWei",x:6300,faction:-1,lvl:39},

				{time:0,id:"fatManWei",x:6300,faction:-1,lvl:39},
				{time:0,id:"specialShieldMan",x:7000,faction:-1,lvl:39},
				{time:0,id:"shieldmanWei",x:6500,faction:-1,lvl:39},
			];
			for(var i=0;i<unit.length;i++){
				g_sharedFightLayer.createUnit(unit[i])
			}

			MapConfig.open_1_2=false;
//			Macro.setUnitHpFrameVisible(Macro.unit(1),true);
//			Macro.unit(1).movementSpeed=2;
//			Macro.unit(1).moveTo(400);	
//			Macro.unit(1).setAI(true);
//			Macro.unit(1).hp=Macro.unit(1).maxHp
			MapConfig.open_1_3=true;
		}
		if(MapConfig.open_1_3 && Macro.unit(10) && Macro.unit(10).hp< Macro.unit(10).maxHp*0.05){
			MapConfig.open_1_3=false; 
			Macro.allUnitAction(function(unit){
	            		unit.stand(true);
	        		});
			Macro.setUnitSpawn(false);
	       		var dialog = {
			        	timeToNext : 3.5,
				text : [
			        		{
			        			0:"曹操：此时灭魏，吴必定全力攻蜀，蜀灭亡不久矣。",
			        		},
			        		{
			        			0:"曹操：若想保全刘备，唯有天下三分。",
			        		},
			        		{
			        			0:"赵云：………………",
			        		},
			        	]
			} 
			var func = function(){
				g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero,60);
				Macro.unit(10).moveTo(4100,true);
				g_sharedTaskManager.nextTask();
			}
			Macro.camFollow(Macro.unit(10),60)
			Dialog.create(11,dialog,func);
			Macro.doLater(8.5,function(){
				g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero,60);
	//				Macro.doLater(2.5,function(){
	//					Macro.camFollow(Macro.unit(1),60);
	//					Macro.unit(1).moveTo(4100);
	//				})
			})			
		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:60000*(1+0.5*(gDifficulty-1)),},
			{time:0,id:"Gate",x:3600,faction:-1,hp:778930*(1+0.5*(gDifficulty-1)),drop:{gold:{num:200,ct:5}},},
			{time:0,id:"CaoCao2",x:3800,faction:-1,unitType:"boss",tag:1,hp:200000*Math.pow(1.5,(gDifficulty-1)),
				attack:6000*Math.pow(1.5,(gDifficulty-1)),status:{unDead:1},drop:{gold:{num:1000,ct:3}},
				spell:{			     
					ability:{id:"fireRain",num:10,damage:2000,range:600},
	     	        cooldown:17,
                    config:{castTime:0.8,
    	                  anim:{movementID:"attack",speed:0.5,loop:false,start:0,time:2.5,},
    	                  anim2:{movementID:"attack",speed:0.6,loop:false,start:11,stun:true,
    	                  child:{movementID:"stand",start:0,stun:true,stunTimeOnFinish:0.3}},
    	            },
				},
                func:function(unit){
    				var dialog={
    				        	timeToNext : 2,
    					text:[
    				         	    {
    				        		    0:"曹操：诸葛村夫和周瑜小儿！",
                                        1:"大军铁索连环，你们也要葬身于此！",
                                        2:"牺牲八十万大军也在所不惜！",
    				        		},
    				        	]
    				}
                    Macro.bossComeOutCgStart(unit,3300,7,function(){},dialog);
                    unit.moveTo(unit.pos.x - 300,true);
                   
                    Macro.schedule(unit,function(){
                        var spell = {    
            				ability:{id:"Missile",damage:0,prepareTime:0,speed:25,type:"pierce",spriteConfig:{type:"animation",imgPath:{loop:1}},
                                     rotation:-90,
                                endFunc:function(sprite){
                                    var config = {};
                                    config.zorder = unit.getZOrder() + 100;
                                    config.pos  = sprite.pos;
                                    config.fdamage = 0 
                                    config.times = 90;
                                    config.bimes = 0;
                                    config.noCrack = true;
                                    config.caster = unit;
                                    var bomb = FireBallBomb.create(config); 
                                     //BurningFlame.create(cc.p(this.firePos.x + (this.randx || 0), winSize.height - 460 + (this.randy || 0)),"hon",2) 
                                    g_sharedFightLayer.addChild(bomb); 
                                    g_sharedFightLayer.camShake(1,3);
                                    
                                },
                            },
            				cooldown:3,
            				config:{
                                        channelInterval:0.5,
                                        castTime:5,
            							anim:{
            									movementID:"attack3",speed:1,start:0,time:0.9,loop:false,stun:true,
            							},
                                        startFunc:function(){
                                            this.basePos = this.caster.pos;
                                        },
                                        channelConfig:function(i){
                                            var dy = 0,dx=0;
                                            switch(i){
                                                case 2:dy = 250;
                                                case 4:dy = 120,dx = -40;
                                                case 7:dy = 200,dx = 50;
                                            }
                                            var basePos = this.basePos;
                                            var posX = -(i+1) * VISIBLE_WIDTH/3.5-20+basePos.x;
                                            var startPos = cc.p(posX+kit.rndInt(50,150),VISIBLE_HEIGHT-100);
                                            var endPos = cc.p(posX+kit.rndInt(0,20)+dx,this.caster.pos.y+kit.rndInt(-15,75)+dy);
                                            var aiConfig = {startPos:startPos,endPos:endPos};
                                            return {
                                                aiConfig:aiConfig,
                                            }
                                        }
                     	    },
                        }
                        this.castAbility(spell,true);
                        Macro.camMoveBy(cc.p(-2000,0),0,6);
                    },1.5,1);
                },
			},
			{time:1,id:"specialShieldMan",x:3800,faction:-1,lvl:39},
//			{time:2,id:"specialShieldMan",x:3800,faction:-1,lvl:39},

			{time:3,id:"pikemanWei",x:3800,faction:-1,lvl:39},
			{time:4,id:"pikemanWei",x:3800,faction:-1,lvl:39},

//			{time:5,id:"specialShieldMan",x:3500,faction:-1,lvl:39},
			{time:5,id:"specialShieldMan",x:3600,faction:-1,lvl:39,drop:{heal:{percent:0.1,ct:2}},},
//			{time:5,id:"specialShieldMan",x:3800,faction:-1,lvl:39},
			{time:6,id:"bowmanWei",x:3800,faction:-1,lvl:39},
			{time:7,id:"bowmanWei",x:3800,faction:-1,lvl:39},

			{time:10,id:"shieldmanWei",x:3800,faction:-1,lvl:39},
			{time:11,id:"shieldmanWei",x:3800,faction:-1,lvl:39},
			{time:12,id:"mageWei",x:3800,faction:-1,lvl:39},
			{time:12,id:"mageWei",x:3800,faction:-1,lvl:39},

			{time:18,id:"shieldmanWei",x:3800,faction:-1,lvl:39},
			{time:20,id:"shieldmanWei",x:3800,faction:-1,lvl:39},
			{time:23,id:"bowmanWei",x:3800,faction:-1,lvl:39},
			{time:24,id:"bowmanWei",x:3800,faction:-1,lvl:39},


			{time:40,id:"shieldmanWei",x:3800,faction:-1,lvl:39},
			{time:41,id:"shieldmanWei",x:3800,faction:-1,lvl:39},
			{time:43,id:"pikemanWei",x:3800,faction:-1,lvl:39},
			{time:45,id:"bowmanWei",x:3800,faction:-1,lvl:39},
			{time:46,id:"bowmanWei",x:3800,faction:-1,lvl:39},

			{time:60,id:"fatManWei",x:3800,faction:-1,lvl:39},
			{time:62,id:"shieldmanWei",x:3800,faction:-1,lvl:39},
			{time:63,id:"shieldmanWei",x:3800,faction:-1,lvl:39},

			{time:70,id:"pikemanWei",x:3800,faction:-1,lvl:39},
			{time:72,id:"pikemanWei",x:3800,faction:-1,lvl:39,drop:{heal:{percent:0.1,ct:2}},},

			{time:75,id:"specialShieldMan",x:3800,faction:-1,lvl:39},
			{time:78,id:"bowmanWei",x:3800,faction:-1,lvl:39},
			{time:79,id:"bowmanWei",x:3800,faction:-1,lvl:39},

			{time:85,id:"pikemanWei",x:3800,faction:-1,lvl:39},
			{time:86,id:"pikemanWei",x:3800,faction:-1,lvl:39},
			{time:88,id:"mageWei",x:3800,faction:-1,lvl:39},

			{time:95,id:"pikemanWei",x:3800,faction:-1,lvl:39},
			{time:96,id:"pikemanWei",x:3800,faction:-1,lvl:39},

			{time:105,id:"specialShieldMan",x:3800,faction:-1,lvl:39},
			{time:106,id:"shieldmanWei",x:3800,faction:-1,lvl:39},
//			{time:108,id:"specialShieldMan",x:3800,faction:-1,lvl:39},
			{time:113,id:"bowmanWei",x:3800,faction:-1,lvl:39},
			{time:114,id:"bowmanWei",x:3800,faction:-1,lvl:39},

			{time:120,id:"shieldmanWei",x:3800,faction:-1,lvl:39},
			{time:121,id:"shieldmanWei",x:3800,faction:-1,lvl:39},
			{time:124,id:"mageWei",x:3800,faction:-1,lvl:39,drop:{heal:{percent:0.1,ct:2}},},
			{time:125,id:"mageWei",x:3800,faction:-1,lvl:39},

			{time:130,id:"shieldmanWei",x:3800,faction:-1,lvl:39},
			{time:131,id:"shieldmanWei",x:3800,faction:-1,lvl:39},
			{time:135,id:"bowmanWei",x:3800,faction:-1,lvl:39},
			{time:136,id:"bowmanWei",x:3800,faction:-1,lvl:39},

		],
	],		

	
	task:[
		
		{
			taskFinishLatency:0,
			win:[
//				{type:"allClear",faction:-1,text:'击败曹操',},
				{type:"killUnit",faction:-1,text:'击败曹操',id:'WeiChiHou',},
			],
			lose:[
				
			],
		    func:function(){
		    },
			update:function(){
				MapConfig.func_1();
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
			drop:{rage:{chance:1,num:1.2},gold:{chance:0.5,num:1000,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:11769,gold:0,gem:0},
	}
};