
var MapConfig={
	open_1:true,      
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:20000*(1+0.5*(gDifficulty-1)),},
			{time:0,id:"Gate",x:3600,faction:-1,hp:105450*(1+0.5*(gDifficulty-1)),drop:{gold:{num:46,ct:5}},},
//            		{time:0,id:"XuShu",x:3000,faction:1,tag:1},
//            		{time:0,id:"pikemanShu",x:3150,faction:1,lvl:16,},
			{time:0,id:"pikemanQun",x:1250,faction:-1,lvl:16,},
			{time:0,id:"bowmanQun",x:1300,faction:-1,lvl:16,},
			{time:0,id:"pikemanQun",x:2250,faction:-1,lvl:16,},
			{time:0,id:"bowmanQun",x:2300,faction:-1,lvl:16},
			{time:1,id:"pikemanQun",x:3250,faction:-1,lvl:16,},
			{time:3,id:"pikemanQun",x:3450,faction:-1,lvl:16,},
			{time:0,id:"pikemanQun",x:3800,faction:-1,lvl:16,},
			{time:4,id:"shieldmanQun",x:3800,faction:-1,lvl:16},
			{time:7,id:"bowmanQun",x:3800,faction:-1,lvl:16},
			{time:9,id:"bowmanQun",x:3800,faction:-1,lvl:16},
			
			{time:10,id:"pikemanQun",x:3800,faction:-1,lvl:16,},
			{time:12,id:"pikemanQun",x:3800,faction:-1,lvl:16,},
			{time:20,id:"shieldmanQun",x:3800,faction:-1,lvl:16},
			{time:23,id:"bowmanQun",x:3800,faction:-1,lvl:16},
				
			{time:44,id:"shieldmanQun",x:3800,faction:-1,lvl:16,drop:{heal:{percent:0.1,ct:3}},},
			{time:46,id:"pikemanQun",x:3800,faction:-1,lvl:16,},
			{time:47,id:"pikemanQun",x:3800,faction:-1,lvl:16,},
				
			{time:50,id:"bowmanQun",x:3800,faction:-1,lvl:16},
			{time:53,id:"bowmanQun",x:3800,faction:-1,lvl:16,},

		],
		[

			{time:1,id:"fatManQun",x:3800,faction:-1,lvl:16,},
			{time:7,id:"bowmanQun",x:3800,faction:-1,lvl:16,},
			{time:7,id:"bowmanQun",x:3900,faction:-1,lvl:16},		

			{time:13,id:"pikemanQun",x:3800,faction:-1,lvl:16,},
			{time:14,id:"pikemanQun",x:3800,faction:-1,lvl:16,},
			{time:17,id:"bowmanQun",x:3900,faction:-1,lvl:16,},	

//			{time:25,id:"shieldmanQun",x:3800,faction:-1,lvl:16,},
			{time:26,id:"pikemanQun",x:3800,faction:-1,lvl:16,},
			{time:29,id:"bowmanQun",x:3900,faction:-1,lvl:16,},	

//			{time:30,id:"fatManQun",x:3800,faction:-1,lvl:16},
			{time:37,id:"shieldmanQun",x:3800,faction:-1,lvl:16},
			{time:38,id:"bowmanQun",x:3800,faction:-1,lvl:16},
			{time:40,id:"bowmanQun",x:3900,faction:-1,lvl:16},
				
			{time:45,id:"GuoSi",lvl:1,x:3900,faction:-1,unitType:"boss",hp:17000*(0.5*gDifficulty*gDifficulty-gDifficulty+1.5),attack:700*(0.5*gDifficulty*gDifficulty-gDifficulty+1.5),drop:{gold:{num:60,ct:3},heal:{percent:0.1,ct:2}},
				spell:{
			      ability:{id:"choppedStrike",damage:400,},
			      cooldown:12,
                  config:{castTime:2,
            	           anim:{movementID:"attack16",speed:0.2,loop:false,},
            	           anim2:{movementID:"attack16",speed:0.7,loop:false,start:10,time:0.12,stun:true,
            	                  child:{movementID:"attack16",speed:1,loop:false,start:11,stun:true,}
            	                 },
            	         },
			  	},
			
			},	
			
//			{time:55,id:"shieldmanQun",x:3800,faction:-1,lvl:16},
			{time:67,id:"pikemanQun",x:3800,faction:-1,lvl:16},
			{time:70,id:"bowmanQun",x:3800,faction:-1,lvl:16},
			{time:72,id:"bowmanQun",x:3900,faction:-1,lvl:16},	

			{time:92,id:"shieldmanQun",x:3800,faction:-1,lvl:16},
			{time:96,id:"pikemanQun",x:3800,faction:-1,lvl:16},
			{time:100,id:"bowmanQun",x:3800,faction:-1,lvl:16},
			{time:103,id:"pikemanQun",x:3900,faction:-1,lvl:16},

		],
		[
			{time:0,id:"LiJue",lvl:1,x:3900,faction:-1,unitType:"boss",hp:30000*(0.5*gDifficulty*gDifficulty-gDifficulty+1.5),attack:800*(0.5*gDifficulty*gDifficulty-gDifficulty+1.5),
				spell:{
					ability:{id:"moonChopped",damage:1200,range:200,color:"lan"},
						cooldown:15,
		            config:{castTime:1.5,alert:{type:"direction",width:900},
                          anim:{movementID:"attack2",speed:0.52,loop:false,start:4,time:0.8,},
                          anim2:{movementID:"attack2",startFunc:"Nova",speed:1,loop:false,start:14,time:0.5,stun:true,pause:true,
                                 child:{movementID:"attack2",speed:1,loop:false,start:14,time:0.32,stun:true,}
                                }
		            	},
					},
			},	
//			{time:1,id:"shieldmanQun",x:3800,faction:-1,lvl:16},
			{time:7,id:"bowmanQun",x:3800,faction:-1,lvl:16},
			{time:7,id:"mageQun",x:3900,faction:-1,lvl:16},		

			{time:13,id:"pikemanQun",x:3800,faction:-1,lvl:16,},
			{time:14,id:"pikemanQun",x:3800,faction:-1,lvl:16,},
			{time:17,id:"pikemanQun",x:3900,faction:-1,lvl:16},	

			{time:25,id:"shieldmanQun",x:3800,faction:-1,lvl:16,},
			{time:26,id:"pikemanQun",x:3800,faction:-1,lvl:16,},
			{time:29,id:"bowmanQun",x:3900,faction:-1,lvl:16},	

//			{time:30,id:"fatManQun",x:3800,faction:-1,lvl:16},
			{time:37,id:"bowmanQun",x:3800,faction:-1,lvl:16},
			{time:38,id:"bowmanQun",x:3800,faction:-1,lvl:16},
			{time:40,id:"bowmanQun",x:3900,faction:-1,lvl:16},		
		],
	],		

	
	task:[
		
		{
			taskFinishLatency:0,
			win:[
				{type:"allClear",faction:-1,text:'击杀郭汜先锋军',textNum:true},
			],
			lose:[
				
			],
//		    func:function(){
//		    	Macro.allUnitAction(function(unit){
//                    unit.setAI(false);
//                });	
//		    },
//			update:function(){
//				MapConfig.func_1();
//			},
        
		},
       	{
			taskTextShowLatency:0,
			win:[
					{type:"killUnit",faction:-1,text:'斩杀郭汜',id:'GuoSi',},
				],
			lose:[
				
				],	
			func:function(){
				g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero)
			},
			finishFunc:function(){
				Macro.flee();
			}	
		},
       	{
			win:[
					{type:"killUnit",faction:-1,text:'斩杀李稚然',id:'LiJue',},
				],
			lose:[
				
				],		
		},		
	],
	init:function(){
		g_sharedFightLayer.registerEdge(3500,-1)
	},
	config:{
		disable:{
//			myhero:true,ability:true,
		},
		drop:{rage:{chance:1,num:1},gold:{chance:0.5,num:200,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:770,gold:0,gem:0},
	}
};