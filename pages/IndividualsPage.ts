import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class IndividualsPage extends BasePage {

    private loginButtonLocator: Locator
    private openAccountButton: Locator
    private menuProductServices: Locator
    private menuTools: Locator
    private menuLearn: Locator
    private menuWhyEmpower: Locator

    constructor(page: Page) {
        super(page);
        this.loginButtonLocator = this.page.locator("//header//span[text()='Login']");
        this.openAccountButton = this.page.locator("a[class='btn btn--dark btn--small primary-btn inline-flex justify-center items-center shrink-0'] span[class='z-10']");
        this.menuProductServices = this.page.locator("[aria-label='Products & Solutions']");
        this.menuTools = this.page.locator("[aria-label='Tools']");
        this.menuLearn = this.page.locator("[aria-label='Learn']");
        this.menuWhyEmpower = this.page.locator("[aria-label='Why Empower']");
    }



    async clickLoginButton() {
        await this.loginButtonLocator.click();
    }

    async clickOpenAccountButton() {
        await this.openAccountButton.click();
    }

    async clickFooterLink(linkText: string) {
        await this.page.getByRole('link', { name: linkText, exact: true }).click();
    }

    async gotoIndividualsPage() {
        await super.goto('/individuals');
    };

    async clickMenuProductServices() {
        await this.menuProductServices.click()
    }
    async clickMenuTools() {
        await this.menuTools.click()
    }
    async clickMenuLearn() {
        await this.menuLearn.click()
    }
    async clickMenuWhyEmpower() {
        await this.menuWhyEmpower.click()
    }

    async clickOpenMenuLink(linkText: string) {
        const openMenu = this.page.locator("#solutions-dropdown .nav-dropdown-left");

        await openMenu.getByRole('menuitem', { name: linkText, exact: true }).click();
    }
}