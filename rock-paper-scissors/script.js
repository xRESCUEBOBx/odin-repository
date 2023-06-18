function getComputerMove(computerMove) {
  let move = Math.random();
  console.log(move);

  if (move <= 1 / 3) {
    computerMove = "rock";
  } else if (move > 1 / 3 && move <= 2 / 3) {
    computerMove = "paper";
  } else if (move > 2 / 3) {
    computerMove = "scissors";
  }
  console.log(computerMove);
}

console.log(getComputerMove());
