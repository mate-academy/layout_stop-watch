module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./clickAndHoverHelper')(page, scenario);

  const {
    postDOMChangeWait = 0,
  } = scenario;

  await page.waitForSelector('.stopwatch');

  await page.evaluate(() => {
    const calendarElement = document.querySelector('.stopwatch');
    const isAlreadySpeedUp = calendarElement.classList.contains('stopwatch--speed-up');

    if (isAlreadySpeedUp) {
      return;
    }

    calendarElement.classList.add('stopwatch--speed-up');
  });

  await page.waitForSelector('.stopwatch--speed-up');
  await page.waitForTimeout(postDOMChangeWait);
};
