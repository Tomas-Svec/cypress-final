export class CheckoutPage {
  
  elements = {
    checkoutInfoContainer: () => cy.get('.checkout_info_container'),
    firstNameInput: () => cy.get('[data-test="firstName"]'),
    lastNameInput: () => cy.get('[data-test="lastName"]'),
    postalCodeInput: () => cy.get('[data-test="postalCode"]'),
    continueButton: () => cy.get('[data-test="continue"]'),
    cancelButton: () => cy.get('[data-test="cancel"]'),
    
    checkoutSummaryContainer: () => cy.get('.checkout_summary_container'),
    summaryItems: () => cy.get('.cart_item'),
    finishButton: () => cy.get('[data-test="finish"]'),

    checkoutCompleteContainer: () => cy.get('.checkout_complete_container'),
    completeHeader: () => cy.get('.complete-header'),
    completeText: () => cy.get('.complete-text'),
    backHomeButton: () => cy.get('[data-test="back-to-products"]')  // AGREGAR ESTA LÍNEA
  };

  verifyCheckoutInfoPageLoaded() {
    this.elements.checkoutInfoContainer().should('be.visible');
    this.elements.firstNameInput().should('be.visible');
  }

  fillCheckoutInformation(firstName, lastName, postalCode) {
    this.elements.firstNameInput().clear().type(firstName);
    this.elements.lastNameInput().clear().type(lastName);
    this.elements.postalCodeInput().clear().type(postalCode);
  }

  clickContinue() {
    this.elements.continueButton().click();
  }

  verifyCheckoutOverviewPageLoaded() {
    this.elements.checkoutSummaryContainer().should('be.visible');
    this.elements.finishButton().should('be.visible');
  }

  verifySummaryItemsCount(expectedCount) {
    this.elements.summaryItems().should('have.length', expectedCount);
  }

  clickFinish() {
    this.elements.finishButton().click();
  }

  verifyOrderComplete() {
    this.elements.checkoutCompleteContainer().should('be.visible');
  }

  verifySuccessMessage() {
    this.elements.completeHeader().should('contain.text', 'Thank you for your order');
  }

  getCompleteMessage() {
    return this.elements.completeHeader().invoke('text');
  }

  clickBackHome() {
    this.elements.backHomeButton().click();
  }
}