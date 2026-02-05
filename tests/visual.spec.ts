import { test, expect } from '@playwright/test';
import { closeCookieBanner, waitCarousel, waitLottiePlayer } from '../utils/stabilize';
const { percyScreenshot } = require("@percy/playwright");

// test('Individuals page', async ({ page }) => {
//   await page.goto('');
//   await closeCookieBanner(page);
//   await waitCarousel(page);
//   await percyScreenshot(page, 'Individuals page', { fullPage: true });
//   expect(true).toBeTruthy();
// });

// test('Plan Sponsors page', async ({ page }) => {
//   await page.goto('/plan-sponsors');
//   await closeCookieBanner(page);
//   await waitCarousel(page);
//   await percyScreenshot(page, 'Plan Sponsors page', { fullPage: true });
//   expect(true).toBeTruthy();
// });

// test('Financial Professionals page', async ({ page }) => { 
//   await page.goto('/financial-professionals');
//   await closeCookieBanner(page);
//   // await waitLottiePlayer(page);
//   await percyScreenshot(page, 'Financial Professionals page', {fullPage: true });
//   expect(true).toBeTruthy();
// });

test.describe('Components', () => {
  test('Accordion (v3)', async ({ page }) => {
    await page.goto('/empulsify/tp-accordion');
    await closeCookieBanner(page);
    await percyScreenshot(page, 'Accordion (v3)', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Bento Box ', async ({ page }) => {
    await page.goto('/empulsify/tp-bento-box');
    await closeCookieBanner(page);
    await percyScreenshot(page, 'Bento Box', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Breadcrumbs (Light theme)', async ({ page }) => {
    await page.goto('/products-solutions/personal-strategy');
    await closeCookieBanner(page);
    await percyScreenshot(page, 'Breadcrumbs (Light theme)', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Buttons', async ({ page }) => {
    await page.goto('/empulsify/tp-buttons ');
    await closeCookieBanner(page);
    await percyScreenshot(page, 'Buttons', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Circle Card Box', async ({ page }) => {
    await page.goto('/empulsify/tp-circle-card-box');
    await closeCookieBanner(page);
    await percyScreenshot(page, 'Circle Card Box', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Comparison Table', async ({ page }) => {
    await page.goto('/empulsify/tp-comparison-table');
    await closeCookieBanner(page);
    await percyScreenshot(page, 'Comparison Table', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Disclaimer Block', async ({ page }) => {
    await page.goto('/empulsify/tp-disclaimer-above-footer');
    await closeCookieBanner(page);
    await percyScreenshot(page, 'Disclaimer Block', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Final CTA', async ({ page }) => {
    await page.goto('/empulsify/tp-final-cta');
    await closeCookieBanner(page);
    await percyScreenshot(page, 'Final CTA', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Hero Header', async ({ page }) => {
    await page.goto('/empulsify/tp-hero-header');
    await closeCookieBanner(page);
    await percyScreenshot(page, 'Hero Header', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Hero Side By Header + SFD registration form', async ({ page }) => {
    await page.goto('/empulsify/tp-hero-side-by-form');
    await closeCookieBanner(page);
    await percyScreenshot(page, 'Hero Side By Header + SFD registration form', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Multi card container (Icon card)', async ({ page }) => {
    await page.goto('/empulsify/empulsify/tp-multi-card-container-icon-cards');
    await closeCookieBanner(page);
    await percyScreenshot(page, 'Multi card container (Icon card)', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Multi card container (Standard card)', async ({ page }) => {
    await page.goto('/empulsify/tp-multi-card-container-standard-cards  ');
    await closeCookieBanner(page);
    await percyScreenshot(page, 'Multi card container (Standard card)', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Multi card container (FBI card)', async ({ page }) => {
    await page.goto('/empulsify/tp-multi-card-container-fbi-cards');
    await closeCookieBanner(page);
    await percyScreenshot(page, 'Multi card container (FBI card)', { fullPage: true });
    expect(true).toBeTruthy();
  });

  test('Multi card container (Plan card)', async ({ page }) => {
    await page.goto('/empulsify/tp-multi-card-container-plan-cards');
    await closeCookieBanner(page);
    await percyScreenshot(page, 'Multi card container (Plan card)', { fullPage: true });
    expect(true).toBeTruthy();
  });





});