//var bossHp=(Math.pow(1.085,gPlayer.getCharacter().lvl)*60+66)*5000/66;
//var	bossAttack=Math.pow(1.09,gPlayer.getCharacter().lvl)*70+66;

var MapConfig={
	unit :[
		[
			{time:0,id:"HuaXiong",x:3800,faction:-1,unitType:"boss",tag:2,hp:2500*1.2,attack:66*1.2,drop:{heal:{percent:0.2,ct:1},gold:{num:gPlayer.getCharacter().lvl*2,ct:5}},
				status:{noDismember:1},
				ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},
				spell:{
						ability:{id:"batterStrike",num:3,damage:320,},cooldown:15,
		                config:{
		            		castTime:1.5,
		            		anim:{movementID:"attack2",speed:0.5,start:0,time:1.55,},
		                	anim2:{movementID:"attack2",speed:0.97,start:22,time:0.75,stun:true,loop:false,},
			        			
						},
		        },
			},

		],
	],		

	
	task:[
		
		{
			win:[
				{type:"allClear",faction:-1,text:'击败敌将',textNum:true,},
			],
			lose:[
				
			],
			finishFunc:function(){
			},
		},
	],
	init:function(){
	},
	config:{
		disable:{
//			myhero:true,ability:true,
			unit:true,
		},
        drop:{rage:{chance:1,num:1},},
		gameEdge:{left:0,right:3800},
		reward:{exp:378,gold:1857,gem:0},
//		unitLvl:gPlayer.getCharacter().lvl<35 ? gPlayer.getCharacter().lvl+2 : gPlayer.getCharacter().lvl,
	}
};