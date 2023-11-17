const Menu = document.querySelector('.menu_tombol input');
const nav = document.querySelector('nav ul');
Menu.addEventListener('click', function() {
	nav.classList.toggle('slide');
});