import { Page, Locator } from '@playwright/test';



export class PlanSponsorsPage {
    private page: Page;
    private loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginButton = this.page.locator("[data-once='click-secondary-dark-button empulsify-button-ripple']");
    }

    async gotoPlanSponsorsPage() {
        try {
            await this.page.goto('/plan-sponsors', { timeout: 10_000 });
        } catch (error) {
            console.log("Page took too long, stopping navigation manually.");
            // This stops the 'spinning' in the browser
            await this.page.evaluate(() => window.stop());
        }
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

}