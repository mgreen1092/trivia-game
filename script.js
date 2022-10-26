//select all elements:
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

//Nav Bar of Questions section
let questionsNav = document.querySelector('#trivia-nav')
let scoreNav = document.querySelector('#score-nav')
let questionCountNav = document.querySelector('#question-nav')
let body = document.querySelector('body')
let triviaSection = document.querySelector('#trivia-section')
let hintButton = document.querySelector('#hint-button')
let countdownEl = document.querySelector('#countdown')

//Answer Section
let answerSlot = document.querySelector('#answer-section')
let answer0 = document.querySelector('#answer0')
let answer1 = document.querySelector('#answer1')
let answer2 = document.querySelector('#answer2')
let answerDetails = document.querySelector('#modal-details')

//correct/incorrect response modal
let answerModal = document.querySelector('#response-modal')
let correctModal = document.querySelector('#correct-answer')
let incorrectModal = document.querySelector('#incorrect-answer')
let nextButton = document.querySelector('#next-button')

//Back Button
let backButton = document.querySelector('#back-button')

//Sound
let mastersSound = document.querySelector('#masters-sound')
mastersSound.autoplay = false;
let soundButton = document.querySelector('#sound-button')
console.log(soundButton)
let soundNav = document.querySelector('#sound-nav')
let soundCount;
soundButton.addEventListener('click', playPause)
let correctSound = document.querySelector('#golf-clap-sound')
let incorrectSound = document.querySelector('#oh-sound')
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
     hint: 2,
    },
    {question: "Who won the 2022 US Open?",
     answers: ['A: Tiger Woods', 'B: Rory McIlroy', 'C: Matt Fitzpatrick'],
     correct: 2,
     correctInfo: 'This was Matt Fitzpatrick\'s first major golf championship title.',
     incorrectInfo: 'The correct answer was Matt Fitzpatrick.',
     hint: 1,
    },
    {question: 'How many times has Tiger Woods won the masters?',
    answers: ['A: 5', 'B: 3', 'C: 6'],
    correct: 0,
    correctInfo: 'Tiger Woods has won the masters 5 times, and ranks just one below Jack Nicklaus with 6 wins.',
    incorrectInfo: 'The correct answer is Tiger Woods.',
    hint: 2,
    },
    {question: 'Who won the 2022 US Women\'s Open Golf Championship?',
    answers: ['A: Mina Harigae', 'B: Minjee Lee', 'C: Nelly Korda'],
    correct: 1,
    correctInfo: 'This was Minjee Lee\'s second major title win. She won by four strokes!',
    incorrectInfo: 'The correct answer is Minjee Lee.',
    hint: 0,
    },
    {question: 'Who was the first woman golfer to play in a men\'s PGA tour event?',
    answers: ['A: Annika Sorenstam', 'B: Babe Didrikson Zaharias', 'C: Michelle Wie'],
    correct: 1,
    correctInfo: 'Babe Didrikson Zaharias competed in the men\'s PGA tour in 1945.',
    incorrectInfo: 'The correct answer is Babe Didrikson Zaharias.',
    hint: 2,
    },
    {question: 'Where did golf originate?',
    answers: ['A: England', 'B: United States', 'C: Scotland'],
    correct: 2,
    correctInfo: 'Golf was first documented being played in Scotland in 1457.',
    incorrectInfo: 'The correct answer is Scotland.',
    hint: 1,
    },
    {question: 'When was the LPGA founded?',
    answers: ['A: 1950', 'B: 1990', 'C: 1970'],
    correct: 0,
    correctInfo: 'The LPGA is one of the longest-running women\'s professional sports association in the world.',
    incorrectInfo: 'The correct answer is 1950.',
    hint: 1,
    },
    {question: 'Which women golfer won the most major championships?',
    answers: ['A: Annika Sorenstam', 'B: Mickey Wright', 'C: Patty Berg'],
    correct: 2,
    correctInfo: 'Patty Berg won a total of 15 LPGA major championship.',
    incorrectInfo: 'The correct answer is Patty Berg.',
    hint: 0,
    },
    {question: 'Since 1970, who was the youngest person to win a PGA tour championship?',
    answers: ['A: Jordan Spieth', 'B: Tiger Woods', 'C: Rory McIlroy'],
    correct: 0,
    correctInfo: 'Jordan Spieth was 19 years old when he won the Deere in 2013.',
    incorrectInfo: 'The correct answer is Jordan Spieth.',
    hint: 2,
    },
    {question: 'What is the only major Rory McIlroy hasn\'t won?',
    answers: ['A: US Open', 'B: The Masters', 'C: The PGA Championship'],
    correct: 1,
    correctInfo: 'Rory McIlroy came extremely close to winning the Masters in 2022, but came in second.',
    incorrectInfo: 'The correct answer is the Masters.',
    hint: 0,
    },
    {question: 'What is an albatross?',
    answers: ['A: Double par', 'B: Hole in one', 'C: 3 under par on a hole'],
    correct: 2,
    correctInfo: 'Albatross is also synonymous to a double eagle.',
    incorrectInfo: 'The correct answer is albatross',
    hint: 0,
    },
    {question: 'Which golf course is the oldest course in the world?',
    answers: ['A: Saint Andrews Old Course', 'B: Pebble Beach', 'C: Kinghorn Golf Club'],
    correct: 0,
    correctInfo: 'Golf has been played at the Saint Andrews Old Course, located in Scotland, since 1552.',
    incorrectInfo: 'The correct answer is Saint Andrews Old Course.',
    hint: 2,
    }, 
    {question: 'What is Tiger Woods\' real first name?',
    answers: ['A: John', 'B: Eldrick', 'C: Terry'],
    correct: 1,
    correctInfo: 'Tiger got the nickname from his father in honor of his lost friend in Vietnam.',
    incorrectInfo: 'The correct answer is Eldrick.',
    hint: 0,
    }, 
    {question: 'In what year was golf first included in the US Olympics?',
    answers: ['A: 2000', 'B: 1950', 'C: 1900'],
    correct: 2,
    correctInfo: 'Golf has only been played in the 1900, 1904, 1908, 2016 and 2020 Olympics.',
    incorrectInfo: 'The correct answer is 1900.',
    hint: 1,
    }, 
    {question: 'What does birdie mean in golf?',
    answers: ['A: One stroke less than par', 'B: Two strokes less than par', 'C: Hole in one'],
    correct: 0,
    correctInfo: 'In the 19th century, the term "bird" meant "cool" or "excellent".',
    incorrectInfo: 'The correct answer is one stroke less than par.',
    hint: 2,
    }, 
]
//============================================================================

