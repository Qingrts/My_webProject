//鼠标放上去的时候，左右箭头显示，离开则隐藏
$(".banner_center_top").mouseover(function (){
    $(".arrow_left_ico").css("display", "block");
    $(".arrow_right_ico").css("display", "block");
});
$(".banner_center_top").mouseout(function (){
    $(".arrow_left_ico").css("display", "none");
    $(".arrow_right_ico").css("display", "none");
});









//获取元素
var banner_center_top = document.querySelector('.banner_center_top');
var ul_first = banner_center_top.children[1];
var ul_second = banner_center_top.children[3];
//获取上一张，下一张按钮


//1.动态生成点的数量（根据图片的数量生成相应数量的点的数量）;
var count = ul_first.children.length;
//图片容器的宽度
var ul_containerSize = banner_center_top.offsetWidth;
//点击序号以动画的形式切换图片
for(var i = 0; i < ul_first.children.length; i++){
    var dd = document.createElement("dd");
    ul_second.appendChild(dd);
    var a = document.createElement("a");
    a.style.cursor = "pointer";
    dd.appendChild(a);
    dd.setAttribute("index", i);

    if(i == 0){
        dd.firstChild.className = 'bgc_orance';
    }


    dd.onclick = liOnclick;
}





//2.点击左右按钮切换图片
var index = 0;
$(".arrow_right_ico").click(function (){
    //如果图片到达最后一张图片，即克隆的图片，则偷偷切换到第一张图片，并且索引值为0
    if(index == count){
        ul_first.style.left = '0px';
        index = 0;
    }
    //如果图片没有到达最后一张图片，则让index++；并且执行动画
    index++;

    if(index < count){
        ul_second.children[index].click();
    }else{
        for(var z = 0; z < ul_second.children.length; z++){
            var dd = ul_second.children[z];
            dd.firstChild.className = '';
        } 

        ul_second.children[0].firstChild.className = 'bgc_orance';
        animate(ul_first, - index * ul_containerSize);
    }
});
$(".arrow_left_ico").click(function (){
    if(index == 0){
        index = count;
        ul_first.style.left = - index * ul_containerSize + 'px';
    }


    index--;
    ul_second.children[index].click();
})







//无缝滚动 
var firstLi = ul_first.children[0];
var cloneLi = firstLi.cloneNode(true);
ul_first.appendChild(cloneLi);






function liOnclick(){
    for(var j = 0; j <　ul_second.children.length; j++){
        var dd = ul_second.children[j];
        dd.firstChild.className = '';
    }
    this.firstChild.className = 'bgc_orance';

    //获取当前li的index属性，并将它转为整型
    var liIndex = parseInt(this.getAttribute('index'));
    //以动画的形式切换图片

    animate(ul_first, - liIndex * ul_containerSize);
    index = liIndex;
}



//4.自动播放
var timerId;
function banner_center_top_player(){
    timerId = setInterval(function (){
        $(".arrow_right_ico")[0].click();
    },2000);
}

function banner_center_top_stopplayer(){
    clearInterval(timerId);
    timerId = null;
};
//页面加载完毕，定时器开始执行
banner_center_top_player();


//鼠标悬停时，定时器停止
banner_center_top.onmouseover = banner_center_top_stopplayer;
//鼠标移出时，定时器执行
banner_center_top.onmouseout = banner_center_top_player;