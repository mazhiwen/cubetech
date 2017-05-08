define(function(require) {
	require('commonMain')();

	jQuery('.section2c>div').hover(function(){
		$(this).addClass('section2cboxhover');
	},function(){
		$(this).removeClass('section2cboxhover');
	});

	var nowBlock='aboutcubetech';
	var toShowBlock='';
	$('body').on('click','.secondnav>a',function(){
		toShowBlock=$(this).attr("data-showblockclass");
		$("."+nowBlock).removeClass('blockshow').addClass("blockhide");
		$("."+toShowBlock).removeClass('blockhide').addClass("blockshow");
		nowBlock=toShowBlock;
	});
	


	var nowjob='jobbox1';
	var toShowjob='';
	$('body').on('click','.jobtitlewrap>li',function(){
		toShowjob=$(this).attr("data-showjobclass");
		$("."+nowjob).removeClass('blockshow').addClass("blockhide");
		$("."+toShowjob).removeClass('blockhide').addClass("blockshow");
		nowjob=toShowjob;
	});
});

