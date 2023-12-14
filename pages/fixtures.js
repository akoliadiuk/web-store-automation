import { test as baseTest } from '@playwright/test';
import HomePage from '../pages/HomePage';

export const test = baseTest.extend({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.open();
    await use(homePage);
    await homePage.close();
  },
});
