'use strict';

function computerPlay() {
  const playChoices = ["rock", "paper", "scissors"];
  let randInt = Math.floor(Math.random() * 3);
  const computerChoice = playChoices[randInt];
  return computerChoice;
}

function playerPlay() {
  let playerSelection = prompt("Rock, Paper, Scissors ?");
  if (playerSelection) {
    playerSelection = playerSelection.trim().toLowerCase();
    while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
      playerSelection = prompt("Not a valid choice. Rock, Paper, Scissors ?").trim().toLowerCase();
    } 
  }
  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  console.log(`Computer plays: ${computerSelection}`);
  console.log(`Player plays: ${playerSelection}`);
  let winner;
  if (playerSelection === computerSelection) {
    winner = "nobody";
  } else {
    switch (playerSelection) {
      case "rock":
        winner = (computerSelection === "scissors") ? "player" : "computer";
        break;
      case  "scissors":
        winner = (computerSelection === "paper") ? "player" : "computer";
        break;
      case  "paper":
        winner = (computerSelection === "rock") ? "player" : "computer";
        break;
    }
  }
  return winner;
}

function game(){
  for (let i = 0; i < 5; i++) {
    console.log(`=== Round${i+1}`)
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    // Abort if user didn't enter any choice
    if (!playerSelection) {
      console.log("Game aborted");
      return null;
    }
    // If not aborted, choose winner
    let winner = playRound(playerSelection, computerSelection);
    console.log(`--> Winner is: ${winner}`);
  }
}

// game()