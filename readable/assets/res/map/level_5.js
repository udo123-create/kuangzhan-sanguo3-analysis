var MapConfig={
	open:true,
	open_1:true,
	open_1_2:true,
	open_2:true,
	func_1:function(){
	},
	func_2:function(){
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:10000*(1+0.5*(gDifficulty-1)),tag:998},
			{time:0,id:"Gate",x:3600,faction:-1,hp:43075*(1+0.5*(gDifficulty-1)),drop:{gold:{num:6,ct:5}},},
			{time:0,id:"huangJinPikeMan",x:1200,faction:-1,lvl:4,},
			{time:0,id:"shieldMan",x:1400,faction:-1,lvl:4,},
			{time:0,id:"huangJinPikeMan",x:1500,faction:-1,lvl:4,},
			{time:0,id:"huangJinPikeMan",x:1500,faction:-1,lvl:4,},
			{time:0,id:"shieldMan",x:1700,faction:-1,lvl:4,},
			{time:0,id:"huangJinPikeMan",x:1800,faction:-1,lvl:4,},
			{time:1,id:"huangJinPikeMan",x:2550,y:150,faction:-1,lvl:4,},
			{time:2,id:"bowMan",x:3200,y:150,faction:-1,lvl:4,},
			{time:2,id:"huangJinPikeMan",x:3520,y:145,faction:-1,lvl:4,},
			{time:3,id:"huangJinPikeMan",x:3550,y:140,faction:-1,lvl:4,},
			{time:3,id:"huangJinPikeMan",x:3500,faction:-1,lvl:4,},
			{time:10,id:"huangJinPikeMan",x:3500,y:150,faction:-1,lvl:4,},
			{time:10,id:"bowMan",x:3600,faction:-1,lvl:4,},
			{time:11,id:"huangJinPikeMan",x:3550,y:155,faction:-1,lvl:4,},
			{time:15,id:"huangJinPikeMan",x:3500,faction:-1,lvl:4,},
			{time:15,id:"shieldMan",x:3800,faction:-1,lvl:4,drop:{heal:{percent:0.1,ct:1}},},
			{time:20,id:"bowMan",x:3800,y:150,faction:-1,lvl:4,},
			{time:23,id:"shieldMan",x:3800,y:140,faction:-1,lvl:4,},
			{time:26,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},
			{time:28,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},
		],
		[				
			{time:0,id:"shieldMan",x:3800,faction:-1,lvl:4,},
            {time:2,id:"bowMan",x:3800,faction:-1,lvl:4,},
			{time:2,id:"shieldMan",x:3800,faction:-1,lvl:4,},
			{time:5,id:"bowMan",x:3800,faction:-1,lvl:4,},
			{time:10,id:"shieldMan",x:3800,faction:-1,lvl:4,},

			{time:15,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},
			{time:17,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},
			{time:19,id:"shieldMan",x:3800,faction:-1,lvl:4,drop:{heal:{percent:0.1,ct:3}},},


			{time:20,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},
			{time:21,id:"shieldMan",x:3800,faction:-1,lvl:4,},
			{time:25,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},

			{time:30,id:"ZhangLiang5",x:3600,faction:-1,tag:1,unitType:"boss",
				 hp:8500*Math.pow(1.5,(gDifficulty-1)),attack:180*Math.pow(1.5,(gDifficulty-1)),
				drop:{gold:{num:10,ct:3}},
			},
			{time:31,id:"mageQun",x:3700,faction:-1,lvl:6,},
			{time:32,id:"mageQun",x:3700,faction:-1,lvl:6,},

			{time:32,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},
			{time:35,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,drop:{heal:{percent:0.1,ct:3}},},
			{time:38,id:"shieldMan",x:3800,faction:-1,lvl:4,},
			{time:42,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},
			{time:43,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},

		],
	],	
	task:[
		
		{
			taskFinishLatency:5,
			win:[
				{type:"allClear",faction:-1,text:'击杀邓茂先锋军',textNum:true,},
		
			],
			lose:[
			],
			update:function(){
			},
		},
       	{
			win:[
				{type:"killUnit",faction:-1,text:'斩杀邓茂',id:'ZhangLiang5'},
		
			],
			lose:[
			],
			finishFunc:function(){
				Macro.flee();
			},
			func:function(){
			},
            update:function(){
            },
		},
	
	],
	init:function(){
			g_sharedFightLayer.registerEdge(3500,-1)
	},
	config:{
		disable:{
		},
		drop:{rage:{chance:0.5,num:1.2},gold:{chance:0.5,num:60,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:289,gold:0,gem:0},
		myhero:{equipment:gPlayer.newGuide.legendary == false && [{id:41014},{id:42014},{id:43014}]},
	}
};