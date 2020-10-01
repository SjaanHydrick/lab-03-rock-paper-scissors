// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { randomThrow, doesUserWin } from '../get-random-throw.js';

const test = QUnit.test;

test('randomThrow will return a string when used', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    //Act 
    // Call the function you're testing and set the result to a const

    const actual = randomThrow(4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(typeof actual, 'string');
});

test('doesUserWin will work', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guess = 'paper';
    const computer = 'spock';
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const

    const actual = doesUserWin(guess, computer);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});