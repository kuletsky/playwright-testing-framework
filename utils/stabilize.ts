import { Page } from '@playwright/test';

export async function waitCarousel(page: Page) {

  const STAGE = '.owl-stage';
  const ACTIVE_SLIDE = '.owl-item.active.center';

  await page.waitForSelector(STAGE, { state: 'visible', timeout: 120000 });
  await page.waitForSelector(ACTIVE_SLIDE, { state: 'visible', timeout: 120000 });

}

export async function removeShaking(page: Page) {
  await waitForFonts(page, 30_000);
  await waitForAboveTheFoldImages(page, 45_000);

  // await closeCookieBanner(page);
  // await waitCarousel(page);

  await freezeMotion(page);
  await waitForLayoutStable(page, 1200, 25_000);
}

export async function waitForFonts(page: Page, timeout = 30_000) {
  await page.waitForFunction(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fonts = (document as any).fonts;
    return !fonts || fonts.status === 'loaded';
  }, { timeout }).catch(() => { });
}

export async function waitForAboveTheFoldImages(page: Page, timeout = 45_000) {
  await page.waitForFunction(() => {
    const vpH = window.innerHeight;

    const imgs = Array.from(document.querySelectorAll('img')) as HTMLImageElement[];
    const visibleImgs = imgs.filter(img => {
      const r = img.getBoundingClientRect();
      // в пределах первого экрана (с небольшим запасом вниз)
      return r.width > 20 && r.height > 20 && r.top < vpH * 1.2 && r.bottom > 0;
    });

    if (visibleImgs.length === 0) return true; // иногда герои на svg/lottie

    return visibleImgs.every(img => img.complete && img.naturalWidth > 0);
  }, { timeout });
}

export async function waitForLayoutStable(page: Page, stableMs = 1000, timeout = 30_000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    const h1 = await page.evaluate(() => document.body.getBoundingClientRect().height);
    await page.waitForTimeout(stableMs);
    const h2 = await page.evaluate(() => document.body.getBoundingClientRect().height);

    if (Math.abs(h2 - h1) < 1) return;
  }
}

export async function freezeMotion(page: Page) {
  await page.addStyleTag({
    content: `
      *,*::before,*::after{animation:none!important;transition:none!important}
      html{scroll-behavior:auto!important}
    `
  });
}

export async function suppressCookieBanner(page: Page): Promise<void> {
  // Add as early as possible after navigation starts/finishes
  await page.addStyleTag({
    content: `
      #onetrust-banner-sdk,
      .ot-sdk-container,
      .otFloatingRoundedCorner,
      .otFlat {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
      body { overflow: auto !important; }
    `,
  });
}






