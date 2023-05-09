let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
const players = [
  { name: "", Symbol: "X" },
  { name: "", Symbol: "O" },
];

const editPlayer1BtnElement = document.getElementById("edit-player-1-button");
const editPlayer2BtnElement = document.getElementById("edit-player-2-button");

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");
const startNewGameBtnElement = document.getElementById("start-game-btn");

const formElement = document.querySelector("form");
const errorsOuptputElement = document.getElementById("config-errors");
const gameAreaElement = document.getElementById("active-game");
// const gameFieldElements = document.querySelectorAll("#game-board li");
const gameBoard = document.getElementById("game-board");
const activePlayerNameElement = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);
startNewGameBtnElement.addEventListener("click", startNewGame);

formElement.addEventListener("submit", savePlayerConfig);

// for (const gameFieldElement of gameFieldElements) {
//   gameFieldElement.addEventListener("click", selectGameField);
// }

gameBoard.addEventListener("click", selectGameField);
