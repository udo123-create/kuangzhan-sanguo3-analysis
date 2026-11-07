var MapConfig={
	open:true,
	func_1:function(){
		if(MapConfig.open&&Macro.unit(1)){
			MapConfig.open=false;
			Macro.setUnitSpawn(false);
			Macro.camMoveTo(cc.p(3300,"current"),1,1);
			Macro.allUnitAction(function(unit){
	                      	unit.stand(true);
	                  	});
              		var dialog = {
				timeToNext : 3,
				text : [
			        		{
			        		0:"颜良文丑：是何人在帐外嚣张？",
			        		},
			        		{
			        		0:"赵云：......想不到大名鼎鼎的颜良、文丑竟是一个人？",
			        		},
			        		{
			        		0:"颜良文丑：谁说我们是一个人！",
			        		},
			        	]
		          } 
		 	var func = function(){
				Macro.doLater(0.5,function(){
					g_sharedFightLayer.myhero && Macro.camMoveTo(cc.p(g_sharedFightLayer.myhero.pos.x,"current"),1,1);
					g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero);
					Macro.setUnitSpawn(true);
					g_sharedFightLayer.myhero && g_sharedFightLayer.myhero.stand(false);
	     				Macro.allUnitAction(function(unit){
                     				unit.setAI(true);
                  				});
				})
			}
			Dialog.create(10.5,dialog,func);
			Macro.doLater(7.5,function(){
				Macro.unit(1).moveTo(3300);
				Macro.doLater(1.5,function(){
					Macro.unit(1).stand(true);
				});
			})
		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:27000*(1+0.5*(gDifficulty-1)),},
			{time:0,id:"Gate",x:3600,faction:-1,hp:142225*(1+0.5*(gDifficulty-1)),drop:{gold:{num:95,ct:5}},},
			
			{time:0,id:"Block",x:2400,hp:21699,faction:-1,deadOnNextStage:1,},
				
            		{time:0,id:"pikemanQun",x:1000,faction:-1,direction:-1,lvl:18,},
			{time:1,id:"shieldmanQun",x:1500,faction:-1,direction:-1,lvl:18,},
			{time:1,id:"bowmanQun",x:1700,faction:-1,direction:-1,lvl:18,},
			{time:1,id:"bowmanQun",x:2000,faction:-1,direction:-1,lvl:18,},
			{time:4,id:"pikemanQun",x:3500,faction:-1,direction:-1,lvl:18,},
			{time:5,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:18,},					
			{time:4,id:"bowmanQun",x:3800,faction:-1,direction:-1,lvl:18,},
			{time:6,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:18,},
			{time:8,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:18,},
			{time:9,id:"bowmanQun",x:3800,faction:-1,direction:-1,lvl:18,},
//			{time:11,id:"pikemanQun",x:3100,faction:-1,direction:-1,lvl:18,},
			{time:13,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:18,},
			{time:14,id:"fatManQun",x:3800,faction:-1,direction:-1,lvl:18,},

	        		{time:15,id:"shieldmanQun",x:3800,faction:-1,direction:-1,lvl:18,},
			{time:20,id:"shieldmanQun",x:3800,faction:-1,direction:-1,lvl:18,},
//			{time:24,id:"pikemanQun",x:1500,faction:-1,direction:-1,lvl:18,},
			{time:25,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:18,},					
			{time:30,id:"mageQun",x:3800,faction:-1,direction:-1,lvl:15,},
			{time:32,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:18,},
			{time:35,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:18,},
			{time:38,id:"bowmanQun",x:3800,faction:-1,direction:-1,lvl:18,},
			
			{time:45,id:"bowmanQun",x:3800,faction:-1,direction:-1,lvl:18,},
			{time:47,id:"fatManQun",x:3800,faction:-1,direction:-1,lvl:18,},
			{time:52,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:18,},
			{time:55,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:18,},					
			{time:58,id:"bowmanQun",x:3800,faction:-1,direction:-1,lvl:18,},
			{time:65,id:"shieldmanQun",x:3800,faction:-1,direction:-1,lvl:18,},
			{time:70,id:"bowmanQun",x:3800,faction:-1,direction:-1,lvl:18,},
			{time:74,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:18,},
			{time:79,id:"bowmanQun",x:3800,faction:-1,direction:-1,lvl:18,},
			{time:80,id:"pikemanQun",x:3800,faction:-1,direction:-1,lvl:18,drop:{heal:{percent:0.1,ct:4}},},
		],
		[		
			{time:2,id:"YanLiang",unitType:"boss",x:3500,y:160,faction:-1,tag:1,},
			{time:2,id:"WenChou",unitType:"boss",x:3500,y:160,faction:-1,tag:2,
				spell:{ability:{id:"Claw",posX:-160,posY:25,time:5,level:10,range:4000,},cooldown:20,
		                 		config:{castTime:1,
            	          anim:{movementID:"attack8",speed:0.3,loop:false,start:0,},
            	          anim2:{movementID:"attack8",speed:0.6,loop:false,start:12,stun:true},
					},
					ai:function(unit){
						if(unit.pos.x-g_sharedFightLayer.myhero.pos.x<=550){
							cc.log("赵云进入死亡之握范围");
							return true;
						}
					},
	        			},	
			},
				
			{time:3,id:"pikemanQun",x:3800,faction:-1,lvl:16},
			{time:9,id:"bowmanQun",x:3800,faction:-1,lvl:16},
			{time:9,id:"pikemanQun",x:3900,faction:-1,lvl:16},		

			{time:15,id:"pikemanQun",x:3800,faction:-1,lvl:16,},
			{time:16,id:"pikemanQun",x:3800,faction:-1,lvl:16,},
			{time:19,id:"pikemanQun",x:3900,faction:-1,lvl:16},	

			{time:27,id:"shieldmanQun",x:3800,faction:-1,lvl:16,},
			{time:28,id:"pikemanQun",x:3800,faction:-1,lvl:16,},
			{time:31,id:"bowmanQun",x:3900,faction:-1,lvl:16},	

			{time:32,id:"shieldmanQun",x:3800,faction:-1,lvl:16},
			{time:39,id:"bowmanQun",x:3800,faction:-1,lvl:16},
			{time:45,id:"bowmanQun",x:3800,faction:-1,lvl:16},
			{time:50,id:"bowmanQun",x:3900,faction:-1,lvl:16},
		],
	],		
