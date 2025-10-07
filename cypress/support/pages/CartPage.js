export class CartPage {
  
  elements = {
    cartContainer: () => cy.get('.cart_contents_container'),
    cartItems: () => cy.get('.cart_item'),
    cartItemName: (productName) => cy.contains('.inventory_item_name', productName),
    removeButton: (productName) => {
      return cy.contains('.inventory_item_name', productName)
        .parents('.cart_item')
        .find('button[id^="remove"]');
    },
    continueShoppingButton: () => cy.get('[data-test="continue-shopping"]'),
    checkoutButton: () => cy.get('[data-test="checkout"]')
  };

  verifyPageLoaded() {
    this.elements.cartContainer().should('be.visible');
  }

  verifyProductInCart(productName) {
    this.elements.cartItemName(productName).should('be.visible');
  }

  getCartItemsCount() {
    return this.elements.cartItems().its('length');
  }

  verifyCartItemsCount(expectedCount) {
    this.elements.cartItems().should('have.length', expectedCount);
  }

  removeProductFromCart(productName) {
    this.elements.removeButton(productName).click();
  }

  verifyProductRemoved(productName) {
    this.elements.cartItemName(productName).should('not.exist');
  }

  verifyProductNotVisible(productName) {
    this.elements.cartItemName(productName).should('not.exist');
  }

  clickCheckoutButton() {
    this.elements.checkoutButton().click();
  }
}