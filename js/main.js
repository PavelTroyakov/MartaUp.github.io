$(function(){

	$('.header-slider').slick({
		arrows: false,
		vertical: true,
		dots: true,
		dotsClass:'header-dots',
		autoplay: 1000,
	});

	$('.menu-btn').on('click',function(){
		$('.menu__list').slideToggle();
	});

});