import { test, expect } from '../fixtures';
import { MarketingParamsPage } from '../pages/MarketingParamsPage';

export const marketingParamsData = [
  { element: 'defaultForm',                 paramValue: '',                          skipValue: '',       headingForm: 'Set up your Empower Personal Dashboard™', url: '/signup/onboarding' }, 
  { element: 'RetirementIntentAffiliate',   paramValue: 'RetirementIntentAffiliate', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/tools?marketing_param=RetirementIntentAffiliate' },
  { element: 'zs_tools',                    paramValue: 'zs_tools', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/tools?marketing_param=zs_tools' },
  { element: 'zs_investment',               paramValue: 'zs_investment', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/onboarding?marketing_param=zs_investment' },
  { element: 'zs_retirement',               paramValue: 'zs_retirement', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/tools?marketing_param=zs_retirement' },
  { element: 'zs_networth',                 paramValue: 'zs_networth', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/tools?marketing_param=zs_networth' },
  { element: 'zs_budgeting',                paramValue: 'zs_budgeting', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/tools?marketing_param=zs_budgeting' },
  { element: 'zs_cashflow',                 paramValue: 'zs_cashflow', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/tools?marketing_param=zs_cashflow' },
  { element: 'zs_savingsplanner',           paramValue: 'zs_savingsplanner', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/tools?marketing_param=zs_savingsplanner' },
  { element: 'zs_onboarding',               paramValue: 'zs_onboarding', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/onboarding?marketing_param=zs_onboarding' },
  { element: 'zs_customretirement',         paramValue: 'utmcct=customretirement|zs_retirement', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/tools?marketing_param=zs_customretirement' },
 
  //skipFirstUse parameters
  { element: 'ao_premierira',               paramValue: 'ao_premierira', skipValue: 'true',  headingForm: 'Open an Empower Premier IRA', url: 'signup/premier-ira?marketing_param=ao_premierira' },
  { element: 'ao_premierinvestmentaccount', paramValue: 'ao_premierinvestmentaccount', skipValue: 'true',  headingForm: 'Open an Empower Premier Investment account', url: 'signup/premier-investment-account?marketing_param=ao_premierinvestmentaccount' },
  { element: 'ao_personalstrategy',         paramValue: 'ao_personalstrategy', skipValue: 'true',  headingForm: 'Open an Empower Personal Strategy account', url: 'signup/personal-strategy?marketing_param=ao_personalstrategy' },
  { element: 'ao_personalcash',             paramValue: 'utmcct=empowercash', skipValue: 'true',  headingForm: 'Open an Empower Personal Cash™ account', url: 'signup/cash?marketing_param=ao_personalcash' },

  //cookies
  { element: 'impact_partner',              paramValue: 'impact=true|irclickid=V3V1DCTovxyNTwlXiiSRbSvTUkARvmx4fRFc1k0|impact_partner=Nick Test|impact_partnerID=2836790|utmcsr=Nick Test|utmcmd=affiliate|irgwc=1|', skipValue: 'false',  headingForm: 'Sign up to start using your free Retirement Planner.', url: '401k-compare?impact_partner=Nick%20Test&impact_partnerID=2836790&irclickid=V3V1DCTovxyNTwlXiiSRbSvTUkARvmx4fRFc1k0&irgwc=1&utm_medium=affiliate&utm_source=Nick%20Test' },
  { element: 'referral',                    paramValue: '', skipValue: '',  headingForm: 'Get started with our FREE dashboard', url: 'refer?amount=50&c3ch=Referral&c3nid=client&friend=James%20Del%20Favero&ownerId=005F0000002Bn36IAC&pageMode=referral&talkable_event_category=link_investment_account&talkable_visitor_offer_id=122725245&talkable_visitor_uuid=eaff9a04-aaf7-420f-97ef-6a6ae581b60d&transactionID=687312d0d01c4e578b6b9bd9c53de421' },
  { element: 'investment_checkup',          paramValue: 'zs_investment', skipValue: '',  headingForm: 'Sign up now for free.', url: 'investment-checkup' },

];   

test.describe('Marketing Params', () => {
    for (const data of marketingParamsData) {
        test(`Marketing param - ${data.element}`, async ({  marketingParamsPage, page }) => {
            await marketingParamsPage
                .gotoMarketingParamsPage()
                .then(p => p.clickElement(data.element));

            await expect(marketingParamsPage.getMarketingParamLocator).toHaveAttribute('name', 'marketing_param');
            await expect(marketingParamsPage.getMarketingParamLocator).toHaveValue(data.paramValue, { timeout: 20000 });
            await expect(marketingParamsPage.getSkipFirstUseLocator).toHaveValue(data.skipValue);

            const headingLocator = marketingParamsPage.getFormHeading(data.element);
            await expect(headingLocator).toHaveText(data.headingForm);
            await expect(page.locator('button[type="submit"]')).toBeVisible();
            await expect(page).toHaveURL(data.url);
        });
    };
});