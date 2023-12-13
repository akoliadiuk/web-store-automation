import { test, expect } from '@playwright/test';

test.afterEach(async ({ page }) => await page.close());

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/eBay/);
});

test('get logo header', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1 a[href *= "ebay.com"]')).toBeVisible();
});
