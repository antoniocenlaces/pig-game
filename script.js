"use strict";
// Buscamos los elementos activos del juego en el DOM
// diceImage: imagen del dado a representar
const diceImage = document.querySelector(".dice");
// player0: sección del player--0
const player0 = document.querySelector(".player--0");
// player1: sección del player--1
const player1 = document.querySelector(".player--1");
// rollDice: tira a suerte el dado
const rollDice = document.querySelector(".btn--roll");
// holdScore: botón para guardar currentScore acumulado en  score
const holdScore = document.querySelector(".btn--hold");
// scoreField0
const scoreField0 = document.getElementById("score--0");
// scoreField1
const scoreField1 = document.getElementById("score--1");
// currentScoreField0
const currentScoreField0 = document.getElementById("current--0");
// currentScoreField1
const currentScoreField1 = document.getElementById("current--1");
// player0Name
const player0Name = document.getElementById("name--0");
// player1Name
const player1Name = document.getElementById("name--1");

// Variables para controlar el juego
// score0: almacena el score total del player0
let score0 = 0;
// score1: almacena el score total del player1
let score1 = 0;
// currentScore0: almacena el score actual total del player0
let currentScore0 = 0;
// score1: almacena el score actual total del player1
let currentScore1 = 0;
// currentPlayer
let currentPlayer = 0;
// play: nos dice si el juego está activo
let play = true;

function generateRandom(a, b) {
  a = Math.trunc(a);
  b = Math.trunc(b);
  if (a > b) {
    const c = a;
    a = b;
    b = c;
  }
  const d = Math.random();
  console.log(d);
  return Math.round(d * (b - a)) + a;
}
console.log(generateRandom(6, 1));
/*console.log(diceImage.outerHTML);
setTimeout(() => {
  diceImage.src = "./pig-game/dice-1.png";
}, 3000);*/

function switchUser() {
  if (currentPlayer === 0) {
    player0.classList.remove("player--active");
    player1.classList.add("player--active");
    currentPlayer = 1;
  } else {
    player1.classList.remove("player--active");
    player0.classList.add("player--active");
    currentPlayer = 0;
  }
}

rollDice.addEventListener("click", function () {
  if (play) {
    const d = generateRandom(1, 6);
    diceImage.src = "./pig-game/dice-" + d + ".png";
    if (d == 1) {
      switchUser();
    } else {
      switch (currentPlayer) {
        case 0:
          currentScore0 = currentScore0 + d;
          currentScoreField0.textContent = currentScore0;
          break;
        case 1:
          currentScore1 = currentScore1 + d;
          currentScoreField1.textContent = currentScore1;
          break;
      }
    }
  }
});

holdScore.addEventListener("click", function () {
  if (play) {
    switch (currentPlayer) {
      case 0:
        score0 = score0 + currentScore0;
        scoreField0.textContent = score0;
        currentScore0 = 0;
        currentScoreField0.textContent = 0;
        if (score0 >= 100) {
          player0Name.textContent = "Player 0 is the WINNER!";
          play = false;
          break;
        }
        switchUser();
        break;
      case 1:
        score1 = score1 + currentScore1;
        scoreField1.textContent = score1;
        currentScore1 = 0;
        currentScoreField1.textContent = 0;
        if (score1 >= 100) {
          player1Name.textContent = "Player 1 is the WINNER!";
          play = false;
          break;
        }
        switchUser();
        break;
    }
  }
});