//		[
//			{id:"demo",x:1200,time:1,faction:-1,group:{num:1,rand:{x:100,y:30},interval:2}},
//			{time:0,id:"demo",faction:-1,x:3800,hp:100,damage:100},
//			{time:0,id:"general",faction:-1,x:4000,hp:300,damage:100},	
//			{id:"zhaoyun",x:800,time:5,faction:-1},		
//		],
	
	task:[
		
		{
			win:[
				{type:"allClear",faction:-1,text:'为我军开路',textNum:true},
			],
			lose:[
//				{type:"unitPosition",faction:-1,posX:3600,text:"别让小兵逃回城门"},
				/* {if(g_sharedFightLayer.unit(1).pos.x > 3799),id:'general',} */
			],
			func:function(){
        				Macro.setGameEdge(0,2500);
			},
		},
       		{
			taskTextShowLatency:10,
			win:[
					{type:"killUnit",faction:-1,text:'击败颜良文丑',id:'YanLiang',},
					{type:"killUnit",faction:-1,text:'击败颜良文丑',id:'WenChou',noText:true},
				],
			lose:[],
			finishFunc:function(){
				Macro.flee();
			},
			func:function(){
				Macro.setGameEdge(0,3800);
			},	
	            	update:function(){			
				MapConfig.func_1();
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
		drop:{rage:{chance:1,num:1},gold:{chance:0.5,num:280,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:1113,gold:0,gem:0},
	}
};