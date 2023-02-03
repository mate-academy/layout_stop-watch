'use strict';

window.onload = () => {
  const seconds = '--seconds: -' + new Date().getSeconds() + 's';

  const minutes = '--minutes: -' + (
    new Date().getMinutes() * 60
    - new Date().getSeconds()
  ) + 's';

  const hours = '--hours: -' + (
    new Date().getHours() * 3600
    - new Date().getMinutes() * 60
    - new Date().getSeconds()
  ) + 's';

  document.querySelector('.watch__seconds-second').style = seconds;

  document.querySelector('.watch__minutes-minute').style = minutes;

  document.querySelector('.watch__hours-hour').style = hours;
};
