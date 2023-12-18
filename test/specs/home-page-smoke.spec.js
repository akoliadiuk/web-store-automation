import { expect } from '@playwright/test';
import { test } from '../../pages/fixtures';

test('has title', async ({ homePage }) => {
  await expect(homePage.page).toHaveTitle(/eBay/);
});

test('has header logo', async ({ homePage }) => {
  await expect(homePage.logoHeader).toBeVisible();
});

test('has global search', async ({ homePage }) => {
  await expect(homePage.globalSearchPanel).toBeVisible();
});
