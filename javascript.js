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

// Playing function
function playRound(humanChoice, computerChoice) {
    // IF rock against scissor, rock wins
    if (humanChoice === 'rock' && computerChoice == 'scissor') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    // ELSEIF paper against rock, paper wins
    } else if (humanChoice === 'paper' && computerChoice == 'rock') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    // ELSEIF scissor against paper, scissor wins
    } else if (humanChoice === 'scissor' && computerChoice == 'paper') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    // ELSEIF choice are similar
    } else if (humanChoice === computerChoice) {
        console.log('It is a tie!');
    // ELSE player lose
    } else {
        console.log(`You lose ${computerChoice} beats ${humanChoice}`);
    };
    console.log(humanChoice, computerChoice)
}