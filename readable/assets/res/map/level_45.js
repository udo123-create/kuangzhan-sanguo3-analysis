var MapConfig={
	open:true,
	open_2:true,
	open_2_1:true,
	func_1:function(){
		if(MapConfig.open&&Macro.unit(1)){
 			Macro.allUnitAction(function(unit){
				if(g_sharedFightLayer.myhero && unit.faction==1&&unit!=g_sharedFightLayer.myhero){
					unit.fadeOut();
				}
			})
			MapConfig.open=false;
			Macro.camMoveTo(cc.p(3300,"current"),1,1);
			Macro.allUnitAction(function(unit){
				unit.stand(true);
	                  	});
              		var dialog = {
              			skip:true,
			        	timeToNext : 3,
				text : [
			        		{
			        		0:"蔡瑁：赵子龙，可敢来决一死战？",
			        		},
			        		{
			        		0:"赵云：有何不敢！看枪！",
			        		},
			        	]
		          } 
		 	var func = function(){
				Macro.doLater(1,function(){
					g_sharedFightLayer.myhero && Macro.camMoveTo(cc.p(g_sharedFightLayer.myhero.pos.x,"current"),1,1);
					g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero);
					Macro.setUnitSpawn(true);
					g_sharedFightLayer.myhero && g_sharedFightLayer.myhero.stand(false);
		     			Macro.allUnitAction(function(unit){
	                     			unit.setAI(true);
	                  			});
	                  			Macro.setUnitBtnDisable(true);
				})
			}
			Dialog.create(7,dialog,func);
		}
	},
	func_2:function(){
		if(MapConfig.open_2 && Macro.unit(1) && Macro.unit(1).hp<Macro.unit(1).maxHp*0.5){
			MapConfig.open_2=false;
			Macro.showMessage('出现伏兵，小心！',3);
			var sx=Macro.unit(1).pos.x
			Effect.Smoke(sx,160);
			Effect.Smoke(sx-200,160);
			Effect.Smoke(sx+200,160);
			var sodier=[
				{time:0,id:"shieldmanWei",x:sx-100,faction:-1,lvl:35,},
				{time:0,id:"shieldmanWei",x:sx-100,faction:-1,lvl:35,},
				{time:0,id:"bowmanWei",x:sx+200,faction:-1,lvl:35,},
				{time:0,id:"pikemanWei",x:sx,faction:-1,lvl:35,drop:{heal:{percent:0.2,ct:1}},},
				{time:0,id:"bowmanWei",x:sx+200,faction:-1,lvl:35,},
				{time:0,id:"bowmanWei",x:sx+200,faction:-1,lvl:35,},			
				{time:0,id:"pikemanWei",x:sx,faction:-1,lvl:35,},
			];
			for(var i =0;i<sodier.length;i++){
				g_sharedFightLayer.createUnit(sodier[i]);
			}
		}
		if(MapConfig.open_2_1 && Macro.unit(1) && Macro.unit(1).hp<Macro.unit(1).maxHp*0.2){
			MapConfig.open_2_1=false;
			var sx=Macro.unit(1).pos.x
			Effect.Smoke(sx,160);
			Effect.Smoke(sx-200,160);
			Effect.Smoke(sx+200,160);
			var sodier=[
				{time:0,id:"shieldmanWei",x:sx-100,faction:-1,lvl:35,},
				{time:0,id:"shieldmanWei",x:sx-100,faction:-1,lvl:35,},
				{time:0,id:"bowmanWei",x:sx+200,faction:-1,lvl:35,},
				{time:0,id:"pikemanWei",x:sx,faction:-1,lvl:35,drop:{heal:{percent:0.2,ct:1}},},
				{time:0,id:"bowmanWei",x:sx+200,faction:-1,lvl:35,},
				{time:0,id:"bowmanWei",x:sx+200,faction:-1,lvl:35,},			
				{time:0,id:"pikemanWei",x:sx,faction:-1,lvl:35,},
			];
			for(var i =0;i<sodier.length;i++){
				g_sharedFightLayer.createUnit(sodier[i]);
			}
		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:50000*(1+0.5*(gDifficulty-1)),},
			{time:0,id:"Gate",x:3600,faction:-1,hp:563725*(1+0.5*(gDifficulty-1)),drop:{gold:{num:180,ct:5}},},
		
			{time:0,id:"Block",x:1200,hp:134528,faction:-1,deadOnNextStage:1,},
		
            		{time:0,id:"specialShieldMan",x:1000,faction:-1,direction:-1,lvl:35,},
			{time:0,id:"shieldmanWei",x:1200,faction:-1,direction:-1,lvl:35,},
			{time:4,id:"pikemanWei",x:2000,faction:-1,direction:-1,lvl:35,},
			{time:5,id:"shieldmanWei",x:2000,faction:-1,direction:-1,lvl:35,},					
			{time:10,id:"bowmanWei",x:2000,faction:-1,direction:-1,lvl:35,},
			{time:12,id:"pikemanWei",x:2000,faction:-1,direction:-1,lvl:35,},
			{time:13,id:"fatManWei",x:2000,faction:-1,direction:-1,lvl:35,},
			{time:14,id:"bowmanWei",x:2000,faction:-1,direction:-1,lvl:35,drop:{heal:{percent:0.1,ct:2}},},
			{time:15,id:"pikemanWei",x:2000,faction:-1,direction:-1,lvl:35,},
			{time:16,id:"pikemanWei",x:2000,faction:-1,direction:-1,lvl:35,},
	
	        		{time:26,id:"shieldmanWei",x:2000,faction:-1,direction:-1,lvl:35,},
			{time:21,id:"shieldmanWei",x:2000,faction:-1,direction:-1,lvl:35,},
			{time:22,id:"specialShieldMan",x:2000,faction:-1,direction:-1,lvl:35,},					
			{time:24,id:"bowmanWei",x:2000,faction:-1,direction:-1,lvl:35,},
			{time:26,id:"pikemanWei",x:2000,faction:-1,direction:-1,lvl:35,drop:{heal:{percent:0.1,ct:2}},},
			{time:28,id:"specialShieldMan",x:2000,faction:-1,direction:-1,lvl:35,},
			{time:30,id:"bowmanWei",x:2000,faction:-1,direction:-1,lvl:35,},
			
			{time:31,id:"specialShieldMan",x:2000,faction:-1,direction:-1,lvl:25,},
			{time:33,id:"pikemanWei",x:2000,faction:-1,direction:-1,lvl:25,},
			{time:35,id:"bowmanWei",x:2000,faction:-1,direction:-1,lvl:35,},
			{time:38,id:"fatManWei",x:2000,faction:-1,direction:-1,lvl:35,},
			{time:40,id:"pikemanWei",x:2000,faction:-1,direction:-1,lvl:35,},					
			{time:43,id:"mageWei",x:2000,faction:-1,direction:-1,lvl:35,},
			{time:45,id:"shieldmanWei",x:2000,faction:-1,direction:-1,lvl:35,},
			{time:50,id:"bowmanWei",x:2000,faction:-1,direction:-1,lvl:35,},
			{time:53,id:"pikemanWei",x:2000,faction:-1,direction:-1,lvl:35,},
			{time:55,id:"bowmanWei",x:2000,faction:-1,direction:-1,lvl:35,},
			{time:56,id:"specialShieldMan",x:2000,faction:-1,direction:-1,lvl:35,drop:{heal:{percent:0.1,ct:3}},},
		],
		[
			{time:0,id:"CaiMao",lvl:1,x:3600,faction:-1,tag:1,unitType:"boss",drop:{gold:{num:200,ct:3}},},
		],
	],		
	task:[
		
		{
			win:[
				{type:"time",faction:1,require:63,text:'坚守60秒',textNum:true,},
			],
			lose:[
//				{type:"unitPosition",faction:-1,posX:3600,text:"别让小兵逃回城门"},
				/* {if(g_sharedFightLayer.unit(1).pos.x > 3799),id:'general',} */
			],
			func:function(){
        				Macro.setGameEdge(0,1300);
			},
			finishFunc:function(){
				Macro.flee();
			},
		},
       		{
//			taskFinishLatency:10,
			win:[
					{type:"killUnit",faction:-1,text:'击杀蔡瑁',id:'CaiMao',},
				],
			lose:[],
			func:function(){
				Macro.setGameEdge(0,3800);
			},	
	        		update:function(){			
				MapConfig.func_1();
				MapConfig.func_2();
			},
			finishFunc:function(){
				Macro.flee();
			},
		},		
	],
	init:function(){
		g_sharedFightLayer.registerEdge(3500,-1)
	},
	config:{
		disable:{
//			myhero:true,ability:true,
		},
		drop:{rage:{chance:1,num:1},gold:{chance:0.5,num:760,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:7319,gold:0,gem:0},
	}
};