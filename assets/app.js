
function getRandomNumber(min, max) {
    max = max + 1;
    return Math.floor(Math.random() * (max - min) + min);
}

const number = getRandomNumber(1, 10)
let steps = 1;
let allUserNumbers = [];



document.querySelector('#guess-value').addEventListener('click', guessNumber);

function guessNumber(e) {
    const massege = document.querySelector('.message');
    const input = document.querySelector('#guess-input');
    const userNumber = parseFloat(input.value);
    let leftSteps = 3 - steps;
    
        if (userNumber > 10 || userNumber < 1) {
        showError('Your number should be from 1 to 10. Try again.');
        
        } else if(input.value !== '' && leftSteps !== 0) {

            if(userNumber === number) {
                input.style.borderColor = 'green';
                input.setAttribute('disabled', true);
                massege.innerHTML = 'You are the winner!';

            } else {
                allUserNumbers.push(userNumber);
                massege.innerHTML = `Not right. You have ${leftSteps} steps left. Your numbers: ${allUserNumbers.join(', ')}`;
                steps++;
            } 
            
        } else if (leftSteps === 0) {
            input.style.borderColor = 'red';
            input.setAttribute('disabled', true);
            massege.innerHTML = `You loose. The winner number was ${number}`;
        }
         else {
            showError('Please, type your guessing number.');
        }
        input.value = '';
    

    e.preventDefault();
}

function showError(message) {

    const container = document.querySelector('.container');
    const game = document.querySelector('#game');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-error';
    errorDiv.appendChild(document.createTextNode(message));

    container.insertBefore(errorDiv, game);

    setTimeout(clearError, 4000);

    

}

function clearError() {
    document.querySelector('.alert-error').remove();
}