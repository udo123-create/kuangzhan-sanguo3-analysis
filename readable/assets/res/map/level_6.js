var MapConfig={
	open:true,
	open_1:true,
	open_2:true,
	open_3:true,
	open_4:true,
	open_5:true,
	open_6:true,
	open_7:true,
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:9000*(1+0.5*(gDifficulty-1)),tag:998},
            {time:0,id:"Gate",x:3600,faction:-1,hp:29875*(1+0.5*(gDifficulty-1)),drop:{gold:{num:3,ct:5}},},
        	{time:0,id:"huangJinPikeMan",x:1720,faction:-1,lvl:3,hide:{pos:1700,range:450,func:null},},
			{time:0,id:"huangJinPikeMan",x:1800,y:150,faction:-1,lvl:3,hide:{pos:1700,range:450,func:null},},
			{time:0,id:"huangJinPikeMan",x:1900,y:145,faction:-1,lvl:3,hide:{pos:1700,range:450,func:null},},
			{time:0,id:"shieldMan",x:2500,faction:-1,lvl:3,hide:{pos:1800,range:450,func:null},drop:{heal:{percent:0.1,ct:2}},},
			{time:0,id:"bowMan",x:2700,y:150,faction:-1,lvl:1,hide:{pos:1800,range:450,func:null},},
			{time:0,id:"bowMan",x:2900,y:145,faction:-1,lvl:1,hide:{pos:1800,range:450,func:null},},
		
        	{time:0,id:"GongsunZan",x:3180,faction:1,hp:10000,attack:0.1,movementSpeed:0.5,tag:1,
				ai:{
					actionWhenStand:1,
					tryToMove:1,
					seekEnemyToAttack:1,
				}
			},
			{time:0,id:"huangJinPikeMan",x:3320,faction:-1,hp:500,attack:5,},
			{time:0,id:"huangJinPikeMan",x:3350,faction:-1,hp:500,attack:5,},
			{time:0,id:"huangJinPikeMan",x:3340,faction:-1,hp:500,attack:5,},
			{time:0,id:"huangJinPikeMan",x:3330,faction:-1,hp:500,attack:5,},
		],
		[		
			{time:0,id:"huangJinPikeMan",x:3700,faction:-1,lvl:4,},
			{time:2,id:"huangJinPikeMan",x:3700,faction:-1,lvl:5,},
//			{time:3,id:"huangJinPikeMan",x:3700,faction:-1,lvl:5,},
			{time:5,id:"huangJinPikeMan",x:3700,faction:-1,lvl:3,},
			{time:7,id:"huangJinPikeMan",x:3700,faction:-1,lvl:5},
			{time:8,id:"huangJinPikeMan",x:3700,faction:-1,lvl:4,},
			{time:9,id:"huangJinPikeMan",x:3850,faction:-1,lvl:3,drop:{heal:{percent:0.1,ct:2}},},

//			{time:10,id:"huangJinPikeMan",x:3700,faction:-1,lvl:5,},
			{time:10,id:"huangJinPikeMan",x:3700,faction:-1,lvl:5,},
			{time:12,id:"huangJinPikeMan",x:3700,faction:-1,lvl:3,},
			{time:14,id:"huangJinPikeMan",x:3700,faction:-1,lvl:5},
			{time:18,id:"huangJinPikeMan",x:3700,faction:-1,lvl:5,},
			{time:19,id:"huangJinPikeMan",x:3700,faction:-1,lvl:3,},
//			{time:25,id:"huangJinPikeMan",x:3700,faction:-1,lvl:5,},
			{time:26,id:"shieldMan",x:3700,faction:-1,lvl:4,},
			{time:32,id:"huangJinPikeMan",x:3700,faction:-1,lvl:4,drop:{heal:{percent:0.1,ct:2}},},
			
			{time:32,id:"ChengYuanzhi",x:3800,faction:-1,tag:10,unitType:"boss",
			hp:15000*Math.pow(1.5,(gDifficulty-1)),attack:220*Math.pow(1.5,(gDifficulty-1)),drop:{gold:{num:5,ct:3}}},
            	
			{time:34,id:"huangJinPikeMan",x:3600,faction:-1,lvl:4,},			
//			{time:37,id:"bowMan",x:3800,faction:-1,lvl:3,},
			
			{time:42,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},
			{time:44,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},
			{time:47,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},
					
			{time:50,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},
    		{time:57,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},
    		{time:58,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},
    		{time:65,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},
    		{time:67,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},
    		{time:69,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},
    		{time:70,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},
    		{time:75,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},
    		{time:76,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},
    		{time:78,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},
    		{time:80,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},

    		{time:85,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},
    		{time:86,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},
    		{time:90,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},
    		{time:91,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},
    		{time:94,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},
    		{time:95,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},
		],
		[
		],		
	],	
	task:[
		{
			win:[
				{type:"allClear",faction:-1,text:'单骑营救公孙瓒',},
			],
			lose:[
				{type:"killUnit",faction:1,id:'GongsunZan',noText:true},
			],
            func:function(){
				  Macro.doLater(3,function(){
					Macro.guideArrow(true,"right",2600);
				  })
				  Macro.setUnitBtnDisable(true);
            },
           update:function(){
				if(MapConfig.open_4&&g_sharedFightLayer.myhero && g_sharedFightLayer.myhero.pos.x>1250){
					MapConfig.open_4=false;
					Macro.showMessage("遭遇埋伏，小心！！",2)
				}
               if(MapConfig.open){
               	   MapConfig.open = false;
               	   Macro.allUnitAction(function(unit){
						if(g_sharedFightLayer.myhero && unit!=g_sharedFightLayer.myhero){
							unit.setAI(false);
						}
                   });
               }
	           if(MapConfig.open_1&&g_sharedFightLayer.myhero&& g_sharedFightLayer.myhero.pos.x>=2600){
	           	   MapConfig.open_1=false;
	               Macro.allUnitAction(function(unit){
							unit.setAI(true);
                   });
                   g_sharedFightLayer.myhero.stand();
                   var dialog = {
						skip:true,
			        	timeToNext : 2.5,
			         	text : [
			         	{
			        		0:"公孙瓒：吾一时轻敌，陷入敌人的埋伏",
			        		},
			        		{
			        		0:"赵云：子龙这就来救将军突围",
			        		},
			        	]
			        }
			        var func = function(){
					   g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero,10)
		               Macro.allUnitAction(function(unit){
								unit.setAI(true);
	                   });
			        }
					Dialog.create(5.5,dialog,func);
					Macro.camMoveTo(cc.p(3200,"current"),1,1);
             	}
			},
		},
       	{
			win:[
				{type:"unitPosition",faction:1,posX:400,text:"保护公孙瓒回城！",id:"GongsunZan",},
			],
			lose:[
				{type:"killUnit",faction:1,id:'GongsunZan',noText:true,},
			],
			func:function(){
				Macro.setUnitBtnDisable(false);
				Macro.guideArrow(true,"left",200);
				Macro.doLater(10,function(){
					Macro.showMessage('多出兵，可以更好抵挡敌将',7);
				})
				Macro.doLater(30,function(){
					Macro.showMessage("保护盟友,不要过久地与敌人厮杀",5)
				})
			},
			finishFunc:function(){
				Macro.flee();
			},
			update:function(){
				if(MapConfig.open_6 && Macro.unit(10) && g_sharedFightLayer.myhero &&Macro.unit(10).pos.x-g_sharedFightLayer.myhero.pos.x<=300){
					MapConfig.open_6=false;
					Macro.showMessage("速去保护公孙瓒，勿理裴元绍")
				}
				if(Macro.unit(1)&&MapConfig.open_5){
					MapConfig.open_5=false;
					Macro.unit(1).moveTo(400,true);
				}
				if(Macro.unit(1)&&MapConfig.open_7){
					MapConfig.open_7=false;
					Macro.doLater(0.5,function(){
						Macro.unit(1).moveTo(400,true);
					})
				}
				if(MapConfig.open_3 && Macro.unit(1)&&Macro.unit(1).pos.x<420){
					MapConfig.open_3=false;
					Macro.flee();
					Macro.setUnitSpawn(false);
					g_sharedFightLayer.myhero.stand(true);
					Macro.unit(1).moveTo(3100);
					Macro.doLater(0.1,function(){
						Macro.unit(1).stand(true);
					})
                   var dialog = {
						skip:true,
			        	timeToNext : 2,
			         	text : [
			         	{
			        		0:"黄巾兵长：无需再追！那厮已逃回城内！撤！",
			        		},
			         	{
			        		0:"公孙瓒：多亏子龙及时赶到，方才得以脱险。",
			        		},
			        	]
			        }
			        var func = function(){
						g_sharedTaskManager.nextTask();
			        }
					Dialog.create(6,dialog,func);
					Macro.guideArrow(false);
					Macro.doLater(3.5,function(){
						Macro.camMoveTo(cc.p(700,"current"),1,1);
					});
				}
			}
		},
	
	],
	init:function(){
		g_sharedFightLayer.registerEdge(3800,-1)
	},
	config:{
		disable:{
		},
		drop:{rage:{chance:0.5,num:1.2},gold:{chance:0.5,num:29,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:207,gold:0,gem:0},
	}
};