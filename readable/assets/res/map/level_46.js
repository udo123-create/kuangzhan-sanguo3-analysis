
var MapConfig={
	open_1:true,   
	open_2:true,         
	func_1:function(){
		if(MapConfig.open_1&&Macro.unit(1)&&Macro.unit(1).pos.x>=3300){
			MapConfig.open_1=false;
			Macro.unit(1).fadeOut();
		}
	},
	func_2:function(){
		if(MapConfig.open_2 && Macro.unit(1) ){
			MapConfig.open_2=false;
			Macro.doLater(5,function(){
				var config={camX:3400,camSpeed:1,dialogTime:4,unitID:1,
					dialog:{
						skip:true,
						timeToNext : 2,
						text : [
					         	{
					        		0:"张颌：何人敢攻城？",
					        		},
					        		{
					        		0:"赵云：常山赵子龙前来讨教！",
					        		},
					        	]
					}
				}
				Macro.bossAppear(config);
			});
		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:60000*(1+0.5*(gDifficulty-1)),tag:998},
			{time:0,id:"Gate",x:3600,faction:-1,hp:601695*(1+0.5*(gDifficulty-1)),drop:{gold:{num:180,ct:5}},},
			{time:0,id:"PangTong",x:400,faction:1,hp:50000,movementSpeed:0.7,tag:1,},

			{time:0,id:"pikemanWei",x:1520,faction:-1,lvl:36,hide:{pos:1500,range:500,func:null},},
			{time:0,id:"pikemanWei",x:1600,faction:-1,lvl:36,hide:{pos:1600,range:600,func:null},},
			{time:0,id:"bowmanWei",x:1700,faction:-1,lvl:36,hide:{pos:1700,range:700,func:null},},
			{time:0,id:"bowmanWei",x:1800,faction:-1,lvl:36,hide:{pos:1750,range:750,func:null},},

			{time:0,id:"pikemanWei",x:3800,faction:-1,lvl:36,},
			{time:1,id:"pikemanWei",x:3800,faction:-1,lvl:36,},
			{time:2,id:"bowmanWei",x:3900,faction:-1,lvl:36},
	
			{time:5,id:"pikemanWei",x:3800,faction:-1,lvl:36},
			{time:7,id:"pikemanWei",x:3800,faction:-1,lvl:36},
			{time:9,id:"bowmanWei",x:3800,faction:-1,lvl:36},
			{time:10,id:"bowmanWei",x:3900,faction:-1,lvl:36},	

			{time:20,id:"pikemanWei",x:3800,faction:-1,lvl:36,drop:{heal:{percent:0.1,ct:2}},},
			{time:20,id:"bowmanWei",x:3900,faction:-1,lvl:36},	
			{time:21,id:"pikemanWei",x:3800,faction:-1,lvl:36},

			{time:30,id:"fatManWei",x:3800,faction:-1,lvl:36,},
			{time:31,id:"pikemanWei",x:3800,faction:-1,lvl:36,},
			{time:33,id:"pikemanWei",x:3900,faction:-1,lvl:36},	
			{time:35,id:"pikemanWei",x:3800,faction:-1,lvl:36},

			{time:39,id:"bowmanWei",x:3900,faction:-1,lvl:36},	
			{time:40,id:"bowmanWei",x:3900,faction:-1,lvl:36},	
			{time:41,id:"bowmanWei",x:3900,faction:-1,lvl:36},	

			{time:48,id:"pikemanWei",x:3800,faction:-1,lvl:36,},
			{time:49,id:"pikemanWei",x:3800,faction:-1,lvl:36,},
			{time:52,id:"bowmanWei",x:3900,faction:-1,lvl:36},	
			{time:55,id:"bowmanWei",x:3800,faction:-1,lvl:36,drop:{heal:{percent:0.1,ct:2}},},

		],
		[
			{time:5,id:"ZhangHe",x:3600,attack:3500*Math.pow(1.5,(gDifficulty-1)),hp:150000*(0.5*gDifficulty*gDifficulty-gDifficulty+1.5),faction:-1,tag:1,unitType:"boss",drop:{gold:{num:300,ct:3}},status:{noDismember:1},},
			{time:6,id:"pikemanWei",x:3800,faction:-1,lvl:36,},
			{time:7,id:"pikemanWei",x:3800,faction:-1,lvl:36,},
			{time:8,id:"pikemanWei",x:3900,faction:-1,lvl:36},	
			{time:9,id:"pikemanWei",x:3800,faction:-1,lvl:36},

			{time:13,id:"pikemanWei",x:3800,faction:-1,lvl:36},
			{time:14,id:"pikemanWei",x:3800,faction:-1,lvl:36},
			{time:17,id:"pikemanWei",x:3800,faction:-1,lvl:36,drop:{heal:{percent:0.1,ct:2}},},
			{time:18,id:"pikemanWei",x:3800,faction:-1,lvl:36},
			{time:21,id:"pikemanWei",x:3800,faction:-1,lvl:36},

			{time:26,id:"bowmanWei",x:3800,faction:-1,lvl:36},
			{time:27,id:"bowmanWei",x:3800,faction:-1,lvl:36},
			{time:30,id:"bowmanWei",x:3800,faction:-1,lvl:36},

			{time:33,id:"pikemanWei",x:3800,faction:-1,lvl:40,
				ai:{
						followMove:{       //护卫ai示例
								getTarget:function(){
									return Macro.unit(1);
								}
						},
						actionWhenStand:1,
						followAttack:1,
				}
			},
			{time:34,id:"pikemanWei",x:3800,faction:-1,lvl:40,
				ai:{
						followMove:{       //护卫ai示例
								getTarget:function(){
									return Macro.unit(1);
								}
						},
						actionWhenStand:1,
						followAttack:1,
				}
			},
			{time:35,id:"pikemanWei",x:3800,faction:-1,lvl:40,
				ai:{
						followMove:{       //护卫ai示例
								getTarget:function(){
									return Macro.unit(1);
								}
						},
						actionWhenStand:1,
						followAttack:1,
				}
			},
			{time:45,id:"specialBowMan",x:3800,faction:-1,lvl:36},
			{time:46,id:"specialBowMan",x:3800,faction:-1,lvl:36},
			{time:47,id:"specialBowMan",x:3800,faction:-1,lvl:36},
		],
	],		

	
	task:[
		
		{
	//		taskFinishLatency:0,
			win:[
				{type:"unitPosition",faction:1,posX:3300,text:'护送庞统前去献计',id:'PangTong',fadeOut:1.5},
			],
			lose:[
				{type:"killUnit",faction:1,noText:true,id:'PangTong'},
			],
		    func:function(){
				Macro.flee();
		    },
			update:function(){
				MapConfig.func_1();
			},
        
		},
       	{
	//		taskTextShowLatency:0,
			win:[
					{type:"killUnit",faction:-1,text:'击败张颌',id:'ZhangHe',},
				],
			lose:[
					
				],	
			func:function(){
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
        drop:{rage:{chance:1,num:1.2},gold:{chance:0.5,num:780,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:8047,gold:0,gem:0},
	}
};