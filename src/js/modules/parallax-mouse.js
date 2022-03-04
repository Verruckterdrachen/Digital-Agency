//================================================================================
const parallaxItems = document.querySelectorAll('[data-prlx]');
document.addEventListener('mousemove', (e) => {
	parallaxItems.forEach(parallaxItem => {
		const speed = parallaxItem.dataset.prlx;
		const x = (window.innerWidth - e.pageX * speed) / 10;
		const y = (window.innerHeight - e.pageY * speed) / 10;
		parallaxItem.style.transform = `translate(${x}px,${y}px)`;
	});
})
//================================================================================