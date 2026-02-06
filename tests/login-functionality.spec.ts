import { test, expect } from '@playwright/test';
import { IndividualsPage } from '../pages/IndividualsPage';
import { FinancialProfessionalsPage } from '../pages/FinancialProfessionalsPage';
import { IndividualsLoginV1Page } from '../pages/IndividualsLoginV1Page';
import { IndividualsSignupPage } from '../pages/IndividualsSignupPage';
import { PlanSponsorsPage } from '../pages/PlanSponsors';



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
        // await expect(page.locator('button[type="submit"]')).toBeVisible();

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

        await expect(page).not.toHaveURL('/login-v1');
        await expect(page).toHaveURL(/\/page\/login\/goHome/);
        await expect.soft(page.locator('#form-email .legend')).toHaveText("Sign in to Empower Personal Dashboard™");
        // await expect(page.locator('button[type="submit"]')).toBeVisible();

    });

    test('Login Personal Wealth', async ({ page }) => {
        const individualsPage = new IndividualsPage(page);
        await individualsPage.gotoIndividualsPage();
        await individualsPage.clickLoginButton();

        const loginV1Page = new IndividualsLoginV1Page(page);
        await loginV1Page.clickLoginPersonalWealth();

        await expect(page).not.toHaveURL('/login-v1');
        await expect(page).toHaveURL(/\/participant\//);
        // await expect(page.locator('button[type="submit"]')).toBeVisible();
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
        await expect(page.locator('button[type="submit"]')).toBeVisible();
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
        await expect(page.locator('button[type="submit"]')).toBeVisible();
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
        // await expect(page.locator('button[type="submit"]')).toBeVisible();
    });

    test("Let's schedule a call", async ({ page }) => {
        const individualsPage = new IndividualsPage(page);
        await individualsPage.gotoIndividualsPage();
        await individualsPage.clickOpenAccountButton();

        const signupPage = new IndividualsSignupPage(page);
        await signupPage.clickScheduleACallButton();
        // await signupPage.clickContinueButton();

        await expect(page).toHaveURL(/\/schedule-appointment/);
        await expect(page.locator('h2.u-padding-left-from-desktop')).toHaveText("Set up a call with an advisor in just a few steps");
    });

    test("Personal Cash open account", async ({ page }) => {
        const individualsPage = new IndividualsPage(page);
        await individualsPage.gotoIndividualsPage();
        await individualsPage.clickOpenAccountButton();

        const signupPage = new IndividualsSignupPage(page);
        await signupPage.clickPersonalCashOpenAccount();

        await expect(page).toHaveURL(/\/signup\/cash/);
        await expect(page.locator('//strong[contains(text(), "Make your cash count")]')).toBeVisible();
        await expect(page.locator('button[type="submit"]')).toBeVisible();
    });

    test("Premier IRA open account", async ({ page }) => {
        const individualsPage = new IndividualsPage(page);
        await individualsPage.gotoIndividualsPage();
        await individualsPage.clickOpenAccountButton();

        const signupPage = new IndividualsSignupPage(page);
        await signupPage.clickPremierIRAOpenAccount();

        await expect(page).toHaveURL(/\/signup\/premier-ira/);
        await expect(page.locator('//strong[contains(text(), "Invest in your financial future")]')).toBeVisible();
        await expect(page.locator('button[type="submit"]')).toBeVisible();
    });

    test("Brokerage IRA open account", async ({ page }) => {
        const individualsPage = new IndividualsPage(page);
        await individualsPage.gotoIndividualsPage();
        await individualsPage.clickOpenAccountButton();

        await page.locator('a[href*="netxinvestor"]').nth(0).click();

        await expect(page).toHaveURL(/\/nxi\/account/);
        await expect(page.locator('.accountTypeHeader')).toHaveText('Open an account and start investing!');
    });

    test("Premier Investment open account", async ({ page }) => {
        const individualsPage = new IndividualsPage(page);
        await individualsPage.gotoIndividualsPage();
        await individualsPage.clickOpenAccountButton();

        await page.locator('a[href*="premier-investment"]').click();

        await expect(page).toHaveURL(/\/signup\/premier-investment-account/);
        await expect(page.locator('//strong[contains(text(), "No-strings investing")]')).toBeVisible();
        await expect(page.locator('button[type="submit"]')).toBeVisible();
    });

    test("Brokerage Investment open account", async ({ page }) => {
        const individualsPage = new IndividualsPage(page);
        await individualsPage.gotoIndividualsPage();
        await individualsPage.clickOpenAccountButton();

        await page.locator('a[href*="signup/tools"]').click();

        await expect(page).toHaveURL(/\/signup\/tools/);
        await expect(page.locator('//strong[contains(text(), "Financial freedom starts here")]')).toBeVisible();
        await expect(page.locator('button[type="submit"]')).toBeVisible();
    });




});

test.describe('Plan Sponsonsors Login functionality', async () => {
    test('Login Retirement plan sponsors', async ({ page }) => {
        const planSponsors = new PlanSponsorsPage(page);
        await planSponsors.gotoPlanSponsorsPage();
        await planSponsors.clickLoginButton();

        await expect(page).not.toHaveURL('/plan-sponsors');
        await expect(page).toHaveURL(/\/planweb\//);
        await expect(page.locator('.site-tagline')).toHaveText("Plan Service Center");
        await expect(page.locator('button[type="submit"]')).toBeVisible();
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
        await expect(page.locator('button[type="submit"]')).toBeVisible();

    });

    test('Register Financial Professionals', async ({ page }) => {
        const finProfPage = new FinancialProfessionalsPage(page);
        await finProfPage.gotoFinProfPage();
        await finProfPage.clickLoginButton();
        await finProfPage.clickIAgreePopup();
        await finProfPage.clickRegisterFinancialProfessionalsButton();
        await finProfPage.clickContinueButton();

        await expect(page).toHaveURL(/\/planweb\//);
        await expect(page.locator('.site-tagline-Partner')).toHaveText("Partner");
        await expect(page.locator('button[type="submit"]')).toBeVisible();
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



