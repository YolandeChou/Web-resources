// JavaScript Document
var data=[
	  {image:1,h2:"Your dream is big enough",h3:"你的梦想够大吗"},
	  {image:2,h2:"Dream&Success",h3:"寻找梦想并愿付出努力的人"},
	  {image:3,h2:"一线团队的专业能力",h3:"是客户落地的根本保障"},
	  {image:4,h2:"真诚沟通 互动双赢",h3:"您的满意是我们存在的价值"},
]
//2.通用函数
var g=function(id){
	if(id.substr(0,1)==".")
	return document.getElementsByClassName(id.substr(1));
	else
	  return document.getElementById(id);
}

//3.增加幻灯片和按钮
var addSliders=function(){
       //3.1 获取模板
	  var main_template=g("template_main").innerHTML.replace(/^\s*/g,'')
	                                                .replace(/\s*$/g,'');
	  var ctrl_template=g("template_ctrl").innerHTML.replace(/^\s*/g,'')
	                                                .replace(/\s*$/g,'');
	  
	  //3.2定义最终输出HTML
	  var out_main=[];
	  var out_ctrl=[];
	  
	  //3.3遍历所有数据，构建最终输出的HTML
	  for(var i=0;i<data.length;i++){
		  var _html_main=main_template.replace(/{{index}}/g,data[i].image)
								  .replace(/{{h2}}/g,data[i].h2)
								  .replace(/{{h3}}/g,data[i].h3);
		  var _html_ctrl=ctrl_template.replace(/{{index}}/g,data[i].image);
		  out_main.push(_html_main);
		  out_ctrl.push(_html_ctrl);
		  
}
//3.4把HTML回写到对应DOM中
	  g("template_main").innerHTML=out_main.join('');
	  g("template_ctrl").innerHTML=out_ctrl.join('');
}
//4 幻灯片切换
//4.1给讲要展示的幻灯片和按钮的DOM
function switchSlider(n){
	var main=g("main_"+n);
	var ctrl=g("ctrl_"+n);
	//4.2获得所有幻灯片
	var main_all=g(".main-i");
	var ctrl_all=g(".ctrl-i");
	//4.3清除他们的样式
	for(var i=0;i<main_all.length;i++){
		main_all[i].className=main_all[i].className.replace(" main-i_active",'');
		ctrl_all[i].className=ctrl_all[i].className.replace(" ctrl-i_active",'');
	}
	main.className+=" main-i_active";
	ctrl.className+=" ctrl-i_active";
}
//5定义何时处理幻灯片输出
window.onload=function(){
	addSliders();
	switchSlider(1);
}
