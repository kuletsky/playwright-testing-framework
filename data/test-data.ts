// ═══════════════════════════════════════════════════════════════════════════
// CLICK EVENTS
// ═══════════════════════════════════════════════════════════════════════════

export const clickEventsData = [
  // Buttons
  { element: 'primaryButton',        event: 'button_click', eventName: 'button_click_cta',             eventDetail: '/products-solutions/private-client' },
  { element: 'primaryButton_PC',     event: 'button_click', eventName: 'button_click_cta',             eventDetail: '/products-solutions/private-client' },
  { element: 'brandedGoldButton',    event: 'button_click', eventName: 'button_click_branded',         eventDetail: '/products-solutions/private-client' },
  { element: 'secondaryButton',      event: 'button_click', eventName: 'button_click_secondary_white', eventDetail: '/products-solutions/private-client' },
  { element: 'secondaryButton_PC',   event: 'button_click', eventName: 'button_click_secondary_white', eventDetail: '/products-solutions/private-client' },
  { element: 'secondaryBentoButton', event: 'button_click', eventName: 'button_click_bento_white',     eventDetail: '/products-solutions/private-client' },
  { element: 'PrimaryBentoButton',   event: 'button_click', eventName: 'button_click_bento_blue',      eventDetail: '/products-solutions/private-client' },

  // Tiles
  { element: 'tile_1', event: 'tile_event', eventName: 'tile_click', eventDetail: '/the-currency/money/can-you-retire-a-million-dollars' },
  { element: 'tile_2', event: 'tile_event', eventName: 'tile_click', eventDetail: '/press-center/empower-signs-new-partnership-hard-rock-stadium-and-miami-dolphins' },
  { element: 'tile_3', event: 'tile_event', eventName: 'tile_click', eventDetail: '/the-currency/work/five-habits-of-excellent-retirement-savers' },

  // Links
  { element: 'linkText',     event: 'link_click', eventName: 'link_click', eventDetail: '/' },
  { element: 'linkCardText', event: 'link_click', eventName: 'link_click', eventDetail: '/' },

  // Footer
  { element: 'securityCenterButton', event: 'navigation_click', eventName: 'footer_sub_navigation_click', eventDetail: '/participant/#/articles/securityCenter?' },
  { element: 'accessibilityButton',  event: 'navigation_click', eventName: 'footer_sub_navigation_click', eventDetail: '/participant/#/articles/accessibility?' },
  { element: 'cybersecurityButton',  event: 'navigation_click', eventName: 'footer_navigation_click',     eventDetail: '/individuals/about-empower/cybersecurity' },
  { element: 'aboutUsButton',        event: 'navigation_click', eventName: 'footer_navigation_click',     eventDetail: '/about-us' },
  { element: 'contactUsButton',      event: 'navigation_click', eventName: 'footer_navigation_click',     eventDetail: '/contact' },

  // Login/Register
  { element: 'loginButton',    event: 'navigation_click', eventName: 'login_register_click', eventDetail: '/login-v1' },
  { element: 'registerButton', event: 'navigation_click', eventName: 'login_register_click', eventDetail: '/signup' },

  // Contextual Menu
  { element: 'IndividualsMenu',      event: 'navigation_click', eventName: 'top_navigation_click', eventDetail: '/home' },
  { element: 'PlanSponsorsMenu',     event: 'navigation_click', eventName: 'top_navigation_click', eventDetail: '/plan-sponsors' },
  { element: 'FinancialProfessMenu', event: 'navigation_click', eventName: 'top_navigation_click', eventDetail: '/financial-professionals' },
  { element: 'expendSubmenuMain',    event: 'navigation_click', eventName: 'sub_navigation_click', eventDetail: 'Expand' },
];

// ═══════════════════════════════════════════════════════════════════════════
// SOCIAL BUTTONS
// ═══════════════════════════════════════════════════════════════════════════

