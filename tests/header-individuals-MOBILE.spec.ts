import { test, expect } from '@playwright/test';
import { IndividualsPage } from "../pages/IndividualsPage";
import { suppressCookieBanner } from '../utils/stabilize';


test.beforeEach(async ({ page }) => {
    await page.goto('/individuals');
    await suppressCookieBanner(page);
});

test.describe('Menu visibility', () => {
    test('Verify Heading menu is displayed', async ({ page }) => {
        const individualsPage = new IndividualsPage(page);
        await individualsPage.openHamburger();

        const headingText = (await page.locator(".h-10").textContent())?.trim();
        expect(headingText).toBe("Individuals");
    });

    test('Verify Contextual menu is displayed', async ({ page }) => {
        const individualsPage = new IndividualsPage(page);
        await individualsPage.openHamburger();
        const links = page.locator(".mobile-contextual-nav [role='menuitem']");
        await expect(links).toHaveCount(2);

        const linksText = (await links.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
            "Plan Sponsors",
            "Financial Professionals"
        ]);
    });


    test('Verify Primary menu is displayed', async ({ page }) => {
        const individualsPage = new IndividualsPage(page);
        await individualsPage.openHamburger();

        const links = page.locator(".mobile-nav-primary-menu button");
        await expect(links).toHaveCount(5);

        const linksText = (await links.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
            "Products & Services",
            "Wealth Management",
            "Tools",
            "Learn",
            "Why Empower"
        ]);
    });

    test('Verify Products & Services submenu is displayed', async ({ page }) => {
        const individualsPage = new IndividualsPage(page);
        await individualsPage.openHamburger();
        await individualsPage.openFirstSubmenu();

        const submenuLinks = await individualsPage.getLinksFirstSubmenu();
        await expect(submenuLinks).toHaveCount(7);

        const linksText = (await submenuLinks.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
            "Private Client",
            "Personal Strategy",
            "High-yield cash account",
            "Rollover",
            "IRAs",
            "Investment accounts",
            "Tax filing"
        ]);
    });

    test('Verify Tools submenu is displayed', async ({ page }) => {
        const individualsPage = new IndividualsPage(page);
        await individualsPage.openHamburger();
        await individualsPage.openSecondSubmenu();

        const submenuLinks = await individualsPage.getLinksSecondSubmenu();
        await expect(submenuLinks).toHaveCount(9);

        const linksText = (await submenuLinks.allTextContents()).map(t => t.trim());
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
    });

    test('Verify Learn menu is displayed', async ({ page }) => {
        const individualsPage = new IndividualsPage(page);
        await individualsPage.openHamburger();
        await individualsPage.openThirdSubmenu();

        const submenuLinks = await individualsPage.getLinksThirdSubmenu();
        await expect(submenuLinks).toHaveCount(2);

        const linksText = (await submenuLinks.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
            "Investment Insights",
            "The Currency",
        ]);
    });

    test('Verify Why Empower menu is displayed', async ({ page }) => {
        const individualsPage = new IndividualsPage(page);
        await individualsPage.openHamburger();
        await individualsPage.openForthSubmenu();

        const submenuLinks = await individualsPage.getLinksForthSubmenu();
        await expect(submenuLinks).toHaveCount(4);

        const linksText = (await submenuLinks.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
            "About us",
            "Cybersecurity",
            "Press Center",
            "Contact us",
        ]);
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
        test(`Click P&S - ${link.name}`, async ({ page }) => {
            const individualsPage = new IndividualsPage(page);
            await individualsPage.openHamburger();
            await individualsPage.openFirstSubmenu();
            await individualsPage.clickFirstSubmenuItem(link.name);

            if (link.url) {
                await expect(page).toHaveURL(link.url);
                await expect(page.getByText(link.pageHeading, { exact: true })).toBeVisible();
            }
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
            await individualsPage.openHamburger();
            await individualsPage.openSecondSubmenu();
            await individualsPage.clickSecondSubmenuItem(link.name);

            if (link.url) {
                await expect(page).toHaveURL(link.url);
                await expect(page.getByText(link.pageHeading, { exact: true })).toBeVisible();
            }
        });
    }
});

test.describe('Menu Learn functionality', () => {

    // Data-driven tests for LEARN menu items
    const learnLinks = [
        { name: 'Investment Insights', menuHeading: "Investment Insights", url: '/investment-insights', pageHeading: "Latest Content" },
        { name: 'The Currency', menuHeading: "Get guidance to make better money decisions at every stage of your life.", url: '/the-currency', pageHeading: "Get insights and intel on your money." },
    ]
    for (const link of learnLinks) {
        test(`Click LEARN - ${link.name}`, async ({ page }) => {
            const individualsPage = new IndividualsPage(page);
            await individualsPage.openHamburger();
            await individualsPage.openThirdSubmenu();
            await individualsPage.clickThirdSubmenuItem(link.name);

            if (link.url) {
                await expect(page).toHaveURL(link.url);
                await expect(page.getByText(link.pageHeading, { exact: true }).first()).toBeVisible();
            }
        });
    }
});

test.describe('Menu Why Empower functionality', () => {
    // Data-driven tests for WHY EMPOWER menu items
    const whyEmpowerLinks = [
        { name: 'About us', menuHeading: "Learn how Empower is helping over 19.5 million people find financial freedom throughout all of life’s milestones with an experience unlike any other.", url: '/about-us', pageHeading: "This is Empower" },
        { name: 'Cybersecurity', menuHeading: "Cybersecurity", url: '/individuals/about-empower/cybersecurity', pageHeading: "Cybersecurity you can count on" },
        { name: 'Press Center', menuHeading: "Press Center", url: '/press-center', pageHeading: "Latest content" },
        { name: 'Contact us', menuHeading: "Contact us", url: '/contact', pageHeading: "We’re happy to help with whatever you need." },
    ]
    for (const link of whyEmpowerLinks) {
        test(`Click WHY EMPOWER - ${link.name}`, async ({ page }) => {
            const individualsPage = new IndividualsPage(page);
            await individualsPage.openHamburger();
            await individualsPage.openForthSubmenu();
            await individualsPage.clickForthSubmenuItem(link.name);

            if (link.url) {
                await expect(page).toHaveURL(link.url);
                await expect(page.getByText(link.pageHeading, { exact: true }).first()).toBeVisible({ timeout: 60_000 });
            }
        });
    }
});