const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");

menuIcon.addEventListener("click", () => {
    mobileMenu.style.display = "flex";
});

closeMenu.addEventListener("click", () => {
    mobileMenu.style.display = "none";
});
