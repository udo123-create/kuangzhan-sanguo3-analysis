var MapConfig={
	open_1:true,
	func_1:function(){
//		if(MapConfig.open_1 && Macro.unit(1) && g_sharedFightLayer.myhero && (Macro.unit(1).pos.x- g_sharedFightLayer.myhero.pos.x)<600){
//			MapConfig.open_1=false;
//			Macro.unit(2).dead();
//		}
		if(MapConfig.open_1&&g_sharedFightLayer.myhero&&g_sharedFightLayer.myhero.pos.x>2500){
			MapConfig.open_1=false;
			Macro.showMessage("弓箭手伏兵，快后撤！",5)
		}
	},
	environment:[
        [
        {time:0,id:'trap',x:800,faction:-1,attack:40,interval:5},
        {time:0.1,id:'trap',x:835,faction:-1,attack:40,interval:5},
        {time:0.2,id:'trap',x:870,faction:-1,attack:40,interval:5},
 //       {time:0.3,id:'trap',x:905,faction:-1,attack:40,interval:5},

        {time:3,id:'trap',x:1150+110,faction:-1,attack:40,interval:5},
        {time:3,id:'trap',x:1185+110,faction:-1,attack:40,interval:5},
        {time:3,id:'trap',x:1220+110,faction:-1,attack:40,interval:5},
//        {time:3,id:'trap',x:1255+110,faction:-1,attack:40,interval:5},

        {time:6,id:'trap',x:1500+220,faction:-1,attack:40,interval:5},
        {time:6,id:'trap',x:1535+220,faction:-1,attack:40,interval:5},
        {time:6,id:'trap',x:1570+220,faction:-1,attack:40,interval:5},
//        {time:6,id:'trap',x:1605+220,faction:-1,attack:40,interval:5},

        {time:0,id:'trap',x:1850+330,faction:-1,attack:40,interval:5},
        {time:0,id:'trap',x:1885+330,faction:-1,attack:40,interval:5},
        {time:0,id:'trap',x:1920+330,faction:-1,attack:40,interval:5},
//        {time:0,id:'trap',x:1955+330,faction:-1,attack:40,interval:5},

        {time:3,id:'trap',x:2200+440,faction:-1,attack:40,interval:5},
        {time:3,id:'trap',x:2235+440,faction:-1,attack:40,interval:5},
        {time:3,id:'trap',x:2270+440,faction:-1,attack:40,interval:5},
//        {time:3,id:'trap',x:2305+440,faction:-1,attack:40,interval:5},

        {time:6,id:'trap',x:2550+550,faction:-1,attack:40,interval:5},
        {time:6,id:'trap',x:2585+550,faction:-1,attack:40,interval:5},
        {time:6,id:'trap',x:2620+550,faction:-1,attack:40,interval:5},
//        {time:6,id:'trap',x:2655+550,faction:-1,attack:40,interval:5},
        ],
    ],
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:8000*(1+0.5*(gDifficulty-1)),},
            		{time:0,id:"Gate",x:3600,faction:-1,hp:27130*(1+0.5*(gDifficulty-1)),drop:{gold:{num:2,ct:5}},},
			{time:0,id:"huangJinPikeMan",x:4000,faction:-1,lvl:4,movementSpeed:0.4,tag:1,
				spell:{ability:{id:"fireBall",num:1,warm:true,damage:50,},cooldown:8,
	             		config:{ },},
			},
//			{time:0,id:"mage",x:14000,faction:-1,lvl:4,movementSpeed:0.4,attackRate:33333332,tag:2,
//				spell:{ability:{id:"fireBall",num:1,warm:true,damage:150,},cooldown:5,
//	             		config:{ },},
//			},
		
			{time:0,id:"bowMan",x:2800,faction:-1,lvl:4,hide:{pos:2800,range:300,func:null},},
			{time:0,id:"bowMan",x:2900,faction:-1,lvl:4,hide:{pos:2900,range:400,func:null},},
			{time:0,id:"bowMan",x:3000,faction:-1,lvl:4,hide:{pos:3000,range:500,func:null},},
			
			{time:0,id:"huangJinPikeMan",x:1200,faction:-1,lvl:4,},
			{time:3,id:"huangJinPikeMan",x:1600,faction:-1,lvl:4,},
			{time:5,id:"bowMan",x:2300,faction:-1,lvl:4},
			{time:6,id:"bowMan",x:2400,faction:-1,lvl:4,},
			{time:8,id:"bowMan",x:3200,y:150,faction:-1,lvl:4,},
			{time:11,id:"bowMan",x:3610,faction:-1,lvl:4,},
			{time:13,id:"bowMan",x:3620,y:165,faction:-1,lvl:4,},

			{time:20,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4},
			{time:21,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},
			{time:23,id:"huangJinPikeMan",x:3800,faction:-1,lvl:4,},
			{time:28,id:"bowMan",x:3800,y:150,faction:-1,lvl:4,drop:{heal:{percent:0.1,ct:1}},},
			{time:29,id:"bowMan",x:3800,faction:-1,lvl:4,},
			{time:32,id:"bowMan",x:3810,faction:-1,lvl:4,},
			{time:34,id:"bowMan",x:3820,y:170,faction:-1,lvl:4,},
