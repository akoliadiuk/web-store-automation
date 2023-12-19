import { expect } from '@playwright/test';
import { test } from '../../pages/fixtures';

const ITEM_ID = '374928825389';
const ITEM_TITLE = /Merida SADHU/;

test('has title @smoke', async ({ itemPage }) => {
  await itemPage.open(ITEM_ID);
  await expect(itemPage.page).toHaveTitle(ITEM_TITLE);
});

test('has header logo @smoke', async ({ itemPage }) => {
  await itemPage.open(ITEM_ID);
  await expect(itemPage.logoHeader).toBeVisible();
});

test('has global search @smoke', async ({ itemPage }) => {
  await itemPage.open(ITEM_ID);
  await expect(itemPage.globalSearchPanel).toBeVisible();
});

test('has item title and price @smoke', async ({ itemPage }) => {
  await itemPage.open(ITEM_ID);
  expect(await itemPage.title.textContent()).toMatch(ITEM_TITLE);
  expect(await itemPage.price.textContent()).toMatch(/^US \$\d+\.\d{2}$/);
});

test('has item image @smoke', async ({ itemPage }) => {
  await itemPage.open(ITEM_ID);
  await expect(itemPage.activeImage).toBeVisible();
});
