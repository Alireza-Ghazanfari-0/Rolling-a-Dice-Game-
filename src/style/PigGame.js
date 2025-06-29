'use strict';

let score = [0, 0];
let current = [0, 0];
let sum = [0, 0];
let i = 0;
let playing = true;

//roll dice
document.querySelector('.a-rollDice').addEventListener('click', function () {
  if (playing) {
    //console.log(playing, score);
    let randomNumber = Math.trunc(Math.random() * 6 + 1);
    document.querySelector(
      '.a-image'
    ).src = `src/images/dice-${randomNumber}.png`;
    //change i from 2,3,4,... to 0 & 1
    i % 2 == 0 ? (i = 0) : (i = 1);
    // dice =? 1
    if (randomNumber !== 1) {
      current[i] = randomNumber;
      sum[i] = sum[i] + current[i];
    } else {
      sum[i] = 0;
      document.querySelector('.a-window-1').classList.toggle('opacity');
      document.querySelector('.a-window-2').classList.toggle('opacity');
      //i++;
    }
    document.querySelector(`.a-current${i + 1}`).textContent = sum[i];
    if (randomNumber === 1) {
      i++;
    }
  }
});

//hold
document.querySelector('.a-hold').addEventListener('click', function () {
  score[i] = score[i] + sum[i];
  document.querySelector(`.a-score${i + 1}`).textContent = score[i];
  sum[i] = 0;
  document.querySelector(`.a-current${i + 1}`).textContent = sum[i];
  //win
  if (score[i] >= 100) {
    document.querySelector(`.a-window-${i + 1}`).style.backgroundColor =
      'black';
    document.querySelector(`.name${i + 1}`).style.color = 'red';
    //stop playing
    playing = false;
    //console.log(score[i], '1', playing);
  } else {
    document.querySelector('.a-window-1').classList.toggle('opacity');
    document.querySelector('.a-window-2').classList.toggle('opacity');
    //
    i++;
  }
});

//newgame
document.querySelector('.a-newGame').addEventListener('click', function () {
  sum = [0, 0];
  score = [0, 0];
  current = [0, 0];
  document.querySelector('.a-current1').textContent = 0;
  document.querySelector('.a-current2').textContent = 0;
  document.querySelector('.a-score1').textContent = 0;
  document.querySelector('.a-score2').textContent = 0;
  document.querySelector('.a-window-1').style.backgroundColor =
    'rgb(246, 186, 186)';
  document.querySelector('.a-window-2').style.backgroundColor =
    'rgb(246, 186, 186)';
  document.querySelector('.a-window-2').classList.add('opacity');
  document.querySelector('.a-window-1').classList.remove('opacity');
  playing = true;
});
