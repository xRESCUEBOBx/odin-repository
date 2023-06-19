function getComputerMove(computerMove) {
  let move = Math.random();

  if (move <= 1 / 3) {
    computerMove = "rock";
  } else if (move > 1 / 3 && move <= 2 / 3) {
    computerMove = "paper";
  } else if (move > 2 / 3) {
    computerMove = "scissors";
  }
  console.log("Computer picked " + computerMove);
  return computerMove;
}

function getPlayerMove(playerMove) {
  const computerMove = getComputerMove();
  let result = "";

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie!";
    } else if (computerMove === "paper") {
      result = "You Lose!";
    } else if (computerMove === "scissors") {
      result = "You Win!";
    }
    console.log(result);
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You Win!";
    } else if (computerMove === "paper") {
      result = "Tie!";
    } else if (computerMove === "scissors") {
      result = "You Lose!";
    }
    console.log(result);
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose!";
    } else if (computerMove === "paper") {
      result = "You Win!";
    } else if (computerMove === "scissors") {
      result = "Tie!";
    }
    console.log(result);
  }

  console.log("You picked " + playerMove);

  return playerMove;
}

document.querySelector(".js-rock-button").addEventListener("click", () => {
  getPlayerMove("rock");
});

document.querySelector(".js-paper-button").addEventListener("click", () => {
  getPlayerMove("paper");
});
document.querySelector(".js-scissors-button").addEventListener("click", () => {
  getPlayerMove("scissors");
});
