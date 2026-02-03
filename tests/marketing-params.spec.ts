import { test, expect } from '@playwright/test';
import { MarketingParamsPage } from '../pages/MarketingParamsPage';
import { marketingParamsData } from '../data/test-data';















for (const data of marketingParamsData) {
    test(`Verify param - ${data.element}`, async ({ page }) => {
        const MPpage = new MarketingParamsPage(page);
        await MPpage.goto();

        await MPpage.clickElement(data.element);

        await expect(MPpage.getMarketingParamLocator).toHaveAttribute('name', 'marketing_param');
        await expect(MPpage.getMarketingParamLocator).toHaveValue(data.paramValue);
        await expect(MPpage.getSkipFirstUseLocator).toHaveValue(data.skipValue);
        await expect(MPpage.getFormHeading).toHaveText(data.headingText);

        await expect(page).toHaveURL(data.url);



    });
};