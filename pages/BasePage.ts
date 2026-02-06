import { Locator, Page } from "@playwright/test";
import path from "node:path";



export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async goto(path: string) {
        try {
            await this.page.goto(path, { timeout: 45_000 });
        } catch (error) {
            console.log("Page took too long, stopping navigation manually.");
            await this.page.evaluate(() => window.stop());
        }
    }
}
