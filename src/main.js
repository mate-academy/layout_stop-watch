'use strict';

let counter = 0;
const button = document.querySelector('.stopwatch__button');
const second = document.querySelector('.second');
const minute = document.querySelector('.minute');

button.addEventListener('click', pauseReset);

function pauseReset() {
  if (counter === 0) {
    second.style.animationPlayState = 'paused';
    minute.style.animationPlayState = 'paused';
    counter++;
  } else if (counter === 1) {
    second.classList.remove('stopwatch__second');
    minute.classList.remove('stopwatch__minute');
    void second.offsetWidth;
    void minute.offsetWidth;
    minute.classList.add('stopwatch__minute');
    second.classList.add('stopwatch__second');

    second.style.animationPlayState = 'running';
    minute.style.animationPlayState = 'running';

    counter = 0;
  }
}
