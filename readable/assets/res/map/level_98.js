var MapConfig={
	unit :[
/*1*/	[{time:1,id:"ZhangLiang",faction:-1,x:3000,y:150,hp:200000,attack:1,},],
/*2*/	[{time:1,id:"DengMao",faction:-1,x:3000,y:150,hp:200000,attack:1,},],
/*3*/	[{time:1,id:"PeiyuanShao",faction:-1,x:3000,y:150,hp:200000,attack:1,},],
/*4*/	[{time:1,id:"ZhangXiu",faction:-1,x:3000,y:150,hp:200000,attack:1,},],
/*5*/	[{time:1,id:"ZhangBao",x:3000,y:150,hp:200000,attack:1,faction:-1,},],
/*6*/	[{time:1,id:"ChengYuanzhi",faction:-1,x:3000,y:150,hp:200000,attack:1,},],
/*7*/	[{time:1,id:"ZhangJiao",faction:-1,x:3000,y:150,hp:200000,attack:1,},],
/*9*/	[{time:1,id:"LvBu",faction:-1,x:3000,y:150,hp:200000,attack:1,},],
/*10*/[{time:1,id:"YuJi",faction:-1,x:3000,y:150,hp:200000,attack:1,},],
/*11*/[{time:1,id:"DiaoChan",x:3000,y:150,hp:200000,attack:1,faction:-1,},],
/*12*/[{time:1,id:"GaoShun",faction:-1,x:3000,y:150,hp:200000,attack:1,},],
/*13*/[{time:1,id:"HuaXiong",x:3000,y:150,hp:200000,attack:1,faction:-1,},],
/*15*/[{time:1,id:"ZhangLiao",x:3000,y:150,hp:200000,attack:1,faction:-1,x:3000,y:150,hp:200000,attack:1,}],
/*16*/[{time:1,id:"YuanShu",x:3000,y:150,hp:200000,attack:1,faction:-1,},{time:3,id:"fatMan",x:3000,y:150,hp:200000,attack:1,faction:-1,},{time:3,id:"fatMan",x:3000,y:150,hp:200000,attack:1,faction:-1,},{time:3,id:"fatMan",x:3000,y:150,hp:200000,attack:1,faction:-1,},{time:3,id:"fatMan",x:3000,y:150,hp:200000,attack:1,faction:-1,},],
/*17*/[{time:1,id:"LvBu2",x:3000,y:150,hp:200000,attack:1,faction:-1,},],
/*18*/[{time:1,id:"GuoSi",x:3000,y:150,hp:200000,attack:1,faction:-1,x:3000,y:150,hp:200000,attack:1,},],
/*19*/[{time:1,id:"JiaXu",x:3000,y:150,hp:200000,attack:1,faction:-1,},],
/*20*/[{time:1,id:"DongZhuo",x:3000,y:150,hp:200000,attack:1,faction:-1,},],
/*21*/[{time:1,id:"LiJue",x:3000,y:150,hp:200000,attack:1,faction:-1,x:3000,y:150,hp:200000,attack:1,},],
/*22*/[{time:1,id:"SunCe",x:3000,y:150,hp:200000,attack:1,faction:-1,},],
/*24*/[{time:1,id:"XuChu",x:3000,y:150,hp:200000,attack:1,faction:-1,},],
/*25*/[{time:1,id:"YanLiang",x:3000,y:150,hp:200000,attack:1,faction:-1,},{time:3,id:"WenChou",x:3000,y:150,hp:200000,attack:1,faction:-1,}],
/*26*/[{time:1,id:"MaChao",x:3000,y:150,hp:200000,attack:1,faction:-1,},],
/*27*/[{time:1,id:"YuanShu",x:3000,y:150,hp:200000,attack:1,faction:-1,},],
/*28*/[{time:1,id:"CaoPi",x:3000,y:150,hp:200000,attack:1,faction:-1,},],
/*29*/[{time:1,id:"GuoJia",x:3000,y:150,hp:200000,attack:1,faction:-1,				spell:[		
					{ability:{id:"Temptation",damage:600,times:3,range:800},
			         	cooldown:15,
			        			config:{
			        			castTime:1.5,name:"蛊惑",
		             				anim:{movementID:"attack2",speed:0.3,loop:false,start:0,time:1.6,
		             	 			child:{movementID:"attack2",start:10,pause:true,time:1.6,
		             				child:{movementID:"attack2",speed:0.3,start:10,loop:false,}}
		             	 			},
		             				anim2:{movementID:"attack2",speed:1,start:22,pause:true,time:1,loop:false,stun:true,
		 	         			child:{movementID:"stand",speed:1,loop:false,stun:true,}}
		             			},
	         			},
	         			{ability:{id:"cureBuff",num:1300,range:650,},
	 	        	      		cooldown:2.5,
	 	                  		config:{
	 	                  			anim:{movementID:"attack",loop:false,stun:true,
	 	                  			       child:{movementID:"stand",loop:false,stun:true,},
	 	                  			     },
	 	                  				},
		 	     		 },
            			],	
},{time:3,id:"fatMan",x:3000,y:150,hp:200000,attack:1,faction:-1,},{time:3,id:"fatMan",x:3000,y:150,hp:200000,attack:1,faction:-1,},{time:3,id:"fatMan",x:3000,y:150,hp:200000,attack:1,faction:-1,},{time:3,id:"fatMan",x:3000,y:150,hp:200000,attack:1,faction:-1,},],
/*30*/[{time:1,id:"GhostLvBu",x:3000,y:150,hp:200000,attack:1,faction:-1,},{time:3,id:"fatMan",x:3000,y:150,hp:200000,attack:1,faction:-1,},{time:3,id:"fatMan",x:3000,y:150,hp:200000,attack:1,faction:-1,},{time:3,id:"fatMan",x:3000,y:150,hp:200000,attack:1,faction:-1,},{time:3,id:"fatMan",x:3000,y:150,hp:200000,attack:1,faction:-1,},],
/*31*/[{time:1,id:"CaoRen",x:3000,y:150,hp:200000,attack:1,faction:-1,}],
/*32*/[{time:1,id:"ZhangLiao",x:3000,y:150,hp:200000,attack:1,faction:-1,x:3000,y:150,hp:200000,attack:1,}],
/*33*/[{time:1,id:"ZuoCi",x:3000,y:150,hp:200000,attack:1,faction:-1,}],
/*35*/[{time:1,id:"ZhugeLiang",x:3000,y:150,hp:200000,attack:1,faction:-1,}],
/*36*/[{time:1,id:"CaoRen",x:3000,y:150,hp:200000,attack:1,faction:-1,}],
/*37*/[{time:1,id:"XiaHouen",x:3000,y:150,hp:200000,attack:1,faction:-1,}],
/*38*/[{time:1,id:"XuHuang",x:3000,y:150,hp:200000,attack:1,faction:-1,}],
/*40*/[{time:1,id:"ZhenJi",x:3000,y:150,hp:200000,attack:1,faction:-1,}],
/*41*/[{time:1,id:"ZhouYu",x:3000,y:150,hp:200000,attack:1,faction:-1,}],
/*42*/[{time:1,id:"SunShangxiang",x:3000,y:150,hp:200000,attack:1,faction:-1,}],
/*44*/[{time:1,id:"CaiMao",x:3000,y:150,hp:200000,attack:1,faction:-1,}],
/*45*/[{time:1,id:"ZhangYun",x:3000,y:150,hp:200000,attack:1,faction:-1,}],
/*46*/[{time:1,id:"ZhangHe",x:3000,y:150,hp:200000,attack:1,faction:-1,}],
/*49*/[{time:1,id:"XiahouDun",x:3000,y:150,hp:200000,attack:1,faction:-1,}],
/*50*/[{time:1,id:"CaoCao2",x:3000,y:150,hp:200000,attack:1,faction:-1,}],










///*15*/[{time:3,id:"ZhangLiao",x:3000,y:150,hp:200000,attack:1,faction:-1,
//			spell:{
//			ability:{id:"Meteorite",num:5,damage:1},cooldown:5,
//        config:{castTime:2,
//                anim:{movementID:"attack3",speed:0.1,loop:false,start:0,time:3},
//                
//            anim2:{movementID:"attack6",speed:1,loop:false,start:0,stun:true,time:1.5,pause:true,
//            		child:{movementID:"attack6",speed:1,loop:false,stun:true,stunTimeOnFinish:0.3,}},
//            	},
//                 },
//			},],
//		[{time:3,id:"YuanShu",x:2000,x:3000,y:150,hp:200000,attack:1,faction:-1,},],
///*18*/   [{time:4,id:"GuoSi",x:3000,y:150,hp:200000,attack:1,faction:-1,
//		         spell:{
//			     ability:{id:"moonChopped",range:50,damage:1},cooldown:10,
//                 config:{castTime:1,
//            	                   anim:{movementID:"attack4",speed:0.42,loop:false,start:0,time:1,},
//            	                   anim2:{movementID:"attack4",speed:1,loop:false,start:11,stun:true,},
//            	                  },
//			   },
//		},],
///*19*/		[{time:3,id:"JiaXu",x:2000,x:3000,y:150,hp:200000,attack:1,faction:-1,},],
///*21*/		[{time:3,id:"LiJue",x:3000,y:150,hp:200000,attack:1,faction:-1,},],

//		[{time:3,id:"DongZhuo",x:2000,x:3000,y:150,hp:200000,attack:1,faction:-1,},],
//		[{time:3,id:"CaoRen",x:2000,x:3000,y:150,hp:200000,attack:1,faction:-1,},],//lv22
//		[{time:3,id:"ZhouYu",x:2000,x:3000,y:150,hp:200000,attack:1,faction:-1,},],//lv24
///*25*/[{time:3,id:"YanLiang",x:3000,y:150,hp:200000,attack:1,faction:-1,}],
//		[{time:3,id:"CaiMao",x:2000,x:3000,y:150,hp:200000,attack:1,faction:-1,},],
//		[{time:3,id:"ZhangYun",x:2000,x:3000,y:150,hp:200000,attack:1,faction:-1,},],
//		[{time:3,id:"ZhangHe",x:2000,x:3000,y:150,hp:200000,attack:1,faction:-1,},],
///*40*/		[{time:3,id:"ZhenJi",x:3000,y:150,hp:200000,attack:1,faction:-1,}],

//		[{time:3,id:"XiahouDun",x:2000,x:3000,y:150,hp:200000,attack:1,faction:-1,},],
		[{time:3,id:"CaoCao1",faction:-1,
            		spell:[
                  {ability:{id:"Spine",range:700,damage:250,scale:0.8,rotation:0,times:6,},
                  		  cooldown:11,
                  config:{castTime:0.8,
                          anim:{movementID:"attack2",speed:0.2,loop:false,start:10,time:1.8,},
                          anim2:{movementID:"attack2",speed:1,loop:false,start:5,time:1.5,stun:true,pause:true,
                          child:{movementID:"attack2",speed:1,loop:false,start:5,time:1.32,stun:true,}}
            	      },},

			     {ability:{id:"fireRain",num:10,damage:1500,range:600},
			     	      cooldown:13,
                 config:{castTime:0.8,
            	         anim:{movementID:"attack",speed:0.15,loop:false,start:0,time:2.5,},
            	         anim2:{movementID:"attack",speed:0.6,loop:false,start:11,stun:true,
            	         child:{movementID:"stand",start:0,stun:true,stunTimeOnFinish:0.3}},
            	     },},
			    ]
              },],
//		[{time:3,id:"CaoCao2",x:3000,y:150,hp:200000,attack:1,faction:-1,},],

	],	
	task:[
		
		{
//            taskTextShowLatency:5,
//            taskFinishLatency:5,  
			win:[
				{type:"allClear",faction:-1,text:'斩杀邓茂',},//noText:true为无文本显示
			    ],
			lose:[
		          ],
		   func:function(){
		                    }
		},

            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],		
              func:function(){
                           Macro.allUnitAction(function(unit){
                           if(unit!=g_sharedFightLayer.myhero){
                                                                unit.fadeOut();
                                                                } 
                           });

		       }},

            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],func:function(){Macro.allUnitAction(function(unit){if(unit!=g_sharedFightLayer.myhero){unit.fadeOut();}});}},
