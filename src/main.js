'use strict';

const buttonn = document.querySelector('buttonn');

buttonn.addEventListener('click', event => {
  buttonn.textContent = `Click count: ${event.detail}`;
});
