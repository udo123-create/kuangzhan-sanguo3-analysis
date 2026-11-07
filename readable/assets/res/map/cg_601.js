var MapConfig={
	open:true,
	unit :[
		[
			{time:0,id:"GongsunZan",x:350,faction:1,hp:100,attack:50,tag:1,},

//			{id:"zhaoyun",x:800,time:5,faction:-1},		
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
		if(MapConfig.open && Macro.unit(1)){
		     MapConfig.open=false;
 		     Macro.allUnitAction(function(unit){
                unit.setAI(false);
             });
	        var dialog = {
	        	timeToNext : 3,
	         	text : [
	        		{
	        		0:"公孙瓒：今日相救瓒感激不尽，往后可愿和吾一起讨贼报国？",
	        		},
	        		{
	        		0:"赵云：子龙愿尽微薄之力！",
	        		},
	        	]
		    };
	        var func = function(){
	        	Macro.skipCG();
	    	};
			Dialog.create(6.5,dialog,func);
		}
	},
	init:function(){
//		cc.msgbox(1)
		g_sharedFightLayer.myhero.pos.x = 500;
		g_sharedFightLayer.myhero.direction=-1;
//		g_sharedFightLayer.setCam(cc.p(2000,null));
//		g_sharedFightLayer.camMoveBy(cc.p(-500,null),0,5);
	},
	config:{
		myhero:{
			direction:-1,
			ai:{},
		},
		disable:{
//			myhero:true,ability:true,
		},
	}
};