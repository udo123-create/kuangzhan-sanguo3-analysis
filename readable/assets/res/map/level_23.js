var MapConfig={
	open:true,
	func_1:function(){
		   if(MapConfig.open&&Macro.unit(1)){
			MapConfig.open=false;
			Macro.allUnitAction(function(unit){
				unit.setAI(false);
				unit.stand(true);
			});
			g_sharedFightLayer.createUnit({time:0,id:"LvBu",name:"吕布",tag:2,x:500,faction:1,func:function(unit){unit.stand(1);},});
			Macro.unit(2).playAnim({movementID:"attack15",loop:false,time:5,start:1,stun:true,});//呼吸
			Macro.camMoveTo(cc.p(3200,"current"),1,1);
			g_sharedFightLayer.myhero && g_sharedFightLayer.myhero.stand();
			var dialog = {
				        	timeToNext : 3.3,
				         	text : [
				         	{
				        		0:"袁术：徐州已是我的囊中之物！大耳贼，今日就是你的死期。",
				        		},
				        		{
				        		0:"吕布：且慢！你们两家看在我面上，各自罢兵如何？",
				        		},
				        		{
				        		0:"袁术：我出兵十万，专捉刘备！怎能罢兵？！",
				        		},
				        		{
				        		0:"吕布：我若射中城门的画戟，那便是天意，你们两家就罢兵和解！",
				        		},
				        	]
			}
		        var func = function(){
//						Macro.camFollow(g_sharedFightLayer.myhero,60);
				Macro.doLater(0.2,function(){
					Macro.unit(2).playAnim({movementID:"attack15",speed:0.8,loop:false,stun:true,time:2.5,stunTimeOnFinish:5});//射戟
				});
				Macro.doLater(2.5,function(){
					var powerArrow=new Ability["PowerArrow"](Macro.unit(2),{id:"PowerArrow",targetPos:{x:3450,y:480},damage:0,speed:27,});
					g_sharedFightLayer.addChild(powerArrow);
					Macro.camMoveTo(cc.p(3300,"current"),1,1.7);
				});
          			Macro.doLater(7,function(){
					g_sharedTaskManager.nextTask();
				});
		        }
			Dialog.create(17,dialog,func);
			Macro.doLater(3.5,function(){
				Macro.camMoveTo(cc.p(500,"current"),1,1);
			});
	             }
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:23000*(1+0.5*(gDifficulty-1)),},
			{time:0,id:"Gate",x:3600,faction:-1,hp:122630*(1+0.5*(gDifficulty-1)),drop:{gold:{num:66,ct:5}},},
        			{time:0,id:"pikemanQun",x:1520,faction:-1,lvl:17,hide:{pos:1520,range:500,func:null},},
			{time:0,id:"pikemanQun",x:1510,y:150,faction:-1,lvl:17,hide:{pos:1510,range:500,func:null},},
			{time:0,id:"pikemanQun",x:1550,y:145,faction:-1,lvl:17,hide:{pos:1550,range:500,func:null},},
			{time:0,id:"pikemanQun",x:1590,faction:-1,lvl:17,hide:{pos:1590,range:500,func:null},},
						
			{time:0,id:"bowmanQun",x:1820,faction:-1,lvl:17,hide:{pos:1820,range:500,func:null},},
			{time:0,id:"bowmanQun",x:1810,y:150,faction:-1,lvl:17,hide:{pos:1810,range:500,func:null},},
			{time:0,id:"bowmanQun",x:1850,y:145,faction:-1,lvl:17,hide:{pos:1850,range:500,func:null},},
//			{time:0,id:"bowmanQun",x:1890,faction:-1,lvl:17,hide:{pos:1890,range:500,func:null},},
		
			{time:1,id:"pikemanQun",x:3800,faction:-1,lvl:17,},
			{time:2,id:"pikemanQun",x:3800,y:170,faction:-1,lvl:17,},
			{time:3,id:"pikemanQun",x:3800,y:190,faction:-1,lvl:17,},
		
			{time:15,id:"pikemanQun",x:3800,faction:-1,lvl:17,},
			{time:16,id:"pikemanQun",x:3800,y:170,faction:-1,lvl:17,},
			{time:17,id:"pikemanQun",x:3800,y:190,faction:-1,lvl:17,},
				
			{time:27,id:"bowmanQun",x:3800,faction:-1,lvl:17,},
			{time:28,id:"bowmanQun",x:3800,faction:-1,lvl:17,},
			{time:29,id:"bowmanQun",x:3800,faction:-1,lvl:17,},
				
			{time:35,id:"bowmanQun",x:3800,faction:-1,lvl:17,},
			{time:36,id:"bowmanQun",x:3800,faction:-1,lvl:17,},
			{time:37,id:"bowmanQun",x:3800,faction:-1,lvl:17,drop:{heal:{percent:0.1,ct:4}}},
		],
		[			
			{time:2,id:"shieldmanQun",x:3800,faction:-1,lvl:17,},
			{time:2,id:"pikemanQun",x:3800,faction:-1,lvl:17,},
//			{time:3,id:"pikemanQun",x:3500,faction:-1,lvl:5,},
			{time:5,id:"bowmanQun",x:3800,faction:-1,lvl:17,},
			{time:7,id:"pikemanQun",x:3800,faction:-1,lvl:17,},
			{time:8,id:"shieldmanQun",x:3800,faction:-1,lvl:17,},
//			{time:10,id:"pikemanQun",x:3600,faction:-1,lvl:5,},
			{time:10,id:"pikemanQun",x:3800,faction:-1,lvl:17,},
			{time:12,id:"bowmanQun",x:3800,faction:-1,lvl:17,},
			{time:14,id:"pikemanQun",x:3800,faction:-1,lvl:17,},
			{time:18,id:"fatManQun",x:3800,faction:-1,lvl:17,},
			{time:18,id:"mageQun",x:3800,faction:-1,lvl:17,},
			{time:19,id:"bowmanQun",x:3800,faction:-1,lvl:17,},
//			{time:25,id:"pikemanQun",x:3600,faction:-1,lvl:5,},
			{time:26,id:"shieldmanQun",x:3600,faction:-1,lvl:17,},
			{time:32,id:"pikemanQun",x:3800,faction:-1,lvl:17,},
			
//			{time:32,id:"ChengYuanzhi",x:3800,faction:-1,lvl:4,unitType:"boss",},
            	
			{time:34,id:"pikemanQun",x:3800,faction:-1,lvl:17,},			
			{time:37,id:"bowmanQun",x:3800,faction:-1,lvl:17,},
			
			{time:42,id:"pikemanQun",x:3800,faction:-1,lvl:17,},
			{time:44,id:"bowmanQun",x:3800,faction:-1,lvl:17,},
			{time:47,id:"pikemanQun",x:3800,faction:-1,lvl:17,},
					
			{time:50,id:"bowmanQun",x:3800,faction:-1,lvl:17,},
          		{time:52,id:"bowmanQun",x:3800,faction:-1,lvl:17,},
          		{time:55,id:"bowmanQun",x:3800,faction:-1,lvl:17,},
//    			{time:57,id:"pikemanQun",x:3800,faction:-1,lvl:17,},
//    			{time:58,id:"bowmanQun",x:3800,faction:-1,lvl:17,},
//    			{time:59,id:"bowmanQun",x:3800,faction:-1,lvl:17,},
    			{time:63,id:"bowmanQun",x:3800,faction:-1,lvl:17,},
    			{time:65,id:"pikemanQun",x:3800,faction:-1,lvl:17,},
          		{time:64,id:"bowmanQun",x:3800,faction:-1,lvl:17,},
    			{time:67,id:"bowmanQun",x:3800,faction:-1,lvl:17,},
		],	
		[
			{time:3,id:"YuanShu",x:3600,faction:-1,tag:1,}
		],	
	],	
	task:[		
		{
			win:[
				{type:"killUnit",faction:-1,text:'击杀袁术先锋弓弩兵',id:'bowmanQun',require:9,textNum:true,},
			],
			lose:[
//				{type:"killUnit",faction:1,posX:100,id:'MsGan',noText:true,},
			],
			func:function(){
			},
            		update:function(){
//				MapConfig.func_1();
			},
			finishFunc:function(){
				Macro.flee();
			},
		},
       	{
			win:[
				{type:"allClear",faction:-1,text:'歼灭袁术援兵',textNum:true,},
			],
			lose:[
//				{type:"killUnit",faction:1,posX:100,id:'GongsunZan',noText:true,},
			],
			func:function(){
//				Macro.unit(1).setAI(false);
//				Macro.unit(1).moveTo(400);
			},
            		update:function(){
//				MapConfig.func_2();
			},
	},
	{
		win:[
			{type:"killUnit",faction:-1,text:'击杀张辽',id:'DiaoChan',noText:true,}
		],
		lose:[
//				{type:"killUnit",faction:1,posX:100,id:'GongsunZan',noText:true,},
		],
            	update:function(){
			MapConfig.func_1();
		},
	},
	
	],
	init:function(){
		g_sharedFightLayer.registerEdge(3500,-1)
	},
	config:{
		disable:{
//			myhero:true,ability:true,
//			unit:true,
		},
		drop:{rage:{chance:1,num:1},gold:{chance:0.5,num:240,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:925,gold:0,gem:0},
	}
};