import { Page } from "@playwright/test";

export class MarketingParamsPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('/demo-single-front-door-ctas');
        await this.page.waitForLoadState('domcontentloaded');
    }
}