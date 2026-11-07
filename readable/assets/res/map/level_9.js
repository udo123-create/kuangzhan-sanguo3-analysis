
var MapConfig={
	open:true,
	open1:true,
	open_1:true,
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:10000*(1+0.5*(gDifficulty-1)),tag:998},
			{time:0,id:"Gate",x:3600,faction:-1,hp:36005*(1+0.5*(gDifficulty-1)),drop:{gold:{num:4,ct:5}},}, 
			{time:0,id:"pikemanQun",x:1200,faction:-1,lvl:5,},
			{time:0,id:"shieldmanQun",x:1400,faction:-1,lvl:5,},
			{time:0,id:"pikemanQun",x:1500,faction:-1,lvl:5,},
			{time:0,id:"pikemanQun",x:1800,faction:-1,lvl:5,},
			{time:1,id:"pikemanQun",x:2550,y:150,faction:-1,lvl:5,},
			{time:2,id:"pikemanQun",x:3520,y:145,faction:-1,lvl:5,},
			{time:3,id:"pikemanQun",x:3500,faction:-1,lvl:5,},
			{time:10,id:"pikemanQun",x:3500,y:150,faction:-1,lvl:5,},
			{time:10,id:"bowmanQun",x:3600,faction:-1,lvl:5,},
			{time:15,id:"pikemanQun",x:3500,faction:-1,lvl:5,},
		
			{time:15,id:"shieldmanQun",x:3800,faction:-1,lvl:5,drop:{heal:{percent:0.1,ct:1}},},
				
			{time:20,id:"bowmanQun",x:3800,y:150,faction:-1,lvl:5,},
			{time:23,id:"shieldmanQun",x:3800,y:140,faction:-1,lvl:5,},
			{time:26,id:"pikemanQun",x:3800,faction:-1,lvl:5,},
			{time:28,id:"pikemanQun",x:3800,faction:-1,lvl:5,},
		],
		[
			{time:0,id:"YuanShao",tag:2,x:3400,y:150,faction:-1,lvl:5,func:function(unit){unit.stand(1);},},

			{time:1,id:"pikemanQun",x:3190,y:150,faction:-1,lvl:5},
			{time:1,id:"pikemanQun",x:3200,faction:-1,lvl:5},
			{time:0,id:"bowmanQun",x:3200,faction:-1,lvl:5,tag:3,},
			{time:0,id:"bowmanQun",x:3300,faction:-1,lvl:5,},
			{time:0,id:"bowmanQun",x:3650,faction:-1,lvl:5,},
			{time:1,id:"pikemanQun",x:3800,faction:-1,lvl:5},
			{time:0,id:"bowmanQun",x:3400,faction:-1,lvl:5,},
			{time:0,id:"bowmanQun",x:3500,faction:-1,lvl:5,},			
			{time:0,id:"bowmanQun",x:3600,faction:-1,lvl:5,},
			{time:0,id:"bowmanQun",x:3700,faction:-1,lvl:5,},
			{time:10,id:"bowmanQun",x:3800,faction:-1,lvl:5,},

			{time:13,id:"pikemanQun",x:3800,faction:-1,lvl:5},
			{time:14,id:"pikemanQun",x:3800,faction:-1,lvl:5},
			{time:15,id:"bowmanQun",x:3800,faction:-1,lvl:5,},			
			{time:16,id:"bowmanQun",x:3800,faction:-1,lvl:5,},
			{time:16,id:"bowmanQun",x:3800,faction:-1,lvl:5,},
			{time:17,id:"bowmanQun",x:3800,faction:-1,lvl:5,},
			{time:18,id:"bowmanQun",x:3800,faction:-1,lvl:5,},
			{time:19,id:"bowmanQun",x:3800,faction:-1,lvl:5,drop:{heal:{percent:0.1,ct:3}},},

			{time:20,id:"pikemanQun",x:3800,faction:-1,lvl:5},
			{time:21,id:"pikemanQun",x:3800,faction:-1,lvl:5},
			{time:24,id:"bowmanQun",x:3800,faction:-1,lvl:5,},			
			{time:25,id:"bowmanQun",x:3800,faction:-1,lvl:5,},
			{time:26,id:"bowmanQun",x:3800,faction:-1,lvl:5,},			
			{time:28,id:"bowmanQun",x:3800,faction:-1,lvl:5,},
		],
		[
			{time:0,id:"shieldmanQun",x:3600,faction:-1,lvl:5,},
			{time:0,id:"bowmanQun",x:3800,faction:-1,lvl:5,},
			{time:1,id:"bowmanQun",x:3800,faction:-1,lvl:5,},
			{time:2,id:"bowmanQun",x:3800,faction:-1,lvl:5,},
			{time:2,id:"bowmanQun",x:3800,faction:-1,lvl:5,},	
			{time:2,id:"shieldmanQun",x:3600,faction:-1,lvl:5,},
			{time:2,id:"bowmanQun",x:3800,faction:-1,lvl:5,},
			{time:4,id:"bowmanQun",x:3600,faction:-1,lvl:5,},
			{time:5,id:"shieldmanQun",x:3600,faction:-1,lvl:5,},
			{time:5,id:"bowmanQun",x:3600,faction:-1,lvl:5,},		
			{time:6,id:"bowmanQun",x:3600,faction:-1,lvl:5,},
				
			{time:3,id:"YuanShao",x:3800,y:150,faction:-1,unitType:"boss",
				hp:9000*Math.pow(1.5,(gDifficulty-1)),attack:400*Math.pow(1.5,(gDifficulty-1)),},
         ],
		],		
	
	task:[
		{
			taskFinishLatency:6,
			win:[
				{type:"allClear",faction:-1,text:'击杀袁绍先锋军',textNum:true,},
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
				{type:"allClear",faction:-1,text:'破敌弓兵群',textNum:true,},
			],
		lose:[],		
		update:function(){											
			if(MapConfig.open && Macro.unit(3)){
		        MapConfig.open=false;
		        Macro.camMoveTo(cc.p(3300,"current"),1,1);
				Macro.allUnitAction(function(unit){
					unit.stand(true);
	            });
				Macro.setUnitSpawn(false);
				g_sharedFightLayer.myhero && g_sharedFightLayer.myhero.stand();
            	Macro.allUnitAction(function(unit){
				    if(unit.faction==-1 && unit!=Macro.unit(2)){
			            Macro.doLater(3.0,function(){
					          unit.playAnim({movementID:"attack",time:1});
			            })
			        }
			    });
				Macro.doLater(5,function(){
					Macro.unit(2).moveTo(3800,true);
					Macro.doLater(1,function(){
					    Macro.unit(2).fadeOut();
					});
			    });
	            var dialog = {
					skip:true,
				    timeToNext : 1,
				    text : [
				        	{
				        	  0:"袁绍：听我号令！",
				        	  1:"      弓箭手，准备放箭！",	
				        	},
					]									
				}
				var func = function(){
					Macro.doLater(8,function(){
					    Macro.showMessage('进退有度躲避弓箭',3);
					    Macro.doLater(3,function(){
					        Macro.showMessage('善用技能和狂斩',4);
					    });
					});
				    g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero);
					Macro.allUnitAction(function(unit){
	                    unit.setAI(true);
					    Macro.setUnitSpawn(true);
	                });
				}
				Dialog.create(5,dialog,func);
			}           					
		},
		},	
        {
    		win:[
    		    {type:"allClear",faction:-1,text:'全歼袁绍余军'},
    		],
        },
	],
	init:function(){
		g_sharedFightLayer.registerEdge(3700,-1)
	},
	config:{
		disable:{
//			myhero:true,ability:true,
		},
		drop:{rage:{chance:0.5,num:1.2},gold:{chance:0.5,num:42,type:"total"},},
		recommendItem:{type:"soldier",content:{id:"shieldmanQun"},text:"携带盾兵出战吧！",forceGuide:false},
		gameEdge:{left:0,right:3800},
		reward:{exp:244,gold:0,gem:0},
	}
};