//            {win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],},
//            	{win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],},
//            	{win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],},
//            	{win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],},
//            	{win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],},
//            	{win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],},
//            	{win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],},
//            	{win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],},
//            	{win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],},
//            	{win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],},
//            	{win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],},
//            	{win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],},
//            	{win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],},
//            	{win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],},
//            	{win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],},
//            	{win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],},
//            	{win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],},
//            	{win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],},
//            	{win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],},
//            	{win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],},
//            	{win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],},
//            	{win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],},
//            	{win:[{type:"allClear",faction:-1,text:'斩杀邓茂',},],lose:[],},		
	],
	init:function(){
g_sharedFightLayer.myhero.stand(true);
//		cc.msgbox(1)
		g_sharedFightLayer.myhero.pos.x = 2500;
//		g_sharedFightLayer.setCam(cc.p(2500,1));
//        Macro.camMoveTo(cc.p(2500,"current"),1,1);
//		g_sharedFightLayer.camMoveBy(cc.p(-500,null),0,5);
//			{time:1,id:"Gate",x:300,faction:1,hp:40765,},
//			{time:1,id:"Gate",x:3600,faction:-1,hp:215437,drop:{gold:{num:9100,ct:5}},},

		},
	config:{
		disable:{
//			myhero:true,ability:true,
		},
        drop:{rage:{chance:1,num:1}},
        recommendItem:{type:"equipment",content:{type:"weapon",id:"legendaryPike1"},text:"快来买",forceGuide:false},//可以填写士兵和技能，
	 	gameEdge:{left:0,right:3800},
        		reward:{gold:120,exp:140,gem:0},
	}
};