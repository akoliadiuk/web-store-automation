import { test as baseTest } from '@playwright/test';
import HomePage from '../pages/HomePage';
import CategoryPage from './CategoryPage';

export const test = baseTest.extend({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.open();
    await use(homePage);
    await homePage.close();
  },
  categoryPage: async ({ page }, use) => {
    const categoryPage = new CategoryPage(page);
    await use(categoryPage);
    await categoryPage.close();
  },
});
