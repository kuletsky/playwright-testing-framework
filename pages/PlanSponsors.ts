import { Page, Locator } from '@playwright/test';



export class PlanSponsorsPage {
    private page: Page;
    private loginButton: Locator;
    private menuMarkets: Locator;
    private menuSolutions: Locator;
    private menuExperience: Locator;
    private menuLearn: Locator;
    private menuWhyEmpower: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginButton = this.page.locator("[data-once='click-secondary-dark-button empulsify-button-ripple']");
        this.menuMarkets = this.page.locator("[aria-label='Markets']");
        this.menuSolutions = this.page.locator("[aria-label='Solutions']");
        this.menuExperience = this.page.locator("[aria-label='Experience']");
        this.menuLearn = this.page.locator("[aria-label='Learn']");
        this.menuWhyEmpower = this.page.locator("[aria-label='Why Empower']");
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

    async openMarketsMenu() {
        await this.menuMarkets.click();
    }
    async openSolutionsMenu() {
        await this.menuSolutions.click();
    }
    async openExperienceMenu() {
        await this.menuExperience.click();
    }
    async openLearnMenu() {
        await this.menuLearn.click();
    }

    async openWhyEmpowerMenu() {
        await this.menuWhyEmpower.click();
    }

    async clickMarketsItem(linkText: string) {
        const openMenu = this.page.locator("#markets-dropdown .nav-dropdown-left");
        await openMenu.getByRole('menuitem', { name: linkText, exact: true }).click();
    }

    async hoverMarketsItem(linkText: string) {
        const openMenu = this.page.locator("#markets-dropdown .nav-dropdown-left");
        await openMenu.getByRole('menuitem', { name: linkText, exact: true }).hover();
    }
}