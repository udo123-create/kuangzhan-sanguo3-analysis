//var bossHp=(Math.pow(1.1,gPlayer.getCharacter().lvl)*60+66)*8000/66;
var bossHp=(Math.pow(1.085,gPlayer.getCharacter().lvl)*60+66)*5000/66;
var	bossAttack=Math.pow(1.09,gPlayer.getCharacter().lvl)*70+66;

var uintArr = [];//生成unit单位
var isColorBucketCreated = false;//是否已经创建有颜色的罐子
var dropInitType = ["heal","s_gold","s_gem","s_strength","s_enchant","heal","s_gold","s_gold","s_gold","s_gem","s_strength",];//掉落类型，分别为桃子，金币,玉璧，体力，宝珠
var daopHealData = [{percent:0.1,ct:1},{percent:0.1,ct:1},{percent:0.1,ct:2},{percent:0.1,ct:2},{percent:0.1,ct:3}];//掉落桃子的数量
var dropGoldData = [{value:gPlayer.getCharacter().lvl*5*1,ct:1},
                    {value:gPlayer.getCharacter().lvl*5*2,ct:2},
                    {value:gPlayer.getCharacter().lvl*5*2,ct:2},
                    {value:gPlayer.getCharacter().lvl*5*3,ct:3},
                   ];//掉落金币的数量
var enchantData =[{chance:1,content:[{chance:1,id:"30061"}]},
                 ];//掉落宝珠的数量
var gemData= [{value:1,ct:1},{value:1,ct:1},{value:1,ct:2},{value:1,ct:2},{value:1,ct:3}];//掉落玉璧
var strength = [{value:1,ct:2},{value:1,ct:3},{value:1,ct:3},{value:1,ct:4},{value:1,ct:5}];//掉落体力

//enemy start

var obj1 = [{time:0,id:"specialShieldMan",x:0,faction:-1,hp:bossHp*0.5,attack:bossAttack*1.5,attackRate:0.8,
    ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1},
},
    {time:0,id:"specialShieldMan",x:50,faction:-1,hp:bossHp*0.5,attack:bossAttack*1.5,attackRate:0.8,
        ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1},
    },
];

