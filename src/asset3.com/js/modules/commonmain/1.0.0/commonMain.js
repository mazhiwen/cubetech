define(function(require,exports,module) {
	module.exports=commonMain;
	function commonMain(){

		var 
		nav_active=$(".nav_active");
		//require('jquery');
		require('zepto');
		//$=jQuery;
		$=Zepto;
		//require('jqueryMobile');
		AJAXMY=new(require('ajaxMy'));
		popUpWindow=new(require('popUpWindow'));


		//$(".banner").prepend('<div class="banner_top"><a href="home.html"><img src="images/logo.png"></a><div class="nav_box"><ul class="nav"><li><a href="home.html">首页</a></li><li><a href="http://www.e-quanta.com">立方社区</a></li><li><a href="dynamic.html">立方动态</a></li><li><a href="thinktank.html">立方智库</a></li><li><a href="product.html">立方产品</a></li><li><a href="aboutus.html">关于我们</a></li><li><a href="http://www.gaa100.org/">百人会</a></li></ul><button class="awesome_icon nav_active"></button></div></div>');
		$(".top").prepend('<div class="bannertop"><a href="home.html"></a><div class="navbox"><ul class="nav"><li class="navboxwidthbalancea"><a href="home.html">首页</a></li><li class="navboxwidthbalanceb"><a href="javascript:void(0);">立方业务</a></li><li><a href="javascript:void(0);">立方智库</a></li><li><a href="#">立方智库</a></li><li><a href="#">立方智库</a></li><li><a href="javascript:void(0);">关于我们</a></li></ul></div></div>');

		$(".footer_box").append('<div><div><div><h3>北京</h3><p class="wechat_phone">电话：+86 10 858 724 39</p><p>地址：朝阳区曙光西里甲5 号院凤凰置地广场A 座写字楼26 层2602 室</p></div><div><h3>纽约</h3><p>电话：+1 （646） 452 7089</p><p>地址：纽约市曼哈顿美国大道1177 号五层10036</p></div><div><h3>上海</h3><p>电话：+86 21 610 103 06</p><p>地址：上海浦东新区花园石桥路33 号花旗集团大厦23 楼</p></div></div><div><span>邮件：info@asset3.com(咨询)</span><span>hr@asset3.com(招聘)</span><span>2015资立方@copyright</span><a href="http://www.miit.gov.cn/" class="to_beian">京ICP备15064570号</a><span>客服电话：400 875 9002</span></div></div><div><img src="./images/home/qrcode.jpg"></div>');
		var showNavFlag=false;

		/*$('body').on('click','.nav_active',function(){
			if(showNavFlag){
				$(".nav_box").addClass('color_transparent');
				$(".nav_box").removeClass('color_white navbox_width');
				$(".nav").hide();
				showNavFlag=false;
			}else{
				$(".nav_box").removeClass('color_transparent ');
				$(".nav_box").addClass('color_white navbox_width');
				$(".nav").show();
				showNavFlag=true;
			}
		});*/

		$(".nav>li").on('mouseenter',function(){
			$(this).children('ul').show(300);	
		});
		$(".nav>li").on('mouseleave',function(){
			$(this).children('ul').hide();	
		});

		$(".top").swipeLeft(function(){
			
		});
		$(".top").swipeRight(function(){
		});




		$(window).scroll(function(){
			var cliWid=document.body.clientWidth;
			var scrTop=$(window).scrollTop();
			if (scrTop>610){
				if(cliWid>600){
					$(".navbox").removeClass('color_transparent ');
					$(".navbox").addClass('color_white navbox_width');
					$(".nav").show();
					showNavFlag=true;
				}else{
					$(".navbox").addClass('color_transparent');
					$(".navbox").removeClass('color_white navbox_width');
					$(".nav").hide();
					showNavFlag=false;
				}
			}	
		});

		



	}
	



	
});

