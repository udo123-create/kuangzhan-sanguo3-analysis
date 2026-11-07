var bossHp=(Math.pow(1.085,gPlayer.getCharacter().lvl)*60+66)*5000/66;
var	bossAttack=Math.pow(1.09,gPlayer.getCharacter().lvl)*70+66;

var MapConfig={
	unit :[
		[
			{time:0,id:"Gate",x:300,hp:bossHp/3,faction:1},// 城门设定
			{time:0,id:"Gate",x:3600,hp:bossHp/3,faction:-1,},// 城门设定
			{time:0,id:"specialPikeMan",x:1700,faction:-1,tag:1,attack:40,hp:150},

			{time:1,id:"specialPikeMan",x:2200,faction:-1,attack:40,hp:150},
			{time:2,id:"specialPikeMan",x:2200,faction:-1,attack:40,hp:150},
			{time:3,id:"specialBowMan",x:2200,faction:-1,attack:60,hp:100},

			{time:6,id:"specialPikeMan",x:3000,faction:-1,attack:40,hp:150},
			{time:7,id:"specialPikeMan",x:3000,faction:-1,attack:40,hp:150},
			{time:9,id:"specialBowMan",x:3000,faction:-1,attack:60,hp:100},

			{time:13,id:"specialPikeMan",x:3800,faction:-1,attack:40,hp:150},
			{time:14,id:"specialBowMan",x:3800,faction:-1,attack:60,hp:100},
			{time:15,id:"specialBowMan",x:3800,faction:-1,attack:60,hp:100},
			{time:16,id:"specialBowMan",x:3800,faction:-1,attack:60,hp:100},
			{time:17,id:"specialPikeMan",x:3800,faction:-1,attack:40,hp:150},
			{time:15,id:"specialShieldMan",x:3800,faction:-1,attack:80,hp:300},
				
			{time:19,id:"specialShieldMan",x:3800,faction:-1,attack:80,hp:300},
			{time:20,id:"specialPikeMan",x:3800,faction:-1,attack:40,hp:150},
			{time:21,id:"specialPikeMan",x:3800,faction:-1,attack:40,hp:150},
			{time:22,id:"specialBowMan",x:3800,faction:-1,attack:60,hp:100},
			{time:23,id:"specialShieldMan",x:3800,faction:-1,attack:80,hp:300,drop:{heal:{percent:0.1,ct:2}},},

			{time:27,id:"fatManWei",x:3800,y:170,faction:-1,attack:120,hp:1000},
			{time:28,id:"specialPikeMan",x:3800,faction:-1,attack:40,hp:150},
			{time:29,id:"specialPikeMan",x:3800,faction:-1,attack:40,hp:150},
			{time:30,id:"specialBowMan",x:3800,faction:-1,attack:60,hp:100},
			{time:31,id:"mageWei",x:3800,y:180,faction:-1,attack:120,hp:160,},

			{time:37,id:"fatManWei",x:3800,y:170,faction:-1,attack:120,hp:1000,},
			{time:38,id:"specialShieldMan",x:3800,faction:-1,attack:80,hp:300},
			{time:39,id:"specialPikeMan",x:3800,faction:-1,attack:40,hp:150},
			{time:40,id:"mageWei",x:3800,y:180,faction:-1,attack:120,hp:160,},
//			{time:41,id:"specialMage",x:3800,y:180,faction:-1,attack:120,hp:160,},
				
			{time:45,id:"shieldmanWei",x:3800,faction:-1,direction:-1,attack:80,hp:300,},
			{time:45,id:"shieldmanWei",x:3800,faction:-1,direction:-1,attack:80,hp:300,},
			{time:47,id:"specialMage",x:3800,y:180,faction:-1,direction:-1,attack:130,hp:160,drop:{heal:{percent:0.1,ct:2}},},
			{time:50,id:"specialMage",x:3800,y:180,faction:-1,direction:-1,attack:130,hp:160,drop:{heal:{percent:0.1,ct:1}},},
				
		],
	],		

	
	task:[
		
		{
			win:[
				{type:"allClear",faction:-1,text:'歼灭敌军',textNum:true,},
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