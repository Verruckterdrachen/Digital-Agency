//================================================================================
import Swiper, { Autoplay, Pagination, Navigation } from 'swiper';

window.addEventListener("load", function (e) {
	initSliders();
});

function initSliders() {
	if (document.querySelector('.slider-section')) {
		const sectionSlider = new Swiper('.slider-section', {
			modules: [Autoplay, Pagination, Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.slider-section__pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.slider-section__arrow .swiper-button-next',
				prevEl: '.slider-section__arrow .swiper-button-prev',
			},
			// breakpoints: {
			// 	320: {
			// 	},
			// 	768: {
			// 	},
			// 	992: {
			// 	},
			// 	1268: {
			// 	},
			// },
		});
	}
}
//================================================================================