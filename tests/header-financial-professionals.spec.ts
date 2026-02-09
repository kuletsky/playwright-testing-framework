import { test, expect } from '@playwright/test';
import { FinancialProfessionalsPage } from '../pages/FinancialProfessionalsPage';


test('Verify Financial Professionals menu is displayed', async ({ page }) => {
    const finproPage = new FinancialProfessionalsPage(page);
    await finproPage.gotoFinProfPage();

    const links = page.locator("button[data-once*='desktopPrimaryNav']");
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
    await finproPage.gotoFinProfPage();
    await finproPage.openSolutionsMenu();

    const links = page.locator("#solutions-dropdown li.relative > a, #solutions-dropdown li.relative > button");
    await expect(links).toHaveCount(8);

    const linksText = (await links.allTextContents()).map(t => t.trim());
    expect(linksText).toEqual([
        "Defined contribution",
        "Integrated workplace solutions",
        "Fiduciary advice solutions",
        "Retirement income solutions",
        "Stock plan services​",
        "Empower benefit consulting services",
        "Defined benefit plans",
        "Consumer-directed health",
    ]);

    const dropdown = page.locator("#solutions-dropdown .nav-dropdown-right");
    await expect(dropdown.getByText("Solutions", { exact: true })).toBeVisible();
});

test('Verify Experience menu is displayed', async ({ page }) => {
    const finproPage = new FinancialProfessionalsPage(page);
    await finproPage.gotoFinProfPage();
    await finproPage.openExperienceMenu();

    const links = page.locator("#experience-dropdown li.relative > a, #experience-dropdown li.relative > button");
    await expect(links).toHaveCount(5);

    const linksText = (await links.allTextContents()).map(t => t.trim());
    expect(linksText).toEqual([
        "Markets",
        "Participant experience",
        "APIs",
        "Partner advocate",
        "Events",
    ]);

    const dropdown = page.locator("#experience-dropdown .nav-dropdown-right");
    await expect(dropdown.getByText("Experience", { exact: true })).toBeVisible();
});

test('Verify Resources menu is displayed', async ({ page }) => {
    const finproPage = new FinancialProfessionalsPage(page);
    await finproPage.gotoFinProfPage();
    await finproPage.openResourcesMenu();

    const links = page.locator("#resources-dropdown li.relative > a, #resources-dropdown li.relative > button");
    await expect(links).toHaveCount(6);

    const linksText = (await links.allTextContents()).map(t => t.trim());
    expect(linksText).toEqual([
        "Prospecting & proposals",
        "Plan management",
        "Advisor toolkit",
        "TPA toolkit",
        "Plan sponsor toolkit",
        "Participant toolkit",
    ]);

    const dropdown = page.locator("#resources-dropdown .nav-dropdown-right");
    await expect(dropdown.getByText("Resources", { exact: true })).toBeVisible();
});

test('Verify Insights menu is displayed', async ({ page }) => {
    const finproPage = new FinancialProfessionalsPage(page);
    await finproPage.gotoFinProfPage();
    await finproPage.openInsightsMenu();

    const links = page.locator("#insights-dropdown li.relative > a, #insights-dropdown li.relative > button");
    await expect(links).toHaveCount(3);

    const linksText = (await links.allTextContents()).map(t => t.trim());
    expect(linksText).toEqual([
        "Investment Insights",
        "Legislative & regulatory news",
        "The Currency",
    ]);

    const dropdown = page.locator("#insights-dropdown .nav-dropdown-right");
    await expect(dropdown.getByText("Insights", { exact: true })).toBeVisible();
});


test('Verify Why Empower menu is displayed', async ({ page }) => {
    const finproPage = new FinancialProfessionalsPage(page);
    await finproPage.gotoFinProfPage();
    await finproPage.openWhyEmpowerMenu();

    const links = page.locator("#why-empower-dropdown li.relative > a, #why-empower-dropdown li.relative > button");
    await expect(links).toHaveCount(4);

    const linksText = (await links.allTextContents()).map(t => t.trim());
    expect(linksText).toEqual([
        "About us",
        "Contact us",
        "Cybersecurity",
        "Press Center",
    ]);

    const dropdown = page.locator("#why-empower-dropdown .nav-dropdown-right");
    await expect(dropdown.locator('p:has-text("Why Empower")')).toBeVisible();
});

// Data-driven tests for Solutions menu items
const solutionsLinks = [
    // { name: "Defined contribution", menuHeading: "Defined contribution", url: "/financial-professionals/solutions/defined-contribution", pageHeading: "Defined contribution" },
    { name: "Integrated workplace solutions", menuHeading: "Integrated workplace solutions", url: "/financial-professionals/what-we-offer/integrated-workplace-solutions", pageHeading: "The future of workplace is here" },
    { name: "Fiduciary advice solutions", menuHeading: "Fiduciary advice solutions", url: "/financial-professionals/what-we-offer/fiduciary-advice-solutions-overview", pageHeading: "We believe everyone deserves access to fiduciary advice" },
    { name: "Retirement income solutions", menuHeading: "Retirement income solutions", url: "/financial-professionals/what-we-offer/retirement-income", pageHeading: "Helping to convert lifetime savings into a retirement income stream" },
    { name: "Stock plan services​", menuHeading: "Stock plan services​", url: "/financial-professionals/what-we-offer/stock-plan-services", pageHeading: "Global stock plans simplified. Yes, really." },
    { name: "Empower benefit consulting services", menuHeading: "Empower benefit consulting services", url: "/financial-professionals/what-we-offer/empower-benefit-consulting-services", pageHeading: "Trusted excellence. Proven expertise." },
    { name: "Defined benefit plans", menuHeading: "Defined benefit plans", url: "/financial-professionals/what-we-offer/defined-benefit-plans", pageHeading: "Defined benefit plans. Smarter for you. Simpler for them." },
    { name: "Consumer-directed health", menuHeading: "Consumer-directed health", url: "/financial-professionals/what-we-offer/consumer-directed-health", pageHeading: "Integrated health and wealth" },
]
for (const link of solutionsLinks) {
    test(`Click Solutions - ${link.name}`, async ({ page }) => {
        const finproPage = new FinancialProfessionalsPage(page);
        await finproPage.gotoFinProfPage();
        await finproPage.openSolutionsMenu();
        await finproPage.clickFinproItem(link.name);

        if (link.url) {
            await expect(page).toHaveURL(link.url);
            await expect(page.getByText(link.pageHeading, { exact: true })).toBeVisible();
        }
    });

    test(`Hover Solutions - ${link.name}`, async ({ page }) => {
        const finproPage = new FinancialProfessionalsPage(page);
        await finproPage.gotoFinProfPage();
        await finproPage.openSolutionsMenu();

        await expect(page.locator('#solutions-dropdown')).toBeVisible();
        await finproPage.hoverFinproItem(link.name);

        const dropdown = page.locator("#solutions-dropdown .nav-dropdown-right");
        await expect(dropdown.getByText(link.menuHeading, { exact: true })).toBeVisible();
    });
}