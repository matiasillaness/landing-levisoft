const boton_menu = document.querySelector(".nav-toggle")
const navbarMenu = document.querySelector(".nav-menu")
const header = document.querySelector("header")


boton_menu.addEventListener("click", () =>{
    navbarMenu.classList.toggle("nav-menu_visible")
})




window.addEventListener("scroll", () => {
    console.log(window.scrollY)

    if (window.scrollY >= 400){
        header.classList.add("header-active")
    }
    else{
        header.classList.remove("header-active")
    }
})



console.log(nav)