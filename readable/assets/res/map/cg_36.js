var MapConfig={
	open:true,
	open_1:true,
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:3525,},
			{time:0,id:"Gate",x:3600,faction:-1,hp:4280,drop:{gold:{num:55,ct:5}},},
			{time:0,id:"XiahouDun",x:3000,y:180,faction:1,movementSpeed:0.6,lvl:1,tag:1,},
			{time:0,id:"CaoCao2",x:3200,y:180,faction:-1,movementSpeed:0.6,lvl:1,tag:2,},
			{time:0,id:"CaoRen",x:3450,y:180,faction:-1,movementSpeed:0.6,lvl:1},
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
		if(MapConfig.open_1&&Macro.unit(1)){
			MapConfig.open_1=false;
			Macro.camFollow(Macro.unit(2));
			Macro.allUnitAction(function(unit){
				unit.stand(true);
			})
			Macro.doLater(0.5,function(){
				Macro.unit(1).playAnim({movementID:"dead10",loop:0});
			});
	        	var dialog = {
	        		skip:true,
	        	timeToNext : 3.5,
	         	text : [
	        		{
	        		0:"夏侯敦：敦因疏忽遭诸葛亮的诡计，事已至此，愿以死谢罪。",
	        		},
	        		{
	        		0:"曹操：将军起身，此番突袭已经损失惨重，我不想再失去一枚大将。",
	        		},
	        		{
	        		0:"曹仁：主公，我请令引兵十万，定扫平新野！",
	        		},
	        	]
		    };
	        var func = function(){
	        	Macro.skipCG();
	    	};
			Dialog.create(13,dialog,func);
		}

	},
	init:function(){
//		cc.msgbox(1)
//		g_sharedFightLayer.myhero.pos.x = 400;
//		g_sharedFightLayer.setCam(cc.p(3000,null));
//		g_sharedFightLayer.camMoveBy(cc.p(-500,null),0,5);
	},
	config:{
		disable:{
//			myhero:true,ability:true,
		},
	}
};