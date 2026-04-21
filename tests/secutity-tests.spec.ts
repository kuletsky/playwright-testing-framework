import { test, expect } from '@playwright/test';



// test.beforeEach(async ({ page }) => {
//     await page.goto('/user/login');
//     // await suppressCookieBanner(page);
// });

test('Verify 403 error displayed and redirect to homepage from 403 error page', async ({ page }) => {
    await page.goto('/user/login');
    await expect(page.getByRole('heading', { name: '403 Error' })).toBeVisible();

    const returnHomeLink = page.getByRole('link', { name: 'Return to the homepage' });
    await expect(returnHomeLink).toBeVisible();
    await returnHomeLink.click();

    await expect(page.getByRole('heading', { name: 'Invest well. Live a little.™', level: 1 })).toBeVisible();
    await expect(page).toHaveURL('/');
});

test('Verify Login form displayed when user navigate to login page with login key', async ({ page }) => {
    await page.goto('/user/login?loginkey=Gtrv3qg6xk');
    await expect(page.getByLabel('Username')).toBeVisible();
    await expect(page.getByLabel('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Login using SSO' })).toBeVisible();
});

test('Verify Forgot your password navigate to password Links', async ({ page }) => {
    await page.goto('/user/login?loginkey=Gtrv3qg6xk');

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

    const returnHomeLink = page.getByRole('link', { name: 'Return to the homepage' });
    await expect(returnHomeLink).toBeVisible();
    await returnHomeLink.click();

    await expect(page.getByRole('heading', { name: 'Invest well. Live a little.™', level: 1 })).toBeVisible();
    await expect(page).toHaveURL('/');
});