define(function(require, exports, module) {
	module.exports=scrollImg;
  	function scrollImg(length){
  		console.log(length);
  		//左右滚动图
		$(".scroll_left").click(function(){
			$(".scroll_head_oo>div").each(function(key,value){
				var nowClass=$(this).attr('class');
				var nowIndex=parseInt(nowClass.substr(8));
				var nextIndex=null;
				if(nowIndex==length)
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
					nextIndex=length;
				else
					nextIndex=--nowIndex;
				$(this).removeClass(nowClass).addClass('scroll_p'+nextIndex);

			});
		});

  	}

  	
});

