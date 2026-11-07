
var MapConfig={
	open_1_1:true,
	open_1:true,   
	open_2:true,         
	func_1:function(){
		if(MapConfig.open_1_1 && Macro.unit(1)){
				MapConfig.open_1_1 =false;
				Macro.unit(1).stand(true);
		}
		if(MapConfig.open_1 && Macro.unit(1) && g_sharedFightLayer.myhero && g_sharedFightLayer.myhero.pos.x>=1700 && Macro.unit(10)){
			MapConfig.open_1=false;
			Macro.camMoveTo(cc.p(2000,"current"),1,1);
			Macro.setGameEdge(0,3000);
			Macro.allUnitAction(function(unit){
				unit.stand(true);
			})
	        		var dialog = {
				timeToNext : 3,
				text : [
			        		{
			        		0:"郭嘉：官渡之战，主公胜局已定，还请赵将军班师回营吧！",
			        		},
			        		{
			        		0:"赵云：胜负之说，还是战场上见分晓吧！",
			        		},
			        		{
			        		0:"郭嘉：既然如此，听我号令！前军一字长枪阵！",
			        		},
			        	]
			} 
			var func = function(){
				Macro.unit(10).dead();
				Macro.allUnitAction(function(unit){
					unit.setAI(true);
				})
				Macro.unit(1).moveTo(5000);
				Macro.doLater(2,function(){
					Macro.unit(1).fadeOut();
				})	
				Macro.setUnitSpawn(true);
				g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero)
			}
			Dialog.create(12.5,dialog,func);
			Macro.doLater(8.5,function(){
				Macro.unit(1).playAnim({movementID:"attack2",loop:0,pause:true,time:0.5,child:{movementID:"attack2",loop:0,},});
				for (var i = 0; i< 30; i++){
					g_sharedFightLayer.createUnit({time:0,id:"pikemanWei",x:(2900+i*300),faction:-1,lvl:20})
				}
			})			
		}
	},
	func_2:function(){
		if(MapConfig.open_2 && Macro.unit(1)){
			Macro.camMoveTo(cc.p(3300,"current"),1,1);
			MapConfig.open_2=false;
			Macro.setGameEdge(0,3800);
			Macro.allUnitAction(function(unit){
				unit.stand(true);
			})
			var dialog = {
				timeToNext : 2,
				text : [
			        		{
			        		0:"郭嘉:全军听令！盾阵出！",
			        		},
			        	]
			} 
			var func = function(){
				Macro.allUnitAction(function(unit){
					unit.setAI(true);
				})
				Macro.unit(1).moveTo(5000);
				Macro.doLater(2,function(){
					Macro.unit(1).fadeOut();
				})	
				Macro.setUnitSpawn(true);
				g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero);
			}
			Dialog.create(4,dialog,func);
			Macro.doLater(3,function(){
				Macro.unit(1).playAnim({movementID:"attack2",loop:0,pause:true,time:0.1,child:{movementID:"attack2",loop:0,},});
				for (var i = 0; i< 30; i++){
					g_sharedFightLayer.createUnit({time:0,id:"shieldmanWei",x:(3800+i*300),faction:-1,lvl:20})
				}
			})			
		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:37000*(1+0.5*(gDifficulty-1)),},
			{time:0,id:"Gate",x:3600,faction:-1,hp:189950*(1+0.5*(gDifficulty-1)),drop:{gold:{num:100,ct:5}},},
			{time:0,id:"GuoJia",x:2400,hp:100000000000000,faction:-1,tag:1,status:{unDead:1},drop:{gold:{num:150,ct:3}},},
			{time:0,id:"Block",x:2400,hp:30841,faction:-1,tag:10},
		],
		[
			{time:3,id:"GuoJia",x:3500,hp:100000000000000,faction:-1,unitType:"boss",tag:1,status:{unDead:1},},
		],
		[
			{time:1,id:"shieldmanWei",x:3800,faction:-1,lvl:20,drop:{heal:{percent:0.1,ct:4}}},	
			{time:2,id:"pikemanWei",x:3800,faction:-1,lvl:20},	
			{time:3,id:"pikemanWei",x:3800,faction:-1,lvl:20},	

			{time:5,id:"shieldmanWei",x:3800,faction:-1,lvl:20},	
			{time:6,id:"pikemanWei",x:3800,faction:-1,lvl:20},	
			{time:7,id:"pikemanWei",x:3800,faction:-1,lvl:20},	

			{time:10,id:"fatManWei",x:3800,faction:-1,lvl:20},
			{time:13,id:"shieldmanWei",x:3800,faction:-1,lvl:20},	
			{time:15,id:"shieldmanWei",x:3800,faction:-1,lvl:20},	
			{time:17,id:"bowmanWei",x:3800,faction:-1,lvl:20},	
			{time:20,id:"bowmanWei",x:3800,faction:-1,lvl:20},	
			{time:22,id:"bowmanWei",x:3800,faction:-1,lvl:20},	

			{time:28,id:"fatManWei",x:3800,faction:-1,lvl:20},
			{time:30,id:"shieldmanWei",x:3800,faction:-1,lvl:20},	
			{time:32,id:"shieldmanWei",x:3800,faction:-1,lvl:20},	
			{time:35,id:"bowmanWei",x:3800,faction:-1,lvl:20},	
			{time:36,id:"bowmanWei",x:3800,faction:-1,lvl:20},	
			{time:37,id:"bowmanWei",x:3800,faction:-1,lvl:20},	

			{time:40,id:"fatManWei",x:3800,faction:-1,lvl:20},
			{time:43,id:"shieldmanWei",x:3800,faction:-1,lvl:20},	
			{time:45,id:"shieldmanWei",x:3800,faction:-1,lvl:20,drop:{heal:{percent:0.1,ct:4}}},	
			{time:48,id:"bowmanWei",x:3800,faction:-1,lvl:20},	
			{time:49,id:"bowmanWei",x:3800,faction:-1,lvl:20},	
			{time:50,id:"bowmanWei",x:3800,faction:-1,lvl:20},	

			{time:60,id:"GuoJia",lvl:1,x:3600,faction:-1,unitType:"boss",tag:1,drop:{gold:{num:150,ct:3}},
				ai:{
					callAmbush:{   
						ambush:[   
							{id:"shieldmanWei",faction:-1,lvl:20,},
							{id:"shieldmanWei",faction:-1,lvl:20,},
							{id:"pikemanWei",faction:-1,lvl:20,},							
							{id:"pikemanWei",faction:-1,lvl:20,},									
						],
						hurtHpPercent:20,
					},
					tryToMove:1,
					seekEnemyToAttack:1,
					Ability:1,
				},
				spell:[		
					{ability:{id:"Temptation",damage:600,times:3,range:800},
			         	cooldown:15,
			        			config:{
			        			castTime:1.5,name:"蛊惑",
			        				alert:{type:"direction",width:750},
		             				anim:{movementID:"attack2",speed:0.3,loop:false,start:0,time:0.6,
		             	 			child:{movementID:"attack2",start:10,pause:true,time:0.6,
		             				child:{movementID:"attack2",speed:0.3,start:10,loop:false,}}
		             	 			},
		             				anim2:{movementID:"attack2",speed:1,start:22,pause:true,time:1,loop:false,stun:true,
		 	         			child:{movementID:"stand",speed:1,loop:false,stun:true,}}
		             			},
	         			},
	         			{ability:{id:"cureBuff",num:1300,range:650,},
	 	        	      		cooldown:10,
	 	                  		config:{
	 	                  			anim:{movementID:"attack",loop:false,stun:true,
	 	                  			       child:{movementID:"stand",loop:false,stun:true,},
	 	                  			     },
	 	                  				},
		 	     		 },
            			],	
			},
			{time:61,id:"mageWei",x:3700,faction:-1,lvl:20},	

			{time:63,id:"shieldmanWei",x:3800,faction:-1,lvl:20},	
			{time:64,id:"shieldmanWei",x:3800,faction:-1,lvl:20},	
			{time:66,id:"mageWei",x:3800,faction:-1,lvl:20,drop:{heal:{percent:0.4,ct:1}}},	
			{time:70,id:"pikemanWei",x:3800,faction:-1,lvl:20},	
			{time:71,id:"pikemanWei",x:3800,faction:-1,lvl:20},	

			{time:72,id:"bowmanWei",x:3800,faction:-1,lvl:20},	
			{time:73,id:"bowmanWei",x:3800,faction:-1,lvl:20},
				
			{time:90,id:"shieldmanWei",x:3800,faction:-1,lvl:20},	
			{time:95,id:"shieldmanWei",x:3800,faction:-1,lvl:20},	
//			{time:97,id:"mageWei",x:3800,faction:-1,lvl:20,drop:{heal:{percent:0.4,ct:1}}},	
//			{time:110,id:"pikemanWei",x:3800,faction:-1,lvl:20},	
//			{time:112,id:"pikemanWei",x:3800,faction:-1,lvl:20},	
//
//			{time:115,id:"bowmanWei",x:3800,faction:-1,lvl:20},	
//			{time:120,id:"bowmanWei",x:3800,faction:-1,lvl:20},	
		],
	],		

	
	task:[
		
		{
			taskFinishLatency:0,
			win:[
					{type:"killUnit",faction:-1,id:"pikemanWei",require:30,text:'前去打探敌情',textNum:true},
			],
			lose:[
				
			],
		    func:function(){
//				Macro.setGameEdge(0,2100);
		    	Macro.allUnitAction(function(unit){
                    unit.stand(true);
                });	
		    },
			update:function(){
				MapConfig.func_1();
			},
        
		},
       	{
			taskTextShowLatency:5.,
			win:[
					{type:"killUnit",faction:-1,id:"shieldmanWei",require:30,text:'破敌盾阵',textNum:true},
				],
			lose:[
				
				],	
			func:function(){
				g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero)
			},
			update:function(){
				MapConfig.func_2();
			},	
		},	
       	{
//			taskTextShowLatency:5.,
			win:[
					{type:"killUnit",faction:-1,id:"GuoJia",text:'打败"军祭酒"郭嘉',},
				],
			lose:[
				
				],	
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
//			myhero:true,ability:true,
		},
		drop:{rage:{chance:1,num:1},gold:{chance:0.5,num:370,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:1616,gold:0,gem:0},
	}
};