import ShoppingCartPage from './ShoppingCartPage';

export default class ShoppingCartEmptyPage extends ShoppingCartPage {
  #emptyCartContainer = this.page.locator('.empty-cart');
  emptyCartMessage = this.#emptyCartContainer
      .locator('div:first-of-type span.text-display-span');
  startShoppingButton = this.#emptyCartContainer.locator('a.start-shop');
}
