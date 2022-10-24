//Define questions array with question, options arrays, and answer
var questions = [
    {
        question: 'Which of the following is used to define a variable in JavaScript?',
        options: ['var', 'let', 'const', 'all of the above'],
        answer: 'all of the above',
    },
    {
        question: 'Which of the following will allow users to type in a written response?',
        options: ['alert()', 'confirm()', 'prompt()', 'all of the above'],
        answer: 'prompt()',
    },
    {
        question: 'Which of the following would be ignored by JavaScript?',
        options: ['/*comment*/', '<!-- comment -->', '//comment', '/*comment*/ and //comment'],
        answer: '/*comment*/ and //comment',
    },
    {
        question: 'Which function is used to serialize an object into a JSON string in JavaScript?',
        options: ['convert()', 'parse()', 'stringify()', 'none of the above'],
        answer: 'stringify()',
    },
    {
        question: 'What is used to stop an interval timer in JavaScript?',
        options: ['clearInterval()', 'clearTimer()', 'stopInterval()', 'stopInterval()'],
        answer: 'clearInterval()',
    },
]

//Define variables
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

