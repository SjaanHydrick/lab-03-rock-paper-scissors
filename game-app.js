import { randomThrow, doesUserWin } from './get-random-throw.js';

const button = document.querySelector('#shoot');
const resultSpan = document.querySelector('#result');
//const explainSpan = document.querySelector('#explain');
const winCount = document.querySelector('#wins');
const lossCount = document.querySelector('#losses');
const drawCount = document.querySelector('#draws');
const resetButton = document.querySelector('#reset');
const resetCount = document.querySelector('#reset-count');

let wins = 0;
let losses = 0;
let draw = 0;
let resets = 0;

button.addEventListener('click', () => {
    const thrownValue = randomThrow();

    const checkedValue = document.querySelector(':checked');
    const userGuess = checkedValue.value;

    console.log(userGuess);
    console.log(thrownValue);

    if (userGuess === thrownValue){
        draw++;

        drawCount.textContent = draw;
        resultSpan.textContent = 'It\'s a draw! Try again!';

    } else if (doesUserWin(userGuess, thrownValue)) {
        wins++;

        winCount.textContent = wins;
        resultSpan.textContent = 'You have emerged victorious!';

    } else if (!doesUserWin(userGuess, thrownValue)) {
        losses++;

        lossCount.textContent = losses;
        resultSpan.textContent = 'You were beaten! Try again!';
    }
});

resetButton.addEventListener('click', () => {
    resets++;

    wins = 0;
    losses = 0;
    draw = 0;

    resetCount.textContent = resets;
    winCount.textContent = wins;
    lossCount.textContent = losses;
    drawCount.textContent = draw;
});