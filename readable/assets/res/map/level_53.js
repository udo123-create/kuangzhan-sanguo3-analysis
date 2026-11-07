var MapConfig={
	open1:true,
	open1_2:true,
	open1_3:true,
	open1_4:true,
	open2:true,
	open3:true,
	func1:function(){
		if(MapConfig.open1 && Macro.unit(1)){
			MapConfig.open1=false;
			
			Macro.camFollow(g_sharedFightLayer.myhero)
			Macro.allUnitAction(function(unit){
		         unit.stand(true);
			});
			Macro.doLater(3.0,function(){
		        Macro.unit(1).moveTo(3400);
		        g_sharedFightLayer.myhero.moveTo(2800);
		        Macro.unit(1).movementSpeed=g_sharedFightLayer.myhero.movementSpeed;
			});
			
	        var dialog = {
		        timeToNext : 1.5,
				text : [
				        {
				          0:"赵云：邢道荣，刘贤就在前方大营，速速带路。",
				        },
				        {
				          0:"邢道荣：将军请随我来。",
				        },
				       ]
			}
			var func = function(){
			}
			Dialog.create(8,dialog,func);
		}
		if(MapConfig.open1_2 && g_sharedFightLayer.myhero.pos.x>=2800){
			MapConfig.open1_2=false;
			g_sharedFightLayer.myhero.stand(true);
			Macro.unit(2).moveTo(3200);
		    Macro.unit(2).movementSpeed=g_sharedFightLayer.myhero.movementSpeed;
		}
		if(MapConfig.open1_3 && Macro.unit(1) && Macro.unit(1).pos.x>=3400){
			MapConfig.open1_3=false;
			Macro.unit(1).direction=-1;
			Macro.unit(1).stand(true);
		}
		if(MapConfig.open1_4 && Macro.unit(2) && Macro.unit(2).pos.x<=3200){
			MapConfig.open1_4=false;
			Macro.unit(2).stand(true);
	        var dialog = {
	            skip:true,
		        timeToNext : 1,
				text : [
				        {
				          0:"刘贤：哈哈哈，我与邢将军早定下诈降之计，尔等伏诛吧！",
				        },
				        {
				          0:"赵云：好你个邢道荣，今日我定不饶你。",
				        },
				        {
				          0:"刘贤：众将士听令，抓活的！",
				        },
				       ]
			}
			var func = function(){
				Macro.unit(2).moveTo(4500);
				Macro.doLater(1,function(){
					Macro.unit(2).fadeOut();
			        Macro.allUnitAction(function(unit){
		                 unit.stand(false);
		                 unit.setAI(true);
		                 Macro.unit(1).movementSpeed=1.9;//根据武将实际速度来填写
			        });
					
				})
			}
			Dialog.create(6,dialog,func);
		}


	},
	func2:function(){
		if(MapConfig.open2 && Macro.unit(3).hp<=1){
			MapConfig.open2=false;
			
			Macro.allUnitAction(function(unit){
		         unit.stand(true);
			});
	        
	        var dialog = {
	            skip:true,
		        timeToNext : 1,
				text : [
				        {
				          0:"赵云：伏兵不过如此，刘贤，你乃荆南雅士，何出此下策？",
				        },
				        {
				          0:"刘贤：邢道荣教我如此计，实非本心也。",
				          1:"       我与零陵百姓，愿归顺刘皇叔！",
				        },
				       ]
			}
			var func = function(){
			g_sharedTaskManager.nextTask();
			}
			Dialog.create(5,dialog,func);
		}
	},
		
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:65000*(1+0.5*(gDifficulty-1)),},
            {time:0,id:"Gate",x:3600,faction:-1,hp:820000*(1+0.5*(gDifficulty-1)),drop:{gold:{num:2,ct:5}},},
		
			{time:0,id:"XingDaorong",x:2000,faction:-1,unitType:"boss",hp:220000*Math.pow(1.5,(gDifficulty-1)),attack:6500*Math.pow(1.5,(gDifficulty-1)),tag:1,},
			{time:0,id:"LiuXian",x:3500,faction:-1,lvl:1,tag:2,func:function(unit){unit.stand(1);}},
			{time:0,id:"specialShieldMan",faction:-1,lvl:41,x:3050,hide:{pos:3050,range:250,func:null},func:function(unit){unit.stand(1);}},
			{time:0,id:"bowmanWei",faction:-1,lvl:41,x:3060,hide:{pos:3060,range:260,func:null},func:function(unit){unit.stand(1);}},
			{time:0,id:"bowmanWei",faction:-1,lvl:41,x:3080,hide:{pos:3080,range:280,func:null},func:function(unit){unit.stand(1);}},	
			{time:0,id:"mageQun",faction:-1,lvl:41,x:3100,hide:{pos:3100,range:300,func:null},func:function(unit){unit.stand(1);}},

			{time:20,id:"shieldmanWei",x:3800,faction:-1,lvl:41},
			{time:21,id:"shieldmanWei",x:3800,faction:-1,lvl:41,drop:{heal:{percent:0.1,ct:2}},},
			{time:27,id:"mageWei",x:3800,faction:-1,lvl:41},
			{time:32,id:"mageWei",x:3800,faction:-1,lvl:41},

			{time:38,id:"shieldmanWei",x:3800,faction:-1,lvl:41},
			{time:40,id:"shieldmanWei",x:3800,faction:-1,lvl:41},
			{time:45,id:"bowmanWei",x:3800,faction:-1,lvl:41},
			{time:50,id:"bowmanWei",x:3800,faction:-1,lvl:41},
		
			{time:60,id:"pikemanWei",faction:-1,lvl:41},
			{time:62,id:"pikemanWei",faction:-1,lvl:41},
			{time:65,id:"bowmanWei",x:3800,faction:-1,lvl:41},
			{time:70,id:"bowmanWei",x:3800,faction:-1,lvl:41},



		],
		[
			{time:0,id:"LiuXian",faction:-1,unitType:"boss",tag:3,hp:250000*Math.pow(1.5,(gDifficulty-1)),attack:6300*Math.pow(1.5,(gDifficulty-1)),status:{unDead:1}},
			{time:0,id:"specialFatMan",faction:-1,lvl:41},
		    {time:1,id:"bowmanWei",faction:-1,lvl:41},
		    {time:3,id:"bowmanWei",faction:-1,lvl:41},
			{time:5,id:"specialShieldMan",x:3800,faction:-1,lvl:41,drop:{heal:{percent:0.1,ct:2}},},

			{time:10,id:"pikemanWei",x:2000,faction:-1,lvl:41},
			{time:12,id:"pikemanWei",x:2000,faction:-1,lvl:41},

			{time:13,id:"bowmanWei",x:3000,faction:-1,lvl:41},
			{time:15,id:"bowmanWei",x:3000,faction:-1,lvl:41},

			{time:21,id:"shieldmanWei",x:3800,faction:-1,lvl:41},
			{time:22,id:"shieldmanWei",x:3800,faction:-1,lvl:41},
			{time:23,id:"mageWei",x:3800,faction:-1,lvl:41},
			{time:25,id:"mageWei",x:3800,faction:-1,lvl:41},

			{time:33,id:"shieldmanWei",x:3800,faction:-1,lvl:41},
			{time:34,id:"shieldmanWei",x:3800,faction:-1,lvl:41},
			{time:35,id:"bowmanWei",x:3800,faction:-1,lvl:41},
			{time:36,id:"bowmanWei",x:3800,faction:-1,lvl:41},
		],
		[
		],
	],	
	task:[
		{
            taskTextShowLatency:14,
			win:[
				  {type:"allClear",faction:-1,text:'击杀零陵伏军',textNum:true,},
			],
			lose:[
			],
    		func:function(){
       			Macro.setGameEdge(0,3800);
    		},
			update:function(){
				MapConfig.func1();
			},
            finishFunc:function(){
			},
		},
		{
			win:[
				  {type:"killUnit",faction:-1,id:"LiuXian",text:'击败刘贤',},
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
		g_sharedFightLayer.myhero.pos.x=1600
	},
	config:{
		disable:{
		},
	}
};