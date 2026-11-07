var bossHp=(Math.pow(1.085,gPlayer.getCharacter().lvl)*60+66)*5000/66;
var	bossAttack=Math.pow(1.09,gPlayer.getCharacter().lvl)*70+66;
var MapConfig={
	open_1:true,   
	heroLvl:gPlayer.getCharacter().lvl,
	func_1:function(){
	},
	unit :[
		[
			{time:0,id:"Gate",x:3600,hp:bossHp*2,faction:-1,drop:{heal:{percent:0.2,ct:1},gold:{num:gPlayer.getCharacter().lvl*5,ct:5}}},// 城门设定
//			{time:0,id:"Gate",x:300,hp:bossHp*2,faction:1,},	           	
			{time:0,id:"HuaXiong",x:3800,faction:-1,unitType:"boss",tag:2,hp:bossHp*0.5,attack:bossAttack*0.8,
				drop:{
				heal:{percent:0.2,ct:1},
				gold:{num:gPlayer.getCharacter().lvl*2,ct:5},
//				enchant:{chance:0.34,content:[{chance:0.5,id:"30011",},{chance:0.5,id:"30031",}]},
				},
				status:{noDismember:1},
				ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},
				spell:{
						ability:{id:"batterStrike",num:3,damage:bossAttack*2,},cooldown:15,
		                config:{
		            		castTime:1.5,
		            		anim:{movementID:"attack2",speed:0.5,start:0,time:1.55,},
		                	anim2:{movementID:"attack2",speed:0.97,start:22,time:0.75,stun:true,loop:false,},
			        			
						},
		        },
//				attackCombo:{
//			        	set:[[0,1],[2,3],[4,5,6]],
//				        combo:[
//							{id:"attack",attackRate:1,attackRange:340,hitRange:340,},
//							{id:"attack3",attackRate:3,attackRange:600,hitRange:340,
//									effect:function(attacker,obj){
//			            		    var target = obj.target;
//									target.force(attacker.direction*8,1);}
//							},
//							
//							{id:"attack14",attackRate:1,attackRange:340,hitRange:340,},
//							{id:"attack13",attackRate:3,attackRange:600,hitRange:340,
//									effect:function(attacker,obj){
//			            		    var target = obj.target;
//									target.force(attacker.direction*8,1);}
//							},
//							
//							{id:"attack14",attackRate:0.8,attackRange:340,hitRange:340,},
//							{id:"attack13",attackRate:1,attackRange:600,hitRange:340,},
//							{id:"attack6",attackRate:3,attackRange:600,hitRange:340,
//									effect:function(attacker,obj){
//			            		    var target = obj.target;
//									target.force(attacker.direction*10,1);}
//							},
//			//				{id:"attack3",attackRate:2},
//			//				{id:"attack6",attackRate:1.5,startFunc:"Nova"},
//			//				{id:"attack7",attackRate:1.5,startFunc:"Nova"},//time:2--动作持续2秒
//						],
//					},
			},
		],
		[
			{time:0,id:"ZhangLiao",x:3800,faction:-1,unitType:"boss",tag:2,hp:bossHp*0.6,attack:bossAttack*1,drop:{heal:{percent:0.3,ct:1},gold:{num:gPlayer.getCharacter().lvl*2,ct:5}},status:{noDismember:1},
				ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},
				spell:{
					ability:{id:"Meteorite",num:10,damage:bossAttack*3},
					cooldown:12,
			        config:{
							castTime:2,
            	                  anim:{movementID:"attack17",speed:0.22,loop:false,start:0,time:2.5,},
            	                  anim2:{movementID:"attack17",speed:0.6,loop:false,start:13,stun:true,
                                         child:{movementID:"stand",start:0,stun:true,stunTimeOnFinish:0.3}
            	                        },
			        },
		        },
//		        attackCombo:{
//    		set:[[0,1,2]],
//	        combo:[
//                   {id:"attack3",attackRate:0.7,hitSpeed:0.7,range:280,hitLatency:0.3,
//				    effect:function(attacker,obj){var target = obj.target;
//				                                  obj.interuptLvl = 0.4;
//				                                   },
//                },
//				   {id:"attack2",attackRate:1.0,hitSpeed:1.0,attackRange:1000,hitRange:336,
//				    startFunc:"Nova",
//				    effect:function(attacker,obj){var target = obj.target;
//				                                  target.force(attacker.direction*10,0);
//				                                  obj.interuptLvl = 1.1;
//				                                   },
//							 	},
//				   {id:"attack10",attackRate:1.7,hitSpeed:1,attackRange:1000,hitRange:336,
//				    effect:function(attacker,obj){var target = obj.target;
//				                                  target.force(attacker.direction*20,0);
//				                                  obj.interuptLvl = 1.1;
//				                                   },
//				 	   },
//				
//            ]
//			    },
			}
		],
		[
			{time:0,id:"ZhouYu",x:3800,faction:-1,unitType:"boss",tag:2,hp:bossHp*0.4,attack:bossAttack*0.8,drop:{heal:{percent:0.3,ct:1},gold:{num:gPlayer.getCharacter().lvl*2,ct:5}},status:{noDismember:1},
				ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},
				spell:{
						ability:{id:"fireArrowRain",damage:bossAttack/2,type:2,isfire:true,range:600,num:25,},
						cooldown:15,
		        		config:{
							castTime:0.3,
			            		anim:{movementID:"attack10",speed:0.6,},
			            		anim2:{movementID:"attack10",speed:0.6,start:5,time:0.2,loop:false,stun:true,
            				           child:{movementID:"stand",speed:1,loop:false,stun:true},
            					      },
						},
		        },
//				attackCombo:{
//			            set:[/*[0,1,2],*/[0,1,2,3,4,5,6,]],  //随机,定几率;
//				        combo:[
//			//
//			//				{id:"attack2",attackRate:0.4,hitSpeed:1.1,},
//			//				{id:"attack3",attackRate:0.7,hitSpeed:1.1,},
//			//				{id:"attack5",attackRate:1.5,},
//				
//							{id:"attack6",attackRate:0.37,hitRange:270,attackRange:270,},
//							{id:"attack7",attackRate:0.166,attackRange:600,hitRange:270,
//									effect:function(attacker,obj){
//									var target = obj.target;
//					                 obj.interuptLvl = 0.4;},
//								},
//							{id:"attack8",attackRate:0.11,attackRange:600,hitRange:270,},
//							{id:"attack7",attackRate:0.166,attackRange:600,hitRange:270,
//									effect:function(attacker,obj){
//									var target = obj.target;
//					                 obj.interuptLvl = 0.4;},
//						 		},
//							{id:"attack8",attackRate:0.11,attackRange:600,hitRange:270,				},
//							{id:"attack7",attackRate:0.166,attackRange:600,hitRange:270,
//											effect:function(attacker,obj){
//									var target = obj.target;
//					                 obj.interuptLvl = 0.4;},
//						 		},
//							{id:"attack9",attackRate:1.5,attackRange:600,hitRange:270,
//									effect:function(attacker,obj){
//			            		    var target = obj.target;
//									target.force(attacker.direction*10,1);}
//								},
//							]
//						},
			},
		],
		[
			{time:0,id:"DiaoChan",x:3800,faction:-1,unitType:"boss",tag:2,hp:bossHp*0.5,attack:bossAttack*1.5,drop:{heal:{percent:0.4,ct:1},gold:{num:gPlayer.getCharacter().lvl*2,ct:5}},status:{noDismember:1},
				ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},
				spell:{
					     ability:{id:"Temptation",range:500,damage:bossAttack,times:5,},
					     cooldown:15,
		                 config:{
								castTime:0.875,
		            	         anim:{movementID:"attack8",speed:0.55,loop:false,start:0,time:1,},
		            	         anim2:{movementID:"stand",loop:true,start:0,time:0.5,stun:true,},
		            	 },
		        },
//					attackCombo:{
//						set:[[0,1,2],],
//				        combo:[
//							{id:"attack",attackRate:1.5,attackRange:200,hitRange:200,
//							/*	effect:function(attacker,obj){
//									var target = obj.target;
//							        obj.interuptLvl = 0.4;
//							        },*/
//							},
//							{id:"attack9",attackRate:1,attackRange:600,hitRange:260,},
//							{id:"attack10",attackRate:2,attackRange:600,hitRange:280,
//								effect:function(attacker,obj){
//			            		    var target = obj.target;
//								target.force(attacker.direction*10,1);}
//							},]
//						},
			}
		],
		[
			{time:0,id:"LvBu",x:3800,faction:-1,unitType:"boss",tag:2,hp:bossHp,attack:bossAttack*1.3,status:{noDismember:1},
				ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},
				spell:{
					ability:{id:"moonChopped",damage:bossAttack*1.5,range:400,},
					cooldown:15,
					config:{castTime:3.1,channelInterval:1,anim:{movementID:"attack16",speed:1,start:0,time:1,stunTimeOnFinish:0.5,stun:true}},
				},
//			attackCombo:{
//				       	set:[[0,1,],[2,3,4],[5,6,7],[8,9,10],],
//				        combo:[
//							{id:"attack",attackRate:0.8,hitSpeed:1.2,attackRange:360,},
//							{id:"attack10",attackRate:1.5,hitSpeed:1.2,attackRange:600,hitRange:360,
//									effect:function(attacker,obj){
//			            		    var target = obj.target;
//									target.force(attacker.direction*8,1);}
//							},
//							
//							{id:"attack",attackRate:0.8,hitSpeed:1.2,attackRange:360,},
//							{id:"attack10",attackRate:0.8,hitSpeed:1.2,attackRange:600,hitRange:360,},
//							{id:"attack6",attackRate:2.5,startFunc:"Nova",hitSpeed:1.2,attackRange:600,hitRange:360,
//									effect:function(attacker,obj){
//			            		    var target = obj.target;
//									target.force(attacker.direction*10,1);}
//							 },
//								
//							{id:"attack",attackRate:0.8,hitSpeed:1.2,attackRange:360,hitRange:360,},
//							{id:"attack11",attackRate:0.4,hitSpeed:0.8,attackRange:600,hitRange:360,},
//							{id:"attack6",attackRate:2.5,startFunc:"Nova",hitSpeed:1.2,attackRange:600,hitRange:360,
//									effect:function(attacker,obj){
//			            		    var target = obj.target;
//									target.force(attacker.direction*10,1);}
//							 },
//								
//							{id:"attack",attackRate:0.8,hitSpeed:1.1,attackRange:360,hitRange:360,},
//							{id:"attack9",attackRate:0.4,hitSpeed:1,attackRange:600,hitRange:360,},
//							{id:"attack11",attackRate:1.5,hitSpeed:1.5,attackRange:600,hitRange:360,
//							 		effect:function(attacker,obj){
//			            		    var target = obj.target;
//									target.force(attacker.direction*10,1);}
//			   				 },
//								],
//					},
				drop:{
					heal:{percent:0.4,ct:1},
					gold:{num:gPlayer.getCharacter().lvl*2,ct:5},
					enchant:{chance:0.34,content:[{chance:0.5,id:"30011",},{chance:0.5,id:"30031",}]},
//					enchant:{chance:0.3,content:[{chance:0.9,id:"moveSpeed1",},{chance:0.1,id:"critChance2",},]},
				},
			},
		],
		[
			{time:0,id:"DongZhuo",x:3800,faction:-1,unitType:"boss",tag:2,hp:bossHp*0.9,attack:bossAttack*1.3,status:{noDismember:1},
				ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},
				spell:{
						ability:{id:"Claw",posX:-160,posY:25,time:5,level:10,},cooldown:20,
		                config:{
							castTime:1,
		            	    anim:{movementID:"attack6",speed:0.6,loop:false,start:0,time:1,stun:true,
		            	          child:{movementID:"attack6",speed:0.6,loop:false,start:13,time:0.55,stunTimeOnFinish:0.2,stun:true,}
							},		            	                  
		            	 },
		        },
//				attackCombo:{
//			    		set:[[0,1,2,]],
//				        combo:[
//							   {id:"attack",attackRate:0.5,attackRange:250,hitRange:250,hitSpeed:0.8,startFunc:"Nova"},
//							   {id:"attack2",attackRate:1,attackRange:600,hitRange:250,hitSpeed:0.8,hitLatency:0.4,startFunc:"Nova"},
//							   {id:"attack3",attackRate:2,attackRange:600,hitRange:250,hitSpeed:0.8,hitLatency:0.85,startFunc:"Nova",
//										effect:function(attacker,obj){
//				            		    var target = obj.target;
//										target.force(attacker.direction*10,1);}
//								},		
//			                  ]
//					},
				drop:{
					heal:{percent:0.4,ct:1},
					gold:{num:gPlayer.getCharacter().lvl*2,ct:5},
				},
			},
		],
