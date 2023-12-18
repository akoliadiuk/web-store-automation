import { expect } from '@playwright/test';
import { test } from '../../pages/fixtures';

test('has title @smoke', async ({ homePage }) => {
  await expect(homePage.page).toHaveTitle(/eBay/);
});

test('has header logo @smoke', async ({ homePage }) => {
  await expect(homePage.logoHeader).toBeVisible();
});

test('has global search @smoke', async ({ homePage }) => {
  await expect(homePage.globalSearchPanel).toBeVisible();
});
