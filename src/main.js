'use strict';

const sHand = document.querySelector('.clock__second');
const mHand = document.querySelector('.clock__minute');
const hHand = document.querySelector('.clock__hour');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');

window.onload = function() {
  stopHandler();
};

pause.onchange = function() {
  pauseHandler();
};

stop.onclick = function() {
  document.querySelectorAll('.hand').forEach(
    el => el.classList.remove('animation'));

  pauseHandler();

  setTimeout(stopHandler, 1000);
};

function pauseHandler() {
  if (sHand.style.animationPlayState === 'running'
    && mHand.style.animationPlayState === 'running'
    && hHand.style.animationPlayState === 'running') {
    sHand.style.animationPlayState = 'paused';
    mHand.style.animationPlayState = 'paused';
    hHand.style.animationPlayState = 'paused';
  } else {
    sHand.style.animationPlayState = 'running';
    mHand.style.animationPlayState = 'running';
    hHand.style.animationPlayState = 'running';
  }
}

function stopHandler() {
  document.querySelectorAll('.hand').forEach(
    el => el.classList.add('animation'));
}
