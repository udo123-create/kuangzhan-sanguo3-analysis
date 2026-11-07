
var MapConfig={
	open_1:true,      
	func_1:function(){
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:40000*(1+0.5*(gDifficulty-1)),},
			{time:0,id:"Gate",x:3600,faction:-1,hp:309325*(1+0.5*(gDifficulty-1)),drop:{gold:{num:150,ct:5}},},
	
			{time:1,id:"pikemanWei",x:3800,faction:-1,lvl:26},
			{time:2,id:"pikemanWei",x:3800,faction:-1,lvl:26},
			{time:3,id:"pikemanWei",x:3800,faction:-1,lvl:26},

			{time:4,id:"pikemanWei",x:3800,faction:-1,lvl:26},
			{time:5,id:"mageWei",x:3900,faction:-1,lvl:26},		
			{time:7,id:"pikemanWei",x:3800,faction:-1,lvl:26},
			{time:7,id:"bowmanWei",x:3900,faction:-1,lvl:26},		


			{time:13,id:"pikemanWei",x:3800,faction:-1,lvl:26,},
			{time:14,id:"pikemanWei",x:3800,faction:-1,lvl:26,},
			{time:17,id:"shieldmanWei",x:3900,faction:-1,lvl:26},	

			{time:25,id:"bowmanWei",x:3800,faction:-1,lvl:26,},
			{time:26,id:"pikemanWei",x:3800,faction:-1,lvl:26,},
			{time:29,id:"bowmanWei",x:3900,faction:-1,lvl:26},	

			{time:30,id:"shieldmanWei",x:3800,faction:-1,lvl:26},
			{time:37,id:"shieldmanWei",x:3800,faction:-1,lvl:26},
			{time:38,id:"bowmanWei",x:3800,faction:-1,lvl:26},
			{time:40,id:"mageWei",x:3900,faction:-1,lvl:26},	

			{time:43,id:"bowmanWei",x:3800,faction:-1,lvl:26,},
			{time:45,id:"pikemanWei",x:3800,faction:-1,lvl:26,},
			{time:46,id:"bowmanWei",x:3900,faction:-1,lvl:26},	

			{time:50,id:"shieldmanWei",x:3800,faction:-1,lvl:26},
			{time:51,id:"shieldmanWei",x:3800,faction:-1,lvl:26},
			{time:58,id:"mageWei",x:3800,faction:-1,lvl:26},
			
			{time:58,id:"CaoRen",lvl:1,x:3800,faction:-1,unitType:"boss",drop:{gold:{num:100,ct:3}},},
				
			{time:60,id:"bowmanWei",x:3900,faction:-1,lvl:26},	
		],
		[
			{time:0,id:"fatManWei",x:3800,faction:-1,lvl:26,},
			{time:1,id:"pikemanWei",x:3800,faction:-1,lvl:26,},
			{time:2,id:"bowmanWei",x:3900,faction:-1,lvl:26},	

			{time:5,id:"shieldmanWei",x:3800,faction:-1,lvl:26},
			{time:7,id:"shieldmanWei",x:3800,faction:-1,lvl:26},
			{time:9,id:"bowmanWei",x:3800,faction:-1,lvl:26},
			{time:10,id:"bowmanWei",x:3900,faction:-1,lvl:26},	

			{time:12,id:"fatManWei",x:3800,faction:-1,lvl:26,},
			{time:20,id:"pikemanWei",x:3800,faction:-1,lvl:26,},
			{time:20,id:"bowmanWei",x:3900,faction:-1,lvl:26},	
			{time:21,id:"shieldmanWei",x:3800,faction:-1,lvl:26},

			{time:30,id:"fatManWei",x:3800,faction:-1,lvl:26,},
			{time:31,id:"pikemanWei",x:3800,faction:-1,lvl:26,},
			{time:33,id:"pikemanWei",x:3900,faction:-1,lvl:26},	
			{time:35,id:"shieldmanWei",x:3800,faction:-1,lvl:26},

			{time:39,id:"bowmanWei",x:3900,faction:-1,lvl:26},	
			{time:40,id:"bowmanWei",x:3900,faction:-1,lvl:26},	
			{time:41,id:"bowmanWei",x:3900,faction:-1,lvl:26},	

			{time:48,id:"shieldmanWei",x:3800,faction:-1,lvl:26,},
			{time:49,id:"pikemanWei",x:3800,faction:-1,lvl:26,},
			{time:52,id:"pikemanWei",x:3900,faction:-1,lvl:26},	
			{time:55,id:"shieldmanWei",x:3800,faction:-1,lvl:26},

			{time:59,id:"shieldmanWei",x:3800,faction:-1,lvl:26,},
			{time:60,id:"mageWei",x:3800,faction:-1,lvl:26,},
			{time:62,id:"mageWei",x:3900,faction:-1,lvl:26},	
			{time:65,id:"shieldmanWei",x:3800,faction:-1,lvl:26},
			{time:70,id:"pikemanWei",x:3800,faction:-1,lvl:26,},
			{time:71,id:"pikemanWei",x:3900,faction:-1,lvl:26},	
			
			{time:79,id:"shieldmanWei",x:3800,faction:-1,lvl:26,},
			{time:80,id:"mageWei",x:3800,faction:-1,lvl:26,},
			{time:82,id:"bowmanWei",x:3900,faction:-1,lvl:26},	
			{time:85,id:"shieldmanWei",x:3800,faction:-1,lvl:26},
			{time:80,id:"pikemanWei",x:3800,faction:-1,lvl:26,},
			{time:81,id:"pikemanWei",x:3900,faction:-1,lvl:26},	
		],
	],		

	
	task:[
		
		{
	//		taskFinishLatency:0,
			win:[
				{type:"killUnit",faction:-1,text:'击败曹仁',id:'CaoRen',},
			],
			lose:[
				
			],
		    func:function(){
//		    	Macro.allUnitAction(function(unit){
//                    unit.setAI(false);
//                });	
		    },
			update:function(){
				MapConfig.func_1();
			},
        
		},
       	{
	//		taskTextShowLatency:0,
			win:[
					{type:"time",faction:1,require:80,text:'为刘备逃离争取时间',textNum:true,},
				],
			lose:[
				
				],	
			func:function(){
				g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero)
			},
			finishFunc:function(){
				Macro.showMessage('主公已逃脱，敌军撤退',3);
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
		drop:{rage:{chance:1,num:1},gold:{chance:0.5,num:570,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:3121,gold:0,gem:0},
	}
};