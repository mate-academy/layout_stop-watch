'use strict';

const sHand = document.querySelector('.clock__hand--s');
const mHand = document.querySelector('.clock__hand--m');
const hHand = document.querySelector('.clock__hand--h');
let sCounter = 0;
let sDegrees = 90;
let mDegrees = 90;
let hDegrees = 90;

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

setInterval(timer, 166.67);
