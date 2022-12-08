'use strict';

const btn = document.querySelector('#btn');
const secondHand = document.querySelector('#s-hand');
const msHand = document.querySelector('#ms-hand');

btn.addEventListener('click', (event) => {
  if (event.target.innerText === 'PAUSE') {
    event.target.innerText = 'START';
  } else {
    event.target.innerText = 'PAUSE';
  }

  secondHand.classList.toggle('play-animation');
  msHand.classList.toggle('play-animation');
});
