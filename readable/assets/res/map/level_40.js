var MapConfig={
	open:true,
	open_1:true,      
	func_1:function(){
		if(MapConfig.open&&Macro.unit(1)){
			MapConfig.open=false;
			Macro.setUnitSpawn(false);
			Macro.camMoveTo(cc.p(3300,"current"),1,1);
			Macro.allUnitAction(function(unit){
				unit.stand(true);
			})
			var dialog = {
			        	timeToNext : 3,
				text : [
			        		{
			        		0:"甄姬：到此为止吧，赵将军。",
			        		},
			        		{
			        		0:"甄姬：主公爱惜人才，不杀你。世子却担心养虎为患。",
			        		1:"             看来这出尔反尔的恶名，只能由我来了？",
			        		},
			        	]
			} 
			var func = function(){
                Macro.unit(1).chat(["我会让你死的很痛快!"]);
				Macro.allUnitAction(function(unit){
					unit.setAI(true);
				})	
				Macro.setUnitSpawn(true);
				g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero);
//				Macro.doLater(1,function(){
////					g_sharedTaskManager.nextTask();
//				})
			}
			Dialog.create(9,dialog,func);
		}
	},
	func_2:function(){
//		if(Macro.unit(1) && MapConfig.open_1 && Macro.unit(1).hp<=Macro.unit(1).maxHp*0.8){
//			MapConfig.open_1=false;
//			Macro.setUnitSpawn(false);
//			Macro.allUnitAction(function(unit){
//				unit.stand(true);
//			})
//			var dialog = {
//			        	timeToNext : 3,
//				text : [
//			        		{
//			        		0:"赵云：你将来也会为人母，怎能忍心对一个孩子痛下杀手？！",
//			        		},
//			        		{
//			        		0:"甄姬：若不是那时子恒救我，甄姬难活到今天。何谈为人母？",
//			        		1:"             子恒要你们死，我绝不会心软。",
//			        		},
//			        	]
//			}
//			var func = function(){
//				Macro.allUnitAction(function(unit){
//					unit.setAI(true);
//				})	
//				Macro.setUnitSpawn(true);
//				g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero);
//			}
//			Dialog.create(9,dialog,func); 
//		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:50000*(1+0.5*(gDifficulty-1)),},
			{time:0,id:"Gate",x:3600,faction:-1,hp:405190*(1+0.5*(gDifficulty-1)),drop:{gold:{num:170,ct:5}},},
//			{time:0,id:"pikemanWei",x:1800,faction:-1,lvl:30},
//			{time:0,id:"shieldmanWei",x:2000,faction:-1,lvl:30},
//			{time:0,id:"pikemanWei",x:2500,faction:-1,lvl:30},
//			{time:0,id:"pikemanWei",x:2800,faction:-1,lvl:30},
//			{time:0,id:"bowmanWei",x:3000,faction:-1,lvl:30},
//		
//			{time:1,id:"pikemanWei",x:3800,faction:-1,lvl:30},
//			{time:3,id:"shieldmanWei",x:3800,faction:-1,lvl:30},
//			{time:5,id:"pikemanWei",x:3800,faction:-1,lvl:30},
//			{time:8,id:"pikemanWei",x:3800,faction:-1,lvl:30},
//			{time:10,id:"bowmanWei",x:3800,faction:-1,lvl:30,drop:{heal:{percent:0.1,ct:3}},},
//			
//			{time:11,id:"pikemanWei",x:3800,faction:-1,lvl:30},
//			{time:13,id:"shieldmanWei",x:3800,faction:-1,lvl:30},
//			{time:15,id:"pikemanWei",x:3800,faction:-1,lvl:30},
//			{time:18,id:"pikemanWei",x:3800,faction:-1,lvl:30},
//			{time:20,id:"bowmanWei",x:3800,faction:-1,lvl:30},
//			
//			{time:21,id:"mageWei",x:3800,faction:-1,lvl:30},
//			{time:23,id:"shieldmanWei",x:3800,faction:-1,lvl:30,drop:{heal:{percent:0.1,ct:3}},},
//			{time:25,id:"mageWei",x:3800,faction:-1,lvl:30},
//			{time:28,id:"pikemanWei",x:3800,faction:-1,lvl:30},
//			{time:30,id:"fatWei",x:3800,faction:-1,lvl:30},	
//		
			{time:10,id:"ZhenJi",lvl:1,x:3300,moveSpeed:7,faction:-1,unitType: "boss",tag:1,status:{noDismember:1},drop:{gold:{num:150,ct:3}},
                    hp:90000,
                    spell:SpellConfig.ZhenJi_Stage0,
                    ai:{
//                        tryToKill:{target:function(){return g_sharedFightLayer && g_sharedFightLayer.myhero;}},
//                        seekEnemyToAttack:1,
                        Ability:1,
                    },
                    func:function(unit){
                        unit.setInvisible(true);
                        unit.setHpFrameVisible(false);
                        Macro.schedule(unit,function(){
                            unit.nextStage();
                            var ai ={
                                tryToKill:{target:function(){return g_sharedFightLayer && g_sharedFightLayer.myhero;}},
                                seekEnemyToAttack:1,
                                Ability:1,
                            }
                            unit.initAI(ai);
                            
                    		var dialog = {
                				timeToNext : 3,
                				text : [
                			        		{
                			        		0:"甄姬：赵云果然身手不凡，那我稍微认真一点罢！",
                			        		},
                			        	]
                			} 
                            Macro.bossComeOutCgStart(unit,unit.pos.x,3.5,function(){MapConfig.func_1();},dialog);                          
                            g_sharedTaskManager.nextTask();
                            Macro.schedule(unit,function(){
                                unit.setHpFrameVisible(true);
                                unit.setInvisible(false);
                                unit.castAbility({ability:{id:"Leap",anim:{movementID:"attack2",time:1.8,stun:true,start:5,speed:0.5}}},true);
                                
                            },2,1);
                        },20,1);
                        Macro.showMessage("有埋伏！注意暗器！");
                    },
                    stage:[
                        {hp:0.9,spell:SpellConfig.ZhenJi_Stage1,},
                        {hp:0.5,spell:SpellConfig.ZhenJi_Stage2,},
                    ],
                },
		],
