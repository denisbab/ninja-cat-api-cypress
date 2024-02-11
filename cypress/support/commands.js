Cypress.Commands.add(
    'sendRequest',
    (requestMethod, uri) => {
      cy.api({
        method: requestMethod,
        url: Cypress.env('apiBaseUrl') + uri,
        headers: {
            'X-Api-Key': Cypress.env('apiKey'), 
        },
      });
    },
  );