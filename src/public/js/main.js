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

// ScrollReveal().reveal('.header', { delay: 500 });
// ScrollReveal().reveal('.carousel', { delay: 500 });
// ScrollReveal().reveal('.about', { delay: 250 });
// ScrollReveal().reveal('.contact', { delay: 500 });
// ScrollReveal().reveal('.contact__section', { delay: 500 });
