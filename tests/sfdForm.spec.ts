import { test, expect } from "@playwright/test";
import { SfdPage } from "../pages/SfdPage";
import { IndividualsPage } from "../pages/IndividualsPage";
import { IndividualsSignupPage } from "../pages/IndividualsSignupPage";
import { suppressCookieBanner } from "../utils/stabilize";


test.beforeEach(async ({ page }) => {
    await page.goto("https://empwrretiremtstg.prod.acquia-sites.com/signup/cash?marketing_param=ao_personalcash");
    await suppressCookieBanner(page);
});

test.describe("SFD Form functionality", () => {

    test("Verify SFD form is visible", async ({ page }) => {
        const individualsPage = new IndividualsPage(page);
        await individualsPage.gotoIndividualsPage();
        await individualsPage.clickOpenAccountButton();

        const signupPage = new IndividualsSignupPage(page);
        await signupPage.clickPersonalCashOpenAccount();
        await suppressCookieBanner(page);

        await expect(page).toHaveURL(/\/signup\/cash|cloudflare|challenge|verify/i);


        // await expect(page).toHaveURL(/\/signup\/cash/);
        await expect(page.locator('//strong[contains(text(), "Make your cash count")]')).toBeVisible();
        await expect(page.locator('button[type="submit"]')).toBeVisible();
    });

    test("Verify submit button 'Start now' is enabled", async ({ page }) => {
        const sfdPage = new SfdPage(page);
        await expect(page.locator('button[type="submit"]')).toBeEnabled();
    });
});