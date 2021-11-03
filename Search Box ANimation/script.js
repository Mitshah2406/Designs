let searchContainer = document.querySelector('.search-container')
let btn = document.querySelector('.btn')
let search = document.querySelector('#search')
btn.addEventListener('click', () => {
    searchContainer.classList.toggle('active')
    search.focus();
    console.log('search')
})