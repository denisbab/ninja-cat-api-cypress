# AUTOMATION PROJECT: Cat API app

- The repository contains a cypress project that tests the Ninja Cats API app.
- GitHub Actions are set and results can be observed there.

# Getting Started

## Installation

1. Install NPM packages
   ```
   npm install
   ```

## Framework Architecture

- **cypress/fixtures/** - Constants, test data.
- **cypress/e2e/api** - API test specs.
- **cypress/support/** - custom cypress commands.

## Running test

- (Running Local)

  - command _npm run test:cats:release_.


**Notes:**

- Mochawesome report located in **cypress/reports/html**

The 'cypress-plugin-api' is utilized for automation because it facilitates the easy handling of requests and responses with a more user-friendly interface compared to 'cy.request'.