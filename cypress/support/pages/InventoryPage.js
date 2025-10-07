export class InventoryPage {
  
  elements = {
    inventoryContainer: () => cy.get('.inventory_container'),
    inventoryItems: () => cy.get('.inventory_item'),
    shoppingCartBadge: () => cy.get('.shopping_cart_badge'),
    shoppingCartLink: () => cy.get('.shopping_cart_link'),
    inventoryItemName: (productName) => cy.contains('.inventory_item_name', productName),
    addToCartButton: (productName) => {
      return cy.contains('.inventory_item_name', productName)
        .parents('.inventory_item')
        .find('button[id^="add-to-cart"]');
    },
    removeButton: (productName) => {
      return cy.contains('.inventory_item_name', productName)
        .parents('.inventory_item')
        .find('button[id^="remove"]');
    }
  };

  verifyPageLoaded() {
    this.elements.inventoryContainer().should('be.visible');
  }

  addProductToCart(productName) {
    this.elements.addToCartButton(productName).click();
  }

  getCartBadgeNumber() {
    return this.elements.shoppingCartBadge().invoke('text');
  }

  verifyCartBadgeNumber(expectedNumber) {
    this.elements.shoppingCartBadge().should('have.text', expectedNumber.toString());
  }

  goToCart() {
    this.elements.shoppingCartLink().click();
  }

  verifyProductAdded(productName) {
    this.elements.removeButton(productName).should('be.visible');
  }
}