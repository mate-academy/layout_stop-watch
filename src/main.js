'use strict';

const btnStart = document.querySelector('.control__btn--start');
const btnStop = document.querySelector('.control__btn--stop');
const btnReset = document.querySelector('.control__btn--reset');

const clockHands = document.querySelectorAll('.clock__hand');
const hourHand = document.querySelector('.clock__hand--hour');
const minHand = document.querySelector('.clock__hand--min');
const secHand = document.querySelector('.clock__hand--sec');

btnStart.addEventListener('click', () => {
  hourHand.classList.add('clock__animation-start--hour');
  minHand.classList.add('clock__animation-start--min');
  secHand.classList.add('clock__animation-start--sec');
});

btnStop.addEventListener('click', () => {
  clockHands.forEach(clockHand => {
    clockHand.classList.toggle('clock__animation-paused');
  });
});

btnReset.addEventListener('click', () => {
  hourHand.classList.remove('clock__animation-start--hour', 'animation-paused');
  minHand.classList.remove('clock__animation-start--min', 'animation-paused');
  secHand.classList.remove('clock__animation-start--sec', 'animation-paused');
});
