var search_center = $(".search_center")[0];
var right_activity = $(".right_activity")[0];
var logo_hover = $(".logo_hover>img")[0];
var search_form = $(".search_form")[0];
var search_tab = $(".search_tab")[0];
var search_hot = $(".search_hot")[0];
var search_ico = $(".search_ico")[0];
var search_text = $(".search_text")[0];
var taobao_logo = $(".taobao_logo")[0];


var scrollTop = $(window).scrollTop();
if(scrollTop > 200){
    search_center.className = 'search_center fixed';
    right_activity.style.display = 'none';
    logo_hover.src = 'images/TB1TGfMcwMPMeJjy1XbXXcwxVXa-80-33.png';
    taobao_logo.style.marginLeft = '20%';
    search_form.style.margin = "0 0 0 170px";
    search_tab.style.display = 'none';
    search_hot.style.display = 'none';
    search_ico.style.top = '10px';
    search_text.style.top = '0';
    search_text.style.right = '-72px';
}else{
    search_center.className = 'search_center w';
    right_activity.style.display = 'block';
    logo_hover.src = 'images/TB1UyECorr1gK0jSZFDXXb9yVXa-190-140.gif';
    taobao_logo.style.marginLeft = '0';
    search_form.style.margin = '30px 0 0 70px';
    search_tab.style.display = 'block';
    search_hot.style.display = 'block';
    search_ico.style.top = '32px';
    search_text.style.top = '22px';
    search_text.style.right = '-55px';
}

window.onscroll = function (e){
    e = e || window.event;

    var scrollTop = $(this).scrollTop();
    if(scrollTop > 200){
        search_center.className = 'search_center fixed';
        right_activity.style.display = 'none';
        logo_hover.src = 'images/TB1TGfMcwMPMeJjy1XbXXcwxVXa-80-33.png';
        taobao_logo.style.marginLeft = '20%';
        search_form.style.margin = "0 0 0 170px";
        search_tab.style.display = 'none';
        search_hot.style.display = 'none';
        search_ico.style.top = '10px';
        search_text.style.top = '0';
        search_text.style.right = '-72px';
    }else{
        search_center.className = 'search_center w';
        right_activity.style.display = 'block';
        logo_hover.src = 'images/TB1UyECorr1gK0jSZFDXXb9yVXa-190-140.gif';
        taobao_logo.style.marginLeft = '0';
        search_form.style.margin = '30px 0 0 70px';
        search_tab.style.display = 'block';
        search_hot.style.display = 'block';
        search_ico.style.top = '32px';
        search_text.style.top = '22px';
        search_text.style.right = '-55px';
    }
}