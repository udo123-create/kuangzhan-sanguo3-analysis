//faction:敌我阵营
//direction:行走方面，不写有默认值
var MapConfig={
	open:true,//一个开关
	unit :[
		[
			{time:0,id:"huangJinPikeMan",x:600,faction:-1,hp:100,attack:50,hide:{pos:500,range:1000,func:null}},
			{time:33,id:"huangJinPikeMan",x:3800,faction:-1,lvl:17,drop:{gold:{num:300,ct:2},rage:{num:1}},},  //rage怒气回复时间增幅

			{time:0,id:"bowMan",x:900,faction:-1,lvl:1},
			{time:0,id:"shieldMan",x:1200,faction:-1,lvl:1},
			{time:2,id:"fatMan",x:1500,faction:-1,lvl:1},
//			{id:"zhaoyun",x:800,time:5,faction:-1},		
		],
			[				
			{time:0,id:"huangJinPikeMan",x:3800,faction:-1,hp:12000,attack:10,            spell:{ability:{id:"powerStrike"},
                    cooldown:13,
                    config:{type:"channel",castTime:3,channelInterval:0.5,},
                    },},
			],
			{time:0,id:"pikemanShu",x:1200,faction:-1,attack:1,hp:100000,movementSpeed:1,attack:150,
		        ai:{
						follow:{
								getTarget:function(){
									return Macro.unit(1);              // 跟随标记为1的单位
								}
						},
						seekEnemyToAttack:1,
		        },
			},
		[
//			{id:"demo",x:1200,time:1,faction:-1,group:{num:1,rand:{x:100,y:30},interval:2}},
//			{time:0,id:"demo",faction:-1,x:3800,hp:100,damage:100},
//			{time:0,id:"general",faction:-1,x:4000,hp:300,damage:100},	
//			{id:"zhaoyun",x:800,time:5,faction:-1},		
		],
	],	
	task:[
		
		{
	        taskTextShowLatency:5,  //任务条出现延迟，默认是2秒，填写的时候覆盖2秒（不是相加）
            taskFinishLatency:5,//任务条完成出现延迟，默认是2秒，填写的时候覆盖2秒（不是相加）
			win:[
				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门",id:'general2'},//某人到达某坐标，目标达成
				{type:"siege",faction:-1,text:'攻城'},//攻破敌城，目标达成
				{type:"allClear",faction:-1,text:'营救公孙瓒',},//杀光该阶段所有敌人，目标达成
				{type:"killUnit",faction:-1,text:'斩杀张宝',id:'general2'},//杀敌指定士兵单位，目标达成
				{type:"time",require:100,text:""}//限时任务
			],
			lose:[
//				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
			],
            func:function(){  //进入该阶段的同时，执行这个函数，只执行一次
                Marcro.setGameEdge(0,1000);
            }
/*
			update:function(){   //进入该阶段之后，每0.016秒执行一次这个函数
	            if(MapConfig.open){   //如果开关是开的，那么if条件满足，进入一次if下面要执行的内容
	            	MapConfig.open    //一进来就把开关关掉，不然每0.016秒就进来一次
	            	g_sharedTaskManager.nextTask();//手动完成当前任务，用来做特殊任务
	            	var dialog = {    //定义一段对话，但是不会在屏幕显示出来，只是定义
				        	timeToNext : 1,
				         	text : [
				        		{
				        		0:"公孙将军，我来助你一臂之力！",
				        			},
				        	]
				        }
				    var func = function(){    //定义一个函数，对话完毕之后，执行这个函数
							Macro.camFollow(g_sharedFightLayer.myhero)  //示例函数，这个函数是把镜头定位到英雄
				        }
					Dialog.create(2,dialog,func); //通过上面定义的对话和函数，执行对话，执行之后就会显示在屏幕上，显示完之后执行对话里的函数

					Macro.allUnitAction(function(unit){  //这一段代码，是让所有士兵保持现在状态，不会打人。如果本来是移动就移动，本来是站着就站着
	                        unit.setAI(true);               unit代表的是所有的人，可以用作判断例如：if(unit!=g_sharedFightLayer.myhero)如果这个人不是赵云，那么……
	                   });


	            }
        	},
            -------------------------------------------------
            update:function(){  //下面这段代码。赵云和标记为1的兵，距离200像素的时候，弹出对话
		           if(g_sharedFightLayer.myhero && Macro.unit(1) && Math.abs(g_sharedFightLayer.myhero.pos.x-Macro.unit(1).pos.x)<200 && MapConfig.open){
		           	   MapConfig.open=false;
	                   var dialog = {
				        	timeToNext : 1,
				         	text : [
				        		{
				        		0:"公孙将军，我来助你一臂之力！",
				        			},
				        	]
				        }
				        var func = function(){
				        }
						Dialog.create(2,dialog,func);
	             	}
			},	
            --------------------------------------所有的动作指令，只对已经出生的士兵有效
            Macro.unit(1).stand(true);  标记为1的士兵单位，站住待机，不会攻击
            Macro.unit(1).stand(false);	取消站立，可以行动
            Macro.g_sharedFightLayer.myhero.stand(true);赵云站住
            Macro.allUnitAction(function(unit){
							if(unit!=g_sharedFightLayer.myhero){  //出赵云外，所有人站住
								unit.setAI(false);
							}
							
								unit.setAI(false);没有判断条件的话，所有人站住
	        });	
            	
            Macro.setUnitSpawn(false);停止出新兵
            Macro.setUnitSpawn(true);继续出新兵
            	
            	
            	
            	
            	
            	
            	
            	
            	
*/
            
		},
       	{
			win:[
				{type:"killUnit",faction:-1,text:'斩杀邓茂',id:'huangJinPikeMan'},
		
			],
			lose:[
//				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
			],

		},
	
	],
	init:function(){   //进入关卡的时候执行一次下面的函数
//		cc.msgbox(1)
//		g_sharedFightLayer.myhero.pos.x = 500;
//		g_sharedFightLayer.setCam(cc.p(2000,null));
//		g_sharedFightLayer.camMoveBy(cc.p(-500,null),0,5);
	},
	config:{
		disable:{
//			myhero:true,ability:true,
		},
        gameEdge:{left:0,right:1000},
	}
};