import { test as baseTest } from '@playwright/test';
import HomePage from '../pages/HomePage';
import CategoryPage from './CategoryPage';
import ItemPage from './ItemPage';

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
  itemPage: async ({ page }, use) => {
    const itemPage = new ItemPage(page);
    await use(itemPage);
    await itemPage.close();
  },
});
