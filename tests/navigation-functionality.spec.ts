import { test, expect } from '@playwright/test';
import { IndividualsPage } from "../pages/IndividualsPage";
import { PlanSponsorsPage } from '../pages/PlanSponsors';
import { FinancialProfessionalsPage } from '../pages/FinancialProfessionalsPage';


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

        test('Verify Products & Services menu is displayed', async ({ page }) => {
            const individualsPage = new IndividualsPage(page);
            await individualsPage.gotoIndividualsPage();
            await individualsPage.openProductAndServicesMenu();

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
            await individualsPage.openToolsMenu();

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
            await individualsPage.openLearnMenu();

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
            await individualsPage.openWhyEmpowerMenu();

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



        // Data-driven tests for P&S menu items
        const PSLinks = [
            { name: 'Wealth Management', menuHeading: 'Wealth management overview' },
            { name: 'High-yield cash account', menuHeading: 'High-yield Cash Account' },
            { name: 'Rollover', menuHeading: "Rollover", url: '/products-solutions/rollover', pageHeading: "Start your rollover with confidence" },
            { name: 'IRAs', menuHeading: "IRAs", url: '/products-solutions/iras', pageHeading: "The right IRA. Right now." },
            { name: 'Investment accounts', menuHeading: "Investment accounts", url: '/products-solutions/investment-accounts', pageHeading: "Start investing with confidence." },
            { name: 'Tax filing', menuHeading: "Tax filing", url: '/products-solutions/tax-filing', pageHeading: "Finally, a less taxing tax season" },

        ]
        for (const link of PSLinks) {
            test(`Click P&S - ${link.name}`, async ({ page }) => {
                const individualsPage = new IndividualsPage(page);
                await individualsPage.gotoIndividualsPage();
                await individualsPage.openProductAndServicesMenu();
                await individualsPage.clickPSItem(link.name);

                if (link.url) {
                    await expect(page).toHaveURL(link.url);
                    await expect(page.getByText(link.pageHeading, { exact: true })).toBeVisible();
                }
            });

            test(`Hover P&S - ${link.name}`, async ({ page }) => {
                const individualsPage = new IndividualsPage(page);
                await individualsPage.gotoIndividualsPage();
                await individualsPage.openProductAndServicesMenu();

                await expect(page.locator('#solutions-dropdown')).toBeVisible();
                await individualsPage.hoverPSItem(link.name);

                const dropdown = page.locator("#solutions-dropdown .nav-dropdown-right");
                await expect(dropdown.getByText(link.menuHeading, { exact: true })).toBeVisible();
            });
        }

        // Data-driven tests for TOOLS menu items
        const toolsLinks = [
            { name: 'View All', menuHeading: "Financial tools", url: '/tools', pageHeading: "Financial freedom starts here" },
            { name: 'Retirement Planner', menuHeading: "Retirement Planner", url: '/tools/retirement-planner', pageHeading: "Plan ahead to retire your way" },
            { name: 'Net Worth', menuHeading: "Net Worth", url: '/tools/net-worth', pageHeading: "Knowing your net worth is worth it" },
            { name: 'Budgeting & Cash Flow', menuHeading: "Budgeting & Cash Flow", url: '/tools/budgeting-cash-flow', pageHeading: "Better budgeting for your best life" },
            { name: 'Portfolio Analysis', menuHeading: "Portfolio Analysis", url: '/tools/portfolio-analysis', pageHeading: "Let’s level up your investing strategy" },
            { name: 'Savings Planner', menuHeading: "Savings Planner", url: '/tools/savings-planner', pageHeading: "Save smart, spend smarter" },
            { name: 'Debt Paydown', menuHeading: "Debt Paydown", url: '/tools/debt-paydown', pageHeading: "Paying down debt is such a good look" },
            { name: 'Emergency Fund', menuHeading: "Emergency Fund", url: '/tools/emergency-fund', pageHeading: "Your go-to for life’s curveballs" },
            { name: 'Transactions', menuHeading: "Transactions", url: '/tools/transactions', pageHeading: "Gain insight into your spending, keep control, and help spot fraud." },
        ]
        for (const link of toolsLinks) {
            test(`Click TOOLS - ${link.name}`, async ({ page }) => {
                const individualsPage = new IndividualsPage(page);
                await individualsPage.gotoIndividualsPage();
                await individualsPage.openToolsMenu();
                await individualsPage.clickToolsItem(link.name);

                if (link.url) {
                    await expect(page).toHaveURL(link.url);
                    await expect(page.getByText(link.pageHeading, { exact: true })).toBeVisible();
                }
            });

            test(`Hover TOOLS - ${link.name}`, async ({ page }) => {
                const individualsPage = new IndividualsPage(page);
                await individualsPage.gotoIndividualsPage();
                await individualsPage.openToolsMenu();

                await expect(page.locator('#tools-dropdown')).toBeVisible();
                await individualsPage.hoverToolsItem(link.name);

                const dropdown = page.locator("#tools-dropdown .nav-dropdown-right");
                await expect(dropdown.getByText(link.menuHeading, { exact: true }).first()).toBeVisible();
            });
        }


        // Data-driven tests for LEARN menu items
        const learnLinks = [
            { name: 'Investment Insights', menuHeading: "Investment Insights", url: '/investment-insights', pageHeading: "Latest Content" },
            { name: 'The Currency', menuHeading: "Get guidance to make better money decisions at every stage of your life.", url: '/the-currency', pageHeading: "Money" },
        ]
        for (const link of learnLinks) {
            test(`Click LEARN - ${link.name}`, async ({ page }) => {
                const individualsPage = new IndividualsPage(page);
                await individualsPage.gotoIndividualsPage();
                await individualsPage.openLearnMenu();
                await individualsPage.clickLearnItem(link.name);

                if (link.url) {
                    await expect(page).toHaveURL(link.url);
                    await expect(page.getByText(link.pageHeading, { exact: true }).first()).toBeVisible();
                }
            });

            test(`Hover LEARN - ${link.name}`, async ({ page }) => {
                const individualsPage = new IndividualsPage(page);
                await individualsPage.gotoIndividualsPage();
                await individualsPage.openLearnMenu();

                await expect(page.locator('#learn-dropdown')).toBeVisible();
                await individualsPage.hoverLearnItem(link.name);

                const dropdown = page.locator("#learn-dropdown .nav-dropdown-right");
                await expect(dropdown.getByText(link.menuHeading, { exact: true }).first()).toBeVisible();
            });
        }

        // Data-driven tests for WHY EMPOWER menu items
        const whyEmpowerLinks = [
            { name: 'About us', menuHeading: "About us", url: '/about-us', pageHeading: "This is Empower" },
            { name: 'Cybersecurity', menuHeading: "Cybersecurity", url: '/individuals/about-empower/cybersecurity', pageHeading: "Cybersecurity you can count on" },
            { name: 'Press Center', menuHeading: "Press Center", url: '/press-center', pageHeading: "Latest content" },
            { name: 'Contact us', menuHeading: "Contact us", url: '/contact', pageHeading: "We’re happy to help with whatever you need." },
        ]
        for (const link of whyEmpowerLinks) {
            test(`Click WHY EMPOWER - ${link.name}`, async ({ page }) => {
                const individualsPage = new IndividualsPage(page);
                await individualsPage.gotoIndividualsPage();
                await individualsPage.openWhyEmpowerMenu();
                await individualsPage.clickWhyEmpowerItem(link.name);

                if (link.url) {
                    await expect(page).toHaveURL(link.url);
                    await expect(page.getByText(link.pageHeading, { exact: true }).first()).toBeVisible();
                }
            });

            test(`Hover WHY EMPOWER - ${link.name}`, async ({ page }) => {
                const individualsPage = new IndividualsPage(page);
                await individualsPage.gotoIndividualsPage();
                await individualsPage.openWhyEmpowerMenu();

                await expect(page.locator('#why-empower-dropdown')).toBeVisible();
                await individualsPage.hoverWhyEmpowerItem(link.name);

                const dropdown = page.locator("#why-empower-dropdown .nav-dropdown-right");
                await expect(dropdown.getByText(link.menuHeading, { exact: true }).first()).toBeVisible();
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
                "Plan servicing",
                "Participant engagement",
            ]);

            const dropdown = page.locator("#experience-dropdown .nav-dropdown-right");
            await expect(dropdown.getByText("Experience", { exact: true })).toBeVisible();
        });

        test('Verify Learn menu is displayed', async ({ page }) => {
            const plansponsorsPage = new PlanSponsorsPage(page);
            await plansponsorsPage.gotoPlanSponsorsPage();
            await plansponsorsPage.clickMenuLearn();

            const links = page.locator("#learn-dropdown li.relative > a, #learn-dropdown li.relative > button");
            await expect(links).toHaveCount(2);

            const linksText = (await links.allTextContents()).map(t => t.trim());
            expect(linksText).toEqual([
                "Investment Insights",
                "The Currency",
            ]);

            const dropdown = page.locator("#learn-dropdown .nav-dropdown-right");
            await expect(dropdown.locator('p:has-text("Learn")')).toBeVisible();
        });

        test('Verify Why Empower menu is displayed', async ({ page }) => {
            const plansponsorsPage = new PlanSponsorsPage(page);
            await plansponsorsPage.gotoPlanSponsorsPage();
            await plansponsorsPage.clickMenuWhyEmpower();

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
            await expect(dropdown.locator('p:has-text("Why Empower")')).toBeVisible();
        });
    });


    test.describe('Financial Professionals menu', () => {

        test('Verify Financial Professionals menu is displayed', async ({ page }) => {
            const finproPage = new FinancialProfessionalsPage(page);
            await finproPage.gotoFinProfPage();

            const links = page.locator("button[data-once*='desktopPrimaryNav']");
            await expect(links).toHaveCount(5);

            const linksText = (await links.allTextContents()).map(t => t.trim());
            expect(linksText).toEqual([
                "Solutions",
                "Experience",
                "Resources",
                "Insights",
                "Why Empower"
            ]);
        });

        test('Verify Solutions menu is displayed', async ({ page }) => {
            const finproPage = new FinancialProfessionalsPage(page);
            await finproPage.gotoFinProfPage();
            await finproPage.clickMenuSolutions();

            const links = page.locator("#solutions-dropdown li.relative > a, #solutions-dropdown li.relative > button");
            await expect(links).toHaveCount(8);

            const linksText = (await links.allTextContents()).map(t => t.trim());
            expect(linksText).toEqual([
                "Defined contribution",
                "Integrated workplace solutions",
                "Fiduciary advice solutions",
                "Retirement income solutions",
                "Stock plan services​",
                "Empower benefit consulting services",
                "Defined benefit plans",
                "Consumer-directed health",
            ]);

            const dropdown = page.locator("#solutions-dropdown .nav-dropdown-right");
            await expect(dropdown.getByText("Solutions", { exact: true })).toBeVisible();
        });

        test('Verify Experience menu is displayed', async ({ page }) => {
            const finproPage = new FinancialProfessionalsPage(page);
            await finproPage.gotoFinProfPage();
            await finproPage.clickMenuExperience();

            const links = page.locator("#experience-dropdown li.relative > a, #experience-dropdown li.relative > button");
            await expect(links).toHaveCount(5);

            const linksText = (await links.allTextContents()).map(t => t.trim());
            expect(linksText).toEqual([
                "Markets",
                "Participant experience",
                "APIs",
                "Partner advocate",
                "Events",
            ]);

            const dropdown = page.locator("#experience-dropdown .nav-dropdown-right");
            await expect(dropdown.getByText("Experience", { exact: true })).toBeVisible();
        });

        test('Verify Resources menu is displayed', async ({ page }) => {
            const finproPage = new FinancialProfessionalsPage(page);
            await finproPage.gotoFinProfPage();
            await finproPage.clickMenuResources();

            const links = page.locator("#resources-dropdown li.relative > a, #resources-dropdown li.relative > button");
            await expect(links).toHaveCount(6);

            const linksText = (await links.allTextContents()).map(t => t.trim());
            expect(linksText).toEqual([
                "Prospecting & proposals",
                "Plan management",
                "Advisor toolkit",
                "TPA toolkit",
                "Plan sponsor toolkit",
                "Participant toolkit",
            ]);

            const dropdown = page.locator("#resources-dropdown .nav-dropdown-right");
            await expect(dropdown.getByText("Resources", { exact: true })).toBeVisible();
        });

        test('Verify Insights menu is displayed', async ({ page }) => {
            const finproPage = new FinancialProfessionalsPage(page);
            await finproPage.gotoFinProfPage();
            await finproPage.clickMenuInsights();

            const links = page.locator("#insights-dropdown li.relative > a, #insights-dropdown li.relative > button");
            await expect(links).toHaveCount(3);

            const linksText = (await links.allTextContents()).map(t => t.trim());
            expect(linksText).toEqual([
                "Investment Insights",
                "Legislative & regulatory news",
                "The Currency",
            ]);

            const dropdown = page.locator("#insights-dropdown .nav-dropdown-right");
            await expect(dropdown.getByText("Insights", { exact: true })).toBeVisible();
        });


        test('Verify Why Empower menu is displayed', async ({ page }) => {
            const finproPage = new FinancialProfessionalsPage(page);
            await finproPage.gotoFinProfPage();
            await finproPage.clickMenuWhyEmpower();

            const links = page.locator("#why-empower-dropdown li.relative > a, #why-empower-dropdown li.relative > button");
            await expect(links).toHaveCount(4);

            const linksText = (await links.allTextContents()).map(t => t.trim());
            expect(linksText).toEqual([
                "About us",
                "Contact us",
                "Cybersecurity",
                "Press Center",
            ]);

            const dropdown = page.locator("#why-empower-dropdown .nav-dropdown-right");
            await expect(dropdown.locator('p:has-text("Why Empower")')).toBeVisible();
        });
    });
});