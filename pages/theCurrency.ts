import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { suppressCookieBanner } from "../utils/stabilize";


export class theCurrency extends BasePage {
    readonly logo: Locator;
    readonly empowerLogo: Locator;
    readonly todaysDateBlock: Locator;
    readonly regionHeader: Locator;
    readonly regionHeaderLinks: Locator;
    readonly glossary: Locator;
    readonly navMenuLinks: Locator;
    readonly recentArticles: Locator;
    readonly pressCenterImage: Locator;
    readonly latestContent: Locator;
    readonly navMenuInvestmentLinks: Locator;
    readonly investmentInsightsImage: Locator;
    readonly searchIcon: Locator;
    readonly searchInput: Locator;
    readonly positiveSearchResult: Locator;
    readonly negativeSearchResult: Locator;
    readonly breadCrumbItems: Locator;

    constructor(page: Page) {
        super(page);
        this.logo = page.getByRole('img', { name: "The Currency homepage. Power up with today's financial news." });
        this.empowerLogo = page.getByRole('img', { name: "Empower homepage" });
        this.todaysDateBlock = page.locator('#todays-date-custom');
        this.regionHeader = page.locator('.region-header ul.menu.menu--level-1');
        this.regionHeaderLinks = this.regionHeader.locator('a');
        this.glossary = page.locator('.glossary-link a');
        this.navMenuLinks = page.locator('.menu--currency-categories .menu-item');
        this.navMenuInvestmentLinks = page.locator('.menu--investmentinsightscategories .menu-item');
        this.recentArticles = page.locator('.recent-articles');
        this.pressCenterImage = page.getByRole('img', { name: "Press Center homepage" });
        this.latestContent = page.getByText('Latest Content');
        this.investmentInsightsImage = page.getByRole('img', { name: "Investment Insights" });
        this.searchIcon = page.locator('button.search');
        this.searchInput = page.locator('input[name="search"]');
        this.positiveSearchResult = page.locator('.h3-alt.result-summary-search');
        this.negativeSearchResult = page.locator('.field.field--name-title.field--type-string.field--label-hidden');
        this.breadCrumbItems = page.locator('.breadcrumb li');
    }
    

    async goto() {
        await super.goto("/the-currency");
        await suppressCookieBanner(this.page);
    }

    get title() {
        return this.page;
    }

    async isImageLoaded() {
        return await this.logo.evaluate(
            (img: HTMLImageElement) => img.complete && img.naturalWidth > 0
        );
    }

    get url() {
        return this.page;
    }

    async isPressCenterImageLoaded() {
        return await this.pressCenterImage.evaluate(
            (img: HTMLImageElement) => img.complete && img.naturalWidth > 0
        );
     }

     async isInvestmentInsightsImageLoaded() {
        return await this.investmentInsightsImage.evaluate(
            (img: HTMLImageElement) => img.complete && img.naturalWidth > 0
        );
     }

     async clickSearchIcon() {
        await this.searchIcon.click();
     }

     async enterSearchQuery(query: string) {
        await this.searchInput.fill(query);
        await this.searchInput.press('Enter');
     }

     async clickGlossaryLink() {
        await this.glossary.click();
     }

     async clickLetterL() {
        await this.page.getByRole('link', { name: /^L$/ }).click();
     }
}