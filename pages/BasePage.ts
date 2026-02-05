import { Locator, Page } from "@playwright/test";



export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async gotoIndividualsPage() {
        await this.page.goto('/individuals');
    };

 
}
