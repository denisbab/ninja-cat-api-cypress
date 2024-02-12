const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  projectId: 'db1b11',
  env: {
    apiKey: 'Hff6tE+UWV9ykZXGI1vfiA==eBDxwTKAkMdNrxaR',
    apiCatBaseUrl: 'https://api.api-ninjas.com/v1/cats',
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    overwrite: true,
    html: true,
    json: false,
    inline: true
  },
});