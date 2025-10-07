const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');


const environments = {
  dev: {
    baseUrl: 'https://www.saucedemo.com',
    apiUrl: 'https://jsonplaceholder.typicode.com'
  },
  test: {
    baseUrl: 'https://www.saucedemo.com',
    apiUrl: 'https://jsonplaceholder.typicode.com'
  }
};

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/features/**/*.feature',
    async setupNodeEvents(on, config) {
      await preprocessor.addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );
      const environment = config.env.environment || 'dev';
      const environmentConfig = environments[environment];
      config.baseUrl = environmentConfig.baseUrl;
      config.env.apiUrl = environmentConfig.apiUrl;

      return config;
    },
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    video: true,
    videosFolder: 'cypress/videos',
    defaultCommandTimeout: 10000
  }
});