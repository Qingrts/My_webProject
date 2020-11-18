window.addEventListener("load", function (){
  // 顶部广告点击关闭
  var close_ad = document.querySelector(".close_ad");
  close_ad.onclick = function (){
    document.querySelector(".ad-box").style.display = "none";
  }


  var imgs_box = document.querySelector(".imgs_box");
  var img_width = imgs_box.offsetWidth;
  var ul = imgs_box.children[0];
  var lis = ul.children;
  var ol = imgs_box.children[1];
  var olLis = ol.children;
  var clk = document.querySelector(".clk").children;
  var clk_left = clk[0];
  var clk_right = clk[1];
  var arr = [];
  // 1.动态生成按钮
  for(var i = 0; i < lis.length; i++){
    i == 0 ? arr.push("<li class='cur'><a href='javascript:;'></a></li>") : arr.push("<li><a href='javascript:;'></a></li>");
  }
  ol.innerHTML += arr.join("");
  // 2.拷贝第一张图片添加到最后一张图片的后边
  var lastLi = lis[0].cloneNode(true);
  ul.appendChild(lastLi);
  // 图片的索引
  var index = 0;
  // 下边方块的索引
  var square = 0;
  for(var i = 0; i < olLis.length; i++){
    olLis[i].setAttribute("index", i);
    olLis[i].onmouseover = function (){
      for(var i = 0; i < olLis.length; i++){
        olLis[i].className = "";
      }
      this.className = "cur";
      var picIndex = this.getAttribute("index");
      animate(ul, - picIndex * img_width)
      index = picIndex;
      square = picIndex;
    }
  }

  // 鼠标悬停，自动轮播停止
  imgs_box.onmouseenter = function (){
    clearInterval(timer);
  };
  imgs_box.onmouseleave = function (){
    timer = setInterval(clk_right.onclick, 3000);
  };
  // 点击按钮切换下一张，上一张
  clk_right.onclick = function (){
    if(index == lis.length - 1){
      ul.style.left = "0px";
      index = 0;
    }
    index++;

    if(square < olLis.length -1){
        square++;
    }else{
        square = 0;
    };
    for(var i = 0; i < olLis.length; i++){
      olLis[i].className = "";
    }
    olLis[square].className = "cur";
    animate(ul, - index * img_width);
  };
  clk_left.onclick = function (){
    if(index == 0){
      ul.style.left = - (lis.length - 1) * img_width + "px";
      index = lis.length - 1;
    }
    index--;
    if(square > 0){
        square--;
    }else{
        square = olLis.length - 1;
    };
    for(var i = 0; i < olLis.length; i++){
      olLis[i].className = "";
    }
    olLis[square].className = "cur";
    animate(ul, - index * img_width);
  };
  // 自动轮播
  var timer = setInterval(clk_right.onclick, 3000);

  function animate(obj, target) {
      clearInterval(obj.timer);
      obj.timer = setInterval(function () {
          var leader = obj.offsetLeft;
          var step = 30;
          step = leader < target ? step : -step;//step有了正负
          if (Math.abs(leader - target) >= Math.abs(step)) {
              leader = leader + step;
              obj.style.left = leader + "px";
          } else {
              obj.style.left = target + "px";//手动放到终点
              clearInterval(obj.timer);
          }
      }, 15);
  }
});


// 美日必抢切换
var rob_left = document.querySelector(".rob_left");
var rob_clickleft = document.querySelector(".rob_clickleft");
var rob_clickright = document.querySelector(".rob_clickright");
var rob_block = document.querySelector(".rob_block");
var rob_none = document.querySelector(".rob_none");
rob_left.onmouseover = function (){
  rob_clickleft.style.display = "block";
  rob_clickright.style.display = "block";
};
rob_left.onmouseout = function (){
  rob_clickleft.style.display = "none";
  rob_clickright.style.display = "none";
};
var flag = true;
rob_clickleft.onclick = function (){
  flag = isBlock(flag);
};
rob_clickright.onclick = function (){
  flag = isBlock(flag);
};
function isBlock(flag){
  if(flag){
    rob_block.style.display = "none";
    rob_none.style.display = "block";
    return flag = false;
  }else{
    rob_block.style.display = "block";
    rob_none.style.display = "none";
    return flag = true;
  };
};

