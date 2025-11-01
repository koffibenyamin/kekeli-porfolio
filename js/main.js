let menu = document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
const headerEl= document.querySelector('.header');


window.addEventListener('scroll', () => {
    if (window.scrollY > 50){
        headerEl.classList.add('header-scroll');
    }else if(window.scrollY <= 50){
        headerEl.classList.remove('header-scroll');
    }

});

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active')
}