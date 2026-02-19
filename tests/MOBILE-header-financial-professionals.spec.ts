import { test, expect } from '@playwright/test';
import { FinancialProfessionalsPage } from '../pages/FinancialProfessionalsPage';
import { suppressCookieBanner } from '../utils/stabilize';


test.beforeEach(async ({ page }) => {
    await page.goto('/financial-professionals');
    await suppressCookieBanner(page);
});

test.describe('Menu visibility', () => {
    test('Verify Heading menu is displayed', async ({ page }) => {
        const finproPage = new FinancialProfessionalsPage(page);
        await finproPage.openHamburger();
        await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

        const headingText = (await page.locator(".h-10").textContent())?.trim();
        expect(headingText).toBe("Financial Professionals");
    });

    test('Verify Contextual menu is displayed', async ({ page }) => {
        const finproPage = new FinancialProfessionalsPage(page);
        await finproPage.openHamburger();
        await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

        const links = page.locator(".mobile-contextual-nav [role='menuitem']");
        await expect(links).toHaveCount(2);

        const linksText = (await links.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
            "Individuals",
            "Plan Sponsors"
        ]);
    });


    test('Verify Financial Professionals menu is displayed', async ({ page }) => {
        const finproPage = new FinancialProfessionalsPage(page);
        await finproPage.openHamburger();
        await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

        const links = page.locator(".mobile-nav-primary-menu > button");
        await expect(links).toHaveCount(5);

        const linksText = (await links.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
            "Solutions",
            "Experience",
            "Resources",
            "Insights",
            "Why Empower"
        ]);
    });

    test('Verify Solutions menu is displayed', async ({ page }) => {
        const finproPage = new FinancialProfessionalsPage(page);
        await finproPage.openHamburger();
        await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

        const submenuLinks = await finproPage.getLinksFirstSubmenu();
        await expect(submenuLinks).toHaveCount(13);

        const linksText = (await submenuLinks.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
            "Defined contribution",
            "Overview",
            "Empower Select™",
            "Empower Ready Select™",
            "PEPs, MEPs, and PEOs",
            "Empower Standard offer",
            "Integrated workplace solutions",
            "Fiduciary advice solutions",
            "Private market investments",
            "Stock plan services​",
            "Empower benefit consulting services",
            "Defined benefit plans",
            "Consumer-directed health",
        ]);
    });

    test('Verify Experience menu is displayed', async ({ page }) => {
        const finproPage = new FinancialProfessionalsPage(page);
        await finproPage.openHamburger();
        await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

        const submenuLinks = await finproPage.getLinksSecondSubmenu();
        await expect(submenuLinks).toHaveCount(5);

        const linksText = (await submenuLinks.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
            "Markets",
            "Participant experience",
            "APIs",
            "Partner advocate",
            "Events",
        ]);
    });

    test('Verify Resources menu is displayed', async ({ page }) => {
        const finproPage = new FinancialProfessionalsPage(page);
        await finproPage.openHamburger();
        await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

        const submenuLinks = await finproPage.getLinksThirdSubmenu();
        await expect(submenuLinks).toHaveCount(6);

        const linksText = (await submenuLinks.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
            "Prospecting & proposals",
            "Plan management",
            "Advisor toolkit",
            "TPA toolkit",
            "Plan sponsor toolkit",
            "Participant toolkit",
        ]);
    });

    test('Verify Insights menu is displayed', async ({ page }) => {
        const finproPage = new FinancialProfessionalsPage(page);
        await finproPage.openHamburger();
        await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

        const submenuLinks = await finproPage.getLinksForthSubmenu();
        await expect(submenuLinks).toHaveCount(3);

        const linksText = (await submenuLinks.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
            "Investment Insights",
            "Legislative & regulatory news",
            "The Currency",
        ]);
    });


    test('Verify Why Empower menu is displayed', async ({ page }) => {
        const finproPage = new FinancialProfessionalsPage(page);
        await finproPage.openHamburger();
        await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

        const submenuLinks = await finproPage.getLinksFithSubmenu();
        await expect(submenuLinks).toHaveCount(4);

        const linksText = (await submenuLinks.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
            "About us",
            "Contact us",
            "Cybersecurity",
            "Press Center",
        ]);
    });
});


