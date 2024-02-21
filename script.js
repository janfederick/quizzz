const questions = [
    {
        question: "What is the longest word in the English language?",
        answers: [
            { text: "Antidisestablishmentarianism", correct: true },
            { text: "Hippopotomonstrosesquippedaliophobia", correct: false },
            { text: "Floccinaucinihilipilification", correct: false },
            { text: "dubidubidapdap", correct: false },
        ],
    },

    {
        question: "What is the name of the world’s smallest horse?",
        answers: [
            { text: "Falabella", correct: false },
            { text: "Miniature horse", correct: true },
            { text: "Shetland pony", correct: false },
            { text: "bayobo", correct: false },
        ],
    },
    {
        question: "What is Benedictine monk Dom Pierre Pérignon rumored to have created?",
        answers: [
            { text: "Champagne", correct: true },
            { text: "Tomato ketchup", correct: false },
            { text: "French fries", correct: false },
            { text: "mang tomas", correct: false },
        ],
    },

    {
        question: "Which country drinks the most amount of coffee per person?",
        answers: [
            { text: "Finland", correct: true },
            { text: "Italy", correct: false },
            { text: "Colombia", correct: false },
            { text: "Philippine", correct: false },
        ],
    },
    {
        question: "What is the collective name for a group of unicorns?",
        answers: [
            { text: "A sparkle", correct: false },
            { text: "A blessing", correct: true },
            { text: "A spell", correct: false },
            { text: "A thunder", correct: false },
        ],
    },
    {
        question: "What is the most common color of toilet paper in France?",
        answers: [
            { text: " White", correct: false },
            { text: "blue", correct: false },
            { text: "Pink", correct: true },
            { text: "red", correct: false },
        ],
    },
    {
        question: "How many years old is the world’s oldest piece of chewing gum?",
        answers: [
            { text: " 1000", correct: false },
            { text: "500", correct: false },
            { text: "3000", correct: false },
            { text: "5,700", correct: true },
        ],
    },
    {
        question: "How many times per day does the average American open their fridge?",
        answers: [
            { text: "1", correct: false },
            { text: "33", correct: true },
            { text: "44", correct: false },
            { text: "55", correct: false },
        ],
    },
    {
        question: "What color is an airplane’s famous black box?",
        answers: [
            { text: "red", correct: false },
            { text: "Orange", correct: true },
            { text: "blue", correct: false },
            { text: "white", correct: false },
        ],
    },
    {
        question: "What is Bombay Duck’s main ingredient?",
        answers: [
            { text: "Fish", correct: true },
            { text: "duck", correct: false },
            { text: "chicken", correct: false },
            { text: "pig", correct: false },
        ],
    },
];

let currentQuestionIndex = 0;
let userScore = 0;

const startButtonEl = document.querySelector(".start-btn");
const welcomeScreenEl = document.querySelector(".welcome-screen");
const quizScreenEl = document.querySelector(".quiz-screen");
const questionEl = document.querySelector(".question");
const answersButtons = document.querySelector(".answers-container");
const nextButtonEl = document.querySelector(".next-btn");

startButtonEl.addEventListener("click", startQuiz);

function startQuiz() {
    welcomeScreenEl.style.display = "none";
    quizScreenEl.style.display = "flex";
    currentQuestionIndex = 0;
    userScore = 0;
    nextButtonEl.innerHTML = "Next";
    nextButtonEl.style.display = "none";
    displayQuestion();
}

function displayQuestion() {
    resetContainer();
    questionEl.textContent = questions[currentQuestionIndex].question;
    questions[currentQuestionIndex].answers.forEach((answer) => {
        const buttonEl = document.createElement("button");
        buttonEl.innerHTML = answer.text;
        buttonEl.classList.add("ans-btn");
        answersButtons.appendChild(buttonEl);

        if (answer.correct) {
            buttonEl.dataset.correctAns = answer.correct;
        }
        buttonEl.addEventListener("click", checkAnswer);
    });
}

function checkAnswer(e) {
    const selectedButton = e.target;
    if (selectedButton.dataset.correctAns) {
        userScore++;
        console.log(userScore);
        selectedButton.classList.add("correct-ans");
    } else {
        selectedButton.classList.add("wrong-ans");
    }

    Array.from(answersButtons.children).forEach((button) => {
        if (button.dataset.correctAns === "true") {
            button.classList.add("correct-ans");
        }
        button.disabled = "true";
    });

    nextButtonEl.style.display = "block";
}

function displayResult() {
    resetContainer();
    questionEl.innerHTML = `Quiz is Completed! <br> Your Score: <span class="score">${userScore}/${questions.length}</span>`;

    nextButtonEl.innerHTML = "Restart Quiz";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        nextButtonEl.style.display = "none";
    } else {
        displayResult();
    }
}

nextButtonEl.addEventListener("click", function () {
    if (currentQuestionIndex < questions.length) {
        nextQuestion();
    } else {
        startQuiz();
    }
});

function resetContainer() {
    questionEl.textContent = "";
    answersButtons.innerHTML = "";
}