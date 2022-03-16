'use strict';

//selecting elements from our page
const overLay1 = document.querySelector('.over-player1');
const overLay2 = document.querySelector('.over-player2');
const scoreElement1 = document.getElementById('score--0');
const scoreElement2 = document.querySelector('#score--1');
const diceElement = document.querySelector('.dice');
const rollDiceElement = document.querySelector('.roll-dice');
const buttNew = document.querySelector('.new-game');
const buttHold = document.getElementById('hold');
const current1 = document.getElementById('current--0');
const current2 = document.getElementById('current--1');

//initializing elements values
scoreElement1.textContent = 0;
scoreElement2.textContent = 0;

diceElement.classList.add('hidden');

//functions part imlementing games functionalities

//implementing rolling the game
const scores = [0, 0];
let currentscore = 0;
let activePlayer = 0;
let playing = true;

//functions implementations
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentscore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  overLay2.classList.toggle('over-player2');
  overLay1.classList.toggle('over-player1');
};

//rollingthe dice
rollDiceElement.addEventListener('click', function () {
  if (playing) {
    //1. generating random dices
    const dice = Math.floor(Math.random() * 6) + 1;

    //2. Display dice
    diceElement.classList.remove('hidden');
    overLay1.classList.remove('over-player1');
    diceElement.src = `/images/dice-${dice}.png`;

    // sets the constant width of the dice
    diceElement.style.width = '80%';

    //add the inactive background
    overLay2.classList.add('over-player2');
    //3. check for roll 1: if true,switch to bext player

    if (dice !== 1) {
      //   add dice to the current score
      currentscore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentscore;
    } else {
      switchPlayer();
      //switch to the next player
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // currentscore = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // overLay2.classList.toggle('over-player2');
      // overLay1.classList.toggle('over-player1');
    }
  }
});

buttHold.addEventListener('click', function () {
  if (playing) {
    //add current score to active players score
    scores[activePlayer] += currentscore;
    //   scores[i] = scores[i] + currentscore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //check if score is already 100

    if (scores[activePlayer] >= 20) {
      //finish the game
      playing = false;
      overLay1.classList.add('over-player1');
      overLay2.classList.add('over-player2');
      diceElement.classList.add('hidden');
    } else {
      //else switch to the next player
      switchPlayer();
    }
  }
});

buttNew.addEventListener('click', function () {
  // rest all the values to default
  playing = true;
  activePlayer = 0;
  current1.textContent = 0;
  current2.textContent = 0;
  scoreElement1.textContent = 0;
  scoreElement2.textContent = 0;
  currentscore = 0;
  overLay1.classList.remove('hidden');
  diceElement.classList.remove('hidden');
});
