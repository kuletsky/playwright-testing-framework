import { test, expect } from '@playwright/test';
import { MarketingParamsPage } from '../pages/MarketingParamsPage';
import { marketingParamsData } from '../data/test-data';
















for (const data of marketingParamsData) {
    test(`Marketing Param Test - ${data.element}`, async ({ page }) => {
        const marketingParamsPage = new MarketingParamsPage(page);
        await marketingParamsPage.goto();

        const element = analyticsPage.getElement(data.element);


        const headingText = await marketingParamsPage.getHeadingText();
        expect(headingText).toBe(data.headingText);

        const currentURL = page.url();
        expect(currentURL).toContain(data.newURL);
    });
};