var MapConfig={
	open:true,
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:3525,},
			{time:0,id:"Gate",x:3600,faction:-1,hp:4280,drop:{gold:{num:55,ct:5}},},
			{time:0,id:"GongsunZan",x:1500,faction:1,direction:-1,hp:100,attack:50,tag:1,},
		],
		[
		],
	],	
	task:[
	],
	update:function(){
		if(MapConfig.open && Macro.unit(1)){
		     MapConfig.open=false;
 		     Macro.allUnitAction(function(unit){
                		unit.setAI(false);
             	     });
	        	var dialog = {
	        		skip:true,
	        		timeToNext : 2.5,
		         	text : [
			        		{
			        		0:"公孙瓒：城中急报，袁绍趁我军征讨黄巾军之时，偷袭我城",
			        		},
			        		{
			        		0:"赵云：公孙兄放心，子龙这就回城迎战袁军",
			        		},
		        		]
		    };
	        var func = function(){
	        		Macro.skipCG();
	    	};
		Dialog.create(6.5,dialog,func);
		}
	},
	init:function(){
		g_sharedFightLayer.myhero.pos.x = 1200;
		Macro.camFollow(g_sharedFightLayer.myhero);
	},
	config:{
		disable:{
		},
	}
};