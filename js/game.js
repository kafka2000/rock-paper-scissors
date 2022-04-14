'use strict';

let round = 1;
const roundImages = Array.from(document.querySelectorAll("#results .round"));
const numRounds = roundImages.length;

function computerPlay() {
  const playChoices = ["rock", "paper", "scissors"];
  let randInt = Math.floor(Math.random() * 3);
  const computerChoice = playChoices[randInt];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  console.log(`Computer plays: ${computerSelection}`);
  console.log(`Human plays: ${playerSelection}`);
  let winner;
  if (playerSelection === computerSelection) {
    winner = "nobody";
  } else {
    switch (playerSelection) {
      case "rock":
        winner = (computerSelection === "scissors") ? "human" : "robot";
        break;
      case  "scissors":
        winner = (computerSelection === "paper") ? "human" : "robot";
        break;
      case  "paper":
        winner = (computerSelection === "rock") ? "human" : "robot";
        break;
    }
  }
  return winner;
}

weapons.addEventListener("click", e => {
  const weapon = e.target.closest(".weapon");
  if (weapon && round <= numRounds) {
    const playerSelection = weapon.dataset.kind;
    showChoice("human", playerSelection);
    const computerSelection = computerPlay();
    showChoice("robot", computerSelection);
    const winner = playRound(playerSelection, computerSelection);
    showWinner(winner, round);
    round += 1 ;
  }
})

function showWinner(winner, round) {
  const roundImg = roundImages[round-1];
  roundImg.src = `img/round-${winner}.png`;
  let resultText;
  switch (winner) {
    case "human":
      resultText = "YOU WON !";
      break;
    case "robot":
      resultText = "YOU LOST ...";
      break;
    case "nobody":
      resultText = "TIE";
      break;
  }
  const resultDisplay = document.getElementById("match-result");
  resultDisplay.textContent = resultText;
}

function showChoice(playerType, choiceName) {
  const choiceImg = document.querySelector(`#choice-${playerType} img.choice`);
  choiceImg.src = `img/choice-${choiceName}.png`;
}

const playButton = document.getElementById("start");
playButton.addEventListener("click", newGame);

function newGame(){
  round = 1;
  roundImages.forEach(img => img.src = "img/round-default.svg");
  const robotChoiceImg = document.querySelector(`#choice-robot img.choice`);
  robotChoiceImg.src = "img/choice-default.svg";
  const humanChoiceImg = document.querySelector(`#choice-human img.choice`);
  humanChoiceImg.src = "img/choice-default.svg";
  const resultDisplay = document.getElementById("match-result");
  resultDisplay.textContent = "";
}

// game()