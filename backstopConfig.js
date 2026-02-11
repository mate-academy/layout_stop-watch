'use strict';

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  url: 'https://johannpdaniel.github.io/layout_stop-watch/',
  referenceUrl: 'https://johannpdaniel.github.io/layout_stop-watch/',
  testUrl: 'https://johannpdaniel.github.io/layout_stop-watch/',
  label: 'Elementary test',
  selectors: ['body'],
  misMatchThreshold: 0.4,
};

const config = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}',
  viewports: [
    {
      name: 'tablet_h',
      width: 1024,
      height: 768,
    },
  ],
  scenarios: [
    {
      ...basic,
      label: 'Stopwatch started',
    },
    {
      ...basic,
      label: 'Stopwatch before one circle',
      postDOMChangeWait: 5000,
    },
    {
      ...basic,
      label: 'Stopwatch after one circle',
      postDOMChangeWait: 10000,
    },
  ],
};

module.exports = config;
