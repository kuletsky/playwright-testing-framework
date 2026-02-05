import { test, expect } from '@playwright/test';
import { removeShaking, suppressCookieBanner } from '../utils/stabilize';
const { percyScreenshot } = require("@percy/playwright");

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
});

test.describe('Stage site', () => {

  test('Individuals page', async ({ page }) => {
    test.setTimeout(240_000);
    await page.goto('');

    await suppressCookieBanner(page);
    await removeShaking(page);

    await percyScreenshot(page, 'Individuals page', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Plan Sponsors page', async ({ page }) => {
    test.setTimeout(240_000);
    await page.goto('/plan-sponsors');

    await suppressCookieBanner(page);
    await removeShaking(page);

    await percyScreenshot(page, 'Plan Sponsors page', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Financial Professionals page', async ({ page }) => {
    test.setTimeout(240_000);
    await page.goto('/financial-professionals');

    await suppressCookieBanner(page);
    await removeShaking(page);

    await percyScreenshot(page, 'Financial Professionals page', { fullPage: true });
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
    await page.goto('/empulsify/tp-circle-card-box');

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
    await page.goto('/empulsify/empulsify/tp-multi-card-container-icon-cards');
    await suppressCookieBanner(page);
    await removeShaking(page);
    await percyScreenshot(page, 'Multi card container (Icon card)', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Multi card container (Standard card)', async ({ page }) => {
    test.setTimeout(240_000);
    await page.goto('/empulsify/tp-multi-card-container-standard-cards  ');
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

    await page.goto('/empulsify/tp-multi-card-container-plan-cards');
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