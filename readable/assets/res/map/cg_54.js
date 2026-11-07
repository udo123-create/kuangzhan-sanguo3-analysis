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
				          0:"赵范：听闻刘玄德乃大汉皇叔，更兼智士勇将",
				          1:"       我桂阳能有多少人马？不可迎敌，只可投降！",
				        },
				        {
				          0:"陈应：某请出战。若擒不得赵云，太守再投降不迟。",
				        },
				        {
				          0:"赵范：如此也罢。",
				        },
				       ]
			}
			var func = function(){
			    Macro.skipCG();
			}
			Dialog.create(7,dialog,func);
		}
	},
		
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:8000*(1+0.5*(gDifficulty-1)),},
            {time:0,id:"Gate",x:3600,faction:-1,hp:27130*(1+0.5*(gDifficulty-1)),drop:{gold:{num:2,ct:5}},},
		
			{time:0,id:"ZhaoFan",x:3400,faction:-1,lvl:4,tag:1,},
			{time:0,id:"ChenYing",x:3000,faction:-1,lvl:4,direction:1,tag:2,},
			{time:0,id:"BaoLong",x:3100,faction:-1,lvl:4,direction:1,tag:3},

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