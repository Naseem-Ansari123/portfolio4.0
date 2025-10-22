let navbarMenu = document.getElementById("navbar-menu")
let navbarToggle = document.querySelector(".navbar-toggle")

navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle("active");
    navbarMenu.classList.toggle("active");
});

