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
        return true;
    } else if (guess === 'rock' && itLandedOn === 'scissors') {
        return true;
    } else if (guess === 'paper' && itLandedOn === 'spock') {
        return true;
    } else if (guess === 'paper' && itLandedOn === 'rock') {
        return true;
    } else if (guess === 'scissors' && itLandedOn === 'paper') {
        return true;
    } else if (guess === 'scissors' && itLandedOn === 'lizard') {
        return true;
    } else if (guess === 'lizard' && itLandedOn === 'paper') {
        return true;
    } else if (guess === 'lizard' && itLandedOn === 'spock') {
        return true;
    } else if (guess === 'spock' && itLandedOn === 'scissors') {
        return true;
    } else if (guess === 'spock' && itLandedOn === 'rock') {
        return true;
    }
}