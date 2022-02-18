let links = document.querySelector("nav .content .links");
let nav_content = document.querySelector("nav .content");

nav_content.onclick = function () {
  links.classList.toggle("show");
};
