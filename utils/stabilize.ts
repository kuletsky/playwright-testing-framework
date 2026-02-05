import { Page } from '@playwright/test';

export async function waitCarousel(page: Page) {

  const STAGE = '.owl-stage';
  const ACTIVE_SLIDE = '.owl-item.active.center';

  await page.waitForSelector(STAGE, { state: 'visible', timeout: 120000 });
  await page.waitForSelector(ACTIVE_SLIDE, { state: 'visible', timeout: 120000 });

}

export async function waitLottiePlayer(page: Page) {
  await page.locator('.animation').first().waitFor({ state: 'visible', timeout: 150_000 });
}

export async function closeCookieBanner(page: Page) {

  const COOKIE_BANNER = '#onetrust-banner-sdk';
  const COOKIE_CLOSE_BTN = '#onetrust-close-btn-container button';

  const isVisible = await page.isVisible(COOKIE_CLOSE_BTN, { timeout: 15000 });
  if (isVisible) {
    await page.click(COOKIE_CLOSE_BTN);
    await page.waitForSelector(COOKIE_BANNER, { state: 'hidden', timeout: 10000 });

  }
}