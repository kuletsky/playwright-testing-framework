import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SfdPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    async navigateToSfd() {
        await this.page.goto("https://empwrretiremtstg.prod.acquia-sites.com/signup/cash?marketing_param=ao_personalcash");
    }
}