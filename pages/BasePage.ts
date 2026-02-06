import { Locator, Page } from "@playwright/test";
import path from "node:path";



export class BasePage {
    protected readonly page: Page;
    protected readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.continueButton = this.page.locator('button:has-text("Continue")');
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
}
