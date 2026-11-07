var bossHp=(Math.pow(1.085,gPlayer.getCharacter().lvl)*60+66)*5000/66;
var	bossAttack=Math.pow(1.09,gPlayer.getCharacter().lvl)*70+66;

var MapConfig={
	open:true,
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:bossHp/3,tag:998},
            {time:0,id:"Gate",x:3600,faction:-1,hp:bossHp/3,/*drop:{gold:{num:3,ct:5}},*/},
			
			{time:1,id:"MsGan",name:"妇人",x:1560,faction:1,hp:4000,attack:5,name:" ",tag:1,func:function(unit){unit.stand(1);},movementSpeed:1.5,
			},
			{time:0,id:"pikemanQun",x:1820,faction:-1,attack:40,hp:150,},
			{time:0,id:"pikemanQun",x:1850,faction:-1,attack:40,hp:150,tag:2,},
			{time:0,id:"pikemanQun",x:1240,faction:-1,direction:1,attack:40,hp:150,},
			{time:0,id:"bowmanQun",x:1900,faction:-1,attack:65,hp:100,},
			
			{time:7,id:"shieldmanQun",x:3800,faction:-1,attack:80,hp:300},
			{time:8,id:"pikemanQun",x:3800,faction:-1,attack:40,hp:150},	
			{time:9,id:"pikemanQun",x:3800,faction:-1,attack:40,hp:150},	
			{time:9,id:"pikemanQun",x:3800,faction:-1,attack:40,hp:150},	
			{time:10,id:"pikemanQun",x:3800,faction:-1,attack:40,hp:150},	
			
			
			{time:12,id:"shieldmanQun",x:3800,faction:-1,attack:80,hp:300},
			{time:13,id:"pikemanQun",x:3800,faction:-1,attack:40,hp:150},	
			{time:14,id:"pikemanQun",x:3800,faction:-1,attack:40,hp:150},	
			{time:18,id:"pikemanQun",x:3800,faction:-1,attack:40,hp:150},	
			{time:19,id:"pikemanQun",x:3800,faction:-1,attack:40,hp:150},	
			{time:20,id:"bowmanQun",x:3800,faction:-1,attack:65,hp:100},	
			{time:20,id:"shieldmanQun",x:3800,movementSpeed:4,size:0.7,faction:-1,attack:80,hp:300},
			
			{time:28,id:"fatManQun",x:3800,faction:-1,attack:120,hp:1000,},	
			{time:29,id:"pikemanQun",x:3800,faction:-1,attack:40,hp:150},	
			{time:33,id:"pikemanQun",x:3800,faction:-1,attack:40,hp:150},	
			{time:34,id:"mageQun",x:3800,faction:-1,attack:130,hp:160,drop:{heal:{percent:0.1,ct:2}},},	
			{time:35,id:"healerQun",x:3800,faction:-1,attack:60,hp:300},	
			{time:35,id:"healerQun",x:3800,faction:-1,attack:60,hp:300},
			{time:38,id:"pikemanQun",x:3800,faction:-1,attack:40,hp:150},	
			{time:38,id:"pikemanQun",x:3800,faction:-1,attack:40,hp:150},	
			{time:39,id:"bowmanQun",x:3800,faction:-1,attack:65,hp:100},	
			{time:39,id:"bowmanQun",x:3800,faction:-1,attack:65,hp:100},	
			{time:40,id:"shieldmanQun",x:3800,movementSpeed:4,size:0.7,faction:-1,attack:80,hp:300,drop:{heal:{percent:0.1,ct:2}},},	
			{time:41,id:"fatManQun",x:3800,faction:-1,attack:120,hp:1000,},	
			{time:42,id:"mageQun",x:3800,faction:-1,attack:130,hp:160,drop:{heal:{percent:0.1,ct:2}},},	
			{time:45,id:"healerQun",x:3800,faction:-1,attack:60,hp:300},	
			{time:47,id:"pikemanQun",x:3800,faction:-1,attack:40,hp:150},	
			{time:48,id:"pikemanQun",x:3800,faction:-1,attack:40,hp:150},	
			{time:52,id:"bowmanQun",x:3800,faction:-1,attack:65,hp:100},	
			{time:53,id:"mageQun",x:3800,faction:-1,attack:130,hp:160,drop:{heal:{percent:0.1,ct:2}},},	
			
		],
	],

	
	task:[
		
		{
			win:[
				{type:"allClear",faction:-1,text:'解救受困的妇人',textNum:true,},
			],
			lose:[
				{type:"killUnit",faction:1,id:'MsGan',noText:true},
			],
			finishFunc:function(){
			},
			func:function(){
				   Macro.camMoveTo(cc.p(1650,"current"),1,2);
                   Macro.doLater(5,function(){
                          Macro.camFollow(g_sharedFightLayer.myhero,60);//镜头跟随赵云
                      });
				},
					
		    update:function(){
		    	
								if(Macro.unit(1) && !Macro.unit(2) &&  g_sharedFightLayer.myhero && g_sharedFightLayer.myhero.pos.x - Macro.unit(1).pos.x != 250 ){
                                    Macro.unit(1).moveTo(g_sharedFightLayer.myhero.pos.x-250);
                                  }
                                  
								if(Macro.unit(1) && !Macro.unit(2) && g_sharedFightLayer.myhero && g_sharedFightLayer.myhero.pos.x - Macro.unit(1).pos.x == 250 ){
                                    Macro.unit(1).direction=1;
                                    Macro.unit(1).stand(true);
                                  }
                                  
                                  
				    }
			    
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