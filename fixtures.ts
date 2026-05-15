import { test as base } from '@playwright/test';
import { IndividualsPage } from './pages/IndividualsPage';
import { PlanSponsorsPage } from './pages/PlanSponsors';
import { FinancialProfessionalsPage } from './pages/FinancialProfessionalsPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { MarketingParamsPage } from './pages/MarketingParamsPage';

type Fixtures = {
  individualsPage: IndividualsPage;
  planSponsorsPage: PlanSponsorsPage;
  finProfPage: FinancialProfessionalsPage;
  analyticsPage: AnalyticsPage;
  marketingParamsPage: MarketingParamsPage;
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
});

export { expect } from '@playwright/test';