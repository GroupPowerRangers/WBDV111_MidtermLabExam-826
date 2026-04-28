const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.innerHTML = "☰";

toggle.onclick = () => {
  navLinks.classList.toggle("active");
};
