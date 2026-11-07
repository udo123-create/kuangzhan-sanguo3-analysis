var MapConfig={
	open:true,
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:3525,},
			{time:0,id:"Gate",x:3600,faction:-1,hp:4280,drop:{gold:{num:55,ct:5}},},
			{time:0,id:"SunShangxiang",x:2650,tag:1,faction:1,hp:6000,func:function(unit){unit.stand(1);},},
		
			{time:0,id:"CaoCao2",x:3450,tag:2,faction:-1,hp:6000,func:function(unit){unit.stand(1);},},
			{time:0,id:"ZhangLiao",x:3600,tag:3,faction:-1,hp:6000,func:function(unit){unit.stand(1);},},
			{time:0,id:"CaiMao",x:3200,tag:4,faction:1,hp:6000,func:function(unit){unit.stand(1);},},
			{time:0,id:"ZhangYun",x:3120,tag:5,faction:1,hp:6000,func:function(unit){unit.stand(1);},},	
		],
//			[				
//			{time:0,id:"huangJinPikeMan",x:3800,faction:-1,hp:12000,attack:10,spell:{ability:{id:"powerStrike"},
//                    cooldown:13,
//                    config:{type:"channel",castTime:3,channelInterval:0.5,},
//                    },},
//			],
		[
//			{id:"demo",x:1200,time:1,faction:-1,group:{num:1,rand:{x:100,y:30},interval:2}},
//			{time:0,id:"demo",faction:-1,x:3800,hp:100,damage:100},
//			{time:0,id:"general",faction:-1,x:4000,hp:300,damage:100},	
//			{id:"zhaoyun",x:800,time:5,faction:-1},		
		],
	],	
	task:[
		
		{
			win:[
				{type:"allClear",faction:-1,text:'击杀黄巾军',},
		
			],
			lose:[
//				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
			],
		},
       	{
			win:[
				{type:"killUnit",faction:-1,text:'击杀邓茂',id:'huangJinPikeMan'},
		
			],
			lose:[
//				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
			],

		},
		
	],
	update:function(){
		if(MapConfig.open && Macro.unit(4)){
		     MapConfig.open=false;
		     Macro.unit(4).playAnim({movementID:"dead10",loop:0});
		     Macro.camFollow(Macro.unit(4));
		     Macro.allUnitAction(function(unit){
					unit.setAI(false);
	         });
	        var dialog = {
	        	skip:true,
	        	timeToNext : 3,
	         	text : [
	        		{                    
	        		0:"张辽：是哪个小贼躲在暗处？"
	        		},
	        		{                    
	        		0:"孙尚香：......糟了！"
	        		},
	        	]
		    };
	        var func = function(){
	        		Macro.skipCG();
	    	};
			Dialog.create(6,dialog,func);
			Macro.doLater(3.5,function(){
				Macro.camMoveTo(cc.p(g_sharedFightLayer.myhero.pos.x,"current"),1,1);			
			});
		}
	},
	init:function(){
//		cc.msgbox(1)
		g_sharedFightLayer.myhero.pos.x = 2800;
//		g_sharedFightLayer.setCam(cc.p(2000,null));
//		g_sharedFightLayer.camMoveBy(cc.p(-500,null),0,5);
	},
	config:{
		myhero:{x:400},
		disable:{
//			myhero:true,ability:true,
		},
	}
};