const boton_menu = document.querySelector(".nav-toggle")
const navbarMenu = document.querySelector(".nav-menu")

boton_menu.addEventListener("click", () =>{
    navbarMenu.classList.toggle("nav-menu_visible")
})