
var MapConfig={
	open:true,
	func_1:function(){
		if(MapConfig.open&&Macro.unit(3)){
			MapConfig.open=false;
			Macro.camMoveTo(cc.p(3300,"current"),1,1);
			Macro.allUnitAction(function(unit){
				if(unit!=Macro.unit(3))
		                        unit.stand(true);
		           });
		           Macro.doLater(1,function(){
		           	   cc.log(11111111);
				Macro.unit(3).playAnim({movementID:"dead2",loop:false,start:9,time:0.1,stunTimeOnFinish:1,stun:true,});
//				Macro.doLater(0.5,function(){
//					Macro.unit(3).stand(true);
//				});
			});		
			Macro.doLater(12,function(){
				Macro.unit(2).setAI(true);
		//		Macro.unit(3).playAnim({movementID:"dead2",loop:0,time:0.5});
			});
		           var dialog = {
				timeToNext : 3.5,
				text : [
			        		{
			        		0:"曹操：我已擒拿吕布，刘备，你说是该杀还是该留？",
			        		},
			        		{
			        		0:"刘备：曹公忘记董卓是死于谁手了吗？吕布无信无义，不可用也。",
			        		},
			        		{
			        		0:"吕布：大耳刘！你害我！不记得那时辕门射戟了吗！！！",
			        		},
			        	]
			} 
			var func = function(){
//				Macro.setUnitHpFrameVisible(Macro.unit(3),false);
				Macro.allUnitAction(function(unit){
//					if(unit==Macro.unit(2))
//		                        		unit.setAI(true);
		            	});
//		            	Macro.unit(2).stand();
				Macro.doLater(2,function(){
					Macro.unit(2).stand(true);
				})
//				Macro.doLater(3,function(){
//					g_sharedTaskManager.nextTask();
//				})
			}
			Dialog.create(41,dialog,func);
			Macro.doLater(4.5,function(){
				Macro.camMoveTo(cc.p(500,"current"),1,1);
				Macro.doLater(4.5,function(){
					Macro.camMoveTo(cc.p(3300,"current"),1,1);
				});
			});
			Macro.doLater(16,function(){
				g_sharedTaskManager.nextTask();
			});
		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:26000*(1+0.5*(gDifficulty-1)),},
			{time:0,id:"Gate",x:3600,faction:-1,hp:132105*(1+0.5*(gDifficulty-1)),drop:{gold:{num:79,ct:5}},},
		
			{time:0,id:"Block",x:2100,hp:19908,faction:-1,deadOnNextStage:1,},
		
			{time:1,id:"shieldmanWei",x:1500,faction:-1,direction:-1,lvl:18,},
			{time:4,id:"pikemanWei",x:2000,faction:-1,direction:-1,lvl:18,},
			{time:5,id:"pikemanWei",x:2300,faction:-1,direction:-1,lvl:18,},
			{time:4,id:"pikemanWei",x:3000,faction:-1,direction:-1,lvl:18,},
//			{time:6,id:"pikemanWei",x:3100,faction:-1,direction:-1,lvl:18,},
			{time:8,id:"pikemanWei",x:3200,faction:-1,direction:-1,lvl:18,},
			{time:9,id:"bowmanWei",x:3200,faction:-1,direction:-1,lvl:18,},

			{time:20,id:"shieldmanWei",x:3000,faction:-1,direction:-1,lvl:18,},
			{time:22,id:"pikemanWei",x:3100,faction:-1,direction:-1,lvl:18,},
//			{time:13,id:"mage",x:3200,faction:-1,direction:-1,lvl:18,},
			{time:24,id:"bowmanWei",x:3200,faction:-1,direction:-1,lvl:18,},

			{time:26,id:"fatManWei",x:3000,faction:-1,direction:-1,lvl:18,},
			{time:28,id:"pikemanWei",x:3100,faction:-1,direction:-1,lvl:18,},
			{time:32,id:"bowmanWei",x:3200,faction:-1,direction:-1,lvl:18,},
			{time:33,id:"bowmanWei",x:3200,faction:-1,direction:-1,lvl:18,},
//			{time:40,id:"specialFatMan",x:2550,faction:-1,lvl:15,},
			{time:40,id:"XuChu",name:"许褚",lvl:1,x:2550,faction:-1,direction:-1,unitType:"boss",drop:{gold:{num:100,ct:3},heal:{percent:0.2,ct:2}},status:{noDismember:1},},
//			{time:45,id:"specialFatMan",x:3800,faction:-1,lvl:15,}
		],
		[
			{time:0,id:"Block",x:2850,hp:19908,faction:-1,deadOnNextStage:1,},	
			
			{time:0,id:"fatManWei",x:3200,faction:-1,lvl:18,drop:{heal:{percent:0.2,ct:1}},},
			{time:1,id:"pikemanWei",x:3300,faction:-1,lvl:18,tag:3,},
			{time:2,id:"pikemanWei",x:3400,faction:-1,lvl:18,},
			{time:3,id:"pikemanWei",x:3500,faction:-1,lvl:18,},
			{time:4,id:"bowmanWei",x:3600,faction:-1,lvl:18,},
			{time:8,id:"pikemanWei",x:3600,faction:-1,lvl:18,},
			{time:10,id:"mageWei",x:3200,faction:-1,lvl:18,drop:{heal:{percent:0.2,ct:1}},},
			{time:9,id:"bowmanWei",x:3800,faction:-1,lvl:18,},
			{time:13,id:"bowmanWei",x:3800,faction:-1,lvl:18,},			
			{time:14,id:"pikemanWei",x:3800,faction:-1,lvl:18,},
			{time:17,id:"pikemanWei",x:3800,faction:-1,lvl:18,},
			{time:18,id:"specialShieldMan",x:3800,faction:-1,lvl:18,},

			{time:22,id:"shieldmanWei",x:3800,faction:-1,lvl:18,},
			{time:23,id:"pikemanWei",x:3800,faction:-1,lvl:18,},
			{time:25,id:"bowmanWei",x:3800,faction:-1,lvl:18,},

			{time:33,id:"pikemanWei",x:3800,faction:-1,lvl:18,},
			{time:35,id:"pikemanWei",x:3800,faction:-1,lvl:18,},
			{time:37,id:"mageWei",x:3800,faction:-1,lvl:18,drop:{heal:{percent:0.2,ct:1}},},

			{time:45,id:"shieldmanWei",x:3800,faction:-1,lvl:18,},
			{time:47,id:"pikemanWei",x:3800,faction:-1,lvl:18,},
			{time:50,id:"bowmanWei",x:3800,faction:-1,lvl:18,},

			{time:55,id:"shieldmanWei",x:3800,faction:-1,lvl:18,},
			{time:60,id:"pikemanWei",x:3800,faction:-1,lvl:18,},
			{time:62,id:"bowmanWei",x:3800,faction:-1,lvl:18,},

			{time:65,id:"pikemanWei",x:3800,faction:-1,lvl:18,},
			{time:68,id:"pikemanWei",x:3800,faction:-1,lvl:18,},
			{time:70,id:"mageWei",x:3800,faction:-1,lvl:18,drop:{heal:{percent:0.2,ct:1}},},
			{time:70,id:"fatManWei",x:3800,faction:-1,lvl:18,},
		],
		[
			{time:0,id:"CaoCao1",x:3500,faction:-1,func:function(unit){unit.stand(1);},tag:1,},
			{time:0,id:"LiuBei",x:400,faction:1,func:function(unit){unit.stand(1);},},
			{time:0,id:"LvBu",x:3100,faction:1,direction:-1,hp:50,unitType:"boss",hp:100000,tag:3,func:function(unit){unit.stand(1);},status:{noDismember:1},},
			{time:0,id:"XiahouDun2",x:3250,faction:-1,attack:10000000,func:function(unit){unit.stand(1);},movementSpeed:0.01,tag:2,prepareTime:0,},
		],
	],		
	task:[
		
		{
//			taskFinishLatency:11,
			win:[
				{type:"killUnit",faction:-1,text:'击败许褚',id:'XuChu'},
			],
			lose:[
//				{type:"unitPosition",faction:-1,posX:3500,text:"别让小兵逃回城门",noText:true,id:'WeiChiHou',},
				/* {if(g_sharedFightLayer.unit(1).pos.x > 3799),id:'general',} */
			],
			func:function(){
				Macro.setGameEdge(0,2200);	
			},
			finishFunc:function(){
				Macro.flee();
			},
		},
       		{
//			taskFinishLatency:10,
			win:[
				{type:"allClear",faction:-1,text:'歼灭曹操中军',textNum:true},
//				{type:"killUnit",faction:-1,text:'击败许褚',id:'XuChu',},
			],
			lose:[
			//	{type:"time",text:'歼灭曹操中军',textNum:true},
			],
			func:function(){
				Macro.setGameEdge(0,3000);	
			},		
	            	update:function(){
//	            		MapConfig.func_1();			
	            	},
		},
		{
			win:[
				{type:"killUnit",faction:-1,text:'击败许褚',id:'DiaoChan',noText:true,},
			],
			lose:[],
			func:function(){
				Macro.setGameEdge(0,3800);	
			},			
	            	update:function(){
	            		MapConfig.func_1();			
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
		drop:{rage:{chance:1,num:1},gold:{chance:0.5,num:250,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:1014,gold:0,gem:0},
	}
};