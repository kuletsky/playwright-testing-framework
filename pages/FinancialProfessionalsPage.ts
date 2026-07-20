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
    private menuFinancialProfessionals: Locator

    constructor(page: Page) {
        super(page);
        this.loginButton = this.page.locator("li a[href='/financial-professionals-login?btn=1']");
        this.registerRixtremaButton = this.page.locator(".card-3 [type='button-v2']");
        this.iagreePopupButton = this.page.locator('.swal2-confirm');
        this.loginFinancialProfessionalsButton = this.page.locator(".card-1 [type='button-v2']");
        this.registerFinancialProfessionalsButton = this.page.locator(".card-2 [type='button-v2']");
        this.menuSolutions = this.page.locator("[aria-label='Solutions']");
        this.menuExperience = this.page.locator("[aria-label='Experience']");
        this.menuResources = this.page.locator("[aria-label='Resources']");
        this.menuInsights = this.page.locator("[aria-label='Insights']");
        this.menuWhyEmpower = this.page.locator("[aria-label='Why Empower']");
        this.menuFinancialProfessionals = this.page.locator("[aria-label='Financial Professionals']");
    }

    async gotoFinProfPage() {
        await super.goto('/financial-professionals');
        return this;
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

    async openSolutionsMenu() {
        await this.menuSolutions.click();
        return this;
    }

    async openExperienceMenu() {
        await this.menuExperience.click();
        return this;
    }

    async openResourcesMenu() {
        await this.menuResources.click();
        return this;
    }

    async openInsightsMenu() {
        await this.menuInsights.click();
        return this;
    }

    async openWhyEmpowerMenu() {
        await this.menuWhyEmpower.click();
        return this;
    }

    async clickSolutionsItem(linkText: string) {
        const openMenu = this.page.locator("#solutions-dropdown .nav-dropdown-left");
        await openMenu.getByRole('menuitem', { name: linkText, exact: true }).click();
    }

    async hoverSolutionsItem(linkText: string) {
        const openMenu = this.page.locator("#solutions-dropdown .nav-dropdown-left");
        await openMenu.getByRole('menuitem', { name: linkText, exact: true }).hover();
        return this;
    }

    async clickExperienceItem(linkText: string) {
        const openMenu = this.page.locator("#experience-dropdown .nav-dropdown-left");
        await openMenu.getByRole('menuitem', { name: linkText, exact: true }).click();
    }

    async hoverExperienceItem(linkText: string) {
        const openMenu = this.page.locator("#experience-dropdown .nav-dropdown-left");
        await openMenu.getByRole('menuitem', { name: linkText, exact: true }).hover();
        return this;
    }

    async clickResourcesItem(linkText: string) {
        const openMenu = this.page.locator("#resources-dropdown .nav-dropdown-left");
        await openMenu.getByRole('menuitem', { name: linkText, exact: true }).click();
    }

    async hoverResourcesItem(linkText: string) {
        const openMenu = this.page.locator("#resources-dropdown .nav-dropdown-left");
        await openMenu.getByRole('menuitem', { name: linkText, exact: true }).hover();
        return this;
    }

    async clickInsightsItem(linkText: string) {
        const openMenu = this.page.locator("#insights-dropdown .nav-dropdown-left");
        await openMenu.getByRole('menuitem', { name: linkText, exact: true }).click();
    }

    async hoverInsightsItem(linkText: string) {
        const openMenu = this.page.locator("#insights-dropdown .nav-dropdown-left");
        await openMenu.getByRole('menuitem', { name: linkText, exact: true }).hover();
        return this;
    }

    async clickWhyEmpowerItem(linkText: string) {
        const openMenu = this.page.locator("#why-empower-dropdown .nav-dropdown-left");
        await openMenu.getByRole('menuitem', { name: linkText, exact: true }).click();
    }

    async hoverWhyEmpowerItem(linkText: string) {
        const openMenu = this.page.locator("#why-empower-dropdown .nav-dropdown-left");
        await openMenu.getByRole('menuitem', { name: linkText, exact: true }).hover();
        return this;
    }

    getSolutionsMenuLinks() {
        return {
            links: this.page.locator("#solutions-dropdown li.relative > a, #solutions-dropdown li.relative > button"),
            pane: this.page.locator("#solutions-dropdown .nav-dropdown-right")
        }
    }

    getExperienceMenuLinks() {
        return {
            links: this.page.locator("#experience-dropdown li.relative > a, #experience-dropdown li.relative > button"),
            pane: this.page.locator("#experience-dropdown .nav-dropdown-right")
        }
    }

    getResourcesMenuLinks() {
        return {
            links: this.page.locator("#resources-dropdown li.relative > a, #resources-dropdown li.relative > button"),
            pane: this.page.locator("#resources-dropdown .nav-dropdown-right")
        }
    }

    getInsightsMenuLinks() {
        return {
            links: this.page.locator("#insights-dropdown li.relative > a, #insights-dropdown li.relative > button"),
            pane: this.page.locator("#insights-dropdown .nav-dropdown-right")
        }
    }

    getWhyEmpowerMenuLinks() {
        return {
            links: this.page.locator("#why-empower-dropdown li.relative > a, #why-empower-dropdown li.relative > button"),
            pane: this.page.locator("#why-empower-dropdown .nav-dropdown-right")
        }
    }
}