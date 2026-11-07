var MapConfig={
	open:true,
	t:200,
	pos:1,
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:3525,},
			{time:0,id:"Gate",x:3600,faction:-1,hp:4280,drop:{gold:{num:55,ct:5}},},
			{time:0,id:"pikemanShu",x:2700,faction:1,hp:10000,attack:50,},
			{time:0,id:"pikemanShu",x:2750,y:165,faction:1,hp:10000,attack:50,},
//			{time:0,id:"pikemanShu",x:3000,y:167,faction:1,hp:10000,attack:181,},
		
			{time:0,id:"huangJinPikeMan",x:2850,faction:-1,hp:10000,attack:180,},
			{time:0,id:"huangJinPikeMan",x:2980,y:170,faction:-1,hp:10000,attack:180,},
			{time:0,id:"huangJinPikeMan",x:3100,faction:-1,hp:10000,attack:180,},
			{time:0,id:"ZhangJiao",x:3100,faction:-1,hp:10000,attack:180,tag:1,},
				
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
		MapConfig.t=MapConfig.t-1;
		if(MapConfig.open && Macro.unit(1)){
		     MapConfig.open=false;
		     Macro.camDisFollow("myhero");
		     Macro.setCam(cc.p(3000,"current"));
		     Macro.unit(1).stand(true);
	        		var dialog = {
	        		skip:true,
		        	timeToNext : 3,
		         	text : [
		        		{
		        		0:"张角：苍天已死，黄天助吾杀尽一切声色犬马！",
		        		},
		        		{
		        		0:"赵云：故弄玄虚，黄巾军已败亡，今日便斩你，看枪！",
		        		},
	        		]
		    };
	        var func = function(){
	    	};
			Dialog.create(8,dialog,func);
			Macro.doLater(4,function(){
				Macro.camMoveTo(cc.p(800,"current"),1,1);
					Macro.doLater(3,function(){
						Macro.skipCG();
					});	
			});
//			new Ability.Cast(Macro.unit(1),{id:"fireBall",num:1,damage:10,noDirection:true ,len:100,times:1},
//		    	{type:"channel2",castTime:0.1,channelInterval:0.1,
//			});
		}
//		if(MapConfig.t< 1){
//			MapConfig.t=30;
//			MapConfig.pos++;
//	//		new Ability.Cast(Macro.unit(1),{id:"fireBall",num:1,damage:10,noDirection:true ,len:MapConfig.pos*200,times:0.3},
//	//	    	{type:"channel2",castTime:0.1,channelInterval:0.1,
//	//		});
//	//		cc.msgbox(1)
//			var fireball=new Ability["fireBall"](Macro.unit(1),{id:"fireBall",num:1,damage:10,warm:false,length:MapConfig.pos*300,times:0.4});
//			g_sharedFightLayer.addChild(fireball);
//		}
	},
	init:function(){
//		cc.msgbox(1)
//		g_sharedFightLayer.myhero.pos.x = 500;
//		g_sharedFightLayer.setCam(cc.p(2000,null));
//		g_sharedFightLayer.camMoveBy(cc.p(-500,null),0,5);
	},
	config:{
		myhero:{x:800},
		disable:{
//			myhero:true,ability:true,
		},
	}
};