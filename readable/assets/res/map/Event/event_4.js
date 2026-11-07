var bossHp=(Math.pow(1.085,gPlayer.getCharacter().lvl)*60+66)*5000/66;
var	bossAttack=Math.pow(1.09,gPlayer.getCharacter().lvl)*70+66;

var MapConfig={
		open:true,
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:bossHp/3,tag:998},
            {time:0,id:"Gate",x:3600,faction:-1,hp:bossHp/3,/*drop:{gold:{num:3,ct:5}},*/},
			
			{time:0,id:"pikemanShu",x:3400,faction:1,direction:-1,hp:2000,attack:5,movementSpeed:0.45,tag:1,name:"士兵",
			},

			{time:2,id:"shieldMan",x:3630,faction:-1,attack:80,hp:300,},
//			{time:5,id:"huangJinPikeMan",x:3800,faction:-1,attack:40,hp:150},
//			{time:5,id:"huangJinPikeMan",x:3800,faction:-1,attack:40,hp:150},
//			{time:7,id:"huangJinPikeMan",x:3700,faction:-1,attack:40,hp:150},
			{time:8,id:"huangJinPikeMan",x:3700,faction:-1,attack:40,hp:150},
//			{time:9,id:"huangJinPikeMan",x:3800,faction:-1,attack:40,hp:150},
//			{time:9,id:"huangJinPikeMan",x:3850,faction:-1,attack:40,hp:150},

			{time:10,id:"shieldMan",x:3700,faction:-1,attack:80,hp:300,},
//			{time:12,id:"huangJinPikeMan",x:3700,faction:-1,attack:40,hp:150},
			{time:14,id:"huangJinPikeMan",x:3700,faction:-1,attack:40,hp:150},
			{time:15,id:"specialShieldMan",x:3800,faction:-1,attack:80,hp:300},
			{time:18,id:"huangJinPikeMan",x:3700,faction:-1,attack:40,hp:150},
			{time:19,id:"bowMan",x:3800,faction:-1,attack:65,hp:100},
//			{time:19,id:"huangJinPikeMan",x:3900,faction:-1,attack:40,hp:150},
//			{time:19,id:"huangJinPikeMan",x:3950,faction:-1,attack:40,hp:150},
			{time:19,id:"bowMan",x:3700,faction:-1,attack:65,hp:100},
			{time:20,id:"specialShieldMan",x:3800,faction:-1,attack:80,hp:300},
			{time:21,id:"huangJinPikeMan",x:3800,faction:-1,attack:40,hp:150},
			{time:22,id:"huangJinPikeMan",x:3800,faction:-1,attack:40,hp:150},
			{time:23,id:"huangJinPikeMan",x:3700,faction:-1,attack:40,hp:150},
			{time:24,id:"specialShieldMan",x:3800,faction:-1,attack:80,hp:300},
//			{time:24,id:"specialShieldMan",x:3800,faction:-1,attack:80,hp:300},
			{time:25,id:"bowMan",x:3700,faction:-1,attack:65,hp:100},
			{time:26,id:"bowMan",x:3700,faction:-1,attack:65,hp:100},
			{time:26,id:"bowMan",x:3700,faction:-1,attack:65,hp:100},
			{time:26,id:"shieldMan",x:3700,faction:-1,attack:80,hp:300},
			{time:32,id:"huangJinPikeMan",x:3700,faction:-1,attack:40,hp:150,drop:{heal:{percent:0.1,ct:2}},},
			
            	
			{time:34,id:"fatMan",x:3600,faction:-1,attack:120,hp:1000,},			
			{time:35,id:"huangJinPikeMan",x:3800,faction:-1,attack:40,hp:150},
			{time:35,id:"huangJinPikeMan",x:3800,faction:-1,attack:40,hp:150},
			{time:37,id:"mage",x:3800,faction:-1,attack:130,hp:160},
			{time:37,id:"mage",x:3800,faction:-1,attack:130,hp:160},
			
    		{time:38,id:"shieldMan",x:3800,faction:-1,attack:80,hp:300},
    		{time:38,id:"fatMan",x:3800,faction:-1,attack:120,hp:1000,},
    		{time:40,id:"huangJinPikeMan",x:3800,faction:-1,attack:40,hp:150},
    		{time:40,id:"bowMan",x:3800,faction:-1,attack:65,hp:100},
    		{time:41,id:"huangJinPikeMan",x:3800,faction:-1,attack:40,hp:150},
    		{time:41,id:"huangJinPikeMan",x:3800,faction:-1,attack:40,hp:150},
    		{time:42,id:"bowMan",x:3800,faction:-1,attack:65,hp:100},
    		{time:43,id:"mage",x:3800,faction:-1,attack:130,hp:160},
    		{time:45,id:"healer",x:3800,faction:-1,attack:80,hp:300},
    		{time:47,id:"healer",x:3800,faction:-1,attack:80,hp:300},

    		{time:50,id:"shieldMan",x:3800,movementSpeed:4,size:0.7,faction:-1,attack:150,hp:450,},
    		{time:52,id:"huangJinPikeMan",x:3800,faction:-1,attack:40,hp:150},
    		{time:52,id:"huangJinPikeMan",x:3800,faction:-1,attack:40,hp:150},
    		{time:54,id:"bowMan",x:3800,faction:-1,attack:65,hp:100},
    		{time:54,id:"bowMan",x:3800,faction:-1,attack:65,hp:100},
    		{time:55,id:"huangJinPikeMan",x:3800,faction:-1,attack:40,hp:150},
    		{time:55,id:"huangJinPikeMan",x:3800,faction:-1,attack:40,hp:150},
            {time:55,id:"huangJinPikeMan",x:3850,faction:-1,attack:40,hp:150},

		],
	],		

	
	task:[
		
		{
			win:[
			     {type:"unitPosition",faction:1,posX:400,text:"保护小兵回城！",id:"pikemanShu",},
			],
			lose:[
				{type:"killUnit",faction:1,id:'pikemanShu',noText:true},
			],
			update:function(){
								if(Macro.unit(1)&&MapConfig.open){
									     Macro.unit(1).stand(true);
					                     MapConfig.open=false;
					                     Macro.unit(1).moveTo(400);
				                        }
							 },
			func:function(){
				   g_sharedFightLayer.myhero.pos.x= 1900;
				   Macro.camMoveTo(cc.p(3500,"current"),1,3);
                   Macro.doLater(5,function(){
                          Macro.camFollow(g_sharedFightLayer.myhero,60);//镜头跟随赵云
                      });


				},

		},
	],
	init:function(){
	},
	config:{
		disable:{
//			myhero:true,ability:true,
			unit:true,
		},
        drop:{rage:{chance:1,num:1},},
		gameEdge:{left:0,right:3800},
		reward:{exp:378,gold:1857,gem:0},
//		unitLvl:gPlayer.getCharacter().lvl<35 ? gPlayer.getCharacter().lvl+2 : gPlayer.getCharacter().lvl,
	}
};