<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
<link  href="css/Untitled-2.css" type="text/css" rel="stylesheet"/> 
<script type="text/javascript" src="myFocus+Demo+v2.0.1/js/myfocus-2.0.1.min.js"></script>
<script type="text/javascript" src="myFocus+Demo+v2.0.1/js/mf-pattern/mF_quwan.js" charset="utf-8"></script>
<link href="myFocus+Demo+v2.0.1/js/mf-pattern/mF_quwan.css" rel="stylesheet"/>
<script>
myFocus.set({
	 id:'boxID',//焦点图盒子ID
    pattern:'mF_quwan',//风格应用的名称
    time:3,//切换时间间隔(秒)
    trigger:'click',//触发切换模式:'click'(点击)/'mouseover'(悬停)
    width:1000,//设置图片区域宽度(像素)
    height:310,//设置图片区域高度(像素)
    txtHeight:'default'//文字层高度设置(像素),'default'为默认高度，0为藏
});
</script>
</head>

<body>

  <div class="header_top">
     <div class="header_top_containt">
        <ul>
           <li><a href="#">联系我们</a></li>
           <li><a href="#">加入收藏</a></li>
           <li><a href="#">设为首页</a></li>
        </ul>
     </div>
   </div><!--hed-top结束-->



   <div class="wrap">
       <div class="logo">
          <div class="logo_left">
             <img src="pictures/logo.jpg" />
          </div>
          <div class="logo_right">
             <img src="pictures/tel.jpg" />24小时服务热线：<span>012-345-6789</span>
          </div>
       </div><!--logo结束-->
       
       <div class="nav">
           <div class="nav_left">
           </div>
           <div class="nav_mid">
              <div class="nav_mid_left">
                 <ul>
                    <li><a href="#">首页</a></li>
                    <li><a href="#">关于慕课</a></li>
                    <li><a href="#">新闻动态</a></li>
                    <li><a href="#">课程中心</a></li>
                    <li><a href="#">在线课程</a></li>
                    <li><a href="#">人才招聘</a></li>
                 </ul>
              </div>
              <div class="nav_mid_right">
                 <form action="" method="post">
                    <input type="text" class="search_text" />
                 </form>
              </div>
           </div>
           <div class="nav_right">
           </div>
       </div><!--nav结束-->
       
   </div><!--wrap结束-->
   <div class="ad">
     <div id="boxID">
      <div class="pic">
         <ul>
            <li><a href="#"><img src="pictures/ad.jpg" thumb="" alt="" text="详细描述"/></a></li>
            <li><a href="#"><img src="pictures/ad2.jpg" thumb="" alt="" text="详细描述2"/></a></li>
            <li><a href="#"><img src="pictures/ad3.jpg" thumb="" alt="" text="详细描述3"/></a></li>
            <li><a href="#"><img src="pictures/ad4.jpg" thumb="" alt="" text="详细描述4"/></a></li>
         </ul>
      </div>
     </div><!--boxID结束-->
   </div><!--ad结束-->
   <div class="main">
      <div class="news">
         <div class="title">
            <h2 class="title_left">新闻中心</h2>
            <span class="title_right"><a href="#">More&gt;&gt;<a></span>
         </div>
         <div class="news_pic">
            <img src="pictures/news.jpg" alt="520 慕女神喊你来表白" width="113" height="77" />
        <h2><a href="news.html">520 慕女神喊你来表白！</a></h2>
        <p>活动时间：5月20日—5月25日<br />
          获奖公布时间：5月26日<br />
          <a href="news.html">Learn More&gt;&gt;</a></p>
          </div>
         <div class="news_list">
            <ul>
              <li><span>2014-06-01</span> <a href="news.html">【慕客访谈 用户篇】“有为屌丝”在路上</a></li>
              <li><span>2014-06-01</span><a href="news.html">【有奖活动】给父亲的三行书信</a></li>
              <li><span>2014-05-30</span><a href="news.html">《程序猿，请晒出你的童年》活动获奖公告</a></li>
              <li><span>2014-05-28</span><a href="news.html" title="aa">【慕课访谈】破茧成蝶——美女程序员的蜕变史</a></li>
            </ul>
         </div>
      </div><!--news结束-->
      <div class="course">
         <div class="title">
             <h2 class="title_left">课程中心</h2><span class="title_right"><a href="#">More&gt;&gt;</a></span>
         </div>
         <div class="course_pic">
             <img src="pictures/css.jpg" alt="CSS圆角进化论" width="158" height="106" />
             <h2><a href="news.html">CSS圆角进化论</a></h2>
             <p> CSS圆角的实现，经历了三大发展阶段：背景图片方式、CSS2.0+HTML标签模拟、CSS3.0圆角属性）。本案例详细讲解每一种的实现方式，并对实现的优缺点进行对比分析。</p>
          </div>
        <div class="course_list">
           <ul>
              <li>PHP开发</li>
              <li>前端开发</li>
              <li>JAVA开发</li>
              <li>Android开发</li>
           </ul>
        </div>
      </div><!--course结束-->
      <div class="media">
          <div class="title">
             <h2 class="title_left">媒体聚焦</h2><span class="title_right"><a href="#">More&gt;&gt;</a></span>
         </div>
         <p class="video_content">
          <embed src="http://player.youku.com/player.php/sid/XNjkzMDE5MTUy/v.swf" allowFullScreen="true" quality="high" width="220" height="140" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>
        </p>
        <div class="survice">
            <img src="pictures/app.jpg" />
        </div>
      </div><!--media结束-->
   </div><!--main结束-->
   
   <div class="footer">
       <div class="footer_content">
           <ul>
              <li><a href="#">关于</a>
                  <ul>
                    <li><a href="#">品牌故事</a></li>
                    <li><a href="#">联系我们</a></li>
                    <li><a href="#">加入我们</a></li>
                    <li><a href="#">版权声明</a></li>
                  </ul>
              </li>
              <li><a href="#">课程</a>
                  <ul>
                    <li><a href="#">PHP开发</a></li>
                    <li><a href="#">前端开发</a></li>
                    <li><a href="#">JAVA开发</a></li>
                    <li><a href="#">Android开发</a></li>
                  </ul>
              </li>
              <li><a href="#">关注</a>
                   <ul>
                    <li><a href="#">新浪微博</a></li>
                    <li><a href="#">腾讯微博</a></li>
                    <li><a href="#">企业微信</a></li>
                    <li><a href="#">QQ空间</a></li>
                  </ul>
              </li>
              <li><a href="#">留言</a>
                    <ul>
                      <li><a href="#">意见反馈</a></li>
                      <li><a href="#">问题留言</a></li>
                      <li><a href="#">媒体联络</a></li>
                      <li><a href="#">在线客服</a></li>
                    </ul>
              </li>
              <li><img src="pictures/weixin.png" /><a href="#">微信关注</a>
                   <ul>
                       <li><img alt="扫码关注微信账号" src="pictures/qrcode.jpg" height="102" width="102"/></li>
                   </ul>
              </li>
           </ul>
       </div>
   </div>
</body>
</html>
