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



// guess = user; value = comp
export function doesUserWin(guess, itLandedOn) {

    if (guess === 'rock' && itLandedOn === 'lizard') {
        return [true, 'Rock crushes Lizard!'];
    } else if (guess === 'rock' && itLandedOn === 'scissors') {
        return [true, 'Rock crushes Scissors!'];
    } else if (guess === 'paper' && itLandedOn === 'spock') {
        return [true, 'Paper disproves Spock!'];
    } else if (guess === 'paper' && itLandedOn === 'rock') {
        return [true, 'Paper cover Rock!'];
    } else if (guess === 'scissors' && itLandedOn === 'paper') {
        return [true, 'Scissors cuts Paper!'];
    } else if (guess === 'scissors' && itLandedOn === 'lizard') {
        return [true, 'Scissors decapitates Lizard!'];
    } else if (guess === 'lizard' && itLandedOn === 'paper') {
        return [true, 'Lizard eats Paper!'];
    } else if (guess === 'lizard' && itLandedOn === 'spock') {
        return [true, 'Lizard poisons Spock!'];
    } else if (guess === 'spock' && itLandedOn === 'scissors') {
        return [true, 'Spock smashes Scissors!'];
    } else if (guess === 'spock' && itLandedOn === 'rock') {
        return [true, 'Spock vaporizes Rock!'];
    }

    return [false];
}

export function whenUserLoses(itLandedOn, guess) {

    if (itLandedOn === 'scissors' && guess === 'rock') {
        return 'Rock crushes Scissors!';
    } else if (itLandedOn === 'rock' && guess === 'scissors') {
        return 'Rock crushes Scissors!';
    } else if (itLandedOn === 'paper' && guess === 'spock') {
        return 'Paper disproves Spock!';
    } else if (itLandedOn === 'paper' && guess === 'rock') {
        return 'Paper covers Rock!';
    } else if (itLandedOn === 'scissors' && guess === 'paper') {
        return 'Scissors cuts Paper!';
    } else if (itLandedOn === 'scissors' && guess === 'lizard') {
        return 'Scissors decapitates Lizard!';
    } else if (itLandedOn === 'lizard' && guess === 'paper') {
        return 'Lizard eats Paper!';
    } else if (itLandedOn === 'lizard' && guess === 'spock') {
        return 'Lizard poisons Spock!';
    } else if (itLandedOn === 'spock' && guess === 'scissors') {
        return 'Spock smashes Scissors!';
    } else if (itLandedOn === 'spock' && guess === 'rock') {
        return 'Spock vaporizes Rock!';
    }
}