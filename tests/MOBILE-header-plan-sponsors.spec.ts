import { test, expect } from '@playwright/test';
import { PlanSponsorsPage } from '../pages/PlanSponsors';
import { suppressCookieBanner } from '../utils/stabilize';


test.beforeEach(async ({ page }) => {
    await suppressCookieBanner(page);
});

test.describe('Menu visibility', () => {

    test('Verify Heading menu is displayed', async ({ page }) => {
        const plansponsorsPage = new PlanSponsorsPage(page);
        await plansponsorsPage.gotoPlanSponsorsPage();
        await plansponsorsPage.openHamburger();
        await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();


        const headingText = (await page.locator(".h-10").textContent())?.trim();
        expect(headingText).toBe("Plan Sponsors");
    });

    test('Verify Contextual menu is displayed', async ({ page }) => {
        const plansponsorsPage = new PlanSponsorsPage(page);
        await plansponsorsPage.gotoPlanSponsorsPage();
        await plansponsorsPage.openHamburger();
        await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

        const links = page.locator(".mobile-contextual-nav [role='menuitem']");
        await expect(links).toHaveCount(2);

        const linksText = (await links.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
            "Individuals",
            "Financial Professionals"
        ]);
    });

    test('Verify Primary menu is displayed', async ({ page }) => {
        const plansponsorsPage = new PlanSponsorsPage(page);
        await plansponsorsPage.gotoPlanSponsorsPage();
        await plansponsorsPage.openHamburger();
        await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

        const links = page.locator(".mobile-nav-primary-menu > button");
        await expect(links).toHaveCount(5);

        const linksText = (await links.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
            "Markets",
            "Solutions",
            "Experience",
            "Learn",
            "Why Empower"
        ]);
    });

    test('Verify Markets submenu is displayed', async ({ page }) => {
        const plansponsorsPage = new PlanSponsorsPage(page);
        await plansponsorsPage.gotoPlanSponsorsPage();
        await plansponsorsPage.openHamburger();
        await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

        await plansponsorsPage.openFirstSubmenu();

        const submenuLinks = await plansponsorsPage.getLinksFirstSubmenu();
        await expect(submenuLinks).toHaveCount(6);

        const linksText = (await submenuLinks.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
            "Small and growing businesses",
            "Large and mega corporations",
            "Multiple employer plans",
            "Government",
            "Not-for-profit​",
            "Taft-Hartley​"
        ]);
    });

    test('Verify Solutions menu is displayed', async ({ page }) => {
        const plansponsorsPage = new PlanSponsorsPage(page);
        await plansponsorsPage.gotoPlanSponsorsPage();
        await plansponsorsPage.openHamburger();
        await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

        await plansponsorsPage.openSecondSubmenu();

        const submenuLinks = await plansponsorsPage.getLinksSecondSubmenu();
        await expect(submenuLinks).toHaveCount(9);

        const linksText = (await submenuLinks.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
            "Integrated workplace solutions",
            "Advisory services​",
            "Retirement solutions​",
            "Defined contribution plans",
            "Defined benefit plans",
            "Nonqualified plans",
            "Empower benefit consulting services",
            "Stock plan services​",
            "Consumer-directed health",
        ]);
    });

    test('Verify Experience menu is displayed', async ({ page }) => {
        const plansponsorsPage = new PlanSponsorsPage(page);
        await plansponsorsPage.gotoPlanSponsorsPage();
        await plansponsorsPage.openHamburger();
        await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

        await plansponsorsPage.openThirdSubmenu();

        const submenuLinks = await plansponsorsPage.getLinksThirdSubmenu();
        await expect(submenuLinks).toHaveCount(11);

        const linksText = (await submenuLinks.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
            "Plan servicing",
            "Service",
            "Technology",
            "Plan administration",
            "Public policy",
            "APIs",
            "Participant engagement",
            "Personal experience",
            "Advice & guidance",
            "Education & action",
            "Financial wellness",
        ]);
    });

    test('Verify Learn menu is displayed', async ({ page }) => {
        const plansponsorsPage = new PlanSponsorsPage(page);
        await plansponsorsPage.gotoPlanSponsorsPage();
        await suppressCookieBanner(page);

        await plansponsorsPage.openHamburger();
        await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

        await plansponsorsPage.openForthSubmenu();

        const submenuLinks = await plansponsorsPage.getLinksForthSubmenu();
        await expect(submenuLinks).toHaveCount(2);

        const linksText = (await submenuLinks.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
            "Investment Insights",
            "The Currency",
        ]);
    });

    test('Verify Why Empower menu is displayed', async ({ page }) => {
        const plansponsorsPage = new PlanSponsorsPage(page);
        await plansponsorsPage.gotoPlanSponsorsPage();
        await suppressCookieBanner(page);

        await plansponsorsPage.openHamburger();
        await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

        await plansponsorsPage.openFithSubmenu();

        const submenuLinks = await plansponsorsPage.getLinksFithSubmenu();
        await expect(submenuLinks).toHaveCount(4);

        const linksText = (await submenuLinks.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
            "About us",
            "Cybersecurity",
            "Press Center",
            "Contact us"
        ]);
    });
});

