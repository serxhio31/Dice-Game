'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScorePlayer1 = document.getElementById('current--0');
const currentScorePlayer2 = document.getElementById('current--1');

//Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
  //1. Generatin random diceroll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //2. Display Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  console.log(dice);
  //3. Check for rolled 1:
  if (dice !== 1) {
    //Add dice to the current score
    currentScore += dice;
    currentScorePlayer1.textContent = currentScore;
  } else {
    //Switch to next player
    // currentScorePlayer2.textContent = currentScore;
  }
});
