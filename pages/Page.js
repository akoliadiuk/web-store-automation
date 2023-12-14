export default class Page {
  constructor(page) {
    this.page = page;
    this.relativePath = '/';
  }

  async open() {
    await this.page.goto(this.relativePath);
  }

  async close() {
    await this.page.close();
  }
}
