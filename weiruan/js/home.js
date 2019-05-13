$('.menu').click(function(){
	if($('.menu_list').css('display') == 'block'){
		$('.menu_icon').css({'background':'url(images/menu.png) no-repeat center center','background-size':'15px 15px'});
		$('.menu_list').css('display','none')
	}else{
		$('.menu_icon').css({'background':'url(images/defeat.png) no-repeat center center','background-size':'15px 15px'});
		$('.menu_list').css('display','block')
	}
})
$('.menu_list li').click(function(){
	if($(this).hasClass('active')){
		$(this).removeClass('active')
	}else{
		$(this).addClass('active')
	}
	
})




