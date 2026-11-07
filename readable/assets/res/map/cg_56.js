var MapConfig={
	open1:true,
	open2:true,
	open3:true,
	func1:function(){
		if(MapConfig.open1 && Macro.unit(1)){
			MapConfig.open1=false;
			
			Macro.allUnitAction(function(unit){
				unit.stand(true);
			});							                                            							         
			Macro.camFollow(Macro.unit(1))
			
	        var dialog = {
	            skip:true,
		        timeToNext : 1.5,
				text : [
				        {
				          0:"金旋：刘玄德遣大将前来取武陵",
				          1:"          我军需严阵以待",
				        },
				        {
				          0:"巩志：皇叔仁义天下，麾下大将骁勇善战",
				          1:"           不可迎敌，不如纳降为上",
				        },
				        {
				          0:"金旋：大胆，串通外贼，稍后就处置你",
				          1:"           全军听令，出城迎敌！",
				        },
				       ]
			}
			var func = function(){
			    Macro.skipCG();
			}
			Dialog.create(9,dialog,func);
		}
	},
		
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:8000*(1+0.5*(gDifficulty-1)),},
            {time:0,id:"Gate",x:3600,faction:-1,hp:27130*(1+0.5*(gDifficulty-1)),drop:{gold:{num:2,ct:5}},},
		
			{time:0,id:"JinXuan",x:3400,faction:-1,lvl:4,tag:1,},
			{time:0,id:"GongZhi",x:3000,faction:-1,lvl:4,direction:1,tag:2,},
			{time:0,id:"shieldmanWei",x:2950,faction:-1,lvl:41,direction:1},
			{time:0,id:"shieldmanWei",x:2900,faction:-1,lvl:41,direction:1},
			{time:0,id:"mageWei",x:2800,faction:-1,lvl:41,direction:1},

		],
	],	
	task:[
	],
	update:function(){
		MapConfig.func1();
	},
	init:function(){
	},
	config:{
		disable:{
			myhero:true,ability:true,
		},
	}
};