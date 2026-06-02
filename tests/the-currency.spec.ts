import { test, expect } from "../fixtures";



test.describe("The Currency functionality", () => {

    test("Verify theCurrency page loads correctly", async ({ theCurrency }) => {
        await theCurrency.goto();

        await expect(theCurrency.title).toHaveTitle('The Currency | Empower');

        await expect(theCurrency.logo).toBeVisible();
        await expect(theCurrency.logo).toHaveAttribute('alt', "The Currency homepage. Power up with today's financial news.");
        await expect(theCurrency.logo).toHaveAttribute('src', /.*\/Untitled%20design.*\.png/);
        expect(await theCurrency.isImageLoaded()).toBeTruthy();

        await expect(theCurrency.empowerLogo).toBeVisible();
        await expect(theCurrency.regionHeaderLinks).toHaveText([
            "The Currency",
            "Press center",
            "Investment Insights"
        ]);

        await expect(theCurrency.glossary).toBeVisible();
        await expect(theCurrency.glossary).toHaveAttribute('href', '/the-currency/glossary');
        await expect(theCurrency.glossary).toHaveText('Glossary');

        await expect(theCurrency.navMenuLinks).toHaveText([
            "Money",
            "Life",
            "Work",
            "Play",
        ]);

        await expect(theCurrency.recentArticles.first()).toBeVisible();

    });

    test("Verify Date block displays current date and updates correctly", async ({ theCurrency }) => {
        await theCurrency.goto();

        const expectedDate = new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            month: 'long',
            day: '2-digit',
            year: 'numeric'
        }).format(new Date()); // Example output: "Friday, May 29, 2026"

        await expect(theCurrency.todaysDateBlock).toHaveText(expectedDate);
    });

    test("Verify Press center page loads correctly", async ({ theCurrency }) => {
        await theCurrency.goto();
        await theCurrency.regionHeaderLinks.nth(1).click();

        await expect(theCurrency.url).toHaveURL(/press-center/);

        await expect(theCurrency.title).toHaveTitle('Press Center Homepage | Empower');
        await expect(theCurrency.regionHeader).toBeVisible();
        await expect(theCurrency.regionHeaderLinks).toHaveText([
            "The Currency",
            "Press center",
            "Investment Insights"
        ]);

        await expect(theCurrency.pressCenterImage).toHaveJSProperty('complete', true);
        await expect(theCurrency.empowerLogo).toBeVisible();
        await expect(theCurrency.latestContent).toBeVisible();
    });

    test("Verify Investment Insights page loads correctly", async ({ theCurrency }) => {
        await theCurrency.goto();
        await theCurrency.regionHeaderLinks.nth(2).click();

        await expect(theCurrency.url).toHaveURL(/investment-insights/);
        await expect(theCurrency.title).toHaveTitle('Investment Insights | Empower');

        await expect(theCurrency.regionHeader).toBeVisible();
        await expect(theCurrency.regionHeaderLinks).toHaveText([
            "The Currency",
            "Press center",
            "Investment Insights"
        ]);

        await expect(theCurrency.navMenuInvestmentLinks).toHaveText([
            "Outlook",
            "Trends",
            "Research",
            "Volatility",
        ]);

        await expect(theCurrency.investmentInsightsImage).toHaveJSProperty('complete', true);
        await expect(theCurrency.empowerLogo).toBeVisible();
        await expect(theCurrency.latestContent).toBeVisible();

    });

    test("Verify Positive search functionality on The Currency", async ({ theCurrency }) => {
        await theCurrency.goto();

        await theCurrency.clickSearchIcon();
        await theCurrency.enterSearchQuery('market trends');

        await expect(theCurrency.url).toHaveURL(/search\?search=market\+trends/);
        await expect(theCurrency.positiveSearchResult).toHaveText("1 results found for “market trends”.");
    });

    test("Verify Negative search functionality on The Currency", async ({ theCurrency }) => {
        await theCurrency.goto();

        await theCurrency.clickSearchIcon();
        await theCurrency.enterSearchQuery('safwdfgweg');

        await expect(theCurrency.url).toHaveURL(/search\?search=safwdfgweg/);
        await expect(theCurrency.negativeSearchResult).toHaveText("No results found");
    });

    test("Verify Glossary page", async ({ theCurrency }) => {
        await theCurrency.goto();
        await theCurrency.clickGlossaryLink();

        await expect(theCurrency.url).toHaveURL(/the-currency\/glossary/);
        await expect(theCurrency.title).toHaveTitle('Glossary | Empower');
        await expect(theCurrency.empowerLogo).toBeVisible();
        await expect(theCurrency.regionHeader).toBeVisible();
        await expect(theCurrency.regionHeaderLinks).toHaveText([
            "The Currency",
            "Press center",
            "Investment Insights"
        ]);

        await expect(theCurrency.glossary).toHaveText('Glossary');

        await expect(theCurrency.navMenuLinks).toHaveText([
            "Money",
            "Life",
            "Work",
            "Play",
        ]);

        await expect(theCurrency.breadCrumbItems).toHaveText([
            "The Currency",
            "Glossary"
        ]);
    });

    test("Verify Glossary functionality", async ({ theCurrency }) => {
        await theCurrency.goto();
        await theCurrency.clickGlossaryLink();

        await theCurrency.clickLetterL();
    });
});

test("Verify subscribe functionality ", async ({ theCurrency }) => {
    await theCurrency.goto();
    await theCurrency.emailSubscribeInput.fill("qwdqwfqwf");
    await theCurrency.emailSubscribeInput.blur();
    await theCurrency.checkOnBoxAgreement();
    await theCurrency.clickSubscribeButton();

    await expect(theCurrency.emailSubscribeValidationMessage).toHaveText("Please enter a valid email address that's not already on the list.");
});