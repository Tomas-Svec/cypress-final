import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { DataGenerator } from '../../../support/utils/DataGenerator';

let response;
let userData = {};

Given('que la API está disponible en el ambiente configurado', () => {
  cy.log(`API URL: ${Cypress.env('apiUrl')}`);
});

Given('que genero datos aleatorios para un nuevo usuario', () => {
  userData = {
    name: DataGenerator.generateFullName(),
    email: DataGenerator.generateEmail(),
    username: DataGenerator.generateUsername()
  };
  cy.log(`Datos generados: ${JSON.stringify(userData)}`);
});

Given('que genero un nombre aleatorio para actualizar', () => {
  userData.name = DataGenerator.generateFullName();
  userData.email = DataGenerator.generateEmail();
});

When('realizo una petición GET al endpoint {string}', (endpoint) => {
  cy.apiRequest('GET', endpoint).then((res) => {
    response = res;
  });
});

When('realizo una petición POST al endpoint {string} con los datos generados', (endpoint) => {
  cy.apiRequest('POST', endpoint, userData).then((res) => {
    response = res;
  });
});

When('realizo una petición PUT al endpoint {string} con el nuevo nombre', (endpoint) => {
  cy.apiRequest('PUT', endpoint, userData).then((res) => {
    response = res;
  });
});

Then('el código de respuesta debe ser {int}', (expectedStatus) => {
  expect(response.status).to.eq(expectedStatus);
});

Then('la respuesta debe contener una lista de usuarios', () => {
  expect(response.body).to.be.an('array');
  expect(response.body.length).to.be.greaterThan(0);
});

Then('cada usuario debe tener los campos {string}, {string} y {string}', (field1, field2, field3) => {
  const firstUser = response.body[0];
  expect(firstUser).to.have.property(field1);
  expect(firstUser).to.have.property(field2);
  expect(firstUser).to.have.property(field3);
});

Then('la lista debe contener al menos {int} usuarios', (cantidad) => {
  expect(response.body.length).to.be.at.least(cantidad);
});

Then('la respuesta debe contener el campo {string}', (field) => {
  expect(response.body).to.have.property(field);
});

Then('el nombre del usuario creado debe coincidir con el enviado', () => {
  expect(response.body.name).to.eq(userData.name);
});

Then('la respuesta debe contener los datos del usuario', () => {
  expect(response.body).to.have.property('id');
  expect(response.body).to.have.property('email');
  expect(response.body).to.have.property('name');
});

Then('el usuario debe tener el email esperado', () => {
  expect(response.body.email).to.include('@');
});