import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { suppressCookieBanner } from "@utils/stabilize";

export class SfdPage extends BasePage {
    readonly heading: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator
    readonly suffixDropdown: Locator;
    readonly mobileNumberInput: Locator
    readonly emailInput: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly disclaimer: Locator;

    readonly isSubmitButton: Locator;
    readonly firstNameValidationRule: Locator;
    readonly lastNameValidationRule: Locator;
    readonly mobileNumberValidationRule: Locator;
    readonly emailValidationRule: Locator;
    readonly usernameValidationRules: { [key: string]: Locator };
    readonly passwordValidationRules: { [key: string]: Locator };
    readonly mobileNumberValidationRulePositive: Locator;


    constructor(page: Page) {
        super(page);
        this.heading = page.getByText('Open an Empower Personal Cash™ account');
        this.disclaimer = page.getByText(/and to receive marketing calls and text messages to the mobile number provided/);

        this.firstNameInput = page.getByRole('textbox', { name: 'First name' });
        this.lastNameInput = page.getByRole('textbox', { name: 'Last name' });
        this.suffixDropdown = page.getByLabel('Suffix');
        this.mobileNumberInput = page.getByRole('textbox', { name: 'Mobile number' });
        this.emailInput = page.getByRole('textbox', { name: 'Email' });
        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });

        this.isSubmitButton = page.locator('button[type="submit"]');
        this.firstNameValidationRule = page.getByText('Error: Enter a valid first');
        this.lastNameValidationRule = page.getByText('Error: Enter a valid last');
        this.mobileNumberValidationRule = page.getByText('Error: Please enter a valid');
        this.mobileNumberValidationRulePositive = page.getByText('Used to verify for security purposes and to contact you about your account');
        this.emailValidationRule = page.getByText('Error: Enter a valid email');
        this.usernameValidationRules = {
            general: page.getByText('Username must meet the following requirements:'),
            length: page.getByText('Must be at least 6 characters'),
            letters: page.getByText('Must include at least 3 letters'),
            number: page.getByText('Must include at least 1 number'),
            allowedChars: page.getByText('Other allowed characters: @ - _'),
        }
        this.passwordValidationRules = {
            generalFirstLine: page.getByText('Password must be at least 8 characters.'),
            generalSecondLine: page.getByText('Password must be 8-63 characters and contain 3 of the following:'),
            uppercase: page.getByText('Uppercase letter'),
            lowercase: page.getByText('Lowercase letter'),
            number: page.locator('.password-param--num'),
            // specialChar: page.getByText('Special character: @ - _'),
            specialChar: page.getByText('Special character: !@#$%&*-_+=.?'),
        }
    }

    async goto() {
        await super.goto("/signup/cash?marketing_param=ao_personalcash");
        await suppressCookieBanner(this.page);
    }

    get url() {
        return this.page;
    }

    async fillOutSfdForm() {
        await this.firstNameInput.fill('TestFirstName');
        await this.lastNameInput.fill('TestLastName');
        await this.suffixDropdown.selectOption('Jr.');
        await this.mobileNumberInput.fill('(386) 538-1111');
        await this.emailInput.fill('testUser@wef.com');
        await this.usernameInput.fill('testUser1');
        await this.passwordInput.fill('Abrico1@');
    }

    async doNotFillOutSfdForm() {
        await this.firstNameInput.click();
        await this.lastNameInput.click();
        await this.lastNameInput.click();
        await this.mobileNumberInput.click();
        await this.emailInput.click();
        await this.usernameInput.click();
        await this.passwordInput.click();
    }

    async sideClck() {
        await this.page.locator('.c-form__disclosure.js-hide-on-mobile-reg .u-copy-tiny p').click();
    }

    async clickIconPasswordVisibilityToggle() {
        const visibilityToggle = this.page.getByRole('button', { name: /Password visibility/i });
        await visibilityToggle.click();
    }
}