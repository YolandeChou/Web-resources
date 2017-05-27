// JavaScript Document
$(function(){
	$(".news td:eq(0)").css("width","108px");
	$(".news td:eq(1)").css("width","99px");
	$(".news td:eq(2)").css("width","78px");
	$(".news td:eq(3)").css("width","62px");
	$(".news td:eq(4)").css("width","100px");
	$(".news tr").each(function(){
		$(this).children("td:eq(0)").css({"text-align":"left","padding-left":"5px"});
	})
	
	$(".news tr:even").css("background-color","#f0f0f0");
	
	$(".ad:eq(4),.ad:eq(9)").css("margin-right","0");
	
	
	
	$(".num li").mouseover(function(){
		$(this).css("color","#000");
	})
	
})

