//select all elements
let mainPage = document.querySelectorAll('.active')
console.log(mainPage)
let nav = document.querySelector('#nav')
let trivia = document.querySelector('#h1')
let nameInput = document.querySelector('.active')
let playGameButton = document.querySelector('#play-game')
let questionOne = document.querySelector('#q1')
let questionOneChoices = document.querySelector('#q1Choices')

//click button to go to next page with questions

playGameButton.addEventListener('click', questionOneAppear)

function questionOneAppear () {
    //how to clear the background
    mainPage.classList.remove('active')
    mainPage.classList.add('hidden')
    //get questions to appear
    questionOne.classList.remove('hidden')
    questionOneChoices.classList.remove('hidden')
    questionOne.classList.add('active')
    questionOne.classList.add('active')

}

//question appears when screen clears with three multiple choice answers

//questions will have a class of hidden until they are ready to appear
//Ex: the first question has a class of hidden, but when user hits play game, it will have a class of active

//When a user gets a correct response the background of the correct answer will turn green

//If incorrect, the background of the selected response will turn red and the correct response will turn green

//Once question is marked as correct or incorrect, the page will refresh and new question will appear

