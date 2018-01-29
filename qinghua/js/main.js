//顶部导航条图标的变化
$(".float_right").click(function(){
	var logo = $(this).attr("src").split("/")[2];
	if(logo=="daohang.png"){
		$(this).attr("src","img/student/close.png");
		$("#colum").css({"display":"block"});
	}else{
		$(this).attr("src","img/student/daohang.png");
		$("#colum").css({"display":"none"});
	}
});
//自定义滚动到相应位置
function scroll(id){
	 $("html, body").animate({
            scrollTop: $(id).offset().top-60 
	       }, {
	       	duration: 500,easing: "swing"
	       });
        return false;
}
$("#colum dl dd").click(function(){
	$(this).css({"background":"#aa8d6b"});
	$(this).siblings().css({"background":"none"});
	setTimeout(function(){
		$("#colum").css("display","none");
	},200);
	$(".float_right").attr("src","img/student/daohang.png");
	
	var id = $(this).find("a").attr("href");

    scroll(id);
	
	
})



//招生宣讲选项卡
var tabs = $(".tab_nav>dd").children();
tabs.click(function() {
	$(this).css({ "color": "red" });
	var parent = $(this).parent();
	$(parent).siblings().find('span').css({ "color": "#ffffff" });
	var clas = $(this).attr('class');
	console.log(clas);
	$("#" + clas).css({ "display": "block" });
	$("#" + clas).siblings().css({ "display": "none" });
})
//报考流程图标倾斜摇摆
/*@swing
    @obj  操作对象
    @t    定时器的时间间隔
    @num  最大倾斜角度
 */

function swing(obj, t, num) {
	var i = 0; //控制增减的时机
	var angel = -num;
	var frequency = parseInt(num / 5) * 2;
	setInterval(function() {
		i++;
		$(obj).css("transform", "rotate(" + angel + "deg)");
		if(i <= frequency) {
			angel += 5;
		};
		if(i > frequency) {
			angel -= 5;
		}
		if(i == frequency * 2) {
			i = 0;
		}
	}, t);
}
swing(".time", 100, 30);

//招生政策选项卡
var tabs = $("#policyNav").children();
tabs.click(function() {
	$(this).css({ "color": "#fff", "backgroundColor": "#ab2945" });
	$(this).siblings().css({ "color": "#333", "backgroundColor": "#f7e8ec" });
	var clas = $(this).attr('class');
	$("#" + clas).css({ "display": "block" });
	$("#" + clas).siblings().css({ "display": "none" });
})

//课程设置
var bol = false,
	bols = true;

function _left(self){
	if(bol) {
		$(".mokuai").css({ "transform": "translateX(0%)", "transition": "all linear .8s" });
		bol = !bol;
		bols = !bols;
		$(self).css({ "opacity": ".3" });
		$(self).siblings().css({ "opacity": "1" });
	}
}

function _right(self){
	if(bols) {
		$(".mokuai").css({ "transform": "translateX(-50%)", "transition": "all linear .8s" });
		bol = !bol;
		bols = !bols;
		$(self).css({ "opacity": ".3" });
		$(self).siblings().css({ "opacity": "1" });
	}
}

//中外师资
//var space = 0;
//var autoTea = setInterval(function(){
//	if(Math.abs(space)<=600){
//		$(".donghua dl dd").css({"transform":"translateX("+space+"%)","transition":"all linear 0.8s"});
//		var first = $(".donghua dl dd").eq(0);
//		first.remove();
//		$(".donghua dl").append(first);
//	    space -= 100;
//	}
//	if(Math.abs(space)>600){
//		space = 0;
//	}
//},2000);








