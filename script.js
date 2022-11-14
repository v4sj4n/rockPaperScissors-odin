const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const computerChoiceIndex = Math.floor(Math.random() * 3);
  return choices[computerChoiceIndex];
}

let userChoice;

function singleGame(user, computer) {
  console.log(`User choice: ${user}\nComputer choice: ${computer}`);
  if (user === "rock") {
    if (computer === "rock") {
      console.log("Draw");
    } else if (computer === "paper") {
      console.log("You lose! Computer wins!");
    } else {
      console.log("You win! Computer loses!");
    }
  } else if (user === "paper") {
    if (computer === "rock") {
      console.log("You win! Computer loses!");
    } else if (computer === "paper") {
      console.log("Draw");
    } else {
      console.log("You lose! Computer wins!");
    }
  } else if (user === "scissors") {
    if (computer === "rock") {
      console.log("You lose! Computer wins!");
      return 0;
    } else if (computer === "paper") {
      console.log("You win! Computer loses!");
      return 1;
    } else {
      console.log("Draw");
    }
  } else {
    console.log(`Please enter a value from this list ${choices}`);
  }
}

function game(rounds, singleGame) {
  let comp = 0;
  let usr = 0;
  for (let i = 0; i < rounds; i++) {
    userChoice = prompt(
        `Please enter a value from the list of possible choices which are ${choices}`
      ).toLowerCase();
    if (singleGame(userChoice, getComputerChoice()) === 0) {
      comp += 1;
    } else {
      usr += 1;
    }
  }
  console.log(comp, usr);
}
