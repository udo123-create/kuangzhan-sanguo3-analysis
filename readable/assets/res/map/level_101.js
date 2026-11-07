var bossHp=(Math.pow(1.1,gPlayer.getCharacter().lvl)*60+66)*8000/66;
var	firstEnchant=function(){
		var enchant;
        enchant={chance:1,content:[{chance:1,id:"30001",},]};
		if(gPlayer && gPlayer.isGameLevelFinish(111)){
        enchant={chance:0.34,content:[{chance:0.5,id:"30001",},{chance:0.5,id:"30081",},]}
			cc.log('重刷随机掉落')
        }
		return enchant;
	};
var MapConfig={
	open_1_1:true,
	open_1_2:true,
	open_1_3:true,
	open_1_4:true,
	open_1_5:true,
	func_1:function(){
		if(MapConfig.open_1_1 && Macro.unit(1) && Macro.unit(1).hp<0){
			MapConfig.open_1_1=false;
			Macro.showMessage('我方援兵已从后方开拔');
			var unit =[
				{time:0,id:"pikemanShu",x:300,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
				{time:0,id:"pikemanShu",x:280,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
				{time:0,id:"pikemanShu",x:250,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
				{time:0,id:"bowManShu",x:30,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
				{time:0,id:"bowManShu",x:50,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
				{time:0,id:"bowManShu",x:-130,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
			];
			for(var i=0;i<unit.length;i++){
				g_sharedFightLayer.createUnit(unit[i])
			}
		}
		if(MapConfig.open_1_2 && Macro.unit(2) && Macro.unit(2).hp<0){
			MapConfig.open_1_2=false;
			Macro.showMessage('我方援兵已从后方开拔');
			var unit =[
				{time:0,id:"shieldManShu",x:300,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
				{time:0,id:"bowManShu",x:300,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
				{time:0,id:"bowManShu",x:300,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
				{time:0,id:"shieldManShu",x:0,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
				{time:0,id:"pikemanShu",x:-150,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
				{time:0,id:"bowManShu",x:-300,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
			];
			for(var i=0;i<unit.length;i++){
				g_sharedFightLayer.createUnit(unit[i])
			}
		}
		if(MapConfig.open_1_3 && Macro.unit(3) && Macro.unit(3).hp<0){
			MapConfig.open_1_3=false;
			Macro.showMessage('我方援兵已从后方开拔');
			var unit =[
				{time:0,id:"shieldManShu",x:300,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
				{time:0,id:"shieldManShu",x:200,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
				{time:0,id:"pikemanShu",x:300,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
				{time:0,id:"bowManShu",x:-100,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
				{time:0,id:"bowManShu",x:-200,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
				{time:0,id:"bowManShu",x:-300,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
			];
			for(var i=0;i<unit.length;i++){
				g_sharedFightLayer.createUnit(unit[i])
			}
		}
		if(MapConfig.open_1_4 && Macro.unit(4) && Macro.unit(4).hp<0){
			MapConfig.open_1_4=false;
			Macro.showMessage('我方援兵已从后方开拔');
			var unit =[
				{time:0,id:"shieldManShu",x:300,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
				{time:0,id:"shieldManShu",x:300,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
				{time:0,id:"bowManShu",x:0,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
				{time:0,id:"bowManShu",x:0,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
				{time:0,id:"fatManShu",x:300,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
				{time:0,id:"fatManShu",x:300,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
			];
			for(var i=0;i<unit.length;i++){
				g_sharedFightLayer.createUnit(unit[i])
			}
		}
		if(MapConfig.open_1_5 && Macro.unit(5) && Macro.unit(5).hp<0){
			MapConfig.open_1_5=false;
			Macro.showMessage('我方援兵已从后方开拔');
			var unit =[
				{time:0,id:"shieldManShu",x:300,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
				{time:0,id:"shieldManShu",x:300,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
				{time:0,id:"bowManShu",x:300,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
				{time:0,id:"bowManShu",x:300,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
				{time:0,id:"fatManShu",x:300,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
				{time:0,id:"mageShu",x:300,faction:1,lvl:Math.floor(gPlayer.getCharacter().lvl/2)},
			];
			for(var i=0;i<unit.length;i++){
				g_sharedFightLayer.createUnit(unit[i])
			}
		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,hp:bossHp*2,faction:1},// 城门设定
			{time:0,id:"Gate",x:3600,hp:bossHp*2,faction:-1,drop:{gold:{num:gPlayer.getCharacter().lvl*5,ct:5}},},// 城门设定
			{time:0,id:"Block",x:400,hp:bossHp*0.8,faction:1,tag:5,},
			{time:0,id:"Block",x:900,hp:bossHp*0.8,faction:1,tag:4,},
			{time:0,id:"Block",x:1400,hp:bossHp*0.8,faction:1,tag:3,},
			{time:0,id:"Block",x:1900,hp:bossHp*0.8,faction:1,tag:2,},
			{time:0,id:"Block",x:2600,hp:bossHp*0.8,faction:1,tag:1,},

			{time:10,id:"pikemanQun",x:3800,faction:-1,
//            drop:{
//				enchant:{chance:1,content:[{chance:0.5,id:"30011",},{chance:0.5,id:"30031",}]},
//			  },
			},
			{time:11,id:"pikemanQun",x:3800,faction:-1,},
			{time:14,id:"pikemanQun",x:3800,faction:-1,},
			{time:18,id:"pikemanQun",x:3800,faction:-1,},
			{time:20,id:"pikemanQun",x:3800,faction:-1,},
			{time:23,id:"pikemanQun",x:3800,faction:-1,},

			{time:27,id:"pikemanQun",x:3800,faction:-1,},
			{time:28,id:"bowmanQun",x:3800,faction:-1,},

			{time:30,id:"pikemanQun",x:3800,faction:-1,},
			{time:31,id:"pikemanQun",x:3800,faction:-1,},
			{time:33,id:"bowmanQun",x:3800,faction:-1,},

			{time:38,id:"pikemanQun",x:3800,faction:-1,},
			{time:39,id:"pikemanQun",x:3800,faction:-1,},
			{time:40,id:"pikemanQun",x:3800,faction:-1,},
			{time:43,id:"pikemanQun",x:3800,faction:-1,},
			{time:45,id:"pikemanQun",x:3800,faction:-1,drop:{gold:{num:gPlayer.getCharacter().lvl*2,ct:5}},},
			{time:46,id:"pikemanQun",x:3800,faction:-1,drop:{heal:{percent:0.2,ct:1},}},

//			{time:48,id:"pikemanQun",x:3800,faction:-1,},
//			{time:49,id:"bowmanQun",x:3800,faction:-1,},
//			{time:50,id:"pikemanQun",x:3800,faction:-1,},
//			{time:51,id:"bowmanQun",x:3800,faction:-1,},
//			{time:52,id:"bowmanQun",x:3800,faction:-1,},
				
//			{time:53,id:"pikemanQun",x:3800,faction:-1,drop:{heal:{percent:0.2,ct:1},}},
//			{time:54,id:"pikemanQun",x:3800,faction:-1,},
//			{time:55,id:"bowmanQun",x:3800,faction:-1,drop:{gold:{num:gPlayer.getCharacter().lvl*2,ct:5}},},
		],
		[                                                              //2
			{time:4,id:"shieldmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl-1,},
			{time:5,id:"pikemanQun",x:3800,y:165,faction:-1,lvl:gPlayer.getCharacter().lvl-1},
			{time:6,id:"shieldmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl-1},
			{time:8,id:"pikemanQun",x:3800,y:165,faction:-1,lvl:gPlayer.getCharacter().lvl-1},		
			{time:9,id:"pikemanQun",x:3800,y:165,faction:-1,lvl:gPlayer.getCharacter().lvl-1},
			{time:10,id:"shieldmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl-1},
			{time:11,id:"pikemanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl-1},
			{time:14,id:"pikemanQun",x:3800,y:165,faction:-1,lvl:gPlayer.getCharacter().lvl-1},

			{time:18,id:"pikemanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl-1},
			{time:20,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl-1},
			{time:24,id:"pikemanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl-1},
			{time:28,id:"shieldmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl-1},

			{time:38,id:"shieldmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl-1},
			{time:40,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl-1},

			{time:42,id:"pikemanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl-1},
			{time:43,id:"pikemanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl-1,drop:{gold:{num:gPlayer.getCharacter().lvl*2,ct:5}},},

//			{time:55,id:"shieldmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl-1},
//			{time:57,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl-1},

//			{time:60,id:"shieldmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl-1},
//			{time:62,id:"shieldmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl-1,drop:{heal:{percent:0.2,ct:1},}},

//			{time:65,id:"shieldmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl-1},
//			{time:67,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl-1},
//			{time:68,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl-1},
//			{time:69,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl-1},

//			{time:70,id:"shieldmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl-1,drop:{heal:{percent:0.2,ct:1},}},
//			{time:73,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl-1},

//			{time:75,id:"shieldmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl-1},
//			{time:77,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl-1,drop:{gold:{num:gPlayer.getCharacter().lvl*2,ct:5}},},

		],
		[ 																		//3
			{time:5,id:"fatManQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl},
			{time:6,id:"fatManQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl},
			{time:10,id:"shieldmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl},

			{time:15,id:"pikemanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl},
			{time:20,id:"shieldmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl},
			{time:25,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl},
			{time:30,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl},
			{time:35,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl},
			{time:40,id:"shieldmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl},
			{time:45,id:"shieldmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl},
			{time:50,id:"pikemanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl},
			{time:50,id:"fatManQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl,drop:{gold:{num:gPlayer.getCharacter().lvl*2,ct:5}},},
			{time:65,id:"fatManQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl,drop:{heal:{percent:0.2,ct:1},}},
//			{time:70,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl},
//			{time:72,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl,drop:{heal:{percent:0.2,ct:1},}},

//			{time:78,id:"shieldmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl},
//			{time:80,id:"shieldmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl},
//			{time:82,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl},
//			{time:84,id:"shieldmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl,drop:{heal:{percent:0.2,ct:1},}},
//			{time:86,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl},
//			{time:90,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl,drop:{gold:{num:gPlayer.getCharacter().lvl*2,ct:5}},},
		],
		[																		//4
			{time:5,id:"mageQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl},
			{time:10,id:"pikemanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},

			{time:12,id:"fatManQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
			{time:13,id:"pikemanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
			{time:16,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},

			{time:17,id:"mageQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl},
			{time:18,id:"pikemanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
			{time:18,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},

			{time:20,id:"fatManQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
			{time:25,id:"pikemanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
			{time:30,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
				
//			{time:39,id:"mageQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl},
			{time:40,id:"shieldmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
			{time:41,id:"pikemanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
			{time:42,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},

			{time:48,id:"shieldmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
			{time:49,id:"pikemanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
			{time:50,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
				
			{time:58,id:"mageQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl},
			{time:59,id:"pikemanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1,drop:{heal:{percent:0.2,ct:1},}},
			{time:60,id:"shieldmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
			{time:61,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1,drop:{gold:{num:gPlayer.getCharacter().lvl*2,ct:5}},},

//			{time:65,id:"shieldmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
//			{time:67,id:"pikemanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
//			{time:69,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
			
//			{time:75,id:"mageQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl},
//			{time:80,id:"pikemanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1,drop:{heal:{percent:0.2,ct:1},}},
//			{time:85,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1,drop:{gold:{num:gPlayer.getCharacter().lvl*2,ct:5}},},
		],
		[																		//5
			{time:5,id:"shieldmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
			{time:7,id:"pikemanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},

			{time:9,id:"shieldmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
			{time:10,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
			{time:12,id:"pikemanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
			{time:13,id:"pikemanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
			{time:18,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
			{time:18,id:"healerQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1,drop:{heal:{percent:0.2,ct:1},}},

			{time:20,id:"shieldmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
			{time:21,id:"pikemanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
			{time:24,id:"mageQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl},

			{time:30,id:"fatManQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
			{time:30,id:"healerQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
			{time:35,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},

			{time:40,id:"shieldmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1,
		        drop:{
		 		enchant:{chance:0.34,content:[{chance:0.5,id:"30001",},{chance:0.5,id:"30081",}]},
			  },
			  },
			{time:41,id:"pikemanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
			{time:42,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
			{time:45,id:"shieldmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1,drop:{heal:{percent:0.2,ct:1},}},
			{time:46,id:"pikemanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
			{time:47,id:"mageQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl},

			{time:50,id:"fatManQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
//			{time:51,id:"mageQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl},
			{time:52,id:"shieldmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
			{time:53,id:"pikemanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
			{time:56,id:"mageQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl},
								
//			{time:65,id:"shieldmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
//			{time:67,id:"pikemanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
//			{time:69,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1},
			
//			{time:50,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1,
//			  drop:{
//				enchant:firstEnchant()
//				enchant:{chance:0.34,content:[{chance:0.5,id:"30011",},{chance:0.5,id:"30031",}]},
//			  },
//			},		
//			{time:85,id:"bowmanQun",x:3800,faction:-1,lvl:gPlayer.getCharacter().lvl+1,drop:{enchant:{chance:1,content:[{chance:0.4,id:"attackSpeed1",lvl:1},{chance:0.3,id:"lifeSteal",lvl:1},{chance:0.4,id:"critChance1",lvl:1}]},},},		
		],
	],

	task:[

		{
			win:[
				{type:"allClear",faction:-1,text:'抵挡住第1/5波敌军',},    //1
			],
			lose:[
				
			],
			update:function(){
				MapConfig.func_1();
			},
			func:function(){
				Macro.doLater(8,function(){
					Macro.showMessage('第一波敌军来袭，前去迎敌',2);
				})
			},
			finishFunc:function(){
			},
		},
		{
			win:[
				{type:"allClear",faction:-1,text:'抵挡住第2/5波敌军',},     //2
			],
			lose:[
				
			],
			update:function(){
				MapConfig.func_1();
			},
		},
		{
			win:[
				{type:"allClear",faction:-1,text:'抵挡住第3/5波敌军',},    //3
			],
			lose:[
				
			],
			update:function(){
				MapConfig.func_1();
			},
		},
		{
			win:[
				{type:"allClear",faction:-1,text:'抵挡住第4/5波敌军',},    //4
			],
			lose:[
				
			],
			update:function(){
				MapConfig.func_1();
			},
		},
		{
			win:[
				{type:"allClear",faction:-1,text:'抵挡住第5/5波敌军',},     //5
			],
			lose:[
				
			],
			update:function(){
				MapConfig.func_1();
			},
		},
	],
	init:function(){
		Macro.setUnitBtnDisable(true);
	},
	config:{
		disable:{
//			myhero:true,ability:true,
		},
        drop:{rage:{chance:1,num:1},},
		gameEdge:{left:0,right:3800},
		reward:{exp:378,gold:1857,gem:0},
		unitLvl:gPlayer.getCharacter().lvl-1,
		
	}
};