// DEPENDECIES
var startButton = document.getElementById("startbutton");
var nextButton = document.getElementById("nextbutton");

// GLOBAL VARIABLES
var timeEl = document.getElementById("time");
var questionSection = document.getElementById("quizsection");
var randomizeQuestion, currentQuestionIndex;
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("user-choices");

var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: [
      { text: "Strings", correct: false },
      { text: "Boolean", correct: false },
      { text: "Alerts", correct: true },
      { text: "Numbers", correct: false },
    ],
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    answers: [
      { text: "Parentheses", correct: true },
      { text: "Curly brackets", correct: false },
      { text: "Quotes", correct: false },
      { text: "Square brackets", correct: false },
    ],
  },
  {
    question: "Arrays in JavaScript can be used to store ____",
    answers: [
      { text: "Numbers and strings", correct: false },
      { text: "other arrays", correct: false },
      { text: "boolenas", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    answers: [
      { text: "commas", correct: false },
      { text: "curly brackets", correct: false },
      { text: "quote", correct: true },
      { text: "parentheses", correct: false },
    ],
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      { text: "Javascript", correct: false },
      { text: "console.log", correct: true },
      { text: "For loops", correct: false },
      { text: "terminal", correct: false },
    ],
  },
];

// FUNCTIONS
function startGame() {
  startButton.classList.add("hide");
  nextButton.classList.remove("hide");
  randomizeQuestion = questions.sort(() => (Math.random = 0.5));
  currentQuestionIndex = 0;
  questionsection.classList.remove("hide");
  setNextQuestion();
  countDown();
}
// Start game
// Start timer
// Show question
// Show choices
// Next questions
// End of game

// USER INTERACTIONS
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    endGame();
  } else {
    nextQuestion();
  }
});
