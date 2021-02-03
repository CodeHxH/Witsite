const btn = document.querySelector(".menu--btn");
const navLinks = document.querySelector(".nav-menu");
const links = document.querySelectorAll(".nav-links li");


//NAVBAR RESPONSIVE
btn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});