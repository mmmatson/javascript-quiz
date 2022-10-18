//Declare variables
var timer;
var timerCount = document.getElementById('timer');
var startButton = document.getElementById('start');

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

