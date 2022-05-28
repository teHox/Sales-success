const burgerBtn = document.querySelector(".burger-btn");
const headerMenu = document.querySelector(".header__menu");

burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("burger-btn_active");
    headerMenu.classList.toggle("header__menu_active");
});