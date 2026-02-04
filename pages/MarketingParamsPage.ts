import { Locator, Page } from "@playwright/test";

export class MarketingParamsPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get getMarketingParamLocator() { return this.page.locator('.js-form__marketing-param'); }
    get getSkipFirstUseLocator() { return this.page.locator('.js-form__skip-first-use'); }

    // ═══════════════════════════════════════════════════════════════════════════
    // LOCATORS
    // ═══════════════════════════════════════════════════════════════════════════

    private locators: Record<string, string> = {
        defaultForm: "[aria-label='View form in default state']",
        RetirementIntentAffiliate: "[aria-label='View form with RetirementIntentAffiliate param']",
        zs_tools: "[aria-label='View form with zs_tools param']",
        zs_investment: "[aria-label='View form with zs_investment param']",
        zs_retirement: "[aria-label='View form with zs_retirement param']",
        zs_networth: "[aria-label='View form with zs_networth param']",
        zs_budgeting: "[aria-label='View form with zs_budgeting param']",
        zs_cashflow: "[aria-label='View form with zs_cashflow param']",
        zs_savingsplanner: "[aria-label='View form with zs_savingsplanner param']",
        zs_onboarding: "[aria-label='View form with zs_onboarding param']",
        zs_customretirement: "[aria-label='View form with zs_customretirement param']",
        ao_premierira: "[aria-label='View form with ao_premierira param']",
        ao_premierinvestmentaccount: "[aria-label='View form with ao_premierinvestmentaccount param']",
        ao_personalstrategy: "[aria-label='View form with ao_personalstrategy param']",
        ao_personalcash: "[aria-label='View form with ao_personalcash param']",
        impact_partner: "[aria-label='View form with impact cookie set']",
        referral: "[aria-label='View form with referral cookie set']",
        investment_checkup: "[aria-label='View zero state form without marketing_param custom URL query']",



    };

    async goto() {
        await this.page.goto('/demo-single-front-door-ctas');
        await this.page.waitForLoadState('domcontentloaded');
    }

    async clickElement(selector: string) {
        await this.page.locator(this.locators[selector]).click();
    }



    getFormHeading(elementName: string): Locator {

        if (elementName == 'referral') {
            return this.page.locator('h4 p.reg-form-title--client');
        }
        if (elementName == 'ao_personalstrategy') {
            return this.page.locator('h4 p span span');
        }
        if (elementName == 'impact_partner') {
            return this.page.locator('h4 p span span');
        }
        if (elementName == 'investment_checkup') {
            return this.page.locator('h4 p span span');
        }
        
        return this.page.locator('h4 p span');

    }
}