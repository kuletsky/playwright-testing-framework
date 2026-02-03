import { Page, Locator } from '@playwright/test';
import { captureClickEvent, captureHoverEvent } from '../utils/dataLayer';

export class AnalyticsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // LOCATORS
  // ═══════════════════════════════════════════════════════════════════════════

  private locators: Record<string, string> = {
    // Buttons
    primaryButton: "[data-once='click-primary-button empulsify-button-ripple']:nth-of-type(1) [class]",
    primaryButton_PC: "[data-once='click-primary-button empulsify-button-ripple']:nth-of-type(2) [class]",
    brandedGoldButton: '.layout__region.layout__region--second .branded-btn',
    secondaryButton: "[data-once='click-secondary-light-button empulsify-button-ripple']:nth-of-type(1) [class]",
    secondaryButton_PC: ".btn.btn--large.btn--light.inline-flex.items-center.justify-center.private-client.secondary-btn.shrink-0 > .z-10",
    secondaryBentoButton: "[data-once='click-bento-secondary-button click-secondary-light-button empulsify-button-ripple']",
    PrimaryBentoButton: "[data-once='click-bento-primary-button click-primary-button empulsify-button-ripple']",

    // Tiles
    tile_1: "[data-history-node-id='4421'] .card__heading",
    tile_2: "[data-history-node-id='10426'] .card__heading",
    tile_3: "[data-history-node-id='10316'] .card__heading",

    // Links
    linkText: 'ol a',
    linkCardText: '.prose.prose-base.row-start-2 > p > a',

    // Carousel
    carouselNext: "[aria-label='Next slide'] [role]",
    carouselPrev: '.owl-tools-prev > span[role="presentation"]',

    // Modal
    continueButton: '.ui-dialog-buttonset > button:nth-of-type(1)',
    cancelButton: '.ui-dialog-buttonset > button:nth-of-type(2)',

    // FAQ
    faqExpendContract: '#accordion-button div:nth-of-type(1) div',

    // App Store
    downloadAppStore: "[data-once='click-app-store-icon-apple'] .svg",
    downloadGooglePlay: "[data-once='click-app-store-icon-google'] .svg",

    // Logo
    empowerLogo: '.empower-logo',

    // Social
    facebookButton: "a[title='Facebook']",
    xButton: "a[title='X (fka Twitter)']",
    snapchatButton: "a[title='Snapchat']",
    linkedinButton: "a[title='LinkedIn']",
    instagramButton: "a[title='Instagram']",
    youtubeButton: "a[title='YouTube']",
    tiktokButton: '.icon-social-tiktok',

    // Footer
    securityCenterButton: "[class='flex flex-row gap-x-3']:nth-of-type(1) [data-once]",
    accessibilityButton: "[class='flex flex-row gap-x-3']:nth-of-type(2) [data-once]",
    cybersecurityButton: "div:nth-of-type(1) > .flex.flex-col.gap-4 > li:nth-of-type(1) > .leading-6",
    aboutUsButton: "div:nth-of-type(3) > .flex.flex-col.gap-4 > li:nth-of-type(1) > .leading-6",
    contactUsButton: "div:nth-of-type(4) > .flex.flex-col.gap-4 .leading-6",

    // Login/Register
    loginButton: "[data-once='nav-main-login-register-link click-secondary-light-button empulsify-button-ripple'] [class]",
    registerButton: "[data-once='nav-main-login-register-link click-primary-button empulsify-button-ripple']",

    // Primary Menu
    ProdAndServMenu: "[aria-label='Products & Solutions']",
    ToolsMenu: "[aria-label='Tools']",
    LearnMenu: "[aria-label='Learn']",
    WhyEmpowerMenu: "[aria-label='Why Empower']",

    // Contextual Menu
    IndividualsMenu: "[data-drupal-link-system-path='node\\/12631']",
    PlanSponsorsMenu: "li:nth-of-type(2) > .antialiased.block.font-medium.px-8.text-primary-blue",
    FinancialProfessMenu: "li:nth-of-type(3) > .antialiased.block.font-medium.px-8.text-primary-blue",

    // Submenu
    privetClientMenu: "#dropdown-desktop-0-0 [aria-label='Private Client']",
    personalStrategyMenu: "[data-once='click-secondary-light-button empulsify-button-ripple']:nth-of-type(2) [class]",

    //Menu
    expendSubmenuMain: "[aria-label='Products \\& Services Secondary'] [type] .items-center",
    wealthManagementMenu: "[aria-controls='dropdown-desktop-0-0']",
    highYieldMenu: "nav[aria-label='Products & Services Secondary'] [aria-label='High-yield cash account']",
    rolloverMenu: "nav[aria-label='Products & Services Secondary'] [aria-label='Rollover']",
    irasMenu: "nav[aria-label='Products & Services Secondary'] [aria-label='IRAs']",
    investmentMenu: "nav[aria-label='Products & Services Secondary'] [aria-label='Investment accounts']",

    // Bento
    expectedBentoBox: "[data-drupal-paragraph-name='card_v3']:nth-of-type(3) p",
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // NAVIGATION
  // ═══════════════════════════════════════════════════════════════════════════

  async goto() {
    await this.page.goto('/empulsify/tp-analytics-events-empulsify');
    await this.page.waitForLoadState('domcontentloaded');
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // GET ELEMENT
  // ═══════════════════════════════════════════════════════════════════════════

  getElement(name: string): Locator {
    const selector = this.locators[name];
    if (!selector) {
      throw new Error(`Unknown element: ${name}`);
    }

    // Handle indexed elements
    // if (name === 'primaryButton') {
    //   return this.page.locator(selector).first();
    // }
    // if (name === 'primaryButton_PC') {
    //   return this.page.locator(this.locators['primaryButton']).nth(1);
    // }
    // if (name === 'secondaryButton') {
    //   return this.page.locator(selector).first();
    // }

    return this.page.locator(selector);
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // GET ATTRIBUTES
  // ═══════════════════════════════════════════════════════════════════════════

  async getText(element: Locator): Promise<string> {
    return (await element.textContent() || '').trim();
  }

  async getTitle(element: Locator): Promise<string> {
    return (await element.getAttribute('title')) || '';
  }

  async getLabel(element: Locator): Promise<string> {
    return (await element.getAttribute('aria-label')) || '';
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // CAPTURE EVENTS
  // ═══════════════════════════════════════════════════════════════════════════

  async clickAndCapture(element: Locator, eventType: string, eventName: string) {
    return await captureClickEvent(this.page, element, eventType, eventName);
  }

  async hoverAndCapture(element: Locator, eventType: string, eventName: string) {
    return await captureHoverEvent(this.page, element, eventType, eventName);
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // ACTIONS
  // ═══════════════════════════════════════════════════════════════════════════

  async openLinkModal() {
    await this.page.locator(this.locators['linkText']).click();
  }

  async openProductsMenu() {
    await this.page.locator(this.locators['ProdAndServMenu']).click();
  }

  async expandFAQ() {
    await this.page.locator(this.locators['faqExpendContract']).click();
  }

  async openWealthManagementSubmenu() {
    await this.page.locator(this.locators['wealthManagementMenu']).click();
  }
}