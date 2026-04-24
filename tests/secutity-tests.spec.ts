import { test, expect } from '@playwright/test';
import { suppressCookieBanner } from '../utils/stabilize';




test('Verify 403 error displayed and redirect to homepage from 403 error page', async ({ page }) => {
    await page.goto('/user/login');
    await suppressCookieBanner(page);
    await expect(page.getByRole('heading', { name: '403 Error' })).toBeVisible();

    const returnHomeLink = page.getByRole('link', { name: 'Return to the homepage' });
    await expect(returnHomeLink).toBeVisible();
    await returnHomeLink.click();

    await expect(page.getByRole('heading', { name: 'Invest well. Live a little.™', level: 1 })).toBeVisible();
    await expect(page).toHaveURL('/');
});

test('Verify Login form displayed when user navigate to login page with login key', async ({ page }) => {
    await page.goto('/user/login?loginkey=Gtrv3qg6xk');
    await suppressCookieBanner(page);

    await expect(page.getByLabel('Username')).toBeVisible();
    await expect(page.getByLabel('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Login using SSO' })).toBeVisible();
});

test('Verify Forgot your password navigate to password Links', async ({ page }) => {
    await page.goto('/user/login?loginkey=Gtrv3qg6xk');
    await suppressCookieBanner(page);


    const forgotPasswordLink = page.getByRole('link', { name: 'Forgot your password?' });
    await expect(forgotPasswordLink).toBeVisible();
    await forgotPasswordLink.click();

    await expect(page).toHaveURL('/user/password');
    await expect(page.getByLabel('Username or email address')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
    await expect(page.getByText('Password reset instructions will be sent to your registered email address.')).toBeVisible();
});

test('Verify Forgot your password navigate to HP', async ({ page }) => {
    await page.goto('/user/login?loginkey=Gtrv3qg6xk');
    await suppressCookieBanner(page);

    const returnHomeLink = page.getByRole('link', { name: 'Return to the homepage' });
    await expect(returnHomeLink).toBeVisible();
    await returnHomeLink.click();

    await expect(page.getByRole('heading', { name: 'Invest well. Live a little.™', level: 1 })).toBeVisible();
    await expect(page).toHaveURL('/');
});

test('Verify SSO Login button on Login form', async ({ page }) => {
    await page.goto('/user/login?loginkey=Gtrv3qg6xk');
    await suppressCookieBanner(page);


    const SSOloginButton = page.getByRole('link', { name: 'Login using SSO' });
    await expect(SSOloginButton).toBeVisible();
    await SSOloginButton.click();

    await expect(page.getByRole('heading', { name: 'Sign In' })).toBeVisible();
    await expect(page).toHaveURL(/empower\.okta\.com\/app\/empower_empowercorporatesitestg_1/);
    await expect(page.getByRole('textbox')).toBeVisible();
});

test('Verify counting attempts to Login form', async ({ page }) => {
    for (let i = 1; i <= 2; i++) {
        await page.goto('/user/login?loginkey=Gtrv3qg6xk');
        await suppressCookieBanner(page);

        await page.getByLabel('Username').fill('chnshr');
        await page.getByLabel('Password').fill(`Test${Math.random().toString(36).slice(2, 10)}!1`);

        await page.getByRole('button', { name: 'Log in' }).click();
        await expect(page.getByText('Unrecognized username or password')).toBeVisible({ timeout: 60000 });

        const rawText = await page.locator('.messages.messages--warning').textContent();
        const cleanText = rawText?.trim().replace(/\s+/g, ' ').replace('Warning message', '').trim() ?? '';
        console.log(cleanText);
        await expect(page.locator('.messages.messages--warning')).toContainText(`You have used ${i} out of 5 login attempts. After all 5 have been used, you will be unable to login.`);
    }
})