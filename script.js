const toggler = document.querySelector('.header .navbar .nav .toggler');
const mobile_menu = document.querySelector('.header .navbar .nav ul');
const menu_item = document.querySelectorAll('.header .navbar .nav ul li a');
const header = document.querySelector('.header.container');

toggler.addEventListener('click', () => {
	toggler.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#303030';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		toggler.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
