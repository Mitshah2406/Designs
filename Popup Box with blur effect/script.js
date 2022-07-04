let popupBox = document.querySelector('.popup-wrapper');
let icon = document.querySelector('.fa');
window.onload = ()=>{
    popupBox.classList.add('show');
}
icon.onclick = ()=>{
    popupBox.style.display = 'none';
}