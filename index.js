let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const turnMessage = document.getElementById("turnMessage");
const player1ScoreDisplayed = document.getElementById("player1Score");
const player2ScoreDisplayed = document.getElementById("player2Score");

const player1Result = document.getElementById("player1Result");
const player2Result = document.getElementById("player2Result");

const diceButton = document.getElementById("rollButton");
const resetButton = document.getElementById("resetButton");

diceButton.addEventListener("click", function () {
  const result = Math.floor(Math.random() * 6 + 1);
  console.log(result);
});
