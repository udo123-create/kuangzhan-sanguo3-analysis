var MapConfig={
	open1:true,
	open1_2:true,
	open2:true,
	open3:true,
	open3_1:true,
	open3_2:true,
	func1:function(){
	    if(MapConfig.open1 && Macro.unit(1)){
			MapConfig.open1=false;
			
			Macro.setUnitSpawn(false);
			Macro.allUnitAction(function(unit){
		         unit.stand(true);
			});
			Macro.doLater(2,function(){
	            Macro.camFollow(Macro.unit(1),60);
			});
			Macro.doLater(4.5,function(){
	            Macro.camFollow(g_sharedFightLayer.myhero);
			});

			var dialog = {
	            skip:true,
		        timeToNext : 1,
				text : [
				        {
				          0:"赵云：韩玄老贼，速出城迎战",
				        },
				        {
				          0:"黄忠：在其位谋其事，老夫再与你一战",
				        },
				        {
				          0:"赵云：好，这次我定不手下留情",
				        },
				       ]
			}
			var func = function(){
				Macro.setUnitSpawn(true);
			    Macro.allUnitAction(function(unit){
		           unit.setAI(true);
			    });
			}
			Dialog.create(6,dialog,func);
	    }
	    if(MapConfig.open1_2 && Macro.unit(1) && Macro.unit(1).hp<=1){
			MapConfig.open1_2=false;
	    	
			Macro.setUnitSpawn(false);
			Macro.allUnitAction(function(unit){
		         unit.stand(true);
				if(unit!=g_sharedFightLayer.myhero && unit!=Macro.unit(1)){
		            unit.fadeOut();
		        }
			});
			Macro.doLater(2,function(){
	            Macro.unit(1).moveTo(3400,true);
	            Macro.unit(1).movementSpeed=5;
			});
			Macro.doLater(4,function(){
	            Macro.unit(1).fadeOut();
			});

			var dialog = {
	            skip:true,
		        timeToNext : 1,
				text : [
				        {
				          0:"黄忠：（子龙果然厉害）",
				          1:"        （唯有诈败，诱到吊桥边射之）",
				        },
				       ]
			}
			var func = function(){
				Macro.setUnitSpawn(true);
				g_sharedTaskManager.nextTask();
				Macro.setGameEdge(0,3800);
			}
			Dialog.create(5,dialog,func);
	    }
	},
	func2:function(){
	   if(MapConfig.open2 && g_sharedFightLayer.myhero && g_sharedFightLayer.myhero.pos.x>=3000){
			MapConfig.open2=false;
	   	   
			Macro.setUnitSpawn(false);
			Macro.allUnitAction(function(unit){
		         unit.stand(true);
			});
			Macro.doLater(5,function(){
	            Macro.unit(3).moveTo(3500,true);
			});

			Macro.doLater(1.5,function(){
				Macro.unit(2).setAI(true);
				Macro.doLater(1,function(){
					Macro.unit(2).stand(true);
				});
			});

			var dialog = {
//	            skip:true,
		        timeToNext : 1,
				text : [
				        {
				          0:"黄忠：看箭！",
				        },
				        {
				          0:"赵云：（这一箭差点要了我的性命，果真有百步穿杨之能）",
				          1:"     （只是为何只射我盔缨）",
				        },
				        {
				          0:"黄忠（子龙昨日手下留情，我又岂忍射他）",
				        },
				        {
				          0:"韩玄：大胆黄忠，你两度出战无功，互不想杀，必有二心",
				          1:"        若不斩汝，必为后患！",
				        },
				       ]
			}
			var func = function(){
				Macro.setUnitSpawn(true);
			    Macro.allUnitAction(function(unit){
		           unit.setAI(true);
			    });
			    Macro.unit(2).moveTo(400,true);
			    g_sharedTaskManager.nextTask();
			}
			Dialog.create(11,dialog,func);
	   }
	},
	func3:function(){
	   if(MapConfig.open3 && g_sharedFightLayer.myhero){
			MapConfig.open3=false;
	   	   
	        Macro.unit(2).moveTo(400);
	        Macro.unit(2).setFaction(1);
	        Macro.unit(2).removeStatus("unDead");
	        Macro.unit(2).hp=120000*Math.pow(1.5,(gDifficulty-1));//此处根据实际数值填写
	        Macro.unit(2).movementSpeed=0.5;
	   }
	   if(MapConfig.open3_1 && Macro.unit(2) && Macro.unit(2).pos.x<=1000){
			MapConfig.open3_1=false;
	   	   
			Macro.setUnitSpawn(false);
			Macro.allUnitAction(function(unit){
			    if(unit!=g_sharedFightLayer.myhero && unit!=Macro.unit(2) && unit!=Macro.unit(3)&& unit!=Macro.unit(4)){
		            unit.fadeOut();
		        }
            });
	        g_sharedFightLayer.createUnit(
	    {time:0,id:"WeiYan",x:3500,faction:1,direction:-1,tag:4,movementSpeed:8,attack:111111111}
	        );
			Macro.allUnitAction(function(unit){
		         unit.stand(true);
			});
			Macro.unit(4).moveTo(Macro.unit(2).pos.x);
			Macro.camFollow(Macro.unit(4),60);
			var dialog = {
	            skip:true,
		        timeToNext : 2.5,
				text : [
				        {
				          0:" ",
				        },
				        {
				          0:"魏延：韩玄老贼，残暴不仁，轻贤慢士,当众共殛之",
				        },
				        {
				          0:"士兵：我等当追随刘皇叔",
				        },
				       ]
			}
			var func = function(){
			}
			Dialog.create(10,dialog,func);
	   }
	   if(MapConfig.open3_2 && Macro.unit(3).hp<=0){
	   	   MapConfig.open3_2=false;
	   	   Macro.allUnitAction(function(unit){
		         unit.stand(true);
		   });
		   g_sharedTaskManager.nextTask();
	   }
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:150000*(1+0.5*(gDifficulty-1)),tag:998},
            {time:0,id:"Gate",x:3600,faction:-1,hp:850000*(1+0.5*(gDifficulty-1)),drop:{gold:{num:2,ct:5}},},
		    {time:0,id:"HuangZhong60",x:3400,faction:-1,unitType:"boss",status:{unDead:1},tag:1,
	        hp:300000*Math.pow(1.5,(gDifficulty-1)),attack:8200*Math.pow(1.5,(gDifficulty-1)),
	         ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,},},
			

		],
		[
		    {time:0,id:"HuangZhong60_1",x:3400,faction:-1,status:{unDead:1},
		    hp:90000*Math.pow(1.5,(gDifficulty-1)),attack:1000*Math.pow(1.5,(gDifficulty-1)),func:function(unit){unit.stand(true)},tag:2},
		    {time:1,id:"HanXuan",x:3800,faction:-1,unitType:"boss",func:function(unit){unit.stand(true)},tag:3},
			{time:3,id:"shieldmanWei",x:2800,faction:-1,lvl:44,},
			{time:6,id:"bowmanWei",x:2800,faction:-1,lvl:44},
			{time:9,id:"mageWei",x:2800,faction:-1,lvl:44},
			
			{time:15,id:"shieldmanWei",x:2800,faction:-1,lvl:44,},
			{time:17,id:"bowmanWei",x:2800,faction:-1,lvl:44},
			{time:19,id:"bowmanWei",x:2800,faction:-1,lvl:44},
			{time:21,id:"pikemanWei",x:3800,faction:-1,lvl:44},
							
			{time:15,id:"shieldmanWei",x:2800,faction:-1,lvl:44,},
			{time:17,id:"bowmanWei",x:2800,faction:-1,lvl:44},
			{time:19,id:"bowmanWei",x:2800,faction:-1,lvl:44},
			{time:21,id:"pikemanWei",x:3800,faction:-1,lvl:44},
				
			{time:28,id:"shieldmanWei",x:2800,faction:-1,lvl:44,},
			{time:30,id:"bowmanWei",x:2800,faction:-1,lvl:44},
			{time:32,id:"bowmanWei",x:2800,faction:-1,lvl:44},
			{time:34,id:"pikemanWei",x:3800,faction:-1,lvl:44},
		],
		
	],	
	task:[
		{
			taskTextShowLatency:7,
			win:[
				  {type:"killUnit",faction:-1,text:'击败黄忠',id:'null',},
			],
			lose:[
			],
    		func:function(){
			    Macro.doLater(6,function(){
       		 	    Macro.setGameEdge(0,3000);
			    });
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
				  {type:"killUnit",faction:-1,text:'追击黄忠',id:'null',},
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
		{
			win:[
				  {type:"unitPosition",faction:1,posX:400,text:"保护黄忠",id:"HuangZhong60_1",},
			],
			lose:[
				    {type:"killUnit",faction:1,id:'HuangZhong60_1',noText:true},
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