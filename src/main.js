'use strict';

const reserButton = document.querySelector('.stopwatch__reset-button');
const mechanism = document.querySelector('.stopwatch__mechanism');

reserButton.addEventListener('click', () => {
  mechanism.classList.toggle('stopwatch__mechanism--none');

  setTimeout(() => {
    mechanism.classList.toggle('stopwatch__mechanism--none');
  }, 0);
});
