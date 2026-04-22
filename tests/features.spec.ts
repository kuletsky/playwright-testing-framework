import { test, expect } from '@playwright/test';


test('Verify Page anchor functionality', async ({ page }) => {
    await page.goto('/plan-sponsors/what-we-offer/nonqualified-plans');
    await page.locator('[aria-label="Contact Empower"]').first().click();

    await expect(page.locator('form')).toBeInViewport();
    await expect(page.locator('form')).toBeVisible();

    await expect(page.getByLabel('First Name')).toBeVisible();
    await expect(page.getByLabel('Last Name')).toBeVisible();
    await expect(page.getByLabel('Email')).toBeVisible();
    await expect(page.getByLabel('Company name')).toBeVisible();
    await expect(page.getByLabel('Plan size (Optional)')).toBeVisible();
    await expect(page.getByLabel('Services (Optional)')).toBeVisible();
    await expect(page.getByLabel('Reason for inquiry (Optional)')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();

    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page.getByText('First name is required')).toBeVisible();
    await expect(page.getByText('Last name is required')).toBeVisible();
    await expect(page.getByText('Email is required')).toBeVisible();
    await expect(page.getByText('Company name is required')).toBeVisible();
});

