function getComputerChoice(computerChoice) {
  computerChoice = Math.random();

  if (computerChoice <= 1 / 3) {
    computerChoice = "rock";
  } else if (computerChoice > 1 / 3 && computerChoice <= 2 / 3) {
    computerChoice = "paper";
  } else if (computerChoice > 2 / 3) {
    computerChoice = "scissors";
  }

  return computerChoice;
}

console.log(getComputerChoice());
