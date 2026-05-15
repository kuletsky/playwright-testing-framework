import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class IndividualsPage extends BasePage {

    private readonly loginButtonLocator: Locator
    private readonly openAccountButton: Locator
    private readonly menuProductServices: Locator
    private readonly menuTools: Locator
    private readonly menuLearn: Locator
    private readonly menuWhyEmpower: Locator
    private readonly productServicesLinks: Locator
    private readonly dropdownRightPane: Locator
    readonly header: Locator;
    readonly footer: Locator;
    // private hamburgerMenu: Locator;


    constructor(page: Page) {
        super(page);
        this.loginButtonLocator = this.page.locator("//header//span[text()='Login']");
        // this.openAccountButton = this.page.locator("a[class='btn btn--dark btn--small primary-btn inline-flex justify-center items-center shrink-0'] span[class='z-10']");
        this.openAccountButton = this.page.getByRole('link', { name: 'Open an account' }).first();
        this.menuProductServices = this.page.locator("[aria-label='Products & Solutions']");
        this.menuTools = this.page.locator("[aria-label='Tools']");
        this.menuLearn = this.page.locator("[aria-label='Learn']");
        this.menuWhyEmpower = this.page.locator("[aria-label='Why Empower']");
        this.header = this.page.locator("#main-header-nav");
        this.footer = this.page.locator('footer');
        this.productServicesLinks = this.page.locator("#solutions-dropdown li.relative > a, #solutions-dropdown li.relative > button");
        this.dropdownRightPane = this.page.locator("#solutions-dropdown .nav-dropdown-right");
    }

    getPSMenuLinks(): { links: Locator; pane: Locator } {
        return {
            links: this.productServicesLinks,
            pane: this.dropdownRightPane
        };
    }

    getToolsMenuLinks(): { links: Locator; pane: Locator } {
        return {
            links: this.page.locator("#tools-dropdown li.relative > a, #tools-dropdown li.relative > button"),
            pane: this.page.locator("#tools-dropdown .nav-dropdown-right")
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

    getContextualLinks(): Locator {
        return this.page.locator("li a[data-once='nav-main-contextual-link-click']");
    }

    getProductAndServicesMenuLinks(): Locator {
        return this.page.locator("#solutions-dropdown li.relative > a, #solutions-dropdown li.relative > button");
    }

    // getDropdownRightPane(context: string): Locator {
    //     return this.page.locator(`#${context}-dropdown .nav-dropdown-right`);
    // }

    async clickLoginButton() {
        await this.loginButtonLocator.click();
    }

    async clickOpenAccountButton() {
        await this.openAccountButton.click();
        return this;
    }

    async clickFooterLink(linkText: string) {
        await this.page.getByRole('link', { name: linkText, exact: true }).click();
        return this;
    }

    async gotoIndividualsPage() {
        await super.goto('/individuals');
        return this;
    };

    async openPSMenu() {
        await this.menuProductServices.click()
        return this;
    }
    async openToolsMenu() {
        await this.menuTools.click()
        return this;
    }
    async openLearnMenu() {
        await this.menuLearn.click()
        return this;
    }
    async openWhyEmpowerMenu() {
        await this.menuWhyEmpower.click()
        return this;
    }

    async clickPSItem(linkText: string) {
        const openMenu = this.page.locator("#solutions-dropdown .nav-dropdown-left");
        await openMenu.getByRole('menuitem', { name: linkText, exact: true }).click();
    }

    async hoverPSItem(linkText: string) {
        const openMenu = this.page.locator("#solutions-dropdown .nav-dropdown-left");
        await openMenu.getByRole('menuitem', { name: linkText, exact: true }).hover();
        return this;
    }

    async clickToolsItem(linkText: string) {
        const openMenu = this.page.locator("#tools-dropdown .nav-dropdown-left");
        await openMenu.getByRole('menuitem', { name: linkText, exact: true }).click();
    }

    async hoverToolsItem(linkText: string) {
        const openMenu = this.page.locator("#tools-dropdown .nav-dropdown-left");
        await openMenu.getByText(linkText, { exact: true }).hover();
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

    async scrollToBottom() {
        await this.footer.evaluate(el =>
            el.scrollIntoView({ behavior: 'smooth', block: 'end' })
        );

        await this.waitForScrollToSettle();
    }

    async scrollToTop() {
        await this.header.evaluate(el =>
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        );

        await this.waitForScrollToSettle();
    }

    private async waitForScrollToSettle(timeoutMs = 5000): Promise<void> {
        await this.page.waitForFunction(() => {
            const y1 = window.scrollY;
            return new Promise<boolean>(resolve => {
                requestAnimationFrame(() => resolve(window.scrollY === y1));
            });
        }, { timeout: timeoutMs });
    }
}