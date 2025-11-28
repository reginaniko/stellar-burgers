import { defineConfig } from 'cypress';
import codeCoverageTask from '@cypress/code-coverage/task';

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false, 
    json: true, 
    charts: true,
    reportPageTitle: 'Cypress Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'http://localhost:4000',

    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },

    video: false,
    screenshotOnRunFailure: true,
  },
});
