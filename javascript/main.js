const boton_menu = document.querySelector(".nav-toggle")
const navbarMenu = document.querySelector(".nav-menu")
const header = document.querySelector("header")
const form = document.querySelector("#form")



boton_menu.addEventListener("click", () =>{
    navbarMenu.classList.toggle("nav-menu_visible")
})



window.addEventListener("scroll", () => {
   /*  console.log(window.scrollY) */

    if (window.scrollY >= 400){
        header.classList.add("header-active")
    }
    else{
        header.classList.remove("header-active")
    }
})





form.addEventListener("submit", contactPopUp)

function contactPopUp(e){
   /*  e.preventDefault() */
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-right',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'success',
            title: 'Mensaje enviado con exito!'
          })
    }




