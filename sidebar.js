//SIDE NAV

const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function(){
    sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar");
});

// CHANGE PAGE

const btnOriginNav = document.querySelector(".originNav")

btnOriginNav.addEventListener("click", function(){
    window.open("./index.html", "_self");
});