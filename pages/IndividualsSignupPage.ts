import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class IndividualsSignupPage extends BasePage {
    // private page: Page;
    private goToRetirementAccount: Locator
    private scheduleAcallButton: Locator
    // private continueButton: Locator
    private personalCashButton: Locator;
    private premierIRAButton: Locator;
    readonly optionalPopup: Locator;


    constructor(page: Page) {
        super(page)
        this.goToRetirementAccount = this.page.locator(':text-is("Continue")');
        this.scheduleAcallButton = this.page.getByText('Schedule a call');
        // this.continueButton = this.page.locator('button:has-text("Continue")');
        this.personalCashButton = this.page.getByRole('link', { name: 'Open account' }).nth(2);
        this.premierIRAButton = this.page.locator('a[href*="premier-ira"]');
        this.optionalPopup = this.page.locator('.ui-dialog');
    }

    async clickGoToRetirementAccount() {
        await this.goToRetirementAccount.click();
    }

    async clickScheduleACallButton() {
        await this.scheduleAcallButton.click();
    }

    // async clickContinueButton() {
    //     await this.continueButton.click();
    // }

    async clickPersonalCashOpenAccount() {
        await this.personalCashButton.click();
    }

    async clickPremierIRAOpenAccount() {
        await this.premierIRAButton.click();
    }

    async handleOptionalPopup() {
        try {
            await this.optionalPopup.waitFor({ state: 'visible', timeout: 5000 });
            await this.continueButton.click();
        } catch (error) {
            console.log("Optional popup did not appear, proceeding with the test.");
        }
    }
}