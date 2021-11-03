let indexValue = 1;
showImg(indexValue);
function btn_slide(e) {
    showImg(indexValue = e);
}
function side_slide(e) {
    showImg(indexValue +=e);

}

function showImg(e) {
    var i;
    const img = document.querySelectorAll('img');
    const slider = document.querySelectorAll('.btn-sliders span');
    if (e > img.length) {
        indexValue = 1;
    }
    if (e < 1) {
        indexValue = img.length;
    }
    for (let i = 0; i < img.length; i++) {
        img[i].style.transition = 'all .3s ease-in-out';
        img[i].style.display = 'none';
    }
    for (let i = 0; i < slider.length; i++) {
        slider[i].style.transition = 'all .3s ease-in-out';
        slider[i].style.background = "rgba(255,255,255,0.1)";
    }

    img[indexValue - 1].style.transition = 'all .3s ease-in-out';
    img[indexValue - 1].style.display = 'block';
    slider[indexValue - 1].style.transition = "all .3s ease-in-out";
    slider[indexValue - 1].style.background = "white";

}