//		[
//			{time:0,id:"GuoJia",x:3300,faction:-1,unitType:"boss",tag:2,
//				ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},
//			},
//		],
	],		

	task:[
		
		{
			win:[
				{type:"killUnit",faction:-1,id:'HuaXiong',noText:true,},
			],
			lose:[
				{type:"time",require:120,text:'击败华雄',textNum:true}
			],
			func:function(){
				cc.log("boss的攻击:"+bossAttack)
				cc.log("boss的血量:"+bossHp)
			},
			finishFunc:function(){
				Macro.flee();
			}
		},
		{
			win:[
				{type:"killUnit",faction:-1,id:'ZhangLiao',noText:true,},
			],
			lose:[
				{type:"time",require:120,text:'击败张辽',textNum:true}
			],
			finishFunc:function(){
				Macro.flee();
			}
		},
		{
			win:[
				{type:"killUnit",faction:-1,id:'ZhouYu',noText:true,},
			],
			lose:[
				{type:"time",require:120,text:'击败周瑜',textNum:true}
			],
			finishFunc:function(){
				Macro.flee();
			}
		},
		{
			win:[
				{type:"killUnit",faction:-1,id:'DiaoChan',noText:true,},
			],
			lose:[
				{type:"time",require:120,text:'击败貂蝉',textNum:true}
			],
			finishFunc:function(){
				Macro.flee();
			}
		},
		{
			win:[
				{type:"killUnit",faction:-1,id:'LvBu',noText:true,},
			],
			lose:[
				{type:"time",require:120,text:'击败吕布',textNum:true}
			],
			finishFunc:function(){
				Macro.flee();
			}
		},
		{
			win:[
				{type:"killUnit",faction:-1,id:'DongZhuo',noText:true,},
			],
			lose:[
				{type:"time",require:120,text:'击败董卓',textNum:true}
			],
			finishFunc:function(){
				Macro.flee();
			}
		},
//		{
//			win:[
//				{type:"killUnit",faction:-1,id:'GuoJia',text:'打败郭嘉',},
//			],
//			lose:[
//				
//			],
//		 },		
	],
	init:function(){
		Macro.setUnitBtnDisable(true);
	},
	config:{
		disable:{
//			myhero:true,ability:true,
		},
		gameEdge:{left:0,right:3800},
		reward:{exp:244,gold:429,gem:0},
	}
};