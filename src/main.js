'use strict';
let seconds = 1;
let min = 0;

function incrementSeconds() {
  document.querySelector('.sec').innerText = seconds + ' секунд';
  document.querySelector('.min').innerText = min + ' минут';
  seconds += 1;
  if (seconds === 60) {
    min += 1;
    seconds = 0;
  }
}

setInterval(incrementSeconds, 1000);
