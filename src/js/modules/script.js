//================================================================================
const searchToggle = document.querySelector('.header__icon');
const search = document.querySelector('.header__search');
searchToggle.addEventListener('click', () => {
	search.classList.toggle('active');
});

const toggle = document.querySelector('input[type="checkbox"].toggle');
toggle.addEventListener('click', (e) => {
	const el = e.target;
	const prev = el.previousElementSibling;
	const next = el.nextElementSibling;
	if (el.checked) {
		next.classList.add('active');
		prev.classList.remove('active');
	} else {
		prev.classList.add('active');
		next.classList.remove('active');
	}
	const pricesItems = document.querySelectorAll('.item-pricing__price');
	let prices;
	let plan;
	if (el.checked) {
		prices = [25, 50, 75];
		plan = 'Year';
	} else {
		prices = [50, 99, 150];
		plan = 'Month';
	}
	pricesItems.forEach((pricesItem, index) => {
		pricesItem.innerHTML = `$${prices[index]}<span>/${plan}</span>`;
	});
});
//================================================================================