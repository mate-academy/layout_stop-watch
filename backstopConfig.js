'use strict';
// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  selectors: ['body'],
  removeSelectors: [
    'h1',
  ],
  misMatchThreshold: 0.5,
  referenceUrl: basicScenario.referenceUrl + '/stopwatch/',
};

const config = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}',
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
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
      postDOMChangeWait: 15000,
    }
  ],
};

module.exports = config;
