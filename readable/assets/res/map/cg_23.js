var MapConfig={
	open:true,
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:3525,},
			{time:0,id:"Gate",x:3600,faction:-1,hp:4280,drop:{gold:{num:55,ct:5}},},
			{time:0,id:"LiuBei",x:250,faction:1,hp:100,attack:50,tag:1,},
//			{time:0,id:"huangJinPikeMan",x:3400,faction:-1,hp:100,attack:50,},
//			{time:0,id:"huangJinPikeMan",x:3300,y:170,faction:-1,hp:100,attack:50,},
//			{time:0,id:"huangJinPikeMan",x:3350,y:190,faction:-1,hp:100,attack:50,},
////			{time:0,id:"huangJinPikeMan",x:3480,y:155,faction:-1,hp:100,attack:50,},
//			
//			{time:0,id:"XuHuang",x:3600,faction:-1,hp:100,attack:50,},
//				
//			{time:0,id:"huangJinPikeMan",x:2900,faction:-1,hp:100,attack:50,},
//			{time:0,id:"huangJinPikeMan",x:3000,y:170,faction:-1,hp:100,attack:50,},
//			{time:0,id:"huangJinPikeMan",x:2950,y:190,faction:-1,hp:100,attack:50,},
//			{time:0,id:"huangJinPikeMan",x:3080,y:155,faction:-1,hp:100,attack:50,},
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
//		     Macro.setCam(cc.p(3300,"current"));
		     Macro.allUnitAction(function(unit){
					unit.setAI(false);
	         });
	        var dialog = {
	        	skip:true,
	        	timeToNext : 3.5,
	         	text : [
	        		{                    
	        		0:"刘备：吕布已收下袁术的厚礼，徐州一战我们怕是要腹背受敌。",
	        		},
	        		{                    
	        		0:"赵云：吕布当真有勇无谋，看不出袁术的野心？",
	        		},
	        	]
		    };
	        var func = function(){
	        	Macro.skipCG();
	    	};
			Dialog.create(8.5,dialog,func);
		}
	},
	init:function(){
//		cc.msgbox(1)
//		g_sharedFightLayer.myhero.pos.x = 500;
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