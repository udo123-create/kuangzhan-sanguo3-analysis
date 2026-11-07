var MapConfig={
	open1:true,
	func1:function(){
		if(MapConfig.open1 && Macro.unit(1)){
			MapConfig.open1=false;
			
			Macro.allUnitAction(function(unit){
				unit.stand(true);
				if(unit!=g_sharedFightLayer.myhero && unit!=Macro.unit(1) && unit!=Macro.unit(2)){
			            Macro.doLater(1.0,function(){
					          unit.playAnim({movementID:"attack"});
			            })
			            Macro.doLater(2.5,function(){
					          unit.playAnim({movementID:"attack2"});
			            })
			    }
			});							                                            							         
			
			Macro.camFollow(Macro.unit(0))
			
	        var dialog = {
	            skip:true,
		        timeToNext : 1,
				text : [
				        {
				          0:"士兵：喝！",
				        },
				        {
				          0:"士兵：哈！",
				        },
				        {
				          0:"刘备：我军将攻荆南四郡，将士们定要严加操练，不可懈怠。",
				        },
				        {
				          0:"赵云：云必定会加紧练兵，不日即可攻打零陵。",
				        },
				        {
				          0:"张飞：哈哈，我来看看子龙练得如何",
				        },
				       ]
			}
			var func = function(){
			Macro.skipCG();
			}
			Dialog.create(10,dialog,func);
			
			Macro.doLater(3,function(){
			    Macro.camMoveBy(cc.p(-450,0),0,0);
			});
			Macro.doLater(4.0,function(){
				g_sharedFightLayer.myhero.moveTo(999,true);
			});

		}
	},
		
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:8000*(1+0.5*(gDifficulty-1)),},
            {time:0,id:"Gate",x:3600,faction:-1,hp:27130*(1+0.5*(gDifficulty-1)),drop:{gold:{num:2,ct:5}},},
		
			{time:0,id:"LiuBei",x:600,faction:1,lvl:4,tag:1,},
			{time:0,id:"ZhangFei",x:500,faction:1,lvl:4,tag:2,},
			{time:0,id:"pikemanShu_lv20",x:1300,faction:1,lvl:30,direction:-1,tag:0},
			{time:0,id:"pikemanShu_lv20",x:1400,faction:1,lvl:30,direction:-1},
			{time:0,id:"pikemanShu_lv20",x:1500,faction:1,lvl:30,direction:-1},
			{time:0,id:"pikemanShu_lv20",x:1600,faction:1,lvl:30,direction:-1},

		],
	],	
	task:[//cg里面task是不读的
	],
	update:function(){
		MapConfig.func1();
	},
	init:function(){
		g_sharedFightLayer.myhero.pos.x = 1000;
	},
	config:{
		disable:{
		},
	}
};