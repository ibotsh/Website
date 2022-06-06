// scroll to top function
const scrollUp = document.querySelector("#scroll-up");
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Nav hamburger
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
   ul.classList.toggle("show");
 });
 // Close hamburger when link is clicked

 //nav links
 const navLink = document.querySelectorAll(".nav-link");

 navLink.forEach((link) =>
   link.addEventListener("click", () => {
     ul.classList.remove("show");
   })
 );

//dark mode
function darkMode() {
        var element = document.body;
        element.classList.toggle("dark-mode");
      }