//Global Variables
let questionsCorrect = 0
let questionCount = 0
let randomQuestion = Math.floor(Math.random()*questions.length);
let question = []
// let timer;

//Question functionality
playGameButton.addEventListener('click', questionsAppear)
nextButton.addEventListener('click', questionsAppear)


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
    body.style.backgroundColor = 'lightgray';
    //Results message
    if (questions.length === 0) {
        if (questionsCorrect === 1) {
            let exitMessage = `Congrats, ${nameInput.value}! You got ${questionsCorrect} question correct! Play again and challenge your friends.`
            questionSlot.innerText = exitMessage;
        } else if (questionsCorrect === 0) {
            let exitMessage = `Oh no, ${nameInput.value}, you didn't get any correct! Looks like you need to study more. Play again to see if you can beat your score.`
            questionSlot.innerText = exitMessage;
        } else {
            let exitMessage = `Congrats, ${nameInput.value}! You got ${questionsCorrect} question correct! Play again and challenge your friends.`
            questionSlot.innerText = exitMessage;
        }
        answer0.style.display = 'none';
        answer1.style.display = 'none';
        answer2.style.display = 'none';
        backButton.style.display = 'flex';
    } 
    // timer = 59
    // clearInterval(timer)
    let startingMinutes = 2;
    let time = startingMinutes * 60;
    setInterval(updateCountdowon, 1000)
    function updateCountdowon () {
        let minutes = Math.floor(time/60);
        let seconds = time % 60;
        time --;
        countdownEl.innerHTML = `${minutes}:${seconds}`
    }
    // setInterval ( function () {
    //     time --
    //     displayTime
    //     for (let i=59; i>-1; i--) {
    //     countdown.innerText = (i)
    //     console.log(i);
    // }}, 1000)
    //re-call randomQuestion 
    randomQuestion = Math.floor(Math.random()*questions.length);
    //display questions
    triviaSection.style.display='block';
    questionSlot.style.display = 'flex';
    questionsNav.style.display = 'flex';
    scoreNav.innerText = `Score: ${questionsCorrect}`
    question = questions[randomQuestion]
    questionSlot.innerText = question.question
    //display answer options
    answerSlot.style.display = 'block';
    answer0.style.display = 'block';
    answer1.style.display = 'block';
    answer2.style.display = 'block';
    questionAnswerA = questions[randomQuestion].answers[0];
    questionAnswerB = questions[randomQuestion].answers[1];
    questionAnswerC = questions[randomQuestion].answers[2];
    answer0.innerText = questionAnswerA;
    answer1.innerText = questionAnswerB;
    answer2.innerText = questionAnswerC;
    //update question count for nav bar
    questionCount += 1
    questionCountNav.innerText = `Question: ${questionCount}/15`
}
//Sound function
function playPause () {
    if (soundCount === '-1') {
        soundCount = '1';
        console.log('play')
        mastersSound.play(); 
        soundButton.innerText = 'Sound: 🔊'
    } else if (soundCount === '1') {
        soundCount = '-1';
        console.log('pause')
        mastersSound.pause()
        soundButton.innerText = 'Sound: 🔇'
    }
}

