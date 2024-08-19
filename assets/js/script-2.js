const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 100) {
    navbar.classList.add("bg-transparent", "nav-color");
  } else if (this.window.scrollY <= 0) {
    navbar.classList.remove("nav-color", "bg-transparent");
  }
});