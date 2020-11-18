var JDkill_R = document.querySelector('.JDkill_R');
var JDkill_Rimg = JDkill_R.children[0];
var links = JDkill_Rimg.children;
var circle = JDkill_R.children[1];

var JDkill_RSize = JDkill_R.offsetWidth;

var circleIndex = 0;
for(var w = 0; w < links.length; w++){
    var ibiao = document.createElement('i');
    circle.appendChild(ibiao);
    ibiao.setAttribute('circleIndex', w);
    if(circleIndex == 0){
        circle.children[0].className = 'ihover';
    }


    ibiao.onmouseover = iOnmouseover;
}



var JDkill_Rimg_first_li = JDkill_Rimg.children[0];
var JDkill_Rimg_first_cloneli = JDkill_Rimg_first_li.cloneNode(true);
JDkill_Rimg.appendChild(JDkill_Rimg_first_cloneli);

var imgCount = links.length;


function iOnmouseover(){
    for(var i = 0; i < circle.children.length; i++){
        circle.children[i].className = '';
    }
    this.className = 'ihover';
    circleIndex = parseInt(this.getAttribute('circleIndex'));
    animate(JDkill_Rimg, - circleIndex * JDkill_RSize);
}


//图片索引初始值为0；
var imgIndex = 0;

var timerId2;
function JDkill_R_Player(){
    timerId2 = setInterval(JDkill_R_switch_picture,1000);
}
//页面加载完毕，定时器开始执行
JDkill_R_Player();
function JDkill_R_stopPlayer(){
    clearInterval(timerId2);
    timerId2 = null;
}



function JDkill_R_switch_picture(){
    if(imgIndex == imgCount){
        JDkill_Rimg.style.left = '0px';
        imgIndex = 0;
    }
    
    imgIndex++;
    
    if(imgIndex < imgCount){
        for(var i = 0; i < circle.children.length; i++){
            circle.children[i].className = '';
        }
        if(imgIndex > 0 && imgIndex < imgCount - 1){
            circle.children[imgIndex].className = 'ihover';
        }else{
            circle.children[0].className = 'ihover';
        }
        animate(JDkill_Rimg, - imgIndex * JDkill_RSize);
    }
}

//鼠标悬停时，定时器停止
JDkill_R.onmouseover = JDkill_R_stopPlayer;
//鼠标离开时，定时器执行
JDkill_R.onmouseout = JDkill_R_Player;