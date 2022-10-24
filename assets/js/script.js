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
var time = questions.length * 5;
var questionIndex = 0;
var timerCount = document.getElementById('timer');
var startButton = document.getElementById('start');
var submitButton = document.getElementById('submit');
var clearButton = document.getElementById('clear');
var homePage = document.getElementById("home");
var quizPage = document.getElementById("quiz");
var scorePage = document.getElementById("score");
var questionEl = document.getElementById('question');
var optionButtonsEl = document.getElementById('options-container');

//Define getQuestion function
function getQuestion() {
    //Get and show current question from questions array based on questionIndex
    var currentQuestion = questions[questionIndex];
    questionEl.textContent = currentQuestion.question;
}

//Define clock function - time decreases and is shown on screen
function clock() {
    time--;
    timerCount.textContent = time;
    //Call endGame function if time is 0 or less
    if (time <= 0) {
        endGame();
    }
}
//Define start game function
function startGame() {
    //Hide homepage by adding "hide" class attribute 
    homePage.setAttribute('class', 'hide');
    //Show quiz page by removing "hide" class attribute 
    quizPage.removeAttribute('class');
    //Call clock function to countdown 
    timer = setInterval(clock, 1000);
    //Call getQuestion function
    getQuestion();
}

//Execute startGame function when start button clicked
startButton.addEventListener("click", startGame);