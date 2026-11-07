var MapConfig={
	open1:true,
	open2:true,
	open3:true,
	open4:true,
	open5:true,
	func1:function(){
	},
	func2:function(){
	},
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:150000*(1+0.5*(gDifficulty-1)),},
            {time:0,id:"Gate",x:3600,faction:-1,hp:850000*(1+0.5*(gDifficulty-1)),drop:{gold:{num:2,ct:5}},},
            {time:0,id:"Block",x:800,hp:40000*(1+0.5*(gDifficulty-1)),faction:1,},
		    {time:0,id:"shieldmanWei",x:1500,faction:-1,lvl:42},
			{time:0,id:"shieldmanWei",x:1500,faction:-1,lvl:42},
			{time:0,id:"bowmanWei",x:1800,faction:-1,lvl:42},
			{time:0,id:"bowmanWei",x:1800,faction:-1,lvl:42},
			
			{time:0,id:"fatManWei",x:2300,faction:-1,lvl:42},
			{time:0,id:"shieldmanWei",x:2800,faction:-1,lvl:42,},
			{time:0,id:"pikemanWei",x:2800,faction:-1,lvl:42},
			{time:2,id:"mageWei",x:2800,faction:-1,lvl:42},
		
		    {time:5,id:"fatManWei",faction:-1,lvl:42},
			{time:5,id:"shieldmanWei",faction:-1,lvl:42,},
			{time:6,id:"mageWei",x:3800,faction:-1,lvl:42},
			{time:5,id:"bowmanWei",x:3800,faction:-1,lvl:42,drop:{heal:{percent:0.1,ct:1}},},

		],
		[
					
		    {time:0,id:"fatManWei",x:3400,faction:-1,lvl:42},
			{time:1,id:"shieldmanWei",x:3400,faction:-1,lvl:42,},
			{time:1,id:"bowmanWei",x:3500,faction:-1,lvl:42},
			{time:1,id:"mageWei",x:3500,faction:-1,lvl:42},
		
			{time:5,id:"pikemanWei",faction:-1,lvl:42},
			{time:6,id:"pikemanWei",faction:-1,lvl:42},
			{time:7,id:"bowmanWei",x:3800,faction:-1,lvl:42},
			{time:7,id:"bowmanWei",x:3800,faction:-1,lvl:42},
			
			{time:11,id:"shieldmanWei",x:3800,faction:-1,lvl:42},
			{time:12,id:"shieldmanWei",x:3800,faction:-1,lvl:42},
			{time:13,id:"bowmanWei",x:3800,faction:-1,lvl:42},
			{time:14,id:"bowmanWei",x:3800,faction:-1,lvl:42},
				
			{time:18,id:"shieldmanWei",faction:-1,lvl:42},
			{time:20,id:"bowmanWei",faction:-1,lvl:42},
			{time:21,id:"bowmanWei",x:3800,faction:-1,lvl:42},
			{time:23,id:"mageWei",x:3800,faction:-1,lvl:42,drop:{heal:{percent:0.1,ct:1}},},
		],
		[
			{time:0,id:"ChenYing",faction:-1,unitType:"boss",x:3400,hp:230000*Math.pow(1.5,(gDifficulty-1)),attack:6800*Math.pow(1.5,(gDifficulty-1)),},
			{time:0,id:"BaoLong",faction:-1,unitType:"boss",x:3450,hp:230000*Math.pow(1.5,(gDifficulty-1)),attack:6800*Math.pow(1.5,(gDifficulty-1)),},
			
			{time:5,id:"fatManWei",x:3400,faction:-1,lvl:42},
			{time:7,id:"pikemanWei",x:3400,faction:-1,lvl:42},
			{time:9,id:"bowmanWei",x:3800,faction:-1,lvl:42},
			{time:11,id:"mageWei",x:3800,faction:-1,lvl:42},
				
			{time:20,id:"shieldmanWei",faction:-1,lvl:42},
			{time:21,id:"bowmanWei",faction:-1,lvl:42},
			{time:22,id:"bowmanWei",x:3800,faction:-1,lvl:42},
			{time:25,id:"mageWei",x:3800,faction:-1,lvl:42,drop:{heal:{percent:0.1,ct:1}},},
				
			{time:35,id:"shieldmanWei",faction:-1,lvl:42},
			{time:37,id:"bowmanWei",faction:-1,lvl:42},
			{time:39,id:"bowmanWei",x:3800,faction:-1,lvl:42},
			{time:41,id:"bowmanWei",x:3800,faction:-1,lvl:42,drop:{heal:{percent:0.1,ct:1}},},
				
			{time:55,id:"shieldmanWei",faction:-1,lvl:42},
			{time:57,id:"bowmanWei",faction:-1,lvl:42},
			{time:60,id:"bowmanWei",x:3800,faction:-1,lvl:42},
			{time:61,id:"mageWei",x:3800,faction:-1,lvl:42,drop:{heal:{percent:0.1,ct:1}},},
				
			{time:75,id:"shieldmanWei",faction:-1,lvl:42},
			{time:76,id:"bowmanWei",faction:-1,lvl:42},
			{time:78,id:"bowmanWei",x:3800,faction:-1,lvl:42},
			{time:80,id:"mageWei",x:3800,faction:-1,lvl:42},
	
		],
	],	
	task:[
		{
			win:[
				  {type:"allClear",faction:-1,text:'击杀桂阳先锋军',textNum:true,},
			],
			lose:[
			],
    		func:function(){
       			Macro.setGameEdge(0,3800);
    		},
			update:function(){
			},
            finishFunc:function(){
			},
		},
		{
			win:[
				  {type:"allClear",faction:-1,text:'击杀桂阳中军',textNum:true,},
			],
			lose:[
			],
			func:function(){
                Macro.setGameEdge(0,3800);
            },
			update:function(){
			},
            finishFunc:function(){
			},
		},
		{
			win:[
				  {type:"killUnit",faction:-1,text:'击败陈应、鲍隆',id:'ChenYing',},
				  {type:"killUnit",faction:-1,text:'击败陈应、鲍隆',id:'BaoLong',noText:true},
			],
			lose:[
			],
			func:function(){
                Macro.setGameEdge(0,3800);
            },
			update:function(){
			},
            finishFunc:function(){
			},
		},
	
	],
	init:function(){
	},
	config:{
		disable:{
		},
	}
};