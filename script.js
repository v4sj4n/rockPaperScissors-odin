const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const computerChoiceIndex = Math.floor(Math.random() * 3);
  console.log(choices[computerChoiceIndex]);
}
