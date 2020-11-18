function animate(element, target){
    //清空元素原有的定时器
    if(element.timerId){
        clearInterval(element.timerId);
        element.timerId = null;
    }

    element.timerId = setInterval(function(){
        //步长
        var step = 5;
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

    },5);
}