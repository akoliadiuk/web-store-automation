import { expect } from '@playwright/test';
import { test } from '../../pages/fixtures';

test('has title', async ({ homePage }) => {
  await expect(homePage.page).toHaveTitle(/eBay/);
});

test('get logo header', async ({ homePage }) => {
  await expect(homePage.page.locator('h1 a[href *= "ebay.com"]')).toBeVisible();
});
