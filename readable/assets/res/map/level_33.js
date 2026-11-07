var MapConfig={
	open:true,
	open_1:true,
	open_2:true,
	func_1:function(){
		if(MapConfig.open&&Macro.unit(1)&&Macro.unit(1)){
			MapConfig.open=false;
			Macro.camMoveTo(cc.p(3300,"current"),1,1);
			Macro.setUnitSpawn(false);
			Macro.allUnitAction(function(unit){
		                        unit.setAI(false);
		                        unit.stand(true);
			});
			var dialog = {
				timeToNext : 2.5,
				text : [
			         	{
			        		0:"左慈：怎么有个匹夫在我的林中撒野？",
			        		},
				]
			}
			var func = function(){
				Macro.setUnitSpawn(true);
				Macro.camFollow(g_sharedTaskManager.myhero,60)
				Macro.allUnitAction(function(unit){
			                        unit.setAI(true);
				});
	        		}
	       		Dialog.create(4.5,dialog,func);
		}
	},
	func_2:function(){
		if(MapConfig.open_2&&Macro.unit(1)&&Macro.unit(1).hp<=Macro.unit(1).maxHp*0.3){
			MapConfig.open_2=false;
//			Macro.setUnitSpawn(false);
			Macro.allUnitAction(function(unit){
//		                        unit.setAI(false);
		                        unit.stand(true);
			});
			var dialog = {
				skip:true,
				timeToNext : 3,
				text : [
			         	{
			        		0:"左慈：看来你这鲁莽匹夫还是有点本事。",
			        		},
			        		{
			        		0:"赵云：我是来南阳寻找诸葛孔明的。",
			        		},
			        		{
			        		0:"左慈：哦？要请那个卧龙先生出山，那可不容易啊......",
			        		},
				]
			}
			var func = function(){
          			Macro.doLater(1,function(){
					g_sharedTaskManager.nextTask();
				});
	       		}
	        		Dialog.create(10.5,dialog,func);
		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:40000*(1+0.5*(gDifficulty-1)),},
			{time:0,id:"Gate",x:3600,faction:-1,hp:251640*(1+0.5*(gDifficulty-1)),drop:{gold:{num:150,ct:5}},},
		
			{time:0,id:"mageQun",x:1500,faction:-1,lvl:23,},
				
			{time:0,id:"mageQun",x:2850,faction:-1,lvl:23,},
			{time:1,id:"mageQun",x:2950,faction:-1,lvl:23,},
		
			{time:8,id:"mageQun",x:2800,faction:-1,lvl:23,},
			{time:9,id:"mageQun",x:2800,faction:-1,lvl:23,},
			{time:10,id:"healerQun",x:2800,faction:-1,lvl:23,drop:{heal:{percent:0.1,ct:3}},},		
		],
		[						
			{time:2,id:"mageQun",x:3800,faction:-1,lvl:23,},
			{time:2,id:"mageQun",x:3800,faction:-1,lvl:18,},
			{time:5,id:"mageQun",x:3800,faction:-1,lvl:23,},
//			{time:7,id:"mageQun",x:3800,faction:-1,lvl:18,},
//			{time:8,id:"healerQun",x:3800,faction:-1,lvl:18,},
//			{time:10,id:"mageQun",x:3800,faction:-1,lvl:23,},
			{time:12,id:"mageQun",x:3800,faction:-1,lvl:18,},
			{time:14,id:"mageQun",x:3800,faction:-1,lvl:23,},
//			{time:18,id:"mageQun",x:3800,faction:-1,lvl:23,},
			{time:19,id:"healerQun",x:3800,faction:-1,lvl:18,},
			{time:32,id:"mageQun",x:3800,faction:-1,lvl:18,},
            	
			{time:34,id:"mageQun",x:3800,faction:-1,lvl:18,},			
//			{time:37,id:"mageQun",x:3800,faction:-1,lvl:23,drop:{heal:{num:0.2,ct:1}},},
			
			{time:0,id:"ZuoCi",lvl:1,x:3550,faction:-1,tag:1,status:{unDead:1},unitType:"boss",},
			{time:37,id:"mageQun",x:3700,faction:-1,lvl:23,},

			
//			{time:42,id:"mageQun",x:3800,faction:-1,lvl:18,},
			{time:44,id:"healerQun",x:3800,faction:-1,lvl:13,},
			{time:47,id:"mageQun",x:3800,faction:-1,lvl:23,},
					
			{time:50,id:"mageQun",x:3800,faction:-1,lvl:18,drop:{heal:{percent:0.1,ct:2}},},
//          		{time:52,id:"mageQun",x:3800,faction:-1,lvl:23,},
//          		{time:55,id:"mageQun",x:3800,faction:-1,lvl:18,},
//    			{time:57,id:"mageQun",x:3800,faction:-1,lvl:23,},
    			{time:58,id:"mageQun",x:3800,faction:-1,lvl:18,},
    			{time:59,id:"mageQun",x:3800,faction:-1,lvl:23,},
 //   			{time:63,id:"mageQun",x:3800,faction:-1,lvl:18,},
    			{time:65,id:"healerQun",x:3800,faction:-1,lvl:23,},
          		{time:64,id:"mageQun",x:3800,faction:-1,lvl:18,},
 //   			{time:67,id:"mageQun",x:3800,faction:-1,lvl:18,},
		],		
	],	
	task:[		
		{
			win:[
				{type:"allClear",faction:-1,text:"寻找出口",},
			],
			lose:[
//				{type:"killUnit",faction:1,id:'XuShu',noText:true,},
			],
			func:function(){
				Macro.setGameEdge(0,2500);
			},
			finishFunc:function(){
				Macro.setGameEdge(0,3800);
			},
            		update:function(){
//				MapConfig.func_1();
			},
		},
       		{
			win:[
				{type:"killUnit",faction:-1,posX:100,id:'ZhangLiao',text:'击败"丹鼎道士"左慈',},
			],
			lose:[
//				{type:"killUnit",faction:1,posX:100,id:'GongsunZan',noText:true,},
			],
			func:function(){
			},
            		update:function(){
            			MapConfig.func_1();
				MapConfig.func_2();
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
		drop:{rage:{chance:1,num:1},gold:{chance:0.5,num:500,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:2352,gold:0,gem:0},
	}
};