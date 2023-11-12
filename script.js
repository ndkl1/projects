'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
*/

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  return (document.querySelector('.message').textContent = message);
};

//EVENT LISTENER
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //If there's NO input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');
  }

  //when player WINS! the number is equal
  else if (guess === secretNum) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    document.querySelector('.number').textContent = secretNum;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //the number is wrong/not equal
  else if (guess !== secretNum) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNum ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNum ? '📈 Too high!' : '📉 Too low!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost The Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // //when the num is too HIGH
  // else if (guess > secretNum) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You Lost The Game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

  // //when the num is too LOW
  // else if (guess < secretNum) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You Lost The Game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //}
});

document.querySelector('.again').addEventListener('click', function () {
  secretNum = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
