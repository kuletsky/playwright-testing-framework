import { Page, Locator } from '@playwright/test';
import { captureClickEvent, captureHoverEvent } from '../utils/dataLayer';
import { BasePage } from './BasePage';

export class AnalyticsPage extends BasePage {
  // private page: Page;

  constructor(page: Page) {
    super(page);
    // this.page = page;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // LOCATORS
  // ═══════════════════════════════════════════════════════════════════════════

  private locators: Record<string, string> = {
    // Buttons
    primaryButton: ".primary_button_blue",
    secondaryButton: ".secondary_white_button",
    secondaryWhiteButton: ".secondary_white_button_with_icon",
    primaryButton_PC: ".primary_button_blue_PC",
    secondaryButton_PC: ".secondary_white_button_PC",
    brandedGoldButton_PC: ".branded_gold_button_PC",

    secondaryBentoButton: ".secondary_bento_button",
    PrimaryBentoButton: ".primary_bento_button",

    // Tiles
    tile_1: "[data-history-node-id='9001'] .card__heading",
    tile_2: "[data-history-node-id='4971'] .card__heading",
    tile_3: "[data-history-node-id='14336'] .card__heading",

    // Links
    linkText_Card1: '[data-once="tools-carousel-card-link-click click-primary-button empulsify-button-ripple emp-amplitude-deviceid"]',
    linkText_Card2: '[data-once="tools-carousel-card-link-click click-secondary-light-button empulsify-button-ripple emp-amplitude-deviceid"]',
    linkText_Card3: '[data-once="tools-carousel-card-link-click empulsify-button-ripple emp-amplitude-deviceid"]',
    linkText_Card4: '[data-once="tools-carousel-card-link-click click-branded-button empulsify-button-ripple emp-amplitude-deviceid"]',

    // Carousel
    carouselNext: "#emp-layouts-linear-gradient--5 .owl-tools-next > span[role='presentation']",
    carouselPrev: '.owl-tools-prev > span[role="presentation"]',
    carouselPause: "[data-emp-carousel='playpause']",

    // Modal
    continueButton: '.ui-dialog-buttonset > button:nth-of-type(1)',
    cancelButton: '.ui-dialog-buttonset > button:nth-of-type(2)',

    // FAQ
    faqExpendContract: '#accordion-button div:nth-of-type(1) div',

    // App Store
    downloadAppStore: "[data-once='click-app-store-icon-apple emp-amplitude-deviceid'] .svg",
    downloadGooglePlay: "[data-once='click-app-store-icon-google emp-amplitude-deviceid'] .svg",

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
    loginButton: "[data-once='nav-main-login-register-link click-secondary-light-button empulsify-button-ripple emp-amplitude-deviceid'] [class]",
    registerButton: "[data-once='nav-main-login-register-link click-primary-button empulsify-button-ripple emp-amplitude-deviceid'] [class]",

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
    // personalStrategyMenu: "[data-once='click-secondary-light-button empulsify-button-ripple']:nth-of-type(2) [class]",

    //Menu
    expendSubmenuMain: "[aria-label='Products \\& Services Secondary'] [type] .items-center",
    wealthManagementMenu: "[aria-controls='dropdown-desktop-0-0']",
    highYieldMenu: "nav[aria-label='Products & Services Secondary'] [aria-label='High-yield cash account']",
    rolloverMenu: "nav[aria-label='Products & Services Secondary'] [aria-label='Rollover']",
    irasMenu: "nav[aria-label='Products & Services Secondary'] [aria-label='IRAs']",
    investmentMenu: "nav[aria-label='Products & Services Secondary'] [aria-label='Investment accounts']",

    // Bento
    expectedBentoBox: "li:has(p:has-text('Card 0'))",
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // NAVIGATION
  // ═══════════════════════════════════════════════════════════════════════════

  async gotoEventsPage() {
    await super.goto('/empulsify/tp-analytic-events');
    await this.page.waitForLoadState('domcontentloaded');
    return this;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // GET ELEMENT
  // ═══════════════════════════════════════════════════════════════════════════

  getElement(name: string): Locator {
    const selector = this.locators[name];
    if (!selector) {
      throw new Error(`Unknown element: ${name}`);
    }

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
    await this.page.locator("[data-once='click-app-store-icon-apple'] .svg").click();
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