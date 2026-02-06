import { Locator, Page } from "@playwright/test";


export class IndividualsSignupPage {
    private page: Page;
    private goToRetirementAccount: Locator
    private scheduleAcallButton: Locator    
    private continueButton: Locator

    constructor(page: Page) {
        this.page = page;
        this.goToRetirementAccount = this.page.locator(':text-is("Continue")');
        this.scheduleAcallButton = this.page.getByText('Schedule a call');
        this.continueButton = this.page.locator('button:has-text("Continue")');
    }

    async clickGoToRetirementAccount() {
        await this.goToRetirementAccount.click();
    }

    async clickScheduleACallButton() {
        await this.scheduleAcallButton.click();
    }

    async clickContinueButton() {
        await this.continueButton.click();
    }
}