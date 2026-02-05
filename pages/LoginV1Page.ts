import { Locator, Page } from "@playwright/test";


export class LoginV1Page {
    private page: Page;
    private loginButtonLocator: Locator
    private loginRetirementButtonLocator: Locator
    private loginPersonalDashboardButtonLocator: Locator
    private loginPersonalWealthButtonLocator: Locator
    private loginRetirementPlanSponsorsButtonLocator: Locator
    private loginRetirementPlanFinancialProfessionalsButtonLocator: Locator

    constructor(page: Page) {
        this.page = page;
        this.loginButtonLocator = this.page.locator("//header//span[text()='Login']");
        this.loginRetirementButtonLocator = this.page.locator("[aria-label='Log in to retirement plan']");
        this.loginPersonalDashboardButtonLocator = this.page.locator("[aria-label='Log in to dashboard']");
        this.loginPersonalWealthButtonLocator = this.page.locator("[aria-label='Log in to individual account']");
        this.loginRetirementPlanSponsorsButtonLocator = this.page.locator("[aria-label='Log in as a retirement plan sponsor']");
        this.loginRetirementPlanFinancialProfessionalsButtonLocator = this.page.locator("[aria-label='Log in as a financial professional']");
    }

    async gotoIndividualsPage() {
        await this.page.goto('/individuals');
    };

    async clickLoginButton() {
        await this.loginButtonLocator.click();
    }

    async clickLoginRetirementAccount() {
        await this.loginRetirementButtonLocator.click();
    }

    async clickLoginPersonalDashboard() {
        await this.loginPersonalDashboardButtonLocator.click();
    }
    async clickLoginPersonalWealth() {
        await this.loginPersonalWealthButtonLocator.click();
    }
    async clickLoginRetirementPlanSponsors() {
        await this.loginRetirementPlanSponsorsButtonLocator.click();
    }
    async clickLoginRetirementPlanFinancialProfessionals() {
        await this.loginRetirementPlanFinancialProfessionalsButtonLocator.click();
    }

}