/*
var tab_list = $('.tab_list')[0];
var lis = tab_list.children;

var tab_inner = $('.tab_inner')[0];
var uls = tab_inner.children;
for(var i = 0; i < lis.length; i++){
    var li = lis[i];
    li.setAttribute('index', i);


    li.onmouseover = function (){
        for(var j = 0; j < lis.length; j++){
            lis[j].className = '';
        }
        

        this.className = 'current';


        for(var z = 0; z < uls.length; z++){
            uls[z].className = 'tab_item';
        }
        index = this.getAttribute('index');
        uls[index].className = 'tab_item current_item';
    }
}

*/








/*   Jquery      */
$(function (){
    /* search_tab 部分Tab切换效果*/
    $(".tab_list>li").mouseover(function (){
        $(this).siblings("li").removeClass("current");
        $(this).addClass("current");
        var index = $(this).index();
        $(".tab_inner>ul:eq(" + index + ")").siblings("ul").removeClass("current_item");
        $(".tab_inner>ul:eq(" + index + ")").addClass("current_item");
    });





    /* banner_left 部分Tab切换效果*/
    $(".banner_left>ul>li").mouseenter(function (){
        $(".hide_container").css("display", "block");
        var index = $(this).index();
        $(".hide_list>.hide_item").siblings("div").removeClass("show_item");
        $(".hide_list>.hide_item:eq(" + index + ")").addClass("show_item");
    });
    $(".banner_left").mouseleave(function (){
        $(".hide_container").css("display", "none");
    });





    /* tab_list 部分Tab切换效果*/
    $(".search_tab>a").click(function (){
        $(this).siblings("a").removeClass("a_current");
        $(this).addClass("a_current");
    });



    /* evaluate 部分tab切换效果 */
    $(".evaluate>div>a").mouseover(function (){
        $(this).siblings("a").removeClass("pst_current");
        $(this).addClass("pst_current");
    }).mouseout(function (){
        $(this).removeClass("pst_current");
    });
});




