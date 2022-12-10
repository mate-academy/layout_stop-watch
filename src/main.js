'use strict';

const startButton = document.querySelector('#start-clock');
const pauseButton = document.querySelector('#pause');

startButton.addEventListener('click', () => {
  document.querySelector('.watch__minute-hand').classList.remove('pause');
  document.querySelector('.watch__second-hand').classList.remove('pause');

  document.querySelector('.watch__minute-hand').classList.add('start-minute');
  document.querySelector('.watch__second-hand').classList.add('start-second');
});

pauseButton.addEventListener('click', () => {
  document.querySelector('.watch__second-hand').classList.add('pause');
  document.querySelector('.watch__minute-hand').classList.add('pause');
});
