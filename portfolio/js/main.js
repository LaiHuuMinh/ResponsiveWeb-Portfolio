
const menu = document.querySelector(".navbar_links");
const menuButton = document.querySelector(".navbar_icons");
const overlay = document.querySelector('#overlay');

menuButton.addEventListener('click',()=>{
    menu.classList.toggle('navbar_open');
    menuButton.classList.toggle('open'); 
    overlay.classList.toggle('show');   
})

overlay.addEventListener('click',()=>{
    menu.classList.toggle('navbar_open');
    menuButton.classList.toggle('open'); 
    overlay.classList.toggle('show');
})