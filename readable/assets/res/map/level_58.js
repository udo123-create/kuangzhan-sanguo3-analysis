var MapConfig={
	open1:true,
	open2:true,
	open3:true,
	open4:true,
	open5:true,
	func1:function(){
	},
	func2:function(){
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:150000*(1+0.5*(gDifficulty-1)),},
            {time:0,id:"Gate",x:3600,faction:-1,hp:850000*(1+0.5*(gDifficulty-1)),drop:{gold:{num:2,ct:5}},},
            {time:0,id:"Block",x:800,hp:40000*(1+0.5*(gDifficulty-1)),faction:1,},
		    {time:0,id:"shieldmanWu",x:1500,faction:-1,lvl:43},
			{time:0,id:"shieldmanWu",x:1500,faction:-1,lvl:43},
			{time:0,id:"bowmanWu",x:1800,faction:-1,lvl:43},
			{time:0,id:"bowmanWu",x:1800,faction:-1,lvl:43},
			
			{time:0,id:"fatManWu",x:2300,faction:-1,lvl:43},
			{time:0,id:"shieldmanWu",x:2800,faction:-1,lvl:43,},
			{time:0,id:"pikemanWu",x:2800,faction:-1,lvl:43},
			{time:2,id:"mageWu",x:2800,faction:-1,lvl:43},
		
		    {time:10,id:"fatManWu",faction:-1,lvl:43},
			{time:15,id:"shieldmanWu",faction:-1,lvl:43,},
			{time:15,id:"pikemanWu",x:3800,faction:-1,lvl:43},
			{time:15,id:"mageWu",x:3800,faction:-1,lvl:43},
			{time:15,id:"bowmanWu",x:3800,faction:-1,lvl:43},

		],
		[
					
		    {time:0,id:"LuSu",x:3400,faction:-1,unitType:"boss",hp:250000*Math.pow(1.5,(gDifficulty-1)),attack:7200*Math.pow(1.5,(gDifficulty-1)),
		    	ai:{
					callAmbush:{   
						ambush:[   
							{id:"shieldmanWu",faction:-1,lvl:43,},
							{id:"shieldmanWu",faction:-1,lvl:43,},
							{id:"pikemanWu",faction:-1,lvl:43,},							
							{id:"pikemanWu",faction:-1,lvl:43,},									
						],
						hurtHpPercent:20,
					},
					tryToMove:1,
					seekEnemyToAttack:1,
					Ability:1,
				},
				spell:[		
					    {ability:{id:"Temptation",damage:4000,times:3,range:800},
			         	 cooldown:5,
			        	 config:{castTime:1.0,name:"止战",
			        		alert:{type:"direction",width:970},
		             		anim:{movementID:"attack2",speed:1,loop:false,start:0,time:2,},
		             	},
	         			},
	         			{ability:{id:"cureBuff",num:1300,range:650,},
	 	        	     cooldown:5,
	 	                 config:{
	 	                  		  anim:{movementID:"attack",loop:false,stun:true,},
	 	                  		},
		 	     		},
            	],
            },
			{time:1,id:"shieldmanWu",x:3500,faction:-1,lvl:43,},
			{time:1,id:"bowmanWu",x:3500,faction:-1,lvl:43},
			{time:1,id:"mageWu",x:3500,faction:-1,lvl:43},
		
			{time:7,id:"pikemanWu",faction:-1,lvl:43},
			{time:8,id:"pikemanWu",faction:-1,lvl:43},
			{time:9,id:"bowmanWu",x:3800,faction:-1,lvl:43},
			{time:10,id:"bowmanWu",x:3800,faction:-1,lvl:43},
			
			{time:15,id:"shieldmanWu",x:3800,faction:-1,lvl:43},
			{time:16,id:"shieldmanWu",x:3800,faction:-1,lvl:43},
			{time:18,id:"bowmanWu",x:3800,faction:-1,lvl:43},
			{time:20,id:"bowmanWu",x:3800,faction:-1,lvl:43},
				
			{time:30,id:"shieldmanWu",faction:-1,lvl:43},
			{time:32,id:"bowmanWu",faction:-1,lvl:43},
			{time:35,id:"bowmanWu",x:3800,faction:-1,lvl:43},
			{time:35,id:"mageWu",x:3800,faction:-1,lvl:43},
		],
		[
			{time:0,id:"ZhouYu58",faction:-1,unitType:"boss",hp:280000*Math.pow(1.5,(gDifficulty-1)),attack:7800*Math.pow(1.5,(gDifficulty-1)),},
			
			{time:0,id:"fatManWu",faction:-1,lvl:43},
			{time:1,id:"pikemanWu",faction:-1,lvl:43},
			{time:5,id:"bowmanWu",x:3800,faction:-1,lvl:43},
			{time:6,id:"mageWu",x:3800,faction:-1,lvl:43},
				
			{time:10,id:"shieldmanWu",faction:-1,lvl:43},
			{time:10,id:"bowmanWu",faction:-1,lvl:43},
			{time:12,id:"bowmanWu",x:3800,faction:-1,lvl:43},
			{time:14,id:"mageWu",x:3800,faction:-1,lvl:43},
				
			{time:20,id:"pikemanWu",faction:-1,lvl:43},
			{time:22,id:"pikemanWu",faction:-1,lvl:43},
			{time:23,id:"bowmanWu",x:3800,faction:-1,lvl:43},
			{time:24,id:"bowmanWu",x:3800,faction:-1,lvl:43},
				
			{time:30,id:"shieldmanWu",faction:-1,lvl:43},
			{time:31,id:"bowmanWu",faction:-1,lvl:43},
			{time:33,id:"bowmanWu",x:3800,faction:-1,lvl:43},
			{time:31,id:"mageWu",x:3800,faction:-1,lvl:43},
				
			{time:38,id:"shieldmanWu",faction:-1,lvl:43},
			{time:39,id:"bowmanWu",faction:-1,lvl:43},
			{time:42,id:"bowmanWu",x:3800,faction:-1,lvl:43},
			{time:39,id:"mageWu",x:3800,faction:-1,lvl:43},
	
		],
	],	
	task:[
		{
			win:[
				  {type:"allClear",faction:-1,text:'击杀东吴阻军',textNum:true,},
			],
			lose:[
			],
    		func:function(){
       			Macro.setGameEdge(0,3800);
    		},
			update:function(){
			},
            finishFunc:function(){
			},
		},
		{
			win:[
				  {type:"killUnit",faction:-1,text:'击退鲁肃',id:'LuSu',},
			],
			lose:[
			],
			func:function(){
                Macro.setGameEdge(0,3800);
            },
			update:function(){
			},
            finishFunc:function(){
            	Macro.flee();
			},
		},
		{
			win:[
				  {type:"killUnit",faction:-1,text:'击败周瑜',id:'ZhouYu58',},
			],
			lose:[
			],
			func:function(){
                Macro.setGameEdge(0,3800);
            },
			update:function(){
			},
            finishFunc:function(){
            	Macro.flee();
			},
		},
	
	],
	init:function(){
	},
	config:{
		disable:{
		},
	}
};