test.describe('Markets menu functionality', () => {
    // Data-driven tests for Markets menu items
    const marketsLinks = [
        { name: 'Small and growing businesses', menuHeading: 'Small and growing businesses', url: '/plan-sponsors/what-we-offer/small-and-growing-businesses', pageHeading: "Plan management made simple with flexible service, expert support, and smart solutions. " },
        { name: 'Large and mega corporations', menuHeading: 'Large and mega corporations', url: '/plan-sponsors/what-we-offer/large-and-mega-corporations', pageHeading: "Built on partnership. Defined by results." },
        { name: 'Multiple employer plans', menuHeading: "Multiple employer plans", url: '/plan-sponsors/what-we-offer/multiple-employer', pageHeading: "Multiple-Employer" },
        { name: 'Government', menuHeading: "Government", url: '/plan-sponsors/what-we-offer/government', pageHeading: "Built on experience. Focused on results." },
        { name: 'Not-for-profit​', menuHeading: "Not-for-profit", url: '/plan-sponsors/what-we-offer/not-for-profit-overview', pageHeading: "Put our 60+ years of experience to work for you" },
        { name: 'Taft-Hartley​', menuHeading: "Taft-Hartley", url: '/plan-sponsors/what-we-offer/taft-hartley-plans', pageHeading: "Backing members. Securing futures." },
    ]
    for (const link of marketsLinks) {
        test(`Click Markets - ${link.name}`, async ({ page }) => {
            const plansponsorsPage = new PlanSponsorsPage(page);
            await plansponsorsPage.gotoPlanSponsorsPage();
            await suppressCookieBanner(page);

            await plansponsorsPage.openHamburger();
            await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

            await plansponsorsPage.openFirstSubmenu();
            await plansponsorsPage.clickFirstSubmenuItem(link.name);

            if (link.url) {
                await expect(page).toHaveURL(link.url);
                await expect(page.getByText(link.pageHeading, { exact: true }).first()).toBeVisible({ timeout: 60_000 });
            }
        });
    }
});

test.describe('Solutions menu functionality', () => {
    // Data-driven tests for Solutions menu items
    const solutionsLinks = [
        { name: 'Integrated workplace solutions', menuHeading: 'Integrated workplace solutions', url: '/plan-sponsors/what-we-offer/integrated-workplace-solutions', pageHeading: "The future of workplace is here" },
        { name: 'Advisory services​', menuHeading: 'Advisory services', url: '/plan-sponsors/what-we-offer/advisory-services', pageHeading: "Advisory Services" },
        { name: 'Retirement solutions​', menuHeading: 'Retirement solutions', url: '/plan-sponsors/what-we-offer/retirement-solutions', pageHeading: "Retirement Solutions Group" },
        { name: 'Defined contribution plans', menuHeading: 'Defined contribution plans', url: '/plan-sponsors/what-we-offer/defined-contribution-plans', pageHeading: "Defined contribution plans. Built to engage. Trusted to deliver." },
        { name: 'Defined benefit plans', menuHeading: 'Defined benefit plans', url: '/plan-sponsors/what-we-offer/defined-benefit-plans', pageHeading: "Defined benefit plans. Smarter for you. Simpler for them." },
        { name: 'Nonqualified plans', menuHeading: 'Nonqualified plans', url: '/plan-sponsors/what-we-offer/nonqualified-plans', pageHeading: "The edge in workplace wealth" },
        { name: 'Empower benefit consulting services', menuHeading: 'Empower benefit consulting services', url: '/plan-sponsors/what-we-offer/empower-benefit-consulting-services', pageHeading: "Measured excellence. Proven expertise." },
        { name: 'Stock plan services​', menuHeading: 'Stock plan services', url: '/plan-sponsors/what-we-offer/stock-plan-services', pageHeading: "Global stock plans simplified. Yes, really." },
        { name: 'Consumer-directed health', menuHeading: 'Consumer-directed health', url: '/plan-sponsors/what-we-offer/consumer-directed-health', pageHeading: "Integrated health and wealth" },
    ]
    for (const link of solutionsLinks) {
        test(`Click Solutions - ${link.name}`, async ({ page }) => {
            const plansponsorsPage = new PlanSponsorsPage(page);
            await plansponsorsPage.gotoPlanSponsorsPage();
            await suppressCookieBanner(page);

            await plansponsorsPage.openHamburger();
            await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

            await plansponsorsPage.openSecondSubmenu();
            await plansponsorsPage.clickSecondSubmenuItem(link.name);

            if (link.url) {
                await expect(page).toHaveURL(link.url);
                await expect(page.getByText(link.pageHeading, { exact: true }).first()).toBeVisible({ timeout: 60_000 });
            }
        });
    }
});