//			{time:35,id:"bowMan",x:3620,y:170,faction:-1,lvl:4,},

		],
		[
			{time:0,id:"shieldMan",x:3600,faction:-1,lvl:4,drop:{heal:{percent:0.1,ct:1}},},
			{time:2,id:"huangJinPikeMan",x:3650,faction:-1,lvl:4,},
			{time:7,id:"bowMan",x:3700,faction:-1,lvl:4,},
			{time:11,id:"huangJinPikeMan",x:3700,faction:-1,lvl:4,},
			{time:15,id:"huangJinPikeMan",x:3700,faction:-1,lvl:4,},
			{time:17,id:"shieldMan",x:3700,faction:-1,lvl:4,drop:{heal:{percent:0.1,ct:1}},},
			{time:18,id:"huangJinPikeMan",x:3700,faction:-1,lvl:4,},
			{time:23,id:"bowMan",x:3600,faction:-1,lvl:4,},
			{time:24,id:"bowMan",x:3700,faction:-1,lvl:4,},
			{time:30,id:"bowMan",x:3950,faction:-1,lvl:4,},
			{time:30,id:"bowMan",x:4000,faction:-1,lvl:4,},

			{time:32,id:"shieldMan",x:3800,faction:-1,lvl:4,drop:{heal:{percent:0.1,ct:2}},},
			{time:34,id:"bowMan",x:3800,faction:-1,lvl:4,},
			{time:35,id:"bowMan",x:3950,faction:-1,lvl:4,},

			{time:35,id:"ZhangBao",x:3800,faction:-1,unitType:"boss",
				hp:8000*Math.pow(1.5,(gDifficulty-1)),attack:350*Math.pow(1.5,(gDifficulty-1)),drop:{gold:{num:4,ct:3}}},
			{time:40,id:"bowMan",x:3950,faction:-1,lvl:4,},
			{time:41,id:"bowMan",x:3950,faction:-1,lvl:4,},


			{time:43,id:"bowMan",x:3950,faction:-1,lvl:4,},
			{time:45,id:"bowMan",x:3950,faction:-1,lvl:4,},

			{time:55,id:"shieldMan",x:3800,faction:-1,lvl:4,},
			{time:60,id:"bowMan",x:3950,faction:-1,lvl:4,},
			{time:65,id:"bowMan",x:3950,faction:-1,lvl:4,},
			{time:70,id:"bowMan",x:3950,faction:-1,lvl:4,},

                    			
		],

	],	
	task:[
		
		{
			win:[
				{type:"allClear",faction:-1,text:'击破张梁先锋军',textNum:true,},
			],
			lose:[
//				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
			],
    		func:function(){
       			Macro.setGameEdge(0,3800);
    		},
			update:function(){
				MapConfig.func_1();
			}
		},
		{
			win:[
				{type:"killUnit",faction:-1,text:'斩杀“人公将军”张梁',id:'ZhangBao',},
		
			],
			lose:[
//				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
			],
			func:function(){
                			Macro.setGameEdge(0,3800);
            		},
            		finishFunc:function(){
				Macro.flee();
			},
		},
//       	{
//			win:[
//				{type:"killUnit",faction:-1,text:'斩杀张宝',id:'ZhangBao'},
//		
//			],
//			lose:[
////				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
//			],
//
//		},
	
	],
	init:function(){
		g_sharedFightLayer.registerEdge(3500,-1)        
//		cc.msgbox(1)
//		g_sharedFightLayer.myhero.pos.x = 500;
//		g_sharedFightLayer.setCam(cc.p(2000,null));
//		g_sharedFightLayer.camMoveBy(cc.p(-500,null),0,5);
	},
	config:{
		disable:{
//			myhero:true,ability:true,
		},
		drop:{rage:{chance:0.5,num:1.2},gold:{chance:0.5,num:24,type:"total"},},
		recommendItem:{type:"soldier",content:{id:"pikeman"},text:"升级你的枪兵吧",forceGuide:false},
	 	gameEdge:{left:0,right:3800},
        reward:{exp:191,gold:0,gem:10},
	}
};