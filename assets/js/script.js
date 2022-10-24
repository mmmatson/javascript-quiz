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

//Define endGame function
function endGame() {
    //Hide quiz page and show score page when end game function called
    quizPage.setAttribute('class', 'hide');
    scorePage.removeAttribute('class');
    //freeze timer when endGame function called
    clearInterval(timer);
}
//Define getQuestion function
function getQuestion() {
    //Run function if condition evaluates to be true
    if (questionIndex <= 5) {
        //Clear content from question element
        questionEl.innerHTML = "";
        //Get and show current question from questions array based on questionIndex
        var currentQuestion = questions[questionIndex];
        questionEl.textContent = currentQuestion.question;
        //Clear content from options container div
        optionButtonsEl.innerHTML = "";
        //For loop to add options from options array for question
        for (let i = 0; i < currentQuestion.options.length; i++) {
            //Define each option as the current question's options
            var option = currentQuestion.options[i];
            //Create option buttons
            var optionBtn = document.createElement('button');
            //Assign the value of each option button to be an option from the current question
            optionBtn.setAttribute('value', option);
            //Create and assign a class called "options" to each button
            optionBtn.setAttribute('class', 'options');
            //Show option from options array on option button             
            optionBtn.textContent = option;
            //Append each option button to the options-container div
            optionButtonsEl.appendChild(optionBtn);
        }
        //Add event listener to target click events on any buttons in options container div
        optionButtonsEl.addEventListener("click", function (event) {
            //Define selected option as event target
            var selectedOption = event.target;
            //If the value of the user selected option is not equal to the current question's answer
            console.log(selectedOption.value)
            if (selectedOption.value != currentQuestion.answer) {
                //decrease the amount of time left on the clock    
                timer - 5;
            }
            //Increase the question index to show the next question when getQuestion called
            questionIndex++;
            //call the getQuestion function
            getQuestion();
        })
    }
    //Run endGame function if condition above does not evaluate to be true
    else { endGame(); }
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