/**
 * Created by Administrator on 2016/11/25.
 */


$(function () {

    var thisApi = {
        statue: {dev: "mock/statue.json",
            test: "http://192.168.1.150:9000/wx/school/v1.0/statue",
            product: "/wx/school/v1.0/statue"
        },
        revtProcessChta: {
            dev: "mock/revtProcessChta.json",
            test: "http://192.168.1.150:9000/wx/school/v1.0/oto/lol/allTeacher",
            product: "/wx/school/v1.0/oto/lol/allTeacher"
        },
        getUser: {
        dev: "mock/getUserInfo.json",
            test: "http://192.168.1.150:9000/wx/school/v1.0/getUserInfo",
            product: "/wx/school/v1.0/getUserInfo"
    }

    };
    bMock.setFace(thisApi);
    bMock.setEnv("product")


    //获取登录状态
    function getStatus() {
        $.get(bMock.getFace("statue"), function (data, status) {
            if (!data.data) {
                window.location.href = "index.html?" + window.location.pathname + window.location.search;
            } else {
                console.log("登录成功！");
            }
        });
    }

    //时间戳转换
    function formatDate(now) {
        var month = now.getMonth() + 1;
        var date = now.getDate();
        var week = now.getDay();
        var weekDay = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
        var hour = now.getHours();
        var minute = now.getMinutes();
        return month + " 月 " + date + " 日 " + " ( " + weekDay[week] + " ) " + hour + ":" + minute;
    }

    //老师信息查询
    function getTeacher(value) {
        var thisTeacher;
        $.ajax({
            async: false,
            url: bMock.getFace("revtProcessChta"),
            success: function (data, status) {
                thisTeacher = data.data;
            }
        });
        return thisTeacher;
    }



    //学员userId查询
    var studentId;
    var studentNum;
    function getStudent() {
        $.ajax
        ({
            async: false,
            url: bMock.getFace("statue"),
            success: function (data) {
                studentId = data.data.userInfo.userId;
                studentNum = data.data.studentNum;
                console.log(studentNum);
            }
        });
    }
    getStudent();



    //判断学生信息（电话，QQ，邮箱）
    function getUserInfo(){
        $.get(bMock.getFace("getUser")+'?'+'userId='+studentId, function (data, status) {
            if(data.data){
                if (data.data.phone || data.data.qq || data.data.yy ) {
                    console.log("可以预约老师！");
                    console.log(data);

                } else {
                    window.open("revtProcessConn.html");
                    console.log("没有学生联系方式，跳转到联系页面");
                }
            }else{
                //window.open("revtProcessConn.html");
                console.log("没有学生联系方式，跳转到联系页面");

            }

        });
    };

    getUserInfo();


    //获取全部老师信息

    //老师英雄图标地址
    var hero = {
        "error": false,
        "msg": "",
        "data": [{
            "version": 0,
            "disable": false,
            "id": -1,
            "championId": -1,
            "ename": "无英雄",
            "title": "无英雄",
            "cname": "无英雄",
            "pic": "无英雄"
        }, {
            "version": 0,
            "disable": false,
            "id": 1,
            "championId": 1,
            "ename": "Annie",
            "title": "黑暗之女",
            "cname": "安妮",
            "pic": "annie_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 2,
            "championId": 2,
            "ename": "Olaf",
            "title": "狂战士",
            "cname": "奥拉夫",
            "pic": "olaf_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 3,
            "championId": 3,
            "ename": "Galio",
            "title": "哨兵之殇",
            "cname": "加里奥",
            "pic": "galio_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 4,
            "championId": 4,
            "ename": "TwistedFate",
            "title": "卡牌大师",
            "cname": "崔斯特",
            "pic": "twistedfate_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 5,
            "championId": 5,
            "ename": "XinZhao",
            "title": "德邦总管",
            "cname": "赵信",
            "pic": "xinzhao_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 6,
            "championId": 6,
            "ename": "Urgot",
            "title": "首领之傲",
            "cname": "厄加特",
            "pic": "urgot_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 7,
            "championId": 7,
            "ename": "Leblanc",
            "title": "诡术妖姬",
            "cname": "乐芙兰",
            "pic": "leblanc_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 8,
            "championId": 8,
            "ename": "Vladimir",
            "title": "猩红收割者",
            "cname": "弗拉基米尔",
            "pic": "vladimir_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 9,
            "championId": 9,
            "ename": "FiddleSticks",
            "title": "末日使者",
            "cname": "费德提克",
            "pic": "fiddlesticks_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 10,
            "championId": 10,
            "ename": "Kayle",
            "title": "审判天使",
            "cname": "凯尔",
            "pic": "kayle_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 11,
            "championId": 11,
            "ename": "MasterYi",
            "title": "无极剑圣",
            "cname": "易",
            "pic": "masteryi_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 12,
            "championId": 12,
            "ename": "Alistar",
            "title": "牛头酋长",
            "cname": "阿利斯塔",
            "pic": "alistar_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 13,
            "championId": 13,
            "ename": "Ryze",
            "title": "流浪法师",
            "cname": "瑞兹",
            "pic": "ryze_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 14,
            "championId": 14,
            "ename": "Sion",
            "title": "亡灵战神",
            "cname": "赛恩",
            "pic": "sion_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 15,
            "championId": 15,
            "ename": "Sivir",
            "title": "战争女神",
            "cname": "希维尔",
            "pic": "sivir_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 16,
            "championId": 16,
            "ename": "Soraka",
            "title": "众星之子",
            "cname": "索拉卡",
            "pic": "soraka_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 17,
            "championId": 17,
            "ename": "Teemo",
            "title": "迅捷斥候",
            "cname": "提莫",
            "pic": "teemo_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 18,
            "championId": 18,
            "ename": "Tristana",
            "title": "麦林炮手",
            "cname": "崔丝塔娜",
            "pic": "tristana_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 19,
            "championId": 19,
            "ename": "Warwick",
            "title": "嗜血猎手",
            "cname": "沃里克",
            "pic": "warwick_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 20,
            "championId": 20,
            "ename": "Nunu",
            "title": "雪人骑士",
            "cname": "努努",
            "pic": "nunu_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 21,
            "championId": 21,
            "ename": "MissFortune",
            "title": "赏金猎人",
            "cname": "厄运小姐",
            "pic": "missfortune_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 22,
            "championId": 22,
            "ename": "Ashe",
            "title": "寒冰射手",
            "cname": "艾希",
            "pic": "ashe_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 23,
            "championId": 23,
            "ename": "Tryndamere",
            "title": "蛮族之王",
            "cname": "泰达米尔",
            "pic": "tryndamere_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 24,
            "championId": 24,
            "ename": "Jax",
            "title": "武器大师",
            "cname": "贾克斯",
            "pic": "jax_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 25,
            "championId": 25,
            "ename": "Morgana",
            "title": "堕落天使",
            "cname": "莫甘娜",
            "pic": "morgana_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 26,
            "championId": 26,
            "ename": "Zilean",
            "title": "时光守护者",
            "cname": "基兰",
            "pic": "zilean_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 27,
            "championId": 27,
            "ename": "Singed",
            "title": "炼金术士",
            "cname": "辛吉德",
            "pic": "singed_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 28,
            "championId": 28,
            "ename": "Evelynn",
            "title": "寡妇制造者",
            "cname": "伊芙琳",
            "pic": "evelynn_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 29,
            "championId": 29,
            "ename": "Twitch",
            "title": "瘟疫之源",
            "cname": "图奇",
            "pic": "twitch_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 30,
            "championId": 30,
            "ename": "Karthus",
            "title": "死亡颂唱者",
            "cname": "卡尔萨斯",
            "pic": "karthus_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 31,
            "championId": 31,
            "ename": "Chogath",
            "title": "虚空恐惧",
            "cname": "科'加斯",
            "pic": "chogath_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 32,
            "championId": 32,
            "ename": "Amumu",
            "title": "殇之木乃伊",
            "cname": "阿木木",
            "pic": "amumu_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 33,
            "championId": 33,
            "ename": "Rammus",
            "title": "披甲龙龟",
            "cname": "拉莫斯",
            "pic": "rammus_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 34,
            "championId": 34,
            "ename": "Anivia",
            "title": "冰晶凤凰",
            "cname": "艾尼维亚",
            "pic": "anivia_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 35,
            "championId": 35,
            "ename": "Shaco",
            "title": "恶魔小丑",
            "cname": "萨科",
            "pic": "shaco_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 36,
            "championId": 36,
            "ename": "DrMundo",
            "title": "祖安狂人",
            "cname": "蒙多医生",
            "pic": "drmundo_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 37,
            "championId": 37,
            "ename": "Sona",
            "title": "琴瑟仙女",
            "cname": "娑娜",
            "pic": "sona_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 38,
            "championId": 38,
            "ename": "Kassadin",
            "title": "虚空行者",
            "cname": "卡萨丁",
            "pic": "kassadin_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 39,
            "championId": 39,
            "ename": "Irelia",
            "title": "刀锋意志",
            "cname": "艾瑞莉娅",
            "pic": "irelia_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 40,
            "championId": 40,
            "ename": "Janna",
            "title": "风暴之怒",
            "cname": "迦娜",
            "pic": "janna_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 41,
            "championId": 41,
            "ename": "Gangplank",
            "title": "海洋之灾",
            "cname": "普朗克",
            "pic": "gangplank_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 42,
            "championId": 42,
            "ename": "Corki",
            "title": "英勇投弹手",
            "cname": "库奇",
            "pic": "corki_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 43,
            "championId": 43,
            "ename": "Karma",
            "title": "天启者",
            "cname": "卡尔玛",
            "pic": "karma_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 44,
            "championId": 44,
            "ename": "Taric",
            "title": "宝石骑士",
            "cname": "塔里克",
            "pic": "taric_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 45,
            "championId": 45,
            "ename": "Veigar",
            "title": "邪恶小法师",
            "cname": "维迦",
            "pic": "veigar_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 48,
            "championId": 48,
            "ename": "Trundle",
            "title": "巨魔之王",
            "cname": "特朗德尔",
            "pic": "trundle_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 50,
            "championId": 50,
            "ename": "Swain",
            "title": "策士统领",
            "cname": "斯维因",
            "pic": "swain_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 51,
            "championId": 51,
            "ename": "Caitlyn",
            "title": "皮城女警",
            "cname": "凯特琳",
            "pic": "caitlyn_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 53,
            "championId": 53,
            "ename": "Blitzcrank",
            "title": "蒸汽机器人",
            "cname": "布里茨",
            "pic": "blitzcrank_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 54,
            "championId": 54,
            "ename": "Malphite",
            "title": "熔岩巨兽",
            "cname": "墨菲特",
            "pic": "malphite_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 55,
            "championId": 55,
            "ename": "Katarina",
            "title": "不祥之刃",
            "cname": "卡特琳娜",
            "pic": "katarina_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 56,
            "championId": 56,
            "ename": "Nocturne",
            "title": "永恒梦魇",
            "cname": "魔腾",
            "pic": "nocturne_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 57,
            "championId": 57,
            "ename": "Maokai",
            "title": "扭曲树精",
            "cname": "茂凯",
            "pic": "maokai_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 58,
            "championId": 58,
            "ename": "Renekton",
            "title": "荒漠屠夫",
            "cname": "雷克顿",
            "pic": "renekton_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 59,
            "championId": 59,
            "ename": "JarvanIV",
            "title": "德玛西亚皇子",
            "cname": "嘉文四世",
            "pic": "jarvaniv_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 60,
            "championId": 60,
            "ename": "Elise",
            "title": "蜘蛛女皇",
            "cname": "伊莉丝",
            "pic": "elise_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 61,
            "championId": 61,
            "ename": "Orianna",
            "title": "发条魔灵",
            "cname": "奥莉安娜",
            "pic": "orianna_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 62,
            "championId": 62,
            "ename": "MonkeyKing",
            "title": "齐天大圣",
            "cname": "孙悟空",
            "pic": "monkeyking_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 63,
            "championId": 63,
            "ename": "Brand",
            "title": "复仇焰魂",
            "cname": "布兰德",
            "pic": "brand_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 64,
            "championId": 64,
            "ename": "LeeSin",
            "title": "盲僧",
            "cname": "李青",
            "pic": "leesin_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 67,
            "championId": 67,
            "ename": "Vayne",
            "title": "暗夜猎手",
            "cname": "薇恩",
            "pic": "vayne_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 68,
            "championId": 68,
            "ename": "Rumble",
            "title": "机械公敌",
            "cname": "兰博",
            "pic": "rumble_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 69,
            "championId": 69,
            "ename": "Cassiopeia",
            "title": "魔蛇之拥",
            "cname": "卡西奥佩娅",
            "pic": "cassiopeia_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 72,
            "championId": 72,
            "ename": "Skarner",
            "title": "水晶先锋",
            "cname": "斯卡纳",
            "pic": "skarner_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 74,
            "championId": 74,
            "ename": "Heimerdinger",
            "title": "大发明家",
            "cname": "黑默丁格",
            "pic": "heimerdinger_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 75,
            "championId": 75,
            "ename": "Nasus",
            "title": "沙漠死神",
            "cname": "内瑟斯",
            "pic": "nasus_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 76,
            "championId": 76,
            "ename": "Nidalee",
            "title": "狂野女猎手",
            "cname": "奈德丽",
            "pic": "nidalee_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 77,
            "championId": 77,
            "ename": "Udyr",
            "title": "兽灵行者",
            "cname": "乌迪尔",
            "pic": "udyr_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 78,
            "championId": 78,
            "ename": "Poppy",
            "title": "圣锤之毅",
            "cname": "波比",
            "pic": "poppy_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 79,
            "championId": 79,
            "ename": "Gragas",
            "title": "酒桶",
            "cname": "古拉加斯",
            "pic": "gragas_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 80,
            "championId": 80,
            "ename": "Pantheon",
            "title": "战争之王",
            "cname": "潘森",
            "pic": "pantheon_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 81,
            "championId": 81,
            "ename": "Ezreal",
            "title": "探险家",
            "cname": "伊泽瑞尔",
            "pic": "ezreal_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 82,
            "championId": 82,
            "ename": "Mordekaiser",
            "title": "金属大师",
            "cname": "莫德凯撒",
            "pic": "mordekaiser_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 83,
            "championId": 83,
            "ename": "Yorick",
            "title": "掘墓者",
            "cname": "约里克",
            "pic": "yorick_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 84,
            "championId": 84,
            "ename": "Akali",
            "title": "暗影之拳",
            "cname": "阿卡丽",
            "pic": "akali_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 85,
            "championId": 85,
            "ename": "Kennen",
            "title": "狂暴之心",
            "cname": "凯南",
            "pic": "kennen_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 86,
            "championId": 86,
            "ename": "Garen",
            "title": "德玛西亚之力",
            "cname": "盖伦",
            "pic": "garen_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 89,
            "championId": 89,
            "ename": "Leona",
            "title": "曙光女神",
            "cname": "蕾欧娜",
            "pic": "leona_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 90,
            "championId": 90,
            "ename": "Malzahar",
            "title": "虚空先知",
            "cname": "玛尔扎哈",
            "pic": "malzahar_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 91,
            "championId": 91,
            "ename": "Talon",
            "title": "刀锋之影",
            "cname": "泰隆",
            "pic": "talon_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 92,
            "championId": 92,
            "ename": "Riven",
            "title": "放逐之刃",
            "cname": "锐雯",
            "pic": "riven_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 96,
            "championId": 96,
            "ename": "KogMaw",
            "title": "深渊巨口",
            "cname": "克格'莫",
            "pic": "kogmaw_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 98,
            "championId": 98,
            "ename": "Shen",
            "title": "暮光之眼",
            "cname": "慎",
            "pic": "shen_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 99,
            "championId": 99,
            "ename": "Lux",
            "title": "光辉女郎",
            "cname": "拉克丝",
            "pic": "lux_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 101,
            "championId": 101,
            "ename": "Xerath",
            "title": "远古巫灵",
            "cname": "泽拉斯",
            "pic": "xerath_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 102,
            "championId": 102,
            "ename": "Shyvana",
            "title": "龙血武姬",
            "cname": "希瓦娜",
            "pic": "shyvana_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 103,
            "championId": 103,
            "ename": "Ahri",
            "title": "九尾妖狐",
            "cname": "阿狸",
            "pic": "ahri_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 104,
            "championId": 104,
            "ename": "Graves",
            "title": "法外狂徒",
            "cname": "格雷福斯",
            "pic": "graves_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 105,
            "championId": 105,
            "ename": "Fizz",
            "title": "潮汐海灵",
            "cname": "菲兹",
            "pic": "fizz_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 106,
            "championId": 106,
            "ename": "Volibear",
            "title": "雷霆咆哮",
            "cname": "沃利贝尔",
            "pic": "volibear_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 107,
            "championId": 107,
            "ename": "Rengar",
            "title": "傲之追猎者",
            "cname": "雷恩加尔",
            "pic": "rengar_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 110,
            "championId": 110,
            "ename": "Varus",
            "title": "惩戒之箭",
            "cname": "韦鲁斯",
            "pic": "varus_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 111,
            "championId": 111,
            "ename": "Nautilus",
            "title": "深海泰坦",
            "cname": "诺提勒斯",
            "pic": "nautilus_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 112,
            "championId": 112,
            "ename": "Viktor",
            "title": "机械先驱",
            "cname": "维克托",
            "pic": "viktor_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 113,
            "championId": 113,
            "ename": "Sejuani",
            "title": "凛冬之怒",
            "cname": "瑟庄妮",
            "pic": "sejuani_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 114,
            "championId": 114,
            "ename": "Fiora",
            "title": "无双剑姬",
            "cname": "菲奥娜",
            "pic": "fiora_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 115,
            "championId": 115,
            "ename": "Ziggs",
            "title": "爆破鬼才",
            "cname": "吉格斯",
            "pic": "ziggs_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 117,
            "championId": 117,
            "ename": "Lulu",
            "title": "仙灵女巫",
            "cname": "璐璐",
            "pic": "lulu_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 119,
            "championId": 119,
            "ename": "Draven",
            "title": "荣耀行刑官",
            "cname": "德莱文",
            "pic": "draven_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 120,
            "championId": 120,
            "ename": "Hecarim",
            "title": "战争之影",
            "cname": "赫卡里姆",
            "pic": "hecarim_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 121,
            "championId": 121,
            "ename": "Khazix",
            "title": "虚空掠夺者",
            "cname": "卡兹克",
            "pic": "khazix_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 122,
            "championId": 122,
            "ename": "Darius",
            "title": "诺克萨斯之手",
            "cname": "德莱厄斯",
            "pic": "darius_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 126,
            "championId": 126,
            "ename": "Jayce",
            "title": "未来守护者",
            "cname": "杰斯",
            "pic": "jayce_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 127,
            "championId": 127,
            "ename": "Lissandra",
            "title": "冰霜女巫",
            "cname": "丽桑卓",
            "pic": "lissandra_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 131,
            "championId": 131,
            "ename": "Diana",
            "title": "皎月女神",
            "cname": "黛安娜",
            "pic": "diana_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 133,
            "championId": 133,
            "ename": "Quinn",
            "title": "德玛西亚之翼",
            "cname": "奎因",
            "pic": "quinn_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 134,
            "championId": 134,
            "ename": "Syndra",
            "title": "暗黑元首",
            "cname": "辛德拉",
            "pic": "syndra_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 136,
            "championId": 136,
            "ename": "AurelionSol",
            "title": "铸星龙王",
            "cname": "奥瑞利安索尔",
            "pic": "AurelionSol_Square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 143,
            "championId": 143,
            "ename": "Zyra",
            "title": "荆棘之兴",
            "cname": "婕拉",
            "pic": "zyra_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 150,
            "championId": 150,
            "ename": "Gnar",
            "title": "迷失之牙",
            "cname": "纳尔",
            "pic": "gnar_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 154,
            "championId": 154,
            "ename": "Zac",
            "title": "生化魔人",
            "cname": "扎克",
            "pic": "zac_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 157,
            "championId": 157,
            "ename": "Yasuo",
            "title": "疾风剑豪",
            "cname": "亚索",
            "pic": "yasuo_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 161,
            "championId": 161,
            "ename": "Velkoz",
            "title": "虚空之眼",
            "cname": "维克兹",
            "pic": "velkoz_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 163,
            "championId": 163,
            "ename": "Taliyah",
            "title": "岩雀",
            "cname": "塔莉垭",
            "pic": "Taliyah_Square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 201,
            "championId": 201,
            "ename": "Braum",
            "title": "弗雷尔卓德之心",
            "cname": "布隆",
            "pic": "braum_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 202,
            "championId": 202,
            "ename": "Jhin",
            "title": "戏命师",
            "cname": "烬",
            "pic": "Jhin_Square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 203,
            "championId": 203,
            "ename": "Kindred",
            "title": "永猎双子",
            "cname": "千珏",
            "pic": "Kindred_Square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 222,
            "championId": 222,
            "ename": "Jinx",
            "title": "暴走萝莉",
            "cname": "金克丝",
            "pic": "jinx_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 223,
            "championId": 223,
            "ename": "TahmKench",
            "title": "河流之王",
            "cname": "塔姆",
            "pic": "TahmKench_Square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 236,
            "championId": 236,
            "ename": "Lucian",
            "title": "圣枪游侠",
            "cname": "卢锡安",
            "pic": "lucian_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 238,
            "championId": 238,
            "ename": "Zed",
            "title": "影流之主",
            "cname": "劫",
            "pic": "zed_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 245,
            "championId": 245,
            "ename": "Ekko",
            "title": "时间刺客",
            "cname": "艾克",
            "pic": "Ekko_Square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 254,
            "championId": 254,
            "ename": "Vi",
            "title": "皮城执法官",
            "cname": "蔚",
            "pic": "vi_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 266,
            "championId": 266,
            "ename": "Aatrox",
            "title": "暗裔剑魔",
            "cname": "亚托克斯",
            "pic": "aatrox_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 267,
            "championId": 267,
            "ename": "Nami",
            "title": "唤潮鲛姬",
            "cname": "娜美",
            "pic": "nami_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 268,
            "championId": 268,
            "ename": "Azir",
            "title": "沙漠皇帝",
            "cname": "阿兹尔",
            "pic": "azir_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 412,
            "championId": 412,
            "ename": "Thresh",
            "title": "魂锁典狱长",
            "cname": "锤石",
            "pic": "thresh_square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 420,
            "championId": 420,
            "ename": "Illaoi",
            "title": "海兽祭司",
            "cname": "俄洛伊",
            "pic": "illaoi_Square_0.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 421,
            "championId": 421,
            "ename": "RekSai",
            "title": "虚空遁地兽",
            "cname": "雷克塞",
            "pic": "RekSai.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 429,
            "championId": 429,
            "ename": "Kalista",
            "title": "复仇之矛",
            "cname": "卡莉丝塔",
            "pic": "Kalista.png"
        }, {
            "version": 0,
            "disable": false,
            "id": 432,
            "championId": 432,
            "ename": "Bard",
            "title": "星界游神",
            "cname": "巴德",
            "pic": "Bard_Square_0.png"
        }],
        "length": 132,
        "rtCode": null
    }

    function getRevtProcessChta() {

        $.get(bMock.getFace("revtProcessChta"), function (data, status) {
            console.log(data.data);
            var sections="";
            $.each(data.data,function(i,v){

                var imgages="";
                $.each(data.data[i].goodAtChampions,function(k,v){

                    var images1="";
                    images1+='<img class="in-img" src="http://static.iboom.tv/static/img/'+hero.data[v].ename+'.png">';
                    imgages+=images1;
                });

                var pp= imgages;

                var section1="";
                section1+= '<div class="chat">'+'<section>'+'<div class="revpros_chta_cont revpros_chta_cont'+i+'">'+'<div class="revpros_chta_pic_wrap">'+'<div class="revpros_chta_pic">'+'<div class="revcp_cot">'+'<div class="revcp_cott">'+'<img src="http://static.iboom.tv/static/img/'+data.data[i].head+'">'+'</div>'+'</div>'+'</div>'+'</div>'+'<div class="revpros_chta_cnt_wrap">'+'<div class="revpros_chta_cnt">'+'<dl>'+'<dt>'+'<ul>'+'<li>'+data.data[i].name+'</li>'+'<li>明天可约</li>'+'</ul>'+'</dt>'+'<dd class="revpros_chta_cnt_d1">'+'<ul>'+'<li>授课范围：</li>'+'<li class="revcp_cott_jx'+i+'">'+data.data[i].teachRange+'</li>'+'</ul>'+'</dd>'+'<dd>'+'<ul>'+'<li>累计完成：</li>'+'<li>' + data.data[i].num + '次一对一教学</li>'+'</ul>'+'</dd>'+'<dd>'+'<ul>'+'<li>擅长英雄：</li>'+'<li>'+'<ol class="heroo">'+pp+'</ol>'+'</li>'+'</ul>'+'</dd>'+'<dd>'+'<a href="revtProcessTmct.html?'+data.data[i].userId+'">'+'<button>预约老师</button>'+'</a>'+'</dd>'+'</dl>'+'</div>'+'</div>'+'<div class="clear"></div>'+'</div>'+'</section>'+'</div>'
                sections+=section1;

            })
            $(".revpros_chta_body").append(sections)

        });
    }
    //获取符合筛选条件的老师信息
    $("select").change(function () {
        $(".chat").remove();
        if($("#ssel").find("option:selected").text()==="中路"){
            function getRevtProcessChta2() {
                $.get(bMock.getFace("revtProcessChta"), function (data, status) {
                    var sections = "";
                    var arry=[];
                    var u=0;
                    $.each(data.data,function(k,val){
                        if(data.data[k].teachRange.indexOf("中路")!=-1){
                            arry[u]=data.data[k];
                            u++;
                        }
                    });
                     if($("#ssel option[value='按分路筛选']").val()==="按分路筛选"){
                         $("#ssel option[value='按分路筛选']").remove();
                         $("#ssel").prepend("<option value='全部老师'>全部老师</option>");
                     }else{
                         $("#ssel option[value='全部老师']").remove();
                         $("#ssel").prepend("<option value='全部老师'>全部老师</option>");
                     }


                    $.each(arry,function(i,v){

                        var imgages="";
                        $.each(data.data[i].goodAtChampions,function(k,v){

                            var images1="";
                            images1+='<img class="in-img" src="http://static.iboom.tv/static/img/'+hero.data[v].ename+'.png">';
                            imgages+=images1;
                        });

                        var pp= imgages;


                        var section1="";
                        section1+= '<div class="chat">'+'<section>'+'<div class="revpros_chta_cont revpros_chta_cont'+i+'">'+'<div class="revpros_chta_pic_wrap">'+'<div class="revpros_chta_pic">'+'<div class="revcp_cot">'+'<div class="revcp_cott">'+'<img src="http://static.iboom.tv/static/img/'+arry[i].head+'">'+'</div>'+'</div>'+'</div>'+'</div>'+'<div class="revpros_chta_cnt_wrap">'+'<div class="revpros_chta_cnt">'+'<dl>'+'<dt>'+'<ul>'+'<li>'+arry[i].name+'</li>'+'<li>明天可约</li>'+'</ul>'+'</dt>'+'<dd class="revpros_chta_cnt_d1">'+'<ul>'+'<li>授课范围：</li>'+'<li class="revcp_cott_jx'+i+'">'+arry[i].teachRange+'</li>'+'</ul>'+'</dd>'+'<dd>'+'<ul>'+'<li>累计完成：</li>'+'<li>' + arry[i].num + '次一对一教学</li>'+'</ul>'+'</dd>'+'<dd>'+'<ul>'+'<li>擅长英雄：</li>'+'<li>'+'<ol class="heroo">'+pp+'</ol>'+'</li>'+'</ul>'+'</dd>'+'<dd>'+'<a href="revtProcessTmct.html?'+arry[i].userId+'">'+'<button>预约老师</button>'+'</a>'+'</dd>'+'</dl>'+'</div>'+'</div>'+'<div class="clear"></div>'+'</div>'+'</section>'+'</div>'
                        sections+=section1;

                    })
                    $(".revpros_chta_body").append(sections)

                });
            }
            getRevtProcessChta2()
        }else if($("#ssel").find("option:selected").text()==="上路"){
            function getRevtProcessChta2() {
                $.get(bMock.getFace("revtProcessChta"), function (data, status) {
                    var sections = "";
                    var arry=[];
                    var u=0;
                    $.each(data.data,function(k,val){
                        if(data.data[k].teachRange.indexOf("上路")!=-1){
                            arry[u]=data.data[k];
                            u++;
                        }
                    });

                     if($("#ssel option[value='按分路筛选']").val()==="按分路筛选"){
                         $("#ssel option[value='按分路筛选']").remove();
                         $("#ssel").prepend("<option value='全部老师'>全部老师</option>");
                     }else{
                         $("#ssel option[value='全部老师']").remove();
                         $("#ssel").prepend("<option value='全部老师'>全部老师</option>");
                     };


                    $.each(arry,function(i,v){

                        var imgages="";
                        $.each(data.data[i].goodAtChampions,function(k,v){

                            var images1="";
                            images1+='<img class="in-img" src="http://static.iboom.tv/static/img/'+hero.data[v].ename+'.png">';
                            imgages+=images1;
                        });

                        var pp= imgages;

                        var section1="";
                        section1+= '<div class="chat">'+'<section>'+'<div class="revpros_chta_cont revpros_chta_cont'+i+'">'+'<div class="revpros_chta_pic_wrap">'+'<div class="revpros_chta_pic">'+'<div class="revcp_cot">'+'<div class="revcp_cott">'+'<img src="http://static.iboom.tv/static/img/'+arry[i].head+'">'+'</div>'+'</div>'+'</div>'+'</div>'+'<div class="revpros_chta_cnt_wrap">'+'<div class="revpros_chta_cnt">'+'<dl>'+'<dt>'+'<ul>'+'<li>'+arry[i].name+'</li>'+'<li>明天可约</li>'+'</ul>'+'</dt>'+'<dd class="revpros_chta_cnt_d1">'+'<ul>'+'<li>授课范围：</li>'+'<li class="revcp_cott_jx'+i+'">'+arry[i].teachRange+'</li>'+'</ul>'+'</dd>'+'<dd>'+'<ul>'+'<li>累计完成：</li>'+'<li>' + arry[i].num + '次一对一教学</li>'+'</ul>'+'</dd>'+'<dd>'+'<ul>'+'<li>擅长英雄：</li>'+'<li>'+'<ol class="heroo">'+pp+'</ol>'+'</li>'+'</ul>'+'</dd>'+'<dd>'+'<a href="revtProcessTmct.html?'+arry[i].userId+'">'+'<button>预约老师</button>'+'</a>'+'</dd>'+'</dl>'+'</div>'+'</div>'+'<div class="clear"></div>'+'</div>'+'</section>'+'</div>'
                        sections+=section1;

                    })
                    $(".revpros_chta_body").append(sections)

                });
            }
            getRevtProcessChta2()
        }else if($("#ssel").find("option:selected").text()==="下路"){
            function getRevtProcessChta2() {
                $.get(bMock.getFace("revtProcessChta"), function (data, status) {
                    var sections = "";
                    var arry=[];
                    var u=0;
                    $.each(arry,function(k,val){
                        if(data.data[k].teachRange.indexOf("下路")!=-1){
                            arry[u]=data.data[k];
                            u++;
                        }
                    });

                     if($("#ssel option[value='按分路筛选']").val()==="按分路筛选"){
                         $("#ssel option[value='按分路筛选']").remove();
                         $("#ssel").prepend("<option value='全部老师'>全部老师</option>");
                     }else{
                         $("#ssel option[value='全部老师']").remove();
                         $("#ssel").prepend("<option value='全部老师'>全部老师</option>");
                     }

                    $.each(arry,function(i,v){

                        var imgages="";
                        $.each(data.data[i].goodAtChampions,function(k,v){

                            var images1="";
                            images1+='<img class="in-img" src="http://static.iboom.tv/static/img/'+hero.data[v].ename+'.png">';
                            imgages+=images1;
                        });

                        var pp= imgages;

                        var section1="";
                        section1+= '<div class="chat">'+'<section>'+'<div class="revpros_chta_cont revpros_chta_cont'+i+'">'+'<div class="revpros_chta_pic_wrap">'+'<div class="revpros_chta_pic">'+'<div class="revcp_cot">'+'<div class="revcp_cott">'+'<img src="http://static.iboom.tv/static/img/'+arry[i].head+'">'+'</div>'+'</div>'+'</div>'+'</div>'+'<div class="revpros_chta_cnt_wrap">'+'<div class="revpros_chta_cnt">'+'<dl>'+'<dt>'+'<ul>'+'<li>'+arry[i].name+'</li>'+'<li>明天可约</li>'+'</ul>'+'</dt>'+'<dd class="revpros_chta_cnt_d1">'+'<ul>'+'<li>授课范围：</li>'+'<li class="revcp_cott_jx'+i+'">'+arry[i].teachRange+'</li>'+'</ul>'+'</dd>'+'<dd>'+'<ul>'+'<li>累计完成：</li>'+'<li>' + darry[i].num + '次一对一教学</li>'+'</ul>'+'</dd>'+'<dd>'+'<ul>'+'<li>擅长英雄：</li>'+'<li>'+'<ol class="heroo">'+pp+'</ol>'+'</li>'+'</ul>'+'</dd>'+'<dd>'+'<a href="revtProcessTmct.html?'+arry[i].userId+'">'+'<button>预约老师</button>'+'</a>'+'</dd>'+'</dl>'+'</div>'+'</div>'+'<div class="clear"></div>'+'</div>'+'</section>'+'</div>'
                        sections+=section1;

                    })
                    $(".revpros_chta_body").append(sections)

                });
            }
            getRevtProcessChta2()
        }else if($("#ssel").find("option:selected").text()==="全部老师"){

            $.get(bMock.getFace("revtProcessChta"), function (data, status) {
                console.log(data.data);
                var sections="";
                $.each(data.data,function(i,v){

                    var imgages="";
                    $.each(data.data[i].goodAtChampions,function(k,v){

                        var images1="";
                        images1+='<img class="in-img" src="http://static.iboom.tv/static/img/'+hero.data[v].ename+'.png">';
                        imgages+=images1;
                    });


                    var pp= imgages;



                    var section1="";
                    section1+= '<div class="chat">'+'<section>'+'<div class="revpros_chta_cont revpros_chta_cont'+i+'">'+'<div class="revpros_chta_pic_wrap">'+'<div class="revpros_chta_pic">'+'<div class="revcp_cot">'+'<div class="revcp_cott">'+'<img src="http://static.iboom.tv/static/img/'+data.data[i].head+'">'+'</div>'+'</div>'+'</div>'+'</div>'+'<div class="revpros_chta_cnt_wrap">'+'<div class="revpros_chta_cnt">'+'<dl>'+'<dt>'+'<ul>'+'<li>'+data.data[i].name+'</li>'+'<li>明天可约</li>'+'</ul>'+'</dt>'+'<dd class="revpros_chta_cnt_d1">'+'<ul>'+'<li>授课范围：</li>'+'<li class="revcp_cott_jx'+i+'">'+data.data[i].teachRange+'</li>'+'</ul>'+'</dd>'+'<dd>'+'<ul>'+'<li>累计完成：</li>'+'<li>' + data.data[i].num + '次一对一教学</li>'+'</ul>'+'</dd>'+'<dd>'+'<ul>'+'<li>擅长英雄：</li>'+'<li>'+'<ol class="heroo">'+pp+'</ol>'+'</li>'+'</ul>'+'</dd>'+'<dd>'+'<a href="revtProcessTmct.html?'+data.data[i].userId+'">'+'<button>预约老师</button>'+'</a>'+'</dd>'+'</dl>'+'</div>'+'</div>'+'<div class="clear"></div>'+'</div>'+'</section>'+'</div>'
                    sections+=section1;

                })
                $(".revpros_chta_body").append(sections);
                $("#ssel").prepend("<option value='按分路筛选'>按分路筛选</option>");
                $("#ssel option[value='全部老师']").remove();


            });
        }else if($("#ssel").find("option:selected").text()==="按分路筛选"){
            $.get(bMock.getFace("revtProcessChta"), function (data, status) {
                console.log(data.data);
                var sections="";
                $.each(data.data,function(i,v){

                    var imgages="";
                    $.each(data.data[i].goodAtChampions,function(k,v){

                        var images1="";
                        images1+='<img class="in-img" src="http://static.iboom.tv/static/img/'+hero.data[v].ename+'.png">';
                        imgages+=images1;
                    });

                    var pp= imgages;

                    var section1="";
                    section1+= '<div class="chat">'+'<section>'+'<div class="revpros_chta_cont revpros_chta_cont'+i+'">'+'<div class="revpros_chta_pic_wrap">'+'<div class="revpros_chta_pic">'+'<div class="revcp_cot">'+'<div class="revcp_cott">'+'<img src="http://static.iboom.tv/static/img/'+data.data[i].head+'">'+'</div>'+'</div>'+'</div>'+'</div>'+'<div class="revpros_chta_cnt_wrap">'+'<div class="revpros_chta_cnt">'+'<dl>'+'<dt>'+'<ul>'+'<li>'+data.data[i].name+'</li>'+'<li>明天可约</li>'+'</ul>'+'</dt>'+'<dd class="revpros_chta_cnt_d1">'+'<ul>'+'<li>授课范围：</li>'+'<li class="revcp_cott_jx'+i+'">'+data.data[i].teachRange+'</li>'+'</ul>'+'</dd>'+'<dd>'+'<ul>'+'<li>累计完成：</li>'+'<li>' + data.data[i].num + '次一对一教学</li>'+'</ul>'+'</dd>'+'<dd>'+'<ul>'+'<li>擅长英雄：</li>'+'<li>'+'<ol class="heroo">'+pp+'</ol>'+'</li>'+'</ul>'+'</dd>'+'<dd>'+'<a href="revtProcessTmct.html?'+data.data[i].userId+'">'+'<button>预约老师</button>'+'</a>'+'</dd>'+'</dl>'+'</div>'+'</div>'+'<div class="clear"></div>'+'</div>'+'</section>'+'</div>'
                    sections+=section1;

                })
                $(".revpros_chta_body").append(sections)

            });
        }

    })


    getStatus();
    getRevtProcessChta();



})