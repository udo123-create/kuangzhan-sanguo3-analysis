var MapConfig={
	unit :[
		[
            {time:0,id:"Gate",x:3600,faction:-1,hp:400000,},

//			{time:0,id:"PangTong",x:300,attack:1,hp:50000000,faction:1,unitType:"boss",
//				ai:{
//					comradeMove:1,  //战友AI示例
//					seekEnemyToAttack:1,
//					actionWhenStand:1,
//					CanotAttackStatus:1,
//					Ability:1,
//				}
//			},

			{time:0,id:"ZhangBao",x:1000,attack:1,hp:50000000,faction:-1,tag:1,unitType:"boss",
		        ai:{  //走砍AI示例
			        	walkingCut:1,  //  走砍攻击AI
						actionWhenStand:1,  // 站着的时候的AI
						walkingCutMove:1,  // 走砍的行走AI
						Ability:1,  //  技能AI
		        },
			},

			{time:0,id:"huangJinPikeMan",x:1200,faction:-1,attack:1,hp:100000,movementSpeed:1,attack:150,
		        ai:{
						followMove:{       //护卫ai示例
								getTarget:function(){
									return Macro.unit(1);
								},
								distance:100,
						},
						actionWhenStand:1,
						followAttack:1,
		        },
			},

//			{time:0,id:"huangJinPikeMan",x:1500,hp:2000,faction:-1,lvl:1,
//			ai:{
//				callAmbush:{   
//					ambush:[   
//						{time:0,id:"pikemanQun",lvl:16,},
//						{time:0,id:"pikemanQun",lvl:16,},
//						{time:0,id:"bowmanQun",lvl:16,},							
//						{time:0,id:"bowmanQun",lvl:16,},									
//					],
//					hurtHpPercent:30,
//				},
//				tryToMove:1,
//				seekEnemyToAttack:1,
//				Ability:1,
//			},
//			},

////			{time:0,id:"pikemanShu",x:200,faction:1,hp:1000,attack:150,drop:{gold:{num:300,ct:2}}},
////			{time:0,id:"pikemanShu",x:250,y:140,faction:1,hp:1000,attack:150,},		
//			{time:0,id:"huangJinPikeMan",x:1000,faction:-1,lvl:1,hp:200,},
//			{time:0,id:"huangJinPikeMan",x:1500,faction:-1,lvl:1,hp:200,},
//			{time:0,id:"huangJinPikeMan",x:2000,faction:-1,lvl:1,hp:200,drop:{gold:{num:300,ct:2}}},
//
//			{time:4,id:"huangJinPikeMan",x:3500,faction:-1,lvl:1,hp:200,},
//			{time:5,id:"huangJinPikeMan",x:3500,faction:-1,lvl:1,hp:200,},
//			{time:7,id:"huangJinPikeMan",x:3500,faction:-1,lvl:1,hp:200,},
//			{time:8,id:"huangJinPikeMan",x:3500,faction:-1,lvl:1,hp:200,drop:{gold:{num:300,ct:2}}},
//
//			{time:9,id:"huangJinPikeMan",x:3800,faction:-1,lvl:1},
//			{time:10,id:"huangJinPikeMan",x:3800,faction:-1,lvl:1,hp:200,},
//			{time:11,id:"huangJinPikeMan",x:3800,faction:-1,lvl:1,hp:200,},	
//
//			{time:15,id:"huangJinPikeMan",x:3800,faction:-1,lvl:1},
//			{time:18,id:"huangJinPikeMan",x:3800,faction:-1,lvl:1,hp:200,},
//			{time:22,id:"huangJinPikeMan",x:3800,faction:-1,lvl:1,hp:200,drop:{gold:{num:300,ct:2}}},		
		],
		[
			{time:0,id:"shieldMan",x:3600,faction:-1,lvl:2,},
//			{time:1,id:"huangJinPikeMan",x:3600,faction:-1,lvl:2,},
//			{time:4,id:"huangJinPikeMan",x:3600,faction:-1,lvl:2,},
//			{time:5,id:"huangJinPikeMan",x:3600,faction:-1,lvl:2,},
//			{time:6,id:"huangJinPikeMan",x:3600,faction:-1,lvl:2,},
			{time:9,id:"shieldMan",x:3600,faction:-1,lvl:2,},
//			{time:10,id:"huangJinPikeMan",x:3600,faction:-1,lvl:2,},	
//			{time:11,id:"huangJinPikeMan",x:3600,faction:-1,lvl:2,},
//			{time:13,id:"shieldMan",x:3600,faction:-1,lvl:2,},
//			{time:15,id:"shieldMan",x:3600,faction:-1,lvl:2,},
//			{time:16,id:"huangJinPikeMan",x:3600,faction:-1,lvl:2,},	
			{time:20,id:"shieldMan",x:3600,faction:-1,lvl:2,},
			
			{time:30,id:"DengMao",x:3800,faction:-1,unitType:"boss",},
            	
//            		{time:21,id:"shieldMan",x:3600,faction:-1,lvl:2,drop:{gold:{num:300,ct:2}}},
            		{time:22,id:"huangJinPikeMan",x:3600,faction:-1,lvl:2,drop:{gold:{num:300,ct:2}}},
 //           		{time:25,id:"shieldMan",x:3600,faction:-1,lvl:2,drop:{heal:{percent:0.2,ct:1}}},
            		{time:26,id:"huangJinPikeMan",x:3600,faction:-1,lvl:2,},
 //           		{time:29,id:"huangJinPikeMan",x:3600,faction:-1,lvl:2,drop:{heal:{percent:0.2,ct:1}},},
			{time:31,id:"huangJinPikeMan",x:3600,faction:-1,lvl:2,},	
//			{time:31,id:"huangJinPikeMan",x:3600,faction:-1,lvl:2,},	
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
			func:function(){
	//			g_sharedFightLayer.myhero.stand(true);
		//		Macro.bossAppear();
			}
		},
       		{
			win:[
				{type:"killUnit",faction:-1,id:"DengMao",text:'斩杀张梁',},
		
			],
			lose:[
//				{type:"unitPosition",faction:-1,posX:100,text:"别让小兵靠近城门"},
			],
		},
	],
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
        drop:{rage:{chance:1,num:1},heal:{chance:0.2,percent:0.2,ct:1}},
		gameEdge:{left:0,right:3800},
		reward:{exp:151,gold:144,gem:0},
	}
};