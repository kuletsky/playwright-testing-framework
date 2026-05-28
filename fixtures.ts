import { test as base } from '@playwright/test';
import { IndividualsPage } from './pages/IndividualsPage';
import { PlanSponsorsPage } from './pages/PlanSponsors';
import { FinancialProfessionalsPage } from './pages/FinancialProfessionalsPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { MarketingParamsPage } from './pages/MarketingParamsPage';
import { SfdPage } from './pages/SfdPage';
import { IndividualsSignupPage } from '@pages/IndividualsSignupPage';

type Fixtures = {
  individualsPage: IndividualsPage;
  individualsSignupPage: IndividualsSignupPage;
  planSponsorsPage: PlanSponsorsPage;
  finProfPage: FinancialProfessionalsPage;
  analyticsPage: AnalyticsPage;
  marketingParamsPage: MarketingParamsPage;
  sfdPage: SfdPage;
};

export const test = base.extend<Fixtures>({

  individualsPage: async ({ page }, use) => {
    await use(new IndividualsPage(page));
  },
  planSponsorsPage: async ({ page }, use) => {
    await use(new PlanSponsorsPage(page));
  },
  finProfPage: async ({ page }, use) => {
    await use(new FinancialProfessionalsPage(page));
  },
  analyticsPage: async ({ page }, use) => {
    await use(new AnalyticsPage(page));
  },
  marketingParamsPage: async ({ page }, use) => {
    await use(new MarketingParamsPage(page));
  },
  sfdPage: async ({ page }, use) => {
    await use(new SfdPage(page));
  },
  individualsSignupPage: async ({ page }, use) => {
    await use(new IndividualsSignupPage(page));
  },
});

export { expect } from '@playwright/test';