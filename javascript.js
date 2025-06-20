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

// Initialize human, and computer score.
let humanScore = 0, computerScore = 0;


