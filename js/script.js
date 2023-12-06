// Menu Burger
const Menu = document.querySelector('.menu_tombol input');
const nav = document.querySelector('nav ul');
Menu.addEventListener('click', function() {
	nav.classList.toggle('slide');
});

// slide image
let slideIndex = 0;

    function showSlides() {
        let slides = document.getElementsByClassName("mySlides");
        
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 5000); // Change slide every 3000 milliseconds (3 seconds)
    }

    showSlides();