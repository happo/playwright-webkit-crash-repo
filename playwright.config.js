const { devices } = require('@playwright/test');

const config = {
  projects: [
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
};
module.exports = config;
