
var MapConfig={
	open_1:true,   
	open_2:true,   
	func_1:function(){
	},
	func_2:function(){
		if(MapConfig.open_2&&Macro.unit(1)){
			MapConfig.open_2=false;
			var config={camX:3300,camSpeed:1,dialogTime:4,unitID:1,timeToNext:3,
				dialog:{
					skip:true,
				        	timeToNext : 3,
					text : [
				         	{
				        		0:"夏侯恩：何人敢闯军营？",
				        		},
				        		{
				        		0:"赵云：看枪！",
				        		},
				        	]
				}
			}
			Macro.bossAppear(config);
		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:40000*(1+0.5*(gDifficulty-1)),},
			{time:0,id:"Gate",x:3600,faction:-1,hp:250000*(1+0.5*(gDifficulty-1)),drop:{gold:{num:160,ct:5}},},
	
			{time:0,id:"specialShieldMan",x:1400,y:180,faction:-1,lvl:27,},
			{time:0,id:"specialShieldMan",x:1500,faction:-1,lvl:27},
//			{time:0,id:"shieldmanWei",x:2000,faction:-1,lvl:27},
//			{time:0,id:"bowmanWei",x:2500,faction:-1,lvl:27},	

			{time:5,id:"pikemanWei",x:3800,faction:-1,lvl:27,},
			{time:6,id:"bowmanWei",x:3900,faction:-1,lvl:27},	
			{time:8,id:"shieldmanWei",x:3800,faction:-1,lvl:27},

			{time:13,id:"pikemanWei",x:3800,faction:-1,lvl:27,},
			{time:15,id:"pikemanWei",x:3900,faction:-1,lvl:27},	
			{time:18,id:"shieldmanWei",x:3800,faction:-1,lvl:27,drop:{heal:{percent:0.1,ct:4}},},

			{time:20,id:"bowmanWei",x:3900,faction:-1,lvl:27},	
			{time:23,id:"bowmanWei",x:3900,faction:-1,lvl:27},	

			{time:25,id:"pikemanWei",x:3800,faction:-1,lvl:27,},
			{time:27,id:"pikemanWei",x:3900,faction:-1,lvl:27},	
			{time:29,id:"shieldmanWei",x:3800,faction:-1,lvl:27},

			{time:32,id:"bowmanWei",x:3900,faction:-1,lvl:27},	
			{time:33,id:"shieldmanWei",x:3800,faction:-1,lvl:27},
			{time:35,id:"pikemanWei",x:3800,faction:-1,lvl:27,},
			{time:37,id:"pikemanWei",x:3900,faction:-1,lvl:27},

		],
		[

			{time:4,id:"fatManWei",x:3800,faction:-1,lvl:27,},
			{time:5,id:"pikemanWei",x:3800,faction:-1,lvl:27,},
			{time:6,id:"bowmanWei",x:3900,faction:-1,lvl:27},	

			{time:7,id:"shieldmanWei",x:3800,faction:-1,lvl:27},
			{time:8,id:"shieldmanWei",x:3800,faction:-1,lvl:27},
			{time:9,id:"bowmanWei",x:3800,faction:-1,lvl:27},
			{time:10,id:"bowmanWei",x:3900,faction:-1,lvl:27},	

			{time:12,id:"fatManWei",x:3800,faction:-1,lvl:27,},
			{time:20,id:"pikemanWei",x:3800,faction:-1,lvl:27,},
			{time:20,id:"bowmanWei",x:3900,faction:-1,lvl:27},	
			{time:21,id:"shieldmanWei",x:3800,faction:-1,lvl:27},

			{time:29,id:"XiaHouen",lvl:1,x:3650,y:180,faction:-1,tag:1,unitType:"boss",drop:{gold:{num:150,ct:3}},},
			{time:30,id:"fatManWei",x:3800,faction:-1,lvl:27,},
			{time:31,id:"pikemanWei",x:3800,faction:-1,lvl:27,},
			{time:33,id:"pikemanWei",x:3900,faction:-1,lvl:27},	
			{time:35,id:"shieldmanWei",x:3800,faction:-1,lvl:27},

			{time:39,id:"bowmanWei",x:3900,faction:-1,lvl:27},	
			{time:40,id:"bowmanWei",x:3900,faction:-1,lvl:27},	
			{time:41,id:"bowmanWei",x:3900,faction:-1,lvl:27},	

			{time:48,id:"shieldmanWei",x:3800,faction:-1,lvl:27,},
			{time:49,id:"pikemanWei",x:3800,faction:-1,lvl:27,},
			{time:52,id:"pikemanWei",x:3900,faction:-1,lvl:27},	
			{time:55,id:"shieldmanWei",x:3800,faction:-1,lvl:27,drop:{heal:{percent:0.1,ct:4}},},


//			{time:59,id:"shieldmanWei",x:3800,faction:-1,lvl:27,},
//			{time:60,id:"mageWei",x:3800,faction:-1,lvl:27,},
//			{time:62,id:"bowmanWei",x:3900,faction:-1,lvl:27},	
//			{time:65,id:"shieldmanWei",x:3800,faction:-1,lvl:27},
//			{time:70,id:"pikemanWei",x:3800,faction:-1,lvl:27,},
//			{time:71,id:"pikemanWei",x:3900,faction:-1,lvl:27},	
		],
		[
//			{time:0,id:"Gate",x:3600,hp:80000,faction:-1},
			{time:4,id:"fatManWei",x:3800,faction:-1,lvl:27,},
			{time:5,id:"pikemanWei",x:3800,faction:-1,lvl:27,},
			{time:6,id:"bowmanWei",x:3900,faction:-1,lvl:27},	

			{time:7,id:"shieldmanWei",x:3800,faction:-1,lvl:27},
			{time:8,id:"shieldmanWei",x:3800,faction:-1,lvl:27},
			{time:9,id:"bowmanWei",x:3800,faction:-1,lvl:27},
			{time:10,id:"bowmanWei",x:3900,faction:-1,lvl:27},	

			{time:12,id:"fatManWei",x:3800,faction:-1,lvl:27,},
			{time:20,id:"shieldmanWei",x:3800,faction:-1,lvl:27,},
			{time:20,id:"bowmanWei",x:3900,faction:-1,lvl:27},	
			{time:21,id:"shieldmanWei",x:3800,faction:-1,lvl:27},

			{time:30,id:"fatManWei",x:3800,faction:-1,lvl:27,},
			{time:31,id:"shieldmanWei",x:3800,faction:-1,lvl:27,},
			{time:33,id:"shieldmanWei",x:3900,faction:-1,lvl:27},	
			{time:35,id:"shieldmanWei",x:3800,faction:-1,lvl:27},

			{time:39,id:"bowmanWei",x:3900,faction:-1,lvl:27},	
			{time:40,id:"bowmanWei",x:3900,faction:-1,lvl:27},	
			{time:41,id:"bowmanWei",x:3900,faction:-1,lvl:27},		
		],
	],		

	
	task:[
		
		{
	//		taskFinishLatency:0,
			win:[
				{type:"allClear",faction:-1,text:'杀敌先锋，打探我军消息',},
			],
			lose:[
				
			],
		    func:function(){
//		    	Macro.allUnitAction(function(unit){
//                    unit.setAI(false);
//                });	
				Macro.setGameEdge(0,3300);
		    },
			update:function(){
				MapConfig.func_1();
			},
        
		},
       	{
	//		taskTextShowLatency:0,
			win:[
					{type:"killUnit",faction:-1,text:'斩杀夏侯恩，夺取青釭剑',id:'XiaHouen',},
				],
			lose:[
				
				],	
			func:function(){
				Macro.setGameEdge(0,3300);
			},
			update:function(){
				MapConfig.func_2();
			}	
		},	
       	{
	//		taskTextShowLatency:0,
			win:[
					{type:"siege",faction:-1,text:'攻破敌城',},
				],
			lose:[
				
				],	
			func:function(){
				Macro.setGameEdge(0,3800);
			},
			update:function(){
				MapConfig.func_2();
			}	
		},	
	],
	init:function(){
		g_sharedFightLayer.registerEdge(3500,-1)
	},
	config:{
		disable:{
//			myhero:true,ability:true,
		},
		drop:{rage:{chance:1,num:1},gold:{chance:0.5,num:600,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:3430,gold:0,gem:0},
	}
};