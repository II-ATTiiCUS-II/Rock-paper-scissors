
const getuserChoice = userInput => {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Please type: Rock, paper, scissors or guess the secret code word!')
    }
};

const getcomputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)

    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'This game is tied!';
    };

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Unlucky, the computer wins!';
        } else {
            return 'Congratulations you win!';
        }
    };

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer wins this time! Try again!';
        } else {
            return 'Awesome, you win!';
        }
    };

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return "NOOOO! You let the computer win, didn't you?";
        } else {
            return 'You are AWESOME at this game, you win!';
        }
    };

    if (userChoice === 'bomb') {
        return "Awesome job, you found the secret code word. You win! The computer never stood a chance!";
    }
};

const playGame = () => {
const userChoice = getuserChoice('bomb');
const computerChoice = getcomputerChoice();

console.log('You threw: ' + userChoice);
console.log('The computer threw: ' + computerChoice);
console.log(determineWinner(userChoice, computerChoice));
};

playGame();