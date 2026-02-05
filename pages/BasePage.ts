import { Locator, Page } from "@playwright/test";



export class BasePage {
    protected page: Page;
    private loginButtonLocator: Locator


    constructor(page: Page) {
        this.page = page;
        this.loginButtonLocator = this.page.locator("//header//span[text()='Login']");
    }

    async gotoIndividualsPage() {
        await this.page.goto('/individuals');
    };

    async clickLoginButton() {
        await this.loginButtonLocator.click();
    }
}
