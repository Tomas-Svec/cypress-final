Cypress.Commands.add('login', (username, password) => {
  cy.visit('/');
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add('apiRequest', (method, endpoint, body = null) => {
  const options = {
    method: method,
    url: `${Cypress.env('apiUrl')}${endpoint}`,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (body) {
    options.body = body;
  }

  return cy.request(options);
});