var obj2 = [{time:0,id:"shieldMan",faction:-1,x:0,hp:bossHp*0.5,attack:bossAttack*1.5,
    ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1},
},
    {time:0,id:"shieldMan",faction:-1,x:50,hp:bossHp*0.5,attack:bossAttack*1.5,
        ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1},
    },
    {time:0,id:"bowMan",faction:-1,x:300,hp:bossHp*0.2,attack:bossAttack*3,
        ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1},
    },
    {time:0,id:"bowMan",faction:-1,x:300,hp:bossHp*0.2,attack:bossAttack*3,
        ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1},
    },
];
var obj3 = [{time:0,id:"healerWei",faction:-1,x:300,hp:bossHp*0.6,attack:bossAttack*8,tag:1,attackRate:0.5,attackRange:2000,
    ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1},
},
    {time:0,id:"mageWei",faction:-1,x:0,hp:bossHp*0.3,attack:bossAttack*2,attackRange:900,
        ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,
//					 followMove:{getTarget:function(){
//									                  return Macro.unit(1);
//								                     },
//								 distance:200,
//						        },
        },
    },
    {time:0,id:"mageWei",faction:-1,x:600,hp:bossHp*0.3,attack:bossAttack*2,attackRange:900,
        ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,
//					 followMove:{getTarget:function(){
//									                  return Macro.unit(1);
//								                     },
//								 distance:200,
//						        },
        },
    },
];
var obj5 = [{time:0,id:"LvBu",faction:-1,x:0,unitType:"boss",hp:bossHp,attack:bossAttack*1.3,
    ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1},
    spell:{
        ability:{id:"moonChopped",damage:bossAttack*1.5,range:400,},
        cooldown:15,
        config:{castTime:3.1,channelInterval:1,
            anim:{movementID:"attack16",speed:1,start:0,time:1,stunTimeOnFinish:0.5,stun:true}
        },
    }
}];
var obj4 = [{time:0,id:"mageWu",faction:-1,x:100,hp:bossHp*0.3,attack:bossAttack*8,tag:1,movementSpeed:2,
    ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1},
},
    {time:0,id:"pikemanWu",faction:-1,x:0,hp:bossHp*0.6,attack:bossAttack*2,attackRate:0.5,movementSpeed:2,
        ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,
            followMove:{getTarget:function(){
                return Macro.unit(1);
            },
                distance:100,
            },
        },
    },
    {time:0,id:"pikemanWu",faction:-1,x:199,hp:bossHp*0.6,attack:bossAttack*2,attackRate:0.5,movementSpeed:2,
        ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,
            followMove:{getTarget:function(){
                return Macro.unit(1);
            },
                distance:100,
            },
        },
    },
];
var obj5 = [{time:0,id:"LvBu",faction:-1,hp:bossHp,attack:bossAttack*2,x:0,
    ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1},
    spell:{
        ability:{id:"moonChopped",damage:bossAttack*3,range:400,},
        cooldown:12,
        config:{castTime:3.1,channelInterval:1,
            anim:{movementID:"attack16",speed:1,start:0,time:1,stunTimeOnFinish:0.5,stun:true}
        },
    }
}];
var obj6 = [{time:0,id:"MaChao",faction:-1,hp:bossHp,attack:bossAttack*2,x:0,
    ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1},
    spell:{
        ability:{id:"batterStrike",num:3,damage:bossAttack*4},
        cooldown:15,
        config:{castTime:1.5,
            anim:{movementID:"attack2",speed:0.5,start:0,time:1.55},
            anim2:{movementID:"attack2",speed:0.97,start:22,time:0.75,stun:true,loop:false},
        }
    }
}];
var obj7 = [{time:0,id:"PeiyuanShao",faction:-1,hp:bossHp,attack:bossAttack*2,x:0,
    ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1},
    spell:{
        ability:{id:"fireArrowRain",num:15,type:1,isfire:false,damage:bossAttack*6},
        cooldown:10,
        config:{
            castTime:2.5,name:"刀光箭雨",channelInterval:2.4,
            anim:{movementID:"attack17",speed:0.22,loop:false,start:0,time:2.5,},
            anim2:{movementID:"attack17",speed:0.6,loop:false,start:13,stun:true,
                child:{movementID:"stand",start:0,stun:true,stunTimeOnFinish:0.3}
            },
        },
    }
}];
var obj8 = [{time:0,id:"ZhangLiao",faction:-1,hp:bossHp,attack:bossAttack*1.5,x:0,
    ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1},
    spell:{
        ability:{id:"Meteorite",num:10,damage:bossAttack*5},
        cooldown:12,
        config:{castTime:2,
            anim:{movementID:"attack17",speed:0.22,loop:false,start:0,time:2.5,},
            anim2:{movementID:"attack17",speed:0.6,loop:false,start:13,stun:true,
                child:{movementID:"stand",start:0,stun:true,stunTimeOnFinish:0.3}
            },
        },
    }
}];
var obj9 = [{time:0,id:"ZhangJiao",faction:-1,hp:bossHp,attack:bossAttack*1.3,x:0,
    ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1},
    spell:[
        {ability:{id:"thunderShock",num:5,times:1.0,dtimes:1.5,color:"hua",damage:bossAttack*6},
            cooldown:12,
            config:{castTime:1.5,
                anim:{movementID:"attack2",speed:0.25,loop:false,start:0,time:1.6,//攻击动作，动作速度，是否循环，起始帧数，动作时间
                    child:{movementID:"attack2",start:10,pause:true,time:1,
                        child:{movementID:"attack2",speed:0.3,start:10,loop:false,}
                    }
                },
                anim2:{movementID:"attack2",speed:1,start:15,time:2.5,loop:true,stun:true,
                    child:{movementID:"attack2",start:0,time:0.001,stun:true,stunTimeOnFinish:0.5,}
                }
            },
        },

        {ability:{id:"thunderLight",damage:bossAttack*6,times:0.8,color:"hua",},
            cooldown:1.5,
            config:{
                anim:{movementID:"attack",speed:1,loop:false,stun:true,
                    child:{movementID:"stand",speed:1,loop:false,stun:true,},
                },
            },
        },
    ]
}];
var obj10 = [{time:0,id:"ZhugeLiang",x:100,faction:-1,hp:bossHp*1.5,attack:bossAttack*1,tag:1,movementSpeed:4,
    ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,
        callAmbush:{
            ambush:[
                {id:"specialMage",faction:-1,lvl:gPlayer.getCharacter().lvl+3,},
                {id:"specialFatMan",faction:-1,lvl:gPlayer.getCharacter().lvl+3,},
                {id:"specialFatMan",faction:-1,lvl:gPlayer.getCharacter().lvl+3,},
                {id:"healerQun",faction:-1,lvl:gPlayer.getCharacter().lvl+3,},
            ],
            hurtHpPercent:20,
        },
    },
    spell:[
        {
            ability:{id:"iceBlockRain",damage:bossAttack*4,times:3,num:10},
            cooldown:7,
            config:{castTime:1,
                anim:{movementID:"attack2",speed:0.4,loop:false,start:0,time:0.3,
                    child:{movementID:"attack2",start:10,pause:true,time:0.3,
                        child:{movementID:"attack2",speed:0.4,start:10,loop:false,}}
                },
                anim2:{movementID:"attack2",speed:1,start:22,pause:true,time:1,loop:false,stun:true,
                    child:{movementID:"stand",speed:1,loop:false,stun:true,}}
            },
        },
        {
            ability:{id:"Meteorite",damage:bossAttack*2,num:8},
            cooldown:9,
            config:{castTime:1,
                anim:{movementID:"attack2",speed:0.4,loop:false,start:0,time:0.3,
                    child:{movementID:"attack2",start:10,pause:true,time:0.3,
                        child:{movementID:"attack2",speed:0.4,start:10,loop:false,}}
                },
                anim2:{movementID:"attack2",speed:1,start:22,pause:true,time:1,loop:false,stun:true,
                    child:{movementID:"stand",speed:1,loop:false,stun:true,}}
            },
        },
        {
            ability:{id:"cureBuff",num:bossAttack*1,range:650,},
            cooldown:4,
            config:{anim:{movementID:"attack",loop:false,stun:true}},
        },
    ],
},
    {time:0,id:"specialShieldMan",faction:-1,x:0,hp:bossHp*0.5,attack:bossAttack*1,attackRange:300,size:0.8,
        ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,
            followMove:{getTarget:function(){
                return Macro.unit(1);
            },
                distance:200,
            },
        },
    },
    {time:0,id:"specialShieldMan",faction:-1,x:200,hp:bossHp*0.5,attack:bossAttack*1,attackRange:300,size:0.8,
        ai:{bossSoloAttack:1,bossSoloMove:1,actionWhenStand:1,Ability:1,
            followMove:{getTarget:function(){
                return Macro.unit(1);
            },
                distance:200,
            },
        },
    }			   	];
