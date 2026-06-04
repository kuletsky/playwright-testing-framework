import { test, expect } from '../fixtures';

test.describe('Menu visibility', () => {
    test('Verify Contextual menu is displayed', async ({ individualsPage }) => {
        const links = await individualsPage
            .gotoIndividualsPage()
            .then(p => p.getContextualLinks());

        await expect(links).toHaveCount(3);
        await expect(links).toHaveText([
            'Individuals',
            'Plan Sponsors',
            'Financial Professionals'
        ]);
    });

    test('Verify Primary menu is displayed', async ({ individualsPage }) => {
        const links = await individualsPage.
            gotoIndividualsPage()
            .then(p => p.getPrimaryMenuLinks());

        await expect(links).toHaveCount(4);
        await expect(links).toHaveText([
            "Products & Services",
            "Tools",
            "Learn",
            "Why Empower"
        ]);
    });

    test('Verify Products & Services menu is displayed', async ({ individualsPage }) => {
        const { links, pane } = await individualsPage
            .gotoIndividualsPage()
            .then(p => p.openPSMenu())
            .then(p => p.getPSMenuLinks());

        await expect(links).toHaveCount(6);
        await expect(links).toHaveText([
            "Wealth Management",
            "High-yield cash account",
            "Rollover",
            "IRAs",
            "Investment accounts",
            "Tax filing"
        ]);
        await expect(pane.getByText("Products & services")).toBeVisible();
    });

    test('Verify Tools menu is displayed', async ({ individualsPage }) => {
        const { links, pane } = await individualsPage
            .gotoIndividualsPage()
            .then(p => p.openToolsMenu())
            .then(p => p.getToolsMenuLinks());

        await expect(links).toHaveCount(9);
        await expect(links).toHaveText([
            "View All",
            "Retirement Planner",
            "Net Worth",
            "Budgeting & Cash Flow",
            "Portfolio Analysis",
            "Savings Planner",
            "Debt Paydown",
            "Emergency Fund",
            "Transactions",
        ]);
        await expect(pane.getByText("Financial tools", { exact: true }).first()).toBeVisible();
    });

    test('Verify Learn menu is displayed', async ({ individualsPage }) => {
        const { links, pane } = await individualsPage
            .gotoIndividualsPage()
            .then(p => p.openLearnMenu())
            .then(p => p.getLearnMenuLinks());

        await expect(links).toHaveCount(2);
        await expect(links).toHaveText([
            "Investment Insights",
            "The Currency",
        ]);
        await expect(pane.getByText("The CurrencyTM", { exact: true }).first()).toBeVisible();
    });

    test('Verify Why Empower menu is displayed', async ({ individualsPage }) => {
        const { links, pane } = await individualsPage
            .gotoIndividualsPage()
            .then(p => p.openWhyEmpowerMenu())
            .then(p => p.getWhyEmpowerMenuLinks());

        await expect(links).toHaveCount(4);
        await expect(links).toHaveText([
            "About us",
            "Cybersecurity",
            "Press Center",
            "Contact us",
        ]);
        await expect(pane.getByText("About us", { exact: true }).first()).toBeVisible();
    });
});


