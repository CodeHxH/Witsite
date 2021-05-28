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

// Cerrando ventanas de alerta
function closeAlert() {
	const closeAlert = document.querySelector('.alert');
	closeAlert.classList.toggle('close');
}

// Abrir/Cerrar el menú desplegable
function toggleMenu(animation) {
	const menu = document.querySelector('.menu');
	if (animation == true) {
		menu.classList.remove('animate__slideOutLeft');
		menu.classList.add('animate__slideInLeft');
		menu.classList.add('open');
	} else {
		menu.classList.remove('animate__slideInLeft');
		menu.classList.add('animate__slideOutLeft');
	}
}

// ScrollReveal().reveal('.header', { delay: 500 });
// ScrollReveal().reveal('.carousel', { delay: 500 });
// ScrollReveal().reveal('.about', { delay: 250 });
// ScrollReveal().reveal('.contact', { delay: 500 });
// ScrollReveal().reveal('.contact__section', { delay: 500 });
