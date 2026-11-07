
var MapConfig={
	abilityOpen:1,
	open_1:true,      
	func_1:function(){
		if(MapConfig.open_1 && Macro.unit(1) && Macro.unit(1).pos.x>=1700){
			MapConfig.open_1=false;
			g_sharedFightLayer.createUnit({time:0,id:"CaoRen",x:3600,unitType:"boss",status:{noDismember:1},hp:180000*(0.5*gDifficulty*gDifficulty-gDifficulty+1.5),attack:4000*Math.pow(1.5,(gDifficulty-1)),faction:-1,drop:{gold:{num:300,ct:3}},
				spell:{
					ability:{id:"moonChopped",damage:9000,range:400,},cooldown:12,
						config:{
							castTime:1.5,
            	                  anim:{movementID:"attack17",speed:0.22,loop:false,start:0,time:2.5,},
            	                  anim2:{movementID:"attack17",speed:0.6,loop:false,start:13,stun:true,
                                         child:{movementID:"stand",start:0,stun:true,stunTimeOnFinish:0.3}
            	                        },
						},

				},
			})
			Macro.allUnitAction(function(unit){
	            		unit.stand(true);
	        		});
			Macro.camMoveTo(cc.p(3300,"current"),1,1);
			Macro.setUnitSpawn(false);
       			var dialog = {
		        		timeToNext : 3,
		         	text : [
		        			{
		        			0:"曹仁：无耻小贼，竟然用计袭我，可敢正面来战？",
		        			},
		        			{
		        			0:"赵云：兵战为下，心战为上。你这匹夫之勇，不足为惧。",
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
			Macro.doLater(3.5,function(){
				g_sharedFightLayer.myhero && Macro.camFollow(g_sharedFightLayer.myhero,60);
			})
		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:60000*(1+0.5*(gDifficulty-1)),tag:998},
			{time:0,id:"Gate",x:3600,faction:-1,hp:684940*(1+0.5*(gDifficulty-1)),drop:{gold:{num:180,ct:5}},},
			{time:0,id:"WeiChiHou",x:200000,faction:-1,attack:1,hp:100000,lvl:16,tag:2},
			{time:0,id:"WeiChiHou",x:230000,faction:-1,attack:1,hp:100000,lvl:16,tag:3},
			{time:0,id:"WeiChiHou",x:260000,faction:-1,attack:1,hp:100000,lvl:16,tag:4},
			{time:0,id:"ZhouYu",x:400,faction:1,tag:1,movementSpeed:2,hp:350000,attack:800,
				ai:{
					comradeMove:1,
					seekEnemyToAttack:1,
					actionWhenStand:1,
					CanotAttackStatus:1,
					Ability:1,
				},
				spell:{
						ability:{id:"fireArrowRain",damage:2000,type:2,isfire:true,range:600,num:25,},cooldown:15,
			        	config:{castTime:0.3,name:"红莲业火",
			            		anim:{movementID:"attack10",speed:0.6,},
			            		anim2:{movementID:"attack10",speed:0.6,start:5,time:0.2,loop:false,stun:true,
            				           child:{movementID:"stand",speed:1,loop:false,stun:true},
            					      },
								},
					ai:function(unit){
						if(MapConfig.abilityOpen==1&&unit.pos.x>=1000){
							MapConfig.abilityOpen=2;
							Macro.unit(2).dead();
							return true;
						}
						if(MapConfig.abilityOpen==2&&unit.pos.x>=2000){
							MapConfig.abilityOpen=3;
							Macro.unit(3).dead();
							return true;
						}
						if(MapConfig.abilityOpen==3&&unit.pos.x>=3000){
							MapConfig.abilityOpen=4;
							Macro.doLater(3,function(){
								Macro.unit(4).dead();
							})
							return true;
						}
					},						
            	},
			},
			{time:0,id:"shieldmanWei",x:800,faction:-1,lvl:37,},
			{time:0,id:"pikemanWei",x:1000,faction:-1,lvl:37,},
			{time:0,id:"pikemanWei",x:1000,faction:-1,lvl:37},	
			{time:0,id:"bowmanWei",x:1200,faction:-1,lvl:37},

			{time:0,id:"pikemanWei",x:1500,faction:-1,lvl:37},
			{time:0,id:"pikemanWei",x:1500,faction:-1,lvl:37},
			{time:0,id:"pikemanWei",x:2000,faction:-1,lvl:37},
			{time:0,id:"bowmanWei",x:2100,faction:-1,lvl:37},
			{time:0,id:"bowmanWei",x:2100,faction:-1,lvl:37},

			{time:0,id:"shieldmanWei",x:3800,faction:-1,lvl:37,},
			{time:1,id:"pikemanWei",x:3800,faction:-1,lvl:37,},
			{time:2,id:"pikemanWei",x:3900,faction:-1,lvl:37},	
			{time:4,id:"bowmanWei",x:3800,faction:-1,lvl:37},

			{time:7,id:"pikemanWei",x:3800,faction:-1,lvl:37},
			{time:8,id:"pikemanWei",x:3800,faction:-1,lvl:37},
			{time:9,id:"pikemanWei",x:3800,faction:-1,lvl:37},
			{time:12,id:"bowmanWei",x:3800,faction:-1,lvl:37},
			{time:13,id:"bowmanWei",x:3800,faction:-1,lvl:37},

			{time:20,id:"fatManWei",x:3800,faction:-1,lvl:37},
			{time:23,id:"shieldmanWei",x:3800,faction:-1,lvl:37},
			{time:25,id:"shieldmanWei",x:3800,faction:-1,lvl:37},

			{time:30,id:"pikemanWei",x:3800,faction:-1,lvl:37},
			{time:31,id:"pikemanWei",x:3800,faction:-1,lvl:37},

			{time:35,id:"specialShieldMan",x:3800,faction:-1,lvl:37},
			{time:38,id:"bowmanWei",x:3800,faction:-1,lvl:37},
			{time:39,id:"healerWei",x:3800,faction:-1,lvl:37},

			{time:50,id:"pikemanWei",x:3800,faction:-1,lvl:37},
			{time:51,id:"pikemanWei",x:3800,faction:-1,lvl:37},
			{time:53,id:"mageWei",x:3800,faction:-1,lvl:37,drop:{heal:{percent:0.1,ct:2}},},

			{time:60,id:"shieldmanWei",x:3800,faction:-1,lvl:37},
			{time:61,id:"shieldmanWei",x:3800,faction:-1,lvl:37},
			{time:63,id:"healerWei",x:3800,faction:-1,lvl:37},

			{time:70,id:"pikemanWei",x:3800,faction:-1,lvl:37},
			{time:72,id:"pikemanWei",x:3800,faction:-1,lvl:37},
			{time:75,id:"pikemanWei",x:3800,faction:-1,lvl:37},
			{time:78,id:"bowmanWei",x:3800,faction:-1,lvl:37},
			{time:80,id:"bowmanWei",x:3800,faction:-1,lvl:37},

			{time:90,id:"fatManWei",x:3800,faction:-1,lvl:37},
			{time:91,id:"shieldmanWei",x:3800,faction:-1,lvl:37},
			{time:93,id:"shieldmanWei",x:3800,faction:-1,lvl:37},

			{time:100,id:"pikemanWei",x:3800,faction:-1,lvl:37},
			{time:101,id:"pikemanWei",x:3800,faction:-1,lvl:37},

			{time:110,id:"specialShieldMan",x:3800,faction:-1,lvl:37,drop:{heal:{percent:0.1,ct:2}},},
			{time:113,id:"bowmanWei",x:3800,faction:-1,lvl:37},
			{time:114,id:"bowmanWei",x:3800,faction:-1,lvl:37},

			{time:120,id:"pikemanWei",x:3800,faction:-1,lvl:37},
			{time:121,id:"pikemanWei",x:3800,faction:-1,lvl:37},
			{time:125,id:"mageWei",x:3800,faction:-1,lvl:37},



		],
		[
			{time:1,id:"shieldMan",x:380000,faction:-1,attack:1,hp:100000,lvl:16},
		],
	],		

	
	task:[
		
		{
			taskFinishLatency:0,
			win:[
				{type:"killUnit",faction:-1,text:'同周瑜前去火烧敌船',id:'WeiChiHou',require:3,textNum:true},
			],
			lose:[
				{type:"killUnit",faction:1,noText:true,id:'ZhouYu'},
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
drop:{rage:{chance:1,num:1.2},gold:{chance:0.5,num:850,type:"total"},},
			gameEdge:{left:0,right:3800},
		reward:{exp:9731,gold:0,gem:0},
	}
};