test.describe('Menu Products & Services functionality', () => {
    // Data-driven tests for P&S menu items
    const PSLinks = [
        { name: 'Wealth Management', menuHeading: 'Wealth management overview' },
        { name: 'High-yield cash account', menuHeading: 'High-yield Cash Account' },
        { name: 'Rollover', menuHeading: "Rollover", url: '/products-solutions/rollover', pageHeading: "Start your rollover with confidence" },
        { name: 'IRAs', menuHeading: "IRAs", url: '/products-solutions/iras', pageHeading: "The right IRA. Right now." },
        { name: 'Investment accounts', menuHeading: "Investment accounts", url: '/products-solutions/investment-accounts', pageHeading: "Start investing with confidence." },
        { name: 'Tax filing', menuHeading: "Tax filing", url: '/products-solutions/tax-filing', pageHeading: "Finally, a less taxing tax season" },

    ]
    for (const link of PSLinks) {
        test(`Click P&S - ${link.name}`, async ({ individualsPage, page }) => {
            await individualsPage
                .gotoIndividualsPage()
                .then(p => p.openPSMenu())
                .then(p => p.clickPSItem(link.name));

            if (link.url) {
                await expect(page).toHaveURL(link.url);
                await expect(page.getByText(link.pageHeading, { exact: true })).toBeVisible();
            }
        });

        test(`Hover P&S - ${link.name}`, async ({ individualsPage }) => {
            const pane = await individualsPage
                .gotoIndividualsPage()
                .then(p => p.openPSMenu())
                .then(p => p.hoverPSItem(link.name))
                .then(p => p.getDropdownRightPane('solutions'));

            await expect(pane.getByText(link.menuHeading, { exact: true })).toBeVisible();
        });
    }
});

test.describe('Menu Tools functionality', () => {
    // Data-driven tests for TOOLS menu items
    const toolsLinks = [
        { name: 'View All', menuHeading: "Make budgeting, planning and retirement decisions all in one place.", url: '/tools', pageHeading: "Financial freedom starts here" },
        { name: 'Retirement Planner', menuHeading: "Retirement Planner", url: '/tools/retirement-planner', pageHeading: "Plan ahead to retire your way" },
        { name: 'Net Worth', menuHeading: "Net Worth", url: '/tools/net-worth', pageHeading: "Knowing your net worth is worth it" },
        { name: 'Budgeting & Cash Flow', menuHeading: "Budgeting & Cash Flow", url: '/tools/budgeting-cash-flow', pageHeading: "Better budgeting for your best life" },
        { name: 'Portfolio Analysis', menuHeading: "Portfolio Analysis", url: '/tools/portfolio-analysis', pageHeading: "Let’s level up your investing strategy" },
        { name: 'Savings Planner', menuHeading: "Savings Planner", url: '/tools/savings-planner', pageHeading: "Save smart, spend smarter" },
        { name: 'Debt Paydown', menuHeading: "Debt Paydown", url: '/tools/debt-paydown', pageHeading: "Paying down debt is such a good look" },
        { name: 'Emergency Fund', menuHeading: "Emergency Fund", url: '/tools/emergency-fund', pageHeading: "Your go-to for life’s curveballs" },
        { name: 'Transactions', menuHeading: "Transactions", url: '/tools/transactions', pageHeading: "Gain insight into your spending, keep control, and help spot fraud." },
    ]
    for (const link of toolsLinks) {
        test(`Click TOOLS - ${link.name}`, async ({ individualsPage, page }) => {
            await individualsPage
                .gotoIndividualsPage()
                .then(p => p.openToolsMenu())
                .then(p => p.clickToolsItem(link.name));

            if (link.url) {
                await expect(page).toHaveURL(link.url);
                await expect(page.getByText(link.pageHeading, { exact: true })).toBeVisible();
            }
        });

        test(`Hover TOOLS - ${link.name}`, async ({ individualsPage, page }) => {
            const pane = await individualsPage
                .gotoIndividualsPage()
                .then(p => p.openToolsMenu())
                .then(p => p.hoverToolsItem(link.name))
                .then(p => p.getDropdownRightPane('tools'));

            await expect(pane.getByText(link.menuHeading, { exact: true }).first()).toBeVisible();
        });
    }
});