// 猜你喜欢切换
var change_btn = document.querySelector(".change_btn").children;
var prev = change_btn[0];
var next = change_btn[1];
var guess_main = document.querySelector(".guess_main").children;
var guess_index = 0;
prev.onclick = function (){
  guess_index--;
  if(guess_index < 0){
    guess_index = 2;
  }
  for(var i = 0;i < guess_main.length; i++){
    guess_main[i].style.display = "none";
  }
  guess_main[guess_index].style.display = "block";
};
next.onclick = function (){
  guess_index++;
  if(guess_index > 2){
    guess_index = 0;
  }
  for(var i = 0;i < guess_main.length; i++){
    guess_main[i].style.display = "none";
  }
  guess_main[guess_index].style.display = "block";
};


// 电梯导航部分的轮播图切换
var main_l = document.querySelectorAll(".main_l");
var gm_main_wrap = document.querySelectorAll(".gm_main_wrap");
for(var i = 0; i < main_l.length; i++){
  var imgs = main_l[i].querySelector(".imgs");
  var click_toggle = main_l[i].querySelector(".click_toggle");
  var nav = main_l[i].querySelector(".nav");
  var brand_slider = main_l[i].querySelector(".brand_slider");
  main_l[i].onmouseover = function (){
    var click_toggle = this.querySelector(".click_toggle");
    click_toggle.style.display = "block";
  };
  main_l[i].onmouseout = function (){
    var click_toggle = this.querySelector(".click_toggle");
    click_toggle.style.display = "none";
  };
  for(var z = 0; z < nav.children.length; z++){
    nav.children[z].setAttribute("nav_index", z);
  }
  click_toggle.children[1].onclick = function (){
    var nav = this.parentNode.parentNode.querySelector(".nav");
    var imgs = this.parentNode.parentNode.querySelector(".imgs");
    var nav_index = parseInt(nav.querySelector(".cur").getAttribute("nav_index"));
    for(var i = 0; i < nav.children.length; i++){
      nav.children[i].className = "";
      imgs.children[i].style.display = "none";
    }
    if(nav_index + 1 == imgs.children.length){
      nav_index = -1;
    }
    nav.children[nav_index + 1].className = "cur";
    imgs.children[nav_index + 1].style.display = "block";
  }
};
for(var i = 0; i < gm_main_wrap.length; i++){
  var mains = gm_main_wrap[i].children;
  for(var j = 0; j < mains.length; j++){
    mains[j].onmouseenter = function (){
      var next_page = this.parentNode.querySelector(".next_page");
      next_page.style.display = "block";
    }
    mains[j].onmouseleave = function (){
      var next_page = this.parentNode.querySelector(".next_page");
      next_page.style.display = "none";
    }
  }
}
// tab切换
var tab = document.querySelectorAll(".tab");
var tab_arr = [];
for(var i = 0;i < tab.length; i++){
  var tab_length = tab[i].children.length;
  tab_arr[i] = tab[i];
  var tab_len = tab_arr.length;
  for(var j = 0;j < tab_length; j++){
    tab[i].children[j].setAttribute("tab_index", j);
    tab[i].children[j].onmouseover = function (){
      var this_tab = this.parentNode;
      var gm_main_wrap = this.parentNode.parentNode.parentNode.querySelector(".gm_main_wrap");
      var tab_index = parseInt(this.getAttribute("tab_index"));
      
      for(var i = 0; i < this_tab.children.length; i++){
        this_tab.children[i].className = "";
      }
      this_tab.children[tab_index].className = "curr";
      for(var i = 0; i < gm_main_wrap.children.length; i++){
        gm_main_wrap.children[i].style.display = "none";
      }
      gm_main_wrap.children[tab_index].style.display = "block";
    }
  }
}
var next_pages = document.querySelectorAll(".next_page");
var next_index;
for(var i = 0; i < next_pages.length; i++){
  next_pages[i].onclick = function (){
    var mians = this.parentNode.querySelectorAll(".main");
    var tab = this.parentNode.parentNode.parentNode.querySelector(".tab");
    next_index = parseInt(tab.querySelector(".curr").getAttribute("tab_index"));
    if(next_index < tab.children.length - 1){
      tab.children[next_index].className = "";
      tab.children[next_index + 1].className = "curr";
      mians[next_index].style.display = "none";
      mians[next_index + 1].style.display = "block";
    }else{
      next_index = 0;
      tab.children[tab.children.length - 1].className = "";
      tab.children[next_index].className = "curr";
      mians[tab.children.length - 1].style.display = "none";
      mians[next_index].style.display = "block";
    }
  }
}


// 电梯导航切换
var elevator = document.querySelector(".elevator");
var elevator_list = document.querySelector(".elevator_list").children;

