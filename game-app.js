import { randomThrow, doesUserWin } from './get-random-throw';

const button = document.querySelector('#shoot');
const resultSpan = document.querySelector('#result');
const explainSpan = document.querySelector('#explain');
const winCount = document.querySelector('#wins');
const lossCount = document.querySelector('#losses');
const drawCount = document.querySelector('#draws');
const percentSpan = document.querySelector('#percent');
const resetButton = document.querySelector('#reset');

let wins = 0;
let losses = 0;
let draw = 0;
let total = 0;

button.addEventListener('click', () => {
    const thrownValue = randomThrow();

    const checkedValue = document.querySelector(':checked');
    const userGuess = checkedValue.value;

    if (doesUserWin(userGuess, checkedValue)) {
        wins++;
        total++;

        winCount.textContent = wins;
        percentSpan.textContent = `${(wins / total) * 100}%`;
        resultSpan.textContent = 'You have emerged victorious!';
    } else if () {
        //doesUserWin(userGuess, thrownValue)

    }
});