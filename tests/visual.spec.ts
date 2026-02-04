import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { stabilizeHeroCarousel } from '../utils/stabilize';


test('Individuals page', async ({ page }) => {
  await page.goto('/');
  // await stabilizeHeroCarousel(page);
  await percySnapshot(page, 'Individuals page');
  expect(true).toBeTruthy();
});

test('Plan Sponsors page', async ({ page }) => {
  await page.goto('/plan-sponsors');
  // await stabilizeHeroCarousel(page);
  await percySnapshot(page, 'Plan Sponsors page');
  expect(true).toBeTruthy();
});

test('Financial Professionals page', async ({ page }) => {
  await page.goto('/financial-professionals');
  // await stabilizeHeroCarousel(page);
  await percySnapshot(page, 'Financial Professionals page');
  expect(true).toBeTruthy();
});