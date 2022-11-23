let burgerMenuContainer = document.querySelector(".burger-menu__container");
let burgerMenu = document.querySelector(".burger-menu");
let burgerMenuClose = document.querySelector(".burger-menu-close");
let nav = document.querySelector("nav");

burgerMenuContainer.addEventListener("click", function(){
    if(burgerMenu.style.display === "none"){
        nav.style.display = "none";
        burgerMenu.style.display = "block";
        burgerMenuClose.style.display = "none";
    } else{
        nav.style.display = "block";
        burgerMenu.style.display ="none";
        burgerMenuClose.style.display = "block";
    }
})


