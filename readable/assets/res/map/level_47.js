
var MapConfig={
	open_1:1,
	open_1_1:true,      
	func_1:function(){
		if(MapConfig.open_1_1 && Macro.unit(1) && Macro.unit(1).pos.x>=1900){
			MapConfig.open_1_1=false;
			g_sharedFightLayer.createUnit({time:0,id:"XuHuang",unitType:"boss",attack:3600*Math.pow(1.5,(gDifficulty-1)),hp:150000*(0.5*gDifficulty*gDifficulty-gDifficulty+1.5),status:{noDismember:1},x:3600,faction:-1,drop:{gold:{num:300,ct:3}},})
			Macro.allUnitAction(function(unit){
	            		unit.stand(true);
	        		});
			Macro.camMoveTo(cc.p(3300,"current"),1,1);
			Macro.setUnitSpawn(false);
       			var dialog = {
		        		timeToNext : 3,
		         	text : [
		        			{
		        			0:"徐晃：何人在此装神弄鬼，众将士随我破阵！",
		        			},
		        			{
		        			0:"赵云：军师且安心祭风，子龙执旗守坛，定不退半步！",
		        			},
		        		]
			} 
			var func = function(){
				Macro.allUnitAction(function(unit){
		            		unit.setAI(true);
				});
				Macro.setUnitSpawn(true);
			}
			Dialog.create(7.5,dialog,func);			
			Macro.doLater(4,function(){
				g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero,60);
			})
		}
		if(MapConfig.open_1==1 && Macro.unit(1) && Macro.unit(1).pos.x>=700){
			Macro.showMessage('开始祭风',3);
			MapConfig.open_1=2;
			var time = 10
	        		var config={
	        			castTime:time,
	             		anim:{movementID:"attack2",speed:0.3,loop:false,start:0,time:1.3,
	             	 		child:{movementID:"attack2",start:10,pause:true,time:1,
	         			child:{movementID:"attack2",speed:0.3,start:10,loop:false,}}
	             	 	},
	             		anim2:{movementID:"attack2",speed:1,start:22,pause:true,time:1.2,loop:false,stun:true,
	 	         		child:{movementID:"attack2",start:0,time:0.001,stun:true,stunTimeOnFinish:0.3,}
	 	         	}
	             	 };
			var jifeng = new Ability.Cast(Macro.unit(1),{id:"sing",},config);
			Macro.doLater(time/2,function(){
				Macro.showMessage('祭风任务中诸葛亮无法作战',3);
				var Freeze=new Ability["Freeze"](Macro.unit(1),{id:"Freeze",damage:100,range:550,times:3,noshow:true,mtimes:3});
				g_sharedFightLayer.addChild(Freeze);
				Macro.doLater(time/2,function(){
					var Freeze=new Ability["Freeze"](Macro.unit(1),{id:"Freeze",damage:100,range:550,times:3,noshow:true,mtimes:3});
					g_sharedFightLayer.addChild(Freeze);
					Macro.unit(2).dead();
				})
			})
		}
		if(MapConfig.open_1==2 && Macro.unit(1) && Macro.unit(1).pos.x>=1800){
			Macro.showMessage('开始祭风',3);
			MapConfig.open_1=3;
			var time  = 10;
	        		var config={
	        			castTime:time,
	             		anim:{movementID:"attack2",speed:0.3,loop:false,start:0,time:1.3,
	             	 		child:{movementID:"attack2",start:10,pause:true,time:1,
	         			child:{movementID:"attack2",speed:0.3,start:10,loop:false,}}
	             	 	},
	             		anim2:{movementID:"attack2",speed:1,start:22,pause:true,time:1.2,loop:false,stun:true,
	 	         		child:{movementID:"attack2",start:0,time:0.001,stun:true,stunTimeOnFinish:0.3,}
	 	         	}
	             	 };
			var jifeng = new Ability.Cast(Macro.unit(1),{id:"sing",},config);
			Macro.doLater(time/2,function(){
				var Freeze=new Ability["Freeze"](Macro.unit(1),{id:"Freeze",damage:100,range:550,times:3,noshow:true,mtimes:3});
				g_sharedFightLayer.addChild(Freeze);
				Macro.doLater(time/2,function(){
					var Freeze=new Ability["Freeze"](Macro.unit(1),{id:"Freeze",damage:100,range:550,times:3,noshow:true,mtimes:3});
					g_sharedFightLayer.addChild(Freeze);
					Macro.unit(3).dead();
				})
			})
		}
		if(MapConfig.open_1==3 && Macro.unit(1) && Macro.unit(1).pos.x>=3000){
			Macro.showMessage('开始祭风',3);
			MapConfig.open_1=4;
			var time = 10;
	        		var config={
	        			castTime:time,
	             		anim:{movementID:"attack2",speed:0.3,loop:false,start:0,time:1.3,
	             	 		child:{movementID:"attack2",start:10,pause:true,time:1,
	         			child:{movementID:"attack2",speed:0.3,start:10,loop:false,}}
	             	 	},
	             		anim2:{movementID:"attack2",speed:1,start:22,pause:true,time:1.2,loop:false,stun:true,
	 	         		child:{movementID:"attack2",start:0,time:0.001,stun:true,stunTimeOnFinish:0.3,}
	 	         	}
	             	 };
			var jifeng = new Ability.Cast(Macro.unit(1),{id:"sing",},config);
			Macro.doLater(time/2,function(){
				var Freeze=new Ability["Freeze"](Macro.unit(1),{id:"Freeze",damage:100,range:550,times:3,noshow:true,mtimes:3});
				g_sharedFightLayer.addChild(Freeze);
				Macro.doLater(time/2,function(){
					var Freeze=new Ability["Freeze"](Macro.unit(1),{id:"Freeze",damage:100,range:550,times:3,noshow:true,mtimes:3});
					g_sharedFightLayer.addChild(Freeze);
					Macro.unit(4).dead();
					Macro.doLater(1,function(){
							g_sharedTaskManager.nextTask();
						}
					);
				})
			})
		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:60000*(1+0.5*(gDifficulty-1)),tag:998},
			{time:0,id:"Gate",x:3600,faction:-1,hp:642050*(1+0.5*(gDifficulty-1)),drop:{gold:{num:185,ct:5}},},
			{time:0,id:"ZhugeLiang",x:400,faction:1,tag:1,movementSpeed:0.7,hp:400000,
				spell:
					{
						ability:{id:"iceBlockRain",damage:800,times:2,num:10},
					         cooldown:10000,
				        config:{castTime:1,
			             anim:{movementID:"attack2",speed:0.4,loop:false,start:0,time:0.3,
			             	 child:{movementID:"attack2",start:10,pause:true,time:0.3,
			                 child:{movementID:"attack2",speed:0.4,start:10,loop:false,}}
			             	 },
			             anim2:{movementID:"attack2",speed:1,start:22,pause:true,time:1,loop:false,stun:true,
			 	         child:{movementID:"stand",speed:1,loop:false,stun:true,}}
			             },
			         },
			},
			{time:0,id:"WeiChiHou",x:100000,faction:-1,lvl:1,hp:200,tag:2},
			{time:0,id:"WeiChiHou",x:100000,faction:-1,lvl:1,hp:200,tag:3},
			{time:0,id:"WeiChiHou",x:100000,faction:-1,lvl:1,hp:200,tag:4},

			{time:0,id:"specialShieldMan",x:3800,faction:-1,lvl:36,},
			{time:2,id:"pikemanWei",x:3900,faction:-1,lvl:36},	
			{time:4,id:"bowmanWei",x:3800,faction:-1,lvl:36},

			{time:7,id:"specialShieldMan",x:3800,faction:-1,lvl:36},
			{time:8,id:"specialShieldMan",x:3800,faction:-1,lvl:36},
			{time:12,id:"bowmanWei",x:3800,faction:-1,lvl:36,drop:{heal:{percent:0.1,ct:2}},},
			{time:13,id:"bowmanWei",x:3800,faction:-1,lvl:36},

			{time:18,id:"fatManWei",x:3800,faction:-1,lvl:36},
			{time:20,id:"shieldmanWei",x:3800,faction:-1,lvl:36},
			{time:21,id:"shieldmanWei",x:3800,faction:-1,lvl:36},


			{time:25,id:"specialShieldMan",x:3800,faction:-1,lvl:36},
			{time:28,id:"bowmanWei",x:3800,faction:-1,lvl:36},
			{time:29,id:"bowmanWei",x:3800,faction:-1,lvl:36},

			{time:33,id:"specialShieldMan",x:3800,faction:-1,lvl:36},
			{time:34,id:"pikemanWei",x:3800,faction:-1,lvl:36},
			{time:36,id:"mageWei",x:3800,faction:-1,lvl:36},

			{time:43,id:"shieldmanWei",x:3800,faction:-1,lvl:36},
			{time:44,id:"shieldmanWei",x:3800,faction:-1,lvl:36,drop:{heal:{percent:0.1,ct:2}},},
			{time:46,id:"healerWei",x:3800,faction:-1,lvl:36},

			{time:50,id:"specialShieldMan",x:3800,faction:-1,lvl:36},
			{time:52,id:"bowmanWei",x:3800,faction:-1,lvl:36},
			{time:54,id:"bowmanWei",x:3800,faction:-1,lvl:36},

			{time:60,id:"specialShieldMan",x:3800,faction:-1,lvl:36},
			{time:61,id:"pikemanWei",x:3800,faction:-1,lvl:36},
			{time:64,id:"mageWei",x:3800,faction:-1,lvl:36},

			{time:65,id:"fatManWei",x:3800,faction:-1,lvl:36},
			{time:68,id:"shieldmanWei",x:3800,faction:-1,lvl:36},
			{time:70,id:"shieldmanWei",x:3800,faction:-1,lvl:36},

			{time:72,id:"specialShieldMan",x:3800,faction:-1,lvl:36},
			{time:75,id:"bowmanWei",x:3800,faction:-1,lvl:36},
			{time:76,id:"bowmanWei",x:3800,faction:-1,lvl:36},

			{time:80,id:"shieldmanWei",x:3800,faction:-1,lvl:36},

			{time:81,id:"shieldmanWei",x:3800,faction:-1,lvl:36},
			{time:85,id:"bowmanWei",x:3800,faction:-1,lvl:36},
			{time:86,id:"bowmanWei",x:3800,faction:-1,lvl:36},

			{time:90,id:"specialShieldMan",x:3800,faction:-1,lvl:36},
			{time:94,id:"bowmanWei",x:3800,faction:-1,lvl:36},
			{time:95,id:"bowmanWei",x:3800,faction:-1,lvl:36},

			{time:100,id:"pikemanWei",x:3800,faction:-1,lvl:36},
			{time:101,id:"pikemanWei",x:3800,faction:-1,lvl:36},
			{time:102,id:"mageWei",x:3800,faction:-1,lvl:36},

			{time:103,id:"shieldmanWei",x:3800,faction:-1,lvl:36},

			{time:104,id:"shieldmanWei",x:3800,faction:-1,lvl:36},
			{time:108,id:"bowmanWei",x:3800,faction:-1,lvl:36},
			{time:109,id:"bowmanWei",x:3800,faction:-1,lvl:36},

			{time:111,id:"specialShieldMan",x:3800,faction:-1,lvl:36},
			{time:113,id:"bowmanWei",x:3800,faction:-1,lvl:36},
			{time:115,id:"bowmanWei",x:3800,faction:-1,lvl:36},

			{time:117,id:"pikemanWei",x:3800,faction:-1,lvl:36},
			{time:120,id:"pikemanWei",x:3800,faction:-1,lvl:36},
			{time:121,id:"mageWei",x:3800,faction:-1,lvl:36},
		],

	],		

	
	task:[
		
		{
			taskFinishLatency:0,
			win:[
				{type:"killUnit",faction:-1,text:'保护诸葛亮前去祭风',id:'WeiChiHou',require:3,textNum:true},

			],
			lose:[
				{type:"killUnit",faction:1,id:'ZhugeLiang',noText:true,},
			],
		    func:function(){

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
        drop:{rage:{chance:1,num:1.2},gold:{chance:0.5,num:800,type:"total"},},
		gameEdge:{left:0,right:3800},
		reward:{exp:8849,gold:0,gem:0},
	}
};