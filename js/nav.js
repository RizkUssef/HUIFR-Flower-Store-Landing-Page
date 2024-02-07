let show_btn = document.getElementById("show_btn");
let close_btn = document.getElementById("close_btn");
let nav_links = document.getElementById("nav-links");
let activePage = window.location.pathname;

show_btn.addEventListener("click", function () {
  if (nav_links.classList.contains("hide")) {
    nav_links.classList.replace("hide", "show");
    close_btn.src = "../imgs/icons/times-hexagon 1.svg";
  } else if (nav_links.classList.contains("show")) {
    nav_links.classList.replace("show", "hide");
    close_btn.src = "../imgs/icons/bars-sort 1.svg";
  }
});

let allNavLinks = document.querySelectorAll(".list li a, .reg_log li a");
allNavLinks.forEach(function (link) {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});
