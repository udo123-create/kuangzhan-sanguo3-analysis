var bossHp=(Math.pow(1.085,gPlayer.getCharacter().lvl)*60+66)*6000/66;
var	bossAttack=Math.pow(1.09,gPlayer.getCharacter().lvl)*100+66;
var MapConfig={
	open_1:true,   
	open_2:true,  
	open_3:true,    
	open_4:true,    
	open_5:true,    
	open_6:true,    
	open_11:true,
	open_12:true,
	open_13:true,
	open_14:true,
	open_15:true,
	open_16:true,
	open_17:true,
	heroLvl:gPlayer.getCharacter().lvl,
	func_1:function(){
		if(MapConfig.open_11&& Macro.unit(1) && Macro.unit(1).hp<0){
			MapConfig.open_11 = false;
			Macro.unit(101).dead();
		}
		if(MapConfig.open_12&& Macro.unit(2) && Macro.unit(2).hp<0){
			MapConfig.open_12 = false;
			Macro.unit(102).dead();
		}
		if(MapConfig.open_13&& Macro.unit(3) && Macro.unit(3).hp<0){
			MapConfig.open_13 = false;
			Macro.unit(103).dead();
		}
		if(MapConfig.open_14&& Macro.unit(4) && Macro.unit(4).hp<0){
			MapConfig.open_14 = false;
			Macro.unit(104).dead();
		}
		if(MapConfig.open_15&& Macro.unit(5) && Macro.unit(5).hp<0){
			MapConfig.open_15 = false;
			Macro.unit(105).dead();
		}
		if(MapConfig.open_16&& Macro.unit(6) && Macro.unit(6).hp<0){
			MapConfig.open_16 = false;
			Macro.unit(106).dead();
		}
		if(MapConfig.open_17&& Macro.unit(7) && Macro.unit(7).hp<0){
			MapConfig.open_17 = false;
			Macro.unit(107).dead();
			g_sharedTaskManager.nextTask();
		}
		if(MapConfig.open_1 && Macro.unit(1) && Macro.unit(1).hp<Macro.unit(1).maxHp*0.2){
			MapConfig.open_1=false;
			Macro.showMessage('敌将援手即将抵达',2);
			g_sharedFightLayer.createUnit(
				{time:0,id:"DiaoChan",x:3800,faction:-1,unitType:"boss",tag:2,hp:bossHp*0.5,attack:bossAttack*1.5,drop:{heal:{percent:0.3,ct:2},gold:{num:gPlayer.getCharacter().lvl*2,ct:5},},status:{noDismember:1},
					ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},
					spell:{
						     ability:{id:"Temptation",range:500,damage:bossAttack/2,times:5,},
						     cooldown:15,
			                 config:{
									castTime:0.875,
			            	         anim:{movementID:"attack8",speed:0.55,loop:false,start:0,time:1,},
			            	         anim2:{movementID:"stand",loop:true,start:0,time:0.5,stun:true,},
			            	 },
			        },
//					attackCombo:{
//								set:[[0,1,2],],
//						        combo:[
//									{id:"attack",attackRate:1.5,attackRange:200,hitRange:200,
//									/*	effect:function(attacker,obj){
//											var target = obj.target;
//									        obj.interuptLvl = 0.4;
//									        },*/
//									},
//									{id:"attack9",attackRate:1,attackRange:600,hitRange:260,},
//									{id:"attack10",attackRate:2,attackRange:600,hitRange:280,
//										effect:function(attacker,obj){
//					            		    var target = obj.target;
//										target.force(attacker.direction*10,1);}
//									},
//					//				{id:"attack2",attackRate:1.3,hitSpeed:0.8,time:1.3},
//					//		        {id:"attack7",attackRate:2,hitSpeed:1.2,attack:0,}
//					                  ]
//	    						},
				}
			)
			var sodier=[
				{time:0,id:"specialPikeMan",x:3800,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialBowMan",x:3900,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialPikeMan",x:4000,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialBowMan",x:4200,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialPikeMan",x:4600,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialBowMan",x:4800,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialPikeMan",x:5000,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialBowMan",x:5100,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialPikeMan",x:5500,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialBowMan",x:5600,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialPikeMan",x:5700,faction:-1,lvl:MapConfig.heroLvl},
			];
			for(var i=0;i<sodier.length;i++){
				g_sharedFightLayer.createUnit(sodier[i]);
			}
		}
		if(MapConfig.open_2 && Macro.unit(2) && Macro.unit(2).hp<Macro.unit(2).maxHp*0.2){
			MapConfig.open_2=false;
			Macro.showMessage('敌将援手即将抵达',2);
			g_sharedFightLayer.createUnit(
			   {time:0,id:"GuanYu",x:3800,faction:-1,unitType:"boss",tag:3,hp:bossHp*0.8,attack:bossAttack*1.5,drop:{heal:{percent:0.3,ct:2},gold:{num:gPlayer.getCharacter().lvl*2,ct:5},},status:{noDismember:1},
					ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},
					spell:{ability:{id:"Meteorite",num:5,damage:bossAttack,},
                   	 		cooldown:15,
                    		config:{castTime:0.5,channelInterval:0.5,},
                    },
//					attackCombo:{
//				        set:[[0,1,2,3],[4,5,],[6,7]],
//					    combo:[
//							{id:"attack9",attackRate:0.7,hitSpeed:1,},
//							{id:"attack10",attackRate:0.7,hitSpeed:1,},
//							{id:"attack11",attackRate:0.9,hitSpeed:1},
//							{id:"attack6",attackRate:1.5,hitSpeed:1,startFunc:"Nova",},
//
//							{id:"attack10",attackRate:0.7,hitSpeed:1,},
//							{id:"attack6",attackRate:1.5,hitSpeed:1,startFunc:"Nova",},
//								
//							{id:"attack11",attackRate:0.7,hitSpeed:1,},
//							{id:"attack7",attackRate:1.5,hitSpeed:1,startFunc:"Nova",},
//						]
//					},				
				}
			)
			var sodier=[
				{time:0,id:"specialShieldMan",x:3800,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialPikeMan",x:3900,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialShieldMan",x:4000,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialPikeMan",x:4200,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialPikeMan",x:4600,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialPikeMan",x:4800,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialShieldMan",x:5000,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialPikeMan",x:5100,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialShieldMan",x:5500,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialPikeMan",x:5600,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialShieldMan",x:5700,faction:-1,lvl:MapConfig.heroLvl},
			];
			for(var i=0;i<sodier.length;i++){
				g_sharedFightLayer.createUnit(sodier[i]);
			}
		}
		if(MapConfig.open_3 && Macro.unit(3) && Macro.unit(3).hp<Macro.unit(3).maxHp*0.2){
			MapConfig.open_3=false;
			Macro.showMessage('敌将援手即将抵达',2);
			g_sharedFightLayer.createUnit(
			   {time:0,id:"CaoCao2",x:3800,faction:-1,unitType:"boss",tag:4,hp:bossHp*0.9,attack:bossAttack*1.5,drop:{heal:{percent:0.3,ct:3},gold:{num:gPlayer.getCharacter().lvl*2,ct:5},},status:{noDismember:1},
					ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},
					spell:[
			                  {ability:{id:"Spine",range:700,damage:bossAttack*2,scale:0.5,rotation:0,times:8},
			                  		  cooldown:13,
			                  config:{castTime:0.8,
			                          anim:{movementID:"attack2",speed:0.2,loop:false,start:10,time:0.8,},
			                          anim2:{movementID:"attack2",speed:1,loop:false,start:5,time:0.5,stun:true,pause:true,
			                          child:{movementID:"attack2",speed:1,loop:false,start:5,time:0.32,stun:true,}}
			            	      },},

						     {ability:{id:"fireRain",num:10,damage:bossAttack*2,range:600},
						     	      cooldown:17,
			                          config:{castTime:0.8,
			            	                  anim:{movementID:"attack",speed:0.5,loop:false,start:0,time:2.5,},
			            	                  anim2:{movementID:"attack",speed:0.6,loop:false,start:11,stun:true,
			            	                  child:{movementID:"stand",start:0,stun:true,stunTimeOnFinish:0.3}},
			            	                  },
			            	   },
			                  {ability:{id:"lightShock",damage:bossAttack*2,times:3,color:"lu",},
			                  		  cooldown:19,
			                  config:{castTime:0.8,
            	                  anim:{movementID:"attack17",speed:0.22,loop:false,start:0,time:2.5,},
            	                  anim2:{movementID:"attack17",speed:0.6,loop:false,start:13,stun:true,
                                         child:{movementID:"stand",start:0,stun:true,stunTimeOnFinish:0.3}
            	                        },
			            	      },},
					],					
//					attackCombo:{
//    		set:[[0,1],[5,]],
//	        combo:[
//				   {id:"attack3",attackRate:1.0,hitSpeed:1,time:1.0,startFunc:"Nova",
//				    effect:function(attacker,obj){var target = obj.target;
//				                                  target.force(attacker.direction*20,0);
//				                                  obj.interuptLvl = 1.1;
//				                                   },
//				},
//				   {id:"attack6",attackRate:1.2,hitSpeed:1,attackRange:1000,hitRange:336,effect:function(attacker,obj){obj.num *= 0;}},
//				   {id:"attack3",attackRate:0.8,hitSpeed:1,time:1.5,startFunc:"Nova",},				
//				   {id:"attack2",attackRate:1.2,hitSpeed:1.5,time:1.5},
//		           {id:"attack7",attackRate:1.2,hitSpeed:1.2,attack:0,effect:function(attacker,obj){obj.num *= 0;}},
//
//				   {id:"attack",attackRate:1.3,hitSpeed:1.1,attackRange:280,hitLatency:0.52},
//				   {id:"attack",attackRate:1.3,hitSpeed:0.9,hitLatency:0.52},
//				   {id:"attack3",attackRate:1.0,hitSpeed:1,time:1.5,startFunc:"Nova",hitLatency:0.52},				
//				   {id:"attack6",attackRate:1.2,hitSpeed:1,effect:function(attacker,obj){obj.num *= 0;}},
//
//	                  ]
//				    },
				}
			)
			var sodier=[
				{time:0,id:"specialFatMan",x:3800,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialPikeMan",x:3900,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialShieldMan",x:4000,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialBowMan",x:4200,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialFatMan",x:4600,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialPikeMan",x:4800,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialShieldMan",x:5000,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialPikeMan",x:5100,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialBowMan",x:5500,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialPikeMan",x:5600,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialBowMan",x:5700,faction:-1,lvl:MapConfig.heroLvl},
			];
			for(var i=0;i<sodier.length;i++){
				g_sharedFightLayer.createUnit(sodier[i]);
			}
		}
		if(MapConfig.open_4 && Macro.unit(4)&&Macro.unit(4).hp<Macro.unit(4).maxHp*0.2){
			MapConfig.open_4=false;
			Macro.showMessage('敌将援手即将抵达',2);
			g_sharedFightLayer.createUnit(
			   {time:0,id:"CaoPi",x:3800,faction:-1,unitType:"boss",tag:5,hp:bossHp*0.7,attack:bossAttack*1.5,drop:{heal:{percent:0.3,ct:3},gold:{num:gPlayer.getCharacter().lvl*2,ct:5},},status:{noDismember:1},
					ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},
					spell:{ability:{id:"fireRain",damage:500,range:500,num:10,fdamage:1,ftimes:1,btimes:2},cooldown:15,
			       			config:{castTime:0.6,
			            		anim:{movementID:"attack10",speed:1,},
			            		anim2:{movementID:"attack10",speed:1,start:15,loop:false,stun:true,
            				           child:{movementID:"stand",speed:1,loop:false,stun:true},
            					      },
			            			},
					 },
//					attackCombo:{
//			    		set:[[0,1,],],
//				    	combo:[
//							   {id:"attack2",attackRate:0.45,hitSpeed:1,hitLatency:0.45,attackRange:260,hitRange:260,},
//			//				   {id:"attack",attackRate:0.71,/*attackRate:9999*/},
//							   {id:"attack3",attackRate:2,attackRange:600,hitRange:260,
//							   		effect:function(attacker,obj){
//			            		    var target = obj.target;
//									target.force(attacker.direction*10,1);}
//							   }
//			                 ]
//						},
				}
			)
			var sodier=[
				{time:0,id:"specialFatMan",x:3800,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialPikeMan",x:3900,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialShieldMan",x:4000,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialBowMan",x:4200,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialFatMan",x:4600,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialPikeMan",x:4800,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialShieldMan",x:5000,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialPikeMan",x:5100,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialBowMan",x:5500,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialPikeMan",x:5600,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialBowMan",x:5700,faction:-1,lvl:MapConfig.heroLvl},
			];
			for(var i=0;i<sodier.length;i++){
				g_sharedFightLayer.createUnit(sodier[i]);
			}
		}
		if(MapConfig.open_5 && Macro.unit(5)&&Macro.unit(5).hp<Macro.unit(5).maxHp*0.2){
			MapConfig.open_5=false;
			Macro.showMessage('敌将援手即将抵达',2);
			g_sharedFightLayer.createUnit(
			   {time:0,id:"SimaYi",x:3800,faction:-1,unitType:"boss",tag:6,hp:bossHp*0.6,attack:bossAttack*1.5,drop:{heal:{percent:0.3,ct:3},},status:{noDismember:1},
					drop:{
						enchant:{chance:0.34,content:[{chance:0.5,id:"30071",},{chance:0.5,id:"30011",}]},
						gold:{num:gPlayer.getCharacter().lvl*2,ct:5},
					},
			        ai:{  //走砍AI示例
				        	walkingCut:1,  //  走砍攻击AI
							actionWhenStand:1,  // 站着的时候的AI
							walkingCutMove:1,  // 走砍的行走AI
							Ability:1,  //  技能AI
			        },
					spell:{
					         ability:{id:"Teleport",times:0.1,},
					     	 cooldown:8,
		                      config:{castTime:0.5,
		            	      anim:{movementID:"attack",speed:0.2,loop:false,start:0,time:2.5,},
		            	                  },
					},
				}
			)
			var sodier=[
				{time:0,id:"specialMage",x:3800,faction:-1,lvl:MapConfig.heroLvl,
			        ai:{
							followMove:{       //护卫ai示例
									getTarget:function(){
										return Macro.unit(6);
									},
									distance:200,
							},
							actionWhenStand:1,
							followAttack:1,
			        },
				},
				{time:0,id:"specialMage",x:3900,faction:-1,lvl:MapConfig.heroLvl,
			        ai:{
							followMove:{       //护卫ai示例
									getTarget:function(){
										return Macro.unit(6);
									},
									distance:200,
							},
							actionWhenStand:1,
							followAttack:1,
			        },
				},
				{time:0,id:"specialShieldMan",x:4000,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialBowMan",x:4200,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialFatMan",x:4600,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialPikeMan",x:4800,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialShieldMan",x:5000,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialPikeMan",x:5100,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialBowMan",x:5500,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialPikeMan",x:5600,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialBowMan",x:5700,faction:-1,lvl:MapConfig.heroLvl},
			];
			for(var i=0;i<sodier.length;i++){
				g_sharedFightLayer.createUnit(sodier[i]);
			}
		}
		if(MapConfig.open_6 && Macro.unit(6)&&Macro.unit(6).hp<Macro.unit(6).maxHp*0.2){
			MapConfig.open_6=false;
			Macro.showMessage('敌将援手即将抵达',2);
			g_sharedFightLayer.createUnit(
			   {time:0,id:"ZhenJi",x:3800,faction:-1,unitType:"boss",tag:7,hp:bossHp*1.5,attack:bossAttack*1.5,status:{noDismember:1},
					drop:{
//						enchant:{chance:0.34,content:[{chance:0.5,id:"30071",},{chance:0.5,id:"30011",}]},
						gold:{num:gPlayer.getCharacter().lvl*2,ct:5},
					},
					ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},
					spell:{ability:{id:"moonChopped",color:"hua",range:500,force:5,damage:80,},cooldown:15,
			    			config:{castTime:2,channelInterval:0.9,anim:{movementID:"attack3",speed:1,start:0,time:0.9,loop:false,child:{movementID:"attack3",speed:0.6,loop:false,start:27,time:1.5,stun:true,},}
			                 },
			    	},
//				attackCombo:{
//						set:[[0,1,2,3],[4,5,6,7]],
//				        combo:[
//							{id:"attack2",attackRate:0.5,hitSpeed:1.1,attackRange:220,hitRange:220,},
//							{id:"attack2",attackRate:0.5,attackRange:600,hitRange:220,},
//							{id:"attack2",attackRate:0.5,attackRange:600,hitRange:220,},
//							{id:"attack",attackRate:1.8,attackRange:600,hitRange:260,
//									effect:function(attacker,obj){
//			            		    var target = obj.target;
//									target.force(attacker.direction*10,1);}
//								},
//
//							{id:"attack2",attackRate:0.5,hitSpeed:1.1,attackRange:220,hitRange:220,},
//							{id:"attack2",attackRate:0.5,attackRange:600,hitRange:220,},
//							{id:"attack2",attackRate:0.5,attackRange:600,hitRange:220,},
//							{id:"attack5",attackRate:1.8,attackRange:600,hitRange:220,
//									effect:function(attacker,obj){
//			            		    var target = obj.target;
//									target.force(attacker.direction*10,1);}
//								},
//			                  ]
//	    				},
				}
			)
			var sodier=[
				{time:0,id:"specialShieldMan",x:3800,faction:-1,lvl:MapConfig.heroLvl,
			        ai:{
							followMove:{       //护卫ai示例
									getTarget:function(){
										return Macro.unit(7);
									},
									distance:200,
							},
							actionWhenStand:1,
							followAttack:1,
			        },
				},
				{time:0,id:"specialShieldMan",x:3900,faction:-1,lvl:MapConfig.heroLvl,
			        ai:{
							followMove:{       //护卫ai示例
									getTarget:function(){
										return Macro.unit(7);
									},
									distance:200,
							},
							actionWhenStand:1,
							followAttack:1,
			        },
				},
				{time:0,id:"specialFatMan",x:3800,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialPikeMan",x:3900,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialShieldMan",x:4000,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialBowMan",x:4200,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialFatMan",x:4600,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialPikeMan",x:4800,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialShieldMan",x:5000,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialPikeMan",x:5100,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialBowMan",x:5500,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialPikeMan",x:5600,faction:-1,lvl:MapConfig.heroLvl},
				{time:0,id:"specialBowMan",x:5700,faction:-1,lvl:MapConfig.heroLvl},
			];
			for(var i=0;i<sodier.length;i++){
				g_sharedFightLayer.createUnit(sodier[i]);
			}
		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:3600,hp:bossHp*2,faction:-1,drop:{gold:{num:gPlayer.getCharacter().lvl*5,ct:5}},},// 城门设定
			{time:0,id:"Gate",x:300,hp:bossHp*2,faction:1},// 城门设定
			{time:0,id:"huangJinPikeMan",x:395000,faction:-1,hp:150,attack:80,tag:100},
			{time:0,id:"huangJinPikeMan",x:395000,faction:-1,hp:150,attack:80,tag:101},
			{time:0,id:"huangJinPikeMan",x:395000,faction:-1,hp:150,attack:80,tag:102},
			{time:0,id:"huangJinPikeMan",x:395000,faction:-1,hp:150,attack:80,tag:103},
			{time:0,id:"huangJinPikeMan",x:395000,faction:-1,hp:150,attack:80,tag:104},
			{time:0,id:"huangJinPikeMan",x:395000,faction:-1,hp:150,attack:80,tag:105},
			{time:0,id:"huangJinPikeMan",x:395000,faction:-1,hp:150,attack:80,tag:106},
			{time:0,id:"huangJinPikeMan",x:395000,faction:-1,hp:150,attack:80,tag:107},


			{time:0,id:"GhostLvBu",x:3800,faction:-1,unitType:"boss",tag:1,hp:bossHp*1.5,attack:bossAttack*1.5,drop:{heal:{percent:0.3,ct:2},gold:{num:gPlayer.getCharacter().lvl*2,ct:5},},status:{noDismember:1},
				ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},
                func:function(unit){
                    unit.applyParticle({head:{id:"blackfire"},chest:{id:"blackfire"},left_arm:{id:"blackfire"},right_arm:{id:"blackfire"}});
                    unit.setOpacity(200);
                    unit.armature.setColor(cc.c3b(50,50,50));
                },
				spell:[
						{ability:{id:"moonChopped",damage:bossAttack*3,range:400,},cooldown:20,config:{castTime:1.7,anim:{movementID:"attack16",speed:0.5,stun:true,time:2,stand:true}}},
						{ability:{id:"thunderShock",damage:bossAttack*0.3,num:4,times:1,dtimes:0.5},cooldown:15,
								config:{castTime:1.5,anim:{movementID:"spell",speed:1,start:1,time:4,stunTimeOnFinish:0.5,stun:true,loop:false},
								anim2:{movementID:"spell",start:14,time:0.000001,stunTimeOnFinish:0.8,stun:true,loop:false}
										},
						},
				],	
