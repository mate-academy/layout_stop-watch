'use strict';

const link1 = document.querySelector('.tab__link--1');

link1.addEventListener('click', (event) => openCity(event, 'London'));

const link2 = document.querySelector('.tab__link--2');

link2.addEventListener('click', (event) => openCity(event, 'Paris'));

const link3 = document.querySelector('.tab__link--3');

link3.addEventListener('click', (event) => openCity(event, 'Tokyo'));

function openCity(evt, cityName) {
  const tabLink = document.querySelector('.tab__link');
  const content = document.querySelector('.tab__content');

  if (content.classList.contains('tab__content')) {
    content.style.display = 'none';
  }
  // content.style.display = 'none';

  if (tabLink.classList.contains('active')) {
    tabLink.classList.remove('active');
  }

  document.getElementById(cityName).style.display = 'block';
  evt.currentTarget.className += ' active';
};
