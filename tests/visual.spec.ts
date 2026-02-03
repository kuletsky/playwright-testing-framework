import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { stabilizeHeroCarousel } from '../utils/stabilize';


test.skip('Individuals page', async ({ page }) => {
  await page.goto('https://empwrretiremtstg.prod.acquia-sites.com/');
  await page.waitForLoadState('networkidle');
  await stabilizeHeroCarousel(page);
  await percySnapshot(page, 'Individuals page');
  expect(true).toBeTruthy();
});

