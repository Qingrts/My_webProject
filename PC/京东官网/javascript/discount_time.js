//获取元素
var spanArr = document.getElementById('setTimer').getElementsByTagName('span');
var discount_time = document.getElementById('discount_time');


//在定时器执行之前执行一次（调用函数）
interval_timer();



//定时器在1000ms后开始倒计时
var timerId = setInterval(interval_timer,1000);


//编写函数
function interval_timer(){
    var timer = new Date();
    spanArr[0].innerHTML = '00';
    spanArr[1].innerHTML = 60 - 1 - timer.getMinutes() >= 10 ? 60 - 1 - timer.getMinutes() : '0' + (60 - 1 - timer.getMinutes());
    spanArr[2].innerHTML = 60 - 1 - timer.getSeconds() >= 10 ? 60 - 1 - timer.getSeconds() : '0' + (60 - 1 - timer.getSeconds());
    discount_time.innerHTML = timer.getHours() >= 10 ? timer.getHours() + ':00' : '0' + timer.getHours() + ':00';
    if(60 - 1 - timer.getMinutes() == 0 && 60 - 1 - timer.getSeconds()){
        discount_time.innerHTML = timer.getHours() + 1 == 24 ? '00:00' : timer.getHours() + 1 + ':00';
    }
}