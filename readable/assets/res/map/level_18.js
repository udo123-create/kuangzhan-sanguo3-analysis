
var MapConfig={
	unit :[
		[
			{time:0,id:"Gate",x:200,faction:1,hp:16000*(1+0.5*(gDifficulty-1))},// 城门设定
			{time:0,id:"Gate",x:3600,faction:-1,hp:666050*(1+0.5*(gDifficulty-1)),drop:{gold:{num:32,ct:5}},tag:10},// 城门设定
			{time:0,id:"pikemanQun",x:3800,faction:-1,lvl:15,},
			{time:1,id:"pikemanQun",x:3800,faction:-1,lvl:15,},
			{time:2,id:"pikemanQun",x:3800,faction:-1,lvl:15,},

			{time:5,id:"shieldmanQun",x:3800,faction:-1,lvl:15},
			{time:6,id:"shieldmanQun",x:3800,faction:-1,lvl:15},
			{time:9,id:"bowmanQun",x:3800,faction:-1,lvl:15},
//			{time:15,id:"mageQun",x:3900,faction:-1,lvl:15},

			{time:9,id:"fatManQun",x:3800,faction:-1,lvl:14,drop:{heal:{percent:0.1,ct:3}},},
			{time:20,id:"pikemanQun",x:3800,faction:-1,lvl:15,},
			{time:21,id:"pikemanQun",x:3800,faction:-1,lvl:15,},
			{time:23,id:"pikemanQun",x:3800,faction:-1,lvl:15,},

			{time:28,id:"shieldmanQun",x:3800,faction:-1,lvl:15},
			{time:30,id:"bowmanQun",x:3800,faction:-1,lvl:14,drop:{heal:{percent:0.1,ct:3}},},
			{time:33,id:"bowmanQun",x:3800,faction:-1,lvl:15},

			{time:40,id:"shieldmanQun",x:3800,faction:-1,lvl:15},
			{time:40,id:"fatManQun",x:3800,faction:-1,lvl:14,drop:{heal:{percent:0.1,ct:3}},},
			{time:50,id:"pikemanQun",x:3800,faction:-1,lvl:15},
			{time:51,id:"pikemanQun",x:3900,faction:-1,lvl:15},		
			{time:53,id:"fatManQun",x:3900,faction:-1,lvl:15},

			{time:60,id:"shieldmanQun",x:3800,faction:-1,lvl:15},
			{time:63,id:"bowmanQun",x:3800,faction:-1,lvl:15},
			{time:64,id:"bowmanQun",x:3900,faction:-1,lvl:15},		
			{time:67,id:"mageQun",x:3900,faction:-1,lvl:15},

			{time:70,id:"GuoSi",lvl:1,x:3800,faction:-1,unitType:"boss",drop:{gold:{num:40,ct:3},heal:{percent:0.1,ct:2}},status:{noDismember:1},},
		],

		[
//			{time:0,id:"Gate",x:3600,faction:-1,hp:66605,drop:{gold:{num:32,ct:5}},tag:10},// 城门设定
//			{time:0,id:"Gate",x:3600,faction:-1,hp:10000,drop:{gold:{num:32,ct:5}},},
			{time:0,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:15,},
			{time:1,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:15,},
			{time:2,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:15,},

			{time:3,id:"shieldmanQun",x:3800,faction:-1,lvl:15},
			{time:4,id:"shieldmanQun",x:3800,faction:-1,lvl:15},
			{time:5,id:"shieldmanQun",x:3800,faction:-1,lvl:15},

			{time:9,id:"bowmanQun",x:3800,faction:-1,direction:-1,lvl:15,},
			{time:10,id:"bowmanQun",x:3800,faction:-1,direction:-1,lvl:15,},

			{time:15,id:"fatManQun",x:3800,faction:-1,lvl:14},
			{time:18,id:"shieldmanQun",x:3800,faction:-1,lvl:15},
			{time:20,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:15,},
			{time:21,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:15,},

			{time:25,id:"bowmanQun",x:3800,faction:-1,direction:-1,lvl:15,},
			{time:28,id:"bowmanQun",x:3800,faction:-1,direction:-1,lvl:15,},

			{time:30,id:"shieldmanQun",x:3800,faction:-1,lvl:15},
			{time:31,id:"shieldmanQun",x:3800,faction:-1,lvl:15},

			{time:35,id:"bowmanQun",x:3800,faction:-1,lvl:15},
			{time:36,id:"shieldmanQun",x:3800,faction:-1,lvl:15},

			{time:40,id:"pikemanQun",x:3800,faction:-1,lvl:14},
			{time:41,id:"shieldmanQun",x:3800,faction:-1,lvl:15},
			{time:43,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:15,},
			{time:45,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:15,},
			{time:50,id:"bowmanQun",x:3800,faction:-1,direction:-1,lvl:15,},
		],
	],		

	
	task:[
		
		{
//			taskFinishLatency:0,
			win:[
				{type:"killUnit",faction:-1,text:'击败郭汜',id:"GuoSi"},
			],
			lose:[
				
			],
		    func:function(){

		    },
		},
       	{
//			taskTextShowLatency:0,
			win:[
					{type:"allClear",faction:-1,text:'全歼残敌',},
				],
			lose:[
				
				],	
			func:function(){
				if(Macro.unit(10)){
					Macro.unit(10).maxHp=16000;
				}

			},
			finishFunc:function(){
				Macro.flee();
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
		drop:{rage:{chance:1,num:1},gold:{chance:0.5,num:130,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:585,gold:0,gem:0},
	}
};