var MapConfig={
	open:true,
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:3525,},
			{time:0,id:"Gate",x:3600,faction:-1,hp:4280,drop:{gold:{num:55,ct:5}},},
			{time:0,id:"GongsunZan",x:1200,faction:1,hp:1200,attack:50,tag:1,},
		],
		[
		],
	],	
	task:[
	],
	update:function(){
		if(MapConfig.open){
		     MapConfig.open=false;
		     Macro.camDisFollow("myhero");
		     Macro.setCam(cc.p(3000,"current"));
		     Macro.doLater(1,function(){
			     Macro.camMoveTo(cc.p(1300,"current"),1,2);
		     });
 		     Macro.allUnitAction(function(unit){
                		unit.setAI(false);
            	     });
	        		var dialog = {
	        		skip:true,
	        		timeToNext : 2.0,
		         	text : [
			        		{
			        		0:"",
			        		},
			        		{
			        		0:"赵云：前方山高林密，透露着一种诡异，云恐有诈。",
			        		},
			        		{
			        		0:"公孙瓒：不错，此处离本部尚远，咱们需加强戒备！",
			        		},
		        		]
		    };
	        var func = function(){
	        		Macro.skipCG();
	    	};
		Dialog.create(8,dialog,func);
	}
	},
	init:function(){
		g_sharedFightLayer.myhero.pos.x = 1000;
	},
	config:{
		disable:{
		},
	}
};