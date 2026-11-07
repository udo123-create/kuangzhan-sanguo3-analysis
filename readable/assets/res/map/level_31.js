
var MapConfig={
	open:true,
	open_1:true,
	open_2:true,
	open_3:true,
	open_4:true,
	func_1:function(){
		if(MapConfig.open&&Macro.unit(1)){
			MapConfig.open=false;
			Macro.camMoveTo(cc.p(3300,"current"),1,1);
			Macro.allUnitAction(function(unit){
				unit.stand(true);
	                  	});
		           var dialog = {
		           	skip:true,
				timeToNext : 3.5,
				text : [
			        		{
			        		0:"曹操：徐庶竟然能破这八门金锁阵，归了刘备，真是可惜啊......",
			        		},
			        		{
			        		0:"程昱：徐庶虽在刘备营下，丞相要用，召来不难。",
			        		},
			        		{
			        		0:"曹操：此话怎讲？",
			        		},
				]
			} 
			var func = function(){
				Macro.doLater(1,function(){
					g_sharedTaskManager.nextTask();
				})
			}
			Dialog.create(11,dialog,func);
		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:40000*(1+0.5*(gDifficulty-1)),},
			{time:0,id:"Block",x:1900,hp:218830*(1+0.5*(gDifficulty-1)),faction:-1,tag:11,},
			{time:0,id:"Gate",x:3600,faction:-1,hp:210000,drop:{gold:{num:140,ct:5}},},
			{time:0,id:"shieldmanWei",x:1200,faction:-1,direction:-1,lvl:21,},
			{time:0,id:"shieldmanWei",x:1500,faction:-1,direction:-1,lvl:21,},
			{time:0,id:"pikemanWei",x:2300,faction:-1,direction:-1,lvl:21,},
			{time:0,id:"pikemanWei",x:3000,faction:-1,direction:-1,lvl:21,drop:{heal:{percent:0.1,ct:2}},},
			{time:6,id:"bowmanWei",x:3100,faction:-1,direction:-1,lvl:21,},
			{time:8,id:"bowmanWei",x:3200,faction:-1,direction:-1,lvl:21,},
			{time:9,id:"bowmanWei",x:3200,faction:-1,direction:-1,lvl:21,},

			{time:20,id:"shieldmanWei",x:3000,faction:-1,direction:-1,lvl:21,},
			{time:22,id:"pikemanWei",x:3100,faction:-1,direction:-1,lvl:21,},
			{time:13,id:"mageWei",x:3200,faction:-1,direction:-1,lvl:17,drop:{gold:{num:300,ct:2}}},
			{time:24,id:"bowmanWei",x:3200,faction:-1,direction:-1,lvl:21,},

			{time:26,id:"fatManWei",x:3000,faction:-1,direction:-1,lvl:21,drop:{heal:{percent:0.1,ct:2}},},
			{time:28,id:"pikemanWei",x:3100,faction:-1,direction:-1,lvl:21,},
			{time:32,id:"bowmanWei",x:3200,faction:-1,direction:-1,lvl:21,},
			{time:33,id:"bowmanWei",x:3200,faction:-1,direction:-1,lvl:21,},
				
			{time:50,id:"pikemanWei",x:2300,faction:-1,direction:-1,lvl:21,},
			{time:50,id:"pikemanWei",x:3000,faction:-1,direction:-1,lvl:21,},
			{time:56,id:"bowmanWei",x:3100,faction:-1,direction:-1,lvl:21,},
			{time:58,id:"bowmanWei",x:3200,faction:-1,direction:-1,lvl:21,},
			{time:59,id:"bowmanWei",x:3200,faction:-1,direction:-1,lvl:21,},

			{time:80,id:"shieldmanWei",x:3000,faction:-1,direction:-1,lvl:21,},
			{time:82,id:"pikemanWei",x:3100,faction:-1,direction:-1,lvl:21,},
			{time:83,id:"mageWei",x:3200,faction:-1,direction:-1,lvl:17,drop:{gold:{num:300,ct:2}}},
			{time:84,id:"bowmanWei",x:3200,faction:-1,direction:-1,lvl:21,},

			{time:96,id:"fatManWei",x:3000,faction:-1,direction:-1,lvl:21,drop:{heal:{percent:0.1,ct:2}},},
			{time:98,id:"pikemanWei",x:3100,faction:-1,direction:-1,lvl:21,},
			{time:102,id:"bowmanWei",x:3200,faction:-1,direction:-1,lvl:21,},
			{time:103,id:"bowmanWei",x:3200,faction:-1,direction:-1,lvl:21,},
		],
		[
			{time:0,id:"Block",x:2900,hp:200000,faction:-1,tag:12,},
			{time:1,id:"fatManWei",x:3300,faction:-1,lvl:21,},
			{time:2,id:"pikemanWei",x:3400,faction:-1,lvl:21,},
			{time:3,id:"pikemanWei",x:3500,faction:-1,lvl:21,},
			{time:4,id:"bowmanWei",x:3600,faction:-1,lvl:21,},
			{time:8,id:"pikemanWei",x:3600,faction:-1,lvl:21,drop:{heal:{percent:0.1,ct:2}},},
			{time:9,id:"bowmanWei",x:3800,faction:-1,lvl:21,},
			{time:13,id:"bowmanWei",x:3800,faction:-1,lvl:21,},			
			{time:14,id:"pikemanWei",x:3800,faction:-1,lvl:21,},
			{time:17,id:"pikemanWei",x:3800,faction:-1,lvl:21,},
			{time:19,id:"pikemanWei",x:3800,faction:-1,lvl:21,},

			{time:22,id:"shieldmanWei",x:3800,faction:-1,lvl:21,},
			{time:23,id:"pikemanWei",x:3800,faction:-1,lvl:21,},
			{time:25,id:"bowmanWei",x:3800,faction:-1,lvl:21,},

			{time:33,id:"pikemanWei",x:3800,faction:-1,lvl:21,},
			{time:35,id:"pikemanWei",x:3800,faction:-1,lvl:21,},
			{time:37,id:"mageWei",x:3800,faction:-1,lvl:21,},

			{time:45,id:"shieldmanWei",x:3800,faction:-1,lvl:21,},
			{time:47,id:"pikemanWei",x:3800,faction:-1,lvl:21,},
			{time:50,id:"bowmanWei",x:3800,faction:-1,lvl:21,},

			{time:55,id:"shieldmanWei",x:3800,faction:-1,lvl:21,},
			{time:60,id:"pikemanWei",x:3800,faction:-1,lvl:21,},
			{time:62,id:"bowmanWei",x:3800,faction:-1,lvl:21,},

			{time:65,id:"pikemanWei",x:3800,faction:-1,lvl:21,},
			{time:68,id:"pikemanWei",x:3800,faction:-1,lvl:21,},
			{time:70,id:"mageWei",x:3800,faction:-1,lvl:21,},
			{time:70,id:"fatManWei",x:3800,faction:-1,lvl:21,},
				
			{time:85,id:"shieldmanWei",x:3800,faction:-1,lvl:21,},
			{time:87,id:"pikemanWei",x:3800,faction:-1,lvl:21,},
			{time:90,id:"bowmanWei",x:3800,faction:-1,lvl:21,},

			{time:105,id:"shieldmanWei",x:3800,faction:-1,lvl:21,},
			{time:107,id:"pikemanWei",x:3800,faction:-1,lvl:21,},
			{time:108,id:"bowmanWei",x:3800,faction:-1,lvl:21,drop:{heal:{percent:0.1,ct:5}},},
		],
		[
			{time:4,id:"pikemanWei",x:3600,faction:-1,lvl:21,},
			{time:5,id:"pikemanWei",x:3600,faction:-1,lvl:21,},
			{time:6,id:"mageWei",x:3600,faction:-1,lvl:21,},
			{time:7,id:"bowmanWei",x:3600,faction:-1,lvl:21,},
			{time:8,id:"pikemanWei",x:3600,faction:-1,lvl:21,drop:{heal:{percent:0.1,ct:3}},},
			{time:9,id:"bowmanWei",x:3800,faction:-1,lvl:21,},
			{time:13,id:"bowmanWei",x:3800,faction:-1,lvl:21,},			
			{time:14,id:"pikemanWei",x:3800,faction:-1,lvl:21,},
			{time:17,id:"pikemanWei",x:3800,faction:-1,lvl:21,},
			{time:19,id:"fatManWei",x:3800,faction:-1,lvl:21,},
			{time:22,id:"bowmanWei",x:3800,faction:-1,lvl:21,},
			{time:25,id:"bowmanWei",x:3800,faction:-1,lvl:21,},			
			{time:29,id:"pikemanWei",x:3800,faction:-1,lvl:21,},
			{time:30,id:"pikemanWei",x:3800,faction:-1,lvl:21,},
			{time:38,id:"CaoRen",name:"曹仁",lvl:1,x:3550,faction:-1,direction:-1,unitType:"boss",drop:{gold:{num:50,ct:3}},
				hp:36000*(0.5*gDifficulty*gDifficulty-gDifficulty+1.5),attack:1550*(0.5*gDifficulty*gDifficulty-gDifficulty+1.5),
				ability:{
					     ability:{id:"moonChopped",damage:2500,range:300,},cooldown:12,
		                 config:{castTime:1.5,
		                 	 alert:{type:"direction",width:1000},
            	                  anim:{movementID:"attack17",speed:0.22,loop:false,start:0,time:2.5,},
            	                  anim2:{movementID:"attack17",speed:0.6,loop:false,start:13,stun:true,
                                         child:{movementID:"stand",start:0,stun:true,stunTimeOnFinish:0.3}
            	                        },
		            	},
			    },
			},
		],
		[
			{time:0,id:"CaoCao2",x:3500,y:160,faction:-1,func:function(unit){unit.stand(1);},tag:1,},
			{time:0,id:"ChengYu",x:3600,y:150,faction:-1,func:function(unit){unit.stand(1);},},
		],
	],		
	task:[
		
		{
//			taskFinishLatency:11,
			win:[
				{type:"killUnit",faction:-1,text:'击破生门',id:'Block'},
			],
			lose:[
//				{type:"unitPosition",faction:-1,posX:3500,text:"别让小兵逃回城门",noText:true,id:'WeiChiHou',},
				/* {if(g_sharedFightLayer.unit(1).pos.x > 3799),id:'general',} */
			],
			func:function(){
				Macro.setGameEdge(0,2000);	
			},
			update:function(){
				if(MapConfig.open_1&&Macro.unit(11)&&Macro.unit(11).hp<=0) {
					MapConfig.open_1=false;
					g_sharedTaskManager.nextTask();
				}
			},
			finishFunc:function(){
				Macro.flee();
			},
		},
       		{
//			taskFinishLatency:10,
			win:[
				{type:"killUnit",faction:-1,text:'击破景门',id:'Block1'},
//				{type:"killUnit",faction:-1,text:'击败许褚',id:'XuChu',},
			],
			lose:[],
			func:function(){
				Macro.setGameEdge(0,3000);	
			},		
//	            	update:function(){
////	            		MapConfig.func_1();			
//	            	},
			update:function(){
				if(MapConfig.open_2&&Macro.unit(12)&&Macro.unit(12).hp<=0) {
					MapConfig.open_2=false;
//					Macro.setUnitSpawn(false);
//                    Macro.flee();
                   Macro.doLater(2,function(){
					 g_sharedTaskManager.nextTask();
				   });
				}
				if(MapConfig.open_3&&Macro.unit(12)&&Macro.unit(12).hp<=Macro.unit(12).maxHp*0.3) {
					MapConfig.open_3=false;
					Macro.setUnitSpawn(false);
                    Macro.flee();
				}
			},
			finishFunc:function(){
//				Macro.flee();
			},
		},
		{
//			taskFinishLatency:10,
//            taskTextShowLatency:2,
			win:[
				{type:"allClear",faction:-1,text:'瓦解敌阵',textNum:true,},
//				{type:"killUnit",faction:-1,text:'击败许褚',id:'XuChu',},
			],
			lose:[],
			func:function(){
				Macro.setGameEdge(0,3800);	
			},		
	            	update:function(){
				if(MapConfig.open_4) {
					MapConfig.open_4=false;
					Macro.setUnitSpawn(true);
				}
	            	},
		},
		{
			win:[
				{type:"killUnit",faction:-1,text:'击败"虎侯"许褚',id:'XuChu',noText:true,},
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
		drop:{rage:{chance:1,num:1},gold:{chance:0.5,num:450,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:1949,gold:0,gem:0},
	}
};