test.describe('Solutions menu functionality', () => {

    // Data-driven tests for Solutions menu items
    const solutionsLinks = [
        // { name: "Defined contribution", menuHeading: "Defined contribution", url: "/financial-professionals/solutions/defined-contribution", pageHeading: "Defined contribution" },
        { name: "Integrated workplace solutions", menuHeading: "Integrated workplace solutions", url: "/financial-professionals/what-we-offer/integrated-workplace-solutions", pageHeading: "The future of workplace is here" },
        { name: "Fiduciary advice solutions", menuHeading: "Fiduciary advice solutions", url: "/financial-professionals/what-we-offer/fiduciary-advice-solutions-overview", pageHeading: "We believe everyone deserves access to fiduciary advice" },
        { name: "Private market investments", menuHeading: "Private market investments", url: "/financial-professionals/what-we-offer/private-market-investments", pageHeading: "Private markets, new possibilities" },
        { name: "Stock plan services​", menuHeading: "Stock plan services​", url: "/financial-professionals/what-we-offer/stock-plan-services", pageHeading: "Global stock plans simplified. Yes, really." },
        { name: "Empower benefit consulting services", menuHeading: "Empower benefit consulting services", url: "/financial-professionals/what-we-offer/empower-benefit-consulting-services", pageHeading: "Trusted excellence. Proven expertise." },
        { name: "Defined benefit plans", menuHeading: "Defined benefit plans", url: "/financial-professionals/what-we-offer/defined-benefit-plans", pageHeading: "Defined benefit plans. Smarter for you. Simpler for them." },
        { name: "Consumer-directed health", menuHeading: "Consumer-directed health", url: "/financial-professionals/what-we-offer/consumer-directed-health", pageHeading: "Integrated health and wealth" },
    ]
    for (const link of solutionsLinks) {
        test(`Click Solutions - ${link.name}`, async ({ page }) => {
            const finproPage = new FinancialProfessionalsPage(page);
            await finproPage.openHamburger();
            await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

            await finproPage.openFirstSubmenu();
            await finproPage.clickFirstSubmenuItem(link.name);

            await expect(page).toHaveURL(link.url);
            await expect(page.getByText(link.pageHeading, { exact: true }).first()).toBeVisible();
        });
    }
});

