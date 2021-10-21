// GLOBAL VARIABLES
var timeEl = document.getElementById("time");
var scoreEl = document.getElementById("highscore");
var startButton = document.getElementById("startbutton");
var questionsection = document.getElementById("quizsection");
var randomizeQuestions, currentQuestionIndex;
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("user-choices");
var nextButton = document.getElementById("nextbutton");

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

// Timer
function countDown() {
  var secondsLeft = 5;

  var timeInterval = setInterval(function () {
    if (secondsLeft >= 0) {
      timeEl.textContent = secondsLeft + " seconds left";
      secondsLeft--;
    } else {
      timeEl.textContent = "Time's up. Quiz over";
      clearInterval(timeInterval);
      nextButton.classList.add("hide");

      var initials = prompt("Save your initials here: ");

      localStorage.setItem("initials", JSON.stringify(initials));
      //   console.log(initials);
    }
  }, 1000);
}

function startGame() {
  startButton.classList.add("hide");
  nextButton.classList.remove("hide");
  randomizeQuestions = questions.sort(() => (Math.random = 0.5));
  currentQuestionIndex = 0;
  questionsection.classList.remove("hide");
  nextQuestion();
  countDown();
}

function nextQuestion(event) {
  resetState();
  showQuestion(randomizeQuestions[currentQuestionIndex]);
  if (randomizeQuestions.length === currentQuestionIndex) {
  }
  console.log(questions);
  return;
}

function showQuestion(questions) {
  questionElement.textContent = questions.question;
  questions.answers.forEach((answers) => {
    const button = document.createElement("button");
    button.textContent = answers.text;
    button.classList.add("bttn");
    if (answers.correct) {
      button.dataset.correct = answers.correct;
    }

    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (randomizeQuestions > currentQuestionIndex) {
    showQuestion(questions);
  }
}

function resetState() {
  clearStatusClass(document.body);
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("incorrect");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("incorrect");
}
function endGame() {
  nextbutton.disabled = true;

  var userInitials = prompt("Save your initials here: ");
  localStorage.setItem("userInitials", JSON.stringify(userInitials));
  // check to see if user initials are being saved
  console.log(userInitials);
}

function getHighScore() {
  var highScore = JSON.parse(localStorage.getItem("userInitials"));
  if (lastGrade !== null) {
    document.getElementById("userInitials").innerHTML = highScore.userInitials;
    // console.log(highScore);
    return;
  }
}

// USER INTERACTIONS

// // startButton.addEventListener("click", startGame);
// // nextButton.addEventListener("click", () => {
//   currentQuestionIndex++;
//   if (currentQuestionIndex === questions.length) {
//     endGame();
//   } else {
//     nextQuestion();
//   }
// });
