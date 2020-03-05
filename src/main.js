'use strict';

const MARKS_COUNT = 12;

const startDrawScale = () => {
  const clock = document.querySelector('.clock');
  const clocksWidth = clock.getBoundingClientRect().width;

  for (let i = 1; i < MARKS_COUNT; i++) {
    const mark = document.createElement('div');
    mark.classList.add('scale');
    clock.prepend(mark);
  }

  const scaleMarks = clock.querySelectorAll('.scale');
  drawScaleClock(scaleMarks, clocksWidth);
  drawScaleNumClock(scaleMarks);
};

const drawScaleClock = (scale, width) => {
  const delta = Math.PI * 2 / MARKS_COUNT;
  let angle = 0;
  let angleScale = 60;

  for (let i = 0; i < MARKS_COUNT; i++) {
    scale[i].style.top
      = 100 * Math.sin(angle) * (width / 235) + (width / 2.21) + 'px';
    scale[i].style.left
      = 100 * Math.cos(angle) * (width / 235) + (width / 2.02) + 'px';
    scale[i].style.transform
      = `translateX(-50%) rotate(${angleScale += 30}deg)`;

    angle += delta;
  }
};

const drawScaleNumClock = scale => {
  for (let i = 0; i < MARKS_COUNT; i += 3) {
    scale[i].insertAdjacentText('beforeEnd', i + 3);
    changeStyleNumClock(scale, i);
  }
};

const changeStyleNumClock = (scale, index) => {
  scale[index].classList.remove('scale');
  scale[index].classList.add('scale-number');
  scale[index].style.transform = 'translateX(-50%)';
};

startDrawScale();
