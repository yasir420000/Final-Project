(function($){
	'use strict';

// Oobile Menu
// Oobile Menu
$('.bars i').on('click', function(){
	$('.mobile-menu').animate({
		left: 0
	});
	$('.menu-close i').on('click',function(){
		$('.mobile-menu').animate({
			left:-203
		});
	});
});



}) (jQuery);