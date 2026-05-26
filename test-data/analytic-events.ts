// ═══════════════════════════════════════════════════════════════════════════
// CLICK EVENTS
// ═══════════════════════════════════════════════════════════════════════════

export const clickEventsData = [
  // Buttons
  { element: 'primaryButton', event: 'button_click', eventName: 'button_click_cta', eventDetail: '/' },
  { element: 'secondaryButton', event: 'button_click', eventName: 'button_click_secondary_white', eventDetail: '/' },
  { element: 'primaryButton_PC', event: 'button_click', eventName: 'button_click_cta', eventDetail: '/' },
  { element: 'secondaryButton_PC', event: 'button_click', eventName: 'button_click_secondary_white', eventDetail: '/' },
  { element: 'secondaryWhiteButton', event: 'button_click', eventName: 'button_click_secondary_white', eventDetail: '/' },
  { element: 'brandedGoldButton_PC',    event: 'button_click', eventName: 'button_click_branded',         eventDetail: '/' },

  { element: 'secondaryBentoButton', event: 'button_click', eventName: 'button_click_bento_white',     eventDetail: '/' },
  { element: 'PrimaryBentoButton',   event: 'button_click', eventName: 'button_click_bento_blue',      eventDetail: '/' },

  // // Tiles
  { element: 'tile_1', event: 'tile_event', eventName: 'tile_click', eventDetail: '/press-center/empower-closes-acquisition-prudential-financial-retirement-business' },
  { element: 'tile_2', event: 'tile_event', eventName: 'tile_click', eventDetail: '/the-currency/work/what-to-do-with-your-401k-when-leave-job' },
  { element: 'tile_3', event: 'tile_event', eventName: 'tile_click', eventDetail: '/press-center/empower-appoints-carol-waddell-lead-individual-investors' },

  // // Links
  { element: 'linkText_Card1',     event: 'link_click', eventName: 'link_click', eventDetail: '/' },
  { element: 'linkText_Card2',     event: 'link_click', eventName: 'link_click', eventDetail: '/' },
  { element: 'linkText_Card3',     event: 'link_click', eventName: 'link_click', eventDetail: '/' },
  { element: 'linkText_Card4',     event: 'link_click', eventName: 'link_click', eventDetail: '/' },

  // // Footer
  { element: 'securityCenterButton', event: 'navigation_click', eventName: 'footer_sub_navigation_click', eventDetail: '/participant/#/articles/securityCenter?' },
  { element: 'accessibilityButton',  event: 'navigation_click', eventName: 'footer_sub_navigation_click', eventDetail: '/participant/#/articles/accessibility?' },
  { element: 'cybersecurityButton',  event: 'navigation_click', eventName: 'footer_navigation_click',     eventDetail: '/individuals/about-empower/cybersecurity' },
  { element: 'aboutUsButton',        event: 'navigation_click', eventName: 'footer_navigation_click',     eventDetail: '/about-us' },
  { element: 'contactUsButton',      event: 'navigation_click', eventName: 'footer_navigation_click',     eventDetail: '/contact' },

  // // Login/Register
  { element: 'loginButton',    event: 'navigation_click', eventName: 'login_register_click', eventDetail: '/login-v1' },
  { element: 'registerButton', event: 'navigation_click', eventName: 'login_register_click', eventDetail: '/signup' },

  // // Contextual Menu
  { element: 'IndividualsMenu',      event: 'navigation_click', eventName: 'top_navigation_click', eventDetail: '/home' },
  { element: 'PlanSponsorsMenu',     event: 'navigation_click', eventName: 'top_navigation_click', eventDetail: '/plan-sponsors' },
  { element: 'FinancialProfessMenu', event: 'navigation_click', eventName: 'top_navigation_click', eventDetail: '/financial-professionals' },
  { element: 'expendSubmenuMain',    event: 'navigation_click', eventName: 'sub_navigation_click', eventDetail: 'Expand' },
];

// ═══════════════════════════════════════════════════════════════════════════
// SOCIAL BUTTONS
// ═══════════════════════════════════════════════════════════════════════════

