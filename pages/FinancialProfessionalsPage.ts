import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class FinancialProfessionalsPage extends BasePage {
    private loginButton: Locator
    private registerRixtremaButton: Locator
    // private continueButton: Locator
    private iagreePopupButton: Locator
    private loginFinancialProfessionalsButton: Locator
    private registerFinancialProfessionalsButton: Locator

    constructor(page: Page) {
        super(page);
        this.loginButton = this.page.locator("li a[href='/financial-professionals-login']");
        this.registerRixtremaButton = this.page.locator(".card-3 [type='button-v2']");
        this.iagreePopupButton = this.page.locator('.swal2-confirm');
        // this.continueButton = this.page.locator('button:has-text("Continue")');
        this.loginFinancialProfessionalsButton = this.page.locator(".card-1 [type='button-v2']");
        this.registerFinancialProfessionalsButton = this.page.locator(".card-2 [type='button-v2']");

    }

    async gotoFinProfPage() {
        await this.page.goto('/financial-professionals');
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async clickRegisterRixtremaButton() {
        await this.registerRixtremaButton.click();
    }

    // async clickContinueButton() {
    //     await super.continueButton.click();
    // }
    
    async clickIAgreePopup() {
        await this.iagreePopupButton.click();
    }

    async clickLoginFinancialProfessionalsButton() {
        await this.loginFinancialProfessionalsButton.click();
    }

    async clickRegisterFinancialProfessionalsButton() {
        await this.registerFinancialProfessionalsButton.click();
    }
}