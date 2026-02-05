import { test, expect } from '@playwright/test';
import { removeShaking, suppressCookieBanner, waitCarousel } from '../utils/stabilize';
const { percyScreenshot } = require("@percy/playwright");

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.setDefaultNavigationTimeout(120_000);
});


test.describe('Login pages', () => {
  test('Individuals Login page', async ({ page }) => {
    test.setTimeout(240_000);
    await page.goto('/login-v1');

    await suppressCookieBanner(page);
    await removeShaking(page);

    await percyScreenshot(page, 'Individuals Login page', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Financial Professionals Login page', async ({ page }) => {
    test.setTimeout(240_000);
    await page.goto('/financial-professionals-login');

    await suppressCookieBanner(page);
    await removeShaking(page);

    await percyScreenshot(page, 'Financial Professionals Login page', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Plan Sponsors Login page', async ({ page }) => {
    test.setTimeout(240_000);
    await page.goto('/plan-sponsors');

    await suppressCookieBanner(page);
    await removeShaking(page);

    await percyScreenshot(page, 'Plan Sponsors Login page', { fullPage: true });
    expect(true).toBeTruthy();
  });


});




test.describe('Signup Form pages', () => {
  test('Individuals Open account', async ({ page }) => {
    test.setTimeout(240_000);
    await page.goto('/signup');

    await suppressCookieBanner(page);
    await removeShaking(page);

    await percyScreenshot(page, 'Individuals Open account page', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Personal Strategy account', async ({ page }) => {
    test.setTimeout(240_000);
    await page.goto('/signup/personal-strategy?marketing_param=ao_personalstrategy');

    await suppressCookieBanner(page);
    await removeShaking(page);

    await percyScreenshot(page, 'Personal Strategy account', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Personal Cash account', async ({ page }) => {
    test.setTimeout(240_000);
    await page.goto('/signup/cash?marketing_param=ao_personalcash');

    await suppressCookieBanner(page);
    await removeShaking(page);

    await percyScreenshot(page, 'Personal Cash account', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Premier IRA account', async ({ page }) => {
    test.setTimeout(240_000);
    await page.goto('/signup/premier-ira?marketing_param=ao_premierira');

    await suppressCookieBanner(page);
    await removeShaking(page);

    await percyScreenshot(page, 'Premier IRA account', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Premier Investment Account', async ({ page }) => {
    test.setTimeout(240_000);
    await page.goto('/signup/premier-investment-account?marketing_param=ao_premierinvestmentaccount');

    await suppressCookieBanner(page);
    await removeShaking(page);

    await percyScreenshot(page, 'Premier Investment Account', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Personal Dashboard account', async ({ page }) => {
    test.setTimeout(240_000);
    await page.goto('/signup/tools?marketing_param=zs_tools');

    await suppressCookieBanner(page);
    await removeShaking(page);

    await percyScreenshot(page, 'Personal Dashboard account', { fullPage: true });
    expect(true).toBeTruthy();
  });
});


test.describe('Components', () => {
  test('Accordion (v3)', async ({ page }) => {
    test.setTimeout(240_000);
    await page.goto('/empulsify/tp-accordion');

    await suppressCookieBanner(page);
    await removeShaking(page);

    await percyScreenshot(page, 'Accordion (v3)', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Bento Box ', async ({ page }) => {
    test.setTimeout(240_000);
    await page.goto('/empulsify/tp-bento-box');

    await suppressCookieBanner(page);
    await removeShaking(page);

    await percyScreenshot(page, 'Bento Box', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Breadcrumbs (Light theme)', async ({ page }) => {
    test.setTimeout(240_000);
    await page.goto('/products-solutions/personal-strategy');

    await suppressCookieBanner(page);
    await page.waitForTimeout(60_000);
    await removeShaking(page);

    await percyScreenshot(page, 'Breadcrumbs (Light theme)', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Buttons', async ({ page }) => {
    test.setTimeout(240_000);
    await page.goto('/empulsify/tp-buttons ');

    await suppressCookieBanner(page);
    await removeShaking(page);

    await percyScreenshot(page, 'Buttons', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Circle Card Box', async ({ page }) => {
    test.setTimeout(240_000);
    await page.goto('/empulsify/tp-circle-cards');

    await suppressCookieBanner(page);
    await removeShaking(page);

    await percyScreenshot(page, 'Circle Card Box', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Comparison Table', async ({ page }) => {
    test.setTimeout(240_000);
    await page.goto('/empulsify/tp-comparison-table');

    await suppressCookieBanner(page);
    await removeShaking(page);

    await percyScreenshot(page, 'Comparison Table', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Disclaimer Block', async ({ page }) => {
    test.setTimeout(240_000);
    await page.goto('/empulsify/tp-disclaimer-above-footer');

    await suppressCookieBanner(page);
    await removeShaking(page);

    await percyScreenshot(page, 'Disclaimer Block', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Final CTA', async ({ page }) => {
    test.setTimeout(240_000);
    await page.goto('/empulsify/tp-final-cta');

    await suppressCookieBanner(page);
    await removeShaking(page);

    await percyScreenshot(page, 'Final CTA', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Hero Header', async ({ page }) => {
    test.setTimeout(240_000);
    await page.goto('/empulsify/tp-hero-header');

    await suppressCookieBanner(page);
    await removeShaking(page);

    await percyScreenshot(page, 'Hero Header', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Hero Side By Header + SFD registration form', async ({ page }) => {
    test.setTimeout(240_000);
    await page.goto('/empulsify/tp-hero-side-by-form');

    await suppressCookieBanner(page);
    await removeShaking(page);

    await percyScreenshot(page, 'Hero Side By Header + SFD registration form', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Multi card container (Icon card)', async ({ page }) => {
    test.setTimeout(240_000);
    await page.goto('/empulsify/tp-multi-card-container-icon-cards');
    await suppressCookieBanner(page);
    await removeShaking(page);
    await percyScreenshot(page, 'Multi card container (Icon card)', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Multi card container (Standard card)', async ({ page }) => {
    test.setTimeout(240_000);
    await page.goto('/empulsify/tp-multi-card-container-standard-cards');
    await suppressCookieBanner(page);
    await removeShaking(page);
    await percyScreenshot(page, 'Multi card container (Standard card)', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Multi card container (FBI card)', async ({ page }) => {
    test.setTimeout(240_000);

    await page.goto('/empulsify/tp-multi-card-container-fbi-cards');
    await suppressCookieBanner(page);
    await removeShaking(page);
    await percyScreenshot(page, 'Multi card container (FBI card)', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Multi card container (Plan card)', async ({ page }) => {
    test.setTimeout(240_000);

    await page.goto('/empulsify/tp-multiple-card-plan-cards');
    await suppressCookieBanner(page);
    await removeShaking(page);
    await percyScreenshot(page, 'Multi card container (Plan card)', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Side By (Quote & Media)', async ({ page }) => {
    test.setTimeout(240_000);
    await page.goto('/empulsify/tp-side-quote-media');
    await suppressCookieBanner(page);
    await removeShaking(page);
    await percyScreenshot(page, 'Side By (Quote & Media)', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Side By (Text & Media)', async ({ page }) => {
    test.setTimeout(240_000);
    await page.goto('/empulsify/tp-side-image-html-table');
    await suppressCookieBanner(page);
    await removeShaking(page);
    await percyScreenshot(page, 'Side By (Text & Media)', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Signup / Login card Container', async ({ page }) => {
    test.setTimeout(240_000);

    await page.goto('/tp-signuplogin-container');
    await suppressCookieBanner(page);
    await removeShaking(page);
    await percyScreenshot(page, 'Signup / Login card Container', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Social Proof (v3)', async ({ page }) => {
    test.setTimeout(240_000);

    await page.goto('/empulsify/tp-social-proof');
    await suppressCookieBanner(page);
    await removeShaking(page);
    await percyScreenshot(page, 'Social Proof (v3)', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Standard Block', async ({ page }) => {
    test.setTimeout(240_000);

    await page.goto('/empulsify/tp-standard-block');
    await suppressCookieBanner(page);
    await removeShaking(page);
    await percyScreenshot(page, 'Standard Block', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Stat Banner', async ({ page }) => {
    test.setTimeout(240_000);

    await page.goto('/empulsify/tp-stat-banner');
    await suppressCookieBanner(page);
    await removeShaking(page);
    await percyScreenshot(page, 'Stat Banner', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Testimonial', async ({ page }) => {
    test.setTimeout(240_000);


    await page.goto('/empulsify/tp-testimonial');
    await suppressCookieBanner(page);
    await removeShaking(page);
    await percyScreenshot(page, 'Testimonial', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Thought Leadership', async ({ page }) => {
    test.setTimeout(240_000);

    await page.goto('/empulsify/tp-thought-leadership');
    await suppressCookieBanner(page);
    await removeShaking(page);
    await percyScreenshot(page, 'Thought Leadership', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Tools Carousel (Icon card)', async ({ page }) => {
    test.setTimeout(240_000);

    await page.goto('/empulsify/tp-tools-carousel-icon-cards');
    await suppressCookieBanner(page);
    await removeShaking(page);
    await percyScreenshot(page, 'Tools Carousel (Icon card)', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Tools Carousel (Standard card)', async ({ page }) => {
    test.setTimeout(240_000);

    await page.goto('/empulsify/tp-tools-carousel-standard-cards');
    await suppressCookieBanner(page);
    await removeShaking(page);
    await percyScreenshot(page, 'Tools Carousel (Standard card)', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Tools Carousel (FBI card)', async ({ page }) => {
    test.setTimeout(240_000);

    await page.goto('/empulsify/tp-tools-carousel-fbi-cards');
    await suppressCookieBanner(page);
    await removeShaking(page);
    await percyScreenshot(page, 'Tools Carousel (FBI card)', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Tools Carousel (Plan card)', async ({ page }) => {
    test.setTimeout(240_000);

    await page.goto('/empulsify/tp-tools-carousel-plan-cards');
    await suppressCookieBanner(page);
    await removeShaking(page);
    await percyScreenshot(page, 'Tools Carousel (Plan card)', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Video', async ({ page }) => {
    test.setTimeout(240_000);

    await page.goto('/empulsify/tp-video-component');
    await suppressCookieBanner(page);
    await removeShaking(page);
    await percyScreenshot(page, 'Video', { fullPage: true });
    expect(true).toBeTruthy();
  });

});



test.describe('Empower pages on Stage', () => {
  test.describe('Individuals pages', () => {
    test('Individuals Home page', async ({ page }) => {
      test.setTimeout(240_000);
      await page.goto('');

      await suppressCookieBanner(page);
      await waitCarousel(page);
      await page.waitForTimeout(60_000);
      await removeShaking(page);

      await percyScreenshot(page, 'Individuals page', { fullPage: true });
      expect(true).toBeTruthy();
    });

    test('High-yield cash account', async ({ page }) => {
      test.setTimeout(240_000);
      await page.goto('/wealth-management');

      await suppressCookieBanner(page);
      await removeShaking(page);

      await percyScreenshot(page, 'High-yield cash account', { fullPage: true });
      expect(true).toBeTruthy();
    });

    test('Rollover page', async ({ page }) => {
      test.setTimeout(240_000);
      await page.goto('/products-solutions/rollover');

      await suppressCookieBanner(page);
      await removeShaking(page);

      await percyScreenshot(page, 'Rollover page', { fullPage: true });
      expect(true).toBeTruthy();
    });

    test('IRAs page', async ({ page }) => {
      test.setTimeout(240_000);
      await page.goto('/products-solutions/iras');

      await suppressCookieBanner(page);
      await removeShaking(page);

      await percyScreenshot(page, 'IRAs page', { fullPage: true });
      expect(true).toBeTruthy();
    });

    test('Investment Accounts page', async ({ page }) => {
      test.setTimeout(240_000);
      await page.goto('/products-solutions/investment-accounts');

      await suppressCookieBanner(page);
      await removeShaking(page);

      await percyScreenshot(page, 'Investment Accounts page', { fullPage: true });
      expect(true).toBeTruthy();
    });

    test('Private Client page', async ({ page }) => {
      test.setTimeout(240_000);
      await page.goto('/products-solutions/private-client');

      await suppressCookieBanner(page);
      await removeShaking(page);

      await percyScreenshot(page, 'Private Client page', { fullPage: true });
      expect(true).toBeTruthy();
    });

    test('Tools View All page', async ({ page }) => {
      test.setTimeout(240_000);
      await page.goto('/tools');

      await suppressCookieBanner(page);
      await page.waitForTimeout(60_000);
      await removeShaking(page);

      await percyScreenshot(page, 'Tools View All page', { fullPage: true });
      expect(true).toBeTruthy();
    });

    test('Tools Retirement plan page', async ({ page }) => {
      test.setTimeout(240_000);
      await page.goto('/tools/retirement-planner');

      await suppressCookieBanner(page);
      await removeShaking(page);

      await percyScreenshot(page, 'Tools Retirement plan page', { fullPage: true });
      expect(true).toBeTruthy();
    });

    test('Learn Investment Insights page', async ({ page }) => {
      test.setTimeout(240_000);
      await page.goto('/investment-insights');

      await suppressCookieBanner(page);
      await removeShaking(page);

      await percyScreenshot(page, 'Learn Investment Insights page', { fullPage: true });
      expect(true).toBeTruthy();
    });

    test('Learn The Currency', async ({ page }) => {
      test.setTimeout(240_000);
      await page.goto('/the-currency');

      await suppressCookieBanner(page);
      await removeShaking(page);

      await percyScreenshot(page, 'Learn The Currency page', { fullPage: true });
      expect(true).toBeTruthy();
    });

    test('Why Empower Cybersecurity page', async ({ page }) => {
      test.setTimeout(240_000);
      await page.goto('/individuals/about-empower/cybersecurity');

      await suppressCookieBanner(page);
      await removeShaking(page);

      await percyScreenshot(page, 'Why Empower Cybersecurity page', { fullPage: true });
      expect(true).toBeTruthy();
    });

    test('Why Empower Press Center page', async ({ page }) => {
      test.setTimeout(240_000);
      await page.goto('/press-center');

      await suppressCookieBanner(page);
      await removeShaking(page);

      await percyScreenshot(page, 'Why Empower Press Center page', { fullPage: true });
      expect(true).toBeTruthy();
    });




  });



  test.describe('Plan Sponsors pages', () => {
    test('Plan Sponsors Home page', async ({ page }) => {
      test.setTimeout(240_000);
      await page.goto('/plan-sponsors');

      await suppressCookieBanner(page);
      await waitCarousel(page);
      await page.waitForTimeout(60_000);
      await removeShaking(page);

      await percyScreenshot(page, 'Plan Sponsors page', { fullPage: true });
      expect(true).toBeTruthy();
    });

    test('Markets Government page', async ({ page }) => {
      test.setTimeout(240_000);
      await page.goto('/plan-sponsors/what-we-offer/government');

      await suppressCookieBanner(page);
      await removeShaking(page);

      await percyScreenshot(page, 'Markets Government page', { fullPage: true });
      expect(true).toBeTruthy();
    });

    test('Markets Taft-Hartley Plans page', async ({ page }) => {
      test.setTimeout(240_000);
      await page.goto('/plan-sponsors/what-we-offer/taft-hartley-plans');

      await suppressCookieBanner(page);
      await removeShaking(page);

      await percyScreenshot(page, 'Markets Taft-Hartley Plans page', { fullPage: true });
      expect(true).toBeTruthy();
    });

  });



  test.describe('Financial Professionals pages', () => {
    test('Financial Professionals Home page', async ({ page }) => {
      test.setTimeout(240_000);
      await page.goto('/financial-professionals');

      await suppressCookieBanner(page);
      await page.waitForTimeout(60_000);
      await removeShaking(page);

      await percyScreenshot(page, 'Financial Professionals page', { fullPage: true });
      expect(true).toBeTruthy();
    });



  });
});