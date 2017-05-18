

function showScroll(){
	var wrapH=$('.wrap').height();
	var clientH=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	var difH=wrapH-clientH;
	$("html,body").stop(true,true).animate({scrollTop:difH},1000);
}
function audioAutoPlay(id){  
	var audio = document.getElementById(id) 
	var play = function(){  
	        audio.play();  
	        document.removeEventListener("touchstart",play, false);  
	    };  
	audio.play();  
	document.addEventListener("WeixinJSBridgeReady", function () {  
	    play();  
	}, false);  
	document.addEventListener('YixinJSBridgeReady', function() {  
	    play();  
	}, false);  
	document.addEventListener("touchstart",play, false);  
}
function audioPlay(id){
	var audio = document.getElementById(id);
	audio.addEventListener("loadedmetadata",function(){
   	 	audio.play();
	});
	audio.play(); 
	document.addEventListener("WeixinJSBridgeReady", function () {  
	   audio.play(); 
	}, false);  
}

//可以在这个事件触发后播放一次然后暂停（这样以后视频会处于加载状态，为后面的流畅播放做准备）
function videoPlay(id){
	var video=document.getElementById(id);
	video.play();
	document.addEventListener("WeixinJSBridgeReady", function (){ 
   	 	video.play();
    	video.pause();
	}, false)
}