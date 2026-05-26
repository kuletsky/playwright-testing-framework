import { test, expect } from '../fixtures';


test.describe('Menu visibility', () => {
    test('Verify Financial Professionals menu is displayed', async ({ finProfPage }) => {
        const links = await finProfPage
            .gotoFinProfPage()
            .then(p => p.getPrimaryMenuLinks());

        await expect(links).toHaveCount(5);
        await expect(links).toHaveText([
            "Solutions",
            "Experience",
            "Resources",
            "Insights",
            "Why Empower"
        ]);
    });

    test('Verify Solutions menu is displayed', async ({ finProfPage }) => {
        const { links, pane } = await finProfPage
            .gotoFinProfPage()
            .then(p => p.openSolutionsMenu())
            .then(p => p.getSolutionsMenuLinks());

        await expect(links).toHaveCount(9);
        await expect(links).toHaveText([
            "Defined contribution",
            "Integrated workplace solutions",
            "Fiduciary advice solutions",
            "Private market investments",
            "Stock plan services​",
            "Empower benefit consulting services",
            "Nonqualified plans",
            "Defined benefit plans",
            "Consumer-directed health",
        ]);
        await expect(pane.getByText("Solutions", { exact: true })).toBeVisible();
    });

    test('Verify Experience menu is displayed', async ({ finProfPage }) => {
        const { links, pane } = await finProfPage
            .gotoFinProfPage()
            .then(p => p.openExperienceMenu())
            .then(p => p.getExperienceMenuLinks());

        await expect(links).toHaveCount(8);
        await expect(links).toHaveText([
            "Markets",
            "Participant experience",
            "Financial wellness",
            "Education & action",
            "Advice & guidance",
            "APIs",
            "Partner advocate",
            "Webinars and events",
        ]);
        await expect(pane.getByText("Experience", { exact: true })).toBeVisible();
    });

    test('Verify Resources menu is displayed', async ({ finProfPage }) => {
        const { links, pane } = await finProfPage
            .gotoFinProfPage()
            .then(p => p.openResourcesMenu())
            .then(p => p.getResourcesMenuLinks());

        await expect(links).toHaveCount(6);
        await expect(links).toHaveText([
            "Prospecting & proposals",
            "Plan management",
            "Advisor toolkit",
            "TPA toolkit",
            "Plan sponsor toolkit",
            "Participant toolkit",
        ]);
        await expect(pane.getByText("Resources", { exact: true })).toBeVisible();
    });

    test('Verify Insights menu is displayed', async ({ finProfPage }) => {
        const { links, pane } = await finProfPage
            .gotoFinProfPage()
            .then(p => p.openInsightsMenu())
            .then(p => p.getInsightsMenuLinks());

        await expect(links).toHaveCount(3); 
        await expect(links).toHaveText([
            "Investment Insights", 
            "Legislative & regulatory news",
            "The Currency"
        ]);
        await expect(pane.getByText("Insights", { exact: true })).toBeVisible();
    });


    test('Verify Why Empower menu is displayed', async ({ finProfPage }) => {
        const { links, pane } = await finProfPage
            .gotoFinProfPage()
            .then(p => p.openWhyEmpowerMenu())
            .then(p => p.getWhyEmpowerMenuLinks());

        await expect(links).toHaveCount(4);
        await expect(links).toHaveText([
            "About us",
            "Contact us",
            "Cybersecurity",
            "Press Center",
        ]);
        await expect(pane.getByText("Why Empower", { exact: true })).toBeVisible();
        });
});

