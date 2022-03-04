//================================================================================
const parallax = document.querySelector('[data-prlx-parent]');
const parallaxItems = document.querySelectorAll('[data-prlx]');

parallaxItems.forEach(parallaxItem => {
	if (parallaxItem.dataset.prlxRotate) {
		const angle = parallaxItem.dataset.prlxRotate;
		parallaxItem.style = `transform: rotate(${angle}deg)`;
	}
});

parallax.addEventListener('mousemove', (e) => {
	parallaxItems.forEach(parallaxItem => {
		const speed = parallaxItem.dataset.prlx;
		const x = (window.innerWidth - e.pageX * speed) / 50;
		const y = (window.innerHeight - e.pageY * speed) / 50;
		if (parallaxItem.dataset.prlxRotate) {
			const angle = parallaxItem.dataset.prlxRotate;
			parallaxItem.style = `transform: translate(${x}px,${y}px) rotate(${angle}deg)`;
		} else {
			parallaxItem.style = `transform: translate(${x}px,${y}px)`;
		}
	});
});

//================================================================================