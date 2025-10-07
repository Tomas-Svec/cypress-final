import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../../../support/pages/LoginPage';
import { InventoryPage } from '../../../support/pages/InventoryPage';
import { CartPage } from '../../../support/pages/CartPage';
import { CheckoutPage } from '../../../support/pages/CheckoutPage';
import { DataGenerator } from '../../../support/utils/DataGenerator';

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

let checkoutData = {};

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

When('el usuario agrega el producto {string} al carrito', (productName) => {
  inventoryPage.addProductToCart(productName);
});

When('el usuario navega al carrito de compras', () => {
  inventoryPage.goToCart();
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

Then('el carrito debería mostrar {int} producto(s)', (expectedCount) => {
  inventoryPage.verifyCartBadgeNumber(expectedCount);
});

Then('el badge del carrito debería mostrar el número {string}', (expectedNumber) => {
  inventoryPage.verifyCartBadgeNumber(expectedNumber);
});

Then('el producto {string} debería estar en el carrito', (productName) => {
  cartPage.verifyProductInCart(productName);
});

Then('el usuario debería poder remover el producto del carrito', () => {
  cy.get('button[id^="remove"]').should('be.visible').and('be.enabled');
});

When('el usuario elimina el producto {string} del carrito', (productName) => {
  cartPage.removeProductFromCart(productName);
});

Then('el producto {string} no debería estar visible en el carrito', (productName) => {
  cartPage.verifyProductNotVisible(productName);
});

Then('el carrito debería tener {int} productos visibles', (expectedCount) => {
  cartPage.verifyCartItemsCount(expectedCount);
});

When('el usuario hace click en el botón de checkout', () => {
  cartPage.clickCheckoutButton();
});

Then('el usuario debería ver el formulario de información del checkout', () => {
  checkoutPage.verifyCheckoutInfoPageLoaded();
});

When('el usuario completa el formulario de checkout con datos aleatorios', () => {
  checkoutData = DataGenerator.generateCheckoutInfo();
  cy.log(`Datos generados: ${JSON.stringify(checkoutData)}`);
  checkoutPage.fillCheckoutInformation(
    checkoutData.firstName,
    checkoutData.lastName,
    checkoutData.postalCode
  );
});

When('el usuario hace click en continuar', () => {
  checkoutPage.clickContinue();
});

Then('el usuario debería ver la página de resumen del pedido', () => {
  checkoutPage.verifyCheckoutOverviewPageLoaded();
});

Then('el resumen debería mostrar {int} productos', (expectedCount) => {
  checkoutPage.verifySummaryItemsCount(expectedCount);
});

When('el usuario hace click en el botón finish', () => {
  checkoutPage.clickFinish();
});

Then('el usuario debería ver el mensaje de confirmación del pedido', () => {
  checkoutPage.verifyOrderComplete();
});

Then('el mensaje debería indicar que el pedido fue exitoso', () => {
  checkoutPage.verifySuccessMessage();
});

When('el usuario hace click en el botón back home', () => {
  checkoutPage.clickBackHome();
});

Then('el usuario debería regresar a la página de inventario', () => {
  cy.url().should('include', '/inventory.html');
  inventoryPage.verifyPageLoaded();
});