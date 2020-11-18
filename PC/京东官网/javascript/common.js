//获取元素节点
function $(vArg){
	switch(vArg[0]){
		case '#':
			return document.getElementById(vArg.substring(1));
			break;
		case '.':
			return document.getElementsByClassName(vArg.substring(1));
			break;
		default:
			var str = vArg.substring(0,5);
			if(str == 'name='){
				return document.getElementByName(vArg.substring(5));
			}else{
				return document.getElementByTagName(vArg);
			}
			break;
	}
}


function getScroll(){

	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	var scrollLeft = document.body.scrollLeft || document.docuemntElement.scrollLeft;

	return {
		scrollTop: scrollTop,
		scrollLeft: scrollLeft
	}
}



function getPage(e){
	var pageX = e.pageX || e.clientX + getScroll().scrollLeft;
	var pageY = e.pageY || e.clientY + getScroll().scrollTop;

	return {
		pageX: pageX,
		pageY: pageY
	}
}