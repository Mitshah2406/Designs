let closeIcon = document.getElementById('closeIcon');
let alertContainer = document.getElementById('alert-container');
let btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
    alertContainer.classList.toggle('flex');
})
setTimeout(() => {
    alertContainer.classList.remove('flex');
    
}, 5000);
closeIcon.addEventListener('click', () => {
    alertContainer.classList.add('closeAnimation');
})
