import { Locator, Page } from "@playwright/test";


export class LoginV1Page {
    private page: Page;
    private loginButtonLocator: Locator
    private loginRetirementButtonLocator: Locator

    constructor(page: Page) {
        this.page = page;
        this.loginButtonLocator = this.page.locator("//header//span[text()='Login']");
        this.loginRetirementButtonLocator = this.page.locator("[aria-label='Log in to retirement plan']");
    }

    async gotoIndividualsPage() {
        await this.page.goto('/individuals');
    };

    async clickLoginButton() {
        await this.loginButtonLocator.click();
    }

    async clickLoginRetirementAccount() {
        await this.loginRetirementButtonLocator.click();
    }
}