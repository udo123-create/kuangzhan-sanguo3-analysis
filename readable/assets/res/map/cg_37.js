var MapConfig={
	open:true,
	open_1:true,
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:3525,},
			{time:0,id:"Gate",x:3600,faction:-1,hp:4280,drop:{gold:{num:55,ct:5}},},
			{time:0,id:"pikemanShu",x:1200,y:180,faction:1,direction:-1,movementSpeed:0.6,lvl:1},
			{time:0,id:"pikemanShu",x:1100,y:180,faction:1,direction:-1,movementSpeed:0.6,lvl:1},
			{time:0,id:"pikemanShu",x:1000,y:180,faction:1,direction:-1,movementSpeed:0.6,lvl:1},

			{time:0,id:"huangJinPikeMan",x:1400,y:180,faction:-1,lvl:40,tag:1,},
			{time:0,id:"huangJinPikeMan",x:1500,y:150,faction:-1,lvl:40},
//			{time:0,id:"XiaHouen",x:1600,faction:-1,},

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
				{type:"allClear",faction:-1,text:'击杀黄巾军',textNum:true,},
		
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
		//	cc.msgbox("into cg update")
		     MapConfig.open=false;
		     Macro.camFollow(Macro.unit(1))
//	        var dialog = {
//	        	timeToNext : 2.5,
//	         	text : [
//	        		{
//	        		0:"黄巾兵：缴枪不杀！钱财都拿出来！",
//	        		},
//	        		{
//	        		0:"公孙瓒：士可杀不可辱，何来投降之理！",
//	        		},
//	        	]
//		    };
//	        var func = function(){
//	        //	Macro.skipCG();
//	        //	cc.Director.getInstance().replaceScene(GameLayer.scene(4,true));
//	    	};
//			Dialog.create(7,dialog,func);
//			Macro.doLater(8,function(){
//				Macro.skipCG();
//			});
		}
		if(MapConfig.open_1&& Macro.unit(1)&& Macro.unit(1).pos.x<800){
			MapConfig.open_1=false;
			Macro.allUnitAction(function(unit){
				unit.stand(true);
			})
	        var dialog = {
	        	skip:true,
	        	timeToNext : 2,
	         	text : [
	        		{
	        		0:"夏侯恩部下：我乃夏侯恩将军部下，拦路者报上名来！",
	        		},
	        		{
	        		0:"赵云：滥杀无辜，天理难容，看枪！",
	        		},
	        	]
		    };
	        var func = function(){
	        	Macro.skipCG();
	        //	cc.Director.getInstance().replaceScene(GameLayer.scene(4,true));
	    	};
			Dialog.create(7,dialog,func);

		}

	},
	init:function(){
//		cc.msgbox(1)
		g_sharedFightLayer.myhero.pos.x = 400;
//		g_sharedFightLayer.setCam(cc.p(2000,null));
//		g_sharedFightLayer.camMoveBy(cc.p(-500,null),0,5);
	},
	config:{
		disable:{
//			myhero:true,ability:true,
		},
	}
};