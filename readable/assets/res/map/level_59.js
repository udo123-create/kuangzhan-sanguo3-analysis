var MapConfig={
	open1:true,
	open2:true,
	open3:true,
	open3_2:true,
	open3_3:true,
	func1:function(){
	},
	func3:function(){
	    if(MapConfig.open3 && Macro.unit(1) && Macro.unit(1).pos.x<=3500){
			MapConfig.open3=false;
			
	        Macro.camFollow(Macro.unit(1),60);
			Macro.setUnitSpawn(false);
			Macro.allUnitAction(function(unit){
		         unit.stand(true);
			});
			var dialog = {
	            skip:true,
		        timeToNext : 1,
				text : [
				        {
				          0:"赵云：来将可是黄忠？",
				        },
				        {
				          0:"黄忠：既知我名，焉敢犯我境",
				        },
				       ]
			}
			var func = function(){
				Macro.setUnitSpawn(true);
			    Macro.allUnitAction(function(unit){
		           unit.setAI(true);
			    });
			    Macro.camFollow(g_sharedFightLayer.myhero,60);
			}
			Dialog.create(4,dialog,func);

	    }
		if(MapConfig.open3_2 && Macro.unit(1) && Macro.unit(1).hp<=Macro.unit(1).maxHp*0.3){
			MapConfig.open3_2=false;
			
			Macro.setUnitSpawn(false);
			Macro.camFollow(g_sharedFightLayer.myhero);
			Macro.unit(1).pos.x=2350;
			g_sharedFightLayer.myhero.pos.x=2100;
			Macro.unit(1).movementSpeed=g_sharedFightLayer.myhero.movementSpeed;
			Macro.setUnitSpawn(false);
			Macro.allUnitAction(function(unit){
		         unit.stand(true);
				if(unit!=g_sharedFightLayer.myhero && unit!=Macro.unit(1)){
		            unit.fadeOut();
		        }
			});
			Macro.doLater(5,function(){
			    Macro.unit(1).moveTo(100,true);
			    g_sharedFightLayer.myhero.moveTo(100,true);
			});
	        var dialog = {
//	            skip:true,
		        timeToNext : 1,
				text : [
				        {
				          0:"赵云(斗一百合，竟全无破绽，看我用拖刀计)",
				        },
				        {
				          0:"赵云：老将黄忠，名不虚传，云来日再战",
				        },
				        {
				          0:"黄忠：胜负未分，休走！",
				        },
				       ]
			}
			var func = function(){
			}
			Dialog.create(12,dialog,func);
	    }
		if(MapConfig.open3_2==false && MapConfig.open3_3 && g_sharedFightLayer.myhero.pos.x<=1500){
			MapConfig.open3_3=false;
		    Macro.allUnitAction(function(unit){
		           unit.stand(true);
			});
			g_sharedFightLayer.myhero.direction=1;
			g_sharedFightLayer.myhero.playAnim({movementID:"attack",loop:false,});
	        var dialog = {
	            skip:true,
		        timeToNext : 1,
				text : [
				        {
				          0:"黄忠：哼，既中你拖刀之计，要杀便杀",
				        },
				        {
				          0:"赵云：你虽年近六旬，却有万夫不当之勇",
				          1:"          我且饶你性命，择日必取长沙",
				        },
				       ]
			}
			var func = function(){
				Macro.unit(1).movementSpeed=1.9;
				g_sharedTaskManager.nextTask();
			    g_sharedFightLayer.myhero.playAnim({movementID:"stand",loop:true,});
			}
			Dialog.create(7,dialog,func);
		}
	    
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:150000*(1+0.5*(gDifficulty-1)),},
            {time:0,id:"Gate",x:3600,faction:-1,hp:850000*(1+0.5*(gDifficulty-1)),drop:{gold:{num:2,ct:5}},},
		    {time:0,id:"shieldmanWei",x:1500,faction:-1,lvl:44},
			{time:0,id:"shieldmanWei",x:1500,faction:-1,lvl:44},
			{time:0,id:"pikemanWei",x:1800,faction:-1,lvl:44},
			{time:0,id:"bowmanWei",x:1800,faction:-1,lvl:44},
		    {time:0,id:"bowmanWei",x:1800,faction:-1,lvl:44}, 
			{time:1,id:"shieldmanWei",x:3500,faction:-1,lvl:44,},
			{time:2,id:"pikemanWei",x:3500,faction:-1,lvl:44,},
			{time:5,id:"mageWei",x:3500,faction:-1,lvl:44,},
        	{time:0,id:"fatManWei",faction:-1,lvl:44,drop:{heal:{percent:0.1,ct:1}},},
			{time:5,id:"shieldmanWei",faction:-1,lvl:44,},
			{time:5,id:"bowmanWei",faction:-1,lvl:44,},
			{time:7,id:"mageWei",faction:-1,lvl:44,},
			{time:0,id:"fatManWei",faction:-1,lvl:44,},
			{time:7,id:"bowmanWei",faction:-1,lvl:44,},
			{time:8,id:"bowmanWei",faction:-1,lvl:44,},
			{time:8,id:"bowmanWei",faction:-1,lvl:44,},

		],
		[
			{time:0,id:"specialShieldMan",x:3500,faction:-1,lvl:44,},
			{time:2,id:"specialShieldMan",x:3500,faction:-1,lvl:44,},
					
		    {time:0,id:"YangLing",x:3500,faction:-1,unitType:"boss",hp:220000*Math.pow(1.5,(gDifficulty-1)),attack:6500*Math.pow(1.5,(gDifficulty-1)),},
			{time:1,id:"shieldmanWei",x:3500,faction:-1,lvl:44,},
			{time:1,id:"bowmanWei",x:3500,faction:-1,lvl:44},
			{time:1,id:"mageWei",x:3500,faction:-1,lvl:44},
				
			{time:7,id:"shieldmanWei",faction:-1,lvl:44,drop:{heal:{percent:0.2,ct:1}},},
			{time:8,id:"shieldmanWei",faction:-1,lvl:44},
			{time:10,id:"bowmanWei",faction:-1,lvl:44},
			{time:12,id:"bowmanWei",faction:-1,lvl:44},
			
			{time:17,id:"shieldmanWei",faction:-1,lvl:44},
			{time:18,id:"shieldmanWei",faction:-1,lvl:44},
			{time:20,id:"mageWei",faction:-1,lvl:44},
			{time:22,id:"mageWei",faction:-1,lvl:44},
				
			{time:20,id:"specialShieldMan",faction:-1,lvl:44},
			{time:22,id:"specialShieldMan",faction:-1,lvl:44},
			{time:24,id:"specialShieldMan",faction:-1,lvl:44},	
			{time:20,id:"pikemanWei",faction:-1,lvl:44},
			{time:22,id:"bowmanWei",faction:-1,lvl:44,drop:{heal:{percent:0.15,ct:1}},},
		],
		[
			{time:0,id:"HuangZhong",x:3400,faction:-1,unitType:"boss",tag:1,status:{unDead:1},hp:250000*Math.pow(1.5,(gDifficulty-1)),attack:7200*Math.pow(1.5,(gDifficulty-1)),},
			{time:0,id:"specialShieldMan",x:3400,faction:-1,lvl:44},
			{time:1,id:"shieldmanWei",x:3400,faction:-1,lvl:44},
			{time:1,id:"bowmanWei",x:3800,faction:-1,lvl:44},
			{time:2,id:"bowmanWei",x:3800,faction:-1,lvl:44},
				
		    {time:8,id:"fatManWei",faction:-1,lvl:44},
			{time:9,id:"shieldmanWei",faction:-1,lvl:44},
			{time:12,id:"bowmanWei",x:3800,faction:-1,lvl:44},
			{time:14,id:"mageWei",x:3800,faction:-1,lvl:44},
				
			{time:20,id:"fatManWei",faction:-1,lvl:44},
			{time:21,id:"shieldmanWei",faction:-1,lvl:44},
			{time:23,id:"bowmanWei",x:3800,faction:-1,lvl:44},
			{time:25,id:"pikemanWei",x:3800,faction:-1,lvl:44},
				
			{time:30,id:"fatManWei",faction:-1,lvl:44},
			{time:35,id:"shieldmanWei",faction:-1,lvl:44,drop:{heal:{percent:0.2,ct:1}},},
			{time:36,id:"pikemanWei",x:3800,faction:-1,lvl:44},
			{time:39,id:"mageWei",x:3800,faction:-1,lvl:44},
		],
	],	
	task:[
		{
			win:[
				  {type:"allClear",faction:-1,text:'击杀长沙先锋军',textNum:true,},
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
				  {type:"killUnit",faction:-1,text:'击杀典军校尉杨龄',id:'YangLing',},
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
				  {type:"killUnit",faction:-1,text:'击败黄忠',id:'HuangZhong',},
			],
			lose:[
			],
			func:function(){
                Macro.setGameEdge(0,3800);
            },
			update:function(){
				MapConfig.func3();
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