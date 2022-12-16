const boton_menu = document.querySelector(".nav-toggle")
const navbarMenu = document.querySelector(".nav-menu")

boton_menu.addEventListener("click", () =>{
    navbarMenu.classList.toggle("nav-menu_visible")
})


/* const slider = document.querySelector("#slider")
let sliderSection = document.querySelectorAll(".slider_section")
let sliderSectionLast = sliderSection[sliderSection.length -1];

slider.insertAdjacentElement('afterbegin', sliderSectionLast)



function next(){
    let sliderSectionFirst = document.querySelectorAll(".slider_section")[0]
    slider.style.marginleft = "-200%";
    slider.style.transition = "all 1s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst)
        slider.style.marginleft = "-100%";
    }, 1000)
}

setInterval(function(){
    next()
}, 3000)
  */
