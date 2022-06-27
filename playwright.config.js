const { devices } = require('@playwright/test');

const config = {
  projects: [
    {
      name: 'chrome',
      use: { channel: 'chrome' },
    },
  ],
};
module.exports = config;
