/* Game Function:
- player must guess a number between a min and max
- player gets a certain amount of guesses
- notify player of guess remaining
- notify the player of the correct answer if loose
- let player choose to play again
*/


// game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;


// ui elements
const gameWrapper = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// assign ui min and max
minNum.textContent = min
maxNum.textContent = max


// listen for guess btn
guessBtn.addEventListener('click', function() {
    
    // get input value and convert it to number
    let guess = parseInt(guessInput.value)

    // validate input
    if(isNaN(guess) || guess < min || guess > max) { //isNaN() => when the value isnt a number .. in this case it's about empty field

        // tell the user the rules
        setMessage(`Please enter a number between ${min} and ${max}`, 'red') // 2 args used here => msg & color

    }

    // check if won
    if(guess === winningNum) {

        //disable input
        guessInput.disabled = true

        // change input border to green
        guessInput.style.borderColor = 'green'

        // tell the user that they won
        setMessage(`YOU WIN! ${winningNum} is correct!`, 'green')
    } else {

        // in case of wrong number => takes a a life away
        guessesLeft -= 1

        // check if there's still any life left
        if(guessesLeft === 0) {

            // game over
            //disable input
        guessInput.disabled = true

        // change input border to green
        guessInput.style.borderColor = 'red'

        // tell the user that they won
        setMessage(`GAME OVER! The correct number was ${winningNum}`, 'red')


        } else {

            // continue game

            // change input border to green
            guessInput.style.borderColor = 'red'

            // clear the input field
            guessInput.value = ''

            // tell user it's the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left `, 'red')

        }

    }
})


// set a message function
function setMessage(msg, color) {
    message.style.color = color
    message.textContent = msg
}