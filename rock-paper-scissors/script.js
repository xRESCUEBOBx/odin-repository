let playerScore = Number("");
let computerScore = Number("");
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const resultDiv = document.createElement("div");
const buttonDiv = document.createElement("div");
document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);
document.body.appendChild(buttonDiv);
document.body.appendChild(resultDiv);
rockButton.classList.add("rock-button-js");
paperButton.classList.add("paper-button-js");
scissorsButton.classList.add("scissors-button-js");
rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";
buttonDiv.appendChild(rockButton);
buttonDiv.appendChild(paperButton);
buttonDiv.appendChild(scissorsButton);
resultDiv.textContent = "Go ahead! Start the game if you aren't chicken!";

rockButton.addEventListener("click", () => {
  playGame("rock");
});
paperButton.addEventListener("click", () => {
  playGame("paper");
});
scissorsButton.addEventListener("click", () => {
  playGame("scissors");
});

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

function playGame(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();

  let result;

  if (playerSelection === "rock") {
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

  if (playerSelection === "paper") {
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

  if (playerSelection === "scissors") {
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

  resultDiv.textContent = `You picked ${playerSelection},
  computer picked ${computerSelection}.
  The Score is currently
  player:${playerScore} 
  computer:${computerScore}
  `;

  if (playerScore >= 5) {
    resultDiv.textContent = "Great job you won! Play that bastard again!";
    playerScore = 0;
    computerScore = 0;
    return;
  } else if (computerScore >= 5) {
    resultDiv.textContent =
      "Wow can't believe you let a machine beat you.. try again I guess.";
    playerScore = 0;
    computerScore = 0;
    return;
  }

  return result;
}

/*
for (let i = 0; i <= 100; i++) {
  playGame();

  if (playerScore === 5 || computerScore === 5) {
    resultDiv.textContent = `Game Over X./'^'\.X
    Player Score:${playerScore}
    Computer Score${computerScore}
    Refresh the page to play again!
    `;
    break;
  }
}
*/
