define(function(require) {
	require('commonMain')();
	
	jQuery('.rotatecircledot>div').hover(function(){
		$(this).addClass('rotatecircledotanimate');
	},function(){
		$(this).removeClass('rotatecircledotanimate');
	});

});

