//向下箭头动画
setInterval(function(){
   $(".mask .down").animate({
	   bottom:"45px",
	   opacity: 0.3
	},500).animate({
	   bottom:"15px",
	   opacity:1
	},500)
},1500);

//视屏鼠标滑过动画
$("#videoForum dl dd").mouseenter(function(){
      $(this).find('.videoMask').show();
})
$("#videoForum dl dd").mouseleave(function(){
      $(this).find('.videoMask').hide();
})
function startVideo(id){
	console.log(id);
	var video = document.getElementById(id);
	if(video.paused){
		video.play();
		$(".videoMask").css("display","none");
	}else{
		video.pause();
	}
}

var zIndex = 1000; 
//选项卡切换
var screenHeight = $(window).height();
$(".navCurit li").click(function(){
	$(".proIntroduce").attr("data-show",0);               //判别点击的是否是项目介绍data-show
	                                                      //  0 代表点击的不是项目介绍，1代表点击的是项目介绍
	$(this).css("borderBottom","2px solid darkred");
	$(this).siblings().css("borderBottom","none");
	var id = $(this).attr("class");
	console.log(id);
	if(id == "proIntroduce"){
	  zIndex += 100;
	  $(".proIntroduce").attr("data-show",1);
	  $("#proIntroduce").css("zIndex",zIndex).css("display","block");
	   var myId = "#"+id;
	   var topss =parseInt(screenHeight);
	   var levels = (topss/10).toFixed(1);
	   var uptab02 = setInterval(function(){
			topss = topss.toFixed(1) - levels;
			$(myId).css("top",topss+"px");
			if(topss == 0){
				clearInterval(uptab02);
		    	$(".conCurit>div").css("display","none");
                $("#"+id).css("display","block");
			}
		},100)
//	    return;
	}else{
	  $(".conCurit>div").css("display","none");
      $("#"+id).css("display","block");
	}
   
})
var speed = (screenHeight/10).toFixed(1);
//首页和选项卡之间的切换
$(".down").click(function(){
	zIndex += 100;
	$(".curitCon").css("zIndex",zIndex);
	var topSpace = screenHeight;
	$(".curitCon").css({"display":"block","top":topSpace+"px"});
//	alert("1111");
	var uptab = setInterval(function(){
		topSpace = (topSpace - speed).toFixed(1);
		$(".curitCon").css("top",topSpace+"px");
		if(topSpace == 0){
			$("#bigContainer").css("overflow",'auto');
			$(".mask").css("display","none");
			$(".back").css("display","block");
			clearInterval(uptab);
		}
	},50)
})

//返回上一页

$(".back").click(function(){ 
  var dataItem = $(".proIntroduce").attr("data-show");
  
  if(dataItem == 0){                                    //返回首页
  	  zIndex += 100;
	  $(".mask").css("zIndex",zIndex);
	  var tops = screenHeight;
	  $(".mask").css({"position":"absolute","left":"0px","top":"-"+screenHeight+"px"});
	  $(".mask").css("display","block");
	  var back = setInterval(function(){
	                 tops = (tops - speed).toFixed(1);
		             $(".mask").css("top","-"+tops+"px");
		             if(tops == 0){
		             	clearInterval(back);
		             	$(".curitCon").css("display","none").css("top",screenHeight+"px");
		             }
		          },50)
   }else{                                              //返回选项卡
   	 zIndex +=100;
   	 var top02 = screenHeight;
   	 $(".curitCon").css("top","-"+top02+"px").css("height",top02+"px").css("overflow","hidden");
   	 $(".curitCon").css({"display":"block","zIndex":zIndex});
   	 $(".videoForum").css("borderBottom","2px solid darkred");
	 $(".videoForum").siblings().css("borderBottom","none");
	 $("#videoForum").css("display","block");
	 $("#proIntroduce").css("display","none");
   	 var back02= setInterval(function(){
	                 top02 = (top02 - speed).toFixed(1);
		             $(".curitCon").css("top","-"+top02+"px");
		             if(top02 == 0){
		             	clearInterval(back02);
		             	$("#proIntroduce").css("display","none");
		             	$(".proIntroduce").attr("data-show",0);
		             	$(".curitCon").css("overflow","auto");
		             }
		          },50)
   }
  
})

