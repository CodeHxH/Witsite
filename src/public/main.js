//NAVBAR RESPONSIVE
const btn = document.querySelector(".menu--btn");
const navLinks = document.querySelector(".nav--menu");
const links = document.querySelectorAll(".nav-links li");

btn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

//SCROLL REVEAL
ScrollReveal().reveal('.header--container', { delay: 100 });
ScrollReveal().reveal('.article--web', { delay: 100 });
ScrollReveal().reveal('.article--branding', { delay: 100 });
ScrollReveal().reveal('.form--container', { delay: 100 });
ScrollReveal().reveal('.footer', { delay: 100 });
ScrollReveal().reveal('.info--container', { delay: 100 });
ScrollReveal().reveal('.slider--container', { delay: 100 });
ScrollReveal().reveal('.reveal', { delay: 100 });

//SLIDER AUTO
var counter = 1;
setInterval(function(){
  document.getElementById("radio" + counter).checked = true;
  counter++;

  if (counter > 4){
    counter = 1;
  };
},5000);