test.describe('Experience menu functionality', () => {
    // Data-driven tests for Experience menu items
    const experienceLinks = [
        { name: 'Plan servicing', menuHeading: 'Plan servicing' },
        { name: 'Participant engagement', menuHeading: 'Participant engagement' },
    ]
    for (const link of experienceLinks) {
        // test(`Click Experience - ${link.name}`, async ({ page }) => {
        //     const plansponsorsPage = new PlanSponsorsPage(page);
        //     await plansponsorsPage.gotoPlanSponsorsPage();
        //     await plansponsorsPage.openExperienceMenu();
        //     await plansponsorsPage.clickExperienceItem(link.name);

        //     if (link.url) {
        //         await expect(page).toHaveURL(link.url);
        //         await expect(page.getByText(link.pageHeading, { exact: true }).first()).toBeVisible();
        //     }
        // });

        // test(`Hover Experience - ${link.name}`, async ({ page }) => {
        //     const plansponsorsPage = new PlanSponsorsPage(page);
        //     await plansponsorsPage.gotoPlanSponsorsPage();
        //     await plansponsorsPage.openExperienceMenu();

        //     await expect(page.locator('#experience-dropdown')).toBeVisible();
        //     await plansponsorsPage.hoverExperienceItem(link.name);

        //     const dropdown = page.locator("#experience-dropdown .nav-dropdown-right");
        //     await expect(dropdown.getByText(link.menuHeading, { exact: true })).toBeVisible({ timeout: 60_000 });
        // });
    }
});

test.describe('Learn menu functionality', () => {
    // Data-driven tests for LEARN menu items
    const learnLinks = [
        { name: 'Investment Insights', menuHeading: "Investment Insights", url: '/investment-insights', pageHeading: "Latest Content" },
        { name: 'The Currency', menuHeading: "Power up with the latest money news for life, work and play.", url: '/the-currency', pageHeading: "Get insights and intel on your money." },
    ]
    for (const link of learnLinks) {
        test(`Click LEARN - ${link.name}`, async ({ page }) => {
            const plansponsorsPage = new PlanSponsorsPage(page);
            await plansponsorsPage.gotoPlanSponsorsPage();
            await plansponsorsPage.openHamburger();
            await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

            await plansponsorsPage.openForthSubmenu();
            await plansponsorsPage.clickForthSubmenuItem(link.name);

            if (link.url) {
                await expect(page).toHaveURL(link.url);
                await expect(page.getByText(link.pageHeading, { exact: true }).first()).toBeVisible({ timeout: 60_000 });
            }
        });
    }
});

test.describe('Why Empower menu functionality', () => {
    // Data-driven tests for WHY EMPOWER menu items
    const whyEmpowerLinks = [
        { name: 'About us', menuHeading: "About us", url: '/plan-sponsors/about-us', pageHeading: "We are Empower" },
        { name: 'Cybersecurity', menuHeading: "Cybersecurity", url: '/plan-sponsors/about-empower/cybersecurity', pageHeading: "Cybersecurity you can count on" },
        { name: 'Press Center', menuHeading: "Press center", url: '/press-center', pageHeading: "Latest content" },
        { name: 'Contact us', menuHeading: "Contact us", url: '/plan-sponsors/contact', pageHeading: "We’re happy to help with whatever you need." },
    ]
    for (const link of whyEmpowerLinks) {
        test(`Click WHY EMPOWER - ${link.name}`, async ({ page }) => {
            const plansponsorsPage = new PlanSponsorsPage(page);
            await plansponsorsPage.gotoPlanSponsorsPage();
            await suppressCookieBanner(page);

            await plansponsorsPage.openHamburger();
            await expect(page.locator(".mobile-navigation-dropdown")).toBeVisible();

            await plansponsorsPage.openFithSubmenu();
            await plansponsorsPage.clickFithSubmenuItem(link.name);

            if (link.url) {
                await expect(page).toHaveURL(link.url);
                await expect(page.getByText(link.pageHeading, { exact: true }).first()).toBeVisible({ timeout: 60_000 });
            }
        });
    }
});