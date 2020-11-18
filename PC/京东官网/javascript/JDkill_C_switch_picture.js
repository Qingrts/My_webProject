//获取元素
//获取大盒子
var JDkill_C = document.querySelector('.JDkill_C');
//获取存放图片的容器
var firstUl = JDkill_C.children[0];
//获取存放按钮的容器
var secondUl = JDkill_C.children[1];
//获取上一张，下一张按钮
var mouseoverLeft = secondUl.children[0].children[0];
var mouseoverRight = secondUl.children[1].children[0];
//获取每一个li的大小
var JDkill_CSize = JDkill_C.offsetWidth;
//获取图片容器中li的数量
var count_li = firstUl.children.length;
var clickCount = count_li / 4;



for(var i = 0; i　< 4; i++){
    var li = firstUl.children[i];
    var cloneLi = li.cloneNode(true);
    firstUl.appendChild(cloneLi);
}


var lindex = 0;
mouseoverRight.onmouseover = function (){
    this.className = 'JDkill_Current';
    //如果是克隆的部分的图片，则偷偷的把ul的left改为0；
    if(lindex == clickCount){
        firstUl.style.left = '0px';
        lindex = 0;
    }
    
    lindex++;
    animate(firstUl, -  lindex * JDkill_CSize);
}
mouseoverLeft.onmouseover = function (){
    this.className = 'JDkill_Current';
    if(lindex == 0){
        lindex = clickCount;
        firstUl.style.left = - lindex * JDkill_CSize + 'px';
    }
    lindex--;
    animate(firstUl, - lindex * JDkill_CSize);
}



mouseoverLeft.onmouseout = function (){
    this.className = '';
}
mouseoverRight.onmouseout = function (){
    this.className = '';
}