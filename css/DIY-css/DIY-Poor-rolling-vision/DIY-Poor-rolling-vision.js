function scrollnumber(element,cssname,offset){
	var a,b,c,d;
	d=$(element).offset().top;   // 浏览器窗口的高度
	a=eval(d + offset);         // 元素相对于窗口的距离
	b=$(window).scrollTop();   // 监控窗口的已滚动的距离
	c=$(window).height();     // 整个文档的高度
	if(d - b <= offset){
		$((element)).addClass((cssname));
	}
}
 
function scrollfun(){
	scrollnumber("#d1",'animated',100);
	scrollnumber("#d2",'animated',100);
	scrollnumber("#d3",'animated',100);
	scrollnumber("#d4",'animated',100);
    scrollnumber("#d5",'animated',100);
    scrollnumber("#d6",'animated',100);
    scrollnumber("#d7",'animated',100);
    scrollnumber("#d8",'animated',100);
    scrollnumber("#d9",'animated',100);
    scrollnumber("#d10",'animated',100);
    scrollnumber("#d11",'animated',100);
    scrollnumber("#d12",'animated',100);
}


	
	$(window).scroll(function(){
		scrollfun();
	});