//enemyEnd.
var hideUint_arr = [obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10];

var createHideUnit = function(x){//生成一个隐藏的单位

    var index = getRandomIndex(hideUint_arr.length);
    var obj_arr = hideUint_arr[index];

    for(var i = 0 ; i < obj_arr.length; i++){
        obj_arr[i].x += x;
    }
    hideUint_arr.splice(index,1);
    return obj_arr;
};

var colorNum = 0;

var creatSingleUnit = function(x,hasDrop,hasHideUint){//生成单个单位
    //special表示特殊的瓶子，这个瓶子一定是好东西
    var obj = {time:0,id:"Bucket",x:x,hp:1,faction:2,name:"guanzi",special:0};//x:1100-Math.random()*100,
    //hasHideUint = true;
    if(hasHideUint){//如果是有隐藏物品
        obj.hideUnit =createHideUnit(x);
    }

    //obj.drop = {s_gold:{num:10,ct:2}};
    //obj.drop = {s_gem:{num:1,ct:2}};//玉璧
    //  obj.drop = {s_strength:{num:2,ct:2}};
   // obj.drop = {s_enchant:{chance:1,content:[{chance:1,id:"hpAdd1"}]}};

    //hasDrop = false;
    if(hasDrop){//如果是有掉落


        if(j >= awardIndexs.length/2-1 && j <= awardIndexs.length-1)
        {
            if(!isColorBucketCreated){
                isColorBucketCreated = true;
                obj.special = 1;
                colorNum++;
            }
        }
        if(j >= 0 && j <= awardIndexs.length-1)
        {
            if(colorNum < 3){
                if(Math.random() > 0.47){
                    colorNum++;
                    obj.special = 1;
                }
            }
        }
        var dropType = getRandomIndex(dropInitType.length);
        //dropType = 4;
        var dropData = {};
        if(dropType == 0 || dropType == 5 ){
            dropData = {heal:daopHealData[getRandomIndex(daopHealData.length)]};
        }else if(dropType == 1 || dropType == 6 || dropType == 7 || dropType == 8 ){
            dropData = {s_gold:dropGoldData[getRandomIndex(dropGoldData.length)]};
        }else if(dropType == 2 ||dropType == 9 ){
            dropData = {s_gem:gemData[getRandomIndex(gemData.length)]};
        }else if(dropType == 3 || dropType == 10 ){
            dropData = {s_strength:strength[getRandomIndex(strength.length)]};
        }else if(dropType == 4){
            dropData = {s_enchant:enchantData[getRandomIndex(enchantData.length)]};
        }
        //obj.drop = {dropType:{num:gPlayer.getCharacter().lvl*2,ct:1}};
        obj.drop = dropData;
    }else{
        obj.drop = {};
    }

    return obj;
};

