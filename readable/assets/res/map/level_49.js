
var MapConfig={
	open_1:true,      
	func_1:function(){
		if(MapConfig.open_1 && Macro.unit(10) && Macro.unit(10).hp<0){
			MapConfig.open_1=false;
			var a = [
				{time:0,id:"pikemanShu",x:650,faction:1,lvl:40},
				{time:0,id:"pikemanShu",x:660,faction:1,lvl:40},
				{time:0,id:"bowManShu",x:100,faction:1,lvl:40},
				{time:0,id:"bowManShu",x:150,faction:1,lvl:40},
				{time:0,id:"bowManShu",x:160,faction:1,lvl:40},
				{time:0,id:"shieldManShu",x:500,faction:1,lvl:40},
				{time:0,id:"shieldManShu",x:450,faction:1,lvl:40},
				{time:0,id:"fatManShu",x:700,faction:1,lvl:40},
				{time:0,id:"mageShu",x:300,faction:1,lvl:40,tag:10},
				{time:0,id:"healerShu",x:300,faction:1,lvl:40},
			];
			for(var i=0;i<(a.length-1);i++){
				g_sharedFightLayer.createUnit(a[i]);
			}
			Macro.showMessage('不可力敌，援军已抵达后方',3);
		}
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:60000*(1+0.5*(gDifficulty-1)),},
			{time:0,id:"Gate",x:3600,faction:-1,hp:730515*(1+0.5*(gDifficulty-1)),drop:{gold:{num:190,ct:5}},},
			{time:0,id:"pikemanShu",x:650,faction:1,lvl:40},
			{time:0,id:"pikemanShu",x:660,faction:1,lvl:40},
			{time:0,id:"bowManShu",x:100,faction:1,lvl:40},
			{time:0,id:"bowManShu",x:150,faction:1,lvl:40},
			{time:0,id:"bowManShu",x:160,faction:1,lvl:40},
			{time:0,id:"shieldManShu",x:500,faction:1,lvl:40},
			{time:0,id:"shieldManShu",x:450,faction:1,lvl:40},
			{time:0,id:"fatManShu",x:700,faction:1,lvl:40},
//			{time:0,id:"fatManShu",x:600,faction:1,lvl:40},
			{time:0,id:"mageShu",x:300,faction:1,lvl:40,tag:10},
			{time:0,id:"healerShu",x:300,faction:1,lvl:40},


			{time:0,id:"pikemanWei",x:1000,faction:-1,lvl:39,},
			{time:0,id:"pikemanWei",x:1100,faction:-1,lvl:39,drop:{heal:{percent:0.1,ct:2}},},
			{time:0,id:"pikemanWei",x:1150,faction:-1,lvl:39},	
			{time:0,id:"pikemanWei",x:1200,faction:-1,lvl:39},

			{time:0,id:"pikemanWei",x:1400,faction:-1,lvl:39},
			{time:0,id:"pikemanWei",x:1500,faction:-1,lvl:39},
			{time:0,id:"pikemanWei",x:1600,faction:-1,lvl:39},
			{time:0,id:"bowmanWei",x:2000,faction:-1,lvl:39},
			{time:0,id:"bowmanWei",x:2000,faction:-1,lvl:39},

			{time:0,id:"specialFatMan",x:1200,faction:-1,lvl:39},
			{time:0,id:"specialFatMan",x:2000,faction:-1,lvl:39},
			{time:1,id:"specialShieldMan",x:3800,faction:-1,lvl:39},
			{time:2,id:"specialShieldMan",x:3800,faction:-1,lvl:39},

			{time:3,id:"pikemanWei",x:3800,faction:-1,lvl:39},
			{time:4,id:"pikemanWei",x:3800,faction:-1,lvl:39},

			{time:5,id:"specialShieldMan",x:3500,faction:-1,lvl:39,drop:{heal:{percent:0.1,ct:2}},},
			{time:5,id:"specialShieldMan",x:3600,faction:-1,lvl:39},
			{time:5,id:"specialShieldMan",x:3800,faction:-1,lvl:39},
			{time:6,id:"bowmanWei",x:3800,faction:-1,lvl:39},
			{time:7,id:"bowmanWei",x:3800,faction:-1,lvl:39},

			{time:10,id:"shieldmanWei",x:3800,faction:-1,lvl:39},
			{time:11,id:"shieldmanWei",x:3800,faction:-1,lvl:39},
			{time:12,id:"mageWei",x:3800,faction:-1,lvl:39},
			{time:12,id:"mageWei",x:3800,faction:-1,lvl:39},

			{time:12,id:"shieldmanWei",x:3800,faction:-1,lvl:39},
			{time:13,id:"shieldmanWei",x:3800,faction:-1,lvl:39},
			{time:14,id:"bowmanWei",x:3800,faction:-1,lvl:39},
			{time:16,id:"bowmanWei",x:3800,faction:-1,lvl:39},


			{time:20,id:"shieldmanWei",x:3800,faction:-1,lvl:39},
			{time:21,id:"shieldmanWei",x:3800,faction:-1,lvl:39},
			{time:23,id:"pikemanWei",x:3800,faction:-1,lvl:39},
			{time:24,id:"bowmanWei",x:3800,faction:-1,lvl:39},
			{time:25,id:"bowmanWei",x:3800,faction:-1,lvl:39},

			{time:20,id:"fatManWei",x:3800,faction:-1,lvl:39},
			{time:27,id:"shieldmanWei",x:3800,faction:-1,lvl:39},
			{time:28,id:"shieldmanWei",x:3800,faction:-1,lvl:39,drop:{heal:{percent:0.1,ct:2}},},

			{time:43,id:"pikemanWei",x:3800,faction:-1,lvl:39},
			{time:45,id:"pikemanWei",x:3800,faction:-1,lvl:39},

			{time:47,id:"specialShieldMan",x:3800,faction:-1,lvl:39},
			{time:48,id:"bowmanWei",x:3800,faction:-1,lvl:39},
			{time:50,id:"bowmanWei",x:3800,faction:-1,lvl:39},

			{time:51,id:"pikemanWei",x:3800,faction:-1,lvl:39},
			{time:53,id:"pikemanWei",x:3800,faction:-1,lvl:39},
			{time:55,id:"mageWei",x:3800,faction:-1,lvl:39},

			{time:60,id:"XiahouDun",x:3800,faction:-1,unitType:"boss",tag:1,hp:180000*(0.5*gDifficulty*gDifficulty-gDifficulty+1.5),attack:5000*Math.pow(1.5,(gDifficulty-1)),drop:{gold:{num:300,ct:3}},},

			{time:61,id:"pikemanWei",x:3800,faction:-1,lvl:39},
			{time:62,id:"pikemanWei",x:3800,faction:-1,lvl:39},

			{time:63,id:"specialShieldMan",x:3800,faction:-1,lvl:39},
			{time:64,id:"specialShieldMan",x:3800,faction:-1,lvl:39},
			{time:66,id:"specialShieldMan",x:3800,faction:-1,lvl:39},
			{time:67,id:"bowmanWei",x:3800,faction:-1,lvl:39},
			{time:68,id:"bowmanWei",x:3800,faction:-1,lvl:39,drop:{heal:{percent:0.1,ct:2}},},

			{time:70,id:"shieldmanWei",x:3800,faction:-1,lvl:39},
			{time:71,id:"shieldmanWei",x:3800,faction:-1,lvl:39},
			{time:72,id:"mageWei",x:3800,faction:-1,lvl:39},
			{time:73,id:"mageWei",x:3800,faction:-1,lvl:39},

			{time:75,id:"shieldmanWei",x:3800,faction:-1,lvl:39},
			{time:76,id:"shieldmanWei",x:3800,faction:-1,lvl:39},
			{time:78,id:"bowmanWei",x:3800,faction:-1,lvl:39},
			{time:80,id:"bowmanWei",x:3800,faction:-1,lvl:39},
		],
	],		

	
	task:[
		{
			taskFinishLatency:0,
			win:[
				{type:"allClear",faction:-1,text:'全歼敌军',textNum:true,},
			],
			lose:[
				
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
			unit:true,
		},
		drop:{rage:{chance:1,num:1.2},gold:{chance:0.5,num:900,type:"total"},},
			gameEdge:{left:0,right:3800},
		reward:{exp:10701,gold:0,gem:0},
	}
};