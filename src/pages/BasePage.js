export class BasePage {
    constructor(page, url) {
        this.page = page;
        this.url = url;
    }
    async open() {
        await this.page.goto(this.url);
    }
}
