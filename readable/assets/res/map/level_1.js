 var MapConfig={
	open:true,
	button_r:1,
	time:1,
	open_1:true,
	open_1_1:true,
	open_2:1,
	open_2_1:true,
	open_3:true,
	open_3_1:1,
	func_1:function(){
		if(MapConfig.open&&Macro.unit(1)){
			MapConfig.open=false;
//			g_sharedFightLayer.setCam(cc.p(500,null));     //让镜头跟随tag=1的小兵
    		var dialog = {
	        		timeToNext : 1.5,
	         		text : [
	        			{
	        			0:"山贼小兵：此山是我开,此树是我栽。",
	        			},
	        			{
	        			0:"山贼喽啰：要想从此过,留下买路财!",
	        			},
	        			{
	        			0:"赵云：大胆毛贼，休得猖狂！",
	        			},
	        		]
		    };
			var func = function(){
				Macro.doLater(0.5,function(){
//				g_sharedTaskManager.nextTask();
				Macro.allUnitAction(function(unit){unit.setAI(true);});
				g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero,10);
			//		Macro.allUnitAction(function(unit){unit.setAI(true);});
				})
			}
			Dialog.create(8,dialog,func);
			Macro.doLater(6,function(){
				Macro.allUnitAction(function(unit){unit.setAI(true);});
			})
	//		Macro.doLater(9,function(){
	//			Macro.allUnitAction(function(unit){unit.stand(true);});  
	//		    	Macro.camMoveBy(cc.p(-400,null),0,1);
	//		})
		}
	},
	func_2:function(){
		MapConfig.time += 1;
		if(MapConfig.open_1_1 && MapConfig.time>=600 && g_sharedGameLayer.heroMoveStatus == "stand"){
			MapConfig.time=1;
			MapConfig.open_1_1=false;
			MapConfig.open_2=2;
			Macro.guideArrow(true,"right",700);
			MapConfig.button_r = Macro.guideButton("right",1000,"将军快前去杀敌吧！",true,true,300,160);
		}
		if(MapConfig.open_2==2 && MapConfig.open_2_1&& g_sharedFightLayer.myhero && g_sharedFightLayer.myhero.pos.x>=700){
			MapConfig.open_2=3;
			cc.log('超过了800ｍ')
            MapConfig.open_2_1 = false;
			g_sharedTaskManager.nextTask();
			MapConfig.button_r && MapConfig.button_r.release();
//			Macro.doLater(1,function(){
//				Macro.showMessage('停止移动即可自动攻击!',3,g_sharedGameLayer);
//			})
		}
		if(MapConfig.open_2_1 && g_sharedFightLayer.myhero && g_sharedFightLayer.myhero.pos.x>=710 ){
			MapConfig.open_2_1=false;
            MapConfig.open_2 = 3;
			g_sharedTaskManager.nextTask();
		}
	},
	func_3:function(){
		if(MapConfig.open_3_1==1){
			for(var i=0,len=g_sharedFightLayer.unitList.length;i<len;i++){
		//		cc.log(g_sharedFightLayer.unitList[i].pos.x)
				if(g_sharedFightLayer.myhero && g_sharedFightLayer.unitList[i].faction==-1 && g_sharedFightLayer.unitList[i].pos.x-g_sharedFightLayer.myhero.pos.x<=250){
					MapConfig.open_3_1=2
				}
			}
		}
		if(MapConfig.open_3_1==2 && MapConfig.open_3 && g_sharedGameLayer.getMenuButton("ability1") && g_sharedGameLayer.getMenuButton("ability1").cooldownData && g_sharedGameLayer.getMenuButton("ability1").cooldownData.timer<=-1 ){
			MapConfig.open_3=false;
			Macro.guideButton("ability1",20,"点击这里放技能",false,true,winSize.width-260,160);
		}
	},
	func_4:function(){
//		if(MapConfig.open_1 && Macro.unit(2)&& g_fightGameSpeed.getSpeed()==1 && g_sharedGameLayer.getMenuVisible()){
//            MapConfig.open_1 = false;
//			Macro.unit(2).chat("可恶！让我亲自出马取你性命！");
//            Macro.unit(2).castAbility(0,true);
//		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:4000*(1+0.5*(gDifficulty-1)),},
            {time:0,id:"Gate",x:3600,faction:-1,hp:17965*(1+0.5*(gDifficulty-1)),drop:{gold:{num:1,ct:5}},enchant:{chance:1,content:[{chance:0.5,id:"fire",lvl:1},{chance:0.1,id:"fire",lvl:1}]},},
//			{time:0,id:"pikemanShu",x:800,faction:1,hp:100,attack:2,moveSpeed:0.1},
//			{time:0,id:"pikemanShu",x:900,faction:1,hp:100,attack:5,moveSpeed:0.1},
//			{time:0,id:"pikemanShu",x:1500,faction:1,hp:100,attack:50,moveSpeed:0.2},
//			{time:0,id:"pikemanShu",x:1200,faction:1,hp:100,attack:50,moveSpeed:0.2},
			{time:0,id:"fatMan",x:800,faction:-1,hp:350,attack:80,movementSpeed:2.3,status:{noDismember:1},func:function(unit){unit.stand(1);},},
			{time:0,id:"huangJinPikeMan",x:950,y:170,faction:-1,hp:150,attack:80,tag:1,movementSpeed:2.3,func:function(unit){unit.stand(1);},},
		],