export const socialButtonsData = [
  { element: 'facebookButton',  eventDetail: '/officialempowertoday' },
  { element: 'xButton',         eventDetail: '/empowertoday?lang=en' },
  { element: 'snapchatButton',  eventDetail: '/add/empowertoday' },
  { element: 'linkedinButton',  eventDetail: '/company/empowertoday' },
  { element: 'instagramButton', eventDetail: '/officialempowertoday/' },
  { element: 'youtubeButton',   eventDetail: '/channel/UCFPLlGp16vPjBb-G7SnUWhQ' },
  { element: 'tiktokButton',    eventDetail: '/@empowertoday?lang=en' },
];

// ═══════════════════════════════════════════════════════════════════════════
// PRIMARY MENU
// ═══════════════════════════════════════════════════════════════════════════

export const primaryMenuData = [
  { element: 'ProdAndServMenu', eventName: 'main_navigation_click' },
  { element: 'ToolsMenu',       eventName: 'main_navigation_click' },
  { element: 'LearnMenu',       eventName: 'main_navigation_click' },
  { element: 'WhyEmpowerMenu',  eventName: 'main_navigation_click' },
];

// ═══════════════════════════════════════════════════════════════════════════
// FIXED CATEGORY
// ═══════════════════════════════════════════════════════════════════════════

export const fixedCategoryData = [
  { element: 'downloadAppStore',   event: 'button_click', eventName: 'app_store_click', category: 'App Store',    detail: '' },
  { element: 'downloadGooglePlay', event: 'button_click', eventName: 'app_store_click', category: 'Google Play',  detail: '' },
  { element: 'empowerLogo',        event: 'social_click', eventName: 'social_click',    category: 'Empower logo', detail: '/' },
  { element: 'carouselNext',       event: 'tile_event',   eventName: 'tile_move',       category: 'prev_next',    detail: '' },
  { element: 'carouselPrev',       event: 'tile_event',   eventName: 'tile_move',       category: 'prev_next',    detail: '' },
];

// ═══════════════════════════════════════════════════════════════════════════
// MENU NAVIGATION
// ═══════════════════════════════════════════════════════════════════════════

export const menuData = [
  { element: 'wealthManagementMenu', eventName: 'sub_navigation_click', detail: 'Expand' },
  { element: 'highYieldMenu',        eventName: 'navigation_click',     detail: '/cash' },
  { element: 'rolloverMenu',         eventName: 'navigation_click',     detail: '/products-solutions/rollover' },
  { element: 'irasMenu',             eventName: 'navigation_click',     detail: '/products-solutions/iras' },
  { element: 'investmentMenu',       eventName: 'navigation_click',     detail: '/products-solutions/investment-accounts' },
];

// ═══════════════════════════════════════════════════════════════════════════
// SUBMENU NAVIGATION
// ═══════════════════════════════════════════════════════════════════════════

export const submenuData = [
  { element: 'privetClientMenu',     eventName: 'navigation_click',     detail: '/products-solutions/private-client' },
  // { element: 'personalStrategyMenu', eventName: 'navigation_click',     detail: '/products-solutions/personal-strategy' },
];

// ═══════════════════════════════════════════════════════════════════════════
// MODAL
// ═══════════════════════════════════════════════════════════════════════════

export const modalData = [
  { element: 'continueButton', detail: '' },
  { element: 'cancelButton',   detail: '' },
];

// ═══════════════════════════════════════════════════════════════════════════
// MENU NAVIGATION
// ═══════════════════════════════════════════════════════════════════════════

export const hoverMenuData = [
  { element: 'wealthManagementMenu',  detail: '' },
  { element: 'highYieldMenu',         detail: '' },
  { element: 'rolloverMenu',          detail: '' },
  { element: 'investmentMenu',        detail: '' },
  { element: 'irasMenu',              detail: '' },
];

// ═══════════════════════════════════════════════════════════════════════════
// SUBMENU NAVIGATION
// ═══════════════════════════════════════════════════════════════════════════

export const hoverSubmenuData = [
  { element: 'privetClientMenu',     detail: '' },
  // { element: 'personalStrategyMenu', detail: '' },
];

