import { test, expect } from '../fixtures';
import { MarketingParamsPage } from '../pages/MarketingParamsPage';

export const marketingParamsData = [
  { element: 'defaultForm',                 paramValue: '',                          skipValue: '',       headingForm: 'Set up your Empower Personal Dashboard™', url: '/signup/onboarding?btn=1' }, 
  { element: 'RetirementIntentAffiliate',   paramValue: 'RetirementIntentAffiliate', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/tools?marketing_param=RetirementIntentAffiliate&btn=2' },
  { element: 'zs_tools',                    paramValue: 'zs_tools', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/tools?marketing_param=zs_tools&btn=3' },
  { element: 'zs_investment',               paramValue: 'zs_investment', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/onboarding?marketing_param=zs_investment&btn=4' },
  { element: 'zs_retirement',               paramValue: 'zs_retirement', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/tools?marketing_param=zs_retirement&btn=5' },
  { element: 'zs_networth',                 paramValue: 'zs_networth', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/tools?marketing_param=zs_networth&btn=6' },
  { element: 'zs_budgeting',                paramValue: 'zs_budgeting', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/tools?marketing_param=zs_budgeting&btn=7' },
  { element: 'zs_cashflow',                 paramValue: 'zs_cashflow', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/tools?marketing_param=zs_cashflow&btn=8' },
  { element: 'zs_savingsplanner',           paramValue: 'zs_savingsplanner', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/tools?marketing_param=zs_savingsplanner&btn=9' },
  { element: 'zs_onboarding',               paramValue: 'zs_onboarding', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/onboarding?marketing_param=zs_onboarding&btn=10' },
  { element: 'zs_customretirement',         paramValue: 'utmcct=customretirement|zs_retirement', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/tools?marketing_param=zs_customretirement&btn=11' },
 
  //skipFirstUse parameters
  { element: 'ao_premierira',               paramValue: 'ao_premierira', skipValue: 'true',  headingForm: 'Open an Empower Premier IRA', url: 'signup/premier-ira?marketing_param=ao_premierira&btn=12' },
  { element: 'ao_premierinvestmentaccount', paramValue: 'ao_premierinvestmentaccount', skipValue: 'true',  headingForm: 'Open an Empower Premier Investment account', url: 'signup/premier-investment-account?marketing_param=ao_premierinvestmentaccount&btn=13' },
  { element: 'ao_personalstrategy',         paramValue: 'ao_personalstrategy', skipValue: 'true',  headingForm: 'Open an Empower Personal Strategy account', url: 'signup/personal-strategy?marketing_param=ao_personalstrategy&btn=14' },
  { element: 'ao_personalcash',             paramValue: 'utmcct=empowercash', skipValue: 'true',  headingForm: 'Open an Empower Personal Cash™ account', url: 'signup/cash?marketing_param=ao_personalcash&btn=15' },

  //cookies
  { element: 'impact_partner',              paramValue: 'impact=true|irclickid=V3V1DCTovxyNTwlXiiSRbSvTUkARvmx4fRFc1k0|impact_partner=Nick Test|impact_partnerID=2836790|utmcsr=Nick Test|utmcmd=affiliate|irgwc=1|', skipValue: 'false',  headingForm: 'Sign up to start using your free Retirement Planner.', url: '/401k-compare?impact_partner=Nick+Test&impact_partnerID=2836790&irclickid=V3V1DCTovxyNTwlXiiSRbSvTUkARvmx4fRFc1k0&irgwc=1&utm_medium=affiliate&utm_source=Nick+Test&btn=16'},
  { element: 'referral',                    paramValue: 'talkableVisitorUUID=eaff9a04-aaf7-420f-97ef-6a6ae581b60d|talkableEventCategory=link_investment_account|transactionID=687312d0d01c4e578b6b9bd9c53de421', skipValue: '',  headingForm: 'Get started with our FREE dashboard', url: 'refer?amount=50&c3ch=Referral&c3nid=client&friend=James+Del+Favero&ownerId=005F0000002Bn36IAC&pageMode=referral&talkable_event_category=link_investment_account&talkable_visitor_offer_id=122725245&talkable_visitor_uuid=eaff9a04-aaf7-420f-97ef-6a6ae581b60d&transactionID=687312d0d01c4e578b6b9bd9c53de421&btn=17' },
  { element: 'investment_checkup',          paramValue: 'zs_investment', skipValue: '',  headingForm: 'Sign up now for free.', url: 'investment-checkup?btn=18' },

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