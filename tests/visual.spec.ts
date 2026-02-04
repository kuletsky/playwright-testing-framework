import { test, expect } from '@playwright/test';
import { stabilizeHeroCarousel } from '../utils/stabilize';
const { percyScreenshot } = require("@percy/playwright");

test('Individuals page', async ({ page }) => {
  await page.goto('');
  // await stabilizeHeroCarousel(page);
  await percyScreenshot(page, 'Individuals page', {fullPage: true });
  expect(true).toBeTruthy();
});

test('Plan Sponsors page', async ({ page }) => {
  await page.goto('/plan-sponsors');
  // await stabilizeHeroCarousel(page);
  await percyScreenshot(page, 'Plan Sponsors page', {fullPage: true });
  expect(true).toBeTruthy();
});

test('Financial Professionals page', async ({ page }) => {
  await page.goto('/financial-professionals');
  // await stabilizeHeroCarousel(page);
  await percyScreenshot(page, 'Financial Professionals page', {fullPage: true });
  expect(true).toBeTruthy();
});