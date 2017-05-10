define(function(require) {
	require('commonMain')();
	var parseString=new(require('parseString')),
		getarticletype=parseString.getGet('articletype'),
		articletype='watched';
	if(getarticletype){
		articletype=getarticletype;
	}	
	AJAXMY.send('/article/list',{category_code:articletype,page:1,size:30},function(data){
		var dr=data['result'],
			articleHtml='';
		$.each(dr,function(key,value){
			articleHtml+='<div class="article_box"><img src="'+value['coverPic']+'"><div class="article_text_box"><span class="article_type">立方观察</span><a href="article_details.html?id='+value['id']+'" class="article_title">'+value['title']+'</a><p class="article_desc">'+value['summary']+'</p><p><span>'+value['authorName']+'</span><span class="article_time">'+parseString.MSToYMDHMS(value['postTime'])+'</span></p></div></div>';

		});
		$(".maincontentwrap").append(articleHtml);
	});
	



});

