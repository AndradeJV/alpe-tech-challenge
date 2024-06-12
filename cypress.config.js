const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    specPattern: './cypress/tests/**/*.test.js',
    baseUrl: 'https://api.escuelajs.co/api/',
  },

  env: {
    restApiProduct: 'https://api.escuelajs.co/api/'
  }
});
