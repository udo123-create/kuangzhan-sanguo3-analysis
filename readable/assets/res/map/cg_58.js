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
				          0:"鲁肃：曹操领兵下江南，实为图皇叔",
				          1:"         东吴退曹而救之，荆州九郡，当归东吴",
				        },
				        {
				          0:"周瑜：哼，可恨他们用诡计夺占荆襄",
				          1:"          如今还想多长沙，一定不能让他们得逞",
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
		
			{time:0,id:"LuSu",x:3400,faction:-1,lvl:4,tag:1,},
			{time:0,id:"ZhouYu58",x:3300,faction:-1,lvl:4,tag:2,},

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