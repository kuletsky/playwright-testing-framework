import { test, expect } from '@playwright/test';
import { IndividualsPage } from "../pages/IndividualsPage";


test.describe('Menu visibility', () => {
    test('Verify Contextual menu is displayed', async ({ page }) => {
        const individualsPage = new IndividualsPage(page);
        await individualsPage.gotoIndividualsPage();

        const links = page.locator("li a[data-once='nav-main-contextual-link-click']");
        await expect(links).toHaveCount(3);

        const linksText = (await links.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
            "Individuals",
            "Plan Sponsors",
            "Financial Professionals"
        ]);
    });

    test('Verify Primary menu is displayed', async ({ page }) => {
        const individualsPage = new IndividualsPage(page);
        await individualsPage.gotoIndividualsPage();

        const links = page.locator("button[data-once*='desktopPrimaryNav']");
        await expect(links).toHaveCount(4);

        const linksText = (await links.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
            "Products & Services",
            "Tools",
            "Learn",
            "Why Empower"
        ]);
    });

    test('Verify Products & Services menu is displayed', async ({ page }) => {
        const individualsPage = new IndividualsPage(page);
        await individualsPage.gotoIndividualsPage();
        await individualsPage.openProductAndServicesMenu();

        const links = page.locator("#solutions-dropdown li.relative > a, #solutions-dropdown li.relative > button");
        await expect(links).toHaveCount(6);

        const linksText = (await links.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
            "Wealth Management",
            "High-yield cash account",
            "Rollover",
            "IRAs",
            "Investment accounts",
            "Tax filing"
        ]);

        const dropdown = page.locator("#solutions-dropdown .nav-dropdown-right");
        await expect(dropdown.getByText("Products & services")).toBeVisible();
    });

    test('Verify Tools menu is displayed', async ({ page }) => {
        const individualsPage = new IndividualsPage(page);
        await individualsPage.gotoIndividualsPage();
        await individualsPage.openToolsMenu();

        const links = page.locator("#tools-dropdown li.relative > a, #tools-dropdown li.relative > button");
        await expect(links).toHaveCount(9);

        const linksText = (await links.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
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

        const dropdown = page.locator("#tools-dropdown .nav-dropdown-right h3");
        await expect(dropdown.getByText("Financial tools", { exact: true }).first()).toBeVisible();
    });

    test('Verify Learn menu is displayed', async ({ page }) => {
        const individualsPage = new IndividualsPage(page);
        await individualsPage.gotoIndividualsPage();
        await individualsPage.openLearnMenu();

        const links = page.locator("#learn-dropdown li.relative > a, #learn-dropdown li.relative > button");
        await expect(links).toHaveCount(2);

        const linksText = (await links.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
            "Investment Insights",
            "The Currency",
        ]);

        const dropdown = page.locator("#learn-dropdown .nav-dropdown-right");
        await expect(dropdown.getByText("The CurrencyTM", { exact: true }).first()).toBeVisible();
    });

    test('Verify Why Empower menu is displayed', async ({ page }) => {
        const individualsPage = new IndividualsPage(page);
        await individualsPage.gotoIndividualsPage();
        await individualsPage.openWhyEmpowerMenu();

        const links = page.locator("#why-empower-dropdown li.relative > a, #why-empower-dropdown li.relative > button");
        await expect(links).toHaveCount(4);

        const linksText = (await links.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
            "About us",
            "Cybersecurity",
            "Press Center",
            "Contact us",
        ]);

        const dropdown = page.locator("#why-empower-dropdown .nav-dropdown-right");
        await expect(dropdown.getByText("About us", { exact: true }).first()).toBeVisible();
    });
});


test.describe('Menu Wealth Management functionality', () => {
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
        test(`Click P&S - ${link.name}`, async ({ page }) => {
            const individualsPage = new IndividualsPage(page);
            await individualsPage.gotoIndividualsPage();
            await individualsPage.openProductAndServicesMenu();
            await individualsPage.clickPSItem(link.name);

            if (link.url) {
                await expect(page).toHaveURL(link.url);
                await expect(page.getByText(link.pageHeading, { exact: true })).toBeVisible();
            }
        });
        test(`Hover P&S - ${link.name}`, async ({ page }) => {
            const individualsPage = new IndividualsPage(page);
            await individualsPage.gotoIndividualsPage();
            await individualsPage.openProductAndServicesMenu();

            await expect(page.locator('#solutions-dropdown')).toBeVisible();
            await individualsPage.hoverPSItem(link.name);

            const dropdown = page.locator("#solutions-dropdown .nav-dropdown-right");
            await expect(dropdown.getByText(link.menuHeading, { exact: true })).toBeVisible();
        });
    }
});

