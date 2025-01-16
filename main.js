let startbtn = document.querySelector('.start');
let stopbtn = document.querySelector('.stop');
let resettbtn = document.querySelector('.reset');
let circle = document.querySelector('.circle');

let time = document.querySelector('.time');
let interval = 0;

let secondsElapsed = 0;

startbtn.addEventListener("click", startclock);
stopbtn.addEventListener("click", stopclock);
resettbtn.addEventListener("click", resetclock);

function timer(){
secondsElapsed++;


displayTime();
}

function displayTime(){
const hours = Math.floor(secondsElapsed / 3600); // Total hours
const mins = Math.floor((secondsElapsed % 3600) / 60); // Remaining minutes after hours
const seconds = secondsElapsed % 60; // Remaining seconds
    time.innerHTML = `${hours}:${mins}:${seconds}`; 
       
}





function startclock(){
interval = setInterval(timer, 1000);
circle.style.border = "#0ef 5px solid";
circle.style.boxShadow = "0 0 20px #0ef";
startbtn.disabled = true;
stopbtn.classList.remove("hide");
resettbtn.classList.remove("hide");

}



function stopclock(){
    clearInterval(interval);
    circle.style.border = "orange 5px solid";
    circle.style.boxShadow = "0 0 20px orange";
    startbtn.disabled = false;
}   



function resetclock(){
    clearInterval(interval);
    secondsElapsed = 0;
    displayTime();
    circle.style.border = "red 5px solid";
    circle.style.boxShadow = "0 0 20px red";
    startbtn.disabled = false;

    stopbtn.classList.add("hide");
    resettbtn.classList.add("hide");
}











