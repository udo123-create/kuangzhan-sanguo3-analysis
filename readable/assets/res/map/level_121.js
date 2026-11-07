var bossHp=(Math.pow(1.1,gPlayer.getCharacter().lvl)*60+66)*8000/66;
var MapConfig={
	unit :[
		[
			{time:0,id:"Gate",x:300,hp:bossHp*2,faction:1},// 城门设定
			{time:0,id:"Gate",x:3600,hp:bossHp*2,faction:-1,drop:{gold:{num:gPlayer.getCharacter().lvl*5,ct:5}},},// 城门设定
			{time:0,id:"specialPikeMan",x:3800,faction:-1,tag:1,},

			{time:4,id:"specialPikeMan",x:3800,faction:-1,},
			{time:8,id:"specialPikeMan",x:3800,faction:-1,},
			{time:9,id:"specialPikeMan",x:3800,faction:-1,},

			{time:13,id:"specialPikeMan",x:3800,faction:-1,},
			{time:14,id:"specialPikeMan",x:3800,faction:-1,},
			{time:15,id:"specialPikeMan",x:3800,faction:-1,},

			{time:19,id:"specialPikeMan",x:3800,faction:-1,},
			{time:20,id:"specialPikeMan",x:3800,faction:-1,},
			{time:21,id:"specialPikeMan",x:3800,faction:-1,},
			{time:22,id:"specialPikeMan",x:3800,faction:-1,},

			{time:27,id:"specialPikeMan",x:3800,faction:-1,},
			{time:28,id:"specialPikeMan",x:3800,faction:-1,},
			{time:29,id:"specialPikeMan",x:3800,faction:-1,},
			{time:30,id:"specialPikeMan",x:3800,faction:-1,},
			{time:31,id:"specialPikeMan",x:3800,faction:-1,},

			{time:37,id:"specialPikeMan",x:3800,faction:-1,},
			{time:38,id:"specialPikeMan",x:3800,faction:-1,},
			{time:39,id:"specialPikeMan",x:3800,faction:-1,},
			{time:40,id:"specialPikeMan",x:3800,faction:-1,drop:{heal:{percent:0.2,ct:1}},},
			{time:41,id:"specialPikeMan",x:3800,faction:-1,drop:{gold:{num:gPlayer.getCharacter().lvl*2,ct:5}},},
		],
		[
			{time:3,id:"specialShieldMan",x:3800,faction:-1,},

			{time:8,id:"specialShieldMan",x:3800,faction:-1,},

			{time:14,id:"specialShieldMan",x:3800,faction:-1,},

			{time:25,id:"specialShieldMan",x:3800,faction:-1,drop:{heal:{percent:0.2,ct:1}},},
			{time:26,id:"specialShieldMan",x:3800,faction:-1,},

			{time:40,id:"specialShieldMan",x:3800,faction:-1,},
			{time:41,id:"specialShieldMan",x:3800,faction:-1,},

			{time:63,id:"specialShieldMan",x:3800,faction:-1,},
			{time:64,id:"specialShieldMan",x:3800,faction:-1,drop:{gold:{num:gPlayer.getCharacter().lvl*2,ct:5}},},
			{time:65,id:"specialShieldMan",x:3800,faction:-1,drop:{heal:{percent:0.2,ct:1}},},
		],
		[
			{time:3,id:"specialBowMan",x:3800,faction:-1,},

			{time:6,id:"specialBowMan",x:3800,faction:-1,},
			{time:9,id:"specialBowMan",x:3800,faction:-1,},

			{time:11,id:"specialPikeMan",x:3800,faction:-1,},
			{time:14,id:"specialBowMan",x:3800,faction:-1,},

			{time:18,id:"specialPikeMan",x:3800,faction:-1,},
			{time:21,id:"specialBowMan",x:3800,faction:-1,},
			{time:22,id:"specialBowMan",x:3800,faction:-1,},

			{time:26,id:"specialShieldMan",x:3800,faction:-1,},
			{time:29,id:"specialBowMan",x:3800,faction:-1,},
			{time:30,id:"specialBowMan",x:3800,faction:-1,},

//			{time:35,id:"specialShieldMan",x:3800,faction:-1,},
			{time:38,id:"specialBowMan",x:3800,faction:-1,},
			{time:39,id:"specialBowMan",x:3800,faction:-1,},
			{time:40,id:"specialBowMan",x:3800,faction:-1,drop:{heal:{percent:0.2,ct:1}},},

			{time:46,id:"specialShieldMan",x:3800,faction:-1,},
			{time:50,id:"specialPikeMan",x:3800,faction:-1,},
			{time:51,id:"specialBowMan",x:3800,faction:-1,},
			{time:52,id:"specialBowMan",x:3800,faction:-1,},

//			{time:56,id:"specialShieldMan",x:3800,faction:-1,},
//			{time:57,id:"specialShieldMan",x:3800,faction:-1,},
			{time:61,id:"specialBowMan",x:3800,faction:-1,},
			{time:62,id:"specialBowMan",x:3800,faction:-1,},
			{time:63,id:"specialBowMan",x:3800,faction:-1,},

			{time:74,id:"specialShieldMan",x:3800,faction:-1,},
			{time:75,id:"specialBowMan",x:3800,faction:-1,},
			{time:76,id:"specialBowMan",x:3800,faction:-1,},
			{time:77,id:"specialBowMan",x:3800,faction:-1,},

			{time:80,id:"specialBowMan",x:3800,faction:-1,drop:{heal:{percent:0.,ct:1}},},
			{time:81,id:"specialBowMan",x:3800,faction:-1,drop:{gold:{num:gPlayer.getCharacter().lvl*2,ct:5}},},
			{time:82,id:"specialBowMan",x:3800,faction:-1,},
		],
		[
			{time:3,id:"specialFatMan",x:3800,faction:-1,},


			{time:15,id:"specialFatMan",x:3800,faction:-1,drop:{heal:{percent:0.2,ct:1}},},

			{time:30,id:"specialFatMan",x:3800,faction:-1,},
			{time:31,id:"specialBowMan",x:3800,faction:-1,},

			{time:35,id:"specialFatMan",x:3800,faction:-1,},
			{time:36,id:"specialBowMan",x:3800,faction:-1,},

			{time:42,id:"specialFatMan",x:3800,faction:-1,},
			{time:43,id:"specialPikeMan",x:3800,faction:-1,},
			{time:44,id:"specialBowMan",x:3800,faction:-1,drop:{heal:{percent:0.2,ct:1}},},

			{time:55,id:"specialFatMan",x:3800,faction:-1,},
			{time:56,id:"specialShieldMan",x:3800,faction:-1,},
			{time:57,id:"specialBowMan",x:3800,faction:-1,},

			{time:75,id:"specialFatMan",x:3800,faction:-1,},
			{time:76,id:"specialShieldMan",x:3800,faction:-1,drop:{heal:{percent:0.2,ct:1}},},
			{time:78,id:"specialBowMan",x:3800,faction:-1,},
			{time:79,id:"specialBowMan",x:3800,faction:-1,},

			{time:90,id:"specialFatMan",x:3800,faction:-1,drop:{heal:{percent:0.2,ct:1}},},
			{time:91,id:"specialShieldMan",x:3800,faction:-1,},
			{time:92,id:"specialBowMan",x:3800,faction:-1,drop:{gold:{num:gPlayer.getCharacter().lvl*2,ct:5}},},
			{time:93,id:"specialBowMan",x:3800,faction:-1,},
		],
		[
			{time:3,id:"specialMage",x:3800,faction:-1,},

			{time:7,id:"specialPikeMan",x:3800,faction:-1,},
			{time:8,id:"specialMage",x:3800,faction:-1,},
		
			{time:13,id:"specialPikeMan",x:3800,faction:-1,},
			{time:14,id:"specialPikeMan",x:3800,faction:-1,},
			{time:16,id:"specialMage",x:3800,faction:-1,},

			{time:20,id:"specialShieldMan",x:3800,faction:-1,},
//			{time:21,id:"specialMage",x:3800,faction:-1,},

			{time:27,id:"specialShieldMan",x:3800,faction:-1,drop:{heal:{percent:0.2,ct:1}},},
			{time:28,id:"specialPikeMan",x:3800,faction:-1,},
//			{time:30,id:"specialMage",x:3800,faction:-1,},

			{time:25,id:"specialFatMan",x:3800,faction:-1,},
			{time:38,id:"specialMage",x:3800,faction:-1,},

			{time:37,id:"specialFatMan",x:3800,faction:-1,},
//			{time:45,id:"specialMage",x:3800,faction:-1,},
			{time:47,id:"specialBowMan",x:3800,faction:-1,},

			{time:55,id:"specialMage",x:3800,faction:-1,drop:{heal:{percent:0.2,ct:1}},},
			{time:59,id:"specialBowMan",x:3800,faction:-1,
			drop:{
					enchant:{chance:0.34,content:[{chance:0.5,id:"30021",},{chance:0.5,id:"30091",},]},
				}
						},
			{time:60,id:"specialBowMan",x:3800,faction:-1,},
			{time:61,id:"specialBowMan",x:3800,faction:-1,},

			{time:68,id:"specialMage",x:3800,faction:-1,},
			{time:70,id:"specialBowMan",x:3800,faction:-1,},
			{time:71,id:"specialBowMan",x:3800,faction:-1,
//				drop:{enchant:{chance:0.3,content:[{chance:0.9,id:"attackSpeed1",},{chance:0.1,id:"attack_p2",},]},}
			},
			{time:72,id:"specialBowMan",x:3800,faction:-1,},
		],
	],		

	
	task:[
		
		{
			win:[
				{type:"killUnit",faction:-1,text:'破敌精英枪阵',id:"specialPikeMan",textNum:true,require:20,},
			],
			lose:[
				
			],
			finishFunc:function(){
				Macro.flee();
			},
		},
		{
			win:[
				{type:"killUnit",faction:-1,text:'破敌单刀阵',id:"specialShieldMan",textNum:true,require:10,},
			],
			lose:[
				
			],
			finishFunc:function(){
				Macro.flee();
			},
		},
		{
			win:[
				{type:"killUnit",faction:-1,text:'击杀远射弓弩手',id:"specialBowMan",textNum:true,require:20,},
			],
			lose:[
				
			],
			finishFunc:function(){
				Macro.flee();
			},
		},
		{
			win:[
				{type:"killUnit",faction:-1,text:'击杀巨人锤兵',id:"specialFatMan",textNum:true,require:7,},
			],
			lose:[
				
			],
			finishFunc:function(){
				Macro.flee();
			},
		},
		{
			win:[
				{type:"killUnit",faction:-1,text:'击杀黑袍道士',id:"specialMage",textNum:true,require:6,},
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
		unitLvl:gPlayer.getCharacter().lvl<35 ? gPlayer.getCharacter().lvl+3 : gPlayer.getCharacter().lvl,
	}
};