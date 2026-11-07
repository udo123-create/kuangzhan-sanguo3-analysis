var MapConfig={
	open:true,
	open_1:true,
	open_2:true,
	func_1:function(){
		if(MapConfig.open_1 && Macro.unit(1)){
			MapConfig.open_1=false;
			Macro.setUnitHpFrameVisible(Macro.unit(1),false);
			Macro.setCam(cc.p(3300,"current"));
			Macro.doLater(0.1,function(){
				g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero);
			});
			Macro.unit(1).setAI(false);
			Macro.unit(1).moveTo(300);
		}
	},
	func_2:function(){
		if(MapConfig.open_2&&Macro.unit(2).pos.x>=350){
			MapConfig.open_2=false;
			Macro.camMoveTo(cc.p(600,"current"),1,1);
//			Macro.setUnitSpawn(false);
			Macro.allUnitAction(function(unit){
		                        unit.setAI(false);
		                        unit.stand(true);
			});
		           var dialog = {
		           	skip:true,
				timeToNext : 3.5,
				text : [
			         	{
			        		0:"徐庶：家中老母被曹操挟持，如今我只能投曹。庶愧对主公的伯乐之恩！",
			        		},
			        		{
			        		0:"赵云：军师......先从孝义，再言天下，军师莫要愧疚。",
			        		},
			        		{
			        		0:"徐庶：南阳有一奇才，复姓诸葛，名亮，若能请他出山，天下可安。",
			        		},
				]
			}
			var func = function(){
      				Macro.doLater(1,function(){
					g_sharedTaskManager.nextTask();
				});
			}
	        		Dialog.create(13.5,dialog,func);
		}
	},
		unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:40000*(1+0.5*(gDifficulty-1)),tag:998},
			{time:0,id:"Gate",x:3600,faction:-1,hp:234715*(1+0.5*(gDifficulty-1)),drop:{gold:{num:140,ct:5}},},
			{time:0,id:"XuShu",lvl:1,x:3500,faction:1,direction:-1,hp:10000,attack:50,tag:1,unitType:"boss",movementSpeed:0.6,},
		
			{time:3,id:"shieldmanWei",x:3800,faction:-1,lvl:22,},
			{time:4,id:"pikemanWei",x:3800,faction:-1,lvl:22,},
			{time:5,id:"pikemanWei",x:3800,faction:-1,lvl:22,},

			{time:7,id:"bowmanWei",x:3800,faction:-1,lvl:22},
