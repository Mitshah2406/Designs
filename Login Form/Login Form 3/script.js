let check = document.querySelector('#check');
let front = document.querySelector('.front');
let back = document.querySelector('.back');

console.log(front,back,check)
check.addEventListener('click', ()=>{
    console.log(check.checked)
    if(check.checked === true) {
        console.log('hi')
        front.classList.toggle('front-checked')
        back.classList.toggle('back-checked')
    }
    else{
        front.classList.remove('front-checked')
        back.classList.remove('back-checked')
    }
})