test.describe('Menu Tools functionality', () => {
    // Data-driven tests for TOOLS menu items
    const toolsLinks = [
        { name: 'View All', menuHeading: "Financial tools", url: '/tools', pageHeading: "Financial freedom starts here" },
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
        test(`Click TOOLS - ${link.name}`, async ({ page }) => {
            const individualsPage = new IndividualsPage(page);
            await individualsPage.gotoIndividualsPage();
            await individualsPage.openToolsMenu();
            await individualsPage.clickToolsItem(link.name);

            if (link.url) {
                await expect(page).toHaveURL(link.url);
                await expect(page.getByText(link.pageHeading, { exact: true })).toBeVisible();
            }
        });
        test(`Hover TOOLS - ${link.name}`, async ({ page }) => {
            const individualsPage = new IndividualsPage(page);
            await individualsPage.gotoIndividualsPage();
            await individualsPage.openToolsMenu();

            await expect(page.locator('#tools-dropdown')).toBeVisible();
            await individualsPage.hoverToolsItem(link.name);

            const dropdown = page.locator("#tools-dropdown .nav-dropdown-right");
            await expect(dropdown.getByText(link.menuHeading, { exact: true }).first()).toBeVisible();
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
        test(`Click LEARN - ${link.name}`, async ({ page }) => {
            const individualsPage = new IndividualsPage(page);
            await individualsPage.gotoIndividualsPage();
            await individualsPage.openLearnMenu();
            await individualsPage.clickLearnItem(link.name);

            if (link.url) {
                await expect(page).toHaveURL(link.url);
                await expect(page.getByText(link.pageHeading, { exact: true }).first()).toBeVisible();
            }
        });
        test(`Hover LEARN - ${link.name}`, async ({ page }) => {
            const individualsPage = new IndividualsPage(page);
            await individualsPage.gotoIndividualsPage();
            await individualsPage.openLearnMenu();

            await expect(page.locator('#learn-dropdown')).toBeVisible();
            await individualsPage.hoverLearnItem(link.name);

            const dropdown = page.locator("#learn-dropdown .nav-dropdown-right");
            await expect(dropdown.getByText(link.menuHeading, { exact: true }).first()).toBeVisible();
        });
    }
});

test.describe('Menu Why Empower functionality', () => {
    // Data-driven tests for WHY EMPOWER menu items
    const whyEmpowerLinks = [
        { name: 'About us', menuHeading: "About us", url: '/about-us', pageHeading: "This is Empower" },
        { name: 'Cybersecurity', menuHeading: "Cybersecurity", url: '/individuals/about-empower/cybersecurity', pageHeading: "Cybersecurity you can count on" },
        { name: 'Press Center', menuHeading: "Press Center", url: '/press-center', pageHeading: "Latest content" },
        { name: 'Contact us', menuHeading: "Contact us", url: '/contact', pageHeading: "We’re happy to help with whatever you need." },
    ]
    for (const link of whyEmpowerLinks) {
        test(`Click WHY EMPOWER - ${link.name}`, async ({ page }) => {
            const individualsPage = new IndividualsPage(page);
            await individualsPage.gotoIndividualsPage();
            await individualsPage.openWhyEmpowerMenu();
            await individualsPage.clickWhyEmpowerItem(link.name);

            if (link.url) {
                await expect(page).toHaveURL(link.url);
                await expect(page.getByText(link.pageHeading, { exact: true }).first()).toBeVisible({ timeout: 60_000 });
            }
        });
        test(`Hover WHY EMPOWER - ${link.name}`, async ({ page }) => {
            const individualsPage = new IndividualsPage(page);
            await individualsPage.gotoIndividualsPage();
            await individualsPage.openWhyEmpowerMenu();

            await expect(page.locator('#why-empower-dropdown')).toBeVisible();
            await individualsPage.hoverWhyEmpowerItem(link.name);

            const dropdown = page.locator("#why-empower-dropdown .nav-dropdown-right");
            await expect(dropdown.getByText(link.menuHeading, { exact: true }).first()).toBeVisible({ timeout: 60_000 });
        });
    }
});