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
var highscorePage = document.getElementById("highscores-page");
var questionEl = document.getElementById('question');
var optionButtonsEl = document.getElementById('options-container');
var initials = document.getElementById("initials");
var highscores = document.getElementById("highscores");

//Define endGame function
function endGame() {
    //Hide quiz page and show score page when end game function called
    quizPage.setAttribute('class', 'hide');
    scorePage.removeAttribute('class');
    //freeze timer when endGame function called
    clearInterval(timer);
}
function getQuestion() {
    questionEl.innerHTML = "";
    var currentQuestion = questions[questionIndex];
    questionEl.textContent = currentQuestion.question;
    optionButtonsEl.innerHTML = "";
    //For loop to add options from options array for question
    for (let i = 0; i < currentQuestion.options.length; i++) {
        var option = currentQuestion.options[i];
        var optionBtn = document.createElement('button');
        optionBtn.setAttribute('value', option);
        optionBtn.setAttribute('class', 'options');
        optionBtn.textContent = option;
        //Add event listener to target click events on each option button
        optionBtn.addEventListener("click", function (event) {
            var selectedOption = event.target;
            if (selectedOption.value != currentQuestion.answer) {
                timer - 5;
            }
            if (questionIndex != 4) {
                questionIndex++;
                getQuestion();
            }
            else { endGame(); }
        })
        optionButtonsEl.appendChild(optionBtn);
    }
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

//Define save initials function
function saveInitials() {
    // Save data as an object
    var userInitials = {
        initials: initials.value.trim(),
    };
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem("userInitials", JSON.stringify(userInitials));
}

//Define render initials function
function renderInitials() {
    // Use JSON.parse() to convert text to JavaScript object
    var lastUser = JSON.parse(localStorage.getItem("userInitials"));
    // Check if data is returned, if not exit out of the function
    if (lastUser !== null) {
        document.getElementById("highscores").innerText = lastUser.initials;
    } else {
        return;
    }
}

//Execute startGame function when start button clicked
startButton.addEventListener("click", startGame);

//Clicking submit button executes save initials and render initials functions
submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    saveInitials();
    renderInitials();
    //Hide quiz page and show score page when end game function called
    scorePage.setAttribute('class', 'hide');
    highscorePage.removeAttribute('class');
});

// The init() function fires when the page is loaded 
function init() {
    // When the init function is executed, the code inside renderInitials function will also execute
    renderInitials();
}
init();

//clear local storage when "clear" button clicked
clearButton.addEventListener('click', () => {
    window.localStorage.clear();
})