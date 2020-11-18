var search = document.querySelector('.search');
var search_l = document.querySelector('.search_l');
var search_r = document.querySelector('.search_r');
var search_r_C = search_r.querySelector('.search_r_C');
var search_r_B = document.querySelector('.search_r_B');
var elevator = document.querySelector('.elevator');

var replaceSearch = document.querySelector('.replaceSearch');


var recommend_navfixed = document.querySelector('.recommend_navfixed');


window.onscroll = function (){
    
    scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

    //导航栏
    if(scrollTop > 100){
        search.className = 'search fixed1';
        search_l.className = 'search search_l fixed2';
        search_r.className = 'search search_r fixed3';
        search_r_C.style.display = 'none';
        search_r_B.style.display = 'none';
        replaceSearch.style.height = '139px';
    }else{
        search.className = 'search w';
        search_l.className = 'search_l';
        search_r.className = 'search_r';
        search_r_C.style.display = 'block';
        search_r_B.style.display = 'block';
        replaceSearch.style.height = '0px';
    }

    //回到顶部
    if(scrollTop > 2900){
        elevator.className = 'elevator fixed two';
    }else if(scrollTop > 550){
        elevator.className = 'elevator fixed';
    }else{
        elevator.className = 'elevator';
    }


    if(scrollTop > 2900){
        recommend_navfixed.style.display = "block";
    }else{
        recommend_navfixed.style.display = "none";
    }
}