var current_pos = 500+Math.random()*300;//第一个罐子的初始位置

//获得min到max的随机一个数
var getRandomNum = function(Min,Max){
    var Range = Max - Min;
    var Rand = Math.random();
    return(Min + Math.round(Rand * Range));
};
var getRandomIndex = function(num){
    return Math.floor(Math.random()*num);
}
var awardNum = getRandomNum(2,6);//随机2到7个箱子奖品物品
var awardIndexs = [];//随机奖励的下标
var totalNums = [0,1,2,3,4,5,6,7,8,9];

var getNums = function(){
    var index = getRandomIndex(totalNums.length);
    var tempValue = totalNums[index];
    totalNums.splice(index,1);
    return tempValue;
};

(function(){
    for(var i = 0; i < awardNum; i++){
        awardIndexs.push(getNums());
    }
})();

//下标为index的罐子是否有奖励
var isInAwardIndexs = function(index) {
    for (var i = 0; i < awardIndexs.length; i++) {
        if (index == awardIndexs[i]) {
            return true;
        }
    }
};
var j = 0;//随机一个特殊颜色的木桶
(function(){ //生成罐子里面的数据
    for(var i = 0; i < 10; i++){
        var hasDrop = false;//是否有掉落物
        var hasHideUint = false;//是否有隐藏人物
        if(isInAwardIndexs(i)){//有奖励
            j++;
            hasDrop = true;
        }else{
            hasHideUint = true;
        }
        uintArr.push(creatSingleUnit(current_pos,hasDrop,hasHideUint));
        current_pos += 150 + Math.random()*250;
        current_pos = current_pos > 3400?3400:current_pos;
    }
})();

var MapConfig={
    open_1_1:true,
    open_2_1:true,
    func_1:function(){
        if(MapConfig.open_1_1){
            MapConfig.open_1_1 = false;
            Macro.camMoveTo(cc.p(3000,"current"),1,3);//镜头跳到1000。set指令必须先取消跟随赵云才有效，用完需手动回归赵云。disfollow和set可以同时执行不分先后，两个指令都能完成。
            Macro.doLater(5,function(){
                Macro.camFollow(g_sharedFightLayer.myhero,60);//镜头跟随赵云
            });
        }
    },
    func_2:function(){//游戏胜利结束
        if(MapConfig.open_2_1){
            MapConfig.open_2_1 = false;
            TaskManager.taskDefine.killUnitBucket.s_taskComplete = false;
            g_sharedGameLayer.onFinish();
        }
    },
	unit :[uintArr],
	task:[
		{
			win:[
				{type:"killUnitBucket",faction:2,text:'探索所有罐子',id:"Bucket",textNum:true,require:10}
			],
			lose:[
				
			],
            update:function(){
                MapConfig.func_1();
            }
		}
	],
	init:function(){
//		Macro.setUnitBtnDisable(true);
	},
	config:{
		disable:{
//			myhero:true,ability:true,
			unit:true
		},
        drop:{rage:{chance:1,num:1}},
		gameEdge:{left:0,right:3800},
		reward:{exp:0,gold:2000,gem:2},
		unitLvl:gPlayer.getCharacter().lvl<35 ? gPlayer.getCharacter().lvl+3:gPlayer.getCharacter().lvl,
        showHitBucketBtn:true,
        update:function(){//当所有罐子被打碎后，再判断敌人是否死光
            if(g_sharedFightLayer.getCurrentFactionUnitCount(-1) <= 0)
            {
                MapConfig.func_2();
            }
        }
	}
};