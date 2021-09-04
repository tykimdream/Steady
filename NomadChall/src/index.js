const timer = document.querySelector("#timer");

function timerUpdate(){
    timer.innerText = new Date();
}

setInterval(timerUpdate, 1000)