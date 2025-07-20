// Computer choice function.
function getComputerChoice() {
    // DETERMINE value by using math floor.
    let value = Math.floor(Math.random() * 3) + 1;
    let choice;
    // DETERMINE choice by the value.
    switch (value) {
        // Case 1 is equal to rock.
        case 1:
            choice = 'rock';
            break;
        // Case 2 is equal to paper.
        case 2:
            choice = 'paper';
            break;
        // Case 3 is equal to scissors.
        case 3:
            choice = 'scissors';
            break;
    }
    // return choice.
    return choice;
}

// adding for human score.
function addHumanScore(humanChoice, computerChoice, humanScore) {
    content.textContent = `Computer: ${computerChoice} < Human: ${humanChoice}`;
    body.appendChild(content);
    return humanScore + 1;
}

function declareTie () {
    content.textContent = 'Tie';
    body.appendChild(content);
}

function addComputerScore (computerChoice, humanChoice, computerScore) {
    content.textContent = `Computer: ${computerChoice} > Human: ${humanChoice}`;
    body.appendChild(content);
    return computerScore + 1;
}

function displayScore (humanTotalScore, computerTotalScore) {
    score.textContent = `Computer: ${computerTotalScore} Human: ${humanTotalScore}`;
    body.appendChild(score);
}

// Playing function
function playRound(humanChoice, computerChoice) {
    if (gameOver) return;

    // IF rock against scissors, rock wins
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanTotalScore = addHumanScore(humanChoice, computerChoice, humanTotalScore);
    // ELSEIF paper against rock, paper wins
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanTotalScore = addHumanScore(humanChoice, computerChoice, humanTotalScore);
    // ELSEIF scissors against paper, scissors wins
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanTotalScore = addHumanScore(humanChoice, computerChoice, humanTotalScore);
    // ELSEIF choice are similar
    } else if (humanChoice === computerChoice) {
        declareTie();
    // ELSE player lose
    } else {
        computerTotalScore = addComputerScore(computerChoice, humanChoice, computerTotalScore); 
    }
    displayScore(humanTotalScore, computerTotalScore);

    if (humanTotalScore === 5) {
        gameOver = true;
        winner.textContent = 'Human Wins!'
        body.appendChild(winner);
        return restartMessage();
    } else if (computerTotalScore === 5){
        gameOver = true;
        winner.textContent = 'Computer Wins!'
        body.appendChild(winner);
        return restartMessage();
    }
}

function restartMessage() {
    content.textContent = '';
    const tryAgain = document.createElement('button');
    tryAgain.textContent = 'Try again?';
    body.appendChild(content);
    winner.appendChild(tryAgain);
    return resetGame(tryAgain);
}

function resetGame(tryAgain) {
    tryAgain.addEventListener('click', () => {
        humanTotalScore = 0;
        computerTotalScore = 0;
        gameOver = false;
        tryAgain.parentNode.innerHTML = '';
        displayScore(humanTotalScore, computerTotalScore);
    })
}

function playGame() {
    const btns = document.querySelectorAll('button');
        btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
            playRound(e.target.textContent.toLowerCase(), getComputerChoice());
        })
    });
}
let humanTotalScore = 0;
let computerTotalScore = 0;
const score = document.createElement('div');
const content = document.createElement('div');
const winner = document.createElement('div')
const body = document.querySelector('body');
let gameOver = false;
playGame();