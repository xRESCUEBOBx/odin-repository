let playerScore = Number("");
let computerScore = Number("");

function playGame(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();

  playerSelection = prompt("rock paper or scissors?");
  let result;

  if (playerSelection.toLowerCase() === "rock") {
    if (computerSelection === "rock") {
      result = "You Tied!";
      console.log(`${result}, Gonna let it end like this..`);
    } else if (computerSelection === "paper") {
      result = "You Lose!";
      console.log(`${result}, Too Bad Try Again!`);
    } else if (computerSelection === "scissors") {
      result = "You Win!";
      console.log(`${result}, Great Job Play Another!`);
    }
  }

  if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection === "rock") {
      result = "You Win!";
      console.log(`${result}, Great Job Play Another!`);
    } else if (computerSelection === "paper") {
      result = "You Tied!";
      console.log(`${result}, Gonna let it end like this..`);
    } else if (computerSelection === "scissors") {
      result = "You Lose!";
      console.log(`${result}, Too Bad Try Again!`);
    }
  }

  if (playerSelection.toLowerCase() === "scissors") {
    if (computerSelection === "rock") {
      result = "You Lose!";
      console.log(`${result}, Too Bad Try Again!`);
    } else if (computerSelection === "paper") {
      result = "You Win!";
      console.log(`${result}, Great Job Play Another!`);
    } else if (computerSelection === "scissors") {
      result = "You Tied!";
      console.log(`${result}, Gonna let it end like this..`);
    }
  }

  if (result === "You Win!") {
    playerScore++;
  } else if (result === "You Lose!") {
    computerScore++;
  }

  console.log(`You picked ${playerSelection}, 
  computer picked ${computerSelection}.
  The Score is currently
  player:${playerScore} 
  computer${computerScore}.
  `);

  return result;
}

function getComputerChoice(computerChoice) {
  computerChoice = Math.random();

  if (computerChoice <= 1 / 3) {
    computerChoice = "rock";
  } else if (computerChoice > 1 / 3 && computerChoice <= 2 / 3) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  console.log(computerChoice);
  return computerChoice;
}

for (let i = 0; i <= 100; i++) {
  playGame();

  if (playerScore === 5 || computerScore === 5) {
    console.log(`Game Over X./'^'\.X
    Player Score:${playerScore}
    Computer Score${computerScore}
    Refresh the page to play again!
    `);
    break;
  }
}
