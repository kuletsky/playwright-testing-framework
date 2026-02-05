import { test, expect } from '@playwright/test';
import { LoginFunctionalityPage } from "../pages/LoginFunctionalityPage";


test.describe('Individuals Login-v1 Functionality', () => {
    test('Login Retirement account', async ({ page }) => {
        const loginPage = new LoginFunctionalityPage(page);
        await loginPage.gotoIndividualsPage();
        await loginPage.clickLoginButton();
        await loginPage.clickLoginRetirementAccount();

        await expect(page).not.toHaveURL('/login-v1');
    });

    test('Login Personal Dashboard', async ({ page }) => {
        const loginPage = new LoginFunctionalityPage(page);
        await loginPage.gotoIndividualsPage();
        await loginPage.clickLoginButton();
        await loginPage.clickLoginPersonalDashboard();

        await expect(page).not.toHaveURL('/login-v1');
    });

    test('Login Personal Wealth', async ({ page }) => {
        const loginPage = new LoginFunctionalityPage(page);
        await loginPage.gotoIndividualsPage();
        await loginPage.clickLoginButton();
        await loginPage.clickLoginPersonalWealth();

        await expect(page).not.toHaveURL('/login-v1');
    });

    test('Login Retirement plan sponsors', async ({ page }) => {
        const loginPage = new LoginFunctionalityPage(page);
        await loginPage.gotoIndividualsPage();
        await loginPage.clickLoginButton();
        await loginPage.clickLoginRetirementPlanSponsors();

        await expect(page).not.toHaveURL('/login-v1');
    });

    test('Login Retirement plan financial professionals', async ({ page }) => {
        const loginPage = new LoginFunctionalityPage(page);
        await loginPage.gotoIndividualsPage();
        await loginPage.clickLoginButton();
        await loginPage.clickLoginRetirementPlanFinancialProfessionals();

        await expect(page).not.toHaveURL('/login-v1');
    });

    test.describe('Financial Professionals Login Functionality', () => {

    });
});