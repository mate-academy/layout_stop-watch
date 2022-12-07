'use strict';

document.querySelector('#start-clock').addEventListener('click', () => {
  document.querySelector('.watch__minute-hand').classList.add('start-minute');
});

document.querySelector('#start-clock').addEventListener('click', () => {
  document.querySelector('.watch__second-hand').classList.add('start-second');
});

document.querySelector('#pause').addEventListener('click', () => {
  document.querySelector('.watch__second-hand').classList.add('pause');
});

document.querySelector('#pause').addEventListener('click', () => {
  document.querySelector('.watch__minute-hand').classList.add('pause');
});
