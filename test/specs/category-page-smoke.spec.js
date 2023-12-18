import { expect } from '@playwright/test';
import { test } from '../../pages/fixtures';

const CATEGORY_PATH = 'Home-Garden/11700/bn_1853126';
test('has title', async ({ categoryPage }) => {
  await categoryPage.open(CATEGORY_PATH);
  await expect(categoryPage.page).toHaveTitle(/Home & Garden/);
});

test('has header logo', async ({ categoryPage }) => {
  await categoryPage.open(CATEGORY_PATH);
  await expect(categoryPage.logoHeader).toBeVisible();
});

test('has global search', async ({ categoryPage }) => {
  await categoryPage.open(CATEGORY_PATH);
  await expect(categoryPage.globalSearchPanel).toBeVisible();
});

test('has category banner', async ({ categoryPage }) => {
  await categoryPage.open(CATEGORY_PATH);
  await expect(categoryPage.categoryBanner).toBeVisible();
});

test('has category navigation menu', async ({ categoryPage }) => {
  await categoryPage.open(CATEGORY_PATH);
  await expect(categoryPage.categoryNavigationMenu).toBeVisible();
});
