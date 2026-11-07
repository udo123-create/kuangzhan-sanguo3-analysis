
var MapConfig={
	open_1:true,      
	func_1:function(){
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1},// 城门设定	           	
			{time:0,id:"ZhangLiao",x:3300,faction:-1,unitType:"boss",tag:2,},
		],
		[
			{time:0,id:"ZhouYu",x:3300,faction:-1,unitType:"boss",tag:2,},
		],
		[
			{time:0,id:"DaoChan",x:3300,faction:-1,unitType:"boss",tag:2,},
		],
		[
			{time:0,id:"LvBu",x:3300,faction:-1,unitType:"boss",tag:2,},
		],
		[
			{time:0,id:"DongZhuo",x:3300,faction:-1,unitType:"boss",tag:2,},
		],
		[
			{time:0,id:"HuaXiong",x:3300,faction:-1,unitType:"boss",tag:2,},
		],
		[
			{time:0,id:"GuoJia",x:3300,faction:-1,unitType:"boss",tag:2,drop:{enchant:{chance:1,content:[{chance:0.5,id:"attack1",lvl:1},{chance:0.3,id:"attack_p1",lvl:1},{chance:0.2,id:"hpAdd1",lvl:1}]},},},
		],
	],		

	
	task:[
		
		{
			win:[
				{type:"killUnit",faction:-1,id:'ZhangLiao',text:'打败张辽',},
			],
			lose:[
				
			],
		},
		{
			win:[
				{type:"killUnit",faction:-1,id:'ZhouYu',text:'打败周瑜',},
			],
			lose:[
				
			],
		},
		{
			win:[
				{type:"killUnit",faction:-1,id:'DaoChan',text:'打败貂蝉',},
			],
			lose:[
				
			],
		},
		{
			win:[
				{type:"killUnit",faction:-1,id:'LvBu',text:'打败吕布',},
			],
			lose:[
				
			],
		},
		{
			win:[
				{type:"killUnit",faction:-1,id:'DongZhuo',text:'打败董卓',},
			],
			lose:[
				
			],
		},
		{
			win:[
				{type:"killUnit",faction:-1,id:'HuaXiong',text:'打败华雄',},
			],
			lose:[
				
			],
		},
		{
			win:[
				{type:"killUnit",faction:-1,id:'GuoJia',text:'打败郭嘉',},
			],
			lose:[
				
			],
		},		
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