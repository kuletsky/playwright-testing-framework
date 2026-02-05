import { test, expect } from '@playwright/test';
import { LoginV1Page } from "../pages/LoginV1Page";




test('Login Retirement account', async ({ page }) => {
    const loginPage = new LoginV1Page(page);
    await loginPage.gotoIndividualsPage();
    await loginPage.clickLoginButton();
    await loginPage.clickLoginRetirementAccount();

    await expect(page).not.toHaveURL('/login-v1');
});