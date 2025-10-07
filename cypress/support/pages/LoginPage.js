export class LoginPage {
  
  elements = {
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginButton: () => cy.get('[data-test="login-button"]'),
    errorMessage: () => cy.get('[data-test="error"]'),
    inventoryContainer: () => cy.get('.inventory_container')
  };

  visit() {
    cy.visit('/');
  }

  enterUsername(username) {
    this.elements.usernameInput().clear().type(username);
  }

  enterPassword(password) {
    this.elements.passwordInput().clear().type(password);
  }

  clickLoginButton() {
    this.elements.loginButton().click();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLoginButton();
  }

  verifyLoginSuccess() {
    this.elements.inventoryContainer().should('be.visible');
  }

  verifyErrorMessage() {
    this.elements.errorMessage().should('be.visible');
  }
}