// Data-driven tests for Experience menu items
test.describe('Experience menu functionality', () => {

    const experienceLinks = [
        { name: "Markets", menuHeading: "Markets we serve", url: "/financial-professionals/what-we-offer/markets-we-serve", pageHeading: "A trusted partner in retirement solutions" },
        { name: "Participant experience", menuHeading: "Participant experience", url: "/financial-professionals/what-we-offer/financial-wellness-financial-overview", pageHeading: "A focus on financial wellness" },
        { name: "APIs", menuHeading: "APIs", url: "/financial-professionals/experience/apis", pageHeading: "Bridges to innovation" },
        { name: "Partner advocate", menuHeading: "Partner advocate", url: "/financial-professionals/resources/partner-advocate" },
        { name: "Events", menuHeading: "Events", url: "/financial-professionals/empower-events" },
    ]
    for (const link of experienceLinks) {
        test(`Click Experience - ${link.name}`, async ({ page }) => {
            const finproPage = new FinancialProfessionalsPage(page);
            await finproPage.openHamburger();
            await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

            await finproPage.openSecondSubmenu();
            await finproPage.clickSecondSubmenuItem(link.name);

            if (link.pageHeading) {
                await expect(page).toHaveURL(link.url);
                await expect(page.getByText(link.pageHeading, { exact: true }).first()).toBeVisible();
            }
        });
    }
});
// Data-driven tests for Resources menu items
test.describe('Resources menu functionality', () => {
    const resourcesLinks = [
        { name: "Prospecting & proposals", menuHeading: "Prospecting & proposals", url: "/financial-professionals/what-we-offer/prospecting-proposals", pageHeading: "Empower Proposal System" },
        { name: "Plan management", menuHeading: "Plan management" },
        { name: "Advisor toolkit", menuHeading: "Advisor toolkit", url: "/financial-professionals/resources/your-advisor-toolkit", pageHeading: "Helping you grow client relationships" },
        { name: "TPA toolkit", menuHeading: "TPA toolkit", url: "/financial-professionals/resources/tpa-toolkit", pageHeading: "Working together. Winning together." },
        { name: "Plan sponsor toolkit", menuHeading: "Plan sponsor toolkit", url: "/financial-professionals/resources/plan-sponsor-toolkit", pageHeading: "The plan sponsor toolkit offers sponsors what they need most" },
        { name: "Participant toolkit", menuHeading: "Participant toolkit", url: "/financial-professionals/resources/participant-toolkit", pageHeading: "The Empower experience" },
    ]
    for (const link of resourcesLinks) {
        test(`Click Resources - ${link.name}`, async ({ page }) => {
            const finproPage = new FinancialProfessionalsPage(page);
            await finproPage.openHamburger();
            await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

            await finproPage.openThirdSubmenu();
            await finproPage.clickThirdSubmenuItem(link.name);

            if (link.url) {
                await expect(page).toHaveURL(link.url);
                await expect(page.getByText(link.pageHeading, { exact: true }).first()).toBeVisible();
            }
        });
    }
});

test.describe('Insights menu functionality', () => {
    // Data-driven tests for Insights menu items
    const insightsLinks = [
        { name: "Investment Insights", menuHeading: "Investment Insights", url: "/investment-insights", pageHeading: "Latest Content" },
        { name: "Legislative & regulatory news", menuHeading: "Legislative & regulatory news", url: "/financial-professionals/insights/legislative-regulatory", pageHeading: "Legislative and regulatory affairs" },
        { name: "The Currency", menuHeading: "The Currency", url: "/the-currency", pageHeading: "Get insights and intel on your money." },
    ]
    for (const link of insightsLinks) {
        test(`Click Insights - ${link.name}`, async ({ page }) => {
            const finproPage = new FinancialProfessionalsPage(page);
            await finproPage.openHamburger();
            await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

            await finproPage.openForthSubmenu();
            await finproPage.clickForthSubmenuItem(link.name);
            
            if (link.url) {
                await expect(page).toHaveURL(link.url);
                await expect(page.getByText(link.pageHeading, { exact: true }).first()).toBeVisible();
            }
        });
    }
});

test.describe('Why Empower menu functionality', () => {
    // Data-driven tests for Why Empower menu items
    const whyEmpowerLinks = [
        { name: "About us", menuHeading: "About us", url: "/financial-professionals/about-us", pageHeading: "We are Empower" },
        { name: "Contact us", menuHeading: "Contact us", url: "/financial-professionals/contact", pageHeading: "We’re happy to help with whatever you need." },
        { name: "Cybersecurity", menuHeading: "Cybersecurity", url: "/financial-professionals/about-empower/cybersecurity", pageHeading: "Cybersecurity you can count on" },
        { name: "Press Center", menuHeading: "Stay in the know with the latest Empower news.", url: "/press-center", pageHeading: "Latest content" },
    ]
    for (const link of whyEmpowerLinks) {
        test(`Click Why Empower - ${link.name}`, async ({ page }) => {
            const finproPage = new FinancialProfessionalsPage(page);
            await finproPage.openHamburger();
            await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

            await finproPage.openFithSubmenu();
            await finproPage.clickFithSubmenuItem(link.name);

            if (link.url) {
                await expect(page).toHaveURL(link.url);
                await expect(page.getByText(link.pageHeading, { exact: true }).first()).toBeVisible();
            }
        });
    }
});