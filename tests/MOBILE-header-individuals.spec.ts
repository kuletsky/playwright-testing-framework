import { test, expect } from '../fixtures';
// import { test, expect } from '@playwright/test';
import { IndividualsPage } from "../pages/IndividualsPage";
import { suppressCookieBanner } from '../utils/stabilize';


test.beforeEach(async ({ page }) => {
    await page.goto('/individuals');
    await suppressCookieBanner(page);
});

test.describe('Menu visibility', () => {
    test('Verify Heading menu is displayed', async ({ individualsPage, page }) => {
        await individualsPage.openHamburger();
        await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

        const headingText = (await page.locator(".h-10").textContent())?.trim();
        expect(headingText).toBe("Individuals");
    });

    test('Verify Contextual menu is displayed', async ({ individualsPage, page }) => {
        await individualsPage.openHamburger();
        await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

        const links = page.locator(".mobile-contextual-nav [role='menuitem']");
        await expect(links).toHaveCount(2);

        const linksText = (await links.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
            "Plan Sponsors",
            "Financial Professionals"
        ]);
    });


    test('Verify Primary menu is displayed', async ({ individualsPage, page }) => {
        await individualsPage.openHamburger();
        await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

        const links = page.locator(".mobile-nav-primary-menu > button");
        await expect(links).toHaveCount(4);

        const linksText = (await links.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
            "Products & Services",
            "Tools",
            "Learn",
            "Why Empower"
        ]);
    });

    test('Verify Products & Services submenu is displayed', async ({ individualsPage, page }) => {
        await individualsPage.openHamburger();
        await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

        await individualsPage.openFirstSubmenu();

        const submenuLinks = await individualsPage.getLinksFirstSubmenu();
        await expect(submenuLinks).toHaveCount(9);

        const linksText = (await submenuLinks.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
            "Wealth Management",
            "Private Client",
            "Personal Strategy",
            "High-yield cash account",
            "Rollover",
            "IRAs",
            "Investment accounts",
            "Tax filing",
            "529s",
        ]);
    });

    test('Verify Tools submenu is displayed', async ({ individualsPage, page }) => {
        await individualsPage.openHamburger();
        await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

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


    test('Verify Learn menu is displayed', async ({ individualsPage, page }) => {
        await individualsPage.openHamburger();
        await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

        await individualsPage.openThirdSubmenu();

        const submenuLinks = await individualsPage.getLinksThirdSubmenu();
        await expect(submenuLinks).toHaveCount(2);

        const linksText = (await submenuLinks.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
            "Investment Insights",
            "The Currency",
        ]);
    });

    test('Verify Why Empower menu is displayed', async ({ individualsPage, page }) => {
        await individualsPage.openHamburger();
        await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

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
        test(`Click P&S - ${link.name}`, async ({ individualsPage, page }) => {
            await individualsPage.openHamburger();
            await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

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
        test(`Click TOOLS - ${link.name}`, async ({ individualsPage, page }) => {
            await individualsPage.openHamburger();
            await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

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
        test(`Click LEARN - ${link.name}`, async ({ individualsPage, page }) => {
            await individualsPage.openHamburger();
            await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

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
        { name: 'About us', menuHeading: "Learn how Empower is helping over 20 million people find financial freedom throughout all of life’s milestones with an experience unlike any other.", url: '/about-us', pageHeading: "We are Empower" },
        { name: 'Cybersecurity', menuHeading: "Cybersecurity", url: '/individuals/about-empower/cybersecurity', pageHeading: "Cybersecurity you can count on" },
        { name: 'Press Center', menuHeading: "Press Center", url: '/press-center', pageHeading: "Latest content" },
        { name: 'Contact us', menuHeading: "Contact us", url: '/contact', pageHeading: "We’re happy to help with whatever you need." },
    ]
    for (const link of whyEmpowerLinks) {
        test(`Click WHY EMPOWER - ${link.name}`, async ({ individualsPage, page }) => {
            await individualsPage.openHamburger();
            await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

            await individualsPage.openForthSubmenu();
            await individualsPage.clickForthSubmenuItem(link.name);

            if (link.url) {
                await expect(page).toHaveURL(link.url);
                await expect(page.getByText(link.pageHeading, { exact: true }).first()).toBeVisible({ timeout: 60_000 });
            }
        });
    }
});

test('Verify loginBox displayed as expected', async ({ page }) => {
    await page.goto('/lp/empower-my-options');
    await suppressCookieBanner(page);

    await expect(page.locator('h1 p')).toContainText('It’s time to decide what to do with your old retirement plan');
    await expect(page.locator('a[aria-label="Sign In/Register"]')).toBeVisible();
});






// test.describe("The Currency functionality", () => {

//     test("Verify theCurrency page loads correctly", async ({ theCurrency }) => {
//         await theCurrency.goto();

//         await expect(theCurrency.title).toHaveTitle('The Currency | Empower');

//         await expect(theCurrency.logo).toBeVisible();
//         await expect(theCurrency.logo).toHaveAttribute('alt', "The Currency homepage. Power up with today's financial news.");
//         await expect(theCurrency.logo).toHaveAttribute('src', /.*\/Untitled%20design.*\.png/);
//         expect(await theCurrency.isImageLoaded()).toBeTruthy();

//         await expect(theCurrency.empowerLogo).toBeVisible();

//         await theCurrency.openHamburgerTheCurrency();

//         await expect(theCurrency.hamburgerHeaderLinks).toBeVisible();
//         await expect(theCurrency.hamburgerHeaderLinks).toHaveText([
//             "The Currency",
//             "Press center",
//             "Investment Insights"
//         ]);

//         await expect(theCurrency.glossary).toBeVisible();
//         await expect(theCurrency.glossary).toHaveAttribute('href', '/the-currency/glossary');
//         await expect(theCurrency.glossary).toHaveText('Glossary');

//         // await expect(theCurrency.navMenuLinks).toBeVisible();
//         await expect(theCurrency.navMenuLinks).toHaveText([
//             "Money",
//             "Life",
//             "Work",
//             "Play",
//         ]);

//         await expect(theCurrency.recentArticles.first()).toBeVisible();

//     });

//     test("Verify Date block displays current date and updates correctly", async ({ theCurrency }) => {
//         await theCurrency.goto();

//         const expectedDate = new Intl.DateTimeFormat('en-US', {
//             weekday: 'long',
//             month: 'long',
//             day: '2-digit',
//             year: 'numeric'
//         }).format(new Date()); // Example output: "Friday, May 29, 2026"

//         await expect(theCurrency.todaysDateBlock).toHaveText(expectedDate);
//     });

//     test("Verify Press center page loads correctly", async ({ theCurrency }) => {
//         await theCurrency.goto();
//         await theCurrency.regionHeaderLinks.nth(1).click();

//         await expect(theCurrency.url).toHaveURL(/press-center/);

//         await expect(theCurrency.title).toHaveTitle('Press Center Homepage | Empower');
//         await expect(theCurrency.regionHeader).toBeVisible();
//         await expect(theCurrency.regionHeaderLinks).toHaveText([
//             "The Currency",
//             "Press center",
//             "Investment Insights"
//         ]);

//         await expect(theCurrency.pressCenterImage).toHaveJSProperty('complete', true);
//         await expect(theCurrency.empowerLogo).toBeVisible();
//         await expect(theCurrency.latestContent).toBeVisible();
//     });

//     test("Verify Investment Insights page loads correctly", async ({ theCurrency }) => {
//         await theCurrency.goto();
//         await theCurrency.regionHeaderLinks.nth(2).click();

//         await expect(theCurrency.url).toHaveURL(/investment-insights/);
//         await expect(theCurrency.title).toHaveTitle('Investment Insights | Empower');

//         await expect(theCurrency.regionHeader).toBeVisible();
//         await expect(theCurrency.regionHeaderLinks).toHaveText([
//             "The Currency",
//             "Press center",
//             "Investment Insights"
//         ]);

//         await expect(theCurrency.navMenuInvestmentLinks).toHaveText([
//             "Outlook",
//             "Trends",
//             "Research",
//             "Volatility",
//         ]);

//         await expect(theCurrency.investmentInsightsImage).toHaveJSProperty('complete', true);
//         await expect(theCurrency.empowerLogo).toBeVisible();
//         await expect(theCurrency.latestContent).toBeVisible();

//     });

//     test("Verify Positive search functionality on The Currency", async ({ theCurrency }) => {
//         await theCurrency.goto();

//         await theCurrency.clickSearchIcon();
//         await theCurrency.enterSearchQuery('market trends');

//         await expect(theCurrency.url).toHaveURL(/search\?search=market\+trends/);
//         await expect(theCurrency.positiveSearchResult).toHaveText("1 results found for “market trends”.");
//     });

//     test("Verify Negative search functionality on The Currency", async ({ theCurrency }) => {
//         await theCurrency.goto();

//         await theCurrency.clickSearchIcon();
//         await theCurrency.enterSearchQuery('safwdfgweg');

//         await expect(theCurrency.url).toHaveURL(/search\?search=safwdfgweg/);
//         await expect(theCurrency.negativeSearchResult).toHaveText("No results found");
//     });

//     test("Verify Glossary page", async ({ theCurrency }) => {
//         await theCurrency.goto();
//         await theCurrency.clickGlossaryLink();

//         await expect(theCurrency.url).toHaveURL(/the-currency\/glossary/);
//         await expect(theCurrency.title).toHaveTitle('Glossary | Empower');
//         await expect(theCurrency.empowerLogo).toBeVisible();
//         await expect(theCurrency.regionHeader).toBeVisible();
//         await expect(theCurrency.regionHeaderLinks).toHaveText([
//             "The Currency",
//             "Press center",
//             "Investment Insights"
//         ]);

//         await expect(theCurrency.glossary).toHaveText('Glossary');

//         await expect(theCurrency.navMenuLinks).toHaveText([
//             "Money",
//             "Life",
//             "Work",
//             "Play",
//         ]);

//         await expect(theCurrency.breadCrumbItems).toHaveText([
//             "The Currency",
//             "Glossary"
//         ]);
//     });

//     test("Verify Glossary functionality", async ({ theCurrency }) => {
//         await theCurrency.goto();
//         await theCurrency.clickGlossaryLink();

//         await theCurrency.clickLetterL();
//     });
// });

// test("Verify subscribe functionality ", async ({ theCurrency }) => {
//     await theCurrency.goto();
//     await theCurrency.emailSubscribeInput.fill("qwdqwfqwf");
//     await theCurrency.emailSubscribeInput.blur();
//     await theCurrency.checkOnBoxAgreement();
//     await theCurrency.clickSubscribeButton();

//     await expect(theCurrency.emailSubscribeValidationMessage).toHaveText("Please enter a valid email address that's not already on the list.");
// });