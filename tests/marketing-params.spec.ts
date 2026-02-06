import { test, expect } from '@playwright/test';
import { MarketingParamsPage } from '../pages/MarketingParamsPage';
import { marketingParamsData } from '../data/test-data';


for (const data of marketingParamsData) {
    test(`Marketing param - ${data.element}`, async ({ page }) => {
        const MPpage = new MarketingParamsPage(page);
        await MPpage.goto();

        await MPpage.clickElement(data.element);

        await expect(MPpage.getMarketingParamLocator).toHaveAttribute('name', 'marketing_param');
        await expect(MPpage.getMarketingParamLocator).toHaveValue(data.paramValue, {timeout: 20000});
        await expect(MPpage.getSkipFirstUseLocator).toHaveValue(data.skipValue);

        const headingLocator = MPpage.getFormHeading(data.element);
        await expect(headingLocator).toHaveText(data.headingForm);
        await expect(page.locator('button[type="submit"]')).toBeVisible();
        await expect(page).toHaveURL(data.url);
    });
};