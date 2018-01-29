 var mybody = document.getElementsByClassName('donghua')[0];
 //滑动处理
 var startX, startY, moveEndX, moveEndY, X, Y;

 var space = 0;
//获取开始的位置坐标
 mybody.addEventListener('touchstart', function(e) {

 	e.preventDefault();

 	startX = e.touches[0].pageX;

 	startY = e.touches[0].pageY;
 	
 	console.log(startX,startY);

 }, false);

//获取移动的终点坐标
 mybody.addEventListener('touchmove', function(e) {

 	e.preventDefault();

 	moveEndX = e.changedTouches[0].pageX;

 	moveEndY = e.changedTouches[0].pageY;
 	
 	console.log(moveEndX,moveEndY);

 	X = moveEndX - startX;

 	Y = moveEndY - startY;
 	
// 	判定滑动的方向

 	if(Math.abs(X) > Math.abs(Y) && X > 0) {

 		console.log("向右");
 		

 		
 		if(space<-10){
 		  space += 11.11;
 		 
 		  $(".donghua dl dd").animate({
 		  	  "left":space+"%"
 		  },500)
 		  

 		  
 		}

 	} else if(Math.abs(X) > Math.abs(Y) && X < 0) {

 		console.log("向左");

 		if(space>-66.5){
 		  
 		   space -= 11.11;
 			
 		   $(".donghua dl dd").animate({
 		  	  "left":space+"%"
 		  },500)
 		}
 		console.log(space)

 		
 	} else if(Math.abs(Y) > Math.abs(X) && Y > 0) {

 		console.log("向下");

 	} else if(Math.abs(Y) > Math.abs(X) && Y < 0) {

 		console.log("向上");

 	} else {

 		console.log("没滑动");
 	}

 });