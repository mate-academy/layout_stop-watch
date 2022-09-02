'use strict';

const min = document.querySelector('.digital__min');
const sec = document.querySelector('.digital__sec');
const minHand = document.querySelector('.container__minute-hand');
const secHand = document.querySelector('.container__second-hand');
const start = document.querySelector('.controls__start');
const pause = document.querySelector('.controls__pause');
const reset = document.querySelector('.controls__reset');
let timer;
let paused = false;

let s = 0;
let m = 0;
let mh = 0;
let sh = 0;

const tick = () => {
  s++;
  sh += 6;
  mh += 0.1;

  if (s === 61) {
    s = 1;
    m++;
  }

  min.textContent = `Min ${m}`;
  sec.textContent = `${s} Sec`;

  minHand.style.transform = `translateX(-50%) rotate(${mh}deg)`;
  secHand.style.transform = `translateX(-50%) rotate(${sh}deg)`;
};

start.addEventListener('click', () => {
  timer = setInterval(tick, 1000);
  start.setAttribute('disabled', 'true');
  start.style.opacity = '0.5';
  pause.removeAttribute('disabled');
});

pause.addEventListener('click', () => {
  if (!paused) {
    clearInterval(timer);
    paused = true;
    pause.style.backgroundColor = '#E25544';
    pause.style.color = '#fff';
  } else {
    timer = setInterval(tick, 1000);
    paused = false;
    pause.style.backgroundColor = '#fff';
    pause.style.color = '#E25544';
  }
});

reset.addEventListener('click', () => {
  s = 0;
  m = 0;
  mh = 0;
  sh = 0;
  min.textContent = `Min ${m}`;
  sec.textContent = `${s} Sec`;
  minHand.style.transform = `translateX(-50%) rotate(${mh}deg)`;
  secHand.style.transform = `translateX(-50%) rotate(${sh}deg)`;
  start.removeAttribute('disabled');
  clearInterval(timer);
  paused = false;
  start.style.opacity = '';
  pause.setAttribute('disabled', 'true');
  pause.style.backgroundColor = '#fff';
  pause.style.color = '#E25544';
});
