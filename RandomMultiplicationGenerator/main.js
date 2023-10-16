let currentScore = 0;
let numX = 5; //? DEFAULT VALUE
let numY = 3; //? DEFAULT VALUE

let correctAnswer = numX * numY;

const GenerateNumbers = {
    generateNumX: () => {
        return Math.floor( (Math.random() * 10) + 1);
    },
    generateNumY: () => {
        return Math.floor( (Math.random() * 10) + 1);
    }
}

//? Event Listeners

document.querySelector('.submit-btn').onclick = () => {
    correctAnswer == document.querySelector('#user-answer').value ? updateAllValues('+') : updateAllValues('-');
}

document.addEventListener('DOMContentLoaded', () => {
    currentScore = JSON.parse( window.localStorage.getItem('currentScore') );
    if (currentScore === null) {
        document.querySelector('.current-score').textContent = 0;
    } else {
        document.querySelector('.current-score').textContent = currentScore;
    }
});

//? Helper Functions

function generateNewMultiplicationQuestion() {
    numX = GenerateNumbers.generateNumX();
    numY = GenerateNumbers.generateNumY();

    document.querySelector('.random-question').textContent = `What is ${numX} multiply by ${numY}?`;

    return correctAnswer = numX * numY;
}
generateNewMultiplicationQuestion();

function updateAllValues(operator) {
    operator === '-' ? --currentScore : ++currentScore;
    document.querySelector('.current-score').textContent = currentScore;
    generateNewMultiplicationQuestion();
    window.localStorage.setItem( 'currentScore', JSON.stringify(currentScore) );
    document.querySelector('#user-answer').value = '';
}