const hamburger = document.querySelector(".burger-btn");
const navItems = document.querySelector(".nav-items");


hamburger.addEventListener("click",() => {
    navItems.classList.toggle("active");
})