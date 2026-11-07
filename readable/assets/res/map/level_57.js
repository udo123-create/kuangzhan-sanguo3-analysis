var MapConfig={
	open1:true,
	open2:true,
	open2_2:true,
	open2_3:true,
	open3:true,
	func1:function(){
		if(MapConfig.open1 && Macro.unit(1)){
			MapConfig.open1=false;
			
	        Macro.camFollow(g_sharedFightLayer.myhero);
			Macro.setUnitSpawn(false);
			Macro.allUnitAction(function(unit){
		         unit.stand(true);
			});
	        var dialog = {
	            skip:true,
		        timeToNext : 1,
				text : [
				        {
				          0:"赵云：上次让你逃脱，今日休想故技重施",
				        },
				        {
				          0:"金旋：别，别以为我会怕了你。。。我有四大金刚护法",
				          1:"         给我上！",
				        },
				       ]
			}
			var func = function(){
				Macro.setUnitSpawn(true);
				Macro.unit(1).moveTo(3400,true);
				Macro.doLater(1,function(){
					Macro.unit(1).fadeOut();
				});
			    Macro.allUnitAction(function(unit){
		           unit.setAI(true);
			    });
			}
			Dialog.create(6,dialog,func);
	    }
	},
	func2:function(){
		if(MapConfig.open2 && g_sharedFightLayer.myhero){
			MapConfig.open2=false;
			
			Macro.camMoveTo(cc.p(650,"current"),1,1);
			Macro.doLater(1.1,function(){
				Macro.setUnitSpawn(false);
			});
			Macro.allUnitAction(function(unit){
				if(unit!=Macro.unit(2)){
		         unit.stand(true);
		        }
			});
	        
	        var dialog = {
	            skip:true,
		        timeToNext : 2,
				text : [
				        {
				          0:"金旋：哼，打你个措手不及",
				        },
				       ]
			}
			var func = function(){
				Macro.setUnitSpawn(true);
				Macro.camFollow(g_sharedFightLayer.myhero,60);
			    Macro.allUnitAction(function(unit){
			    	if(unit!=Macro.unit(3)){
		                unit.setAI(true);
		            }
			    });
			}
			Dialog.create(3,dialog,func);
	    }
		if(MapConfig.open2_2 && Macro.unit(2) && Macro.unit(2).hp<=1){
			MapConfig.open2_2=false;
			Macro.camFollow(Macro.unit(2));
			Macro.setUnitSpawn(false);
			Macro.allUnitAction(function(unit){
		         unit.stand(true);
			});
	        Macro.unit(2).movementSpeed=8;
//	        Macro.unit(1).setFaction(1);
	        Macro.doLater(2,function(){
	            Macro.unit(2).moveTo(3000,true);
	        });
	        var dialog = {
	            skip:true,
		        timeToNext : 1,
				text : [
				        {
				          0:"金旋(打不过啊，不宜久战)",
				        },
				       ]
			}
			var func = function(){
				
			}
			Dialog.create(11,dialog,func);
	    }
		if(MapConfig.open2_2==false && MapConfig.open2_3 && Macro.unit(2).pos.x>=3000){
			MapConfig.open2_3=false;
			
			Macro.allUnitAction(function(unit){
		        unit.stand(true);
				if(unit!=g_sharedFightLayer.myhero && unit!=Macro.unit(2) && unit!=Macro.unit(3)){
		            unit.fadeOut();
		        }
			});
			Macro.unit(2).removeStatus("unDead");
			Macro.doLater(5,function(){
			    Macro.unit(3).setAI(true);
			});
			
	        var dialog = {
	            skip:true,
		        timeToNext : 1,
				text : [
				        {
				          0:"金旋：赵云果然厉害，暂且收兵回城",
				          1:"        守卫开城门！",
				        },
				        {
				          0:"巩志：金旋，你不顺天时，自取灭亡",
				          1:"      今日，我与百姓自愿归顺皇叔",
				        },
				       ]
			}
			var func = function(){
				Macro.doLater(2,function(){
				Macro.camFollow(g_sharedFightLayer.myhero);
				g_sharedTaskManager.nextTask();
			});
			}
			Dialog.create(7,dialog,func);
		}
	},
		
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:150000*(1+0.5*(gDifficulty-1)),},
            {time:0,id:"Gate",x:3600,faction:-1,hp:850000*(1+0.5*(gDifficulty-1)),drop:{gold:{num:2,ct:5}},},
		
			{time:0,id:"JinXuan",x:2400,faction:-1,unitType:"boss",tag:1,hp:260000*Math.pow(1.5,(gDifficulty-1)),attack:7500*Math.pow(1.5,(gDifficulty-1)),},
			{time:0,id:"specialFatMan",x:2100,faction:-1,lvl:41},
			{time:0,id:"specialFatMan",x:2150,faction:-1,lvl:41},
			{time:0,id:"specialFatMan",x:2600,faction:-1,lvl:41},
			{time:0,id:"specialFatMan",x:2700,faction:-1,lvl:41},

			{time:5,id:"shieldmanWei",x:3000,faction:-1,lvl:41},
			{time:6,id:"pikemanWei",x:3000,faction:-1,lvl:41},
			{time:7,id:"bowmanWei",x:3000,faction:-1,lvl:41},
			{time:8,id:"mageWei",x:3000,faction:-1,lvl:41},

			{time:10,id:"shieldmanWei",x:3500,faction:-1,lvl:41},
			{time:12,id:"pikemanWei",x:3500,faction:-1,lvl:41},
			{time:18,id:"bowmanWei",x:3500,faction:-1,lvl:41},
			{time:20,id:"bowmanWei",x:3500,faction:-1,lvl:41},

			{time:25,id:"shieldmanWei",x:3800,faction:-1,lvl:41},
			{time:26,id:"shieldmanWei",x:3800,faction:-1,lvl:41},
			{time:30,id:"mageWei",x:3800,faction:-1,lvl:41},
			{time:32,id:"mageWei",x:3800,faction:-1,lvl:41},
	
			{time:36,id:"bowmanWei",x:3800,faction:-1,lvl:41},
			{time:37,id:"bowmanWei",x:3800,faction:-1,lvl:41},

			{time:40,id:"shieldmanWei",x:3800,faction:-1,lvl:41},
			{time:41,id:"shieldmanWei",x:3800,faction:-1,lvl:41},
			{time:43,id:"bowmanWei",x:3800,faction:-1,lvl:41},
			{time:45,id:"bowmanWei",x:3800,faction:-1,lvl:41,drop:{heal:{percent:0.1,ct:2}},},

		    {time:51,id:"shieldmanWei",x:3800,faction:-1,lvl:2},
			{time:52,id:"shieldmanWei",x:3800,faction:-1,lvl:2},
			{time:52,id:"mageWei",x:3800,faction:-1,lvl:2},
		],
		[
			{time:1,id:"JinXuan",x:650,faction:-1,unitType:"boss",hp:260000*Math.pow(1.5,(gDifficulty-1)),attack:7500*Math.pow(1.5,(gDifficulty-1)),status:{unDead:1},hide:{pos:650,range:5000,func:null},tag:2},
			{time:0,id:"GongZhi",x:3500,faction:1,direction:-1,movementSpeed:5,lvl:1,status:{unDead:1},func:function(unit){unit.stand(3)},tag:3},
		],
	],	
	task:[
		{
			win:[
				  {type:"allClear",faction:-1,text:'击杀武陵军',textNum:true,},
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
				  {type:"killUnit",faction:-1,text:'追击金旋',id:'JinXuan',},
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
		g_sharedFightLayer.myhero.pos.x=2000;
	},
	config:{
		disable:{
		},
	}
};