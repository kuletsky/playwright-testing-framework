import { test, expect } from '@playwright/test';
import percyScreenshot from '@percy/playwright';
import { stabilizeHeroCarousel } from '../utils/stabilize';


test('Individuals page', async ({ page }) => {
  await page.goto('/');
  await stabilizeHeroCarousel(page);
  await percyScreenshot(page, 'Individuals page');
  expect(true).toBeTruthy();
});

test('Plan Sponsors page', async ({ page }) => {
  await page.goto('/plan-sponsors');
  // await stabilizeHeroCarousel(page);
  await percyScreenshot(page, 'Plan Sponsors page');
  expect(true).toBeTruthy();
});

test('Financial Professionals page', async ({ page }) => {
  await page.goto('/financial-professionals');
  // await stabilizeHeroCarousel(page);
  await percyScreenshot(page, 'Financial Professionals page');
  expect(true).toBeTruthy();
});