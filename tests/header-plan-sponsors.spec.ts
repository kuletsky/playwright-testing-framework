import { test, expect } from '@playwright/test';
import { PlanSponsorsPage } from '../pages/PlanSponsors';

test('Verify Primary menu is displayed', async ({ page }) => {
    const plansponsorPage = new PlanSponsorsPage(page);
    await plansponsorPage.gotoPlanSponsorsPage();

    const links = page.locator("button[data-once*='desktopPrimaryNav']");
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

test('Verify Markets menu is displayed', async ({ page }) => {
    const plansponsorPage = new PlanSponsorsPage(page);
    await plansponsorPage.gotoPlanSponsorsPage();
    await plansponsorPage.clickMenuMarkets();

    const links = page.locator("#markets-dropdown li.relative > a, #markets-dropdown li.relative > button");
    await expect(links).toHaveCount(6);

    const linksText = (await links.allTextContents()).map(t => t.trim());
    expect(linksText).toEqual([
        "Small and growing businesses",
        "Large and mega corporations",
        "Multiple employer plans",
        "Government",
        "Not-for-profit​",
        "Taft-Hartley​"
    ]);

    const dropdown = page.locator("#markets-dropdown .nav-dropdown-right");
    await expect(dropdown.getByText("Markets", { exact: true })).toBeVisible();
});

test('Verify Solutions menu is displayed', async ({ page }) => {
    const plansponsorPage = new PlanSponsorsPage(page);
    await plansponsorPage.gotoPlanSponsorsPage();
    await plansponsorPage.clickMenuSolutions();

    const links = page.locator("#solutions-dropdown li.relative > a, #solutions-dropdown li.relative > button");
    await expect(links).toHaveCount(9);

    const linksText = (await links.allTextContents()).map(t => t.trim());
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

    const dropdown = page.locator("#solutions-dropdown .nav-dropdown-right");
    await expect(dropdown.getByText("Solutions", { exact: true })).toBeVisible();
});

test('Verify Experience menu is displayed', async ({ page }) => {
    const plansponsorPage = new PlanSponsorsPage(page);
    await plansponsorPage.gotoPlanSponsorsPage();
    await plansponsorPage.clickMenuExperience();

    const links = page.locator("#experience-dropdown li.relative > a, #experience-dropdown li.relative > button");
    await expect(links).toHaveCount(2);

    const linksText = (await links.allTextContents()).map(t => t.trim());
    expect(linksText).toEqual([
        "Plan servicing",
        "Participant engagement",
    ]);

    const dropdown = page.locator("#experience-dropdown .nav-dropdown-right");
    await expect(dropdown.getByText("Experience", { exact: true })).toBeVisible();
});

test('Verify Learn menu is displayed', async ({ page }) => {
    const plansponsorsPage = new PlanSponsorsPage(page);
    await plansponsorsPage.gotoPlanSponsorsPage();
    await plansponsorsPage.clickMenuLearn();

    const links = page.locator("#learn-dropdown li.relative > a, #learn-dropdown li.relative > button");
    await expect(links).toHaveCount(2);

    const linksText = (await links.allTextContents()).map(t => t.trim());
    expect(linksText).toEqual([
        "Investment Insights",
        "The Currency",
    ]);

    const dropdown = page.locator("#learn-dropdown .nav-dropdown-right");
    await expect(dropdown.locator('p:has-text("Learn")')).toBeVisible();
});

test('Verify Why Empower menu is displayed', async ({ page }) => {
    const plansponsorsPage = new PlanSponsorsPage(page);
    await plansponsorsPage.gotoPlanSponsorsPage();
    await plansponsorsPage.clickMenuWhyEmpower();

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
    await expect(dropdown.locator('p:has-text("Why Empower")')).toBeVisible();
});