test.describe('Solutions menu functionality', () => {
    const solutionsLinks = [
        // { name: "Defined contribution", menuHeading: "Defined contribution", url: "/financial-professionals/solutions/defined-contribution", pageHeading: "Defined contribution" },
        { name: "Integrated workplace solutions", menuHeading: "Integrated workplace solutions", url: "/financial-professionals/what-we-offer/integrated-workplace-solutions", pageHeading: "The future of workplace is here" },
        { name: "Fiduciary advice solutions", menuHeading: "Fiduciary advice solutions", url: "/financial-professionals/what-we-offer/fiduciary-advice-solutions-overview", pageHeading: "We believe everyone deserves access to fiduciary advice" },
        { name: "Private market investments", menuHeading: "Private market investments", url: "/financial-professionals/what-we-offer/private-market-investments", pageHeading: "Private markets, new possibilities" },
        { name: "Stock plan services​", menuHeading: "Stock plan services​", url: "/financial-professionals/what-we-offer/stock-plan-services", pageHeading: "Global stock plans simplified. Yes, really." },
        { name: "Empower benefit consulting services", menuHeading: "Empower benefit consulting services", url: "/financial-professionals/what-we-offer/empower-benefit-consulting-services", pageHeading: "Trusted excellence. Proven expertise." },
        { name: "Nonqualified plans", menuHeading: "Nonqualified plans", url: "/financial-professionals/what-we-offer/nonqualified-plans", pageHeading: "The edge in workplace wealth" },
        { name: "Defined benefit plans", menuHeading: "Defined benefit plans", url: "/financial-professionals/what-we-offer/defined-benefit-plans", pageHeading: "Defined benefit plans. Smarter for you. Simpler for them." },
        { name: "Consumer-directed health", menuHeading: "Consumer-directed health", url: "/financial-professionals/what-we-offer/consumer-directed-health", pageHeading: "Integrated health and wealth" },
    ]
    for (const link of solutionsLinks) {
        test(`Click Solutions - ${link.name}`, async ({ finProfPage, page }) => {
            await finProfPage
                .gotoFinProfPage()
                .then(p => p.openSolutionsMenu())
                .then(p => p.clickSolutionsItem(link.name));

            await expect(page).toHaveURL(link.url);
            await expect(page.getByText(link.pageHeading, { exact: true })).toBeVisible();
        });

        test(`Hover Solutions - ${link.name}`, async ({ finProfPage, page }) => {
            const pane = await finProfPage
                .gotoFinProfPage()
                .then(p => p.openSolutionsMenu())
                .then(p => p.hoverSolutionsItem(link.name))
                .then(p => p.getDropdownRightPane('solutions'));

            await expect(pane.getByText(link.menuHeading, { exact: true })).toBeVisible();  
        });
    }
});
// Data-driven tests for Experience menu items
test.describe('Experience menu functionality', () => {

    const experienceLinks = [
        { name: "Markets", menuHeading: "Markets we serve", url: "/financial-professionals/what-we-offer/markets-we-serve", pageHeading: "A trusted partner in retirement solutions" },
        { name: "Participant experience", menuHeading: "Participant experience", url: "/financial-professionals/experience/personal-experience", pageHeading: "The full picture — connected and clear" },
        { name: "Financial wellness", menuHeading: "Financial wellness", url: "/financial-professionals/experience/financial-wellness", pageHeading: "Financial wellness. A built-in benefit." },
        { name: "Education & action", menuHeading: "Education & action", url: "/financial-professionals/experience/education-action", pageHeading: "A powerful, personal experience." },
        {
            name: "Advice & guidance", menuHeading: "Advice & guidance", url: "/financial-professionals/experience/advice-guidance", pageHeading: "The advice advantage. Day one through retirement." },
        { name: "APIs", menuHeading: "APIs", url: "/financial-professionals/experience/apis", pageHeading: "Bridges to innovation" },
        { name: "Partner advocate", menuHeading: "Partner advocate", url: "/financial-professionals/resources/partner-advocate" },
        { name: "Webinars and events", menuHeading: "Webinars and events", url: "/financial-professionals/empower-events" },
    ]
    for (const link of experienceLinks) {
        test(`Click Experience - ${link.name}`, async ({ finProfPage, page }) => {
            await finProfPage
                .gotoFinProfPage()
                .then(p => p.openExperienceMenu())
                .then(p => p.clickExperienceItem(link.name));

            if (link.pageHeading) {
                await expect(page).toHaveURL(link.url);
                await expect(page.getByText(link.pageHeading, { exact: true }).first()).toBeVisible();
            }
        });

        test(`Hover Experience - ${link.name}`, async ({ finProfPage, page }) => {
            const pane = await finProfPage
                .gotoFinProfPage()
                .then(p => p.openExperienceMenu())
                .then(p => p.hoverExperienceItem(link.name))
                .then(p => p.getDropdownRightPane('experience'));
            
            await expect(pane.getByText(link.menuHeading, { exact: true })).toBeVisible();
        });
    }
});

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
        test(`Click Resources - ${link.name}`, async ({ finProfPage, page }) => {
            await finProfPage
                .gotoFinProfPage()
                .then(p => p.openResourcesMenu())
                .then(p => p.clickResourcesItem(link.name));

            if (link.url) {
                await expect(page).toHaveURL(link.url);
                await expect(page.getByText(link.pageHeading, { exact: true }).first()).toBeVisible();
            }
        });

        test(`Hover Resources - ${link.name}`, async ({ finProfPage, page }) => {
            const pane = await finProfPage
                .gotoFinProfPage()
                .then(p => p.openResourcesMenu())
                .then(p => p.hoverResourcesItem(link.name))
                .then(p => p.getDropdownRightPane('resources'));

            await expect(pane.getByText(link.menuHeading, { exact: true })).toBeVisible();
        });
    }
});

