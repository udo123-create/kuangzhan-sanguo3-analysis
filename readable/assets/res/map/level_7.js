var MapConfig={
	open1:true,
	open2:true,
	open3:true,
	func1:function(){
	    if(MapConfig.open1 && g_sharedFightLayer.myhero && g_sharedFightLayer.myhero.pos.x>=1220){
	        MapConfig.open1=false;
			Macro.allUnitAction(function(unit){
		         unit.stand(true);
			});
			Macro.setUnitSpawn(false);
	        var dialog = {
	        	skip:false,
		        timeToNext : 1,
				text : [
				        {
				          0:"士兵：站住！",
				        },
				        {
				          0:"赵云：你们是何人，为何拦住我军去路",
				        },
				        {
				          0:"士兵：我乃董太师家将也，前来取你性命！",
				        },
				       ]
			}
			var func = function(){
			    Macro.allUnitAction(function(unit){
		            unit.setAI(true);
			    });
			    Macro.setUnitSpawn(true);
			}
			Dialog.create(7,dialog,func);
	    }
	},
	func2:function(){
		if(MapConfig.open2 && Macro.unit(2)){
			MapConfig.open2=false;
			Macro.unit(1).pos.x=g_sharedFightLayer.myhero.pos.x-200;
			Macro.allUnitAction(function(unit){
		         unit.stand(true);
			});
			Macro.setUnitSpawn(false);
			Macro.camMoveTo(cc.p(3400,"current"),1,1);
			Macro.doLater(4,function(){
				Macro.camFollow(g_sharedFightLayer.myhero,60);
			});
			Macro.doLater(8,function(){
				Macro.unit(1).moveTo(100,true);
				Macro.doLater(1,function(){
				    Macro.unit(1).fadeOut();
				});
			});
			Macro.doLater(10,function(){
				Macro.camFollow(Macro.unit(2));
			});
			Macro.doLater(13,function(){
			    Macro.camFollow(g_sharedFightLayer.myhero);
			});
	        var dialog = {
	        	skip:true,
		        timeToNext : 2,
				text : [
				        {
				          0:"",
				        },
				        {
				          0:"赵云：敌人人多势众，公孙兄带小队回去求援",
				          1:"      我和余下的士兵拖延断后",
				        },
				        {
				          0:"公孙瓒：好，我速去速回，你坚持住！",
				        },
				        {
				          0:"吕布：哼，今天一个都跑不掉",
				        },
				       ]
			}
			var func = function(){
			    Macro.allUnitAction(function(unit){
		            unit.setAI(true);
			    });
			    Macro.setUnitSpawn(true);
			    Macro.camFollow(g_sharedFightLayer.myhero);
			}
			Dialog.create(13,dialog,func);
		}
	},
	func3:function(){
		if(MapConfig.open3){
			MapConfig.open3=false;
			Macro.allUnitAction(function(unit){
				unit.stand(true);
			});
			Macro.camFollow(Macro.unit(2),60);
			var dialog = {
				skip:true,
				timeToNext : 3.5,
					text : [
					        	{
					        		0:"吕布：哼，拖延至此，想必援兵将至，撤！",
					        	},
				        	]
			}
			var func = function(){
				Macro.flee();
				g_sharedTaskManager.nextTask();
			}
			Dialog.create(3,dialog,func);
		}
    },
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:10000,tag:998},
           	{time:0,id:"Gate",x:3600,faction:-1,hp:39415,drop:{gold:{num:5,ct:5}},}, //城门设定

			{time:0,id:"GongsunZan",x:580,faction:1,hp:10000,movementSpeed:1.5,attack:400,tag:1,},

	        {time:0,id:"pikemanQun",x:1520,faction:-1,lvl:1,hide:{pos:1520,range:300,func:null},},
