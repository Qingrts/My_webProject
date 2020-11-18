var aes = document.querySelectorAll('.recommend_link');
var spans = document.querySelectorAll('.recommend_nav_item_title_text');
var divs = document.querySelectorAll('.recommend_nav_asc');
var uls= document.querySelectorAll('.recommend_love');

for(var i = 0; i < aes.length; i++){
    var aelement = aes[i];
    aelement.setAttribute('aindex', i);


    //默认第一个高亮显示
    if(i == 0){
        spans[i].className = 'recommend_nav_item_title_text text_click';
        divs[i].className = 'recommend_nav_asc asc_click';
        uls[i].style.display = 'block';

    }

    aelement.onclick = function (){
        for(var j = 0; j < uls.length; j++){
            spans[j].className = 'recommend_nav_item_title';
            divs[j].className = 'recommend_nav_asc';
            spans_fix[j].className = 'recommend_nav_item_title';
            divs_fix[j].className = 'recommend_nav_asc';
            uls[j].style.display = 'none';
        }


        var aindex = this.getAttribute('aindex');
        spans[aindex].className = 'recommend_nav_item_title_text text_click';
        divs[aindex].className = 'recommend_nav_asc asc_click';
        spans_fix[aindex].className = 'recommend_nav_item_title_text text_click';
        divs_fix[aindex].className = 'recommend_nav_asc asc_click';
        uls[aindex].style.display = 'block';
    }
}

var spans_fix = document.querySelectorAll('.recommend_nav_item_title_text_fix');
var divs_fix = document.querySelectorAll('.recommend_nav_asc_fix');

var fix_as = document.querySelectorAll('.recommend_link_fix');
for(var j = 0; j < fix_as.length; j++){
    var fix_a = fix_as[j];
    fix_a.setAttribute('fix_aindex', j);

    //默认第一个高亮显示
    if(j == 0){
        spans_fix[j].className = 'recommend_nav_item_title_text_fix text_click';
        divs_fix[j].className = 'recommend_nav_asc asc_click';
        uls[j].style.display = 'block';

    }

    fix_a.onclick = function (){
        for(var j = 0; j < uls.length; j++){
            spans_fix[j].className = 'recommend_nav_item_title_fix';
            divs_fix[j].className = 'recommend_nav_asc_fix';
            spans[j].className = 'recommend_nav_item_title_fix';
            divs[j].className = 'recommend_nav_asc_fix';
            uls[j].style.display = 'none';
        }


        var fix_aindex = this.getAttribute('fix_aindex');
        spans_fix[fix_aindex].className = 'recommend_nav_item_title_text_fix text_click';
        divs_fix[fix_aindex].className = 'recommend_nav_asc asc_click';
        spans[fix_aindex].className = 'recommend_nav_item_title_text_fix text_click';
        divs[fix_aindex].className = 'recommend_nav_asc asc_click';
        uls[fix_aindex].style.display = 'block';
    }
}