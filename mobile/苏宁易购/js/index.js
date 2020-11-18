window.addEventListener("load", function (){
  // 自动播放图片
  // 1.获取元素
  var bannerCon = document.querySelector(".bannerCon");
  var ul = bannerCon.children[0];
  var ol = bannerCon.children[1];
  // 获取bannerCon宽度
  var bannerConWidth = bannerCon.offsetWidth;
  
  // 使用定时器播放图片
  var index = 0;
  var timer = setInterval(bannerInterval, 2000);

  // 自动播放函数
  function bannerInterval(){
    index++;
    var translateWidth = -index * bannerConWidth;
    ul.style.transition = "all .4s";
    ul.style.transform = "translateX(" + translateWidth + "px)";
  }
  ul.addEventListener("transitionend", function (){
    if(index >= 4){
      index = 0;
      ul.style.transition = "none";
      var translateWidth = -index * bannerConWidth;
      ul.style.transform = "translateX(" + translateWidth + "px)";
    }else if(index < 0){
      index = 3;
      ul.style.transition = "none";
      var translateWidth = -index * bannerConWidth;
      ul.style.transform = "translateX(" + translateWidth + "px)";
    }

    ol.querySelector(".current").classList.remove("current");
    ol.children[index].classList.add("current");
  });

  var startX = 0;
  var moveX = 0;
  
  // 手指触摸，获取手指的初始坐标，并且停止定时器
  ul.addEventListener("touchstart", function (e){
    startX = e.targetTouches[0].pageX;
    clearInterval(timer);
  });
  // 移动手指计算手指滑动的距离，移动盒子
  ul.addEventListener("touchmove", function (e){
    // 获取移动距离
    moveX = e.targetTouches[0].pageX - startX;
    // 移动盒子
    var translateX = -index * bannerConWidth + moveX;
    ul.style.transform = "translateX(" + translateX + "px)";
  });
  // 手指离开，根据滑动距离判断下一张还是上一张
  ul.addEventListener("touchend", function (e){
    if(Math.abs(moveX) > 50){
      if(moveX > 0){
        index--;
        if(index < -1){
          index = -1;
        }
      }else{
        index++;
        if(index > 4){
          index = 4;
        }
      }
      var translateX = -index * bannerConWidth;
      if(index == -1 || index == 4){
        ul.style.transition = "all .1s";
      }else{
        ul.style.transition = "all .4s";
      }
      ul.style.transform = "translateX(" + translateX + "px)";
    }else{
      var translateX = -index * bannerConWidth;
      ul.style.transition = "all .4s";
      ul.style.transform = "translateX(" + translateX + "px)";
    }
    timer = setInterval(bannerInterval, 2000);
  });
});