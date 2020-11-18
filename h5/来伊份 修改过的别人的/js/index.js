$(function(){
    // 移动端导航下拉菜单
    $(".xs_nav>ul>li").on("click",function(){
        $(this).children(".dropdown_menu").stop().slideToggle(600);
        $(this).siblings("li").children(".dropdown_menu").stop().hide(600);
    })
    //顶部移动端导航
    $(".navToggle").click(function(){
        $(".xs_nav").addClass("open").removeClass("shut");
        $(".xs_nav>ul>li").css("opacity","1");
    })
    $(".closed>img").click(function(){
        $(".xs_nav").animate().addClass("shut").removeClass("open");
        $(".xs_nav>ul>li").css("opacity","0");
    })
    //头部固定定位
    var flag = true;
    $(window).scroll(function(){
        if($(document).scrollTop() >= $(".dowebok").offset().top){
            if(flag){
                $("header").stop().css({"top":"-35px","opacity":"0"}).animate({"top":"0","opacity":"1"},500).addClass("current");
                $(".dowebok").css("margin-top","1px");
                flag = false;
            }
        }else{
            $("header").removeClass("current");
            $(".dowebok").css("margin-top","0");
            flag = true;
        }
    });
})