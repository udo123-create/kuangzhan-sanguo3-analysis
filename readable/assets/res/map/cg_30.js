var MapConfig={
	open:true,
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:3525,},
			{time:0,id:"Gate",x:3600,faction:-1,hp:4280,drop:{gold:{num:55,ct:5}},},
			{time:0,id:"pikemanQun",x:3300,faction:-1,hp:12000,attack:10,movementSpeed:0.6,tag:1,},
			{time:0,id:"pikemanQun",x:3100,faction:-1,hp:12000,attack:10,movementSpeed:0.6,},
			{time:0,id:"pikemanQun",x:2800,faction:-1,hp:12000,attack:10,movementSpeed:0.6,},
			{time:0,id:"pikemanQun",x:2300,faction:-1,hp:12000,attack:10,movementSpeed:0.6,},
			{time:0,id:"pikemanQun",x:1500,faction:-1,hp:12000,attack:10,movementSpeed:0.6,},
			{time:0,id:"pikemanQun",x:1600,faction:-1,hp:12000,attack:10,movementSpeed:0.6,},
			{time:0,id:"pikemanQun",x:2100,faction:-1,hp:12000,attack:10,movementSpeed:0.6,},
			{time:0,id:"pikemanQun",x:2000,faction:-1,hp:12000,attack:10,movementSpeed:0.6,},

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
				{type:"allClear",faction:-1,text:'',},
		
			],
			lose:[
//				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
			],
		},
       	{
			win:[
				{type:"killUnit",faction:-1,text:'',id:'huangJinPikeMan'},
		
			],
			lose:[
//				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
			],

		},
		
	],
	update:function(){
		if(MapConfig.open && Macro.unit(1)){
		     MapConfig.open=false;
		     Macro.camFollow(Macro.unit(1))
		     Macro.doLater(1,function(){
		     	 Macro.camMoveTo(cc.p(500,"current"),1,5);
		     });
	        var dialog = {
	        	skip:true,
	        	timeToNext : 2.5,
	         	text : [
	        		{
	        		0:"赵云：这片树林......",
	        		},
	        	]
		    };
	        var func = function(){
	        	Macro.skipCG();
	    	};
	    	Macro.doLater(6,function(){
			Dialog.create(3,dialog,func);
		});
		}
	},
	init:function(){
//		cc.msgbox(1)
//		g_sharedFightLayer.myhero.pos.x = 500;
//		g_sharedFightLayer.setCam(cc.p(2000,null));
//		g_sharedFightLayer.camMoveBy(cc.p(-500,null),0,5);
	},
	config:{
		disable:{
//			myhero:true,ability:true,
		},
	}
};