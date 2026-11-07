var bossHp=(Math.pow(1.085,gPlayer.getCharacter().lvl)*60+66)*5000/66;
var	bossAttack=Math.pow(1.09,gPlayer.getCharacter().lvl)*70+66;

var MapConfig={
		open:true,
	unit :[
		[
			{time:0,id:"Gate",x:300,faction:1,hp:bossHp/3,tag:998},
            {time:0,id:"Gate",x:3600,faction:-1,hp:bossHp/3,/*drop:{gold:{num:3,ct:5}},*/},
			
            {time:0,id:"GuoSi",name:"强盗头领",x:800,hp:4000,attack:80,faction:-1,direction:1,tag:2,unitType:"boss",movementSpeed:0.5,
            	spell:{
			      ability:{id:"choppedStrike",},
			      cooldown:1200,
                  config:{castTime:2,},
	            	},
            },
			{time:1,id:"pikemanWei",x:1200,faction:-1,direction:-1,attack:40,hp:150},
			{time:3,id:"bowmanWei",x:1500,faction:-1,direction:-1,attack:60,hp:100},
			{time:4,id:"pikemanWei",x:1500,faction:-1,direction:-1,attack:40,hp:150},
			{time:5,id:"pikemanWei",x:2300,faction:-1,direction:-1,attack:40,hp:150},
			{time:3,id:"bowmanWei",x:2500,faction:-1,direction:-1,attack:60,hp:100},
			{time:4,id:"pikemanWei",x:3000,faction:-1,direction:-1,attack:40,hp:150},
			{time:6,id:"pikemanWei",x:3100,faction:-1,direction:-1,attack:40,hp:150},
			{time:8,id:"pikemanWei",x:3200,faction:-1,direction:-1,attack:40,hp:150},
			{time:9,id:"bowmanWei",x:3200,faction:-1,direction:-1,attack:60,hp:100},

			{time:20,id:"fatManWei",x:3800,faction:-1,direction:-1,attack:120,hp:1000,},
			{time:22,id:"pikemanWei",x:3800,faction:-1,direction:-1,attack:40,hp:150},
			{time:24,id:"bowmanWei",x:3800,faction:-1,direction:-1,attack:60,hp:100},
			{time:25,id:"mageWei",x:3800,faction:-1,direction:-1,attack:120,hp:160,drop:{heal:{percent:0.1,ct:2}},},

			{time:27,id:"fatManWei",x:3800,faction:-1,direction:-1,attack:120,hp:1000,},
			{time:30,id:"bowmanWei",x:3800,faction:-1,direction:-1,attack:60,hp:100},
			{time:33,id:"bowmanWei",x:3800,faction:-1,direction:-1,attack:60,hp:100},

			{time:35,id:"shieldmanWei",x:3800,faction:-1,direction:-1,attack:80,hp:300,drop:{heal:{percent:0.1,ct:2}},},
			{time:37,id:"mageWei",x:3800,faction:-1,direction:-1,attack:130,hp:160},
			{time:38,id:"mageWei",x:3800,faction:-1,direction:-1,attack:130,hp:160,drop:{heal:{percent:0.1,ct:2}},},

			
		],
	],		

	
	task:[
		
		{
			win:[
			     {type:"killUnit",faction:-1,text:'阻止强盗头领逃脱',id:'GuoSi',},
			],
			lose:[
				{type:"unitPosition",faction:-1,posX:3700,noText:true,id:'GuoSi',},
			],
			update:function(){
//								if(Macro.unit(1)&&MapConfig.open){
//					                     MapConfig.open=false;
//					                     Macro.unit(1).moveTo(400,true);
//				                        }
							 },
		},
	],
	init:function(){
	},
	config:{
		disable:{
//			myhero:true,ability:true,
			unit:true,
		},
        drop:{rage:{chance:1,num:1},},
		gameEdge:{left:0,right:3800},
		reward:{exp:378,gold:1857,gem:0},
//		unitLvl:gPlayer.getCharacter().lvl<35 ? gPlayer.getCharacter().lvl+2 : gPlayer.getCharacter().lvl,
	}
};