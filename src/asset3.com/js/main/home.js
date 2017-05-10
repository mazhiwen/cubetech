define(function(require) {
	require('commonMain')();


	/*计算滚动头像相关宽度*/
	var  scroll_head_oo_width_cal=Math.floor($("#scroll_head").width())-40-80;
	var scroll_head_div_width=Math.floor(scroll_head_oo_width_cal/3);
	/*滚动头像框宽度*/
	//$("#scroll_head_outer>div").css("width",scroll_head_div_width-100);
	/*滚动头像的外外层设置宽度*/
	$("#scroll_head_oo").css("width",scroll_head_div_width*3);

	
	
	new SCROLLIMG(8);

	
	
	

	
	

});

