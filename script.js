//select all elements
let mainPage = document.getElementById('main-page')
// console.log(mainPage)
//instructions modal
let modal = document.querySelector('#modal')
let openModal = document.querySelector('#openModal')
let modalTextbox = document.querySelector('#modal-textbox')
let closeModal = document.querySelector('#close')

let nameInput = document.querySelector('.active')
let playGameButton = document.querySelector('#play-game')
let questionSlot = document.querySelector('h2')

//Answer Section
let answerSlot = document.querySelector('#answer-section')
let answer0 = document.querySelector('#answer0')
let answer1 = document.querySelector('#answer1')
let answer2 = document.querySelector('#answer2')

//elements of response modal
let answerModal = document.querySelector('#response-modal')
let correctModal = document.querySelector('#correct-answer')
let incorrectModal = document.querySelector('#incorrect-answer')
let nextButton = document.querySelector('#next-button')


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

//click button to go to next page with questions
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
let randomQuestion = Math.floor(Math.random()*questions.length);


function questionsAppear () {
    //how to clear the background
    // mainPage.classList.remove('active')
    mainPage.style.display = 'none';
    for (let i=0; i<questions.length; i++) {
        // let randomQuestion = Math.floor(Math.random()*questions.length);
        // console.log(randomQuestion);
        let questionsAppear = questions[randomQuestion].question;
        // console.log(questionsAppear);
        questionAnswerA = questions[randomQuestion].answers[0];
        questionAnswerB = questions[randomQuestion].answers[1];
        questionAnswerC = questions[randomQuestion].answers[2];
        questionSlot.innerText = questionsAppear
        answerSlot.style.display = 'block';
        answer0.innerText = questionAnswerA;
        answer1.innerText = questionAnswerB;
        answer2.innerText = questionAnswerC;
    }
    
}

//if button selected matches the value in 'correct' background turns green and the next question appears
//if correct, add one to questionsCorrect array

answer0.addEventListener('click', answerSelection)
answer1.addEventListener('click', answerSelection)
answer2.addEventListener('click', answerSelection)


function answerSelection (evt) {
    console.log(evt.target.id[6])
    console.log(questions[randomQuestion].correct)
    if (evt.target.id[6] == questions[randomQuestion].correct) {
        // console.log(evt.target.id[6])
        evt.target.style.backgroundColor = 'lightgreen'
        setTimeout (function() {
            answerModal.style.display = 'block';
            correctModal.style.display = 'block';
            questionsCorrect += 1;
            // console.log(questionsCorrect)
        }, 100)
    } else {
        evt.target.style.backgroundColor = 'lightcoral'
        setTimeout (function() {
            answerModal.style.display = 'block';
            incorrectModal.style.display = 'block';
        }, 100)
    }
}




//questions will have a class of hidden until they are ready to appear
//Ex: the first question has a class of hidden, but when user hits play game, it will have a class of active

//When a user gets a correct response the background of the correct answer will turn green

//If incorrect, the background of the selected response will turn red and the correct response will turn green

//Once question is marked as correct or incorrect, the page will refresh and new question will appear

