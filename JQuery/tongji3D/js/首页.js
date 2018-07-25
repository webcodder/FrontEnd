/**
 * Created by fudexuan on 2016/10/19.
 */
$(function(){

    $('.business-header .nian').mouseenter(function(){
        $(this).addClass('highlight')
    });
    $('.business-header .nian').mouseleave(function(){
        $(this).removeClass('highlight')
    });
    // 统计图
    require.config({
        paths: {
            echarts: 'http://echarts.baidu.com/build/dist'
        }
    });

    //第一个柱状图
    $(function(){
        var data = [
            {name : 'IE',value : 35.75,color:'#bc6666'},
            {name : 'Chrome',value : 29.84,color:'#cbab4f'},
            {name : 'Firefox',value : 24.88,color:'#76a871'},
            {name : 'Safari',value : 6.77,color:'#9f7961'},
            {name : 'Opera',value : 2.02,color:'#2ba5a4'},
            {name : 'Other',value : 0.73,color:'#6f83a5'}
        ];

        new iChart.Column3D({
            render : 'main',
            data: data,
           title : '2014年浏览器市场份额',
            width : 600,
            height : 550,
            align:'left',
            offsetx:40,
            background_color:'#C0BFC0',
            legend : {
                enable : true
            },
            sub_option:{
                label:{
                    color:'#111111'
                }
            },
            coordinate:{
                width:400,
                scale:[{
                    position:'left',
                    start_scale:0,
                    end_scale:50,
                    scale_space:8,
                    listeners:{
                        parseText:function(t,x,y){
                            return {text:t+"%"}
                        }
                    }
                }]
            }
        }).draw();
    });
    //饼形图使用（pie）使用
    $(function(){
        var data = [
            {name : 'Android',value :32.5,color:'#4572a7'},
            {name : 'IOS',value : 34.3,color:'#aa4643'},
            {name : 'RIM',value : 8.4,color:'#89A54E'},
            {name : 'Microsoft',value : 3.6,color:'#80699b'},
            {name : 'Other',value : 6.2,color:'#3d96ae'}
        ];


        var chart = new iChart.Pie3D({
            render : 'sub',
            data: data,
            title : {
                text : '收入总额构成比例',
                height:40,
                fontsize : 16,
                color : '#282828'
            },
            footnote : {
                // text : 'ichartjs.com',//右下角为本；
                color : '#486c8f',
                fontsize : 12,
                padding : '0 38'
            },
            sub_option : {
                mini_label_threshold_angle : 30,//迷你label的阀值,单位:角度
                mini_label:{//迷你label配置项
                    fontsize:20,
                    fontweight:0,
                    color : '#ffffff'
                },
                label : {
                    background_color:null,
                    sign:false,//设置禁用label的小图标
                    padding:'0 2',
                    border:{
                        enable:false,
                        color:'#666666'
                    },
                    fontsize:11,
                    fontweight:200,
                    color : '#4572a7'
                },
                border : {
                    width : 2,
                    color : '#ffffff'
                },
                listeners:{
                    parseText:function(d, t){
                        return d.get('value')+"%";//自定义label文本
                    }
                }
            },
            legend:{
                enable:true,
                padding:0,
                offsetx:50,
                offsety:10,
                color:'#3e576f',
                fontsize:16,//文本大小
                sign_size:16,//小图标大小
                line_height:28,//设置行高
                sign_space:6,//小图标与文本间距
                border:false,
                align:'left',
                background_color : null//透明背景
            },
            shadow : true,
            shadow_blur : 6,
            shadow_color : '#aaaaaa',
            shadow_offsetx : 0,
            shadow_offsety : 0,
            background_color:'#f1f1f1',
            align:'right',//右对齐
            offsetx:-100,//设置向x轴负方向偏移位置60px
            offset_angle:-90,//逆时针偏移120度
            width : 649,
            height : 251,
            radius:150
        });
        // 利用自定义组件构造右侧说明文本
//    chart.plugin(new iChart.Custom({
//    drawFn:function(){
//    //在右侧的位置，渲染说明文字
//    chart.target.textAlign('start')
//    .textBaseline('top')
//    .textFont('600 20px Verdana')
//    .fillText('Market Fragmentation:\nTop Mobile\nOperating Systems',120,80,false,'#be5985',false,24)
//    .textFont('600 12px Verdana')
//    .fillText('Source:ComScore,2012',120,160,false,'#999999');
//    }
//    }));

        chart.draw();
    });



    //柱状图
    $(function(){
        var data = [
            {
                name : 'DPS01A',
                value:[45,52,54,74,90,84],
                color:'#47b2c8'
            },
            {
                name : 'DPS01B',
                value:[60,80,105,125,108,120],
                color:'#db6086'
            }
        ];

        var chart = new iChart.BarMulti2D({
            render : 'aside',
            data: data,
            labels:["一月","二月","三月","四月","五月"],
            title : {
                text:'DPS01A型号比DPS01B型号的产品更受用户喜欢',
                color:'#585757',
                fontsize:'16'
            },
            //subtitle : {
            //    text:'2012上半年DPS01A型号与DPS01B型号的鼠标销售比较,单位:万台',
            //    color:'#797373'
            //},
           // footnote : '数据来源：销售中心',
            width : 650,
            height : 300,
            background_color : '#a8c9e2',
            legend:{
                enable:true,
                background_color : null,
                border : {
                    enable : false
                }
            },
            coordinate:{
                scale:[{
                    position:'bottom',
                    start_scale:0,
                    end_scale:140,
                    scale_space:20
                }],
                background_color : null,
                axis : {
                    width : 0
                },
                width:400,
                height:220
            }
        });
        chart.draw();
    });



    //业务相关右侧表格
    var data = [
        {
            "name":"报销流程",
            "way":"222",
            "finish":"3000",
            "over":'20',
            "goback":'85',
            "hours":"3天1小时35分"
        },
        {
            "name":"请假流程",
            "way":"123",
            "finish":"1000",
            "over":'10',
            "goback":'0',
            "hours":"3小时35分"
        },
        {
            "name":"出差申请流程",
            "way":"123",
            "finish":"88",
            "over":'888',
            "goback":'11',
            "hours":"3小时55分"
        },
        {
            "name":"报销流程",
            "way":"222",
            "finish":"3000",
            "over":'20',
            "goback":'85',
            "hours":"3天1小时35分"
        },
        {
            "name":"请假流程",
            "way":"123",
            "finish":"1000",
            "over":'10',
            "goback":'0',
            "hours":"3小时35分"
        },
        {
            "name":"出差申请流程",
            "way":"123",
            "finish":"88",
            "over":'888',
            "goback":'11',
            "hours":"3小时55分"
        },{
            "name":"报销流程",
            "way":"222",
            "finish":"3000",
            "over":'20',
            "goback":'85',
            "hours":"3天1小时35分"
        },
        {
            "name":"请假流程",
            "way":"123",
            "finish":"1000",
            "over":'10',
            "goback":'0',
            "hours":"3小时35分"
        },
        {
            "name":"出差申请流程",
            "way":"123",
            "finish":"88",
            "over":'888',
            "goback":'11',
            "hours":"3小时55分"
        },{
            "name":"报销流程",
            "way":"222",
            "finish":"3000",
            "over":'20',
            "goback":'85',
            "hours":"3天1小时35分"
        },
        {
            "name":"请假流程",
            "way":"123",
            "finish":"1000",
            "over":'10',
            "goback":'0',
            "hours":"3小时35分"
        },
        {
            "name":"出差申请流程",
            "way":"123",
            "finish":"88",
            "over":'888',
            "goback":'11',
            "hours":"3小时55分"
        },{
            "name":"报销流程",
            "way":"222",
            "finish":"3000",
            "over":'20',
            "goback":'85',
            "hours":"3天1小时35分"
        },
        {
            "name":"请假流程",
            "way":"123",
            "finish":"1000",
            "over":'10',
            "goback":'0',
            "hours":"3小时35分"
        },
        {
            "name":"出差申请流程",
            "way":"123",
            "finish":"88",
            "over":'888',
            "goback":'11',
            "hours":"3小时55分"
        },{
            "name":"报销流程",
            "way":"222",
            "finish":"3000",
            "over":'20',
            "goback":'85',
            "hours":"3天1小时35分"
        },
        {
            "name":"请假流程",
            "way":"123",
            "finish":"1000",
            "over":'10',
            "goback":'0',
            "hours":"3小时35分"
        },
        {
            "name":"....",
            "way":"....",
            "finish":"....",
            "over":'....',
            "goback":'....',
            "hours":"...."
        }
    ];
    function addTbody(ele){
        var html = '';
        $.each(data,function(i,v){
            html+= '<tr>';
            html+='<td><a href="javascript:void(0)">'+ v.name+'</a></td>';
            html+= '<td>'+ v.way+'</td>';
            html+='<td>'+ v.finish+'</td>';
            html+='<td>'+ v.over+'</td>';
            html+='<td>'+ v.goback+'</td>';
            html+='<td>'+ v.hours+'</td>';
            html+='</tr>';
        });
        ele.html(html);
    }
    addTbody($('#map-r-tbody'));
//            var current;
//
//            $('#map-r-tbody tr:odd').css("backgroundColor","#FFE4E1");
//
//            $('#map-r-tbody tr:even').css("backgroundColor","#EEE8AA");

    $('#map-r-tbody tr').bind('mouseenter',function(){
        // current = $(this).css('backgroundColor');

        $(this).css("backgroundColor","#87CEFA");
    });
    $('#map-r-tbody tr').bind('mouseleave',function(){
        $(this).css('backgroundColor',"");
    })

    //地图
    require(
        [
            'echarts',
            'echarts/chart/map' //使用饼形图就加载pie模块，按需加载
        ],
        function(ec){
            var mcharts = ec.init(document.getElementById('map-l'));
            var option = {
                title : {
                    text: '订单量',
                    subtext: '纯属虚构',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    x:'left',
                    data:['']
                },
                //color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //    offset: 0, color: 'red' // 0% 处的颜色
                //}, {
                //    offset: 1, color: 'blue' // 100% 处的颜色
                //}], false),
                dataRange: {
                    x: 'left',
                    y: 'bottom',
                    splitList: [
                        {start: 1500},
                        {start: 900, end: 1500},
                        {start: 310, end: 1000},
//                                        {start: 200, end: 300},
                        {start: 10, end: 200, label: '10 到 200（自定义label）'},
                        {start: 5, end: 5, label: '5（自定义特殊颜色）', color: 'black'}
//                                        {end: 10}
                    ],
                    color: ['#E0022B', '#E09107', '#A3E00B']
                },

                roamController: {
                    show: true,
                    x: 'left',
                    mapTypeControl: {
                        'china': true
                    }
                },
                series : [
                    {
                        name: '订单量',
                        type: 'map',
                        mapType: 'china',
                        roam: false,
                        itemStyle:{
                            normal:{
                                label:{
                                    show:true,
                                    textStyle: {
                                        color: "rgb(249, 249, 249)"
                                    }
                                }
                            },
                            emphasis:{label:{show:true}}
                        },
                        data:[
                            {name: '北京',value: Math.round(Math.random()*2000)},
                            {name: '天津',value: Math.round(Math.random()*2000)},
                            {name: '上海',value: Math.round(Math.random()*4000)},
                            {name: '重庆',value: Math.round(Math.random()*2000)},
                            {name: '河北',value: 0},
                            {name: '河南',value: Math.round(Math.random()*2000)},
                            {name: '云南',value: 5},
                            {name: '辽宁',value: 305},
                            {name: '黑龙江',value: Math.round(Math.random()*2000)},
                            {name: '湖南',value: 200},
                            {name: '安徽',value: Math.round(Math.random()*2000)},
                            {name: '山东',value: Math.round(Math.random()*2000)},
                            {name: '新疆',value: Math.round(Math.random()*2000)},
                            {name: '江苏',value: Math.round(Math.random()*2000)},
                            {name: '浙江',value: Math.round(Math.random()*2000)},
                            {name: '江西',value: Math.round(Math.random()*2000)},
                            {name: '湖北',value: Math.round(Math.random()*2000)},
                            {name: '广西',value: Math.round(Math.random()*2000)},
                            {name: '甘肃',value: Math.round(Math.random()*2000)},
                            {name: '山西',value: Math.round(Math.random()*2000)},
                            {name: '内蒙古',value: Math.round(Math.random()*2000)},
                            {name: '陕西',value: Math.round(Math.random()*2000)},
                            {name: '吉林',value: Math.round(Math.random()*2000)},
                            {name: '福建',value: Math.round(Math.random()*2000)},
                            {name: '贵州',value: Math.round(Math.random()*2000)},
                            {name: '广东',value: Math.round(Math.random()*2000)},
                            {name: '青海',value: Math.round(Math.random()*2000)},
                            {name: '西藏',value: Math.round(Math.random()*2000)},
                            {name: '四川',value: Math.round(Math.random()*2000)},
                            {name: '宁夏',value: Math.round(Math.random()*2000)},
                            {name: '海南',value: Math.round(Math.random()*2000)},
                            {name: '台湾',value: Math.round(Math.random()*2000)},
                            {name: '香港',value: Math.round(Math.random()*2000)},
                            {name: '澳门',value: Math.round(Math.random()*2000)}
                        ]
                    }
                ]
            };

            mcharts.setOption(option);
        }
    );
    $('.link-table tr').bind('mouseenter',function(){
        $(this).addClass('link-currentTr');
    });
    $('.link-table tr').bind('mouseleave',function(){
        $(this).removeClass('link-currentTr');
    })
})