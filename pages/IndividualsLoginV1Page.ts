import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";



export class IndividualsLoginV1Page extends BasePage {
    private readonly loginRetirementButtonLocator: Locator
    private readonly loginPersonalDashboardButtonLocator: Locator
    private readonly loginPersonalWealthButtonLocator: Locator
    private readonly loginRetirementPlanSponsorsButtonLocator: Locator
    private readonly loginRetirementPlanFinancialProfessionalsButtonLocator: Locator

    constructor(page: Page) {
        super(page);
        this.loginRetirementButtonLocator = this.page.locator("[aria-label='Log in to retirement plan']");
        this.loginPersonalDashboardButtonLocator = this.page.locator("[aria-label='Log in to dashboard']");
        this.loginPersonalWealthButtonLocator = this.page.locator("a[href*='participant.empower-retirement.com/participant/?']");
        this.loginRetirementPlanSponsorsButtonLocator = this.page.locator("[aria-label='Log in as a retirement plan sponsor']");
        this.loginRetirementPlanFinancialProfessionalsButtonLocator = this.page.locator("[aria-label='Log in as a financial professional']");

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