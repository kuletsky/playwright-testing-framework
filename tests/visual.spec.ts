import { test, expect } from '@playwright/test';
import { AnalyticsPage } from '../pages/AnalyticsPage';
import {
  clickEventsData,
  socialButtonsData,
  primaryMenuData,
  fixedCategoryData,
  menuData,
  submenuData,
  modalData,
  hoverSubmenuData,
  hoverMenuData,
} from '../data/test-data';

// ═══════════════════════════════════════════════════════════════════════════════
// CLICK EVENTS
// ═══════════════════════════════════════════════════════════════════════════════

test.describe('Click Events', () => {
  for (const data of clickEventsData) {
    test(`${data.element} → ${data.eventName}`, async ({ page }) => {
      const analyticsPage = new AnalyticsPage(page);
      await analyticsPage.goto();

      const element = analyticsPage.getElement(data.element);
      const elementText = await analyticsPage.getText(element);

      const event = await analyticsPage.clickAndCapture(element, data.event, data.eventName);

      expect(event, `Event not captured for: ${data.element}`).not.toBeNull();
      expect(event.event).toBe(data.event);
      expect(event.event_name).toBe(data.eventName);
      expect(event.event_category).toBe(elementText);
      expect(event.event_detail).toBe(data.eventDetail);
    });
  }
});

// ═══════════════════════════════════════════════════════════════════════════════
// SOCIAL BUTTONS
// ═══════════════════════════════════════════════════════════════════════════════

test.describe('Social Button Click', () => {
  for (const data of socialButtonsData) {
    test(`${data.element}`, async ({ page }) => {
      const analyticsPage = new AnalyticsPage(page);
      await analyticsPage.goto();

      const element = analyticsPage.getElement(data.element);
      const elementTitle = await analyticsPage.getTitle(element);

      const event = await analyticsPage.clickAndCapture(element, 'social_click', 'social_click');

      expect(event).not.toBeNull();
      expect(event.event).toBe('social_click');
      expect(event.event_name).toBe('social_click');
      expect(event.event_category).toBe(elementTitle);
      expect(event.event_detail).toBe(data.eventDetail);
    });
  }
});

// ═══════════════════════════════════════════════════════════════════════════════
// PRIMARY MENU
// ═══════════════════════════════════════════════════════════════════════════════

test.describe('Primary Menu Click', () => {
  for (const data of primaryMenuData) {
    test(`${data.element}`, async ({ page }) => {
      const analyticsPage = new AnalyticsPage(page);
      await analyticsPage.goto();

      const element = analyticsPage.getElement(data.element);
      const elementText = await analyticsPage.getText(element);
      const elementLabel = await analyticsPage.getLabel(element);

      const event = await analyticsPage.clickAndCapture(element, 'navigation_click', data.eventName);

      expect(event).not.toBeNull();
      expect(event.event).toBe('navigation_click');
      expect(event.event_name).toBe(data.eventName);
      expect(event.event_category).toBe(elementText);
      expect(event.event_detail).toBe(elementLabel);
    });
  }
});

// ═══════════════════════════════════════════════════════════════════════════════
// FIXED CATEGORY
// ═══════════════════════════════════════════════════════════════════════════════

test.describe('Click with Fixed Category', () => {
  for (const data of fixedCategoryData) {
    test(`${data.element} → ${data.category}`, async ({ page }) => {
      const analyticsPage = new AnalyticsPage(page);
      await analyticsPage.goto();

      const element = analyticsPage.getElement(data.element);

      const event = await analyticsPage.clickAndCapture(element, data.event, data.eventName);

      expect(event).not.toBeNull();
      expect(event.event).toBe(data.event);
      expect(event.event_name).toBe(data.eventName);
      expect(event.event_category).toBe(data.category);
      expect(event.event_detail).toBe(data.detail);
    });
  }
});

// ═══════════════════════════════════════════════════════════════════════════════
// FAQ
// ═══════════════════════════════════════════════════════════════════════════════

test.describe('FAQ Expand/Contract', () => {
  test('FAQ Expand', async ({ page }) => {
    const analyticsPage = new AnalyticsPage(page);
    await analyticsPage.goto();

    const element = analyticsPage.getElement('faqExpendContract');
    const elementText = await analyticsPage.getText(element);

    const event = await analyticsPage.clickAndCapture(element, 'expand_contract', 'expand_contract');

    expect(event).not.toBeNull();
    expect(event.event).toBe('expand_contract');
    expect(event.event_name).toBe('expand_contract');
    expect(event.event_category).toBe('faq');
    expect(event.event_detail).toBe(elementText);
  });

  test('FAQ Contract', async ({ page }) => {
    const analyticsPage = new AnalyticsPage(page);
    await analyticsPage.goto();
    await analyticsPage.expandFAQ();

    const element = analyticsPage.getElement('faqExpendContract');
    const elementText = await analyticsPage.getText(element);

    const event = await analyticsPage.clickAndCapture(element, 'expand_contract', 'expand_contract');

    expect(event).not.toBeNull();
    expect(event.event).toBe('expand_contract');
    expect(event.event_name).toBe('expand_contract');
    expect(event.event_category).toBe('faq');
    expect(event.event_detail).toBe(elementText);
  });
});

