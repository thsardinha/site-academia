let menu = document.querySelector('#menu-btn')
let navbar = document.querySelector('.header .navbar')

menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

window.onscroll = () =>{
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}

/* Slides */

var swiper = new Swiper(".swiper.home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
})