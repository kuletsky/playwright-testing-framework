import { test, expect } from '@playwright/test';
import { IndividualsPage } from "../pages/IndividualsPage";
import { PlanSponsorsPage } from '../pages/PlanSponsors';


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


test.describe('Header Menu functionality', () => {

    test('Verify Contextual menu is displayed', async ({ page }) => {
        const individualsPage = new IndividualsPage(page);
        await individualsPage.gotoIndividualsPage();

        const links = page.locator("li a[data-once='nav-main-contextual-link-click']");
        await expect(links).toHaveCount(3);

        const linksText = (await links.allTextContents()).map(t => t.trim());
        expect(linksText).toEqual([
            "Individuals",
            "Plan Sponsors",
            "Financial Professionals"
        ]);
    });

    test.describe('Individuals menu', () => {

        test('Verify Primary menu is displayed', async ({ page }) => {
            const individualsPage = new IndividualsPage(page);
            await individualsPage.gotoIndividualsPage();

            const links = page.locator("button[data-once*='desktopPrimaryNav']");
            await expect(links).toHaveCount(4);

            const linksText = (await links.allTextContents()).map(t => t.trim());
            expect(linksText).toEqual([
                "Products & Services",
                "Tools",
                "Learn",
                "Why Empower"
            ]);
        });

        test('Verify ProductServices menu is displayed', async ({ page }) => {
            const individualsPage = new IndividualsPage(page);
            await individualsPage.gotoIndividualsPage();
            await individualsPage.clickMenuProductServices();

            const links = page.locator("#solutions-dropdown li.relative > a, #solutions-dropdown li.relative > button");
            await expect(links).toHaveCount(6);

            const linksText = (await links.allTextContents()).map(t => t.trim());
            expect(linksText).toEqual([
                "Wealth Management",
                "High-yield cash account",
                "Rollover",
                "IRAs",
                "Investment accounts",
                "Tax filing"
            ]);

            const dropdown = page.locator("#solutions-dropdown .nav-dropdown-right");
            await expect(dropdown.getByText("Products & services")).toBeVisible();
        });

        test('Verify Tools menu is displayed', async ({ page }) => {
            const individualsPage = new IndividualsPage(page);
            await individualsPage.gotoIndividualsPage();
            await individualsPage.clickMenuTools();

            const links = page.locator("#tools-dropdown li.relative > a, #tools-dropdown li.relative > button");
            await expect(links).toHaveCount(9);

            const linksText = (await links.allTextContents()).map(t => t.trim());
            expect(linksText).toEqual([
                "View All",
                "Retirement Planner",
                "Net Worth",
                "Budgeting & Cash Flow",
                "Portfolio Analysis",
                "Savings Planner",
                "Debt Paydown",
                "Emergency Fund",
                "Transactions",
            ]);

            const dropdown = page.locator("#tools-dropdown .nav-dropdown-right h3");
            await expect(dropdown.getByText("Financial tools", { exact: true }).first()).toBeVisible();
        });

        test('Verify Learn menu is displayed', async ({ page }) => {
            const individualsPage = new IndividualsPage(page);
            await individualsPage.gotoIndividualsPage();
            await individualsPage.clickMenuLearn();

            const links = page.locator("#learn-dropdown li.relative > a, #learn-dropdown li.relative > button");
            await expect(links).toHaveCount(2);

            const linksText = (await links.allTextContents()).map(t => t.trim());
            expect(linksText).toEqual([
                "Investment Insights",
                "The Currency",
            ]);

            const dropdown = page.locator("#learn-dropdown .nav-dropdown-right");
            await expect(dropdown.getByText("The CurrencyTM", { exact: true }).first()).toBeVisible();
        });

        test('Verify Why Empower menu is displayed', async ({ page }) => {
            const individualsPage = new IndividualsPage(page);
            await individualsPage.gotoIndividualsPage();
            await individualsPage.clickMenuWhyEmpower();

            const links = page.locator("#why-empower-dropdown li.relative > a, #why-empower-dropdown li.relative > button");
            await expect(links).toHaveCount(4);

            const linksText = (await links.allTextContents()).map(t => t.trim());
            expect(linksText).toEqual([
                "About us",
                "Cybersecurity",
                "Press Center",
                "Contact us",
            ]);

            const dropdown = page.locator("#why-empower-dropdown .nav-dropdown-right");
            await expect(dropdown.getByText("About us", { exact: true }).first()).toBeVisible();
        });

















        const PSmenuLinks = [
            // { name: 'Wealth Management', menuHeading: 'Wealth management overview' },
            { name: 'High-yield cash account', menuHeading: 'High-yield cash account', url: 'wealth-management', pageHeading: "How much could your money grow with dedicated wealth management?" },
            // { name: 'Rollover', menuHeading: "Rollover", url: 'products-solutions/rollover', pageHeading: "Start your rollover with confidence" },
            // { name: 'IRAs', menuHeading: "IRAs", url: 'products-solutions/iras', pageHeading: "The right IRA. Right now." },
            // { name: 'Investment accounts', menuHeading: "Investment accounts", url: 'products-solutions/iras', pageHeading: "Start investing with confidence." },
            // { name: 'Tax filing', menuHeading: "Tax filing", url: 'products-solutions/iras', pageHeading: "Tax filing" },

        ]
        for (const link of PSmenuLinks) {
            test(`ProductService Open menu link - ${link.name}`, async ({ page }) => {
                const individualsPage = new IndividualsPage(page);
                await individualsPage.gotoIndividualsPage();
                await individualsPage.clickMenuProductServices();

                await individualsPage.clickOpenMenuLink(link.name);

                await expect(page).toHaveURL(link.url);
                // if (link.assert) {
                //     await expect(page.getByText(link.assert).first()).toBeVisible();
                // }
            });
        }
    });


    test.describe('Plan Sponsors menu', () => {

        test('Verify Primary menu is displayed', async ({ page }) => {
            const plansponsorPage = new PlanSponsorsPage(page);
            await plansponsorPage.gotoPlanSponsorsPage();

            const links = page.locator("button[data-once*='desktopPrimaryNav']");
            await expect(links).toHaveCount(5);

            const linksText = (await links.allTextContents()).map(t => t.trim());
            expect(linksText).toEqual([
                "Markets",
                "Solutions",
                "Experience",
                "Learn",
                "Why Empower"
            ]);
        });

        test('Verify Markets menu is displayed', async ({ page }) => {
            const plansponsorPage = new PlanSponsorsPage(page);
            await plansponsorPage.gotoPlanSponsorsPage();
            await plansponsorPage.clickMenuMarkets();

            const links = page.locator("#markets-dropdown li.relative > a, #markets-dropdown li.relative > button");
            await expect(links).toHaveCount(6);

            const linksText = (await links.allTextContents()).map(t => t.trim());
            expect(linksText).toEqual([
                "Small and growing businesses",
                "Large and mega corporations",
                "Multiple employer plans",
                "Government",
                "Not-for-profit​",
                "Taft-Hartley​"
            ]);

            const dropdown = page.locator("#markets-dropdown .nav-dropdown-right");
            await expect(dropdown.getByText("Markets", { exact: true })).toBeVisible();
        });

        test('Verify Solutions menu is displayed', async ({ page }) => {
            const plansponsorPage = new PlanSponsorsPage(page);
            await plansponsorPage.gotoPlanSponsorsPage();
            await plansponsorPage.clickMenuSolutions();

            const links = page.locator("#solutions-dropdown li.relative > a, #solutions-dropdown li.relative > button");
            await expect(links).toHaveCount(9);

            const linksText = (await links.allTextContents()).map(t => t.trim());
            expect(linksText).toEqual([
                "Integrated workplace solutions",
                "Advisory services​",
                "Retirement solutions​",
                "Defined contribution plans",
                "Defined benefit plans",
                "Nonqualified plans",
                "Empower benefit consulting services",
                "Stock plan services​",
                "Consumer-directed health",
            ]);

            const dropdown = page.locator("#solutions-dropdown .nav-dropdown-right");
            await expect(dropdown.getByText("Solutions", { exact: true })).toBeVisible();
        });

        test('Verify Experience menu is displayed', async ({ page }) => {
            const plansponsorPage = new PlanSponsorsPage(page);
            await plansponsorPage.gotoPlanSponsorsPage();
            await plansponsorPage.clickMenuExperience();

            const links = page.locator("#experience-dropdown li.relative > a, #experience-dropdown li.relative > button");
            await expect(links).toHaveCount(2);

            const linksText = (await links.allTextContents()).map(t => t.trim());
            expect(linksText).toEqual([
                "Integrated workplace solutions",
                "Advisory services​",
                "Retirement solutions​",
                "Defined contribution plans",
                "Defined benefit plans",
                "Nonqualified plans",
                "Empower benefit consulting services",
                "Stock plan services​",
                "Consumer-directed health",
            ]);

            const dropdown = page.locator("#experience-dropdown .nav-dropdown-right");
            await expect(dropdown.getByText("Experience", { exact: true })).toBeVisible();
        });

    });
});