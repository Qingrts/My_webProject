//获取元素
var banner_2 = document.querySelector('.banner_2');
//获取ul下的第一个子集
var ul_first = banner_2.children[0];
//获取ul下的第二个子集
var ul_second = banner_2.children[1];
//获取ul下的第三个子集
var ul_third = banner_2.children[2];
//获取上一张，下一张按钮
var clickLeft = ul_third.children[0].firstChild;
var clickRight = ul_third.children[1].firstChild;



//1.动态生成点的数量（根据图片的数量生成相应数量的点的数量）;
var count = ul_first.children.length;
//图片容器的宽度
var imageSize = banner_2.offsetWidth;

for(var i = 0; i < count; i++){
    //创建li元素节点
    var li = document.createElement('li');
    //将li元素节点添加到第二ul中，即ul_second;
    ul_second.appendChild(li);
    var span = document.createElement('span');
    li.appendChild(span);
    //为li设置自定义属性'index'并赋值
    li.setAttribute('index', i);
    //第一张图片默认显示
    if(i == 0){
        li.style.backgroundColor = 'rgba(255,255,255,' + '0.3)';
        li.firstChild.style.borderColor = '#fff';
        li.firstChild.style.backgroundColor = '#fff';
    }


    //2.鼠标经过时，以动画的形式切换图片
    //鼠标悬停时，执行的函数（将函数赋值给li所注册onmouseover事件）
    li.onclick = liOnclick;
    li.onmouseover = liOnclick;
}


//3.动画的形式实现上一张，下一站功能
var index = 0;   //第一张图片的索引
clickRight.onclick = function (){
    if (index === count) {
        ul_first.style.left = '0px';
        index = 0;
    }
    //如果是最后一张图片，不让index++；
    index++;
    if(index < count){
        // animate(ul_first, - index * imageSize);
        // 获取图片对应的序号，让序号点击
        ul_second.children[index].click();
    }else{
        animate(ul_first, - index * imageSize);
        for(var z = 0; z < ul_second.children.length; z++){
            var li = ul_second.children[z];
            // 取消所有序号的高亮显示，让第一序号高亮显示
            li.firstChild.style.backgroundColor = '';
            li.firstChild.style.borderColor = '';
            li.style.backgroundColor = '';
        }
    
        
        //让第一个序号的默认显示
        ul_second.children[0].style.backgroundColor = 'rgba(255,255,255,' + '0.3)';
        ul_second.children[0].firstChild.style.borderColor = '#fff';
        ul_second.children[0].firstChild.style.backgroundColor = '#fff';
    
    }
    
}
clickLeft.onclick = function (){
    // 如果当前是第一张图片，此时要偷偷的切换到最后一张图片的位置（克隆的第一张图片）
    if(index === 0){
        index = count;
        ul_first.style.left = - index * imageSize + 'px';
    }


        index--;
        // animate(ul_first, - index * imageSize);
        ul_second.children[index].click();
}





//3.无缝滚动       切换到最后一张图片时，点击下一张时，可以显示第一张图片
//克隆第一张图片，
var firstLi = ul_first.children[0];
var cloneLi = firstLi.cloneNode(true);
//参数：false ：只复制便签，不包含内容
//参数：true  ：复制便签及内容
ul_first.appendChild(cloneLi);


var timerId1;
//4.自动播放
function banner_2_player(){
    timerId1 = setInterval(function (){
        clickRight.click();
    },2000);
}

function banner_2_stopPalyer(){
    clearInterval(timerId1);
    timerId1 = null;
};
//页面加载完毕，定时器开始执行
banner_2_player();




function liOnclick(){
    for(var z = 0; z < ul_second.children.length; z++){
        var li = ul_second.children[z];
        //清除样式
        li.firstChild.style.backgroundColor = '';
        li.firstChild.style.borderColor = '';
        li.style.backgroundColor = '';
    }

    
    //修改当前li的属性
    this.style.backgroundColor = 'rgba(255,255,255,' + '0.3)';
    this.firstChild.style.borderColor = '#fff';
    this.firstChild.style.backgroundColor = '#fff';

    //获取当前li的index属性，并将它转为整型
    var liIndex = parseInt(this.getAttribute('index'));
    //以动画的形式切换图片

    animate(ul_first, - liIndex * imageSize);

    index = liIndex;
}


//鼠标悬停时，定时器停止
banner_2.onmouseover = banner_2_stopPalyer;
//鼠标离开时，定时器执行
banner_2.onmouseout = banner_2_player;