//				attackCombo:{
//				       	set:[[0,1,],[2,3,4],[5,6,7],[8,9,10],],
//				        combo:[
//							{id:"attack",attackRate:0.8,hitSpeed:1.2,attackRange:360,},
//							{id:"attack10",attackRate:1.5,hitSpeed:1.2,attackRange:600,hitRange:360,
//									effect:function(attacker,obj){
//			            		    var target = obj.target;
//									target.force(attacker.direction*8,1);}
//								},
//							
//							{id:"attack",attackRate:0.8,hitSpeed:1.2,attackRange:360,},
//							{id:"attack10",attackRate:0.8,hitSpeed:1.2,attackRange:600,hitRange:360,},
//							{id:"attack6",attackRate:2.5,startFunc:"Nova",hitSpeed:1.2,attackRange:600,hitRange:360,
//									effect:function(attacker,obj){
//			            		    var target = obj.target;
//									target.force(attacker.direction*10,1);}
//							 	},
//								
//							{id:"attack",attackRate:0.8,hitSpeed:1.2,attackRange:360,hitRange:360,},
//							{id:"attack11",attackRate:0.4,hitSpeed:0.8,attackRange:600,hitRange:360,},
//							{id:"attack6",attackRate:2.5,startFunc:"Nova",hitSpeed:1.2,attackRange:600,hitRange:360,
//									effect:function(attacker,obj){
//			            		    var target = obj.target;
//									target.force(attacker.direction*10,1);}
//							 	},
//								
//							{id:"attack",attackRate:0.8,hitSpeed:1.1,attackRange:360,hitRange:360,},
//							{id:"attack9",attackRate:0.4,hitSpeed:1,attackRange:600,hitRange:360,},
//							{id:"attack11",attackRate:1.5,hitSpeed:1.5,attackRange:600,hitRange:360,
//							 		effect:function(attacker,obj){
//			            		    var target = obj.target;
//									target.force(attacker.direction*10,1);}
//			   				 	},
//							],
//						},
			},

		],
	],		
	
	task:[
		
		{
			win:[
				{type:"killUnit",faction:-1,text:'打败所有敌将',id:"huangJinPikeMan",textNum:true,require:7},
			],
			lose:[
				
			],
			func:function(){
			},
			finishFunc:function(){
				Macro.flee();
			},
			update:function(){
				MapConfig.func_1();
			}
		},
	],
	init:function(){
//		Macro.setUnitBtnDisable(true);
	},
	config:{
		disable:{
//			myhero:true,ability:true,
//			unit:true,
		},
		drop:{rage:{chance:1,num:1},gold:{chance:0.5,num:489,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:378,gold:1857,gem:0},
		unitLvl:gPlayer.getCharacter().lvl,
	}
};