test.describe('Insights menu functionality', () => {
    // Data-driven tests for Insights menu items
    const insightsLinks = [
        { name: "Investment Insights", menuHeading: "Investment Insights", url: "/investment-insights", pageHeading: "Latest Content" },
        { name: "Legislative & regulatory news", menuHeading: "Legislative & regulatory news", url: "/financial-professionals/insights/legislative-and-regulatory-news", pageHeading: "Legislative and regulatory news" },
        { name: "The Currency", menuHeading: "The Currency", url: "/the-currency", pageHeading: "Money" },
    ]
    for (const link of insightsLinks) {
        test(`Click Insights - ${link.name}`, async ({ finProfPage, page }) => {
            await finProfPage
                .gotoFinProfPage()
                .then(p => p.openInsightsMenu())
                .then(p => p.clickInsightsItem(link.name));

            if (link.url) {
                await expect(page).toHaveURL(link.url);
                await expect(page.getByText(link.pageHeading, { exact: true }).first()).toBeVisible();
            }
        });

        test(`Hover Insights - ${link.name}`, async ({ finProfPage, page }) => {
            const pane = await finProfPage                
                .gotoFinProfPage()
                .then(p => p.openInsightsMenu())
                .then(p => p.hoverInsightsItem(link.name))
                .then(p => p.getDropdownRightPane('insights'));

            await expect(pane.getByText(link.menuHeading, { exact: true })).toBeVisible();  
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
        test(`Click Why Empower - ${link.name}`, async ({ finProfPage, page }) => {
            await finProfPage
                .gotoFinProfPage()
                .then(p => p.openWhyEmpowerMenu())
                .then(p => p.clickWhyEmpowerItem(link.name));

            if (link.url) {
                await expect(page).toHaveURL(link.url);
                await expect(page.getByText(link.pageHeading, { exact: true }).first()).toBeVisible();
            }
        });

        test(`Hover Why Empower - ${link.name}`, async ({ finProfPage, page }) => {
            const pane = await finProfPage
                .gotoFinProfPage()
                .then(p => p.openWhyEmpowerMenu())
                .then(p => p.hoverWhyEmpowerItem(link.name))
                .then(p => p.getDropdownRightPane('why-empower'));
            
            await expect(pane.getByText(link.menuHeading, { exact: true })).toBeVisible();
        });
    }
});