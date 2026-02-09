import { test, expect } from '@playwright/test';
import { IndividualsPage } from '../pages/IndividualsPage';

test.describe('Header shrink/expand on scroll', () => {
  test('Shrinks when scrolling down', { tag: ['@desktop'] }, async ({ page }) => {
    const individuals = new IndividualsPage(page);

    await individuals.gotoIndividualsPage();
    await individuals.scrollToBottom();

    await expect(individuals.header).toHaveCSS('height', '60px');
  });

  test('Expands when scrolling down then up', { tag: ['@desktop'] }, async ({ page }) => {
    const individuals = new IndividualsPage(page);

    await individuals.gotoIndividualsPage();
    await individuals.scrollToBottom();
    await individuals.scrollToTop();

    await expect(individuals.header).toHaveCSS('height', '90px');
  });
});