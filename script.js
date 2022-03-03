"use strict";
const diceImage = document.querySelector(".dice");
console.log(diceImage.outerHTML);
setTimeout(() => {
  diceImage.src = "./pig-game/dice-1.png";
}, 3000);
