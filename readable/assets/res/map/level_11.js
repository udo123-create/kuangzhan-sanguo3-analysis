var MapConfig={
	open_1:true,
	open_2:true,
	func_1:function(){
		if(MapConfig.open_1 && Macro.unit(10) && g_sharedFightLayer.myhero &&  Macro.unit(10).pos.x-g_sharedFightLayer.myhero.pos.x<=300){
			MapConfig.open_1=false;
			Macro.showMessage('虎牢关守军倾巢出动',3);
		}
	},
	func_2:function(){
		if(MapConfig.open_2 && Macro.unit(1) && Macro.unit(1).pos.x <= 3500 ){
			Macro.setGameEdge(0,3800)
			Macro.setUnitSpawn(false);
			Macro.camMoveTo(cc.p(3300,"current"),1,1);
			Macro.allUnitAction(function(unit){
	                      	unit.stand(true);
	                  	});
			MapConfig.open_2=false;
	              	var dialog = {
	              		skip:true,
			        	timeToNext : 2,
			         	text : [
			        		{
			        		0:"貂蝉：久闻将军大名，今日终可一战。",
			        		},
			        		{
			        		0:"赵云：......",
			        		},
			        		{
			        		0:"赵云：镇守虎牢关的居然是个女子？！",
			        		},
//			        		{
//			        		0:"貂蝉：小女子还望将军手下留情σvσ",
//			        		},
			        	]
			} 
			var func = function(){
			//	cc.msgbox(22)
				Macro.setUnitSpawn(true);
				Macro.doLater(1,function(){
//					Macro.camMoveTo(cc.p(g_sharedFightLayer.myhero.pos.x,"current"),1,1);
					g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero,60);
		//			Macro.setUnitSpawn(true);
			     		Macro.allUnitAction(function(unit){
			     					//	cc.msgbox(11)
		                     		unit.setAI(true);
		                  		});
				})				
			}
			Dialog.create(10,dialog,func);
            Macro.doLater(1,function(){
				Macro.unit(0.7).castAbility({ability:{id:"Temptation",damage:0,range:550,times:5,}},true);
			}) 
		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:200,faction:1,hp:10000*(1+0.5*(gDifficulty-1)),},
			{time:0,id:"Gate",x:3600,faction:-1,hp:47000*(1+0.5*(gDifficulty-1)),drop:{gold:{num:7,ct:5}},},
			{time:0,id:"Block",x:2800,hp:150000,faction:-1,tag:50,},

			{time:0,id:"pikemanQun",x:2000,faction:-1,lvl:8,},
			{time:0,id:"pikemanQun",x:2300,faction:-1,lvl:8,},
			{time:0,id:"shieldmanQun",x:2500,faction:-1,lvl:8,},
			{time:2,id:"pikemanQun",x:2800,y:140,faction:-1,lvl:8,},
			{time:3,id:"pikemanQun",x:3000,faction:-1,lvl:8,},
			{time:5,id:"pikemanQun",x:3800,y:150,faction:-1,lvl:8,},
			{time:8.5,id:"pikemanQun",x:3800,faction:-1,hp:1000,attack:80,},
			{time:6,id:"bowmanQun",x:3800,faction:-1,lvl:8,},
			{time:8,id:"pikemanQun",x:3800,y:170,faction:-1,lvl:8,},
			{time:9.5,id:"shieldmanQun",x:3800,y:165,faction:-1,hp:1000,attack:80,},

			{time:12,id:"shieldmanQun",x:3800,y:140,faction:-1,tag:10,lvl:8,},
			{time:13,id:"pikemanQun",x:3800,faction:-1,lvl:8,},
			{time:15,id:"pikemanQun",x:3800,y:150,faction:-1,lvl:8,},
			{time:18.5,id:"pikemanQun",x:3800,faction:-1,hp:1000,attack:80,},
			{time:20,id:"shieldmanQun",x:3800,faction:-1,lvl:8,},
			{time:23,id:"pikemanQun",x:3800,y:170,faction:-1,lvl:8,},
			{time:25,id:"pikemanQun",x:3800,y:165,faction:-1,hp:1000,attack:80,},

			{time:28,id:"pikemanQun",x:3800,y:140,faction:-1,lvl:8,},
			{time:29,id:"bowmanQun",x:3800,faction:-1,lvl:8,},
			{time:30,id:"pikemanQun",x:3800,y:150,faction:-1,lvl:8,drop:{heal:{percent:0.1,ct:2}},},
			{time:31.5,id:"shieldmanQun",x:3800,faction:-1,hp:1000,attack:80,},
			{time:33,id:"pikemanQun",x:3800,faction:-1,lvl:8,},
			{time:35,id:"pikemanQun",x:3800,y:170,faction:-1,lvl:8,},
			{time:37.5,id:"shieldmanQun",x:3800,y:165,faction:-1,hp:1000,attack:80,},
		],
		[		
           	{time:0,id:"pikemanQun",x:3000,faction:-1,lvl:8,},
           	{time:1,id:"shieldmanQun",x:3000,faction:-1,lvl:8,},
           	{time:2,id:"bowmanQun",x:3000,faction:-1,lvl:8,},
           	{time:3,id:"pikemanQun",x:3000,faction:-1,lvl:8,},
		
           	{time:5,id:"pikemanQun",x:3000,faction:-1,lvl:8,},
			{time:6,id:"shieldmanQun",x:3000,faction:-1,lvl:8,},
			{time:9,id:"bowmanQun",x:3000,faction:-1,lvl:8,},
			{time:13,id:"pikemanQun",x:3000,faction:-1,lvl:8,},
			{time:16,id:"shieldmanQun",x:3000,faction:-1,lvl:8,},
			{time:20,id:"pikemanQun",x:3000,faction:-1,lvl:8,},
			{time:22,id:"bowmanQun",x:3000,faction:-1,lvl:8,},
			{time:26,id:"shieldmanQun",x:3000,faction:-1,lvl:8,},
			{time:28,id:"pikemanQun",x:3800,faction:-1,lvl:8,},
			{time:30,id:"bowmanQun",x:3800,faction:-1,lvl:8,},

			{time:31-30,id:"DiaoChan",lvl:1,x:3800,faction:-1,unitType:"boss",drop:{gold:{num:15,ct:3}},tag:1,status:{noDismember:1},//func:function(unit){unit.stand(1);}
//			                stage:[ //阶段
//				                    {
//				                        hp:0.7,
//				                        qte:{
//				                                group:[{direction:45,y:290},{direction:90,y:290}],
//				                                onSuccess:{caster:this.myhero,spell:{ability:{id:"SSYJ"}}},
////				                                onFail:{caster:this.myhero,spell:{ability:{id:"SSYJ"}}},
//				                            },
//				                    },
//				                   {
//				                        hp:0.3,
//				                        qte:{
//				                                group:[{direction:180,y:290},{direction:135,y:290}],
//				                                onSuccess:{caster:this.myhero,spell:{ability:{id:"SSYJ"}}},
////				                                onFail:{caster:this.myhero,spell:{ability:{id:"SSYJ"}}},
//				                            },
//				                    },
//				                ],
			},	

			{time:33,id:"pikemanQun",x:3800,faction:-1,lvl:8,},
			{time:34,id:"pikemanQun",x:3800,faction:-1,lvl:8,},
			{time:45,id:"shieldmanQun",x:3900,faction:-1,lvl:8,drop:{heal:{percent:0.1,ct:2}},},
			{time:47,id:"pikemanQun",x:3950,faction:-1,lvl:8,},

			{time:48,id:"pikemanQun",x:4000,faction:-1,lvl:8,},

//			{time:50,id:"shieldmanQun",x:3900,faction:-1,lvl:8,},
//			{time:50,id:"bowmanQun",x:3900,faction:-1,lvl:8,},
//			{time:51,id:"bowmanQun",x:3950,faction:-1,lvl:8,},
//			{time:52,id:"bowmanQun",x:4000,faction:-1,lvl:8,},

			{time:55,id:"pikemanQun",x:3900,faction:-1,lvl:8,},
			{time:57,id:"shieldmanQun",x:3950,faction:-1,lvl:8,drop:{heal:{percent:0.1,ct:2}},},
			{time:59,id:"bowmanQun",x:4000,faction:-1,lvl:8,},

			{time:65,id:"pikemanQun",x:3800,y:150,faction:-1,lvl:8,},
			{time:68,id:"shieldmanQun",x:3800,faction:-1,hp:1000,attack:80,drop:{heal:{percent:0.1,ct:3}},},
			{time:75,id:"pikemanQun",x:3800,faction:-1,lvl:8,},
			{time:77,id:"pikemanQun",x:3800,y:170,faction:-1,lvl:8,},
			{time:90,id:"shieldmanQun",x:3800,y:165,faction:-1,hp:1000,attack:80,drop:{heal:{percent:0.1,ct:3}},},
			{time:93,id:"bowmanQun",x:3800,faction:-1,lvl:8,},
//			{time:105,id:"bowmanQun",x:3800,y:170,faction:-1,lvl:8,},
			{time:108,id:"bowmanQun",x:3800,y:165,faction:-1,hp:1000,attack:80,},
		],
	],	
	task:[		
		{
			win:[
				{type:"allClear",faction:-1,text:'打探虎牢关',},
			],
			lose:[
			],
			func:function(){
				Macro.setGameEdge(0,3000);
			},
			update:function(){
				MapConfig.func_1();
			}
		},
		{
			win:[
				{type:"killUnit",faction:-1,id:'DiaoChan',text:'击败虎牢关守将',},
		
			],
			lose:[
			],
			finishFunc:function(){
				Macro.flee();
			},
		update:function(){
			MapConfig.func_2();
		}
	},
],
	
	init:function(){
		g_sharedFightLayer.registerEdge(3500,-1)       
//		cc.msgbox(1)
//		g_sharedFightLayer.myhero.pos.x = 500;
//		g_sharedFightLayer.setCam(cc.p(2000,null));
//		g_sharedFightLayer.camMoveBy(cc.p(-500,null),0,5);
	},
	config:{
		disable:{
//			myhero:true,ability:true,
		},
//        drop:{gold:{lvl:2,chance:0.3}},
		drop:{rage:{chance:0.5,num:1.2},gold:{chance:0.5,num:70,type:"total"},},
	 	gameEdge:{left:0,right:3700},
        		reward:{exp:315,gold:0,gem:0},
	}
};