export const socialButtonsData = [
  { element: 'facebookButton', eventDetail: '/officialempowertoday' },
  { element: 'xButton', eventDetail: '/empowertoday?lang=en' },
  { element: 'snapchatButton', eventDetail: '/add/empowertoday' },
  { element: 'linkedinButton', eventDetail: '/company/empowertoday' },
  { element: 'instagramButton', eventDetail: '/officialempowertoday/' },
  { element: 'youtubeButton', eventDetail: '/channel/UCFPLlGp16vPjBb-G7SnUWhQ' },
  { element: 'tiktokButton', eventDetail: '/@empowertoday?lang=en' }, 
];

// ═══════════════════════════════════════════════════════════════════════════
// PRIMARY MENU
// ═══════════════════════════════════════════════════════════════════════════

export const primaryMenuData = [
  { element: 'ProdAndServMenu', eventName: 'main_navigation_click' },
  { element: 'ToolsMenu', eventName: 'main_navigation_click' },
  { element: 'LearnMenu', eventName: 'main_navigation_click' },
  { element: 'WhyEmpowerMenu', eventName: 'main_navigation_click' },
];

// ═══════════════════════════════════════════════════════════════════════════
// FIXED CATEGORY
// ═══════════════════════════════════════════════════════════════════════════

export const fixedCategoryData = [
  { element: 'downloadAppStore', event: 'button_click', eventName: 'app_store_click', category: 'App Store', detail: '' },
  { element: 'downloadGooglePlay', event: 'button_click', eventName: 'app_store_click', category: 'Google Play', detail: '' },
  { element: 'empowerLogo', event: 'social_click', eventName: 'social_click', category: 'Empower logo', detail: '/' },
  { element: 'carouselNext', event: 'tile_event', eventName: 'tile_move', category: 'prev_next', detail: '' },
  { element: 'carouselPrev', event: 'tile_event', eventName: 'tile_move', category: 'prev_next', detail: '' },
  { element: 'carouselPause', event: 'carousel_event', eventName: 'carousel', category: 'pause' },

];

// ═══════════════════════════════════════════════════════════════════════════
// MENU NAVIGATION
// ═══════════════════════════════════════════════════════════════════════════

export const menuData = [
  { element: 'wealthManagementMenu', eventName: 'sub_navigation_click', detail: 'Expand' },
  { element: 'highYieldMenu', eventName: 'navigation_click', detail: '/cash' },
  { element: 'rolloverMenu', eventName: 'navigation_click', detail: '/products-solutions/rollover' },
  { element: 'irasMenu', eventName: 'navigation_click', detail: '/products-solutions/iras' },
  { element: 'investmentMenu', eventName: 'navigation_click', detail: '/products-solutions/investment-accounts' },
];

// ═══════════════════════════════════════════════════════════════════════════
// SUBMENU NAVIGATION
// ═══════════════════════════════════════════════════════════════════════════

export const submenuData = [
  { element: 'privetClientMenu', eventName: 'navigation_click', detail: '/products-solutions/private-client' },
  // { element: 'personalStrategyMenu', eventName: 'navigation_click',     detail: '/products-solutions/personal-strategy' },
];

// ═══════════════════════════════════════════════════════════════════════════
// MODAL
// ═══════════════════════════════════════════════════════════════════════════

export const modalData = [
  { element: 'continueButton', detail: '' },
  { element: 'cancelButton', detail: '' },
];

// ═══════════════════════════════════════════════════════════════════════════
// MENU NAVIGATION
// ═══════════════════════════════════════════════════════════════════════════

export const hoverMenuData = [
  { element: 'wealthManagementMenu', detail: '' },
  { element: 'highYieldMenu', detail: '' },
  { element: 'rolloverMenu', detail: '' },
  { element: 'investmentMenu', detail: '' },
  { element: 'irasMenu', detail: '' },
];

// ═══════════════════════════════════════════════════════════════════════════
// SUBMENU NAVIGATION
// ═══════════════════════════════════════════════════════════════════════════

export const hoverSubmenuData = [
  { element: 'privetClientMenu', detail: '' },
  // { element: 'personalStrategyMenu', detail: '' },
];