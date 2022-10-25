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
let questionsNav = document.querySelector('#trivia-nav')
let scoreNav = document.querySelector('#score-nav')

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

//=============================================================================================
//Questions
let questions = [
    {question: 'Where was the 2022 US Open held?',
     answers: ['A: Brookline Country Club', 'B: Torrey Pines Golf Course', 'C: Pebble Beach'],
     correct: 0,
     correctInfo: 'The Brookline Country Club has held the US Open in 1913, 1963, and 1988.',
     incorrectInfo: 'The correct answer is Brookline Country Club.',
    },
    {question: "Who won the 2022 US Open?",
     answers: ['A: Tiger Woods', 'B: Rory McIlroy', 'C: Matt Fitzpatrick'],
     correct: 2,
     correctInfo: 'This was Matt Fitzpatrick\'s first major golf championship title.',
     incorrectInfo: 'The correct answer was Matt Fitzpatrick.',
    },
    {question: 'How many times has Tiger Woods won the masters?',
    answers: ['A: 5', 'B: 3', 'C: 6'],
    correct: 0,
    correctInfo: 'Tiger Woods has won the masters 5 times, and ranks just one below Jack Nicklaus with 6 wins.',
    incorrectInfo: 'The correct answer is Tiger Woods.'
    },
    {question: 'Who won the 2022 US Women\'s Open Golf Championship?',
    answers: ['A: Mina Harigae', 'B: Minjee Lee', 'C: Nelly Korda'],
    correct: 1,
    correctInfo: 'This was Minjee Lee\'s second major title win. She won by four strokes!',
    incorrectInfo: 'The correct answer is Minjee Lee.'
    },
    {question: 'Who was the first woman golfer to play in a men\'s PGA tour event?',
    answers: ['A: Annika Sorenstam', 'B: Babe Didrikson Zaharias', 'C: Michelle Wie'],
    correct: 1,
    correctInfo: 'Babe Didrikson Zaharias competed in the men\'s PGA tour in 1945.',
    incorrectInfo: 'The correct answer is Babe Didrikson Zaharias.'
    },
    {question: 'Where did golf originate?',
    answers: ['A: Englad', 'B: United States', 'C: Scotland'],
    correct: 2,
    correctInfo: 'Golf was first documented being played in Scotland in 1457.',
    incorrectInfo: 'The correct answer is Scotland.'
    },
    {question: 'When was the LPGA founded?',
    answers: ['A: 1950', 'B: 1990', 'C: 1970'],
    correct: 0,
    correctInfo: 'The LPGA is one of the longest-running women\'s professional sports association in the world.',
    incorrectInfo: 'The correct answer is 1950.'
    },
    {question: 'Which women golfer won the most major championships?',
    answers: ['A: Annika Sorenstam', 'B: Mickey Wright', 'C: Patty Berg'],
    correct: 2,
    correctInfo: 'Patty Berg won a total of 15 LPGA major championship.',
    incorrectInfo: 'The correct answer is Patty Berg.'
    },
    {question: 'Since 1970, who was the youngest person to win a PGA tour championship?',
    answers: ['A: Jordan Spieth', 'B: Tiger Woods', 'C: Rory McIlroy'],
    correct: 0,
    correctInfo: 'Jordan Spieth was 19 years old when he won the Deere in 2013.',
    incorrectInfo: 'The correct answer is Jordan Spieth.'
    },
    {question: 'What is the only major Rory McIlroy hasn\'t won?',
    answers: ['A: US Open', 'B: The Masters', 'C: The PGA Championship'],
    correct: 1,
    correctInfo: 'Rory McIlroy came extremely close to winning the Masters in 2022, but came in second.',
    incorrectInfo: 'The correct answer is the Masters.'
    },
    {question: 'What is an albatross?',
    answers: ['A: Double par', 'B: Hole in one', 'C: 3 under par on a hole'],
    correct: 2,
    correctInfo: 'Albatross is also synonymous to a double eagle.',
    incorrectInfo: 'The correct answer is albatross'
    },
]
//============================================================================

//Global Variables
let questionsCorrect = 0
let randomQuestion = Math.floor(Math.random()*questions.length);
let question = []
//Question functionality
playGameButton.addEventListener('click', questionsAppear)
nextButton.addEventListener('click', questionsAppear)

console.log(playGameButton)

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
    //Results message
    if (questions.length === 0) {
        let exitMessage = `Congrats, ${nameInput.value}! You got ${questionsCorrect} question(s) correct! Play again and challenge your friends.`
        questionSlot.innerText = exitMessage;
        answer0.style.display = 'none';
        answer1.style.display = 'none';
        answer2.style.display = 'none';
        backButton.style.display = 'block';
        backButton.style.margin = '0 auto';
        backButton.style.fontSize = '35px';
    } 
    //re-call randomQuestion 
    randomQuestion = Math.floor(Math.random()*questions.length);
    //display questions
    questionSlot.style.display = 'flex';
    // if (questionSlot.style.display = 'block') {
    //     questionsNav.style.display = 'block';
    //     scoreNav.innerText = `Score: ${questionsCorrect}`
    // }
    questionsNav.style.display = 'block';
    scoreNav.innerText = `Score: ${questionsCorrect}`
    // console.log(questions[randomQuestion].question,"Random question object")
    question = questions[randomQuestion]
    questionSlot.innerText = question.question
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

let answerDetails = document.querySelector('#modal-details')

function answerSelection (evt) {
    //if button selected matches the value in 'correct' background turns green and response modal appears
    // console.log(evt.target.id[6])
    // console.log(questions[randomQuestion].correct)
        if (evt.target.id[6] == questions[randomQuestion].correct) {
        // console.log(evt.target.id[6])
        //change correct answer background color to green
        evt.target.style.backgroundColor = 'lightgreen'
        setTimeout (function(evt) {
            //correct modal appears
            answerModal.style.display = 'block';
            correctModal.style.display = 'block';
            incorrectModal.style.display = 'none';
            //add in the additional information from questions object
            answerDetails.innerText = question.correctInfo
            //add to questions correct score, if answer is correct
            questionsCorrect = questionsCorrect + 1;
            // console.log(questionsCorrect, '# Correct')
        }, 100)
    } else {
        //if incorrect, background changes to lightcoral
        evt.target.style.backgroundColor = 'lightcoral';
        setTimeout (function(evt) {
            //incorrect modal appears
            answerModal.style.display = 'block';
            incorrectModal.style.display = 'block';
            correctModal.style.display = 'none';
            //add in the additional information from questions object
            answerDetails.innerText = question.incorrectInfo
        }, 100)
    }
    //remove the question that was asked from the array so the questions won't repeat
    questions.splice(randomQuestion, 1)
    // console.log(questionsCorrect, "# Correct")  
}
//if back button is selected, the main page appears

function returnHome () {
    questionSlot.style.display = 'none';
    answerSlot.style.display = 'none';
    mainPage.style.display = 'block';
    questionsCorrect=0;
}
backButton.addEventListener('click', returnHome)

//hover functionality to answer selection
answer0.addEventListener("mouseenter", () => {
    answer0.style.backgroundColor = 'gray'; })
answer0.addEventListener("mouseleave", () => {
    answer0.style.backgroundColor = 'white'; })
answer1.addEventListener("mouseenter", () => {
    answer1.style.backgroundColor = 'gray'; })
answer1.addEventListener("mouseleave", () => {
    answer1.style.backgroundColor = 'white'; })
answer2.addEventListener("mouseenter", () => {
    answer2.style.backgroundColor = 'gray'; })
answer2.addEventListener("mouseleave", () => {
    answer2.style.backgroundColor = 'white'; })