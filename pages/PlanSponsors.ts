import { Page, Locator } from '@playwright/test';



export class PlanSponsorsPage {
    private page: Page;
    private loginButton: Locator;
    private menuMarkets: Locator;
    private menuSolutions: Locator;
    private menuExpirience: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginButton = this.page.locator("[data-once='click-secondary-dark-button empulsify-button-ripple']");
        this.menuMarkets = this.page.locator("[aria-label='Markets']");
        this.menuSolutions = this.page.locator("[aria-label='Solutions']");
        this.menuExpirience = this.page.locator("[aria-label='Experience']");
    }

    async gotoPlanSponsorsPage() {
        try {
            await this.page.goto('/plan-sponsors', { timeout: 20_000 });
        } catch (error) {
            console.log("Page took too long, stopping navigation manually.");
            // This stops the 'spinning' in the browser
            await this.page.evaluate(() => window.stop());
        }
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async clickMenuMarkets() {
        await this.menuMarkets.click();
    }
    async clickMenuSolutions() {
        await this.menuSolutions.click();
    }
    async clickMenuExperience() {
        await this.menuExpirience.click();
    }
}