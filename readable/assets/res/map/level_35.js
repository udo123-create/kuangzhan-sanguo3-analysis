var MapConfig={
	t:30,
	startFireball:false,
	open_ai:true,
	open_ai_2:false,
	open_0:true,
	open:true,
	open_1:true,
	func_1:function(){
		if(MapConfig.open_ai&&g_sharedFightLayer.myhero&&Macro.unit(1)&&Macro.unit(1).pos.x-g_sharedFightLayer.myhero.pos.x<=300){
			MapConfig.open_ai=false;
			MapConfig.open_ai_2=true;
			Macro.unit(1).stand(false);
			Macro.unit(1).setAI(true);
			Macro.setUnitSpawn(true);
		}
		if(MapConfig.open_ai_2&&g_sharedFightLayer.myhero&&Macro.unit(1)&&Macro.unit(1).pos.x-g_sharedFightLayer.myhero.pos.x>=650){
			MapConfig.open_ai_2=false;
			MapConfig.open_ai=true;
			Macro.setUnitSpawn(false);
			Macro.unit(1).stand(true);
			Macro.doLater(5,function(){
				Macro.showMessage('靠近夏侯敦以诱敌',5);
			})
		}
		if(MapConfig.open&&Macro.unit(1)&&Macro.unit(1).pos.x<=2000){
			MapConfig.open=false;
			Macro.camMoveTo(cc.p(2000,"current"),1,1);
			Macro.setUnitSpawn(false);
			Macro.allUnitAction(function(unit){
		                        unit.stand(true);
			});
			var dialog = {
				skip:true,
				timeToNext : 3,
				text : [
			         	{
			        		0:"李典：将军，赵云诱敌，恐有埋伏！",
			        		},
			        		{
			        		0:"夏侯敦：就算有埋伏，今晚不到新野，我誓不罢兵！",
			        		},
				]
			}
			var func = function(){
				Macro.setUnitSpawn(true);
				g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero,60);
				Macro.allUnitAction(function(unit){
			                        unit.setAI(true);
				});
	        		}
	        		Dialog.create(7.5,dialog,func);
		}
	},
	func_2:function(){
		if(MapConfig.startFireball){
			MapConfig.t = MapConfig.t-1;
			if(MapConfig.t< 1){
				MapConfig.t=30;
				var fireball=new Ability["fireBall"](g_sharedFightLayer.myhero,{id:"fireBall",num:1,damage:0,warm:false,length:1750+Math.random()*500,times:0.4});
				g_sharedFightLayer.addChild(fireball);
			}
		}
		if(MapConfig.open_1&&Macro.unit(1)){
			MapConfig.open_1=false;
			Macro.setUnitSpawn(false);
			Macro.allUnitAction(function(unit){
		                        unit.stand(true);
			});
			var dialog = {
				timeToNext : 3,
				text : [
			         	{
			        		0:"李典：山路狭窄，草木繁生，宜用火攻！快撤退！我们中计了！",
			        		},
				]
			}
			var func = function(){
				Macro.setUnitSpawn(true);
				g_sharedFightLayer.myhero && Macro.camMoveTo(cc.p(g_sharedFightLayer.myhero.pos.x,"current"),1,1);
				Macro.doLater(1,function(){
					Macro.allUnitAction(function(unit){
			                      	unit.setAI(true);
					});
					MapConfig.startFireball=false;
					g_sharedTaskManager.nextTask();
					Macro.setUnitHpFrameVisible(Macro.unit(1),true);
					Macro.unit(1).maxHp=54000;
					Macro.unit(1).attack=1000;
					Macro.doLater(3,function(){
						Macro.unit(2).moveTo(3800);
						Macro.unit(2).fadeOut();
						Macro.showMessage('李典带大军撤离，击败夏侯敦',3);
					})
				});
	        		}
	        		Macro.doLater(2,function(){
	        			Dialog.create(7.5,dialog,func);
	        		});
	        		Macro.doLater(4,function(){
				MapConfig.startFireball=true;
	        		});
	        		Macro.doLater(5.5,function(){
	        			Macro.camMoveTo(cc.p(2500,"current"),1,1);
//						for(var i=1;i<=10;i++){
//							var fireball=new Ability["fireBall"](Macro.unit(1),{id:"fireBall",num:10,damage:0,warm:false,length:100+Math.random()*(i-5)*20,times:0.4});
//							g_sharedFightLayer.addChild(fireball);
//						}
	        		});	
		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:40000*(1+0.5*(gDifficulty-1)),tag:998},
			{time:0,id:"Gate",x:3600,faction:-1,hp:288875*(1+0.5*(gDifficulty-1)),drop:{gold:{num:150,ct:5}},},
        		
        			{time:0,id:"XiahouDun",lvl:1,x:3000,faction:-1,hp:100000000000,movementSpeed:1.1,attack:1000,tag:1,unitType:"boss",drop:{gold:{num:300,ct:3}},status:{noDismember:1},func:function(unit){unit.stand(1);},},
        			{time:0,id:"LiDian",lvl:1,x:3150,faction:-1,hp:1000000000000,movementSpeed:1.1,attack:700,tag:2,unitType:"boss",/*func:function(){Macro.setUnitSpawn(false)},*/
        					        ai:{
						followMove:{       //护卫ai示例
								getTarget:function(){
									return Macro.unit(1);
								},
								distance:150,
							},	
						actionWhenStand:1,
						followAttack:1,
		        				},
		        	},
		        	{time:1,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
			{time:2,id:"pikemanWei",x:3800,faction:-1,lvl:25,drop:{heal:{percent:0.1,ct:2}},},
//			{time:3,id:"pikemanWei",x:3500,faction:-1,lvl:5,},
			{time:5,id:"shieldmanWei",x:3800,faction:-1,lvl:25,},
//			{time:7,id:"bowmanWei",x:3800,faction:-1,lvl:25,},
//			{time:8,id:"bowmanWei",x:3800,faction:-1,lvl:25,},
//			{time:10,id:"pikemanWei",x:3600,faction:-1,lvl:5,},
			{time:10,id:"pikemanWei",x:3800,faction:-1,lvl:25,drop:{heal:{percent:0.1,ct:2}},},
			{time:12,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
			{time:14,id:"pikemanWei",x:3800,faction:-1,lvl:25},
//			{time:18,id:"shieldmanWei",x:3800,faction:-1,lvl:25,},
//			{time:19,id:"bowmanWei",x:3800,faction:-1,lvl:25,drop:{heal:{percent:0.2,ct:1}},},
//			{time:21,id:"bowmanWei",x:3800,faction:-1,lvl:25,},
			{time:30,id:"pikemanWei",x:3800,faction:-1,lvl:25,drop:{heal:{percent:0.1,ct:2}},},
			{time:32,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
			{time:34,id:"pikemanWei",x:3800,faction:-1,lvl:25},
			
			{time:44,id:"pikemanWei",x:3800,faction:-1,lvl:25},	
			{time:45,id:"shieldmanWei",x:3800,faction:-1,lvl:25,drop:{heal:{percent:0.1,ct:2}},},	
			{time:48,id:"pikemanWei",x:3800,faction:-1,lvl:25},
			{time:50,id:"pikemanWei",x:3800,faction:-1,lvl:25},
				
			{time:60,id:"pikemanWei",x:3800,faction:-1,lvl:25,drop:{heal:{percent:0.1,ct:2}},},
			{time:62,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
			{time:64,id:"pikemanWei",x:3800,faction:-1,lvl:25},
				
			{time:74,id:"pikemanWei",x:3800,faction:-1,lvl:25},	
			{time:75,id:"shieldmanWei",x:3800,faction:-1,lvl:25,drop:{heal:{percent:0.1,ct:2}},},	
			{time:78,id:"pikemanWei",x:3800,faction:-1,lvl:25},
			{time:90,id:"pikemanWei",x:3800,faction:-1,lvl:25},
		],
		[
			
		],
		[	
			{time:0,id:"ZhugeLiang",x:300,faction:1,hp:1000000000000,},	
			{time:0,id:"mageShu",x:330,faction:1,lvl:13,},
			{time:0,id:"mageShu",x:350,faction:1,lvl:13,},
			{time:0,id:"mageShu",x:340,faction:1,lvl:13,},
			{time:0,id:"shieldManShu",x:400,faction:1,lvl:13,},
			{time:0,id:"shieldManShu",x:400,faction:1,lvl:13,},

			{time:0,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
			{time:2,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
//			{time:3,id:"pikemanWei",x:3500,faction:-1,lvl:5,},
			{time:5,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
			{time:7,id:"pikemanWei",x:3800,faction:-1,lvl:25},
			{time:8,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
//			{time:10,id:"pikemanWei",x:3600,faction:-1,lvl:5,},
			{time:10,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
			{time:12,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
			{time:14,id:"pikemanWei",x:3800,faction:-1,lvl:25},
			{time:18,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
			{time:19,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
//			{time:25,id:"pikemanWei",x:3600,faction:-1,lvl:5,},
//			{time:26,id:"shieldmanWei",x:3600,faction:-1,lvl:4,},
			{time:32,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
            	
			{time:34,id:"pikemanWei",x:3800,faction:-1,lvl:25,},			
//			{time:37,id:"bowmanWei",x:3800,faction:-1,lvl:3,},
			
			{time:42,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
			{time:44,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
			{time:47,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
					
			{time:50,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
//          {time:52,id:"bowmanWei",x:3800,faction:-1,lvl:5,},
//          {time:55,id:"bowmanWei",x:3800,faction:-1,lvl:5,},
    		{time:57,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
    		{time:58,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
//          {time:59,id:"bowmanWei",x:3800,faction:-1,lvl:5,},
//    		{time:63,id:"bowmanWei",x:3800,faction:-1,lvl:3,},
    		{time:65,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
//          {time:64,id:"bowmanWei",x:3800,faction:-1,lvl:5,},
//    		{time:67,id:"bowmanWei",x:3800,faction:-1,lvl:3,},
    		{time:67,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
    		{time:69,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
    		{time:70,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
    		{time:75,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
    		{time:76,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
    		{time:78,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
    		{time:80,id:"pikemanWei",x:3800,faction:-1,lvl:25,},

    		{time:85,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
    		{time:86,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
    		{time:90,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
    		{time:91,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
    		{time:94,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
    		{time:95,id:"pikemanWei",x:3800,faction:-1,lvl:25,},
		],		
	],	
	task:[
		
		{
			win:[
				{type:"unitPosition",faction:-1,posX:800,text:"保护公孙瓒回城！",id:"XiahouDun",noText:true,},
			],
			lose:[
				{type:"time",faction:-1,require:150,text:'诱夏侯敦至我城',textNum:true,},
			],
            		func:function(){
//				if(Macro.unit(1))
//					Macro.setUnitHpFrameVisible(Macro.unit(1),false);
				Macro.doLater(5,function(){
//						for(var i=1;i<=10;i++){
//							var fireball=new Ability["fireBall"](g_sharedFightLayer.myhero,{id:"fireBall",num:10,damage:0,warm:false,length:800+Math.random()*(i-5)*100,times:0.4});
//							g_sharedFightLayer.addChild(fireball);
//						}
					Macro.showMessage('靠近夏侯敦以诱敌',7);
				})
            		},
            		update:function(){
            			if(MapConfig.open_0&&Macro.unit(1)){
            				MapConfig.open_0=false;
            				Macro.setUnitHpFrameVisible(Macro.unit(1),false);
					Macro.doLater(0.5,function(){
						Macro.setUnitSpawn(false);
					})
            			}
            			MapConfig.func_1();
			},
		},
		{
			win:[
				{type:"killUnit",faction:-1,posX:100,id:'ZhangLiao',text:"击败左慈",noText:true,},
			],
			lose:[
			],
            		func:function(){

            		},
            		update:function(){
            			MapConfig.func_2();
			},
		},
       	{
			win:[
				{type:"killUnit",faction:-1,posX:100,id:'XiahouDun',text:"击败夏侯敦",},
			],
			lose:[
				
			],
			func:function(){
				g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero,60);
			},
		},
	
	],
	init:function(){
		g_sharedFightLayer.registerEdge(3500,-1)
//		Macro.setCam(cc.p(2000,"current"));
//		Macro.camMoveBy(cc.p(-500,"current"),0,5);
//        var dialog = {
//        	timeToNext : 5,
//         	text : [
//         		
//        		{
//        		0:"喽啰:",
//        		1:"哈哈哈哈哈哈哈哈哈哈哈",
//        			},
//        	]
//        }
//        var func = function(){
//			Macro.setCam(cc.p(VISIBLE_WIDTH/2,"current"));
//            Macro.doLater(function(){
//                                        Macro.showText("示例用弹出文本");
//                                    },2);
//                                       
//                             
//              
//        }
//
//		Dialog.create(5,dialog,func);
	},
	config:{
		disable:{
//			myhero:true,ability:true,
		},
		drop:{rage:{chance:1,num:1},gold:{chance:0.5,num:550,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:2840,gold:0,gem:0},
	}
};