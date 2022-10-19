//Declare variables
var timer;
var home;
var timerCount = document.getElementById('timer');
var startButton = document.getElementById('start');
var retakeButton = document.getElementById('retake')

//Declare function to start timer countdown when "start" button clicked
startButton.addEventListener("click", function startTimer(event) {
    //Set timer to start at 30 seconds
    var sec = 30;
    //When start button clicked again, timer reset to 30 seconds
    clearInterval(timer);
    //Set timer to countdown and display timer countdown on screen
    timer = setInterval(() => {
        timerCount.innerHTML = sec + ' seconds left';
        sec--;
    }, 1000)
})

//Declare function to hide "home" page when "start" button clicked
startButton.addEventListener("click", function hideHome() {
    if (home == 1) {
        document.getElementById('home').style.display = 'inline';
        return home = 0;
    }
    else {
        document.getElementById('home').style.display = 'none';
        return home = 1;
    }
})

//Declare function to show "home" page when "retake quiz" button clicked
retakeButton.addEventListener("click", function showHome() {
    if (home == 0) {
        document.getElementById('home').style.display = 'none';
        return home = 1;
    }
    else {
        document.getElementById('home').style.display = 'inline';
        return home = 0;
    }
})