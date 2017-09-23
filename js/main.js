$(function(){

	var sliderBtns = $(".slider-btn div");
	var sliderPics = $(".slider-box img");
	var i = 0,m=0;
	//获取元素index
	function getIndex(obj,value){
        for(i=0;i<obj.length;i++){
        	if(obj[i] == value){
        		return i;
        	}
        }
	}
	//幻灯片效果
    function changePic(){
    	m = m <=2 ? m:0;
    	index = getIndex(sliderBtns,this) || m;
    	m++;
    	sliderBtns.removeClass('btn-active');
    	$(sliderBtns[index]).addClass('btn-active');
    	sliderPics.fadeOut();
    	$(sliderPics[index]).fadeIn(1000);
    }
	sliderBtns.bind('click',changePic);
	window.setInterval(changePic,3000);
    //jobs-list的鼠标移动button效果
    var jobsLists = $('.jobs-list li');
    var btns = $('.btn-apply');
	jobsLists.bind('mouseover',function(){
		index = getIndex(jobsLists,this);
        $(btns[index]).addClass('btn-deep');
	})
	jobsLists.bind('mouseleave',function(){
		index = getIndex(jobsLists,this);
        $(btns[index]).removeClass('btn-deep');
	})
    //尾部幻灯片效果
	var sayingBtns = $(".saying-btn div");
	var items = $(".item");
	function getSaying(){
		index = getIndex(sayingBtns,this);
		items.fadeOut();
		$(items[index]).fadeIn(1000);
		sayingBtns.removeClass('btn-clicked');
		$(sayingBtns[index]).addClass('btn-clicked');
	}
	sayingBtns.bind("click",getSaying);
   //中间切换效果
    var menuBtns = $(".people-menu a");
    var lists = $('.list ul');
	function getList(){
		index = getIndex(menuBtns,this);
		$(lists[index]).fadeIn(1000).siblings().fadeOut();
		menuBtns.removeClass('menu-active');
		$(menuBtns[index]).addClass('menu-active');
	}
	menuBtns.bind('click',getList);
    //moreJobs选项后增加数据（未实现）
    var jobItems = $('.job-lists li');
	var moreList = $(jobItems[1]).clone();
	console.log(moreList);
	function addList(){
		if($("#btn-more").text() == "View more jobs"){
			$('.job-lists').append(moreList);
		    $("#btn-more").text('View less jobs');
		}else{
			jobItems.splice(1,1);
		    $("#btn-more").text('View more jobs');
		}
		
	}
	$("#btn-more").bind('click',addList);

	//点击目录进行切换
	var barMenus = $(".bar-menu a");
	var endHeight;
	var objHeight = [];
	objHeight[0] = $('.header').offset().top;
	objHeight[1] = $('.content-search').offset().top;
	objHeight[2] = $('.content-people').offset().top;
	objHeight[3] = $('.content-jobs').offset().top;
	objHeight[4] = $('.content-sayings').offset().top;
	objHeight[5] = $('.footer').offset().top;
	function getContent(event){
		index = getIndex(barMenus,this);
        endHeight = objHeight[index];
        $("html,body").stop().animate({
        	scrollTop:endHeight
        },1500,'easeInOutExpo');
        event.preventDefault();
	}
    barMenus.bind('click',getContent);
})