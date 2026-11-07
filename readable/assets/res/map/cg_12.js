var MapConfig={
	open:true,
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:3525,},
			{time:0,id:"Gate",x:3600,faction:-1,hp:4280,drop:{gold:{num:55,ct:5}},},
			{time:0,id:"GaoShun",x:1500,faction:-1,hp:10000,attack:50,tag:1,},
            {time:0,id:"shieldmanQun",x:1400,faction:-1,hp:10000,attack:50,},
        	{time:0,id:"bowmanQun",x:1400,faction:-1,hp:10000,attack:50,},
        	{time:0,id:"fatManQun",x:1400,faction:-1,hp:10000,attack:50,},
		],
	],	
	task:[
	],
	update:function(){
		if(MapConfig.open && Macro.unit(1)){
		     MapConfig.open=false;
		     Macro.allUnitAction(function(unit){
				unit.stand(true);
	         	});
 	         Macro.camMoveTo(cc.p(1400,"current"),1,1);
		     var dialog = {
		         skip:true,
			     timeToNext : 2,
			     text : [
			        {
			        0:"赵云：前关镇守女将已战败，高将军，速速弃关投降吧！"
			        },
			        {
				  	0:"高顺：黄毛小儿休得惑乱军心！"
				  	}
			     ]
		    };
		      var func = function(){
				Macro.skipCG();
			};
			Dialog.create(6.5,dialog,func);
		}
},
	init:function(){
//		cc.msgbox(1)
//		g_sharedFightLayer.myhero.pos.x = 500;
//		g_sharedFightLayer.setCam(cc.p(2000,null));
//		g_sharedFightLayer.camMoveBy(cc.p(-500,null),0,5);
	},
	config:{
		disable:{
//			myhero:true,ability:true,
				},
			}
};