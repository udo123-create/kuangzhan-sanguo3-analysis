
var MapConfig={
	open_2:true,      
	func_2:function(){
		if(MapConfig.open_2 && Macro.unit(1)){
			MapConfig.open_2=false;
			Macro.setUnitSpawn(false);
			Macro.camMoveTo(cc.p(3300,"current"),1,1);
            		Macro.allUnitAction(function(unit){
				if(unit!=Macro.unit(1)){
			        		unit.stand(true);
				}
				else{
					Macro.doLater(1,function(){
						Macro.unit(1).stand(true);
					})
				}
            		});
			Macro.doLater(1,function(){
				var dialog = {
					skip:true,
				        	timeToNext : 2.5,
					text : [
				        		{
				        		0:"袁术：哪里来的黄毛小儿，也敢来这里撒野！",
				        		},
				        		{
				        		0:"赵云：袁术老贼，前来受死！",
				        		},
				        	]
				} 
				var func = function(){
					Macro.allUnitAction(function(unit){
						unit.setAI(true);
					})
					g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero);
					Macro.setUnitSpawn(true);
				}
				Dialog.create(6.5,dialog,func);	
			});	
		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:33000*(1+0.5*(gDifficulty-1)),},
			{time:0,id:"Gate",x:3600,faction:-1,hp:164545*(1+0.5*(gDifficulty-1)),drop:{gold:{num:90,ct:5}},},
			{time:0,id:"pikemanQun",x:1200,faction:-1,lvl:19,},
			{time:0,id:"pikemanQun",x:1500,faction:-1,lvl:19},	
			{time:0,id:"pikemanQun",x:1800,faction:-1,lvl:19},	
			{time:0,id:"shieldmanQun",x:2200,faction:-1,lvl:19},
	
			{time:1,id:"pikemanQun",x:3800,faction:-1,lvl:19},	
			{time:2,id:"pikemanQun",x:3800,faction:-1,lvl:19},	
			{time:5,id:"pikemanQun",x:3800,faction:-1,lvl:19},	
			{time:6,id:"pikemanQun",x:3800,faction:-1,lvl:19},	
			{time:8,id:"mageQun",x:3800,faction:-1,lvl:19},	

			{time:8,id:"fatManQun",x:3800,faction:-1,lvl:19},
			{time:13,id:"shieldmanQun",x:3800,faction:-1,lvl:19},
			{time:15,id:"pikemanQun",x:3800,faction:-1,lvl:19},	
			{time:19,id:"pikemanQun",x:3800,faction:-1,lvl:19},	
			{time:20,id:"bowmanQun",x:3800,faction:-1,lvl:19},	
			{time:21,id:"bowmanQun",x:3800,faction:-1,lvl:19},	

			{time:25,id:"healerQun",x:3800,faction:-1,lvl:19},
			{time:26,id:"pikemanQun",x:3800,faction:-1,lvl:19},	
			{time:28,id:"pikemanQun",x:3800,faction:-1,lvl:19},	
			{time:30,id:"pikemanQun",x:3800,faction:-1,lvl:19},	
			{time:35,id:"bowmanQun",x:3800,faction:-1,lvl:19},	
			{time:36,id:"mageQun",x:3800,faction:-1,lvl:19,drop:{heal:{percent:0.1,ct:5}}},	

			{time:40,id:"shieldmanQun",x:3800,faction:-1,lvl:19},
			{time:43,id:"pikemanQun",x:3800,faction:-1,lvl:19},	
			{time:44,id:"pikemanQun",x:3800,faction:-1,lvl:19},
		],
		[

			{time:0,id:"fatManQun",x:3800,faction:-1,lvl:19},
			{time:0,id:"shieldmanQun",x:3800,faction:-1,lvl:19},
			{time:5,id:"pikemanQun",x:3800,faction:-1,lvl:19},	
			{time:6,id:"pikemanQun",x:3800,faction:-1,lvl:19},	
			{time:7,id:"pikemanQun",x:3800,faction:-1,lvl:19},	
			{time:10,id:"bowmanQun",x:3800,faction:-1,lvl:19},	
			{time:13,id:"bowmanQun",x:3800,faction:-1,lvl:19,drop:{heal:{percent:0.1,ct:5}}},	

			{time:18,id:"shieldmanQun",x:3800,faction:-1,lvl:19},
			{time:20,id:"pikemanQun",x:3800,faction:-1,lvl:19},	
			{time:23,id:"pikemanQun",x:3800,faction:-1,lvl:19},	
			{time:24,id:"pikemanQun",x:3800,faction:-1,lvl:19},	
			{time:28,id:"mageQun",x:3800,faction:-1,lvl:19},	
			{time:29,id:"bowmanQun",x:3800,faction:-1,lvl:19},	

			{time:33,id:"shieldmanQun",x:3800,faction:-1,lvl:19},
			{time:35,id:"pikemanQun",x:3800,faction:-1,lvl:19},	
			{time:36,id:"pikemanQun",x:3800,faction:-1,lvl:19},

			{time:40,id:"healerQun",x:3800,faction:-1,lvl:19},	
			{time:41,id:"pikemanQun",x:3800,faction:-1,lvl:19},	
			{time:43,id:"pikemanQun",x:3800,faction:-1,lvl:19},	
			{time:46,id:"bowmanQun",x:3800,faction:-1,lvl:19},	
			{time:47,id:"bowmanQun",x:3800,faction:-1,lvl:19},	

			{time:48,id:"YuanShu",lvl:1,x:3600,faction:-1,unitType:"boss",tag:1,drop:{gold:{num:120,ct:3}},
		spell:[
							{
				ability:{id:"lightShock",damage:250,times:2,color:"lan"},
			         cooldown:15,
	        config:{castTime:2.5,
	             anim:{movementID:"attack2",speed:0.3,loop:false,start:0,time:1.3,
	             	 child:{movementID:"attack2",start:10,pause:true,time:1,
	         child:{movementID:"attack2",speed:0.3,start:10,loop:false,}}
	             	 },
	             anim2:{movementID:"attack2",speed:1,start:22,pause:true,time:1,loop:false,stun:true,
	 	         child:{movementID:"stand",speed:1,loop:false,stun:true,}}
	             },
	         },
	 	     {
	 	        ability:{id:"cureBuff",num:700,range:450,},
	 	        	      cooldown:10,
	 	                  config:{anim:{movementID:"attack",loop:false,stun:true,child:{movementID:"stand",loop:false,stun:true,}}},
		 	     		 },

				]
				},
			{time:48,id:"mageQun",x:3700,faction:-1,lvl:19},	

			{time:53,id:"mageQun",x:3800,faction:-1,lvl:19},	
			{time:55,id:"pikemanQun",x:3800,faction:-1,lvl:19},	

			{time:60,id:"pikemanQun",x:3800,faction:-1,lvl:19},	
			{time:61,id:"healerQun",x:3800,faction:-1,lvl:19},
		],
	],		
	task:[
		
		{
			win:[
				{type:"allClear",faction:-1,text:'剿灭袁术军',textNum:true},
			],
			lose:[
				
			],
		    func:function(){
		    },
			update:function(){
			},
        
		},
       	{
//	        taskTextShowLatency:3,  
 //          taskFinishLatency:5,
			win:[
					{type:"killUnit",faction:-1,text:'斩杀"伪帝"袁术',id:'YuanShu',},
				],
			lose:[
				
				],	
			func:function(){
			},
			update:function(){
				MapConfig.func_2();
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
		drop:{rage:{chance:1,num:1},gold:{chance:0.5,num:320,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:1304,gold:0,gem:0},
	}
};