//		[
//
//			{time:1,id:"pikemanWei",x:3800,faction:-1,lvl:30},
//			{time:3,id:"shieldmanWei",x:3800,faction:-1,lvl:30},
//			{time:5,id:"pikemanWei",x:3800,faction:-1,lvl:30,drop:{heal:{percent:0.1,ct:2}},},
//			{time:8,id:"pikemanWei",x:3800,faction:-1,lvl:30},
//			{time:10,id:"bowmanWei",x:3800,faction:-1,lvl:30},
//			
//			{time:11,id:"pikemanWei",x:3800,faction:-1,lvl:30},
//			{time:13,id:"shieldmanWei",x:3800,faction:-1,lvl:30},
//			{time:15,id:"pikemanWei",x:3800,faction:-1,lvl:30},
//			{time:18,id:"pikemanWei",x:3800,faction:-1,lvl:30},
//			{time:20,id:"bowmanWei",x:3800,faction:-1,lvl:30,drop:{heal:{percent:0.1,ct:2}},},
//			
//			{time:21,id:"mageWei",x:3800,faction:-1,lvl:30},
//		],
	],		

	
	task:[
		{
			taskFinishLatency:0,
			win:[
				{type:"killUnit",faction:-1,id:"GhostLvBu",require:30,text:'探查此地',},
			],
			lose:[
				
			],
		   	func:function(){
		    	
		    	},
			update:function(){
//				MapConfig.func_1();
			},
        
		},
       	{
			taskTextShowLatency:0,
			win:[
					{type:"killUnit",faction:-1,text:'击败甄姬',id:'ZhenJi',},
				],
			lose:[
				
				],	
			func:function(){
				g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero,10);
			},
			finishFunc:function(){
				Macro.flee();
			},
			update:function(){
				MapConfig.func_2();
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
		drop:{rage:{chance:1,num:1},gold:{chance:0.5,num:660,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:4555,gold:0,gem:0},
	}
};