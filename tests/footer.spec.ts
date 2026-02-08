import { test, expect } from '@playwright/test';
import { IndividualsPage } from "../pages/IndividualsPage";


test.describe('Footer functionality', () => {

    test.describe('Footer Legal Menu links', () => {
        const legalMenuLinks = [
            { name: 'Security center', url: 'securityCenter' },
            { name: 'Accessibility', url: 'accessibility' },
            { name: 'System requirements', url: 'system-requirements', assert: "System requirements and security" },
            { name: 'Privacy', url: 'privacy', assert: "Empower Privacy Policy" },
            { name: 'Terms and conditions', url: 'terms', assert: "Terms and conditions" },
            { name: 'Business continuity plan', url: 'business-continuity', assert: "Business Continuity Plan Notice" },
            { name: 'Market timing and excessive trading policies', url: 'market-timing-and-trading', assert: "Procedures for complying with fund company market and excessive trading policies" },
            { name: 'Investor education and protection', url: 'broker-check', assert: "FINRA Investor Education and BrokerCheck® Notification" },
            { name: 'Form CRS & Reg BI Disclosure', url: 'reg-bi-and-form-crs', assert: "Regulation Best Interest Disclosure & Form CRS Customer Relationship Summary" },
            { name: 'Empower representative compensation', url: 'rep-comp-disclosure', assert: "Empower Representative Compensation" },
        ]
        for (const link of legalMenuLinks) {
            test(`Footer menu link - ${link.name}`, async ({ page }) => {
                const individualsPage = new IndividualsPage(page);
                await individualsPage.gotoIndividualsPage();

                await individualsPage.clickFooterLink(link.name);

                await expect(page).toHaveURL(new RegExp(`${link.url}(\\?|#|$)`));
                if (link.assert) {
                    await expect(page.getByText(link.assert).first()).toBeVisible();
                }
            });
        }
    });

    test.describe('Footer Navigation links', () => {
        const footerLinks = [
            { name: "Cybersecurity", url: "/cybersecurity", assert: "Cybersecurity you can count on" },
            { name: "Community impact", url: "/empower-community-impact", assert: "Our volunteer impact" },
            { name: "Diversity, Equity, Inclusion & Belonging", url: "/diversity-equity-inclusion-belonging", assert: "Empowered by difference" },
            { name: "The Currency™", url: "/the-currency", assert: "Subscribe" },
            { name: "Press center", url: "/press-center", assert: "Latest content" },
            { name: "About us", url: "/about-us", assert: "This is Empower" },
            { name: "Our history", url: "/our-history", assert: "Since the beginning, Empower has been guided by a vision to revolutionize how people save, invest and plan for their future" },
            { name: "Contact us", url: "/contact", assert: "We’re happy to help with whatever you need." },
            { name: "Financial professional", url: "/financial-professionals", assert: "Solutions, support, success" },
            { name: "Plan sponsor", url: "/plan-sponsors", assert: "Trusted leader. Proven innovator." }
        ]
        for (const link of footerLinks) {
            test(`Footer menu link - ${link.name}`, async ({ page }) => {
                const individualsPage = new IndividualsPage(page);
                await individualsPage.gotoIndividualsPage();

                await individualsPage.clickFooterLink(link.name);

                await expect(page).toHaveURL(new RegExp(`${link.url}(\\?|#|$)`));
                await expect(page.getByText(link.assert).first()).toBeVisible();
            });
        }
    });

    test.describe('Social links functionality', () => {
        const socialLinks = [
            { name: "Facebook", url: "facebook.com/officialempowertoday" },
            { name: "X (fka Twitter)", url: "x.com/empowertoday" },
            { name: "Snapchat", url: "snapchat.com/@empowertoday" },
            { name: "LinkedIn", url: "linkedin.com/company/empowertoday" },
            // { name: "Instagram", url: "instagram.com" },
            // { name: "YouTube", url: "youtube.com" },
            { name: "TikTok", url: "tiktok.com/@empowertoday" },
        ]
        for (const link of socialLinks) {
            test(`Footer menu link - ${link.name}`, async ({ page, context }) => {
                const individualsPage = new IndividualsPage(page);
                await individualsPage.gotoIndividualsPage();

                const pagePromise = context.waitForEvent('page');
                await individualsPage.clickFooterLink(link.name);
                await individualsPage.clickContinueButton();

                const newPage = await pagePromise;
                // await newPage.waitForLoadState();

                // await expect(newPage).toHaveURL(new RegExp(link.url, 'i'));
                await expect(newPage).toHaveURL(new RegExp(link.url.split('/')[0], 'i'));


                await newPage.close();
            });
        }
    });
});