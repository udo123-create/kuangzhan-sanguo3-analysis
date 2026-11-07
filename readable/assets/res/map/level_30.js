
var MapConfig={
	open_1:true,   
	open_2:true,         
	func_1:function(){
		if(MapConfig.open_1 && g_sharedFightLayer.myhero && g_sharedFightLayer.myhero.pos.x>=1200){
			MapConfig.open_1=false;
			Macro.setUnitSpawn(false);
			g_sharedFightLayer.createUnit({time:0,id:"GhostLvBu",lvl:1,tag:1,unitType:"boss",x:3400,faction:-1,drop:{gold:{num:200,ct:3}},
                hp:45000,
                spell:SpellConfig.GhostLvBu_Stage1,
                stage:[
                    {
                        hp:0.8,spell:SpellConfig.GhostLvBu_Stage2,
                    },
                    {
                        hp:0.5,spell:SpellConfig.GhostLvBu_Stage3,
                    },  
                    {
                        hp:0.25,spell:SpellConfig.GhostLvBu_Stage4,func:function(unit){g_sharedFightLayer.setBackgroundColorTrans(cc.c3b(200,200,200)); unit.chat(["没有人可以打败我！没有人！"],2)},
                    },  
                ],
                ai:{
                    tryToKill:{target:function(){return g_sharedFightLayer && g_sharedFightLayer.myhero;}},
                    seekEnemyToAttack:1,
                    Ability:1,
                },
				func:function(unit){
//                    unit.addChild(Effect.SpinParticle(0,unit.midHeight,70,0));
//                    unit.addChild(Effect.SpinParticle(0,unit.midHeight,-70,0));
//                    Effect.SpinParticleRise(unit);
                   var func = function(){
                        Effect.SpinParticleRise(unit,null,70)
                         var shadow = Effect.unitShowOut(unit);
    					shadow.unit.applyParticle({head:{id:"blackfire"},chest:{id:"blackfire"},left_arm:{id:"blackfire"},right_arm:{id:"blackfire"}});
    					shadow.unit.setOpacity(200);
    					shadow.unit.setColor(cc.c3b(50,50,50));
                   }
                   Macro.doLater(1,func);
                    	
                    unit.setVisible(false);
                    g_sharedTaskManager.nextTask();
            		var dialog = {
        				timeToNext : 3,
        				text : [
        			        		{
        			        		0:"吕布：白门楼那日刘备害我，现在我就要让你们偿命！",
        			        		},
        			        		{
        			        		0:"赵云：什么？！",
        			        		},
        			        	]
        			} 
                    Macro.bossComeOutCgStart(unit,3300,4.5,function(){unit.chat(["这场对决会让你明白谁是天下无双！"],2);},dialog);
                    var func1 = function(){
//                        unit.setVisible(true);
//                        unit.castAbility({ability:{id:"Leap",anim:{movementID:"attack2",time:1.8,stun:true,start:5,speed:0.5}}},true);
                    }
                    
                    Macro.schedule(unit,func1,1,1);
					unit.stand(1);
					unit.applyParticle({head:{id:"blackfire"},chest:{id:"blackfire"},left_arm:{id:"blackfire"},right_arm:{id:"blackfire"}});
					unit.setOpacity(200);
					unit.setColor(cc.c3b(50,50,50));
                    		},
                		});
		}
	},
	func_2:function(){
		if(MapConfig.open_2&&Macro.unit(1)&&Macro.unit(1).hp<=Macro.unit(1).maxHp*0.5){
			MapConfig.open_2=false;
			Macro.setUnitSpawn(false);
			Macro.allUnitAction(function(unit){
				unit.stand(true);
			})
			var dialog = {
			        	timeToNext : 3.5,
                        skip:true,
				text : [
			        		{
			        		    0:"赵云：白门楼那日主公说得没有错，你确实背信弃义。",
			        		},
			        		{
			        		    0:"鬼吕布：忠义！忠义？我吕奉先天下无双，",
			        		    1:"                 在这乱世存活，靠得从不是什么狗屁忠义！",
			        		},
			        		{
			        		    0:"鬼吕布：我背信弃义，总好过你们这群满口仁义道德的伪君子！！！",
			        		},
			        	]
			} 
			var func = function(){
				Macro.allUnitAction(function(unit){
					unit.setAI(true);
				})	
				Macro.setUnitSpawn(true);
				g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero);
			}
			Dialog.create(14.5,dialog,func);			
		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:40000*(1+0.5*(gDifficulty-1)),tag:998},
			{time:0,id:"Gate",x:3600,faction:-1,hp:200000*(1+0.5*(gDifficulty-1)),drop:{gold:{num:100,ct:5}},},
			{time:0,id:"Block",x:3000,hp:1345280000,faction:-1,tag:10},
			{time:0,id:"shieldmanQun",x:1200,faction:-1,lvl:20},	
			{time:1,id:"pikemanQun",x:1800,faction:-1,lvl:20},	
			{time:2,id:"pikemanQun",x:1800,faction:-1,lvl:20},
			{time:2,id:"bowmanQun",x:2000,faction:-1,lvl:20},	
			{time:2,id:"bowmanQun",x:2100,faction:-1,lvl:20},	

			{time:0,id:"shieldmanQun",x:3800,faction:-1,lvl:20},	
			{time:0,id:"pikemanQun",x:2800,faction:-1,lvl:20},
			{time:0,id:"fatManQun",x:2000,faction:-1,lvl:20},	
			{time:0,id:"pikemanQun",x:3800,faction:-1,lvl:20},
			{time:1,id:"bowmanQun",x:3800,faction:-1,lvl:20},	
			{time:1,id:"mageQun",x:3800,faction:-1,lvl:20},	

			{time:9,id:"shieldmanQun",x:3800,faction:-1,lvl:20},	
			{time:11,id:"shieldmanQun",x:3800,faction:-1,lvl:20},	
			{time:15,id:"bowmanQun",x:3800,faction:-1,lvl:20},	
			{time:16,id:"bowmanQun",x:3800,faction:-1,lvl:20},	
			{time:18,id:"bowmanQun",x:3800,faction:-1,lvl:20},
				
			{time:20,id:"shieldmanQun",x:3800,faction:-1,lvl:20},	
			{time:21,id:"pikemanQun",x:3800,faction:-1,lvl:20},	
			{time:22,id:"pikemanQun",x:3800,faction:-1,lvl:20},	

			{time:26,id:"shieldmanQun",x:3800,faction:-1,lvl:20},	
			{time:27,id:"pikemanQun",x:3800,faction:-1,lvl:20},	
			{time:28,id:"pikemanQun",x:3800,faction:-1,lvl:20},	
		],
		[

			{time:12,id:"fatManQun",x:3800,faction:-1,lvl:20},
			{time:13,id:"shieldmanQun",x:3800,faction:-1,lvl:20},	
			{time:14,id:"shieldmanQun",x:3800,faction:-1,lvl:20},	
			{time:18,id:"bowmanQun",x:3800,faction:-1,lvl:20},	
			{time:19,id:"bowmanQun",x:3800,faction:-1,lvl:20},	
			{time:20,id:"bowmanQun",x:3800,faction:-1,lvl:20},	

			{time:20,id:"fatManQun",x:3800,faction:-1,lvl:20},
			{time:28,id:"shieldmanQun",x:3800,faction:-1,lvl:20},	
			{time:29,id:"shieldmanQun",x:3800,faction:-1,lvl:20},	
			{time:33,id:"bowmanQun",x:3800,faction:-1,lvl:20},	
			{time:34,id:"bowmanQun",x:3800,faction:-1,lvl:20},	
			{time:35,id:"bowmanQun",x:3800,faction:-1,lvl:20},	

			{time:20,id:"fatManQun",x:3800,faction:-1,lvl:20},
			{time:28,id:"shieldmanQun",x:3800,faction:-1,lvl:20},	
			{time:29,id:"shieldmanQun",x:3800,faction:-1,lvl:20},	
			{time:33,id:"bowmanQun",x:3800,faction:-1,lvl:20},	
			{time:34,id:"bowmanQun",x:3800,faction:-1,lvl:20},	
			{time:35,id:"bowmanQun",x:3800,faction:-1,lvl:20},	

			{time:41,id:"shieldmanQun",x:3800,faction:-1,lvl:20,},	
			{time:42,id:"shieldmanQun",x:3800,faction:-1,lvl:20,},	
			{time:45,id:"mageQun",x:3800,faction:-1,lvl:20,},	

			{time:47,id:"pikemanQun",x:3800,faction:-1,lvl:20},	
			{time:48,id:"pikemanQun",x:3800,faction:-1,lvl:20},	

			{time:52,id:"bowmanQun",x:3800,faction:-1,lvl:20},	
			{time:53,id:"bowmanQun",x:3800,faction:-1,lvl:20},	
		],
	],		

	
	task:[
		
		{
			taskFinishLatency:0,
			win:[
				{type:"killUnit",faction:-1,text:'前去寻找怨气的源头',id:'YanLiangWenChou',noText:true,},
			],
			lose:[
				{type:"time",faction:1,require:63,text:'寻找怨气的源头',textNum:true,},
			],
		    func:function(){
		    	
		    },
			update:function(){
				MapConfig.func_1();
			},
        
		},	
       	{
			taskTextShowLatency:8,
			win:[
					{type:"killUnit",faction:-1,id:"GhostLvBu",text:'击败鬼吕布',},
				],
			lose:[
				
				],	
			func:function(){
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
		drop:{rage:{chance:1,num:1},gold:{chance:0.5,num:400,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:1774,gold:0,gem:0},
	}
};