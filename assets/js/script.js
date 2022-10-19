//Declare variables
var timer;
var timerCount = document.getElementById('timer');
var startButton = document.getElementById('start');
var submitButton = document.getElementById('retake');
var retakeButton = document.getElementById('retake');
var clearButton = document.getElementById('clear');
var highscoresButton = document.getElementById('highscores-button');

//Declare all sections aside from home section hidden to start
document.getElementById("home").hidden = false;
document.getElementById("quiz").hidden = true;
document.getElementById("score").hidden = true;
document.getElementById("highscores").hidden = true;


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

//Clicking "highscores" button hides home section and makes highscores section visible
highscoresButton.addEventListener("click", () => {
    document.getElementById("home").hidden = true;
    document.getElementById("quiz").hidden = true;
    document.getElementById("score").hidden = true;
    document.getElementById("highscores").hidden = false;
}, false);

//Clicking "start" button hides home section and makes quiz section visible
startButton.addEventListener("click", () => {
    document.getElementById("home").hidden = true;
    document.getElementById("quiz").hidden = false;
    document.getElementById("score").hidden = true;
    document.getElementById("highscores").hidden = true;
}, false);

//Clicking "submit" button hides score section and makes highscores section visible
submitButton.addEventListener("click", () => {
    document.getElementById("home").hidden = true;
    document.getElementById("quiz").hidden = true;
    document.getElementById("score").hidden = true;
    document.getElementById("highscores").hidden = false;
}, false);

//Clicking "retake quiz" button hides highscores section and makes home section visible
retakeButton.addEventListener("click", () => {
    document.getElementById("home").hidden = false;
    document.getElementById("quiz").hidden = true;
    document.getElementById("score").hidden = true;
    document.getElementById("highscores").hidden = true;
}, false);

