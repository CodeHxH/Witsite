window.addEventListener('load', function () {
	new Glider(document.querySelector('.glider'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		rewind: true,
		dragVelocity: 1.5,
		arrows: {
			prev: '.carousel__back',
			next: '.carousel__next',
		},
	});
});
