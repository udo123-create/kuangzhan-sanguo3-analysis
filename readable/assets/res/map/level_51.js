var MapConfig={
	open0:true,
	open0_1:true,
	open1:true,
	open2:true,
	open2_1:true,
	open2_2:true,
	open3:true,
	func0:function(){
		if(MapConfig.open0 && g_sharedFightLayer.myhero){
			MapConfig.open0=false;
			g_sharedFightLayer.myhero.setDisable("ability",true);
			g_sharedFightLayer.myhero.setDisable("attack",true);
			Macro.doLater(5,function(){
               Macro.showMessage('训练士兵，赵云禁用攻击和技能',5);
               Macro.guideArrow(true,"right",3000);
			});
		}
		if(MapConfig.open0_1 && g_sharedFightLayer.myhero && g_sharedFightLayer.myhero.pos.x>=3000){
			MapConfig.open0_1=false;
			g_sharedTaskManager.nextTask();
			Macro.guideArrow(false);
		}
	},
	func1:function(){
		if(MapConfig.open1 && g_sharedFightLayer.myhero){
			MapConfig.open1=false;
			Macro.doLater(5,function(){
               Macro.showMessage('训练士兵，赵云禁用攻击和技能',5);
			});
		}
	},
	func2:function(){
		if(MapConfig.open2_2 && g_sharedFightLayer.myhero){
			MapConfig.open2_2=false;
			Macro.doLater(5,function(){
               Macro.showMessage('训练士兵，赵云禁用攻击和技能',5);
			});
		}
		if(MapConfig.open2_1 && Macro.unit(1)){
			MapConfig.open2_1=false;
			Macro.unit(1).hp=150000*(1+0.5*(gDifficulty-1));
		}
		if(MapConfig.open2 && Macro.unit(1).hp<=0){
			MapConfig.open2=false;
			g_sharedTaskManager.nextTask();
		}
	},
	func3:function(){
		if(MapConfig.open3 && Macro.unit(2)){
			MapConfig.open3=false;
			Macro.allUnitAction(function(unit){
		         unit.stand(true);
			});
			Macro.setUnitSpawn(false);
			Macro.camMoveTo(cc.p(3400,"current"),1,1);
	        var dialog = {
	        	skip:true,
		        timeToNext : 1,
				text : [
				        {
				          0:" ",
				        },
				        {
				          0:"张飞：啊哈哈，子龙，你们一起上吧！",
				        },
				       ]
			}
			var func = function(){
				Macro.doLater(3,function(){
                   Macro.showMessage('全军作战，赵云恢复攻击',3);
			    });
			    Macro.allUnitAction(function(unit){
		            unit.setAI(true);
			    });
			    Macro.setUnitSpawn(true);
			    g_sharedFightLayer.myhero.setDisable("ability",false);
			    g_sharedFightLayer.myhero.setDisable("attack",false);
			    Macro.camFollow(g_sharedFightLayer.myhero);
			}
			Dialog.create(4,dialog,func);
		}
	},
    environment:[
        [
        {time:0,id:'trap',x:800,faction:-1,attack:20000,interval:1},
        {time:0,id:'trap',x:835,faction:-1,attack:20000,interval:1},
        {time:0,id:'trap',x:870,faction:-1,attack:20000,interval:1},
        {time:0,id:'trap',x:905,faction:-1,attack:20000,interval:1},

        {time:0,id:'trap',x:1150+40,faction:-1,attack:20000,interval:1},
        {time:0,id:'trap',x:1185+40,faction:-1,attack:20000,interval:1},
        {time:0,id:'trap',x:1220+40,faction:-1,attack:20000,interval:1},
        {time:0,id:'trap',x:1255+40,faction:-1,attack:20000,interval:1},

        {time:0,id:'trap',x:1500+80,faction:-1,attack:20000,interval:1},
        {time:0,id:'trap',x:1535+80,faction:-1,attack:20000,interval:1},
        {time:0,id:'trap',x:1570+80,faction:-1,attack:20000,interval:1},
        {time:0,id:'trap',x:1605+80,faction:-1,attack:20000,interval:1},

        {time:0,id:'trap',x:1850+120,faction:-1,attack:20000,interval:1},
        {time:0,id:'trap',x:1885+120,faction:-1,attack:20000,interval:1},
        {time:0,id:'trap',x:1920+120,faction:-1,attack:20000,interval:1},
        {time:0,id:'trap',x:1955+120,faction:-1,attack:20000,interval:1},

        {time:0,id:'trap',x:2200+120,faction:-1,attack:20000,interval:1},
        {time:0,id:'trap',x:2235+120,faction:-1,attack:20000,interval:1},
        {time:0,id:'trap',x:2270+120,faction:-1,attack:20000,interval:1},
        {time:0,id:'trap',x:2305+120,faction:-1,attack:20000,interval:1},

        {time:0,id:'trap',x:2550+160,faction:-1,attack:20000,interval:1},
        {time:0,id:'trap',x:2585+160,faction:-1,attack:20000,interval:1},
        {time:0,id:'trap',x:2620+160,faction:-1,attack:20000,interval:1},
        {time:0,id:'trap',x:2655+160,faction:-1,attack:20000,interval:1},
        ],
    ],

		
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:30000*(1+0.5*(gDifficulty-1)),tag:998},
            {time:0,id:"Gate",x:3600,faction:-1,hp:15000000000000000000000,drop:{gold:{num:2,ct:5}},tag:1,},
		],
		[
//			{time:0,id:"bowManShu_lv20",x:200,faction:1,lvl:40,},
//			{time:0,id:"bowManShu_lv20",x:230,faction:1,lvl:40,},
//			{time:0,id:"fatManShu_lv20",x:300,faction:1,lvl:40,},
//			{time:0,id:"fatManShu_lv20",x:300,faction:1,lvl:40,},
	
	
			{time:0,id:"shieldmanWei",x:3500,faction:-1,lvl:30,},
			{time:1,id:"shieldmanWei",x:3500,faction:-1,lvl:30,},
			{time:2,id:"pikemanWei",x:3500,faction:-1,lvl:35,},
			{time:5,id:"mageWei",x:3500,faction:-1,lvl:30,},
				
        	{time:15,id:"fatMan",faction:-1,lvl:30,drop:{heal:{percent:0.1,ct:1}},},
			{time:16,id:"bowmanWei",faction:-1,lvl:30,},
			{time:17,id:"bowmanWei",faction:-1,lvl:30,},
			{time:18,id:"mageWei",faction:-1,lvl:30,},
				
			{time:28,id:"fatMan",faction:-1,lvl:30,},
			{time:31,id:"bowmanWei",faction:-1,lvl:30,},
			{time:35,id:"bowmanWei",faction:-1,lvl:30,},
			{time:38,id:"bowmanWei",faction:-1,lvl:30,},
				
			{time:45,id:"specialShieldMan",faction:-1,lvl:30,drop:{heal:{percent:0.1,ct:2}},},
			{time:46,id:"shieldmanWei",faction:-1,lvl:30,},
			{time:47,id:"pikemanWei",faction:-1,lvl:30,},
			{time:48,id:"pikemanWei",faction:-1,lvl:30,},
				
			{time:55,id:"fatMan",faction:-1,hp:250000*(1+0.5*(gDifficulty-1)),attack:1000*(1+2*(gDifficulty-1)),},
			{time:57,id:"fatMan",faction:-1,hp:250000*(1+0.5*(gDifficulty-1)),attack:1000*(1+2*(gDifficulty-1)),},
			{time:66,id:"bowmanWei",faction:-1,hp:8000*(1+0.5*(gDifficulty-1)),attack:2000*(1+2*(gDifficulty-1)),},
			{time:71,id:"bowmanWei",faction:-1,hp:8000*(1+0.5*(gDifficulty-1)),attack:2000*(1+2*(gDifficulty-1)),},

		],
		[
//			{time:0,id:"bowManShu_lv20",x:100,faction:1,hp:2000*(1+0.5*(gDifficulty-1)),attack:1200*(1+0.5*(gDifficulty-1)),},
//			{time:0,id:"bowManShu_lv20",x:130,faction:1,hp:2000*(1+0.5*(gDifficulty-1)),attack:1200*(1+0.5*(gDifficulty-1)),},
//			{time:0,id:"mageShu_lv20",x:300,faction:1,hp:3000*(1+0.5*(gDifficulty-1)),attack:2000*(1+0.5*(gDifficulty-1)),},
//			{time:0,id:"healerShu_lv20",x:1500,faction:1,hp:3000*(1+0.5*(gDifficulty-1)),attack:2000*(1+0.5*(gDifficulty-1)),},
			
			{time:0,id:"fatMan",faction:-1,lvl:40,},
			{time:1,id:"fatMan",faction:-1,lvl:40,},
			{time:2,id:"shieldmanWei",faction:-1,lvl:40,},
			{time:3,id:"shieldmanWei",faction:-1,lvl:40,drop:{heal:{percent:0.1,ct:2}},},
			
			{time:8,id:"shieldmanWei",faction:-1,hp:20000*(1+0.5*(gDifficulty-1)),attack:600*(1+(gDifficulty-1)),},
			{time:8,id:"fatMan",faction:-1,hp:30000*(1+0.5*(gDifficulty-1)),attack:600*(1+(gDifficulty-1)),drop:{heal:{percent:0.1,ct:2}},},
			{time:10,id:"pikemanWei",faction:-1,hp:25000*(1+0.5*(gDifficulty-1)),attack:600*(1+(gDifficulty-1)),},
			{time:10,id:"bowmanWei",faction:-1,hp:25000*(1+0.5*(gDifficulty-1)),attack:800*(1+(gDifficulty-1)),drop:{heal:{percent:0.1,ct:2}},},

		],
		[
			{time:0,id:"ZhangFei",x:3400,faction:-1,unitType:"boss",tag:2,
			hp:250000*(1+0.5*(gDifficulty-1)),attack:6500*(1+0.5*(gDifficulty-1)),
             func:function(unit){
                 unit.setInvisible(true);
                 Macro.schedule(unit,function(){
                     unit.setInvisible(false);
                    unit.castAbility({ability:{id:"Leap",anim:{movementID:"attack4",start:10,stun:true,speed:1,stand:true}}},true);
                 },1.3,1);
             },
			},
		],
	],	
	task:[
		{
			win:[
				  {type:"killUnit",faction:-1,id:'null',noText:true,},
			],
			lose:[
				  {type:"time",faction:1,require:60,text:'前去探查军情',textNum:true,},
			],
    		func:function(){
       			Macro.setGameEdge(0,3800);
    		},
			update:function(){
				MapConfig.func0();
			},
            finishFunc:function(){
			   Macro.clearAllTraps();
			},
		},
		{
			win:[
				{type:"time",faction:1,require:75,text:'防御训练,坚守75秒',textNum:true,},
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
				  {type:"killUnit",faction:-1,id:'DiaoChan',noText:true,},
			],
			lose:[
		{type:"time",require:90,text:'士兵进攻,限时破城',textNum:true}
			],
			func:function(){
                Macro.setGameEdge(0,3800);
            },
			update:function(){
				MapConfig.func2();
			},
            finishFunc:function(){
				Macro.flee();
			},
		},
		{
			win:[
				{type:"killUnit",faction:-1,text:'全军作战,打败张飞',id:'ZhangFei',},
		
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