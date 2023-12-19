import Page from './Page';

export default class CategoryPage extends Page {
  categoryBanner = this.page.locator('section.title-banner');
  categoryNavigationMenu = this.page.locator('nav #leftnav');

  async open(categoryPath) {
    if (!(/^([a-zA-Z-]+)\/\d+\/bn_\d+$/.test(categoryPath))) {
      throw new Error('Invalid category path');
    }
    this.url = `/b/${categoryPath}`;
    await super.open();
  }
}
