'use strict';

function myPlayFunction() {
  document.getElementById('s-w').style.webkitAnimationPlayState = 'running';
  // Code for Chrome, Safari, and Opera
  document.getElementById('s-w').style.animationPlayState = 'running';
}

function myPauseFunction() {
  document.getElementById('s-w').style.webkitAnimationPlayState = 'paused';
  // Code for Chrome, Safari, and Opera
  document.getElementById('s-w').style.animationPlayState = 'paused';
}
