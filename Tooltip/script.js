let instaBtn = document.getElementById('instaBtn');
let fbBtn = document.getElementById('fbBtn')
let twitterBtn = document.getElementById('twitterBtn');
let githubBtn = document.getElementById('githubBtn');
let ytBtn = document.getElementById('ytBtn');
let fab = document.getElementsByClassName('fab');
instaBtn.addEventListener('mouseover',()=>{
    instaBtn.classList.toggle('instaBtn')
    fab.forEach(function(){
        fab[0].classList.toggle('white')
    })
})