import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../../../support/pages/LoginPage';

const loginPage = new LoginPage();

Given('que el usuario navega a la página de login', () => {
  loginPage.visit();
});

When('el usuario ingresa el nombre de usuario {string}', (username) => {
  loginPage.enterUsername(username);
});

When('el usuario ingresa la contraseña {string}', (password) => {
  loginPage.enterPassword(password);
});

When('el usuario hace click en el botón de login', () => {
  loginPage.clickLoginButton();
});

Then('el usuario debería ver la página de inventario', () => {
  loginPage.verifyLoginSuccess();
});

Then('el usuario debería estar autenticado correctamente', () => {
  cy.url().should('include', '/inventory.html');
});

Then('el usuario debería ver un mensaje de error', () => {
  loginPage.verifyErrorMessage();
});

Then('el usuario no debería estar autenticado', () => {
  cy.url().should('not.include', '/inventory.html');
});