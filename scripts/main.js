const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu__visible")
});

const navLinks = document.querySelectorAll(".nav__menu__link");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("nav__menu__visible");
    });
});
