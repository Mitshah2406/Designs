let navMenu = document.querySelector('#nav-menu');
let closeMenu = document.querySelector('#close-menu');
let toggleMenu = document.querySelector('#toggle-menu');

toggleMenu.addEventListener('click',()=>{
    navMenu.classList.toggle('show');
    console.log('clicked')
})
closeMenu.addEventListener('click',()=>{
    navMenu.classList.remove('show');
    console.log('clicked')
})