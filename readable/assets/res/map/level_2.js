var MapConfig={
	open:true,
	open_1:true,
	open_1_1:true,
	open1_2:true,
	func_1:function(){
		if(MapConfig.open_1_1 && Macro.unit(1) && g_sharedFightLayer.myhero && g_sharedFightLayer.myhero.pos&&Macro.unit(1).pos.x-g_sharedFightLayer.myhero.pos.x<=350 && Macro.unit(1).isCasting()){
			MapConfig.open_1_1=false;
			Macro.doLater(0.5,function(){
//				Macro.showMessage("敌将要放大招了，小心！")
				Macro.guideButton("left","forceGuide","双击后退躲避BOSS重击",false,'doubleClick',300,160);
			})
		}
		if(MapConfig.open1_2 && Macro.unit(1) && Macro.unit(1).hp<=1 && g_sharedFightLayer.myhero){
			MapConfig.open1_2=false;
			Macro.allUnitAction(function(unit){
		         unit.stand(true);
			});
			Macro.setUnitSpawn(false);
	        var dialog = {
	        	skip:true,
		        timeToNext : 1.8,
				text : [
				        {
				          0:"公孙瓒：壮士骁勇无敌，何不从军，建立一方功业？ ",
				        },
				        {
				          0:"赵云：子龙本欲从军，闻将军贤明，愿追随效力",
				        },
				        {
				          0:"公孙瓒：如此甚好，明日校场点兵，吾将任命你为别部司马，掌管骑兵。",
				        },
				       ]
			}
			var func = function(){
				g_sharedTaskManager.nextTask();
			}
			Dialog.create(9,dialog,func);
		}
	},
//	machine:[
//        [
//        {time:2,id:"StoneMachine",x:1200, y:100,damage:50,bossDamage:10,faction:1,tag:21},//抛石机,damage是对普通小兵的伤害,bossDamage是对boss的伤害
//        {time:6,id:"ZhuGeArrow",x:600, y:150,damage:300,bossDamage:10,faction:1,tag:22}//诸葛连弩
//        ],
//        [{time:0,id:"ZhuGeArrow",x:1800, y:150,damage:300,bossDamage:10,faction:1,tag:23}]
//    ],
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:5000*(1+0.5*(gDifficulty-1)),tag:998},
            {time:0,id:"Gate",x:3600,faction:-1,hp:2000*(1+0.5*(gDifficulty-1)),drop:{gold:{num:1,ct:5}},},

			{time:0,id:"pikemanQun",x:1800,faction:-1,lvl:1,hp:200,},
			{time:1,id:"pikemanQun",x:2200,faction:-1,lvl:1,hp:200,},
			{time:2,id:"shieldmanQun",x:2500,faction:-1,lvl:1,hp:200,},

			{time:4,id:"pikemanQun",x:3500,faction:-1,lvl:1,hp:200,},
			{time:5,id:"pikemanQun",x:3500,faction:-1,lvl:1,hp:200,},
			{time:7,id:"pikemanQun",x:3500,faction:-1,lvl:1,hp:200,},
			{time:8,id:"pikemanQun",x:3500,faction:-1,lvl:1,hp:200,},

			{time:9,id:"pikemanQun",x:3800,faction:-1,lvl:1},
			{time:10,id:"pikemanQun",x:3800,faction:-1,lvl:1,hp:200,},
			{time:11,id:"shieldmanQun",x:3800,faction:-1,lvl:1,hp:200,},	

			{time:15,id:"pikemanQun",x:3800,faction:-1,lvl:1},
			{time:18,id:"pikemanQun",x:3800,faction:-1,lvl:1,hp:200,},
			{time:22,id:"pikemanQun",x:3800,faction:-1,lvl:1,hp:200,drop:{heal:{percent:0.1,ct:3}},},		
		],
		[
			{time:0,id:"shieldmanQun",x:3600,faction:-1,lvl:1,},
			{time:11,id:"pikemanQun",x:3600,faction:-1,lvl:2,},
			{time:16,id:"pikemanQun",x:3600,faction:-1,lvl:2,},	
			{time:20,id:"pikemanQun",x:3600,faction:-1,lvl:2,},
			{time:25,id:"pikemanQun",x:3600,faction:-1,lvl:2,drop:{heal:{percent:0.1,ct:2}},},
			
			{time:20,id:"DengMao",x:4800,faction:-1,unitType:"boss",tag:1,drop:{gold:{num:2,ct:3}},status:{unDead:1}},
            	
    		{time:35,id:"pikemanQun",x:3600,faction:-1,lvl:2,},
    		{time:39,id:"pikemanQun",x:3600,faction:-1,lvl:2,},
			{time:43,id:"pikemanQun",x:3600,faction:-1,lvl:2,},	
		],
	],	
	task:[
		
		{
			win:[
				{type:"allClear",faction:-1,text:'击退北平守军',textNum:true,},
		
			],
			lose:[
			],
			finishFunc:function(){
				Macro.flee();
			},
			func:function(){
//			//		Macro.unit(10).setOpacity(100);
//					Macro.unit(10).setColor(cc.c3b(0,0,0))
			}
		},
       		{
			win:[
				{type:"killUnit",faction:-1,id:"DengMao",text:'挑战“白马将军”公孙瓒',},
		
			],
			lose:[
			],
			finishFunc:function(){
				Macro.flee();
			},
			update:function(){
				MapConfig.func_1();
//				if(MapConfig.open&&Macro.unit(1)&&g_sharedFightLayer.myhero&&Macro.unit(1).pos.x-g_sharedFightLayer.myhero.pos.x<400){
//					MapConfig.open=false;
//					Macro.showMessage('靠近敌将进行攻击');
//				}
			}
		},
	],
	init:function(){
		g_sharedFightLayer.registerEdge(3500,-1)
//		cc.msgbox(1)
//		g_sharedFightLayer.myhero.pos.x = 500;
//		g_sharedFightLayer.setCam(cc.p(2000,null));
//		g_sharedFightLayer.camMoveBy(cc.p(-500,null),0,5);
	},
	config:{
		disable:{
//			myhero:true,ability:true,
		},
		drop:{rage:{chance:1,num:1},gold:{chance:0.5,num:14,type:"total"},},
		recommendItem:{type:"ability",content:{id:"SSYJ"},text:"升级你的技能吧",forceGuide:true},
		gameEdge:{left:0,right:3800},
		reward:{exp:151,gold:0,gem:0},
	}
};