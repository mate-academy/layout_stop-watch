'use strict';

const buttons = document.querySelectorAll('.tab__link');
const allContent = document.querySelectorAll('.tab__content');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // eslint-disable-next-line no-shadow
    buttons.forEach((button) => {
      button.classList.remove('active');
    });
    button.classList.add('active');

    allContent.forEach(content => {
      content.classList.remove('active');
    });
    allContent[index].classList.add('active');
  });
});
