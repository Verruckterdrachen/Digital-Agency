//================================================================================
import Swiper, { Autoplay, Pagination, Navigation } from 'swiper';

window.addEventListener("load", function (e) {
	initSliders();
});

function initSliders() {
	if (document.querySelector('.slider-services')) {
		const servicesSlider = new Swiper('.slider-services', {
			modules: [Autoplay, Navigation],
			observer: true,
			observeParents: true,
			spaceBetween: 36,
			autoHeight: true,
			speed: 800,
			loop: true,
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },
			navigation: {
				nextEl: '.slider-services__arrow.swiper-button-next',
				prevEl: '.slider-services__arrow.swiper-button-prev',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				}
			},
		});
	}
}
//================================================================================