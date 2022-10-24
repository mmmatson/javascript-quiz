//Declare variables
var timer;
var timerCount = document.getElementById('timer');
var startButton = document.getElementById('start');
var submitButton = document.getElementById('submit');
var clearButton = document.getElementById('clear');
var homePage = document.getElementById("home");
var quizPage = document.getElementById("quiz");
var scorePage = document.getElementById("score");
var questionEl = document.getElementById('question');
var optionButtonsEl = document.getElementById('options-container');

//Declare function to start timer countdown when "start" button clicked
startButton.addEventListener("click", function startTimer() {
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

