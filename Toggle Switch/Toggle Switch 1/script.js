
let toggle = document.getElementById('toggle');
let audio =new Audio('toggle.mp3');

toggle.addEventListener('change', function(){
    if(this.checked){
        
        audio.play();
    }
    else{
        
        audio.play();
    }
})
