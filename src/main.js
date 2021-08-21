'use strict';

const firstClockFace = document.querySelector('.btn__firstSkin');
const secondClockFace = document.querySelector('.btn__secondSkin');
const clearClockFace = document.querySelector('.btn__clearSkin');
const clock = document.querySelector('.clock');

firstClockFace.addEventListener('click', function() {
  clock.style.background = `url('clock.155a95e0.png')`;
});

secondClockFace.addEventListener('click', function() {
  clock.style.background = `url('clockwatch.d7b4ec40.png')`;
});

clearClockFace.addEventListener('click', function() {
  clock.style.background = 'none';
});
