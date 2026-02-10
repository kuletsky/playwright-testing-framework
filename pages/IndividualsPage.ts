import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class IndividualsPage extends BasePage {

    private loginButtonLocator: Locator
    private openAccountButton: Locator
    private menuProductServices: Locator
    private menuTools: Locator
    private menuLearn: Locator
    private menuWhyEmpower: Locator
    readonly header: Locator;
    readonly footer: Locator;
    private hamburgerMenu: Locator;


    constructor(page: Page) {
        super(page);
        this.loginButtonLocator = this.page.locator("//header//span[text()='Login']");
        this.openAccountButton = this.page.locator("a[class='btn btn--dark btn--small primary-btn inline-flex justify-center items-center shrink-0'] span[class='z-10']");
        this.menuProductServices = this.page.locator("[aria-label='Products & Solutions']");
        this.menuTools = this.page.locator("[aria-label='Tools']");
        this.menuLearn = this.page.locator("[aria-label='Learn']");
        this.menuWhyEmpower = this.page.locator("[aria-label='Why Empower']");
        this.header = this.page.locator("#main-header-nav");
        this.footer = this.page.locator('footer');
        this.hamburgerMenu = this.page.locator("#hamburger-menu");
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

    async openProductAndServicesMenu() {
        await this.menuProductServices.click()
    }
    async openToolsMenu() {
        await this.menuTools.click()
    }
    async openLearnMenu() {
        await this.menuLearn.click()
    }
    async openWhyEmpowerMenu() {
        await this.menuWhyEmpower.click()
    }

    async clickPSItem(linkText: string) {
        const openMenu = this.page.locator("#solutions-dropdown .nav-dropdown-left");
        await openMenu.getByRole('menuitem', { name: linkText, exact: true }).click();
    }

    async hoverPSItem(linkText: string) {
        const openMenu = this.page.locator("#solutions-dropdown .nav-dropdown-left");
        await openMenu.getByRole('menuitem', { name: linkText, exact: true }).hover();
    }

    async clickToolsItem(linkText: string) {
        const openMenu = this.page.locator("#tools-dropdown .nav-dropdown-left");
        await openMenu.getByRole('menuitem', { name: linkText, exact: true }).click();
    }

    async hoverToolsItem(linkText: string) {
        const openMenu = this.page.locator("#tools-dropdown .nav-dropdown-left");
        await openMenu.getByRole('menuitem', { name: linkText, exact: true }).hover();
    }

    async clickLearnItem(linkText: string) {
        const openMenu = this.page.locator("#learn-dropdown .nav-dropdown-left");
        await openMenu.getByRole('menuitem', { name: linkText, exact: true }).click();
    }

    async hoverLearnItem(linkText: string) {
        const openMenu = this.page.locator("#learn-dropdown .nav-dropdown-left");
        await openMenu.getByRole('menuitem', { name: linkText, exact: true }).hover();
    }

    async clickWhyEmpowerItem(linkText: string) {
        const openMenu = this.page.locator("#why-empower-dropdown .nav-dropdown-left");
        await openMenu.getByRole('menuitem', { name: linkText, exact: true }).click();
    }

    async hoverWhyEmpowerItem(linkText: string) {
        const openMenu = this.page.locator("#why-empower-dropdown .nav-dropdown-left");
        await openMenu.getByRole('menuitem', { name: linkText, exact: true }).hover();
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


    //MOBILE LOCATORS AND METHODS
    async openHamburger() {
        await this.hamburgerMenu.click();
    }

    // async openSubmenuProductsAndServices() {
    //     await this.submenuProductsAndServices.click();
    // }

    async clickHamburgerLink(linkText: string) {
        await this.page.getByRole('link', { name: linkText, exact: true }).click();
    }

    async clickFirstSubmenuItem(linkText: string) {
        const submenu = this.page.locator("#dropdown-mobile-0");
        await submenu.getByRole('menuitem', { name: linkText, exact: true }).click();
    }

    async clickSecondSubmenuItem(linkText: string) {
        const submenu = this.page.locator("#dropdown-mobile-1");
        await submenu.getByRole('menuitem', { name: linkText, exact: true }).click();
    }

    async clickThirdSubmenuItem(linkText: string) {
        const submenu = this.page.locator("#dropdown-mobile-2");
        await submenu.getByRole('menuitem', { name: linkText, exact: true }).click();
    }

    async clickForthSubmenuItem(linkText: string) {
        const submenu = this.page.locator("#dropdown-mobile-3");
        await submenu.getByRole('menuitem', { name: linkText, exact: true }).click();
    }
}