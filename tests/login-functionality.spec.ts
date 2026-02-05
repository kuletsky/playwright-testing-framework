import { test, expect } from '@playwright/test';
import { IndividualsPage } from '../pages/IndividualsPage';
import { FinancialProfessionalsPage } from '../pages/FinancialProfessionalsPage';
import { IndividualsLoginV1Page } from '../pages/IndividualsLoginV1Page';
import { IndividualsSignupPage } from '../pages/IndividualsSignupPage';



test.describe('Individuals Login-v1 functionality', () => {
    test('Login Retirement account', async ({ page }) => {
        const individualsPage = new IndividualsPage(page);
        await individualsPage.gotoIndividualsPage();
        await individualsPage.clickLoginButton();

        const loginV1Page = new IndividualsLoginV1Page(page);

        await loginV1Page.clickLoginRetirementAccount();

        // console.log('URL after click:', page.url());

        await expect(page).not.toHaveURL('/login-v1');
        await expect(page).toHaveURL(/\/participant\//);

        // const a = page.locator('.site-tagline', { hasText: 'Your Retirement Plan' });
        // const b = page.locator('h1', { hasText: 'participant.empower-retirement.com' });
        // await expect.soft(a.or(b)).toBeVisible();


        // Alternative approach using a single locator with multiple conditions
        // const taglineOrHeader = page.locator('.site-tagline', { hasText: 'Your Retirement Plan' }).or(page.locator('h1', { hasText: 'participant.empower-retirement.com' }));
        // await expect.soft(taglineOrHeader).toBeVisible();


        // const tagline = page.locator('.site-tagline');
        // const taglineExists = (await tagline.count()) > 0;

        // if (taglineExists) {
        //     await expect.soft(tagline.first()).toHaveText(/^\s*Your Retirement Plan\s*$/);
        // } else {
        //     await expect.soft(page.locator('h1').first()).toHaveText("participant.empower-retirement.com");
        // }

    });

    test('Login Personal Dashboard', async ({ page }) => {
        const individualsPage = new IndividualsPage(page);
        await individualsPage.gotoIndividualsPage();
        await individualsPage.clickLoginButton();

        const loginV1Page = new IndividualsLoginV1Page(page);
        await loginV1Page.clickLoginPersonalDashboard();

        await expect.soft(page).not.toHaveURL('/login-v1');
        await expect.soft(page).toHaveURL(/\/page\/login\/goHome$/);
        await expect.soft(page.locator('#form-email .legend')).toHaveText("Sign in to Empower Personal Dashboard™");
    });

    test('Login Personal Wealth', async ({ page }) => {
        const individualsPage = new IndividualsPage(page);
        await individualsPage.gotoIndividualsPage();
        await individualsPage.clickLoginButton();

        const loginV1Page = new IndividualsLoginV1Page(page);
        await loginV1Page.clickLoginPersonalWealth();

        await expect(page).not.toHaveURL('/login-v1');
        await expect(page).toHaveURL(/\/participant\//);

    });

    test('Login Retirement plan sponsors', async ({ page }) => {
        const individualsPage = new IndividualsPage(page);
        await individualsPage.gotoIndividualsPage();
        await individualsPage.clickLoginButton();

        const loginV1Page = new IndividualsLoginV1Page(page);
        await loginV1Page.clickLoginRetirementPlanSponsors();

        await expect(page).not.toHaveURL('/login-v1');
        await expect(page).toHaveURL(/\/planweb\//);
        await expect(page.locator('.site-tagline')).toHaveText("Plan Service Center");
    });

    test('Login Retirement plan financial professionals', async ({ page }) => {
        const individualsPage = new IndividualsPage(page);
        await individualsPage.gotoIndividualsPage();
        await individualsPage.clickLoginButton();

        const loginV1Page = new IndividualsLoginV1Page(page);
        await loginV1Page.clickLoginRetirementPlanFinancialProfessionals();

        await expect(page).not.toHaveURL('/login-v1');
        await expect(page).toHaveURL(/\/planweb\//);
        await expect(page.locator('.site-tagline-Partner')).toHaveText("Partner");
    });
});



test.describe('Financial Professionals Login functionality', () => {
    test('Login Finansial Professionals', async ({ page }) => {
        const finProPage = new FinancialProfessionalsPage(page);
        await finProPage.gotoFinProfPage();
        await finProPage.clickLoginButton();
        await finProPage.clickIAgreePopup();
        await finProPage.clickLoginFinancialProfessionalsButton();

        await expect(page).toHaveURL(/\/planweb\//);
        await expect(page.locator('.site-tagline-Partner')).toHaveText("Partner");

    });

    test('Register Financial Professionals', async ({ page }) => {
        const finProfPage = new FinancialProfessionalsPage(page);
        await finProfPage.gotoFinProfPage();
        await finProfPage.clickLoginButton();
        await finProfPage.clickIAgreePopup();
        await finProfPage.clickRegisterFinancialProfessionalsButton();

        await expect(page).toHaveURL(/\/planweb\//);
        await expect(page.locator('.site-tagline-Partner')).toHaveText("Partner");


    });

    test('Register Rixtrema', async ({ page }) => {
        const finProfPage = new FinancialProfessionalsPage(page);
        await finProfPage.gotoFinProfPage();
        await finProfPage.clickLoginButton();
        await finProfPage.clickIAgreePopup();
        await finProfPage.clickRegisterRixtremaButton();
        await finProfPage.clickContinueButton();

        await expect(page).toHaveURL(/\/empowerlogin\//);
        await expect(page.locator('h1')).toHaveText("Sign In");
    });

});



test.describe('Individuals Open an account functionality', () => {
    test('Go to retirement account', async ({ page }) => {
        const individualsPage = new IndividualsPage(page);
        await individualsPage.gotoIndividualsPage();
        await individualsPage.clickOpenAccountButton();

        const signupPage = new IndividualsSignupPage(page);
        await signupPage.clickGoToRetirementAccount();

        await expect.soft(page).toHaveURL(/\/participant\//);
        // await expect.soft(page.locator('.site-tagline')).toHaveText("Your Retirement Plan");
    });

});