//Hint button functionality

hintButton.addEventListener('click', displayHint)
function displayHint () {
    question = questions[randomQuestion]
    let questionHint = question.hint
    if (questionHint === 0) {
        answer0.style.textDecoration = 'line-through'
        answer0.style.backgroundColor = 'lightcoral'
    } else if (questionHint === 1) {
        answer1.style.textDecoration = 'line-through'
        answer1.style.backgroundColor = 'lightcoral'
    } else if (questionHint === 2) {
        answer2.style.textDecoration = 'line-through'
        answer2.style.backgroundColor = 'lightcoral'
    }
}

//selecting answers
answer0.addEventListener('click', answerSelection)
answer1.addEventListener('click', answerSelection)
answer2.addEventListener('click', answerSelection)

function answerSelection (evt) {
    //if button selected matches the value in 'correct' background turns green and response modal appears
        if (evt.target.id[6] == questions[randomQuestion].correct) {
        //change correct answer background color to green
        evt.target.style.backgroundColor = 'lightgreen'
        correctSound.play()
        setTimeout (function() {
            //correct modal appears
            answerModal.style.display = 'block';
            correctModal.style.display = 'block';
            incorrectModal.style.display = 'none';
            //add in the additional information from questions object
            answerDetails.innerText = question.correctInfo
            //add to questions correct score, if answer is correct
            questionsCorrect = questionsCorrect + 1;
            // console.log(questionsCorrect, '# Correct')
        }, 200)
    } else {
        //if incorrect, background changes to lightcoral
        evt.target.style.backgroundColor = 'lightcoral';
        incorrectSound.play();
        setTimeout (function() {
            //incorrect modal appears
            answerModal.style.display = 'block';
            incorrectModal.style.display = 'block';
            correctModal.style.display = 'none';
            //add in the additional information from questions object
            answerDetails.innerText = question.incorrectInfo
        }, 200)
    }
    //remove the question that was asked from the array so the questions won't repeat
    questions.splice(randomQuestion, 1)
}
//if golf trivia is selected, the main page appears
function returnHome () {
    //return to the main page
    questionSlot.style.display = 'none';
    answerSlot.style.display = 'none';
    mainPage.style.display = 'block';
    questionsNav.style.display = 'none';
    triviaSection.style.display = 'none';
    //re-set all values
    questionsCorrect=0;
    questionCount=0;
    nameInput.value = '';
    //since questions were spliced out in the answer function, we now have to re-input all the questions
    questions=[
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
        },]
}
backButton.addEventListener('click', returnHome)


