var MapConfig={
	unit :[
		[
            {time:0,id:"Gate",x:400,faction:1}, //城门设定
			{time:0,id:"huangJinPikeMan",x:600,faction:-1,hp:100,attack:50},
			{time:0,id:"huangJinPikeMan",x:900,faction:-1,hp:100,attack:50,tag:1},
			{time:0,id:"huangJinPikeMan",x:1200,faction:-1,hp:100,attack:80,},
			{time:2,id:"huangJinPikeMan",x:1500,faction:-1,hp:1000,attack:80,},
			{time:2,id:"huangJinPikeMan",x:1600,faction:-1,hp:1000,attack:80,},
			{time:2,id:"huangJinPikeMan",x:1650,faction:-1,hp:1000,attack:80,},
			{time:2,id:"huangJinPikeMan",x:1700,faction:-1,hp:1000,attack:80,},
			{time:7,id:"huangJinPikeMan",x:1800,faction:-1,hp:1000,attack:80,},
			{time:7,id:"huangJinPikeMan",x:2200,faction:-1,hp:1000,attack:80,},
			{time:10,id:"huangJinPikeMan",x:2500,faction:-1,hp:1500,attack:80,},
			{time:10,id:"huangJinPikeMan",x:2600,faction:-1,hp:1500,attack:80,},
			{time:13,id:"huangJinPikeMan",x:3600,faction:-1,hp:2000,attack:50,},
			{time:13,id:"huangJinPikeMan",x:3700,faction:-1,hp:2000,attack:50,},
			{time:13,id:"huangJinPikeMan",x:3900,faction:-1,hp:2000,attack:40,},
			{time:13,id:"huangJinPikeMan",x:3950,faction:-1,hp:2000,attack:40,},
			{time:13,id:"huangJinPikeMan",x:4000,faction:-1,hp:2000,attack:40,},
//			{id:"zhaoyun",x:800,time:5,faction:-1},		
		],
			[				
			{time:0,id:"huangJinPikeMan",x:3800,faction:-1,hp:12000,attack:10,},
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
			win:[
				{type:"allClear",faction:-1,text:'击杀黄巾军',},
		
			],
			lose:[
//				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
			],
            func:function(){
                Macro.unit(1).setAI(false);  //屏蔽AI，让单位接收指令，指令完需要重新设置为true开启AI.
                Macro.unit(1).moveTo(1000);
                Macro.doLater(2,function(){
                            
                            Macro.allUnitAction(function(unit){
                                                    unit.setAI(false);
                                                    unit.stand();
                                                });
                        });
            },
            update:function(){
            },

		},
       	{
			win:[
				{type:"killUnit",faction:-1,text:'击杀邓茂',id:'huangJinPikeMan'},
		
			],
			lose:[
				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
			],

		},
	
	],
	init:function(){
//		Macro.setCam(cc.p(2000,"current"));
//		Macro.camMoveBy(cc.p(-500,"current"),0,5);
//        var dialog = {
//        	timeToNext : 5,
//         	text : [
//         		
//        		{
//        		0:"喽啰:",
//        		1:"哈哈哈哈哈哈哈哈哈哈哈",
//        			},
//        	]
//        }
//        var func = function(){
//			Macro.setCam(cc.p(VISIBLE_WIDTH/2,"current"));
//            Macro.doLater(function(){
//                                        Macro.showText("示例用弹出文本");
//                                    },2);
//                                       
//                             
//              
//        }
//
//		Dialog.create(5,dialog,func);
	},
	config:{
		disable:{
//			myhero:true,ability:true,
		},
	}
};