$(function (){
  $('.collapsed').collapse({
    toggle: false
  });

  $(".meau-level1>.hblk,.meau-level2>.hblk").bind("click", function (){
    if($(this).siblings(".nav-child").css("display") == "block" || $(this).siblings(".meau-level2").children(".nav-child").css("display") == "block"){
      $(this).css("background", "url(./images/creat_close.png) no-repeat 95% center");
      $(this).siblings(".nav-child").css("display", "none");
      return;
    };

    $(this).parent().parent().parent().find(".meau-level1").children(".hblk").css("background", "url(./images/creat_close.png) no-repeat 95% center");
    $(this).parent().parent().parent().find(".meau-level1").children(".nav-child").css("display", "none");
    $(this).parent().siblings(".meau-level2").children(".hblk").css("background", "url(./images/creat_close.png) no-repeat 95% center");
    $(this).parent().siblings(".meau-level2").children(".nav-child").css("display", "none");

    $(this).css("background", "url(./images/creats.png) no-repeat 95% center");
    $(this).siblings(".nav-child").slideDown();
  });
  $(window).on("resize", function (){
    if($("html,body").width() >= 768){
      $(".nav-child").css("display", "none");
      $(".hblk").css("background", "");
      $(".navbar-collapse.collapse.in").removeClass("in");
    }
  });


  for(var i = 0; i < $(".meau-level1").length; i++){
    $(".meau-level1").eq(i).attr("index", i);
    $(".meau-level1").eq(i).on("mouseenter", function (){
      $(".meau_item").css("display", "none");

      var index = parseInt($(this).attr("index"));
      $(".meau_item").eq(index).css("display", "block");
    });
    $(".navbar").on("mouseleave", function (){
      $(".meau_item").css("display", "none");
    });
    $(".navbar-header,.navbar-right li:nth-child(n+2)").on("mouseenter", function (){
      $(".meau_item").css("display", "none");
    });
  };
  for(var i = 0; i < $(".banner li").length; i++){
    $(".toggle_pic span").eq(i).attr("liIndex", i);
    $(".arrow").eq(i).on("click", function (){
      var liIndex = parseInt($(this).parent().find(".toggle_pic .current").attr("liIndex"));
      $(".banner .container li").css("opacity", "0").css("transition", "opacity 300ms ease 0s");
      if(liIndex == 0){
        liIndex = 1;
      }else{
        liIndex = 0;
      }
      $(".banner .container li").eq(liIndex).css("opacity", "1").css("transition", "opacity 300ms ease 0s");
      $(".toggle_pic span").removeClass("current");
      $(".toggle_pic span").eq(liIndex).addClass("current");
    });
    $(".toggle_pic span").eq(i).on("click", function (){
      var liIndex = parseInt($(this).siblings(".current").attr("liIndex"));
      $(".banner .container li").css("opacity", "0").css("transition", "opacity 300ms ease 0s");
      if(liIndex == 0){
        liIndex = 1;
      }else{
        liIndex = 0;
      };
      $(".banner .container li").eq(liIndex).css("opacity", "1").css("transition", "opacity 300ms ease 0s");
      $(".toggle_pic span").removeClass("current");
      $(this).addClass("current");
    })
  };
  var timer = setInterval( () => {
    $(".arrow_right").click();
  }, 2000);
  $(".banner .container").on("mouseenter", function (){
    clearInterval(timer);
    timer = null;
  });
  $(".banner .container").on("mouseleave", function (){
    timer = setInterval( () => {
      $(".arrow_right").click();
    }, 2000);
  });
  $("#topcontrol").hover(function (){
    $(this).find(".go_up").toggleClass("go_up_h");
  });
  $(window).on("scroll", function (){
    if($(document).scrollTop() > $(".banner").offset().top){
      $("#topcontrol").stop().animate({opacity: 1});
    }else{
      $("#topcontrol").stop().animate({opacity: 0});
    }
  });
  $("#topcontrol").on("click", function (){
    $("body,html").animate({"scrollTop": 0}, 500);
  })
});