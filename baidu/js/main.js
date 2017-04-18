// JavaScript Document
$(function(){
	$(".main_top li").mouseover(function(){
		if(! ($(this).hasClass("clicked_li"))){
		$(this).addClass("hover_li");
		$(this).children().addClass("hover_a");}
		
	})
	$(".main_top li").click(function(){
		$(".main_top a").removeClass("clicked_a");
		$(".main_top li").removeClass("clicked_li");
		$(this).addClass("clicked_li");
		$(this).children().addClass("clicked_a");
	})
	$(".main_top li").mouseout(function(){
		$(".main_top li").removeClass("hover_li");
		$(".main_top a").removeClass("hover_a");
	})
	<!--alert($(".middle").offset().top);-->
	$("#submit").mouseover(function(){
		$("#submit").css("background-color","#09B");
	})
	$("#submit").mouseout(function(){
		$("#submit").css("background-color","#09C");
	})
	$("#person li").mouseover(function(){
		$(this).css("background-color","#36C");
		$(this).children().css("color","#FFF");
	})
	$("#setting li").mouseover(function(){
		$(this).css("background-color","#36C");
		$(this).children().css("color","#FFF");
	})
	$("#setting li").mouseout(function(){
		$(this).css("background-color","#FFF");
		$(this).children().css("color","#000");
	})
	$("#person li").mouseout(function(){
		$(this).css("background-color","#FFF");
		$(this).children().css("color","#000");
	})
	$("#person").mouseover(function(){
		$("#person ul").css("visibility","visible");
		$("#setting ul").css("visibility","hidden");
	})
	$("#setting").mouseover(function(){
		$("#setting ul").css("visibility","visible");
		$("#person ul").css("visibility","hidden");
	})
    $("#setting ul").mouseout(function(){
		$(this).css("visibility","hidden");
	})
	$("#person ul").mouseout(function(){
		$(this).css("visibility","hidden");
	})
})
	
	$(window).on('scroll',function(){
	var scrHeight=$(window).scrollTop();
	var midHeight=$(".middle").offset().top;
	if(scrHeight > midHeight){
			$(".middle").children().css({"position":"fixed","top":"5px"});
			$("#top_back").css("visibility","visible");
			$("#logo_small").css("visibility","visible");
	}else{
		$(".middle").children().css("position","relative")
		$("#top_back").css("visibility","hidden");
		$("#logo_small").css("visibility","hidden");
	}
})





	
