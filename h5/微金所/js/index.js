$(function (){
  var dataList = [{
    imgsrc: "images/slide_01_640x340.jpg",
    bgurl: "images/slide_01_2000x410.jpg"
  },{
    imgsrc: "images/slide_02_640x340.jpg",
    bgurl: "images/slide_02_2000x410.jpg"
  },{
    imgsrc: "images/slide_03_640x340.jpg",
    bgurl: "images/slide_03_2000x410.jpg"
  },{
    imgsrc: "images/slide_04_640x340.jpg",
    bgurl: "images/slide_04_2000x410.jpg"
  }];
  // 初始化工具提示
  $('[data-toggle="tooltip"]').tooltip()
  // 监听屏幕大小变化
  wjsBanner();
  $(window).on("resize", function (){
    wjsBanner();
  })

  // 产品模块 标签页导航
  var lis = $(".wjs-product .nav-tabs").find("li");
  var totalWidth = 0;
  lis.each(function(index, ele){
      totalWidth = totalWidth + $(ele).outerWidth(true);
  })
  $(".wjs-product .nav-tabs").width(totalWidth);


  function wjsBanner(){
    $("#wjs-carousel").html("");
    // 获取屏幕宽度
    var sWidth = $(window).width();


    
    $("#wjs-indicators").html("");
    for(var i = 0; i < dataList.length; i++){
      $("#wjs-indicators").append(" <li data-target='#carousel-example-generic' data-slide-to='"+i+"'></li>")
    }
    $("#wjs-indicators li").eq(0).addClass("active");


    if(sWidth >= 992){
      for(var i = 0; i < dataList.length; i++){
        $("#wjs-carousel").append("<div class='item'><a href='javascript:;' class='wjs-bannerBg' style='background-image: url("+dataList[i].bgurl+");'></a></div>");
      }
      $("#wjs-carousel .item").eq(0).addClass("active");
    }else{
      for(var i = 0; i < dataList.length; i++){
        $("#wjs-carousel").append("<div class='item'><a href='javascript:;' class='wjs-bannerImg'><img src="+dataList[i].imgsrc+" alt=''></div>");
      }
      $("#wjs-carousel .item").eq(0).addClass("active");
    }
  }
})