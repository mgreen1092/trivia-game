//select all elements
//Main Page
let mainPage = document.getElementById('main-page')

//instructions modal
let modal = document.querySelector('#modal')
let openModal = document.querySelector('#open-modal')
let modalTextbox = document.querySelector('#modal-textbox')
let closeModal = document.querySelector('#close')

//Main page elements
let nameInput = document.querySelector('#name-input')
let playGameButton = document.querySelector('#play-game')
let questionSlot = document.querySelector('h2')
let nameSubmit = document.querySelector('#name-submit')

//Answer Section
let answerSlot = document.querySelector('#answer-section')
let answer0 = document.querySelector('#answer0')
let answer1 = document.querySelector('#answer1')
let answer2 = document.querySelector('#answer2')

//correct/incorrect response modal
let answerModal = document.querySelector('#response-modal')
let correctModal = document.querySelector('#correct-answer')
let incorrectModal = document.querySelector('#incorrect-answer')
let nextButton = document.querySelector('#next-button')

//Back Button
let backButton = document.querySelector('#back-button')

//================================================================

//Instructions open
function openInstructions () {
    modal.style.display = 'block';
}
//Instructions close 
function closeInstructions () {
    modal.style.display = 'none';
}
openModal.addEventListener("click", openInstructions)
closeModal.addEventListener("click", closeInstructions)

//When name submit button is clicked, border turns green 
nameSubmit.addEventListener('click', submitName)
function submitName () {
    nameInput.style.border = '5px solid green';
}

//Questions
let questions = [
    {question: 'What is my name?',
     answers: ['A: Morgan', 'B: Elizabeth', 'C: Green'],
     correct: 0,
    },
    {question: "Where do I live?",
     answers: ["A: Boston", "B: Acton", "C: Phoenix"],
     correct: 1,
    }
]
//Global Variables
let questionsCorrect = 0
playGameButton.addEventListener('click', questionsAppear)
nextButton.addEventListener('click', questionsAppear)
let randomQuestion = Math.floor(Math.random()*questions.length);

function questionsAppear () {
    //remove answer modal when entering a new question
    answerModal.style.display = 'none';
    //remove background color change when entering a new question
    let colorChange = document.querySelectorAll('.color-change')
    colorChange.forEach(c => {
        c.style.backgroundColor = 'white'
        // console.log(c)
    })
    //removes main display to allow questions to appear
    mainPage.style.display = 'none';
    //re-call randomQuestion 
    randomQuestion = Math.floor(Math.random()*questions.length);
    //display questions
    questionSlot.style.display = 'block';
    let questionsAppear = questions[randomQuestion].question;
    questionSlot.innerText = questionsAppear
    //display answer options
    questionAnswerA = questions[randomQuestion].answers[0];
    questionAnswerB = questions[randomQuestion].answers[1];
    questionAnswerC = questions[randomQuestion].answers[2];
    answerSlot.style.display = 'block';
    answer0.innerText = questionAnswerA;
    answer1.innerText = questionAnswerB;
    answer2.innerText = questionAnswerC;
}

//selecting answers
answer0.addEventListener('click', answerSelection)
answer1.addEventListener('click', answerSelection)
answer2.addEventListener('click', answerSelection)

function answerSelection (evt) {
    //if button selected matches the value in 'correct' background turns green and response modal appears
    // console.log(evt.target.id[6])
    console.log(questions[randomQuestion].correct)
    if (evt.target.id[6] == questions[randomQuestion].correct) {
        // console.log(evt.target.id[6])
        //change correct answer background color to green
        evt.target.style.backgroundColor = 'lightgreen'
        setTimeout (function() {
            //correct modal appears
            answerModal.style.display = 'block';
            correctModal.style.display = 'block';
            incorrectModal.style.display = 'none';
            //if correct, add one to questionsCorrect array
            questionsCorrect += 1;
            // console.log(questionsCorrect)
        }, 100)
    } else {
        //if incorrect, background changes to lightcoral
        evt.target.style.backgroundColor = 'lightcoral'
        setTimeout (function() {
            //incorrect modal appears
            answerModal.style.display = 'block';
            incorrectModal.style.display = 'block';
            correctModal.style.display = 'none';
        }, 100)
    }
    //remove the question that was asked from the array so the questions won't repeat
    questions.splice(randomQuestion, 1)
    // console.log(questions)
}

//if back button is selected, the main page appears

function returnHome () {
    questionSlot.style.display = 'none';
    answerSlot.style.display = 'none';
    mainPage.style.display = 'block';
}
backButton.addEventListener('click', returnHome)


