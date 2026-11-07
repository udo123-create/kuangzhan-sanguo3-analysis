var MapConfig={
	open1:true,
	open2:true,
	open3:true,
	open4:true,
	open5:true,
	func1:function(){
		if(MapConfig.open1 && Macro.unit(2)){
			MapConfig.open1=false;
			g_sharedFightLayer.createUnit({time:0,id:"ZhugeLiang",x:400,faction:1,func:function(unit){unit.stand()},tag:3});
			Macro.allUnitAction(function(unit){
		         unit.stand(true);
			});
			Macro.setUnitSpawn(false);
	        var dialog = {
	        	skip:true,
		        timeToNext : 2,
				text : [
				        {
				          0:"诸葛亮：零陵军中有冲陷营，勇猛不可敌，主公特意调来投石车克敌",
				          1:"            此械只可使用一次，需用在关键处",
				        },
				       ]
			}
			var func = function(){
			    Macro.allUnitAction(function(unit){
		            unit.setAI(true);
			    });
			    Macro.setUnitSpawn(true);
			    Macro.unit(3).moveTo(50,true);
				Macro.doLater(0.5,function(){
					Macro.unit(3).fadeOut();
			    });
			}
			Dialog.create(5,dialog,func);
		}
		
	},
	func2:function(){
		if(MapConfig.open2 && Macro.unit(1).hp<=1){
			MapConfig.open2=false;
			
			Macro.allUnitAction(function(unit){
		         unit.stand(true);
			});
	        
	        var dialog = {
            skip:true,
		        timeToNext : 1.5,
				text : [
				        {
				          0:"邢道荣：将军饶命，我愿助将军劝降刘贤。",
				        },
				        {
				          0:"赵云：此话当真？",
				        },
				        {
				          0:"邢道荣：将军勇猛无敌，刘贤早已内心惊惧，",
				          1:"          此时邢某若加以游说，定能成事。"	  
				        },
				        {
				          0:"赵云：暂且信你一次，快快带路。",
				        },
				       ]
		}
			var func = function(){
			g_sharedTaskManager.nextTask();
			}
			Dialog.create(10,dialog,func);
			
			Macro.doLater(0.1,function(){
			      Macro.unit(1).playAnim({movementID:"dead10"});
			})
		}
	},
//	   machine:[
//       [
//        {time:2,id:"StoneMachine",x:1200, y:100,damage:50,bossDamage:10,faction:1,tag:21},//抛石机,damage是对普通小兵的伤害,bossDamage是对boss的伤害
//        {time:6,id:"ZhuGeArrow",x:600, y:150,damage:300,bossDamage:10,faction:1,tag:22}//诸葛连弩
//        ],
//        [{time:0,id:"ZhuGeArrow",x:1800, y:150,damage:300,bossDamage:10,faction:1,tag:23}]
//   ],
	machine:[
       
        [{time:0,id:"StoneMachine",x:630, y:100,damage:1500000,bossDamage:1000,faction:1}],
    ],

	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:60000*(1+0.5*(gDifficulty-1)),},
            {time:0,id:"Gate",x:3600,faction:-1,hp:800000*(1+0.5*(gDifficulty-1)),drop:{gold:{num:2,ct:5}},tag:2,},
		   
		    {time:0,id:"shieldmanWei",x:1200,faction:-1,lvl:40},
		    {time:0,id:"shieldmanWei",x:1600,faction:-1,lvl:40},
		    {time:1,id:"bowmanWei",x:1600,faction:-1,lvl:40},
		    {time:1,id:"bowmanWei",x:1650,faction:-1,lvl:40},
			{time:2,id:"shieldmanWei",x:3800,faction:-1,lvl:40},

		    {time:3,id:"shieldmanWei",x:2000,faction:-1,lvl:40},
			{time:3,id:"shieldmanWei",x:2000,faction:-1,lvl:40},
			{time:4,id:"pikemanWei",x:2000,faction:-1,lvl:40},
			{time:5,id:"bowmanWei",x:3000,faction:-1,lvl:40},
			{time:6,id:"bowmanWei",x:3000,faction:-1,lvl:40},

			{time:10,id:"shieldmanWei",x:3800,faction:-1,lvl:40},
			{time:11,id:"shieldmanWei",x:3800,faction:-1,lvl:40},
			{time:12,id:"mageWei",x:3800,faction:-1,lvl:40},
			{time:12,id:"mageWei",x:3800,faction:-1,lvl:40},

			{time:16,id:"specialShieldMan",x:3800,faction:-1,movementSpeed:1.5,hp:120000*Math.pow(1.5,(gDifficulty-1)),attack:4000*Math.pow(1.5,(gDifficulty-1)),},
			{time:17,id:"specialShieldMan",x:3815,faction:-1,movementSpeed:1.5,hp:120000*Math.pow(1.5,(gDifficulty-1)),attack:4000*Math.pow(1.5,(gDifficulty-1)),},
			{time:18,id:"specialShieldMan",x:3830,faction:-1,movementSpeed:1.5,hp:220000*Math.pow(1.5,(gDifficulty-1)),attack:4000*Math.pow(1.5,(gDifficulty-1)),},
			{time:18,id:"specialShieldMan",x:3845,faction:-1,movementSpeed:1.5,hp:220000*Math.pow(1.5,(gDifficulty-1)),attack:4000*Math.pow(1.5,(gDifficulty-1)),},
			
			{time:16,id:"specialShieldMan",x:3860,faction:-1,movementSpeed:1.5,hp:220000*Math.pow(1.5,(gDifficulty-1)),attack:4000*Math.pow(1.5,(gDifficulty-1)),},
			{time:17,id:"specialShieldMan",x:3875,faction:-1,movementSpeed:1.5,hp:220000*Math.pow(1.5,(gDifficulty-1)),attack:4000*Math.pow(1.5,(gDifficulty-1)),},
			{time:18,id:"specialShieldMan",x:3890,faction:-1,movementSpeed:1.5,hp:220000*Math.pow(1.5,(gDifficulty-1)),attack:4000*Math.pow(1.5,(gDifficulty-1)),},
			{time:18,id:"specialShieldMan",x:3905,faction:-1,movementSpeed:1.5,hp:220000*Math.pow(1.5,(gDifficulty-1)),attack:4000*Math.pow(1.5,(gDifficulty-1)),drop:{heal:{percent:0.1,ct:2}},},

			{time:24,id:"shieldmanWei",x:3800,faction:-1,lvl:40},
			{time:25,id:"shieldmanWei",x:3800,faction:-1,lvl:40},
			{time:26,id:"pikemanWei",x:3800,faction:-1,lvl:40},
			{time:27,id:"mageWei",x:3800,faction:-1,lvl:40},
			{time:28,id:"bowmanWei",x:3800,faction:-1,lvl:40},

			{time:32,id:"specialFatMan",x:3800,faction:-1,lvl:40},
			{time:33,id:"shieldmanWei",x:3800,faction:-1,lvl:40},
			{time:34,id:"shieldmanWei",x:3800,faction:-1,lvl:40},

			{time:35,id:"pikemanWei",x:3800,faction:-1,lvl:40},
			{time:37,id:"mageWei",x:3800,faction:-1,lvl:40,drop:{heal:{percent:0.1,ct:2}},},

			{time:42,id:"specialShieldMan",x:3800,faction:-1,lvl:40},
			{time:43,id:"bowmanWei",x:3800,faction:-1,lvl:40},
			{time:44,id:"bowmanWei",x:3800,faction:-1,lvl:40},



		],
		[
			{time:0,id:"shieldmanWei",faction:-1,lvl:40,},
			{time:1,id:"shieldmanWei",faction:-1,lvl:40,},
			{time:2,id:"shieldmanWei",faction:-1,lvl:40,},
			{time:3,id:"mageWei",x:3800,faction:-1,lvl:40,drop:{heal:{percent:0.1,ct:1}},},
			
			{time:5,id:"XingDaorong",faction:-1,tag:1,unitType:"boss",hp:220000*Math.pow(1.5,(gDifficulty-1)),attack:6700*Math.pow(1.5,(gDifficulty-1)),status:{unDead:1}},
			{time:0,id:"fatManWei",faction:-1,lvl:40},
			{time:5,id:"shieldmanWei",faction:-1,lvl:40,},
			{time:10,id:"bowmanWei",x:3800,faction:-1,lvl:40},
			{time:11,id:"mageWei",x:3800,faction:-1,lvl:40,drop:{heal:{percent:0.15,ct:1}},},
			{time:13,id:"bowmanWei",x:3800,faction:-1,lvl:40},

			{time:15,id:"pikemanWei",x:3800,faction:-1,lvl:40},
			{time:20,id:"pikemanWei",x:3800,faction:-1,lvl:40},
			{time:25,id:"mageWei",x:3800,faction:-1,lvl:40},
			{time:25,id:"mageWei",x:3800,faction:-1,lvl:40,drop:{heal:{percent:0.15,ct:1}},},

			{time:30,id:"pikemanWei",x:3800,faction:-1,lvl:40},
			{time:30,id:"pikemanWei",x:3800,faction:-1,lvl:40},
		],
		[
			
		],
	],	
	task:[
		{
			win:[
				  {type:"allClear",faction:-1,text:'击破零陵守军',textNum:true,},
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
				Macro.flee();
			},
		},
		{
			win:[
				  {type:"killUnit",faction:-1,id:"XingDaorong",text:'斩杀邢道荣',},
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