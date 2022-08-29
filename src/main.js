'use strict';

const btnStart = document.querySelector('.btn__start');
const btnStop = document.querySelector('.btn__stop');
const btnReset = document.querySelector('.btn__reset');

const clockHands = document.querySelectorAll('.clock__hand');
const hourHand = document.querySelector('.clock__hand--hour');
const minHand = document.querySelector('.clock__hand--min');
const secHand = document.querySelector('.clock__hand--sec');

btnStart.addEventListener('click', () => {
  hourHand.classList.add('hour-animation--start');
  minHand.classList.add('min-animation--start');
  secHand.classList.add('sec-animation--start');
});

btnStop.addEventListener('click', () => {
  clockHands.forEach(clockHand => {
    clockHand.classList.toggle('animation--paused');
  });
});

btnReset.addEventListener('click', () => {
  hourHand.classList.remove('hour-animation--start', 'animation--paused');
  minHand.classList.remove('min-animation--start', 'animation--paused');
  secHand.classList.remove('sec-animation--start', 'animation--paused');
});
