define(function(require,exports,module) {
	module.exports=commonMain;
	function commonMain(){

		var 
		nav_active=$(".nav_active");
		require('jquery');
		require('zepto');
		//$=jQuery;
		$=Zepto;
		//require('jqueryMobile');
		AJAXMY=new(require('ajaxMy'));
		popUpWindow=new(require('popUpWindow'));


		//$(".banner").prepend('<div class="banner_top"><a href="home.html"><img src="images/logo.png"></a><div class="nav_box"><ul class="nav"><li><a href="home.html">首页</a></li><li><a href="http://www.e-quanta.com">立方社区</a></li><li><a href="dynamic.html">立方动态</a></li><li><a href="thinktank.html">立方智库</a></li><li><a href="product.html">立方产品</a></li><li><a href="aboutus.html">关于我们</a></li><li><a href="http://www.gaa100.org/">百人会</a></li></ul><button class="awesome_icon nav_active"></button></div></div>');
		$(".top").prepend('<div class="bannertop"><a href="home.html"></a><div class="navbox"><ul class="nav"><li class="navboxwidthbalancea"><a href="home.html">首页</a></li><li class="navboxwidthbalanceb"><a href="service.html">立方业务</a></li><li><a href="partner.html">立方伙伴</a></li><li><a href="dynamic.html">立方动态</a></li><li><a href="thinktank.html">立方智库</a></li><li><a href="aboutus.html">关于我们</a></li></ul></div></div>');

		$(".footer_box").append('<div><div><div><h3>北京</h3><p class="wechat_phone">电话：+86 10 858 724 39</p><p>地址：朝阳区曙光西里甲5 号院凤凰置地广场A 座写字楼26 层2602 室</p></div><div><h3>纽约</h3><p>电话：+1 （646） 452 7089</p><p>地址：纽约市曼哈顿美国大道1177 号五层10036</p></div></div><div><span>邮件：info@asset3.com(咨询)</span><span>hr@asset3.com(招聘)</span><span>2015资立方@copyright</span><a href="http://www.miit.gov.cn/" class="to_beian">京ICP备15064570号</a><span>客服电话：400 875 9002</span></div></div><div><img src="./images/home/qrcode.jpg"></div>');
		var showNavFlag=false;
		$(".secondnavservice").append('<a href="agencyservice.html">机构业务</a><a href="familyservice.html">联合家族办公室</a><a href="crossborder.html">跨境展业服务</a>');
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

		

		//左右滚动图
		$(".scroll_left").click(function(){
			$(".scroll_head_oo>div").each(function(key,value){
				var nowClass=$(this).attr('class');
				var nowIndex=parseInt(nowClass.substr(8));
				var nextIndex=null;
				if(nowIndex==8)
					nextIndex=1;
				else
					nextIndex=++nowIndex;
				$(this).removeClass(nowClass).addClass('scroll_p'+nextIndex);

			});
		});
		$(".scroll_right").click(function(){
			$(".scroll_head_oo>div").each(function(key,value){
				var nowClass=$(this).attr('class');
				//var nowIndex=nowClass[8];
				var nowIndex=nowClass.substr(8);
				var nextIndex=null;
				if(nowIndex==1)
					nextIndex=8;
				else
					nextIndex=--nowIndex;
				$(this).removeClass(nowClass).addClass('scroll_p'+nextIndex);

			});
		});


		$(".section5borderbox").on('mouseenter',function(e){
			$(this).find('.section5bbhover').toggleClass('flipInY');
			$(this).find('.section5bbhover').show();
		});
		$(".section5borderbox").on('mouseleave',function(e){
			$(this).find('.section5bbhover').toggleClass('flipInY');
			$(this).find('.section5bbhover').hide();
		});


		var section3offset=0;
		$(".section3r").on('click',function(){
			section3offset-=25;
			$(".section3ccontent").css("left",section3offset+"%");
		});
		$(".section3l").on('click',function(){
			section3offset+=25;
			$(".section3ccontent").css("left",section3offset+"%");
		});
		jQuery('.s3scrollpart').hover(function(){
			$(this).addClass('secsclbokhoverback');
			$(this).find(".s3scrollpartimg").removeClass('s3scrollpartimgadown').addClass('s3scrollpartimgaup');
			$(this).find(".s3scrollparttext").removeClass('s3scrollparttextadown').addClass('s3scrollparttextaup');
		},function(){
			$(this).removeClass('secsclbokhoverback');
			$(this).find(".s3scrollpartimg").removeClass('s3scrollpartimgaup').addClass('s3scrollpartimgadown');
			$(this).find(".s3scrollparttext").removeClass('s3scrollparttextaup').addClass('s3scrollparttextadown');
		});


		

/*		jQuery('.dynamicblock').hover(function(){
			$(this).addClass('dynamicblockhover');
			
		},function(){
			$(this).removeClass('dynamicblockhover');
			
		});
*/
		$('body').on('mouseenter','.dynamicblock',function(){
			$(this).addClass('dynamicblockhover');
		});
		$('body').on('mouseleave','.dynamicblock',function(){
			$(this).removeClass('dynamicblockhover');
		});

	}
	



	
});

