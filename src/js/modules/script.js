//================================================================================
const searchToggle = document.querySelector('.header__icon');
const search = document.querySelector('.header__search');
searchToggle.addEventListener('click', () => {
	search.classList.toggle('active');
});
//================================================================================