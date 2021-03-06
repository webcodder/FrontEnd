$(function(){
    //mock
    var thisApi = {
        //页面标签信息
        scenery_weather: {
            dev: "mock/scenery_weather.json",
            product: "",
        },
    };
    bMock.setFace(thisApi);
    bMock.setEnv("dev");
    //console.log(bMock.getFace("poyct_zcl_swiper"));
});

//浏览器滚动条位置
var setnavscroll = function(){
    $(window).scroll(function(){
        var window_top = $(window).scrollTop();
        var div_top = $('.navbar').offset().top;

        if (window_top > div_top) {
            $('.raise_detail_nav').addClass('raise_detail_nav_fix');
            $('.navbar').height($('.busntail_nav').height());
        } else {
            $('.raise_detail_nav').removeClass('raise_detail_nav_fix');
            $('.navbar').height(0);
        }
    });
}

//页面交互
var tip = function(){
    // 轮播图
    var swiper = new Swiper('.product_banner .swiper-container', {
        pagination: '.product_banner .swiper-pagination',
        autoplay: 2000,
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        loop: true,
        observer:true,
        observeParents:true,
    });



    //选项卡
    /*$('.raise_detail_nav li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.raise_detail_cont section').eq($(this).index()).show().siblings().hide();
    });*/
    $('ul.raslbtn > li').click(function() {
        var s = $('ul.raslbtn > li').index(this);
        $('body,html').animate({
            scrollTop: $('.rascot > section:eq(' + s + ')').offset().top - 50
        }, 200);
        $('ul.raslbtn > li:eq('+s+')').addClass('active').siblings().removeClass('active');
    });

    var DT = $('ul.raslbtn').offset().top;
    $(window).scroll(function() {
        var wt = $(window).scrollTop()
          , l = $('.rascot > section')
          , s = l.length - 1;
        if (wt < DT || wt >= l.last().offset().top + l.last().height() + 50) {
            $('ul.raslbtn').removeClass('fixed');
            $('ul.raslbtn > li:first').addClass('active').siblings().removeClass('active');
        } else {
            $('ul.raslbtn').addClass('fixed');
            for (var i = 0; i < s; i++) {
                if (wt >= parseInt(l.eq(i).offset().top - 50) && wt < parseInt(l.eq(i + 1).offset().top - 50)) {
                    s = i;
                    break;
                }
            }
            $('ul.raslbtn > li:eq(' + s + ')').addClass('active').siblings().removeClass('active');
        }
    });

    //radio
    $("input[name='xzhb']").change(function(){
        $(this).parent().parent().find('b').addClass('active').parent().parent().parent().parent().siblings().find('b').removeClass('active');
    });

        //收藏
    $('.shoucang').toggle(
        function(){
            $(this).find('img').attr("src", "images/btn-sc-xz.png");
        },
        function(){
            $(this).find('img').attr("src", "images/icon-sjzy-sc-wxz.png");
        }
    );

        //分享
    $('.fenxiang').click(function(){
        $('.mask').fadeIn();
        $('.share_btn').fadeIn();
    });

    $('.share_btn_foot button').click(function(){
        $('.mask').fadeOut();
        $('.share_btn').fadeOut();
    });
}

//我要支持
    $('.lj_button button').click(function(){
        if($('input:radio[name="xzhb"]').is(':checked')) {
            window.location.href="payment.html";
        }else{
            $('ul.raslbtn > li:nth-child(2)').addClass('active').siblings().removeClass('active');
            window.location.href="#xzhb";
        }
    });

$(function(){
    setnavscroll();
    tip();  //页面交互
});