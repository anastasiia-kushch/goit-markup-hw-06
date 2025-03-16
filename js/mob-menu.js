const openButton = document.getElementById('open-mob-menu');
const mobileMenu = document.getElementById('mobile-menu');

openButton.addEventListener("click", () => {
    mobileMenu.classList.add('menu-open')
})