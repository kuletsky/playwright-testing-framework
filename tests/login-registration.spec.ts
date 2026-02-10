import { test, expect } from '@playwright/test';
import { IndividualsPage } from '../pages/IndividualsPage';
import { FinancialProfessionalsPage } from '../pages/FinancialProfessionalsPage';
import { IndividualsLoginV1Page } from '../pages/IndividualsLoginV1Page';
import { IndividualsSignupPage } from '../pages/IndividualsSignupPage';
import { PlanSponsorsPage } from '../pages/PlanSponsors';
import { suppressCookieBanner } from '../utils/stabilize';


test.beforeEach(async ({ page }) => {
    await suppressCookieBanner(page);
});

test.describe('Login, Registration tests', () => {
    test.describe('Individuals Login-v1 functionality', () => {
        test('Login Retirement account', async ({ page }) => {
            const individualsPage = new IndividualsPage(page);
            await individualsPage.gotoIndividualsPage();
            await individualsPage.clickLoginButton();

            const loginV1Page = new IndividualsLoginV1Page(page);
            await loginV1Page.clickLoginRetirementAccount();

            await expect(page).not.toHaveURL('/login-v1');
            // await expect(page).toHaveURL(new RegExp('participant|cloudflare|challenge|verify', 'i'));
            await expect(page).toHaveURL(/\/participant|cloudflare|challenge|verify/i);

        });

        test('Login Personal Dashboard', async ({ page }) => {
            const individualsPage = new IndividualsPage(page);
            await individualsPage.gotoIndividualsPage();
            await individualsPage.clickLoginButton();

            const loginV1Page = new IndividualsLoginV1Page(page);
            await loginV1Page.clickLoginPersonalDashboard();

            await expect(page).not.toHaveURL('/login-v1');
            await expect(page).toHaveURL(/\/page\/login\/goHome|cloudflare|challenge|verify/i);


            // await expect(page).toHaveURL(/\/page\/login\/goHome/);
            // await expect(page.locator('#form-email .legend')).toHaveText("Sign in to Empower Personal Dashboard™");
            // await expect(page.locator('button[type="submit"]')).toBeVisible();

        });

        test('Login Personal Wealth', async ({ page }) => {
            const individualsPage = new IndividualsPage(page);
            await individualsPage.gotoIndividualsPage();
            await individualsPage.clickLoginButton();

            const loginV1Page = new IndividualsLoginV1Page(page);
            await loginV1Page.clickLoginPersonalWealth();

            await expect(page).not.toHaveURL('/login-v1');
            await expect(page).toHaveURL(/\/participant|cloudflare|challenge|verify/i);
        });

        test('Login Retirement plan sponsors', async ({ page }) => {
            const individualsPage = new IndividualsPage(page);
            await individualsPage.gotoIndividualsPage();
            await individualsPage.clickLoginButton();

            const loginV1Page = new IndividualsLoginV1Page(page);
            await loginV1Page.clickLoginRetirementPlanSponsors();

            await expect(page).not.toHaveURL('/login-v1');
            await expect(page).toHaveURL(/\/planweb|cloudflare|challenge|verify/i);

            // await expect(page).toHaveURL(/\/planweb\//);
            // await expect(page.locator('.site-tagline')).toHaveText("Plan Service Center");
            // await expect(page.locator('button[type="submit"]')).toBeVisible();
        });

        test('Login Retirement plan financial professionals', async ({ page }) => {
            const individualsPage = new IndividualsPage(page);
            await individualsPage.gotoIndividualsPage();
            await individualsPage.clickLoginButton();

            const loginV1Page = new IndividualsLoginV1Page(page);
            await loginV1Page.clickLoginRetirementPlanFinancialProfessionals();

            await expect(page).not.toHaveURL('/login-v1');
            await expect(page).toHaveURL(/planweb|cloudflare|challenge|verify/i);


            // await expect(page).toHaveURL(/\/planweb\//);
            // await expect(page.locator('.site-tagline-Partner')).toHaveText("Partner");
            // await expect(page.locator('button[type="submit"]')).toBeVisible();
        });
    });

    test.describe('Individuals Open an account functionality', () => {
        test('Go to retirement account', async ({ page }) => {
            const individualsPage = new IndividualsPage(page);
            await individualsPage.gotoIndividualsPage();
            await individualsPage.clickOpenAccountButton();

            const signupPage = new IndividualsSignupPage(page);
            await signupPage.clickGoToRetirementAccount();

            await expect(page).toHaveURL(/\/participant|cloudflare|challenge|verify/i);


            // await expect.soft(page).toHaveURL(/\/participant\//);
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

            await expect(page).toHaveURL(/\/schedule-appointment|cloudflare|challenge|verify/i);

            // await expect(page).toHaveURL(/\/schedule-appointment/);
            // await expect(page.locator('h2.u-padding-left-from-desktop')).toHaveText("Set up a call with an advisor in just a few steps");
        });

        test("Personal Cash open account", async ({ page }) => {
            const individualsPage = new IndividualsPage(page);
            await individualsPage.gotoIndividualsPage();
            await individualsPage.clickOpenAccountButton();

            const signupPage = new IndividualsSignupPage(page);
            await signupPage.clickPersonalCashOpenAccount();

            await expect(page).toHaveURL(/\/signup\/cash|cloudflare|challenge|verify/i);


            // await expect(page).toHaveURL(/\/signup\/cash/);
            // await expect(page.locator('//strong[contains(text(), "Make your cash count")]')).toBeVisible();
            // await expect(page.locator('button[type="submit"]')).toBeVisible();
        });

        test("Premier IRA open account", async ({ page }) => {
            const individualsPage = new IndividualsPage(page);
            await individualsPage.gotoIndividualsPage();
            await individualsPage.clickOpenAccountButton();

            const signupPage = new IndividualsSignupPage(page);
            await signupPage.clickPremierIRAOpenAccount();

            await expect(page).toHaveURL(/\/signup\/premier-ira|cloudflare|challenge|verify/i);

            // await expect(page).toHaveURL(/\/signup\/premier-ira/);
            // await expect(page.locator('//strong[contains(text(), "Invest in your financial future")]')).toBeVisible();
            // await expect(page.locator('button[type="submit"]')).toBeVisible();
        });

        test("Brokerage IRA open account", async ({ page }) => {
            const individualsPage = new IndividualsPage(page);
            await individualsPage.gotoIndividualsPage();
            await individualsPage.clickOpenAccountButton();

            await page.locator('a[href*="netxinvestor"]').nth(0).click();

            await expect(page).toHaveURL(/\/nxi\/account|cloudflare|challenge|verify/i);


            // await expect(page).toHaveURL(/\/nxi\/account/);
            // await expect(page.getByText('Open an account and start investing!')).toBeVisible;
        });

        test("Premier Investment open account", async ({ page }) => {
            const individualsPage = new IndividualsPage(page);
            await individualsPage.gotoIndividualsPage();
            await individualsPage.clickOpenAccountButton();

            await page.locator('a[href*="premier-investment"]').click();

            await expect(page).toHaveURL(/\/signup\/premier-investment-account|cloudflare|challenge|verify/i);

            // await expect(page).toHaveURL(/\/signup\/premier-investment-account/);
            // await expect(page.locator('//strong[contains(text(), "No-strings investing")]')).toBeVisible();
            // await expect(page.locator('button[type="submit"]')).toBeVisible();
        });

        test("Brokerage Investment open account", async ({ page }) => {
            const individualsPage = new IndividualsPage(page);
            await individualsPage.gotoIndividualsPage();
            await individualsPage.clickOpenAccountButton();

            await page.locator('a[href*="signup/tools"]').click();

            await expect(page).toHaveURL(/\/signup\/tools|cloudflare|challenge|verify/i);

            // await expect(page).toHaveURL(/\/signup\/tools/);
            // await expect(page.locator('//strong[contains(text(), "Financial freedom starts here")]')).toBeVisible();
            // await expect(page.locator('button[type="submit"]')).toBeVisible({ timeout: 60_000 });
        });




    });

    test.describe('Plan Sponsonsors Login functionality', async () => {
        test('Login Retirement plan sponsors', async ({ page }) => {
            const planSponsors = new PlanSponsorsPage(page);
            await planSponsors.gotoPlanSponsorsPage();
            await planSponsors.clickLoginButton();

            await expect(page).not.toHaveURL('/plan-sponsors');
            await expect(page).toHaveURL(/\/planweb|cloudflare|challenge|verify/i);


            // await expect(page).toHaveURL(/\/planweb\//);
            // await expect(page.locator('.site-tagline')).toHaveText("Plan Service Center");
            // await expect(page.locator('button[type="submit"]')).toBeVisible();
        });
    });

    test.describe('Financial Professionals Login functionality', () => {
        test('Login Finansial Professionals', async ({ page }) => {
            const finProPage = new FinancialProfessionalsPage(page);
            await finProPage.gotoFinProfPage();
            await finProPage.clickLoginButton();
            await finProPage.clickIAgreePopup();
            await finProPage.clickLoginFinancialProfessionalsButton();

            await expect(page).toHaveURL(/\/planweb|cloudflare|challenge|verify/i);

            // await expect(page).toHaveURL(/\/planweb\//);
            // await expect(page.locator('.site-tagline-Partner')).toHaveText("Partner");
            // await expect(page.locator('button[type="submit"]')).toBeVisible();

        });

        test('Register Financial Professionals', async ({ page }) => {
            const finProfPage = new FinancialProfessionalsPage(page);
            await finProfPage.gotoFinProfPage();
            await finProfPage.clickLoginButton();
            await finProfPage.clickIAgreePopup();
            await finProfPage.clickRegisterFinancialProfessionalsButton();
            await finProfPage.clickContinueButton();

            await expect(page).toHaveURL(/\/planweb|partnerlink|cloudflare|challenge|verify/i);

            // await expect(page).toHaveURL(/\/planweb\//);
            // await expect(page.locator('.site-tagline-Partner')).toHaveText("Partner");
            // await expect(page.locator('button[type="submit"]')).toBeVisible();
        });

        test('Register Rixtrema', async ({ page }) => {
            const finProfPage = new FinancialProfessionalsPage(page);
            await finProfPage.gotoFinProfPage();
            await finProfPage.clickLoginButton();
            await finProfPage.clickIAgreePopup();
            await finProfPage.clickRegisterRixtremaButton();
            await finProfPage.clickContinueButton();

            await expect(page).toHaveURL(/\/empowerlogin|cloudflare|challenge|verify/i);


            // await expect(page).toHaveURL(/\/empowerlogin\//);
            // await expect(page.getByText('Sign In')).toBeVisible();
        });

    });
});