//			{time:8,id:"bowmanWei",x:3800,faction:-1,lvl:22},
			{time:9,id:"bowmanWei",x:3800,faction:-1,lvl:22},

			{time:16,id:"pikemanWei",x:3800,faction:-1,lvl:22,},
			{time:16,id:"pikemanWei",x:3800,faction:-1,lvl:22,},

			{time:20,id:"bowmanWei",x:3800,faction:-1,lvl:22},
			{time:21,id:"bowmanWei",x:3800,faction:-1,lvl:22},

			{time:25,id:"pikemanWei",x:3800,faction:-1,lvl:22},
			{time:26,id:"pikemanWei",x:3800,faction:-1,lvl:22},
			{time:27,id:"bowmanWei",x:3800,faction:-1,lvl:22},
			{time:29,id:"bowmanWei",x:3900,faction:-1,lvl:22},		
			{time:30,id:"bowmanWei",x:3900,faction:-1,lvl:22},

			{time:35,id:"pikemanWei",x:3800,faction:-1,lvl:22,},
			{time:36,id:"pikemanWei",x:3800,faction:-1,lvl:22,},

			{time:40,id:"bowmanWei",x:3800,faction:-1,lvl:22},
			{time:41,id:"bowmanWei",x:3800,faction:-1,lvl:22},

			{time:42,id:"shieldmanWei",x:3800,faction:-1,lvl:22,drop:{heal:{percent:0.1,ct:3}},},
			{time:46,id:"bowmanWei",x:3800,faction:-1,lvl:22},
			{time:49,id:"shieldmanWei",x:3800,faction:-1,lvl:22},
			{time:53,id:"bowmanWei",x:3900,faction:-1,lvl:22},		
			{time:54,id:"mageWei",x:3900,faction:-1,lvl:22,drop:{heal:{percent:0.1,ct:3}},},

			{time:57,id:"bowmanWei",x:3800,faction:-1,lvl:22},
			{time:59,id:"bowmanWei",x:3800,faction:-1,lvl:22},

			{time:61,id:"shieldmanWei",x:3800,faction:-1,lvl:22},
			{time:63,id:"bowmanWei",x:3800,faction:-1,lvl:22},
			{time:65,id:"shieldmanWei",x:3800,faction:-1,lvl:22},
			{time:67,id:"bowmanWei",x:3900,faction:-1,lvl:22},		
		],
		[						
			{time:2,id:"shieldmanWei",x:3800,faction:-1,lvl:22,},
			{time:2,id:"pikemanWei",x:3800,faction:-1,lvl:22,},
			{time:5,id:"bowmanWei",x:3800,faction:-1,lvl:22,},
			{time:7,id:"pikemanWei",x:3800,faction:-1,lvl:22,},
			{time:8,id:"shieldmanWei",x:3800,faction:-1,lvl:22,},
			{time:10,id:"pikemanWei",x:3800,faction:-1,lvl:22,},
			{time:12,id:"bowmanWei",x:3800,faction:-1,lvl:22,},
			{time:14,id:"pikemanWei",x:3800,faction:-1,lvl:22,},
			{time:18,id:"pikemanWei",x:3800,faction:-1,lvl:22,},
			{time:19,id:"bowmanWei",x:3800,faction:-1,lvl:22,},

			{time:23,id:"shieldmanWei",x:3800,faction:-1,lvl:22,},
			{time:24,id:"pikemanWei",x:3800,faction:-1,lvl:22,},
			{time:26,id:"bowmanWei",x:3800,faction:-1,lvl:22,},
			{time:27,id:"pikemanWei",x:3800,faction:-1,lvl:22,},

			{time:30,id:"pikemanWei",x:3800,faction:-1,lvl:22,},
			{time:32,id:"pikemanWei",x:3800,faction:-1,lvl:22,},
            	
			{time:34,id:"pikemanWei",x:3800,faction:-1,lvl:22,},			
			{time:37,id:"bowmanWei",x:3800,faction:-1,lvl:22,drop:{heal:{num:0.1,ct:2}},},
			
			{time:37,id:"ZhangLiao",lvl:1,x:3800,faction:-1,unitType:"boss",drop:{gold:{num:250,ct:3}},
				hp:40000,attack:1500,
				spell:{
					ability:{id:"Meteorite",num:10,damage:2000},
					cooldown:12,
			        config:{castTime:2,
			        	    alert:{type:"direction",width:680},
            	                  anim:{movementID:"attack17",speed:0.22,loop:false,start:0,time:2.5,},
            	                  anim2:{movementID:"attack17",speed:0.6,loop:false,start:13,stun:true,
                                         child:{movementID:"stand",start:0,stun:true,stunTimeOnFinish:0.3}
            	                        },
			        },
		        },
			},
			{time:38,id:"specialShieldMan",x:3800,faction:-1,lvl:22,},
			{time:39,id:"specialShieldMan",x:3800,faction:-1,lvl:22,},
			{time:42,id:"pikemanWei",x:3800,faction:-1,lvl:22,},
			{time:44,id:"bowmanWei",x:3800,faction:-1,lvl:3,},
			{time:47,id:"pikemanWei",x:3800,faction:-1,lvl:22,},
					
			{time:50,id:"bowmanWei",x:3800,faction:-1,lvl:22,drop:{heal:{percent:0.1,ct:2}},},
          		{time:52,id:"bowmanWei",x:3800,faction:-1,lvl:22,},
          		{time:55,id:"bowmanWei",x:3800,faction:-1,lvl:22,},
    			{time:57,id:"pikemanWei",x:3800,faction:-1,lvl:22,},
    			{time:58,id:"bowmanWei",x:3800,faction:-1,lvl:22,},
    			{time:59,id:"bowmanWei",x:3800,faction:-1,lvl:22,},
    			{time:63,id:"bowmanWei",x:3800,faction:-1,lvl:22,},
    			{time:65,id:"pikemanWei",x:3800,faction:-1,lvl:22,},
          		{time:64,id:"bowmanWei",x:3800,faction:-1,lvl:22,},
    			{time:67,id:"bowmanWei",x:3800,faction:-1,lvl:22,},
		],
		[
			{time:0,id:"XuShu",x:100,faction:1,hp:3000,attack:50,tag:2,movementSpeed:1.6,},	
		],		
	],	
	task:[		
		{
			win:[
				{type:"unitPosition",faction:1,posX:400,text:"护送徐庶回城",id:"XuShu",fadeOut:1.5,},
			],
			lose:[
				{type:"killUnit",faction:1,id:'XuShu',noText:true,},
			],
			func:function(){
			},
			finishFunc:function(){
				Macro.flee();
			},
            		update:function(){
				MapConfig.func_1();
			},
		},
       		{
			win:[
				{type:"killUnit",faction:-1,posX:100,id:'ZhangLiao',text:"击败张辽",},
			],
			lose:[
//				{type:"killUnit",faction:1,posX:100,id:'GongsunZan',noText:true,},
			],
			func:function(){
			},
            		update:function(){
//				MapConfig.func_2();
			},
		},
		{
			win:[
				{type:"killUnit",faction:-1,posX:100,id:'ZhangLiao',noText:true,},
			],
			lose:[
//				{type:"killUnit",faction:1,posX:100,id:'GongsunZan',noText:true,},
			],
			update:function(){
				MapConfig.func_2();
			},
		},	
	],
	init:function(){
		g_sharedFightLayer.registerEdge(3500,-1)
		g_sharedFightLayer.myhero ? g_sharedFightLayer.myhero.pos.x=3200 :2 ;
	},
	config:{
		disable:{
//			myhero:true,ability:true,
//			unit:true,
		},
		drop:{rage:{chance:1,num:1},gold:{chance:0.5,num:470,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:2141,gold:0,gem:0},
	}
};