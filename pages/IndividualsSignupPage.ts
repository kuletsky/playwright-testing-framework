import { Locator, Page } from "@playwright/test";


export class IndividualsSignupPage {
    private page: Page;
    private goToRetirementAccount: Locator

    constructor(page: Page) {
        this.page = page;
        this.goToRetirementAccount = this.page.locator(':text-is("Continue")');
    }

    async clickGoToRetirementAccount() {
        await this.goToRetirementAccount.click();
    }
}