var elevator_items = document.querySelectorAll(".elevaltor_item");
var item_arr = [];
for(var i = 0; i < elevator_items.length; i++){
  item_arr.push(elevator_items[i]);
}
var timerId = null;
for(var i = 0; i < elevator_list.length; i++){
  elevator_list[i].setAttribute("data-index", i);
  elevator_list[i].onclick = function (){
    for(var i = 0; i < elevator_list.length; i++){
      elevator_list[i].className = "";
    }
    var body = document.documentElement;
    var index = parseInt(this.getAttribute("data-index"));
    this.className = "current";
    var offsetTop = item_arr[index].offsetTop;
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
    timerId = setInterval(function(){
      var step = 30;
      var target = offsetTop;
      var current = scroll().top;
      if (current > target) {
        step = -Math.abs(step);
      }
      if (Math.abs(current - target) <= Math.abs(step)) {
        clearInterval(timerId);
        document.body.scrollTop = target;
        document.documentElement.scrollTop = target;
        window.onscroll = pageScroll;
        return;
      }
      current += step;
      document.body.scrollTop = current;
      document.documentElement.scrollTop = current;
      window.onscroll = null;
    }, 5);
  }
};
var top_bottom = document.querySelector(".top_bottom");
top_bottom.children[0].onclick = function (){
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  timerId = setInterval(function(){
    var step = 50;
    var target = 0;
    var current = scroll().top;
    if (current > target) {
      step = -Math.abs(step);
    }
    if (Math.abs(current - target) <= Math.abs(step)) {
      clearInterval(timerId);
      document.body.scrollTop = target;
      document.documentElement.scrollTop = target;
      window.onscroll = pageScroll;
      return;
    }
    current += step;
    document.body.scrollTop = current;
    document.documentElement.scrollTop = current;
    window.onscroll = null;
  }, 5);
}
top_bottom.children[1].onclick = function (){
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  timerId = setInterval(function(){
    var step = 50;
    var target = document.documentElement.offsetHeight;
    var current = scroll().top;
    if (current > target) {
      step = -Math.abs(step);
    }
    if (Math.round(current + document.documentElement.clientHeight) >= target) {
      clearInterval(timerId);
      document.body.scrollTop = target;
      document.documentElement.scrollTop = target;
      window.onscroll = pageScroll;
      return;
    }
    current += step;
    document.body.scrollTop = current;
    document.documentElement.scrollTop = current;
    window.onscroll = null;
  }, 5);
}
window.addEventListener("load", screenResize);
window.onresize = screenResize;
function screenResize() {
  var screenWidth = document.body.clientWidth || document.documentElement.clientWidth;
  var left = (screenWidth - 1200) / 2;
  var elevator = document.querySelector(".elevator");
  elevator.style.left = -elevator.offsetWidth - 15 + left + 'px';
}
function del(elevator_list){
  for(var i = 0; i < elevator_list.length; i++){
    elevator_list[i].className = "";
  }
}
pageScroll();
window.onscroll = pageScroll;
function pageScroll(){
  var elevator_items = document.querySelectorAll(".elevaltor_item");
  var scrollTop = scroll().top + 200;
  screenResize();
  if(scrollTop > elevator_items[6].offsetTop){
    del(elevator_list);
    elevator_list[6].className = "current";
    elevator.style.display = "block";
  }else if(scrollTop > elevator_items[5].offsetTop){
    del(elevator_list);
    elevator_list[5].className = "current";
    elevator.style.display = "block";
  }else if(scrollTop > elevator_items[4].offsetTop){
    del(elevator_list);
    elevator_list[4].className = "current";
    elevator.style.display = "block";
  }else if(scrollTop > elevator_items[3].offsetTop){
    del(elevator_list);
    elevator_list[3].className = "current";
    elevator.style.display = "block";
  }else if(scrollTop > elevator_items[2].offsetTop){
    del(elevator_list);
    elevator_list[2].className = "current";
    elevator.style.display = "block";
  }else if(scrollTop > elevator_items[1].offsetTop){
    del(elevator_list);
    elevator_list[1].className = "current";
    elevator.style.display = "block";
  }else if(scrollTop > elevator_items[0].offsetTop){
    del(elevator_list);
    elevator_list[0].className = "current";
    elevator.style.display = "block";
  }else{
    del(elevator_list);
    elevator.style.display = "none";
  }
  var hotlist = document.querySelector(".hotlist");
  if(scrollTop > hotlist.offsetTop - 200){
    elevator.style.display = "none";
  }
}

function scroll(){
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop || 0;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft ||document.body.scrollLeft ||0;
  return {
   top: scrollTop,
   left: scrollLeft
  };
}