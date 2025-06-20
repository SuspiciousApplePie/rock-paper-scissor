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
        // Case 3 is equal to scissor.
        case 3:
            choice = 'scissor';
            break;
    }
    // return choice.
    return choice;
}

// Human choice function.
function getHumanChoice() {
    // OBTAIN player choice by prompting.
    let choice = prompt('Rock? Paper? or Scissor?: ');
    // return user choice.
    return choice.toLowerCase();
}

// adding for human score.
function addHumanScore(humanChoice, computerChoice) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
}

// Playing function
function playRound(humanChoice, computerChoice, humanTotalScore, computerTotalScore) {
    console.clear();
    // IF rock against scissor, rock wins
    if (humanChoice === 'rock' && computerChoice == 'scissor') {
        addHumanScore(humanChoice, computerChoice);
        humanTotalScore += 1;
    // ELSEIF paper against rock, paper wins
    } else if (humanChoice === 'paper' && computerChoice == 'rock') {
        addHumanScore(humanChoice, computerChoice);
        humanTotalScore += 1;
    // ELSEIF scissor against paper, scissor wins
    } else if (humanChoice === 'scissor' && computerChoice == 'paper') {
        addHumanScore(humanChoice, computerChoice);
        humanTotalScore += 1;
    // ELSEIF choice are similar
    } else if (humanChoice === computerChoice) {
        console.log('It is a tie!');
    // ELSE player lose
    } else {
        console.log(`You lose ${computerChoice} beats ${humanChoice}`);
        computerTotalScore += 1;
    };

    // If totalScore from either player is equal to 5 returns winner, ELSE run again.
    if (humanTotalScore === 5) {
        return 'Winner: Human';
    } else if (computerTotalScore === 5) {
        return 'Winner: Computer';
    } else {
        // Display current score.
        console.log(`Score
                     User: ${humanTotalScore}
                     Computer: ${computerTotalScore}
                    `);
        computerSelect = getComputerChoice();
        humanSelect = getHumanChoice();
        return playRound(humanSelect, computerSelect, humanTotalScore, computerTotalScore);
    }
}

function playGame() {
    // Initialize human, and computer score.
    let humanScore = 0, computerScore = 0;
    // CALL playround and RETURN winner
    winner = playRound(humanSelect, computerSelect, humanScore, computerScore);
    // SHOW the winner
    console.log(winner);
}
// Variable for choice functions
let computerSelect = getComputerChoice();
let humanSelect = getHumanChoice();
// Initialize game
playGame();
