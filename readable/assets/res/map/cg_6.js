var MapConfig={
	open:true,
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:3525,},
			{time:0,id:"Gate",x:3600,faction:-1,hp:4280,drop:{gold:{num:55,ct:5}},},
			{time:0,id:"GongsunZan",x:2700,faction:1,hp:10000,attack:50,tag:1,},
			{time:0,id:"huangJinPikeMan",x:2920,y:180,faction:-1,hp:1000,attack:50,},
			{time:0,id:"huangJinPikeMan",x:2850,y:150,faction:-1,hp:10000,attack:181,},
			{time:0,id:"huangJinPikeMan",x:2800,faction:-1,hp:10000,attack:180,},
		],
	],	
	task:[
	],
	update:function(){
		if(MapConfig.open && Macro.unit(1)){
		//	cc.msgbox("into cg update")
		     	MapConfig.open=false;
		     	Macro.camFollow(Macro.unit(1))
	        		var dialog = {
	        			skip:true,
	        			timeToNext : 2.0,
		         	text : [
			        		{
			        		0:"公孙瓒：可恶，不曾想中了埋伏",
			        		},
			        		{
			        		0:"黄巾兵：哼，今日就是你的死期！",
			        		},
	        			]
		    	};
	        var func = function(){
	        	Macro.skipCG();
	        //	cc.Director.getInstance().replaceScene(GameLayer.scene(4,true));
	    	};
			Dialog.create(6,dialog,func);
		//	new Ability.Cast(Macro.unit(1),{id:"arrowRain"},{castTime:1,channelInterval:0.5,});
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