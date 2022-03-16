'use strict';

const buttCheck = document.querySelector('.check');
const userGuess = document.querySelector('.guess-value');
const reading = document.querySelector('.score-reading');

const randNumber = Math.floor(Math.random() * 10) + 1;
let scoreCount = 20;
let highestScore = 0;

const mainScore = document.querySelector('.main-score');

buttCheck.addEventListener('click', function () {
  const gvalue = Number(userGuess.value);

  if (!gvalue) {
    //when there is no input in the guess area
    reading.textContent = 'No Guess Value!!';
  } else if (gvalue === randNumber) {
    //when the user wins the game
    reading.textContent = ` Successfully Guessed`;
    mainScore.textContent = randNumber;
    document.querySelector('body').style.backgroundColor = `#60b347`;

    //getting the highest score
    if (scoreCount > highestScore) {
      highestScore = scoreCount;
      document.querySelector(
        '.high-score'
      ).textContent = `High Score: ${highestScore}`;
    }
  }else if(gvalue !== randNumber){
    if (scoreCount > 1) {
      reading.textContent = scoreCount > randNumber ? 'Too High' :'Too low';
      scoreCount--;
      document.querySelector('.score-value').textContent = scoreCount;
    } else {
      reading.textContent = `You lost the game!!`;
    }
  // } else if (gvalue < randNumber) {
  //   if (scoreCount > 1) {
  //     reading.textContent = `Too Low`;
  //     scoreCount--;
  //     document.querySelector('.score-value').textContent = scoreCount;
  //   } else {
  //     reading.textContent = `You lost the game!!`;
  //   }
  // } else if (gvalue > randNumber) {
  //   if (scoreCount > 1) {
  //     reading.textContent = `Too high`;
  //     scoreCount--;
  //     document.querySelector('.score-value').textContent = scoreCount;
  //   } else {
  //     reading.textContent = `You lost the Game`;
  //   }
  // }
  }
  userGuess.value = '';
  userGuess.focus();
});

const resetButton = document.querySelector('.bat');

resetButton.addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#0c810c;';
  document.querySelector('.main-score').textContent = `?`;
  document.querySelector('.single-guess').textContent = 'Fresh Game';
  scoreCount = 20;
  document.querySelector('.score-value').textContent = scoreCount;
  document.querySelector('.guess-value') = '';
  Math.floor(Math.random() * 10) + 1;
});
