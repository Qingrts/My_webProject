$(function(){
    $(".meizu-header-link>li").mouseover(function(){
        $(".meizu-header").css("backgroundColor", "#fff");
        var index = $(this).index();
        if(index < 4){
            $(".meizu-header-sub-warp").addClass("header-sub-warp-show");
            $(".meizu-header-sub-warp>div").eq(index).addClass("meizu-header-sub-show").siblings().removeClass("meizu-header-sub-show");
            $(".meizu-header-sub-warp").removeClass("app-down-show");
            $(".meizu-header-sub-warp>div").removeClass("app-down-wp");
        }else if(index > 8){
            $(".meizu-header-sub-warp").addClass("app-down-show");
            $(".meizu-header-sub-warp>div").eq(index).addClass("app-down-wp").siblings().removeClass("app-down-wp");
            $(".meizu-header-sub-warp").removeClass("header-sub-warp-show");
            $(".meizu-header-sub-warp>div").removeClass("meizu-header-sub-show");
        }else{
            $(".meizu-header").removeClass("toggle");
            $(".meizu-header-sub-warp").removeClass("header-sub-warp-show");
            $(".meizu-header-sub-warp>div").removeClass("meizu-header-sub-show");
            $(".meizu-header-sub-warp").removeClass("app-down-show");
            $(".meizu-header-sub-warp>div").removeClass("app-down-wp");
            $(".meizu-header").css("backgroundColor", "");
        }
    })

    $(".meizu-header-sub-warp li").mouseover(function(){
        $(this).css({opacity:1}).siblings().css({opacity:.5})
    })
    $(".meizu-header-sub-warp li").mouseout(function(){
        $(this).css({opacity:1}).siblings().css({opacity:1});
    })
    $(".meizu-header").mouseleave(function(){
        $(".meizu-header-sub-warp").removeClass("header-sub-warp-show");
        $(".meizu-header-sub-warp>div").removeClass("meizu-header-sub-show");
        $(".meizu-header-sub-warp").removeClass("app-down-show");
        $(".meizu-header-sub-warp>div").removeClass("app-down-wp");
        $(".meizu-header").css("backgroundColor", "transparent");
    });
    $(".m_out").mouseover(function (){
        $(".meizu-header-sub-warp").removeClass("header-sub-warp-show");
        $(".meizu-header-sub-warp>div").removeClass("meizu-header-sub-show");
        $(".meizu-header-sub-warp").removeClass("app-down-show");
        $(".meizu-header-sub-warp>div").removeClass("app-down-wp");
        $(".meizu-header").css("backgroundColor", "transparent");
    })

    $(".meizu-header-user").mouseover(function(){
        $(".meizu-header-user-dropdown").stop().slideDown();
    });
    $(".meizu-header-user").mouseout(function(){
        $(".meizu-header-user-dropdown").stop().slideUp();
    });
})