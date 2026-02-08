import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class FinancialProfessionalsPage extends BasePage {
    private loginButton: Locator
    private registerRixtremaButton: Locator
    private iagreePopupButton: Locator
    private loginFinancialProfessionalsButton: Locator
    private registerFinancialProfessionalsButton: Locator
    private menuSolutions: Locator
    private menuExperience: Locator
    private menuResources: Locator
    private menuInsights: Locator   
    private menuWhyEmpower: Locator

    constructor(page: Page) {
        super(page);
        this.loginButton = this.page.locator("li a[href='/financial-professionals-login']");
        this.registerRixtremaButton = this.page.locator(".card-3 [type='button-v2']");
        this.iagreePopupButton = this.page.locator('.swal2-confirm');
        this.loginFinancialProfessionalsButton = this.page.locator(".card-1 [type='button-v2']");
        this.registerFinancialProfessionalsButton = this.page.locator(".card-2 [type='button-v2']");
        this.menuSolutions = this.page.locator("[aria-label='Solutions']");
        this.menuExperience = this.page.locator("[aria-label='Experience']");
        this.menuResources = this.page.locator("[aria-label='Resources']");
        this.menuInsights = this.page.locator("[aria-label='Insights']");
        this.menuWhyEmpower = this.page.locator("[aria-label='Why Empower']");

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

    
    async clickIAgreePopup() {
        await this.iagreePopupButton.click();
    }

    async clickLoginFinancialProfessionalsButton() {
        await this.loginFinancialProfessionalsButton.click();
    }

    async clickRegisterFinancialProfessionalsButton() {
        await this.registerFinancialProfessionalsButton.click();
    }

    async clickMenuSolutions() {
        await this.menuSolutions.click();
    }

    async clickMenuExperience() {
        await this.menuExperience.click();
    }

    async clickMenuResources() {
        await this.menuResources.click();
    }

    async clickMenuInsights() {
        await this.menuInsights.click();
    }

    async clickMenuWhyEmpower() {
        await this.menuWhyEmpower.click();
    }
}