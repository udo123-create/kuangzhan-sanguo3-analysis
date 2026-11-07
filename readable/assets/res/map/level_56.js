var MapConfig={
	open1:true,
	open2:true,
	open3:true,
	func1:function(){
	},
	func2:function(){
		if(MapConfig.open2 && Macro.unit(1).hp<=1){
			MapConfig.open2=false;
			
			Macro.allUnitAction(function(unit){
		         unit.stand(true);
			});
	        
	        var dialog = {
	            skip:true,
		        timeToNext : 1,
				text : [
				        {
				          0:"金旋：哼，今日器不顺手，择日再战",
				        },
				       ]
			}
			var func = function(){
			    Macro.flee();
			    g_sharedTaskManager.nextTask();
			}
			Dialog.create(2,dialog,func);
	    }
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:150000*(1+0.5*(gDifficulty-1)),},
            {time:0,id:"Gate",x:3600,faction:-1,hp:850000*(1+0.5*(gDifficulty-1)),drop:{gold:{num:2,ct:5}},},
		    
		    {time:0,id:"shieldmanWei",x:1500,faction:-1,lvl:43},
			{time:0,id:"shieldmanWei",x:1500,faction:-1,lvl:43},
			{time:0,id:"fatManWei",x:2300,faction:-1,lvl:42},
			{time:0,id:"fatManWei",x:2300,faction:-1,lvl:43},
				
            {time:3,id:"pikemanWei",x:1500,faction:-1,lvl:43},
			{time:3,id:"pikemanWei",x:1500,faction:-1,lvl:43},
			{time:5,id:"mageWei",x:2500,faction:-1,lvl:43},
			{time:5,id:"mageWei",x:2500,faction:-1,lvl:43},

			{time:5,id:"specialShieldMan",x:3600,faction:-1,lvl:43},
			{time:5,id:"specialShieldMan",x:3700,faction:-1,lvl:43,},
			{time:5,id:"specialShieldMan",x:3800,faction:-1,lvl:43},
			{time:6,id:"bowmanWei",x:3800,faction:-1,lvl:43},
			{time:7,id:"bowmanWei",x:3800,faction:-1,lvl:43},
				
			{time:7,id:"bowmanWei",x:3700,faction:-1,lvl:43},
			{time:7,id:"bowmanWei",x:3720,faction:-1,lvl:43},			
			{time:7,id:"bowmanWei",x:3750,faction:-1,lvl:43},
			{time:7,id:"bowmanWei",x:3800,faction:-1,lvl:43},

			{time:10,id:"specialShieldMan",x:3800,faction:-1,lvl:43},
			{time:11,id:"shieldmanWei",x:3800,faction:-1,lvl:43},
			{time:12,id:"shieldmanWei",x:3800,faction:-1,lvl:43},
			{time:13,id:"shieldmanWei",x:3800,faction:-1,lvl:43},
			{time:15,id:"mageWei",x:3800,faction:-1,lvl:43},
			{time:16,id:"mageWei",x:3800,faction:-1,lvl:43},
				
			{time:17,id:"bowmanWei",x:3700,faction:-1,lvl:43},
			{time:17,id:"bowmanWei",x:3720,faction:-1,lvl:43},			
			{time:18,id:"bowmanWei",x:3750,faction:-1,lvl:43},
			{time:18,id:"bowmanWei",x:3800,faction:-1,lvl:43},

			{time:18,id:"shieldmanWei",x:3800,faction:-1,lvl:43,drop:{heal:{percent:0.1,ct:2}},},
			{time:20,id:"shieldmanWei",x:3800,faction:-1,lvl:43},
			{time:23,id:"bowmanWei",x:3800,faction:-1,lvl:43},
			{time:24,id:"bowmanWei",x:3800,faction:-1,lvl:43},


			{time:30,id:"shieldmanWei",x:3800,faction:-1,lvl:43},
			{time:31,id:"shieldmanWei",x:3800,faction:-1,lvl:43},
			{time:33,id:"pikemanWei",x:3800,faction:-1,lvl:43},
			{time:35,id:"bowmanWei",x:3800,faction:-1,lvl:43},
			{time:36,id:"bowmanWei",x:3800,faction:-1,lvl:43},


		],
		[
			{time:0,id:"JinXuan",x:3400,faction:-1,unitType:"boss",status:{unDead:1},tag:1,
			 hp:260000*Math.pow(1.5,(gDifficulty-1)),attack:7500*Math.pow(1.5,(gDifficulty-1)),},
			{time:5,id:"fatManWei",x:3400,faction:-1,lvl:43},
			{time:6,id:"fatManWei",x:3400,faction:-1,lvl:43},
			{time:10,id:"mageWei",x:3400,faction:-1,lvl:43},
			{time:12,id:"mageWei",x:3400,faction:-1,lvl:43},
			
			{time:17,id:"bowmanWei",x:3700,faction:-1,lvl:43},
			{time:17,id:"bowmanWei",x:3720,faction:-1,lvl:43},			
			{time:18,id:"bowmanWei",x:3750,faction:-1,lvl:43},
			{time:18,id:"bowmanWei",x:3800,faction:-1,lvl:43},

			{time:18,id:"shieldmanWei",x:3800,faction:-1,lvl:43,drop:{heal:{percent:0.1,ct:2}},},
			{time:20,id:"shieldmanWei",x:3800,faction:-1,lvl:43},
			{time:23,id:"bowmanWei",x:3800,faction:-1,lvl:43},
			{time:24,id:"bowmanWei",x:3800,faction:-1,lvl:43},


			{time:30,id:"shieldmanWei",x:3800,faction:-1,lvl:43},
			{time:31,id:"shieldmanWei",x:3800,faction:-1,lvl:43},
			{time:33,id:"pikemanWei",x:3800,faction:-1,lvl:43},
			{time:35,id:"bowmanWei",x:3800,faction:-1,lvl:43},
			{time:36,id:"bowmanWei",x:3800,faction:-1,lvl:43},

			{time:40,id:"fatManWei",x:3800,faction:-1,lvl:43},
			{time:42,id:"shieldmanWei",x:3800,faction:-1,lvl:43},
			{time:43,id:"shieldmanWei",x:3800,faction:-1,lvl:43},
			{time:43,id:"mageWei",x:3800,faction:-1,lvl:43},



	
		],
	],	
	task:[
		{
			win:[
				  {type:"allClear",faction:-1,text:'击杀武陵先锋军',textNum:true,},
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
				  {type:"killUnit",faction:-1,text:'击杀武陵太守金旋',id:'JinXuan',},
			],
			lose:[
			],
			func:function(){
                Macro.setGameEdge(0,3800);
            },
			update:function(){
				MapConfig.func2();
			},
            finishFunc:function(){
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