test.describe('Menu Learn functionality', () => {

    // Data-driven tests for LEARN menu items
    const learnLinks = [
        { name: 'Investment Insights', menuHeading: "Investment Insights", url: '/investment-insights', pageHeading: "Latest Content" },
        { name: 'The Currency', menuHeading: "Get guidance to make better money decisions at every stage of your life.", url: '/the-currency', pageHeading: "Money" },
    ]
    for (const link of learnLinks) {
        test(`Click LEARN - ${link.name}`, async ({ individualsPage, page }) => {
            await individualsPage
                .gotoIndividualsPage()
                .then(p => p.openLearnMenu())
                .then(p => p.clickLearnItem(link.name));

            if (link.url) {
                await expect(page).toHaveURL(link.url);
                await expect(page.getByText(link.pageHeading, { exact: true }).first()).toBeVisible();
            }
        });

        test(`Hover LEARN - ${link.name}`, async ({ individualsPage, page }) => {
            const pane = await individualsPage
                .gotoIndividualsPage()
                .then(p => p.openLearnMenu())
                .then(p => p.hoverLearnItem(link.name))
                .then(p => p.getDropdownRightPane('learn'));

            await expect(pane.getByText(link.menuHeading, { exact: true }).first()).toBeVisible();
        });
    }
});

test.describe('Menu Why Empower functionality', () => {
    // Data-driven tests for WHY EMPOWER menu items
    const whyEmpowerLinks = [
        { name: 'About us', menuHeading: "Learn how Empower is helping over 20 million people find financial freedom throughout all of life’s milestones with an experience unlike any other.", url: '/about-us', pageHeading: "We are Empower" },
        { name: 'Cybersecurity', menuHeading: "Cybersecurity", url: '/individuals/about-empower/cybersecurity', pageHeading: "Cybersecurity you can count on" },
        { name: 'Press Center', menuHeading: "Press Center", url: '/press-center', pageHeading: "Latest content" },
        { name: 'Contact us', menuHeading: "Contact us", url: '/contact', pageHeading: "We’re happy to help with whatever you need." },
    ]
    for (const link of whyEmpowerLinks) {
        test(`Click WHY EMPOWER - ${link.name}`, async ({ individualsPage, page }) => {
            await individualsPage
                .gotoIndividualsPage()
                .then(p => p.openWhyEmpowerMenu())
                .then(p => p.clickWhyEmpowerItem(link.name));

            if (link.url) {
                await expect(page).toHaveURL(link.url);
                await expect(page.getByText(link.pageHeading, { exact: true }).first()).toBeVisible();
            }
        });
        test(`Hover WHY EMPOWER - ${link.name}`, async ({ individualsPage, page }) => {
            const pane = await individualsPage
                .gotoIndividualsPage()
                .then(p => p.openWhyEmpowerMenu())
                .then(p => p.hoverWhyEmpowerItem(link.name))
                .then(p => p.getDropdownRightPane('why-empower'));

            await expect(pane.getByText(link.menuHeading, { exact: true }).first()).toBeVisible({ timeout: 60_000 });
        });
    }
});


test.describe("The Currency functionality", () => {

    test("Verify theCurrency page loads correctly", async ({ theCurrency }) => {
        await theCurrency.goto();

        await expect(theCurrency.title).toHaveTitle('The Currency | Empower');

        await expect(theCurrency.logo).toBeVisible();
        await expect(theCurrency.logo).toHaveAttribute('alt', "The Currency homepage. Power up with today's financial news.");
        await expect(theCurrency.logo).toHaveAttribute('src', /.*\/Untitled%20design.*\.png/);
        expect(await theCurrency.isImageLoaded()).toBeTruthy();

        await expect(theCurrency.empowerLogo).toBeVisible();
        await expect(theCurrency.regionHeaderLinks).toBeVisible();
        await expect(theCurrency.regionHeaderLinks).toHaveText([
            "The Currency",
            "Press center",
            "Investment Insights"
        ]);

        await expect(theCurrency.glossary).toBeVisible();
        await expect(theCurrency.glossary).toHaveAttribute('href', '/the-currency/glossary');
        await expect(theCurrency.glossary).toHaveText('Glossary');

        await expect(theCurrency.navMenuLinks).toBeVisible();
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