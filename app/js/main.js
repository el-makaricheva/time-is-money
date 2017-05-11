var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 0
});

$(function() {

	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 0) {
			$('#header').addClass('compact');
		} else {
			$('#header').removeClass('compact');
		}
	});

	$('nav').on('click', 'a', function(event) {
		event.preventDefault();

		var id = $(this).attr('href'),
			offset = $('nav').height(),
			top = $(id).offset().top - offset;

		$('html, body').animate({
			scrollTop: top
		}, 700);
		
		if ($('.menu-mobile-control').is(':visible')) {
			$('.nav > .drop').slideUp(200, function(){
				$('.menu-mobile-control').removeClass('active');
			});
		}

	});

	$('.menu-mobile-control').on('click', function() {
    	var self = this,
    		drop = $(this).parent().find('>.drop');
    	if ( $(this).hasClass('active') ) {
    		drop.slideUp(400, function(){
    			$(self).removeClass('active');
    		});
    	} else {
    		drop.slideDown(400, function() {
    			$(self).addClass('active');
    		});
    	}
    });

    $('.account button').on('mouseenter', function() {
    	$(this).css({'background-color': '#49cbcd'});
    	$(this).parents('.account').find('.account-type').css({'background-color': '#49cbcd'});
    }).on('mouseleave', function() {
    	console.log($(this).parents('.account').find('.account-type'));
    	$(this).css({'background-color': '#788492'});
    	$(this).parents('.account').find('.account-type').css({'background-color': '#485460'});
    });

})