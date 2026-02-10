import { Locator, Page } from "@playwright/test";



export class BasePage {
    protected readonly page: Page;
    protected readonly continueButton: Locator;
    protected readonly firstSubmenu: Locator;
    protected readonly secondSubmenu: Locator;
    protected readonly linksSubmenu: Locator;

    constructor(page: Page) {
        this.page = page;
        this.continueButton = this.page.locator('button:has-text("Continue")');
        this.firstSubmenu = this.page.locator('[aria-controls="dropdown-mobile-0"]');
        this.secondSubmenu = this.page.locator('[aria-controls="dropdown-mobile-1"]');
        this.linksSubmenu = this.page.locator("#dropdown-mobile-0 a");

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

    async getLinksFirstSubmenu() {
        return this.linksSubmenu;
    }
    async getLinksSecondSubmenu() {
        return this.page.locator("#dropdown-mobile-1 a");
    }
    async getLinksThirdSubmenu() {
        return this.page.locator("#dropdown-mobile-2 a");
    }
    async getLinksForthSubmenu() {
        return this.page.locator("#dropdown-mobile-3 a");
    }


    async openFirstSubmenu() {
        await this.firstSubmenu.click();
    }
    async openSecondSubmenu() {
        await this.secondSubmenu.click();
    }
    async openThirdSubmenu() {
        await this.page.locator('[aria-controls="dropdown-mobile-2"]').click();
    }
    async openForthSubmenu() {
        await this.page.locator('[aria-controls="dropdown-mobile-3"]').click();
    }
}
