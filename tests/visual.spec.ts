import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';



test.skip('Individuals page', async ({ page }) => {
  await page.goto('https://empwrretiremtstg.prod.acquia-sites.com/');

  await page.addStyleTag({
    content: `
      *, *::before, *::after { 
        transition: none !important; 
        animation: none !important; 
        caret-color: transparent !important;
      }
    `,
  });

  await page.waitForLoadState('networkidle');

  const dynamic = page.locator('[data-testid="timestamp"], .live-price, .random-banner');
  if (await dynamic.count()) {
    await dynamic.evaluateAll((els) => els.forEach((el) => el.setAttribute('style', 'visibility:hidden')));
  }


  await percySnapshot(page, 'Individuals page', {
    percyCSS: `
    .owl-stage-outer { visibility: hidden !important; }
    /* Optional placeholder to keep height the same */
    .owl-stage-outer::after {
      content: "carousel";
      visibility: visible;
      display: block;
      height: 240px; /* set to your carousel height */
      background: #eee;
    }
  `,
  });
  expect(true).toBeTruthy();
});

