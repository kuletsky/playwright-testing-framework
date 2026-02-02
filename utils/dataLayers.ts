import { Page, Locator } from '@playwright/test';

/**
 * Clicks element and captures dataLayer event
 */
export async function captureClickEvent(
  page: Page,
  element: Locator,
  eventType: string,
  eventName: string
): Promise<Record<string, any> | null> {
  
  const handle = await element.elementHandle();
  
  return await page.evaluate(
    ([el, evtType, evtName]) => {
      return new Promise<any>((resolve) => {
        const dataLayer = (window as any).dataLayer;
        if (!dataLayer) {
          resolve(null);
          return;
        }

        const originalPush = dataLayer.push.bind(dataLayer);
        
        dataLayer.push = function (...args: any[]) {
          for (const event of args) {
            if (event?.event === evtType && event?.event_name === evtName) {
              dataLayer.push = originalPush;
              resolve(JSON.parse(JSON.stringify(event)));
              return originalPush.apply(dataLayer, args);
            }
          }
          return originalPush.apply(dataLayer, args);
        };

        (el as HTMLElement).click();
        setTimeout(() => {
          dataLayer.push = originalPush;
          resolve(null);
        }, 3000);
      });
    },
    [handle, eventType, eventName]
  );
}

/**
 * Hovers element and captures dataLayer event
 */
export async function captureHoverEvent(
  page: Page,
  element: Locator,
  eventType: string,
  eventName: string
): Promise<Record<string, any> | null> {
  
  // Install interceptor
  await page.evaluate(
    ([evtType, evtName]) => {
      const dataLayer = (window as any).dataLayer;
      if (!dataLayer) return;

      (window as any).__capturedHoverEvent = null;
      const originalPush = dataLayer.push.bind(dataLayer);
      
      dataLayer.push = function (...args: any[]) {
        for (const event of args) {
          if (event?.event === evtType && event?.event_name === evtName) {
            (window as any).__capturedHoverEvent = JSON.parse(JSON.stringify(event));
          }
        }
        return originalPush.apply(dataLayer, args);
      };
    },
    [eventType, eventName]
  );

  // Real hover
  await element.hover();
  await page.waitForTimeout(500);

  return await page.evaluate(() => (window as any).__capturedHoverEvent);
}