import Page from './Page';

export default class CategoryPage extends Page {
  categoryBanner = this.page.locator('section.title-banner');
  categoryNavigationMenu = this.page.locator('nav #leftnav');

  async open(categoryPath) {
    this.url = `/b/${categoryPath}`;
    await super.open();
  }
}
