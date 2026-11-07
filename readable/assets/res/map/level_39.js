
var MapConfig={
	open_3:true,    
	func_3:function(){
		if(MapConfig.open_3 && Macro.unit(3)){
			MapConfig.open_3=false;
//			cc.msgbox(1)
//			var guanyu=g_sharedFightLayer.createUnit({time:0,id:"CaoCao1",x:3800,faction:-1,unitType:"boss",tag:3})
			var config={camX:3300,camSpeed:1,dialogTime:50,unitID:3,
				dialog:{
				        	timeToNext : 2,
					text : [
				         	{
				        			0:"曹操：赵将军且先住手。",
				        		},
				        		{
				        			0:"赵云：曹贼，有何话说！",
				        		},
				        		{
				        			0:"曹操：昔日我被董卓追杀，将军出手相助。现今将军单骑救主，佩服！",
				        			1:"          众将士退下！让赵将军离开。",
				        		},
				        	]
				}
			}
			Macro.bossAppear(config);
			Macro.doLater(7,function(){
				Macro.flee();
				Macro.doLater(1,function(){
					g_sharedTaskManager.nextTask();
					g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero);
				})
			})			
		}
	},  
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:50000*(1+0.5*(gDifficulty-1)),},
			{time:0,id:"Gate",x:3600,faction:-1,hp:378940*(1+0.5*(gDifficulty-1)),drop:{gold:{num:165,ct:5}},},

//			{time:0,id:"Gate",x:10000,faction:1},// 城门设定
			{time:0,id:"fatManWei",x:2000,faction:-1,lvl:29,},
			{time:1,id:"pikemanWei",x:2300,faction:-1,lvl:29,},
			{time:2,id:"bowmanWei",x:2500,faction:-1,lvl:29},	

			{time:5,id:"shieldmanWei",x:2500,faction:-1,lvl:29},
			{time:7,id:"shieldmanWei",x:2500,faction:-1,lvl:29},
			{time:9,id:"bowmanWei",x:3800,faction:-1,lvl:29},
			{time:10,id:"bowmanWei",x:3900,faction:-1,lvl:29},	

			{time:12,id:"fatManWei",x:3800,faction:-1,lvl:29,},
			{time:20,id:"pikemanWei",x:3800,faction:-1,lvl:29,},
			{time:20,id:"bowmanWei",x:3900,faction:-1,lvl:29},	
			{time:21,id:"shieldmanWei",x:3800,faction:-1,lvl:29},

			{time:30,id:"fatManWei",x:3800,faction:-1,lvl:29,},
			{time:31,id:"pikemanWei",x:3800,faction:-1,lvl:29,},
			{time:33,id:"pikemanWei",x:3900,faction:-1,lvl:29},	
			{time:35,id:"shieldmanWei",x:3800,faction:-1,lvl:29,drop:{heal:{percent:0.1,ct:4}}},

			{time:39,id:"bowmanWei",x:3900,faction:-1,lvl:29},	
			{time:40,id:"bowmanWei",x:3900,faction:-1,lvl:29},	
			{time:41,id:"bowmanWei",x:3900,faction:-1,lvl:29},	

			{time:48,id:"shieldmanWei",x:3800,faction:-1,lvl:29,},
			{time:49,id:"pikemanWei",x:3800,faction:-1,lvl:29,},
			{time:52,id:"pikemanWei",x:3900,faction:-1,lvl:29},	
			{time:55,id:"shieldmanWei",x:3800,faction:-1,lvl:29},

		],
		[
			{time:5,id:"ZhongJin",lvl:1,x:3800,faction:-1,unitType:"boss",tag:1,drop:{gold:{num:150,ct:3}},},
			{time:6,id:"ZhongKun",lvl:1,x:3800,faction:-1,unitType:"boss",tag:2,drop:{gold:{num:150,ct:3}},},	
		],
		[
			{time:1,id:"specialShieldMan",x:3800,faction:-1,lvl:33},
			{time:2,id:"pikemanWei",x:3800,faction:-1,lvl:29},
			{time:3,id:"pikemanWei",x:3800,faction:-1,lvl:29},

			{time:4,id:"specialShieldMan",x:3800,faction:-1,lvl:29},
			{time:5,id:"mageWei",x:3900,faction:-1,lvl:29},		
			{time:7,id:"pikemanWei",x:3800,faction:-1,lvl:29},
			{time:7,id:"bowmanWei",x:3900,faction:-1,lvl:29},		


			{time:13,id:"specialShieldMan",x:3800,faction:-1,lvl:29,},
			{time:14,id:"mageWei",x:3800,faction:-1,lvl:29,},
			{time:17,id:"shieldmanWei",x:3900,faction:-1,lvl:29},	
			{time:20,id:"specialShieldMan",x:3800,faction:-1,lvl:29,},
			{time:21,id:"mageWei",x:3800,faction:-1,lvl:29,},
			{time:23,id:"shieldmanWei",x:3900,faction:-1,lvl:29},	

			{time:20,id:"CaoCao1",lvl:1,x:3800,faction:-1,unitType:"boss",tag:3,},

			{time:25,id:"bowmanWei",x:3800,faction:-1,lvl:29,},
			{time:26,id:"pikemanWei",x:3800,faction:-1,lvl:29,},
			{time:29,id:"bowmanWei",x:3900,faction:-1,lvl:29},	

			{time:32,id:"shieldmanWei",x:3800,faction:-1,lvl:29},
			{time:37,id:"shieldmanWei",x:3800,faction:-1,lvl:29},
			{time:38,id:"bowmanWei",x:3800,faction:-1,lvl:29},
			{time:40,id:"mageWei",x:3900,faction:-1,lvl:29},	

			{time:43,id:"bowmanWei",x:3800,faction:-1,lvl:29,},
			{time:45,id:"pikemanWei",x:3800,faction:-1,lvl:29,},
			{time:46,id:"bowmanWei",x:3900,faction:-1,lvl:29},	

			{time:50,id:"shieldmanWei",x:3800,faction:-1,lvl:29},
			{time:51,id:"shieldmanWei",x:3800,faction:-1,lvl:29},
			{time:58,id:"mageWei",x:3800,faction:-1,lvl:29},
			{time:60,id:"bowmanWei",x:3900,faction:-1,lvl:29},	

		],
	],		

	task:[
		
		{
//			taskFinishLatency:0,
			win:[
				{type:"allClear",faction:-1,text:'击杀长坂坡拦路敌兵',textNum:true,},
			],
			lose:[
				
			],
		},
		{
			win:[
				{type:"allClear",faction:-1,text:'斩杀钟坤、钟缙',textNum:true,},
			],
			lose:[				
			],
		},
		{
			win:[
				{type:"allClear",faction:-1,text:'一路斩杀救阿斗',},
			],
			lose:[
			],
			update:function(){
				MapConfig.func_3();
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
		drop:{rage:{chance:1,num:1},gold:{chance:0.5,num:640,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:4144,gold:0,gem:0},
	}
};