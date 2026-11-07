var bossHp=(Math.pow(1.085,gPlayer.getCharacter().lvl)*60+66)*5000/66;
var	bossAttack=Math.pow(1.09,gPlayer.getCharacter().lvl)*80+66;
var MapConfig={
	open_1:true,   
	heroLvl:gPlayer.getCharacter().lvl,
	func_1:function(){
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,hp:bossHp*2,faction:1},// 城门设定
			{time:0,id:"Gate",x:3600,hp:bossHp*2,faction:-1,drop:{gold:{num:gPlayer.getCharacter().lvl*5,ct:5}},},// 城门设定
			{time:0,id:"ZhangHe",x:3800,faction:-1,unitType:"boss",tag:1,hp:bossHp*0.6,attack:bossAttack,drop:{heal:{percent:0.2,ct:2},gold:{num:gPlayer.getCharacter().lvl*2,ct:5},},status:{noDismember:1},
				ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,
					callAmbush:{   
						ambush:[   
							{id:"specialPikeMan",faction:-1,lvl:gPlayer.getCharacter().lvl+3,},
							{id:"specialPikeMan",faction:-1,lvl:gPlayer.getCharacter().lvl+3,},
							{id:"specialBowMan",faction:-1,lvl:gPlayer.getCharacter().lvl+3,},							
							{id:"specialBowMan",faction:-1,lvl:gPlayer.getCharacter().lvl+3,},									
						],
						hurtHpPercent:80,
					},
				},
				spell:{
					ability:{id:"Spine",scale:0.5,scale2:0.05,range:400,damage:bossAttack*0.3,rotation:180,},cooldown:10,
		                	config:{castTime:1.7,
	              			         anim:{movementID:"attack5",loop:false,speed:0.85,},
                		            anim2:{movementID:"attack5",loop:false,start:36,pause:true,time:1,stun:true,
                		    	           child:{movementID:"attack5",start:36,stun:true,loop:false,
                		    	                  child:{movementID:"stand",stun:true,loop:false,},
                		    	         },
                		    	  },
		                	     },
		        },
//				attackCombo:{
//		            set:[[0,1],[2,3],[4,5,]],  //随机,定几率;
//			        combo:[
//
//						{id:"attack",attackRate:0.7,hitSpeed:1.2,attackRange:360,},
//						{id:"attack10",attackRate:2,hitSpeed:1.2,attackRange:600,hitRange:360,
//								effect:function(attacker,obj){
//		            		    var target = obj.target;
//							target.force(attacker.direction*8,1);}
//						},
//
//						{id:"attack3",attackRate:0.7,hitSpeed:1.2,attackRange:300,},
//						{id:"attack7",attackRate:1.5,startFunc:"Nova",hitSpeed:1.2,attackRange:600,hitRange:360,
//							effect:function(attacker,obj){
//		            		    var target = obj.target;
//								target.force(attacker.direction*10,1);}
//						},
//							
//						{id:"attack",attackRate:0.8,hitSpeed:1.2,attackRange:360,hitRange:360,},
//						{id:"attack11",attackRate:1.5,hitSpeed:0.8,attackRange:600,hitRange:360,
//								effect:function(attacker,obj){
//		            		    var target = obj.target;
//								target.force(attacker.direction*10,1);}
//						 },
//						
//		//				{id:"attack7",attackRate:1.5,startFunc:"Nova"},//time:2--动持续2秒
//					]
//				},			
			},
			{time:0,id:"specialPikeMan",x:3800,faction:-1,movementSpeed:1.9,
		        ai:{
						followMove:{       //护卫ai示例
								getTarget:function(){
									return Macro.unit(1);
								},
								distance:200,
						},
						actionWhenStand:1,
						followAttack:1,
		        },
			},
			{time:0,id:"specialPikeMan",x:3800,faction:-1,movementSpeed:1.9,
		        ai:{
						followMove:{       //护卫ai示例
								getTarget:function(){
									return Macro.unit(1);
								},
								distance:200,
						},
						actionWhenStand:1,
						followAttack:1,
		        },
			},
			{time:0,id:"specialPikeMan",x:3800,faction:-1,movementSpeed:1.9,
		        ai:{
						followMove:{       //护卫ai示例
								getTarget:function(){
									return Macro.unit(1);
								},
								distance:100,
						},
						actionWhenStand:1,
						followAttack:1,
		        },
			},
			{time:0,id:"specialPikeMan",x:3800,faction:-1,movementSpeed:1.9,
		        ai:{
						followMove:{       //护卫ai示例
								getTarget:function(){
									return Macro.unit(1);
								},
								distance:200,
						},
						actionWhenStand:1,
						followAttack:1,
		        },
			},
		],
		[
			{time:0,id:"CaoRen",x:3800,faction:-1,unitType:"boss",tag:2,hp:bossHp*0.7,attack:bossAttack*1.1,drop:{heal:{percent:0.2,ct:2},gold:{num:gPlayer.getCharacter().lvl*2,ct:5},},status:{noDismember:1},
				ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,
					callAmbush:{   
						ambush:[   
							{id:"specialShieldMan",faction:-1,lvl:gPlayer.getCharacter().lvl+3,},
							{id:"specialShieldMan",faction:-1,lvl:gPlayer.getCharacter().lvl+3,},
							{id:"bowmanQun",faction:-1,lvl:gPlayer.getCharacter().lvl+3,},							
							{id:"bowmanQun",faction:-1,lvl:gPlayer.getCharacter().lvl+3,},									
						],
						hurtHpPercent:70,
					},
				},
				spell:{
					     ability:{id:"moonChopped",damage:bossAttack*3,range:400,},cooldown:12,
		                 config:{castTime:1.5,
            	                  anim:{movementID:"attack17",speed:0.22,loop:false,start:0,time:2.5,},
            	                  anim2:{movementID:"attack17",speed:0.6,loop:false,start:13,stun:true,
                                         child:{movementID:"stand",start:0,stun:true,stunTimeOnFinish:0.3}
            	                        },
		            	},

			    },
//		      	attackCombo:{
//    		set:[[0,1,2,]],
//	        combo:[
//				   {id:"attack3",attackRate:0.8,hitSpeed:1,time:1.5,
//		             effect:function(attacker,obj){var target = obj.target;
//		                                           obj.interuptLvl = 0.4;
//			                                         },
//				   },				
//				   {id:"attack2",attackRate:1.2,hitSpeed:1.5,time:1.5,attackRange:1000,hitRange:336,
//				    startFunc:"Nova",
//				    effect:function(attacker,obj){var target = obj.target;
//				                                  target.force(attacker.direction*20,0);
//				                                  obj.interuptLvl = 1.1;
//				                                   },
//                    },
//		           {id:"attack7",attackRate:1.2,hitSpeed:1.2,attack:0,attackRange:1000,hitRange:336,effect:function(attacker,obj){obj.num *= 0;}},
//		],
//				},
			},
			{time:0,id:"specialShieldMan",x:3800,faction:-1,movementSpeed:1.5,
		        ai:{
						followMove:{       //护卫ai示例
								getTarget:function(){
									return Macro.unit(2);
								},
								distance:200,
						},
						actionWhenStand:1,
						followAttack:1,
		        },
			},
			{time:0,id:"specialShieldMan",x:3800,faction:-1,movementSpeed:1.5,
		        ai:{
						followMove:{       //护卫ai示例
								getTarget:function(){
									return Macro.unit(2);
								},
								distance:200,
						},
						actionWhenStand:1,
						followAttack:1,
		        },
			},
			{time:0,id:"specialShieldMan",x:3800,faction:-1,movementSpeed:1.5,
		        ai:{
						followMove:{       //护卫ai示例
								getTarget:function(){
									return Macro.unit(2);
								},
								distance:200,
						},
						actionWhenStand:1,
						followAttack:1,
		        },
			},
			{time:0,id:"specialShieldMan",x:3800,faction:-1,movementSpeed:1.5,
		        ai:{
						followMove:{       //护卫ai示例
								getTarget:function(){
									return Macro.unit(2);
								},
								distance:200,
						},
						actionWhenStand:1,
						followAttack:1,
		        },
			},
		],
		[
			{time:0,id:"SunShangxiang",x:3800,faction:-1,unitType:"boss",tag:3,hp:bossHp*0.5,attack:bossAttack*1.5,drop:{heal:{percent:0.2,ct:2},gold:{num:gPlayer.getCharacter().lvl*2,ct:5},},status:{noDismember:1},
				ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,
					callAmbush:{   
						ambush:[   
							{id:"specialBowMan",faction:-1,lvl:gPlayer.getCharacter().lvl+3,},
							{id:"specialBowMan",faction:-1,lvl:gPlayer.getCharacter().lvl+3,},
							{id:"specialBowMan",faction:-1,lvl:gPlayer.getCharacter().lvl+3,},							
							{id:"specialBowMan",faction:-1,lvl:gPlayer.getCharacter().lvl+3,},									
						],
						hurtHpPercent:60,
					},
				},
				spell:{
					ability:{id:"batterStrike",damage:bossAttack,color:"hua",posX:130,posY:-10,},
						     cooldown:15,
		            config:{castTime:2,channelInterval:0.7,
		                     	 anim:{movementID:"attack4",speed:1.2,start:0,stun:true,loop:false,},
		            },
		        },
//				attackCombo:{
//					set:[[0,1,2,3,4],[5,6,7,8]],
//			        combo:[
//						{id:"attack2",attackRate:0.5,hitSpeed:1.1,attackRange:220,hitRange:220,
//							effect:function(attacker,obj){
//		            		    var target = obj.target;
//								obj.interuptLvl = 0.4;}
//						},
//						{id:"attack5",attackRate:0.5,attackRange:600,hitRange:220,
//								effect:function(attacker,obj){
//		            		    var target = obj.target;
//								obj.interuptLvl = 0.4;}
//						},
//						{id:"attack2",attackRate:0.5,attackRange:600,hitRange:220,},
//						{id:"attack5",attackRate:0.5,attackRange:600,hitRange:220,},
//						{id:"attack",attackRate:1.5,attackRange:600,hitRange:260,
//							effect:function(attacker,obj){
//		            		    var target = obj.target;
//								target.force(attacker.direction*20,1);}
//						},
//						
//
//						{id:"attack2",attackRate:0.5,hitSpeed:1.1,attackRange:220,hitRange:220,},
//						{id:"attack2",attackRate:0.5,attackRange:600,hitRange:220,},
//						{id:"attack2",attackRate:0.5,attackRange:600,hitRange:220,},
//						{id:"attack5",attackRate:1.5,attackRange:600,hitRange:220,
//							effect:function(attacker,obj){
//		            		    var target = obj.target;
//								target.force(attacker.direction*20,1);}
//						},
//
//
//		//				{id:"attack2",attackRate:1.3,hitSpeed:0.8,time:1.3},
//		//		        {id:"attack7",attackRate:2,hitSpeed:1.2,attack:0,}
//		                  ]
//			    		},
			},
			{time:0,id:"specialBowMan",x:3800,faction:-1,
		        ai:{
						followMove:{       //护卫ai示例
								getTarget:function(){
									return Macro.unit(3);
								},
								distance:200,
						},
						actionWhenStand:1,
						followAttack:1,
		        },
			},
			{time:0,id:"specialBowMan",x:3800,faction:-1,
		        ai:{
						followMove:{       //护卫ai示例
								getTarget:function(){
									return Macro.unit(3);
								},
								distance:200,
						},
						actionWhenStand:1,
						followAttack:1,
		        },
			},
			{time:0,id:"specialBowMan",x:3800,faction:-1,
		        ai:{
						followMove:{       //护卫ai示例
								getTarget:function(){
									return Macro.unit(3);
								},
								distance:200,
						},
						actionWhenStand:1,
						followAttack:1,
		        },
			},
			{time:0,id:"specialBowMan",x:3800,faction:-1,
		        ai:{
						followMove:{       //护卫ai示例
								getTarget:function(){
									return Macro.unit(3);
								},
								distance:200,
						},
						actionWhenStand:1,
						followAttack:1,
		        },
			},
		],
		[
			{time:0,id:"XuChu",x:3800,faction:-1,unitType:"boss",tag:4,hp:bossHp*0.9,attack:bossAttack*1,status:{noDismember:1},
				drop:{
//						enchant:{chance:0.3,content:[{chance:0.2,id:"attackSpeed2",lvl:1},{chance:0.8,id:"lifeSteal1",lvl:1}]},
						heal:{percent:0.2,ct:2},
						gold:{num:gPlayer.getCharacter().lvl*2,ct:5},
				},
				ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,
					callAmbush:{   
						ambush:[   
							{id:"specialFatMan",faction:-1,lvl:gPlayer.getCharacter().lvl+3,},
							{id:"specialFatMan",faction:-1,lvl:gPlayer.getCharacter().lvl+3,},							
							{id:"specialFatMan",faction:-1,lvl:gPlayer.getCharacter().lvl+3,},									
						],
						hurtHpPercent:80,
					},
				},
				spell:{
					     ability:{id:"earthShock",num:3,damage:bossAttack*3},cooldown:18,
		                 config:{castTime:1.2,
		            	         anim:{movementID:"attack3",speed:0.8,loop:false,start:0,time:0.67,stunTimeOnFinish:0.2,stun:true,},
		            	         anim2:{movementID:"attack3",speed:0.9,loop:false,start:20,stun:true,},
		            	 },
				},
//			attackCombo:{
//		    		set:[[0,1,],],
//			    	combo:[
//						   {id:"attack",attackRate:1,hitSpeed:0.5,startFunc:"Nova",attackRange:250,hitRange:250,},
//						   {id:"attack2",attackRate:1,hitSpeed:1.5,startFunc:"Nova",attackRange:600,hitRange:250,
//								effect:function(attacker,obj){
//		            		    var target = obj.target;
//								target.force(attacker.direction*10,1);}
//							},
//		                  ]
//					},
			},
			{time:0,id:"specialFatMan",x:3800,faction:-1,movementSpeed:1.5,
		        ai:{
						followMove:{       //护卫ai示例
								getTarget:function(){
									return Macro.unit(4);
								},
								distance:200,
						},
						actionWhenStand:1,
						followAttack:1,
		        },
			},
			{time:0,id:"specialFatMan",x:3800,faction:-1,movementSpeed:1.5,
		        ai:{
						followMove:{       //护卫ai示例
								getTarget:function(){
									return Macro.unit(4);
								},
								distance:200,
						},
						actionWhenStand:1,
						followAttack:1,
		        },
			},
			{time:0,id:"specialFatMan",x:3800,faction:-1,movementSpeed:1.5,
		        ai:{
						followMove:{       //护卫ai示例
								getTarget:function(){
									return Macro.unit(4);
								},
								distance:200,
						},
						actionWhenStand:1,
						followAttack:1,
		        },
			},
		],
		[
			{time:0,id:"ZuoCi",x:3800,faction:-1,unitType:"boss",tag:5,hp:bossHp*0.5,attack:bossAttack*1.1,
            	drop:{enchant:{chance:0.34,content:[{chance:0.5,id:"30041",lvl:1},{chance:0.5,id:"30051",lvl:1},]},heal:{percent:0.2,ct:2},},status:{noDismember:1},
				ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,
					callAmbush:{   
						ambush:[   
							{id:"specialMage",faction:-1,lvl:gPlayer.getCharacter().lvl+3,},
							{id:"specialMage",faction:-1,lvl:gPlayer.getCharacter().lvl+3,},							
							{id:"specialMage",faction:-1,lvl:gPlayer.getCharacter().lvl+3,},									
						],
						hurtHpPercent:80,
					},
				},
				spell:{
				         ability:{id:"Teleport",times:0.1,btime:3,level:35,},
				     	 cooldown:8,
	                      config:{castTime:0.5,
	            	      anim:{movementID:"attack",speed:0.2,loop:false,start:0,time:2.5,},
	            	                  },
				},
			},
			{time:0,id:"specialMage",x:3800,faction:-1,
		        ai:{
						followMove:{       //护卫ai示例
								getTarget:function(){
									return Macro.unit(5);
								},
								distance:200,
						},
						actionWhenStand:1,
						followAttack:1,
		        },
			},
			{time:0,id:"specialMage",x:3800,faction:-1,
		        ai:{
						followMove:{       //护卫ai示例
								getTarget:function(){
									return Macro.unit(5);
								},
								distance:200,
						},
						actionWhenStand:1,
						followAttack:1,
		        },
			},
			{time:0,id:"specialMage",x:3800,faction:-1,
		        ai:{
						followMove:{       //护卫ai示例
								getTarget:function(){
									return Macro.unit(5);
								},
								distance:200,
						},
						actionWhenStand:1,
						followAttack:1,
		        },
			},
		],
		[
			{time:0,id:"ZhugeLiang",x:3800,faction:-1,unitType:"boss",tag:6,hp:bossHp*0.5,attack:bossAttack*1,status:{noDismember:1},
				drop:{
					gold:{num:gPlayer.getCharacter().lvl*2,ct:5},
				},
				ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,
					callAmbush:{   
						ambush:[   
							{id:"specialMage",faction:-1,lvl:gPlayer.getCharacter().lvl+3,},
							{id:"specialFatMan",faction:-1,lvl:gPlayer.getCharacter().lvl+3,},							
							{id:"specialFatMan",faction:-1,lvl:gPlayer.getCharacter().lvl+3,},							
							{id:"healerQun",faction:-1,lvl:gPlayer.getCharacter().lvl+3,},									
						],
						hurtHpPercent:80,
					},
				},
				spell:[
					{
						ability:{id:"iceBlockRain",damage:bossAttack,times:2,num:10},
					         cooldown:13,
				        config:{castTime:1,
			             anim:{movementID:"attack2",speed:0.4,loop:false,start:0,time:0.3,
			             	 child:{movementID:"attack2",start:10,pause:true,time:0.3,
			                 child:{movementID:"attack2",speed:0.4,start:10,loop:false,}}
			             	 },
			             anim2:{movementID:"attack2",speed:1,start:22,pause:true,time:1,loop:false,stun:true,
			 	         child:{movementID:"stand",speed:1,loop:false,stun:true,}}
			             },
			         },
			 	     {
						ability:{id:"Meteorite",damage:bossAttack,num:8},
					         cooldown:17,
				        config:{castTime:1,
			             anim:{movementID:"attack2",speed:0.4,loop:false,start:0,time:0.3,
			             	 child:{movementID:"attack2",start:10,pause:true,time:0.3,
			                 child:{movementID:"attack2",speed:0.4,start:10,loop:false,}}
			             	 },
			             anim2:{movementID:"attack2",speed:1,start:22,pause:true,time:1,loop:false,stun:true,
			 	         child:{movementID:"stand",speed:1,loop:false,stun:true,}}
			             },
				 	 },
			 	    {
			 	        ability:{id:"cureBuff",num:bossAttack*0.5,range:650,},
			 	        	      cooldown:10,
			 	                  config:{anim:{movementID:"attack",loop:false,stun:true}},
				 	},
		        ],			
			},
			{time:0,id:"healerQun",x:3800,faction:-1,
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
			{time:0,id:"specialMage",x:3800,faction:-1,
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
			{time:0,id:"specialFatMan",x:3800,faction:-1,
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
			{time:0,id:"specialShieldMan",x:3800,faction:-1,movementSpeed:1.5,
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
			{time:0,id:"specialShieldMan",x:3800,faction:-1,movementSpeed:1.5,
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
		],
	],		
	
	task:[
		
		{
			win:[
				{type:"killUnit",faction:-1,text:'打败张颌',id:"ZhangHe",},
			],
			lose:[
				
			],
			finishFunc:function(){
				Macro.flee();
			},
		},
		{
			win:[
				{type:"killUnit",faction:-1,text:'打败曹仁',id:"CaoRen",},
			],
			lose:[
				
			],
			finishFunc:function(){
				Macro.flee();
			},
		},
		{
			win:[
				{type:"killUnit",faction:-1,text:'打败孙尚香',id:"SunShangxiang",},
			],
			lose:[
				
			],
			finishFunc:function(){
				Macro.flee();
			},
		},
		{
			win:[
				{type:"killUnit",faction:-1,text:'打败许褚',id:"XuChu",},
			],
			lose:[
				
			],
			finishFunc:function(){
				Macro.flee();
			},
		},
		{
			win:[
				{type:"killUnit",faction:-1,text:'打败左慈',id:"ZuoCi",},
			],
			lose:[
				
			],
			finishFunc:function(){
				Macro.flee();
			},
		},
		{
			win:[
				{type:"killUnit",faction:-1,text:'打败诸葛亮',id:"ZhugeLiang",},
			],
			lose:[
				
			],
			finishFunc:function(){
				Macro.flee();
			},
		},		
	],
	init:function(){
//		Macro.setUnitBtnDisable(true);
	},
	config:{
		disable:{
//			myhero:true,ability:true,
			unit:true,
		},
        drop:{rage:{chance:1,num:1},},
		gameEdge:{left:0,right:3800},
		reward:{exp:378,gold:1857,gem:0},
		unitLvl:gPlayer.getCharacter().lvl,
	}
};