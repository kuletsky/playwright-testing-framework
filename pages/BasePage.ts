import { Locator, Page } from "@playwright/test";



export class BasePage {
    protected readonly page: Page;
    protected readonly continueButton: Locator;

    // protected readonly firstSubmenu: Locator;
    // protected readonly secondSubmenu: Locator;
    // protected readonly linksSubmenu: Locator;
    // protected readonly thirdSubmenu: Locator;
    // protected readonly forthSubmenu: Locator;

    constructor(page: Page) {
        this.page = page;
        this.continueButton = this.page.locator('button:has-text("Continue")');
        // this.firstSubmenu = this.page.locator('[aria-controls="dropdown-mobile-0"]');
        // this.secondSubmenu = this.page.locator('[aria-controls="dropdown-mobile-1"]');
        // this.linksSubmenu = this.page.locator("#dropdown-mobile-0 a");
        // this.thirdSubmenu = this.page.locator('[aria-controls="dropdown-mobile-2"]');
        // this.forthSubmenu = this.page.locator('[aria-controls="dropdown-mobile-3"]');
    }


    async goto(path: string) {
        try {
            await this.page.goto(path, { timeout: 45_000 });
        } catch (error) {
            console.log("Page took too long, stopping navigation manually.");
            await this.page.evaluate(() => window.stop());
        }
    }

    async clickContinueButton() {
        await this.continueButton.click();
    }


    //MOBILE LOCATORS AND METHODS

    async openHamburger() {
        await this.page.locator("#hamburger-menu").click();
    }

    async getLinksFirstSubmenu() {
        return this.page.locator("#dropdown-mobile-0 a, #dropdown-mobile-0 button");
    }
    async getLinksSecondSubmenu() {
        return this.page.locator("#dropdown-mobile-1 a");
    }
    async getLinksThirdSubmenu() {
        return this.page.locator("#dropdown-mobile-2 a, #dropdown-mobile-2 button");
    }
    async getLinksForthSubmenu() {
        return this.page.locator("#dropdown-mobile-3 a");
    }
    async getLinksFithSubmenu() {
        return this.page.locator("#dropdown-mobile-4 a");
    }


    async openFirstSubmenu() {
        await this.page.locator('[aria-controls="dropdown-mobile-0"]').click();
    }
    async openSecondSubmenu() {
        await this.page.locator('[aria-controls="dropdown-mobile-1"]').click();
    }
    async openThirdSubmenu() {
        await this.page.locator('[aria-controls="dropdown-mobile-2"]').click();
    }
    async openForthSubmenu() {
        await this.page.locator('[aria-controls="dropdown-mobile-3"]').click();
    }
    async openFithSubmenu() {
        await this.page.locator('[aria-controls="dropdown-mobile-4"]').click();
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

    async clickFithSubmenuItem(linkText: string) {
        const submenu = this.page.locator("#dropdown-mobile-4");
        await submenu.getByRole('menuitem', { name: linkText, exact: true }).click();
    }
}
