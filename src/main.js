'use strict';

init();

function init() {
  const clock = document.querySelector('.clock');
  const widthClock = window.getComputedStyle(clock, null).width;

  for (let i = 0; i < 11; i++) {
    const div = document.createElement('div');
    div.classList.add(`scale`);
    clock.prepend(div);
  }

  const scale = clock.querySelectorAll('.scale');
  drawScaleClock(scale, widthClock);
  drawScaleNumClock(scale);
}

function drawScaleClock(scale, widthClock) {
  const width = parseInt(widthClock, 10);
  const delta = Math.PI * 2 / scale.length;
  let angle = 0;
  let angleScale = 60;

  for (let i = 0; i < scale.length; i++) {
    scale[i].style.top
      = 100 * Math.sin(angle) * (width / 235) + (width / 2.22) + 'px';
    scale[i].style.left
      = 100 * Math.cos(angle) * (width / 235) + (width / 2) + 'px';
    scale[i].style.transform
      = `translateX(-50%) rotate(${angleScale += 30}deg)`;

    angle += delta;
  }
}

function drawScaleNumClock(scale) {
  for (let i = 0; i <= scale.length; i++) {
    switch (i) {
      case 0:
        scale[i].insertAdjacentText('beforeEnd', 3);
        changeStyleNumClock(scale, i);
        break;
      case 3:
        scale[i].insertAdjacentText('beforeEnd', 6);
        changeStyleNumClock(scale, i);
        break;
      case 6:
        scale[i].insertAdjacentText('beforeEnd', 9);
        changeStyleNumClock(scale, i);
        break;
      case 9:
        scale[i].insertAdjacentText('beforeEnd', 12);
        changeStyleNumClock(scale, i);
        break;
    }
  }
}

function changeStyleNumClock(scale, index) {
  scale[index].classList.remove('scale');
  scale[index].classList.add('scale-number');
  scale[index].style.transform = 'translateX(-50%)';
}
