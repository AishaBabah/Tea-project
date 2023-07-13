const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");

const navCart = document.getElementById("nav-cart");
const cartOverlay = document.getElementById("cart-overlay");
const cartClose = document.getElementById("cart-close");


navBtn.addEventListener("click", () => {
    navbar.classList.add("showNav");

});

navClose.addEventListener("click", () => {
    navbar.classList.remove("showNav");

});

navCart.addEventListener("click", () => {
    cartOverlay.classList.add("show");
    console.log('click me');
});

cartClose.addEventListener("click", () => {
    cartOverlay.classList.remove("show");

});