var find_goods_fixedscroll = document.querySelector('.find_goods_fixedscroll');

var find_goods_fixedscroll_gallery = find_goods_fixedscroll.children[0];

var find_goods_scrollbar = document.querySelector('.find_goods_scrollbar');


var find_goods_fixedscroll = document.querySelector('.find_goods_fixedscroll');
var moveSize = find_goods_fixedscroll.offsetWidth;


var goods_index = 0;
function auto_player_scroll(){
    goods_index++;
    if(goods_index == 11){
        find_goods_fixedscroll_gallery.style.left = '0px';
        goods_index = 0;
        goods_index++;
    }
    animate_auto(find_goods_fixedscroll_gallery, - goods_index * 198.5);
}


//页面加载完毕执行一次
auto_player_scroll();
//动画执行一次之后时间正好是3秒之后，定时器开始执行
var player_timerId = setInterval(auto_player_scroll, 3000);





function animate_auto(element, target){
    //清空元素原有的定时器
    if(element.timerId){
        clearInterval(element.timerId);
        element.timerId = null;
    }

    element.timerId = setInterval(function(){
        //步长
        var step = 2;
        //获取盒子当前的位置
        var current = element.offsetLeft;

        //如果当前盒子的位置大于目标距离，则步长为负数
        if(current > target){
            step = -Math.abs(step);
        }

        //如果（目标位置 - 当前位置） < step ，即盒子到达目标位置,清除定时器
        if(Math.abs(current - target) < Math.abs(step)){
            //让定时器停止
            clearInterval(element.timerId);
            element.style.left = target + 'px';

            return;
        }

        //如果没到目标位置，这继续执行
        current += step;
        element.style.left = current + 'px';

    },30);
}