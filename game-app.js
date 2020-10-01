import { randomThrow, doesUserWin, whenUserLoses, whenUserDraws } from './get-random-throw.js';

const button = document.querySelector('#shoot');
const resultSpan = document.querySelector('#result');
const winCount = document.querySelector('#wins');
const lossCount = document.querySelector('#losses');
const drawCount = document.querySelector('#draw');
const resetButton = document.querySelector('#reset');
const resetCount = document.querySelector('#reset-count');
const textDiv = document.getElementById('text');

let wins = 0;
let losses = 0;
let draw = 0;
let resets = 0;

button.addEventListener('click', () => {
    textDiv.style.visibility = 'visible';
    const thrownValue = randomThrow();

    const checkedValue = document.querySelector(':checked');
    const userGuess = checkedValue.value;

    console.log(userGuess);
    console.log(thrownValue);

    if (userGuess === thrownValue){
        whenUserDraws(userGuess, thrownValue);
        draw++;

        drawCount.textContent = draw;
        resultSpan.style.color = 'gold';
        resultSpan.textContent = '';

    } else if (doesUserWin(userGuess, thrownValue)) {
        wins++;

        winCount.textContent = wins;
        resultSpan.style.color = 'dodgerblue';
        resultSpan.textContent = 'You have emerged victorious!';

    } else if (!doesUserWin(userGuess, thrownValue)) {
        whenUserLoses(thrownValue, userGuess);
        losses++;

        lossCount.textContent = losses;
        resultSpan.style.color = 'red';
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

    textDiv.style.visibility = 'hidden';
});