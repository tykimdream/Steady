const timer = document.querySelector("#timer");

function timerUpdate(){
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth()+1;
    const date = today.getDate();

    // timer.innerText = `${year}년 ${month}월 ${date}일 ${day}요일 ${hour}시 ${min}분 ${sec}초`;
    
    timer.innerText = `${year}년 ${month}월 ${date}일 ${today.toLocaleTimeString()}`
}

setInterval(timerUpdate, 1000)