import Page from './Page';

export default class ItemPage extends Page {
  title = this.page.locator('.x-item-title__mainTitle .ux-textspans');
  price = this.page.locator('.x-price-primary .ux-textspans');
  #imageCarouselContainer = this.page.locator('.filmstrip .ux-image-carousel-container');
  activeImage = this.#imageCarouselContainer.locator('.active img');

  async open(itemId) {
    if (!(/^\d{12}$/.test(itemId))) {
      throw new Error('Invalid item id!');
    }
    this.url = `/itm/${itemId}`;
    await super.open();
  }
}