//			{time:0,id:"pikemanQun",x:1610,y:150,faction:-1,lvl:1,hide:{pos:1610,range:390,func:null}},
//			{time:0,id:"pikemanQun",x:1650,y:145,faction:-1,lvl:1,hide:{pos:1650,range:430,func:null}},
			{time:0,id:"pikemanQun",x:1700,faction:-1,lvl:1,hide:{pos:1700,range:480,func:null},},
			{time:0,id:"shieldmanQun",x:1790,faction:-1,lvl:1,hide:{pos:1790,range:570,func:null},drop:{heal:{percent:0.1,ct:1}},},
				
			{time:3,id:"pikemanQun",x:3050,y:150,faction:-1,lvl:1,hide:{pos:3800,range:5000,func:null}},
			{time:3,id:"bowmanQun",x:2900,y:145,faction:-1,lvl:1,hide:{pos:4200,range:5000,func:null},},
			{time:4,id:"pikemanQun",x:2750,faction:-1,lvl:1,hide:{pos:4300,range:5000,func:null}},
				
			{time:5,id:"shieldmanQun",x:2000,faction:-1,lvl:1,hide:{pos:1800,range:300,func:null},drop:{heal:{percent:0.1,ct:2}},},
			{time:5,id:"bowmanQun",x:2300,y:150,faction:-1,lvl:1,hide:{pos:1800,range:300,func:null},},
			{time:6,id:"bowmanQun",x:2350,y:145,faction:-1,lvl:1,hide:{pos:1800,range:300,func:null},},
		],
		[
		{time:0,id:"LvBu9",x:3400,faction:-1,attackRange:350,/*hide:{pos:3100,range:800,func:null},*/hp:400000,attack:800, movementSpeed:1.2,status:{noDismember:1},unitType:"boss",tag:2,drop:{gold:{num:8,ct:3}},           
			 spell:{
					ability:{id:"moonChopped",damage:1000,range:250,},
					cooldown:20,
             	    config:{
             	          alert:{type:"direction",width:850},
             	          castTime:1.7,
             	          anim:{movementID:"attack16",speed:0.8,loop:false,stun:true,},
             	    }
           	 },
             func:function(unit){
                 unit.setInvisible(true);
                 Macro.schedule(unit,function(){
                     unit.setInvisible(false);
                    unit.castAbility({ability:{id:"Leap",anim:{movementID:"attack18",stun:true,speed:1,stand:true}}},true);
                 },1.3,1);
             },
           },
			{time:0,id:"pikemanQun",x:3800,faction:-1,lvl:3,drop:{heal:{percent:0.1,ct:1}},},
			{time:1,id:"pikemanQun",x:3800,faction:-1,lvl:3,},
			{time:3,id:"pikemanQun",x:3800,faction:-1,lvl:3,drop:{heal:{percent:0.1,ct:1}},},
			{time:5,id:"pikemanQun",x:3800,faction:-1,lvl:3,drop:{heal:{percent:0.1,ct:1}},},
			{time:6,id:"pikemanQun",x:3800,faction:-1,lvl:3,},
			{time:9,id:"pikemanQun",x:3800,faction:-1,lvl:3,drop:{heal:{percent:0.1,ct:1}},},
			{time:12,id:"pikemanQun",x:3800,faction:-1,lvl:3,drop:{heal:{percent:0.1,ct:1}},},			
			{time:13,id:"pikemanQun",x:3800,faction:-1,lvl:3,},			
			{time:22,id:"pikemanQun",x:3800,faction:-1,lvl:3,drop:{heal:{percent:0.1,ct:1}},},
			{time:28,id:"pikemanQun",x:3800,faction:-1,lvl:3,drop:{heal:{percent:0.1,ct:1}},},				
	    		{time:32,id:"pikemanQun",x:3800,faction:-1,lvl:3,},
	    		{time:35,id:"pikemanQun",x:3800,faction:-1,lvl:3,drop:{heal:{percent:0.1,ct:1}},},
	    		{time:36,id:"pikemanQun",x:3800,faction:-1,lvl:3,},
	    		{time:42,id:"pikemanQun",x:3800,faction:-1,lvl:3,drop:{heal:{percent:0.1,ct:1}},},
	    		{time:45,id:"pikemanQun",x:3800,faction:-1,lvl:3,drop:{heal:{percent:0.1,ct:1}},},
		],
		[
		],
	],	
	task:[
		{
			taskTextShowLatency:12,
			win:[
				{type:"allClear",faction:-1,text:'击杀拦路伏军',textNum:true,},
			],
			lose:[
			],
            func:function(){
				Macro.setGameEdge(0,3800);
            },
            update:function(){
				MapConfig.func1();
			},
		},
       	{
			win:[
				  {type:"time",faction:1,require:85,text:'坚守80秒',textNum:true,},
			],
			lose:[
			],
			func:function(){
			},
			update:function(){
				MapConfig.func2();
			},
		},
		{
			win:[
				  {type:"killUnit",faction:-1,id:'null',noText:true,},
			],
			update:function(){
				MapConfig.func3();
			},
		},
	],
	init:function(){
		g_sharedFightLayer.registerEdge(3500,-1)
	},
	config:{
		disable:{
		},
		drop:{rage:{chance:0.5,num:1.2},gold:{chance:0.5,num:50,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:265,gold:0,gem:0},
	}
};