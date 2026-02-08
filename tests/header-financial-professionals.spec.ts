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
    await finproPage.clickMenuSolutions();

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
    await finproPage.clickMenuExperience();

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
    await finproPage.clickMenuResources();

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
    await finproPage.clickMenuInsights();

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
    await finproPage.clickMenuWhyEmpower();

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