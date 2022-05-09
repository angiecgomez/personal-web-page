const menuBars = document.querySelector(".menuBars")
const menu = document.querySelector(".menu")

menuBars.addEventListener("click", () =>{
    menu.classList.toggle("menu_visible")
});