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
			top = $(id).offset().top;

		$('body').animate({
			scrollTop: top
		}, 700)
	});
})
