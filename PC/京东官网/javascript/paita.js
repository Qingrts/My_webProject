var tab_list_title = document.querySelector('.tab_list_title');
var lis = tab_list_title.querySelectorAll('li');
var tab_list = document.querySelector('.tab_list');
var items = tab_list.querySelectorAll('.item');

for(var i = 0; i < lis.length; i++){
    var li = lis[i];
    li.setAttribute('index', i);
    li.onmouseenter = function(){
        for(var i = 0; i < lis.length; i++){
            var li = lis[i];

            li.className = '';
        }

        this.className = 'current a';

        for(var j = 0; j < items.length; j++){
            var item = items[j];
            
            item.style.display = 'none';
        }
        var index = this.getAttribute('index');
        items[index].style.display = 'block';
    }
}