export const marketingParamsData = [
  { element: 'defaultForm',                 paramValue: '',                          skipValue: '',       headingForm: 'Set up your Empower Personal Dashboard™', url: '/signup/onboarding' }, 
  { element: 'RetirementIntentAffiliate',   paramValue: 'RetirementIntentAffiliate', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/tools?marketing_param=RetirementIntentAffiliate' },
  { element: 'zs_tools',                    paramValue: 'zs_tools', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/tools?marketing_param=zs_tools' },
  { element: 'zs_investment',               paramValue: 'zs_investment', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/onboarding?marketing_param=zs_investment' },
  { element: 'zs_retirement',               paramValue: 'zs_retirement', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/tools?marketing_param=zs_retirement' },
  { element: 'zs_networth',                 paramValue: 'zs_networth', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/tools?marketing_param=zs_networth' },
  { element: 'zs_budgeting',                paramValue: 'zs_budgeting', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/tools?marketing_param=zs_budgeting' },
  { element: 'zs_cashflow',                 paramValue: 'zs_cashflow', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/tools?marketing_param=zs_cashflow' },
  { element: 'zs_savingsplanner',           paramValue: 'zs_savingsplanner', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/tools?marketing_param=zs_savingsplanner' },
  { element: 'zs_onboarding',               paramValue: 'zs_onboarding', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/onboarding?marketing_param=zs_onboarding' },
  { element: 'zs_customretirement',         paramValue: 'utmcct=customretirement|zs_retirement', skipValue: 'false',  headingForm: 'Set up your Empower Personal Dashboard™', url: 'signup/tools?marketing_param=zs_customretirement' },
 
  //skipFirstUse parameters
  { element: 'ao_premierira',               paramValue: 'ao_premierira', skipValue: 'true',  headingForm: 'Open an Empower Premier IRA', url: 'signup/premier-ira?marketing_param=ao_premierira' },
  { element: 'ao_premierinvestmentaccount', paramValue: 'ao_premierinvestmentaccount', skipValue: 'true',  headingForm: 'Open an Empower Premier Investment account', url: 'signup/premier-investment-account?marketing_param=ao_premierinvestmentaccount' },
  { element: 'ao_personalstrategy',         paramValue: 'ao_personalstrategy', skipValue: 'true',  headingForm: 'Open an Empower Personal Strategy account', url: 'signup/personal-strategy?marketing_param=ao_personalstrategy' },
  { element: 'ao_personalcash',             paramValue: 'utmcct=empowercash', skipValue: 'true',  headingForm: 'Open an Empower Personal Cash™ account', url: 'signup/cash?marketing_param=ao_personalcash' },

  //cookies
  { element: 'impact_partner',              paramValue: 'impact=true|irclickid=V3V1DCTovxyNTwlXiiSRbSvTUkARvmx4fRFc1k0|impact_partner=Nick Test|impact_partnerID=2836790|utmcsr=Nick Test|utmcmd=affiliate|irgwc=1|', skipValue: 'false',  headingForm: 'Sign up to start using your free Retirement Planner.', url: '401k-compare?impact_partner=Nick%20Test&impact_partnerID=2836790&irclickid=V3V1DCTovxyNTwlXiiSRbSvTUkARvmx4fRFc1k0&irgwc=1&utm_medium=affiliate&utm_source=Nick%20Test' },
  { element: 'referral',                    paramValue: '', skipValue: '',  headingForm: 'Get started with our FREE dashboard', url: 'refer?amount=50&c3ch=Referral&c3nid=client&friend=James%20Del%20Favero&ownerId=005F0000002Bn36IAC&pageMode=referral&talkable_event_category=link_investment_account&talkable_visitor_offer_id=122725245&talkable_visitor_uuid=eaff9a04-aaf7-420f-97ef-6a6ae581b60d&transactionID=687312d0d01c4e578b6b9bd9c53de421' },
  { element: 'investment_checkup',          paramValue: 'zs_investment', skipValue: '',  headingForm: 'Sign up now for free.', url: 'investment-checkup' },

];   