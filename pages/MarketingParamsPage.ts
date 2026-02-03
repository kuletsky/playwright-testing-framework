import { Page } from "@playwright/test";

export class MarketingParamsPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // LOCATORS
    // ═══════════════════════════════════════════════════════════════════════════

    private locators: Record<string, string> = {
        defaultForm: "[aria-label='View form in default state']",
        RetirementIntentAffiliate: "[aria-label='View form with RetirementIntentAffiliate param']",


    };

    async goto() {
        await this.page.goto('/demo-single-front-door-ctas');
        await this.page.waitForLoadState('domcontentloaded');
    }

    async clickElement(selector: string) {
        await this.page.locator(this.locators[selector]).click();
    }

    get getMarketingParamLocator() {
        return this.page.locator('.js-form__marketing-param');
    }

    get getSkipFirstUseLocator() {
        return this.page.locator('.js-form__skip-first-use');
    }

    get getFormHeading() {
        return this.page.locator('h4 p span');
    }
}