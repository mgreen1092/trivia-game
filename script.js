//select all elements
let mainPage = document.getElementById('main-page')
console.log(mainPage)
let nameInput = document.querySelector('.active')
let playGameButton = document.querySelector('#play-game')
let questionSlot = document.querySelector('h2')
let answerSlot = document.querySelector('h3')
let answerA = document.querySelector('#answerA')
let answerB = document.querySelector('#answerB')
let answerC = document.querySelector('#answerC')

//click button to go to next page with questions
let questions = [
    {question: 'What is my name?',
     answers: ['A: Morgan', 'B: Elizabeth', 'C: Green'],
     correct: 'Morgan',
    },
    {question: "Where do I live?",
     answers: ["A: Boston", "B: Acton", "C: Phoenix"],
     correct: 'Acton',
    }
]
let questionsCorrect = []
playGameButton.addEventListener('click', questionsAppear)
// console.log(questions[0].question)
function questionsAppear () {
    //how to clear the background
    // mainPage.classList.remove('active')
    mainPage.style.display = 'none';
    for (let i=0; i<questions.length; i++) {
        let randomQuestion = Math.floor(Math.random()*questions.length)
        console.log(randomQuestion)
        let questionsAppear = questions[randomQuestion].question
        console.log(questionsAppear)
        let questionAnswers = questions[randomQuestion].answers[0]
        questionSlot.innerText = questionsAppear
        answerSlot.innerText = questionAnswers
    }
    
}

//question appears when screen clears with three multiple choice answers

//questions will have a class of hidden until they are ready to appear
//Ex: the first question has a class of hidden, but when user hits play game, it will have a class of active

//When a user gets a correct response the background of the correct answer will turn green

//If incorrect, the background of the selected response will turn red and the correct response will turn green

//Once question is marked as correct or incorrect, the page will refresh and new question will appear

