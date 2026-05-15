import { test, expect } from '../fixtures';

test.describe('Menu visibility', () => {
    test('Verify Primary menu is displayed', async ({ planSponsorsPage }) => {
        const links = await planSponsorsPage
            .gotoPlanSponsorsPage()
            .then(p => p.getPrimaryMenuLinks());

        await expect(links).toHaveCount(5);
        await expect(links).toHaveText([
            "Markets",
            "Solutions",
            "Experience",
            "Learn",
            "Why Empower"
        ]);
    });

    test('Verify Markets menu is displayed', async ({ planSponsorsPage }) => {
        const { links, pane } = await planSponsorsPage
            .gotoPlanSponsorsPage()
            .then(p => p.openMarketsMenu())
            .then(p => p.getMarketsMenuLinks());

        await expect(links).toHaveCount(6);
        await expect(links).toHaveText([
            "Small and growing businesses",
            "Large and mega corporations",
            "Multiple employer plans",
            "Government",
            "Not-for-profit​",
            "Taft-Hartley​"
        ]);
        await expect(pane.getByText("Markets", { exact: true })).toBeVisible();
    });

    test('Verify Solutions menu is displayed', async ({ planSponsorsPage }) => {
        const { links, pane } = await planSponsorsPage
            .gotoPlanSponsorsPage()
            .then(p => p.openSolutionsMenu())
            .then(p => p.getSolutionsMenuLinks());

        await expect(links).toHaveCount(9);
        await expect(links).toHaveText([
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
        await expect(pane.getByText("Solutions", { exact: true })).toBeVisible();
    });

    test('Verify Experience menu is displayed', async ({ planSponsorsPage }) => {
        const { links, pane } = await planSponsorsPage
            .gotoPlanSponsorsPage()
            .then(p => p.openExperienceMenu())
            .then(p => p.getExperienceMenuLinks());

        await expect(links).toHaveCount(2);
        await expect(links).toHaveText([
            "Plan servicing",
            "Participant engagement",
        ]);

        await expect(pane.getByText("Experience", { exact: true })).toBeVisible();
    });

    test('Verify Learn menu is displayed', async ({ planSponsorsPage }) => {
        const { links, pane } = await planSponsorsPage
            .gotoPlanSponsorsPage()
            .then(p => p.openLearnMenu())
            .then(p => p.getLearnMenuLinks());

        await expect(links).toHaveCount(2);
        await expect(links).toHaveText([
            "Investment Insights",
            "The Currency",
        ]);

        await expect(pane.getByText("Learn", { exact: true })).toBeVisible();
    });

    test('Verify Why Empower menu is displayed', async ({ planSponsorsPage }) => {
        const { links, pane } = await planSponsorsPage
            .gotoPlanSponsorsPage()
            .then(p => p.openWhyEmpowerMenu())
            .then(p => p.getWhyEmpowerMenuLinks());

        await expect(links).toHaveCount(4);
        await expect(links).toHaveText([
            "About us",
            "Cybersecurity",
            "Press Center",
            "Contact us",
        ]);
        await expect(pane.getByText("Why Empower", { exact: true })).toBeVisible();
    });
});

test.describe('Markets menu functionality', () => {
    // Data-driven tests for Markets menu items
    const marketsLinks = [
        { name: 'Small and growing businesses', menuHeading: 'Small and growing businesses', url: '/plan-sponsors/what-we-offer/small-and-growing-businesses', pageHeading: "Plan management made simple with flexible service, expert support, and smart solutions. " },
        { name: 'Large and mega corporations', menuHeading: 'Large and mega corporations', url: '/plan-sponsors/what-we-offer/large-and-mega-corporations', pageHeading: "Built on partnership. Defined by results." },
        { name: 'Multiple employer plans', menuHeading: "Multiple employer plans", url: '/plan-sponsors/what-we-offer/multiple-employer', pageHeading: "Multiple-Employer" },
        { name: 'Government', menuHeading: "Government", url: '/plan-sponsors/what-we-offer/government', pageHeading: "Built on experience. Focused on results." },
        { name: 'Not-for-profit​', menuHeading: "Not-for-profit", url: '/plan-sponsors/markets/not-for-profit', pageHeading: "Built for good. Ready to perform." },
        { name: 'Taft-Hartley​', menuHeading: "Taft-Hartley", url: '/plan-sponsors/what-we-offer/taft-hartley-plans', pageHeading: "Backing members. Securing futures." },
    ]
    for (const link of marketsLinks) {
        test(`Click Markets - ${link.name}`, async ({ planSponsorsPage, page }) => {
            await planSponsorsPage
                .gotoPlanSponsorsPage()
                .then(p => p.openMarketsMenu())
                .then(p => p.clickMarketsItem(link.name));
                
            if (link.url) {
                await expect(page).toHaveURL(link.url);
                await expect(page.getByText(link.pageHeading, { exact: true }).first()).toBeVisible({ timeout: 60_000 });
            }
        });

        test(`Hover Markets - ${link.name}`, async ({ planSponsorsPage, page }) => {
            const pane = await planSponsorsPage
            .gotoPlanSponsorsPage()
            .then(p => p.openMarketsMenu())
            .then(p => p.hoverMarketsItem(link.name))
            .then(p => p.getDropdownRightPane("markets"));

            await expect(pane.getByText(link.menuHeading, { exact: true })).toBeVisible();
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
        test(`Click Solutions - ${link.name}`, async ({ planSponsorsPage, page }) => {
            await planSponsorsPage
                .gotoPlanSponsorsPage()
                .then(p => p.openSolutionsMenu())
                .then(p => p.clickSolutionsItem(link.name));

            if (link.url) {
                await expect(page).toHaveURL(link.url);
                await expect(page.getByText(link.pageHeading, { exact: true }).first()).toBeVisible();
            }
        });

        test(`Hover Solutions - ${link.name}`, async ({ planSponsorsPage, page }) => {
            const pane = await planSponsorsPage
                .gotoPlanSponsorsPage()
                .then(p => p.openSolutionsMenu())
                .then(p => p.hoverSolutionsItem(link.name))
                .then(p => p.getDropdownRightPane("solutions"));

            await expect(pane.getByText(link.menuHeading, { exact: true })).toBeVisible();
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
        test(`Hover Experience - ${link.name}`, async ({ planSponsorsPage, page }) => {
            const pane = await planSponsorsPage
            .gotoPlanSponsorsPage()
                .then(p => p.openExperienceMenu())
                .then(p => p.hoverExperienceItem(link.name))
                .then(p => p.getDropdownRightPane("experience"));

            await expect(pane.getByText(link.menuHeading, { exact: true })).toBeVisible();
        });
    }
});

test.describe('Learn menu functionality', () => {

    // Data-driven tests for LEARN menu items
    const learnLinks = [
        { name: 'Investment Insights', menuHeading: "Investment Insights", url: '/investment-insights', pageHeading: "Latest Content" },
        { name: 'The Currency', menuHeading: "Power up with the latest money news for life, work and play.", url: '/the-currency', pageHeading: "Money" },
    ]
    for (const link of learnLinks) {
        test(`Click LEARN - ${link.name}`, async ({ planSponsorsPage, page }) => {
            await planSponsorsPage
                .gotoPlanSponsorsPage()
                .then(p => p.openLearnMenu())
                .then(p => p.clickLearnItem(link.name));

             if (link.url) {
                await expect(page).toHaveURL(link.url);
                await expect(page.getByText(link.pageHeading, { exact: true }).first()).toBeVisible({ timeout: 60_000 });
            }
        });

        test(`Hover LEARN - ${link.name}`, async ({ planSponsorsPage, page }) => {
            const pane = await planSponsorsPage             
                .gotoPlanSponsorsPage()
                .then(p => p.openLearnMenu())
                .then(p => p.hoverLearnItem(link.name))
                .then(p => p.getDropdownRightPane("learn"));

            await expect(pane.getByText(link.menuHeading, { exact: true }).first()).toBeVisible();
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
        test(`Click WHY EMPOWER - ${link.name}`, async ({ planSponsorsPage, page }) => {
            await planSponsorsPage
                .gotoPlanSponsorsPage()
                .then(p => p.openWhyEmpowerMenu())
                .then(p => p.clickWhyEmpowerItem(link.name));

             if (link.url) {
                await expect(page).toHaveURL(link.url);
                await expect(page.getByText(link.pageHeading, { exact: true }).first()).toBeVisible({ timeout: 60_000 });
            }
        });

        test(`Hover WHY EMPOWER - ${link.name}`, async ({ planSponsorsPage, page }) => {
            const pane = await planSponsorsPage
            .gotoPlanSponsorsPage()
            .then(p => p.openWhyEmpowerMenu())
            .then(p => p.hoverWhyEmpowerItem(link.name))
            .then(p => p.getDropdownRightPane("why-empower"));

            await expect(pane.getByText(link.menuHeading, { exact: true }).first()).toBeVisible();
        });
    }
});