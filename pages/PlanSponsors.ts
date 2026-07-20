import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';



export class PlanSponsorsPage extends BasePage{
    // private page: Page;
    private loginButton: Locator;
    private menuMarkets: Locator;
    private menuSolutions: Locator;
    private menuExperience: Locator;
    private menuLearn: Locator;
    private menuWhyEmpower: Locator;

    constructor(page: Page) {
        super(page);
        this.loginButton = this.page.locator("[data-once='nav-fp-ps-login-link click-secondary-dark-button empulsify-button-ripple']");
        this.menuMarkets = this.page.locator("[aria-label='Markets']");
        this.menuSolutions = this.page.locator("[aria-label='Solutions']");
        this.menuExperience = this.page.locator("[aria-label='Experience']");
        this.menuLearn = this.page.locator("[aria-label='Learn']");
        this.menuWhyEmpower = this.page.locator("[aria-label='Why Empower']");
    }

    async gotoPlanSponsorsPage() {
        await super.goto('/plan-sponsors');
        return this;
    }

    getMarketsMenuLinks(): { links: Locator; pane: Locator } {
        return {
            links: this.page.locator("#markets-dropdown li.relative > a:visible, #markets-dropdown li.relative > button:visible"),
            pane: this.page.locator("#markets-dropdown .nav-dropdown-right")
        };
    }

    getSolutionsMenuLinks(): { links: Locator; pane: Locator } {
        return {
            links: this.page.locator("#solutions-dropdown li.relative > a, #solutions-dropdown li.relative > button"),
            pane: this.page.locator("#solutions-dropdown .nav-dropdown-right")
        };
    }

    getExperienceMenuLinks(): { links: Locator; pane: Locator } {
        return {
            links: this.page.locator("#experience-dropdown li.relative > a, #experience-dropdown li.relative > button"),
            pane: this.page.locator("#experience-dropdown .nav-dropdown-right")
        };
    }

    getLearnMenuLinks(): { links: Locator; pane: Locator } {
        return {
            links: this.page.locator("#learn-dropdown li.relative > a, #learn-dropdown li.relative > button"),
            pane: this.page.locator("#learn-dropdown .nav-dropdown-right")
        };
    }

    getWhyEmpowerMenuLinks(): { links: Locator; pane: Locator } {
        return {
            links: this.page.locator("#why-empower-dropdown li.relative > a, #why-empower-dropdown li.relative > button"),
            pane: this.page.locator("#why-empower-dropdown .nav-dropdown-right")
        };
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async openMarketsMenu() {
        await this.menuMarkets.click();
        return this;
    }
    async openSolutionsMenu() {
        await this.menuSolutions.click();
        return this;
    }
    async openExperienceMenu() {
        await this.menuExperience.click();
        return this;
    }
    async openLearnMenu() {
        await this.menuLearn.click();
        return this;
    }

    async openWhyEmpowerMenu() {
        await this.menuWhyEmpower.click();
        return this;
    }

    async clickMarketsItem(linkText: string) {
        const openMenu = this.page.locator("#markets-dropdown .nav-dropdown-left");
        await openMenu.getByRole('menuitem', { name: linkText, exact: true }).click();
    }

    async hoverMarketsItem(linkText: string) {
        const openMenu = this.page.locator("#markets-dropdown .nav-dropdown-left");
        await openMenu.getByRole('menuitem', { name: linkText, exact: true }).hover();
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

    async clickLearnItem(linkText: string) {
        const openMenu = this.page.locator("#learn-dropdown .nav-dropdown-left");
        await openMenu.getByRole('menuitem', { name: linkText, exact: true }).click();
    }

    async hoverLearnItem(linkText: string) {
        const openMenu = this.page.locator("#learn-dropdown .nav-dropdown-left");
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
}