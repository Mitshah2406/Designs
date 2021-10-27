let progressBar = document.querySelector('.circularProgress');
let valueContainer = document.querySelector('.valueContainer');
let setbtn = document.querySelector('#btn');
let setValue = document.querySelector('#setvalue');
console.log(progressBar, valueContainer);

let btn = document.querySelector('.btn');

    let progressValue = 0;
    let progressEnd = 50; 
    let speed = 50;
    let progress = setInterval(() => {
        progressValue++;
        valueContainer.textContent = `${progressValue}%`
        console.log(progressValue)
        progressBar.style.background = `conic-gradient(
            #3867d6 ${progressValue * 3.6}deg,
            #86c7f3 ${progressValue * 3.6}deg
        )`;
        if (progressValue == progressEnd) {
            clearInterval(progress);
        }
    }, speed);

