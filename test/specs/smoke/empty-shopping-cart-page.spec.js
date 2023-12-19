import { expect } from '@playwright/test';
import { test } from '../../../pages/fixtures';

const SHOPPING_CART_TITLE = /eBay shopping cart/;
const EMPTY_CART_MESSAGE = 'You don\'t have any items in your cart.';

test('has title @smoke', async ({ shoppingCartEmptyPage }) => {
  await expect(shoppingCartEmptyPage.page).toHaveTitle(SHOPPING_CART_TITLE);
});

test('has header logo @smoke', async ({ shoppingCartEmptyPage }) => {
  await expect(shoppingCartEmptyPage.logoHeader).toBeVisible();
});

test('has global search @smoke', async ({ shoppingCartEmptyPage }) => {
  await expect(shoppingCartEmptyPage.globalSearchPanel).toBeVisible();
});

test('has shopping cart empty message @smoke', async ({ shoppingCartEmptyPage }) => {
  await expect(shoppingCartEmptyPage.emptyCartMessage).toHaveText(EMPTY_CART_MESSAGE);
});

test('has start shopping button @smoke', async ({ shoppingCartEmptyPage }) => {
  await expect(shoppingCartEmptyPage.startShoppingButton).toBeVisible();
  await expect(shoppingCartEmptyPage.startShoppingButton).toBeEnabled();
});
