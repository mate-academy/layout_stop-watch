'use strict';

const button = document.getElementById('stopwatch__button');
const time = document.getElementById('stopwatch__time');
let secHand = document.getElementById('sec-hand');
let minHand = document.getElementById('min-hand');
let minutes;
let seconds;
const intervArr = [];
const stopWatch = document.getElementById('stopwatch__clock');
let minuteField;
let secondField;

function increaseSeconds() {
  seconds++;
}

function increaseMinutes() {
  minutes++;
}

function stopClock() {
  if (intervArr) {
    for (let i = 0; i < intervArr.length; i++) {
      clearInterval(intervArr[i]);
    }
  }
  secHand.classList.remove('animate--sec');
  minHand.classList.remove('animate--min');
  button.innerHTML = 'START';
  button.style.background = '#304534';
  time.style.color = 'red';
}

function clock() {
  if (button.innerHTML === 'STOP') {
    stopClock();
  } else {
    startClock();
  }
}

function startClock() {
  minutes = 0;
  seconds = 0;
  secHand.remove();

  const newSecHand = document.createElement('li');
  const newSpan = document.createElement('span');

  newSecHand.appendChild(newSpan);
  stopWatch.appendChild(newSecHand);
  newSecHand.classList.add('stopwatch__second');
  secHand = newSecHand;
  minHand.remove();

  const newMinHand = document.createElement('li');
  const newSpan2 = document.createElement('span');

  newMinHand.appendChild(newSpan2);
  stopWatch.appendChild(newMinHand);
  newMinHand.classList.add('stopwatch__minute');
  minHand = newMinHand;

  const secInc = setInterval(increaseSeconds, 1000);
  const minInc = setInterval(increaseMinutes, 60000);

  intervArr.push(secInc);
  intervArr.push(minInc);
  setInterval(updateHTML, 1000);
  secHand.classList.add('animate--sec');
  minHand.classList.add('animate--min');
  button.innerHTML = 'STOP';
  button.style.background = '#fd2e62';
  time.style.color = '#fff';
}

function updateHTML() {
  if (seconds > 59) {
    secondField = '00';
    seconds = -1;
    increaseSeconds();
  } else if (seconds < 10) {
    secondField = `0${seconds}`;
  } else {
    secondField = seconds;
  }

  if (minutes < 10) {
    minuteField = `0${minutes}`;
  } else if (minutes === 60) {
    minuteField = '60';
    secondField = '00';
    secHand.classList.remove('animate--sec');
    minHand.classList.remove('animate--min');
    button.innerHTML = `RESTART`;
  } else {
    minuteField = minutes;
  }
  time.innerHTML = `${minuteField}:${secondField}`;
}

button.addEventListener('click', clock);
