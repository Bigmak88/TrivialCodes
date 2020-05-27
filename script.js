// Dom Elements to communicate with HTML
const startButton = document.getElementById('start-btn');
const skipButton = document.getElementById('skip-btn');
const questionEl = document.getElementById("question");
const scoreEl = document.getElementById("score");
const answerEl = document.getElementsByClassName('choice-text');



// create required variables/array for questions, timer, and score
let shuffledQuestions, currentQuestionIndex
let score = 0;
let timer = 90

let questions = [
    {
    question: "What is the color of the sky?",
    answers: [
        { text: 'Blue', correct: true },
        { text: 'Green', correct: false},
        { text: 'Red', correct: false},
        { text: 'Yellow', correct: false}
    ]
},
{
    question: "2+2 = ?",
    answers: [
        { text: '6', correct: false },
        { text: '10', correct: false},
        { text: '2', correct: false},
        { text: '4', correct: true}
    ]
},
{
    question: "Websites are made up of what languages?",
    answers: [
        { text: 'PHP and Ruby', correct: false },
        { text: 'HTML, CSS, and Javascript', correct: true},
        { text: 'Pig Latin and Numbers', correct: false},
        { text: 'GO, SQL, and Python', correct: false}
    ]
},
{
    question: "Which of the following is an example of an img tag in html?",
    answers: [
        { text: '<img>', correct: true },
        { text: 'img=', correct: false},
        { text: '<imgage />', correct: false},
        { text: 'image=', correct: false}
    ]
},
{
    question: "Which of the following is an example of an paragraph tag in html?",
    answers: [
        { text: '<p>', correct: true },
        { text: 'p=', correct: false},
        { text: '<para />', correct: false},
        { text: 'para=', correct: false}
    ]
},
{
    question: "Tesla is an ________ vehicle.",
    answers: [
        { text: 'gas', correct: false },
        { text: 'electric', correct: true},
        { text: 'hydrogen', correct: false},
        { text: 'diesel', correct: false}
    ]
},
{
    question: "SpaceX and Nasa are sending passengers up to the ISS on what date?",
    answers: [
        { text: 'June 1st 2020', correct: false },
        { text: 'July 30th 2020', correct: false},
        { text: 'May 27th 2020', correct: true},
        { text: 'August 13th 2020', correct: false}
    ]
},
{
    question: "10 x 10 = ?",
    answers: [
        { text: '60', correct: false },
        { text: '1000', correct: false},
        { text: '20', correct: false},
        { text: '100', correct: true}
    ]
},
{
    question: "What gaming console does Microsoft make?",
    answers: [
        { text: 'Playstation', correct: false },
        { text: 'Stadia', correct: false},
        { text: 'Xbox', correct: true},
        { text: 'Switch', correct: false}
    ]
},
{
    question: "What band did Freddie Mercury sing for?",
    answers: [
        { text: 'Eagles', correct: false },
        { text: 'Queen', correct: true},
        { text: 'Beetles', correct: false},
        { text: 'Journey', correct: false}
    ]
},
{
    question: "What is the theory of special relativity?",
    answers: [
        { text: 'E = mc²', correct: true },
        { text: 'a²+b²=c²', correct: false},
        { text: 'A=l²', correct: false},
        { text: 'V=s^3', correct: false}
    ]
},
{
    question: "Don Henley, Don Felder, Glenn Frey wrote what famous song together?",
    answers: [
        { text: 'Forever Young', correct: false },
        { text: 'Only the lonely', correct: true},
        { text: 'Hotel California', correct: false},
        { text: 'Uptown Girl', correct: false}
    ]
},
{
    question: "'Faithfully' is performed by what famous band?",
    answers: [
        { text: 'Eagles', correct: false },
        { text: 'Queen', correct: false},
        { text: 'Beetles', correct: false},
        { text: 'Journey', correct: true}
    ]
}
];

// Function that starts the game
startButton.addEventListener('click', startGame);
skipButton.addEventListener('click', () => {
    currentQuestionIndex++
    getNextQuestion()
});

function startGame() {
    console.log('started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0;
    questionEl.classList.remove('hide');
    setInterval(function() {
        timer -= 1;
        document.getElementById('timer').innerText = timer;
    // display time on screen
    // check if timer is 0
        if (timer === 0) {
    // stop the quiz
        }
    }, 1000);

    getNextQuestion();
    
}

function getNextQuestion() {
    resetState();
    showQuestions(shuffledQuestions[currentQuestionIndex]);
    // answerEl[index].appendChild(button);

}



function showQuestions(question) {
    console.log(question);
    questionEl.innerText = question.question
    console.log(question)
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer.text
        button.classList.add('btn')
        button.setAttribute('correct', answer.correct);
        button.addEventListener('click', selectAnswer);
        answerEl[index].innerHTML = '';
        answerEl[index].appendChild(button);
    })
}

function resetState() {
    skipButton.classList.add('hide')
    while (answerEl.firstChild) {
        answerEl.removeChild
        (answerEl.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = (e.currentTarget.getAttribute('correct'));

    if (correct == 'false') {
        console.log('worked')
        timer -= 10;
    } else {
        score ++;
    }

    currentQuestionIndex += 1;
    getNextQuestion();

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
       if (correct) {
           element.classList.add('correct') 
       } else {
           element.classList.add('wrong')
       }
}

function displayHighScores() {
    var scores = JSON.parse(localStorage.getItem('scores')) || [];
    scores.push(scoreEl);
    localStorage.setItem('scores', JSON.stringify(scores));
}
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}



//Function to refresh questions


//End of game
