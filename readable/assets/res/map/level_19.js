
var MapConfig={
	open:true,
	open_1:true,      
	func_1:function(){
		if(MapConfig.open&&Macro.unit(1)){
			MapConfig.open=false;
			Macro.doLater(15,function(){
				Macro.showMessage('贾诩技能将降低可视范围',7);
			});
		}
		if(MapConfig.open_1&&Macro.unit(1)&&Macro.unit(1).hp<=Macro.unit(1).maxHp*0.3){
			Macro.setUnitSpawn(false);
			MapConfig.open_1=false;
			var dialog = {
				skip:true,
			        	timeToNext : 2.5,
			         	text : [
				        		{
				        		0:"贾诩：赵将军果然名不虚传，文和甘拜下风。",
				        		1:"             董卓如今已是内忧外患，是除掉的最佳时机。",
				        		},
				        		{
				        		0:"赵云：等等，此话怎讲？！",
				        		},
				        		{
				        		0:"贾诩：冲冠一怒为红颜呐...我先走一步......",
				        		},
			        		]
			} 
			var func = function(){
				Macro.setUnitSpawn(true);
				Effect.Smoke(Macro.unit(1).pos.x,Macro.unit(1).pos.y+20);
				Macro.unit(1).fadeOut();
				g_sharedTaskManager.nextTask();
				Macro.allUnitAction(function(unit){
                    			unit.setAI(true);
                			});						
			}
			Dialog.create(11,dialog,func);
//			Macro.unit(1).faction=1;
			Macro.allUnitAction(function(unit){
                			unit.stand(true);
            			});	
		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:200,faction:1,hp:17000*(1+0.5*(gDifficulty-1)),},
			{time:0,id:"Gate",x:3600,faction:-1,hp:90405*(1+0.5*(gDifficulty-1)),drop:{gold:{num:32,ct:5}},},

			{time:0,id:"pikemanQun",x:2000,faction:-1,lvl:15},
			{time:0,id:"pikemanQun",x:2300,faction:-1,lvl:15},
			{time:0,id:"fatManQun",x:2500,faction:-1,lvl:14},
			{time:0,id:"pikemanQun",x:3000,faction:-1,lvl:15},
			{time:0,id:"pikemanQun",x:3300,faction:-1,lvl:15},

			{time:5,id:"bowmanQun",x:3000,faction:-1,lvl:15},
			{time:9,id:"bowmanQun",x:3000,faction:-1,lvl:15},

			{time:18,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:15,},
			{time:19,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:15,},
			{time:20,id:"shieldmanQun",x:3800,faction:-1,direction:-1,lvl:15,},

            		{time:30,id:"JiaXu",lvl:1,x:3800,faction:-1,tag:1,unitType:"boss",drop:{gold:{num:35,ct:3},heal:{percent:0.1,ct:2}},status:{unDead:1},
            			spell:[
					{ability:{id:"Nightmare",times:5,},
				     		cooldown:15,
                					config:{castTime:1,anim:{movementID:"attack",speed:0.5,loop:false,stun:true},},
                					ai:function(unit){
							if(g_sharedFightLayer.myhero && unit.pos.x-g_sharedFightLayer.myhero.pos.x<=550){
								cc.log("赵云进入梦魇范围");
								return true;
							}
						},
                             			},
					{ability:{id:"thunderLight",damage:500,times:0.8,color:"zi"},	
	     					cooldown:3,
	     					config:{
	                     			anim:{movementID:"attack",speed:1.2,loop:false,stun:true,child:{movementID:"stand",loop:false,stun:true,}},
	                   				},
	             	 		},
	             	 	],	
            		},
			{time:30,id:"mageQun",x:3700,faction:-1,lvl:15},

			{time:40,id:"shieldmanQun",x:3800,faction:-1,lvl:15,drop:{heal:{percent:0.1,ct:3}},},
			{time:43,id:"pikemanQun",x:3800,faction:-1,lvl:15},
			{time:45,id:"shieldmanQun",x:3800,faction:-1,lvl:15},
			{time:50,id:"bowmanQun",x:3800,faction:-1,lvl:15},
			{time:55,id:"mageQun",x:3900,faction:-1,lvl:15},	
			{time:56,id:"bowmanQun",x:3900,faction:-1,lvl:15},

		],
		[

			{time:3,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:15,},
			{time:4,id:"shieldmanQun",x:3800,faction:-1,lvl:15,},
			{time:5,id:"pikemanQun",x:3800,faction:-1,lvl:15,},
			{time:6,id:"shieldmanQun",x:3800,faction:-1,lvl:15,},

			{time:10,id:"bowmanQun",x:3900,faction:-1,lvl:15},
			{time:12,id:"mageQun",x:3900,faction:-1,lvl:15,drop:{heal:{percent:0.1,ct:3}},},
			{time:13,id:"bowmanQun",x:3900,faction:-1,lvl:15},

			{time:15,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:15,},
			{time:18,id:"shieldmanQun",x:3800,faction:-1,direction:-1,lvl:15,},
			{time:20,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:15,},

			{time:23,id:"fatManQun",x:3800,faction:-1,lvl:14},
			{time:28,id:"shieldmanQun",x:3800,faction:-1,direction:-1,lvl:15,},
			{time:30,id:"bowmanQun",x:3900,faction:-1,lvl:15},

    		{time:35,id:"JiaXu",x:3800,faction:-1,tag:1,unitType:"boss",drop:{gold:{num:35,ct:3},heal:{percent:0.1,ct:2}},
				func:function(unit){unit.chat(["哈哈哈，赵将军果真攻来了！！"]);},
    			spell:[
			{ability:{id:"Nightmare",times:5,},
		     		cooldown:10,
        					config:{castTime:1,anim:{movementID:"attack",speed:0.5,loop:false,stun:true},},
        					ai:function(unit){
					if(g_sharedFightLayer.myhero && unit.pos.x-g_sharedFightLayer.myhero.pos.x<=550){
						cc.log("赵云进入梦魇范围");
						return true;
					}
				},
                     			},
			{ability:{id:"thunderLight",damage:500,times:0.8,color:"zi"},	
 					cooldown:3,
 					config:{
                 			anim:{movementID:"attack",speed:1.2,loop:false,stun:true,child:{movementID:"stand",loop:false,stun:true,}},
               				},
         	 		},
         	 	],	
    		},
			{time:37,id:"shieldmanQun",x:3800,faction:-1,direction:-1,lvl:15,},
			{time:39,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:15,},
			{time:43,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:15,},
			{time:45,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:15,},

			{time:50,id:"shieldmanQun",x:3800,faction:-1,direction:-1,lvl:15,},
			{time:52,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:15,},

			{time:58,id:"shieldmanQun",x:3800,faction:-1,direction:-1,lvl:15,},
			{time:60,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:15,},
//			{time:62,id:"mageQun",x:3800,faction:-1,direction:-1,lvl:15,},
//			{time:60,id:"fatManQun",x:3800,faction:-1,lvl:15,},   
		],
	],		

	
	task:[
		
		{
			taskFinishLatency:0,
			win:[
//				{type:"allClear",faction:-1,text:'击败贾诩',},
				{type:"killUnit",faction:-1,text:'击败贾诩',id:'ZhenJi',},
			],
			lose:[
				
			],
			finishFunc:function(){
				Macro.flee();
			},
		    func:function(){

		    },
			update:function(){
				MapConfig.func_1();
			},
        
		},
       	{
			taskTextShowLatency:0,
			win:[
					{type:"killUnit",faction:-1,text:'斩杀贾诩',id:'JiaXu',},
//					{type:"killUnit",faction:-1,text:'全歼敌军',id:"fatManQun",require:2,},
				],
			lose:[
				
				],	
			func:function(){

			}	
		},		
	],
	init:function(){
		g_sharedFightLayer.registerEdge(3500,-1)
	},
	config:{
		disable:{
//			myhero:true,ability:true,
		},
		drop:{rage:{chance:1,num:1},gold:{chance:0.5,num:150,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:641,gold:0,gem:0},
	}
};