//		[
//            {time:0,id:"Gate",x:3600,faction:-1,hp:400000,drop:{gold:{num:1,ct:5}},enchant:{chance:1,content:[{chance:0.5,id:"fire",lvl:1},{chance:0.1,id:"fire",lvl:1}]},},
//// 			{time:0,id:"huangJinPikeMan",x:600,faction:-1,hp:50,drop:{gold:{num:300,ct:2}}},
////			{time:0,id:"huangJinPikeMan",x:900,faction:-1,hp:50,attack:50,drop:{gold:{num:300,ct:2}},},
////			{time:0,id:"huangJinPikeMan",x:1000,faction:-1,hp:100,attack:80,},
//			{time:1,id:"huangJinPikeMan",x:1400,faction:-1,hp:100,attack:80,
////				drop:{enchant:{chance:1,content:[{chance:0.5,id:"attack1",lvl:1},{chance:0.3,id:"attack_p1",lvl:1},{chance:0.2,id:"hpAdd1",lvl:1}]},},
//			},
//			{time:2,id:"huangJinPikeMan",x:1600,y:140,faction:-1,hp:100,attack:80,},
//			{time:3.5,id:"huangJinPikeMan",x:1600,faction:-1,hp:150,attack:80,},
//			{time:5,id:"huangJinPikeMan",x:1600,faction:-1,hp:150,attack:80,},
//			{time:8,id:"huangJinPikeMan",x:1600,y:150,faction:-1,hp:150,attack:80,},
//			{time:8.5,id:"huangJinPikeMan",x:1600,faction:-1,hp:100,attack:80,},
//			{time:9,id:"huangJinPikeMan",x:1610,faction:-1,hp:100,attack:80,},
//			{time:9,id:"huangJinPikeMan",x:1620,y:170,faction:-1,hp:200,attack:80,},
//			{time:9.5,id:"huangJinPikeMan",x:1620,y:165,faction:-1,hp:200,attack:80,},
//		],
            {
                edge:{right:2000},
        		unit:[
        			{time:0,id:"Block",x:1900,hp:2000,faction:-1,deadOnNextStage:1,},
        			{time:0,id:"huangJinPikeMan",x:1300,faction:-1,hp:200,attack:80,},
        			{time:0,id:"fatMan",x:1500,faction:-1,hp:200,attack:80,movementSpeed:2,},
        			{time:0,id:"huangJinPikeMan",x:2200,faction:-1,hp:200,attack:80,},
        			{time:0,id:"fatMan",x:2500,faction:-1,hp:250,attack:80,movementSpeed:2,},
        			{time:1,id:"huangJinPikeMan",x:2700,faction:-1,hp:250,attack:80,},
        			{time:3,id:"fatMan",x:2900,faction:-1,hp:100,attack:80,movementSpeed:2,},
        			{time:3,id:"huangJinPikeMan",x:3000,faction:-1,hp:100,attack:80,},
        			{time:4,id:"fatMan",x:3600,faction:-1,hp:200,attack:80,movementSpeed:2,},
        			{time:5,id:"huangJinPikeMan",x:3600,faction:-1,hp:200,attack:80,},
        			{time:6,id:"fatMan",x:3600,faction:-1,hp:200,attack:80,movementSpeed:2,},
        			{time:7,id:"huangJinPikeMan",x:3650,faction:-1,hp:250,attack:80,},
        			{time:7,id:"fatMan",x:3680,faction:-1,hp:250,attack:80,movementSpeed:2,},
        			{time:8,id:"huangJinPikeMan",x:3700,faction:-1,hp:200,attack:80,},
        			{time:9,id:"fatMan",x:3900,faction:-1,hp:150,attack:80,movementSpeed:2,},
        			{time:11,id:"huangJinPikeMan",x:3950,faction:-1,hp:200,attack:80,},
//        		{time:15,id:"huangJinPikeMan",x:4000,size:1,faction:-1,hp:550,attack:80,size:1,skin:{chest:"pikemanWu"}},
//			{time:15,id:"DuiZhang",lvl:1,x:4000,size:0.86,faction:-1,attack:60,hp:1480,unitType:"boss",},
        		],
                onFinish:function(){
                    g_sharedFightLayer.setGameEdge(0,3800);
                    Macro.setUnitSpawn(false);
                    
                    var func = function(){
                    	g_sharedFightLayer.myhero.stand(true);
                        Macro.setUnitSpawn(true);
                        var camID = Macro.camMoveTo(cc.p(3000,"current"),1,1.5);
                        var func = function(){
                            if(g_sharedGameLayer.gameEnd)
                                return;
                            Macro.camMoveTo(camID);
                            Macro.setInGameCg(false);
                            
                            Macro.ultimateGuide(true);
                        }
                		var dialog = {
            	        		timeToNext : 1.5,
            	         		text : [
            	        			{
            	        			0:"山贼大王：不交钱财，谁都别想走！",
            	        			},
            	        		]
            		    };
                        Dialog.create(6,dialog,func);
                    }
                    Macro.doLater(3,func);
                },
            },
			[		
    			{time:0,id:"pikemanShu",x:2800,faction:1,lvl:1,hp:150,attack:2,moveSpeed:0.1},
    			{time:0,id:"pikemanShu",x:3000,faction:1,lvl:1,hp:200,attack:5,moveSpeed:0.1},
    			{time:0,id:"pikemanShu",x:3180,faction:1,lvl:1,hp:200,attack:5,moveSpeed:0.2},
                
    			{time:0,id:"ZhangLiang",lvl:1,x:3300,faction:-1,unitType:"boss",tag:2,drop:{gold:{num:2,ct:3}},func:function(unit){unit.stand(true)}},		
    //			{time:2,id:"LvBu",x:3300,faction:-1,unitType:"boss",hp:1000,attack:100,tag:2,drop:{gold:{num:2,ct:3}},introduce:true},
    //			{time:3,id:"huangJinPikeMan",x:3600,faction:-1,hp:200,attack:80,},
    			{time:0,id:"fatMan",x:2900,faction:-1,hp:350,attack:80,movementSpeed:2,},
    			{time:0,id:"huangJinPikeMan",x:3200,faction:-1,lvl:1,hp:150,attack:80,},
    //			{time:13,id:"huangJinPikeMan",x:3600,faction:-1,hp:150,attack:80,},
    //			{time:20,id:"huangJinPikeMan",x:3600,faction:-1,hp:150,attack:80,},
    			{time:0,id:"fatMan",x:3000,faction:-1,hp:350,attack:80,movementSpeed:2,},
    			{time:0,id:"huangJinPikeMan",x:3100,faction:-1,lvl:1,hp:150,attack:80,},
    			{time:0,id:"fatMan",x:3200,faction:-1,hp:350,attack:80,movementSpeed:2,},
    			{time:0,id:"huangJinPikeMan",x:3250,faction:-1,lvl:1,hp:150,attack:80,},
    //			{time:34,id:"huangJinPikeMan",x:3700,faction:-1,hp:150,attack:80,},
    //			{time:45,id:"huangJinPikeMan",x:3900,faction:-1,hp:150,attack:80,},
    			{time:0,id:"huangJinPikeMan",x:3250,faction:-1,lvl:1,hp:150,attack:80,trigger:{dead:function(){
                    if(!Macro.unit(2))
                        return;
            			Macro.unit(2).chat("可恶！让我亲自出马取你性命！");
                }}},
    //			{time:48,id:"huangJinPikeMan",x:4000,faction:-1,hp:150,attack:80,},
			],
		[
//			{id:"demo",x:1200,time:1,faction:-1,group:{num:1,rand:{x:100,y:30},interval:2}},
//			{time:0,id:"demo",faction:-1,x:3800,hp:100,damage:100},
//			{time:0,id:"general",faction:-1,x:4000,hp:300,damage:100},	
//			{id:"zhaoyun",x:800,time:5,faction:-1},		
		],
	],	
	task:[
		{
//            taskTextShowLatency:5,
//            taskFinishLatency:5,  
			win:[
				{type:"killUnit",faction:-1,text:'斩杀前锋营统帅邓茂',id:'ZhangLiang',noText:true,},//noText:true为无文本显示
//                				{type:"allClear",faction:-1,text:'守住城门',},//noText:true为无文本显示
			],
			lose:[
//				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
			],
        	update:function(){
        		MapConfig.func_1();	
				MapConfig.func_2();		
        	},
			func:function(){
//				Macro.guideButton("ability1",10000,"可以点击这里放技能",false,true,winSize.width/2,160);
//				Macro.guideButton("ability1",10000,"可以点击这里放技能",false,true,300,160);
//				Macro.guideButton("ability1",10000,"可以点击这里放技能",false,true,700,160);
				cc.log("当前士兵有"+g_sharedFightLayer.unitList.length+"个")
			},
		},
//		{
////            taskTextShowLatency:5,
////            taskFinishLatency:5,  
//			win:[
//				{type:"killUnit",faction:-1,text:'守住我方城门',id:"huangJinPikeMan",require:11,},//noText:true为无文本显示
////                				{type:"allClear",faction:-1,text:'守住城门',},//noText:true为无文本显示
//			],
//			lose:[
////				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
//			],
//    		func:function(){
//           		Macro.setGameEdge(0,1500);
//    		},
//        	update:function(){
//        		MapConfig.func_2();			
//        	},
//		},
		{
            taskTextShowLatency:10,
//            taskFinishLatency:5,  
			win:[
				{type:"allClear",faction:-1,text:'击溃山贼小兵',textNum:true,},
		
			],
			lose:[
//				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
			],
			func:function(){
//                Macro.setGameEdge(0,3800);
//				cc.log("当前士兵有"+g_sharedFightLayer.unitList.length+"个")
//				var a = g_sharedFightLayer.unitList[0].pos.x
//				cc.log("第一个士兵的位置"+a)
            },
			finishFunc:function(){
				Macro.flee();
//                g_audioEngine.TransitToMusic("sound/combat.wav");
////                MessageFrame.create("前方发现敌将!",null,3,g_sharedGameLayer,9999999+1);
//                g_audioEffectPlay("res/sound/luo.ogg");
			},
        	update:function(){
				MapConfig.func_3();		
        	},
		},
       	{
			win:[
				{type:"killUnit",faction:-1,text:'斩杀山贼头领',id:'ZhangLiang'},
		
			],
			lose:[
//                {type:"time",require:100};
//				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
			],
	            	update:function(){
	            		MapConfig.func_4();			
	            	},
	            	finishFunc:function(){
				Macro.flee();
			},
	},
	
	],
	init:function(){
		g_sharedFightLayer.registerEdge(3500,-1)
		Macro.doLater(5,function(){
			Macro.showMessage('站立不移动即可自动攻击!',5,g_sharedGameLayer);
		})
	},
	config:{
		disable:{
//			myhero:true,ability:true,
		},
        drop:{rage:{chance:0.5,num:1.2},gold:{chance:0.5,num:12,type:"total"},},
        		recommendItem:{type:"ability",content:{id:"SSYJ"},text:"升级你的技能吧",forceGuide:false},//可以填写士兵和技能，
	 	gameEdge:{left:0,right:3800},
        		reward:{gold:0,exp:140,gem:0},
        showTitleLatency:9,
	}
};