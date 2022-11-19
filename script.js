const choices = ["rock", "paper", "scissors"];

let header = document.querySelector("header");

// Round button logic
let rounds = document.querySelectorAll(".rounds").forEach((item) => {
  item.addEventListener("click", () => {
    // Listening for each button
    clickedRound = item.getAttribute("rounds");

    let h3InfoRounds = document.createElement("h3");
    h3InfoRounds.textContent = `You chose best of ${clickedRound}`;
    h3InfoRounds.style.color = "#34cb98";
    header.appendChild(h3InfoRounds);

    let roundsDiv = document.getElementById("round-chooser");
    roundsDiv.style.display = "none";
    return clickedRound;
  });
});

let attack = document.querySelectorAll(".rps").forEach((item) => {
  item.addEventListener("click", () => {
    let scores = document.querySelectorAll(".score");
    scores.forEach((score) => {
      score.style.display = "block";
    });
  });
});