// ═══════════════════════════════════════════════════════════════════════════════
// MENU NAVIGATION
// ═══════════════════════════════════════════════════════════════════════════════

test.describe('Menu Navigation Click', () => {
  for (const data of menuData) {
    test(`${data.element}`, async ({ page }) => {
      const analyticsPage = new AnalyticsPage(page);
      await analyticsPage.goto();
      await analyticsPage.openProductsMenu();

      const element = analyticsPage.getElement(data.element);
      const elementText = await analyticsPage.getText(element);

      const event = await analyticsPage.clickAndCapture(element, 'navigation_click', data.eventName);

      expect(event).not.toBeNull();
      expect(event.event).toBe('navigation_click');
      expect(event.event_name).toBe(data.eventName);
      expect(event.event_category).toBe(elementText);
      expect(event.event_detail).toBe(data.detail);
    });
  }
});

// ═══════════════════════════════════════════════════════════════════════════════
// SUBMENU NAVIGATION
// ═══════════════════════════════════════════════════════════════════════════════

test.describe('Submenu Navigation Click', () => {
  for (const data of submenuData) {
    test(`${data.element}`, async ({ page }) => {
      const analyticsPage = new AnalyticsPage(page);
      await analyticsPage.goto();
      await analyticsPage.openProductsMenu();
      await analyticsPage.openWealthManagementSubmenu();

      const element = analyticsPage.getElement(data.element);
      const elementText = await analyticsPage.getText(element);

      const event = await analyticsPage.clickAndCapture(element, 'navigation_click', data.eventName);

      expect(event).not.toBeNull();
      expect(event.event).toBe('navigation_click');
      expect(event.event_name).toBe(data.eventName);
      expect(event.event_category).toBe(elementText);
      expect(event.event_detail).toBe(data.detail);
    });
  }
});

// ═══════════════════════════════════════════════════════════════════════════════
// MODAL
// ═══════════════════════════════════════════════════════════════════════════════

test.describe('Modal Events', () => {
  for (const data of modalData) {
    test(`${data.element}`, async ({ page }) => {
      const analyticsPage = new AnalyticsPage(page);
      await analyticsPage.goto();
      await analyticsPage.openLinkModal();

      const element = analyticsPage.getElement(data.element);
      const elementText = await analyticsPage.getText(element);

      const event = await analyticsPage.clickAndCapture(element, 'button_click', 'button_click_modal');

      expect(event).not.toBeNull();
      expect(event.event).toBe('button_click');
      expect(event.event_name).toBe('button_click_modal');
      expect(event.event_category).toBe(elementText);
      expect(event.event_detail).toBe(data.detail);
    });
  }
});

// ═══════════════════════════════════════════════════════════════════════════════
// HOVER EVENTS
// ═══════════════════════════════════════════════════════════════════════════════

test.describe('Hover Events', () => {

  for (const data of hoverMenuData) {
    test('Hover menu ' + `${data.element}`, async ({ page }) => {
      const analyticsPage = new AnalyticsPage(page);
      await analyticsPage.goto();
      await analyticsPage.openProductsMenu();

      const element = analyticsPage.getElement(data.element);
      const elementText = await analyticsPage.getText(element);

      const event = await analyticsPage.hoverAndCapture(element, 'navigation_hover', 'navigation_hover');

      expect(event).not.toBeNull();
      expect(event.event).toBe('navigation_hover');
      expect(event.event_name).toBe('navigation_hover');
      expect(event.event_category).toBe(elementText);
      expect(event.event_detail).toBe(data.detail);
    });
  }


  for (const data of hoverSubmenuData) {
    test('Hover Submenu ' + `${data.element}`, async ({ page }) => {
      const analyticsPage = new AnalyticsPage(page);
      await analyticsPage.goto();
      await analyticsPage.openProductsMenu();
      await analyticsPage.openWealthManagementSubmenu();

      const element = analyticsPage.getElement(data.element);
      const elementText = await analyticsPage.getText(element);

      const event = await analyticsPage.hoverAndCapture(element, 'navigation_hover', 'navigation_hover');

      expect(event).not.toBeNull();
      expect(event.event).toBe('navigation_hover');
      expect(event.event_name).toBe('navigation_hover');
      expect(event.event_category).toBe(elementText);
      expect(event.event_detail).toBe(data.detail);
    });
  }

  test('Bento Box Hover', async ({ page }) => {
    const analyticsPage = new AnalyticsPage(page);
    await analyticsPage.goto();

    const element = analyticsPage.getElement('expectedBentoBox');
    const elementText = await analyticsPage.getText(element);

    const event = await analyticsPage.hoverAndCapture(element, 'hover_event', 'bento_hover');

    expect(event).not.toBeNull();
    expect(event.event).toBe('hover_event');
    expect(event.event_name).toBe('bento_hover');
    expect(event.event_category).toBe(elementText);
    expect(event.event_detail).toBe('');
  });
});