import { BASE_URL } from '../playwright.config';

export default class Page {
  #fullUrl;

  constructor(page, url) {
    this.page = page;
    this.url = url;
    this.logoHeader = this.page.locator('header a[href *= "ebay.com"] img');
    this.globalSearchPanel = this.page.locator('//input[@placeholder="Search for anything"]' +
      '/ancestor::form');
  }

  get url() {
    return this.#fullUrl;
  }

  set url(url) {
    this.#fullUrl = /(?:https?):\/\//.test(url) ? url : BASE_URL + (url ?? '/');
  }

  async open() {
    await this.page.goto(this.#fullUrl);
    await this.page.waitForLoadState();
  }

  async close() {
    await this.page.close();
  }
}
