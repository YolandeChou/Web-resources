// JavaScript Document
$(function(){
	$(".frameHeader").click(function(){
		if($(".frameContent").is(":visible")){
		$(".frameHeader span i").attr("class","fa fa-angle-double-down");
		$(".frameContent").css("display","none");
		$(".divFrame").css("height","34px");
		}else{
			$(".frameHeader span i").attr("class","fa fa-angle-double-up");
			$(".frameContent").css("display","block");
			$(".divFrame").css("height","180px");
		}
		
	})
	
	$(".frameFooter > a").click(function(){
		if($(".frameFooter > a").text()=="简化"){
			$("ul li:gt(4):not(:last)").hide();
			$(".frameFooter > a").text("更多");
			$(".divFrame").css("height","125px");
		}else{
			$("ul li:gt(4):not(:last)").show();
			$(".frameFooter > a").text("简化");
			$(".divFrame").css("height","180px");
		}
	})
})
