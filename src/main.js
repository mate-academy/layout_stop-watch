'use strict';

const sHand = document.querySelector('.clock__hand--s');
const mHand = document.querySelector('.clock__hand--m');
const hHand = document.querySelector('.clock__hand--h');
const click = document.querySelector('.secret__div');
const rickRoll = document.querySelector('#secret');
const pause = document.querySelector('#pause');
const stop = document.querySelector('#stop');
let sDegrees = 90;
let mDegrees = 90;
let hDegrees = 90;
let sCounter = 0;
let interval;

pause.onchange = function() {
  pauseHandler();
};

stop.onclick = function() {
  stopHandler();
};

rickRoll.onplay = function() {
  bigSecret();
};

function timer() {
  sDegrees++;
  sCounter++;

  if (sCounter % 60 === 0) {
    mDegrees++;
  }

  if (sCounter % 600 === 0) {
    hDegrees++;
  }

  sHand.style.transform = `rotate(${sDegrees}deg)`;
  mHand.style.transform = `rotate(${mDegrees}deg)`;
  hHand.style.transform = `rotate(${hDegrees}deg)`;
}

function pauseHandler() {
  if (pause.checked) {
    interval = setInterval(timer, 166.66667);
  } else {
    clearInterval(interval);
  }
}

function stopHandler() {
  sCounter = 0;
  sDegrees = 90;
  mDegrees = 90;
  hDegrees = 90;
  pause.checked = false;
  clearInterval(interval);
  sHand.style.transform = `rotate(${sDegrees}deg)`;
  mHand.style.transform = `rotate(${mDegrees}deg)`;
  hHand.style.transform = `rotate(${hDegrees}deg)`;
}

function bigSecret() {
  click.style.display = 'none';
}
