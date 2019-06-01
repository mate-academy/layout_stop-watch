'use strict';

function incrementSeconds() {
  let seconds = 0;
  seconds += 1;
  document.querySelector('.sec').innerText = seconds + ' секунд';
}

setInterval(incrementSeconds, 1000);
