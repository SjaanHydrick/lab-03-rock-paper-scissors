export function randomThrow() {

    const randomNumber = Math.ceil(Math.random() * 5);

    let itLandedOn;

    if (randomNumber === 1) {
        itLandedOn = 'rock';
    } else if (randomNumber === 2) {
        itLandedOn = 'paper';
    } else if (randomNumber === 3) {
        itLandedOn = 'scissors';
    } else if (randomNumber === 4) {
        itLandedOn = 'lizard';
    } else if (randomNumber === 5) {
        itLandedOn = 'spock';
    }

    return itLandedOn;
}

const explainSpan = document.querySelector('#explain');

// guess = user; value = comp
export function doesUserWin(guess, itLandedOn) {
    explainSpan.style.color = 'dodgerblue';
    if (guess === 'rock' && itLandedOn === 'lizard') {
        explainSpan.textContent = 'Rock crushes Lizard!';
        return true;
    } else if (guess === 'rock' && itLandedOn === 'scissors') {
        explainSpan.textContent = 'Rock crushes Scissors!';
        return true;
    } else if (guess === 'paper' && itLandedOn === 'spock') {
        explainSpan.textContent = 'Paper disproves Spock!';
        return true;
    } else if (guess === 'paper' && itLandedOn === 'rock') {
        explainSpan.textContent = 'Paper covers Rock!';
        return true;
    } else if (guess === 'scissors' && itLandedOn === 'paper') {
        explainSpan.textContent = 'Scissors cuts Paper!';
        return true;
    } else if (guess === 'scissors' && itLandedOn === 'lizard') {
        explainSpan.textContent = 'Scissors decapitates Lizard!';
        return true;
    } else if (guess === 'lizard' && itLandedOn === 'paper') {
        explainSpan.textContent = 'Lizard eats Paper!';
        return true;
    } else if (guess === 'lizard' && itLandedOn === 'spock') {
        explainSpan.textContent = 'Lizard poisons Spock!';
        return true;
    } else if (guess === 'spock' && itLandedOn === 'scissors') {
        explainSpan.textContent = 'Spock smashes Scissors!';
        return true;
    } else if (guess === 'spock' && itLandedOn === 'rock') {
        explainSpan.textContent = 'Spock vaporizes Rock!';
        return true;
    }
}

export function whenUserLoses(itLandedOn, guess) {
    explainSpan.style.color = 'red';
    if (itLandedOn === 'scissors' && guess === 'rock') {
        explainSpan.textContent = 'Rock crushes Scissors!';
    } else if (itLandedOn === 'rock' && guess === 'scissors') {
        explainSpan.textContent = 'Rock crushes Scissors!';
    } else if (itLandedOn === 'paper' && guess === 'spock') {
        explainSpan.textContent = 'Paper disproves Spock!';
    } else if (itLandedOn === 'paper' && guess === 'rock') {
        explainSpan.textContent = 'Paper covers Rock!';
    } else if (itLandedOn === 'scissors' && guess === 'paper') {
        explainSpan.textContent = 'Scissors cuts Paper!';
    } else if (itLandedOn === 'scissors' && guess === 'lizard') {
        explainSpan.textContent = 'Scissors decapitates Lizard!';
    } else if (itLandedOn === 'lizard' && guess === 'paper') {
        explainSpan.textContent = 'Lizard eats Paper!';
    } else if (itLandedOn === 'lizard' && guess === 'spock') {
        explainSpan.textContent = 'Lizard poisons Spock!';
    } else if (itLandedOn === 'spock' && guess === 'scissors') {
        explainSpan.textContent = 'Spock smashes Scissors!';
    } else if (itLandedOn === 'spock' && guess === 'rock') {
        explainSpan.textContent = 'Spock vaporizes Rock!';
    }
}

export function whenUserDraws(itLandedOn, guess) {
    explainSpan.style.color = 'gold';
    if (itLandedOn === guess) {
        explainSpan.textContent = 'It\'s a draw! Try again!';
    }
}