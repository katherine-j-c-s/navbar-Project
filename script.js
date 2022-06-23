//NAV ORIGINAL
const socialLinks = document.querySelector(".social-icons")
const links = document.querySelector(".links");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", function(){
    links.classList.toggle("show-links");
    socialLinks.classList.toggle("show-links");
});

//CHANGE PAGE

const btnSideNav = document.querySelector(".sideNav")

btnSideNav.addEventListener("click", function(){
    window.open("./sideNav.html", "_self");
});