import { test, expect } from "../fixtures";
import { suppressCookieBanner } from "../utils/stabilize";

test.describe("SFD Form functionality", () => {
    test("Verify SFD form is visible", async ({ page, individualsPage, individualsSignupPage, sfdPage }) => {
        await individualsPage.gotoIndividualsPage();
        await individualsPage.clickOpenAccountButton();

        await individualsSignupPage.clickPersonalCashOpenAccount();
        await suppressCookieBanner(page);

        await expect(sfdPage.url).toHaveURL(/\/signup\/cash|cloudflare|challenge|verify/i);
        await expect(sfdPage.heading).toBeVisible();
        await expect(sfdPage.isSubmitButton).toBeVisible();
        await expect(sfdPage.isSubmitButton).toBeDisabled();
        await expect(sfdPage.disclaimer).toBeVisible();
    });

    test("Verify submit button 'Start now' is enabled", async ({ sfdPage }) => {
        await sfdPage.goto();
        await sfdPage.fillOutSfdForm();
        await sfdPage.passwordInput.blur();
        // await sfdPage.sideClck();

        await expect(sfdPage.isSubmitButton).toBeVisible();
        await expect(sfdPage.isSubmitButton).toBeEnabled();
    });

    test("Verify there is no Validation rules when form is filled out", async ({ sfdPage }) => {
        await sfdPage.goto();
        await sfdPage.fillOutSfdForm();
        await sfdPage.passwordInput.blur();
        // await sfdPage.sideClck();

        await expect(sfdPage.firstNameValidationRule).not.toBeVisible();
        await expect(sfdPage.lastNameValidationRule).not.toBeVisible();
        await expect(sfdPage.mobileNumberValidationRule).not.toBeVisible();
        await expect(sfdPage.emailValidationRule).not.toBeVisible();

        await expect(sfdPage.usernameValidationRules.general).not.toBeVisible();
        await expect(sfdPage.usernameValidationRules.length).not.toBeVisible();
        await expect(sfdPage.usernameValidationRules.letters).not.toBeVisible();
        await expect(sfdPage.usernameValidationRules.number).not.toBeVisible();
        await expect(sfdPage.usernameValidationRules.allowedChars).not.toBeVisible();

        await expect(sfdPage.passwordValidationRules.generalFirstLine).not.toBeVisible();
        await expect(sfdPage.passwordValidationRules.generalSecondLine).not.toBeVisible();
        await expect(sfdPage.passwordValidationRules.uppercase).not.toBeVisible();
        await expect(sfdPage.passwordValidationRules.lowercase).not.toBeVisible();
        await expect(sfdPage.passwordValidationRules.number).not.toBeVisible();
        await expect(sfdPage.passwordValidationRules.specialChar).not.toBeVisible();
    });

    test("Verify error red messages are displayed when invalid data is entered", async ({ sfdPage }) => {
        await sfdPage.goto();
        await sfdPage.doNotFillOutSfdForm();
        await sfdPage.passwordInput.blur();

        await expect(sfdPage.firstNameValidationRule).toBeVisible();
        await expect(sfdPage.lastNameValidationRule).toBeVisible();
        await expect(sfdPage.mobileNumberValidationRule).toBeVisible();
        await expect(sfdPage.emailValidationRule).toBeVisible();

        await expect(sfdPage.usernameValidationRules.general).toBeVisible();
        await expect(sfdPage.usernameValidationRules.length).toBeVisible();
        await expect(sfdPage.usernameValidationRules.letters).toBeVisible();
        await expect(sfdPage.usernameValidationRules.number).toBeVisible();
        await expect(sfdPage.usernameValidationRules.allowedChars).toBeVisible();

        await expect(sfdPage.passwordValidationRules.generalFirstLine).toBeVisible();
        await expect(sfdPage.passwordValidationRules.generalSecondLine).toBeVisible();
        await expect(sfdPage.passwordValidationRules.uppercase).toBeVisible();
        await expect(sfdPage.passwordValidationRules.lowercase).toBeVisible();
        await expect(sfdPage.passwordValidationRules.number).toBeVisible();
        await expect(sfdPage.passwordValidationRules.specialChar).toBeVisible();

        await expect(sfdPage.isSubmitButton).toBeVisible();
        await expect(sfdPage.isSubmitButton).toBeDisabled();

        await expect(sfdPage.firstNameValidationRule).toHaveClass(/c-form__input-footer--error/);
        await expect(sfdPage.lastNameValidationRule).toHaveClass(/c-form__input-footer--error/);
        await expect(sfdPage.mobileNumberValidationRule).toHaveClass(/c-form__input-footer--error/);
        await expect(sfdPage.emailValidationRule).toHaveClass(/c-form__input-footer--error/);

        await expect(sfdPage.usernameValidationRules.general).toHaveClass(/c-form__input-footer--error/);
        await expect(sfdPage.usernameValidationRules.length).toHaveClass(/match-invalid/);
        await expect(sfdPage.usernameValidationRules.letters).toHaveClass(/match-invalid/);
        await expect(sfdPage.usernameValidationRules.number).toHaveClass(/match-invalid/);


    });

    test("Verify validation rules appear when Username is focused and they are not red", async ({ sfdPage }) => {
        await sfdPage.goto();
        await sfdPage.usernameInput.focus();

        await expect(sfdPage.usernameValidationRules.general).toBeVisible();
        await expect(sfdPage.usernameValidationRules.length).toBeVisible();
        await expect(sfdPage.usernameValidationRules.letters).toBeVisible();
        await expect(sfdPage.usernameValidationRules.number).toBeVisible();
        await expect(sfdPage.usernameValidationRules.allowedChars).toBeVisible();

        await expect(sfdPage.usernameValidationRules.general).not.toHaveClass(/c-form__input-footer--error/);
        await expect(sfdPage.usernameValidationRules.length).not.toHaveClass(/match-invalid/);
        await expect(sfdPage.usernameValidationRules.letters).not.toHaveClass(/match-invalid/);
        await expect(sfdPage.usernameValidationRules.number).not.toHaveClass(/match-invalid/);
    });

    test("Verify validation rules turn red when Username isn't filled", async ({ sfdPage }) => {
        await sfdPage.goto();
        await sfdPage.usernameInput.focus();
        await sfdPage.usernameInput.blur();

        await expect(sfdPage.usernameValidationRules.general).toHaveClass(/c-form__input-footer--error/);
        await expect(sfdPage.usernameValidationRules.length).toHaveClass(/match-invalid/);
        await expect(sfdPage.usernameValidationRules.letters).toHaveClass(/match-invalid/);
        await expect(sfdPage.usernameValidationRules.number).toHaveClass(/match-invalid/);
        await expect(sfdPage.usernameValidationRules.allowedChars).toBeVisible();
    });

    test("Verify validation rules appear when Password is focused and they are not red", async ({ sfdPage }) => {
        await sfdPage.goto();
        await sfdPage.passwordInput.focus();

        await expect(sfdPage.passwordValidationRules.generalFirstLine).toBeHidden();
        await expect(sfdPage.passwordValidationRules.generalSecondLine).toBeVisible();
        await expect(sfdPage.passwordValidationRules.uppercase).toBeVisible();
        await expect(sfdPage.passwordValidationRules.lowercase).toBeVisible();
        await expect(sfdPage.passwordValidationRules.number).toBeVisible();
        await expect(sfdPage.passwordValidationRules.specialChar).toBeVisible();

        await expect(sfdPage.passwordValidationRules.generalSecondLine).not.toHaveClass(/c-form__input-footer--error/);
        await expect(sfdPage.passwordValidationRules.uppercase).not.toHaveClass(/match-invalid/);
        await expect(sfdPage.passwordValidationRules.lowercase).not.toHaveClass(/match-invalid/);
        await expect(sfdPage.passwordValidationRules.number).not.toHaveClass(/match-invalid/);
        await expect(sfdPage.passwordValidationRules.specialChar).not.toHaveClass(/match-invalid/);
    });

    test("Verify validation rules turn red when Password isn't filled", async ({ sfdPage }) => {
        await sfdPage.goto();
        await sfdPage.passwordInput.focus();
        await sfdPage.passwordInput.blur();

        await expect(sfdPage.passwordValidationRules.generalFirstLine).toHaveClass(/c-form__input-footer--error/);
        await expect(sfdPage.passwordValidationRules.generalSecondLine).toHaveClass(/c-form__input-footer--error/);
        await expect(sfdPage.passwordValidationRules.uppercase).toHaveClass(/match-invalid/);
        await expect(sfdPage.passwordValidationRules.lowercase).toHaveClass(/match-invalid/);
        await expect(sfdPage.passwordValidationRules.number).toHaveClass(/match-invalid/);
        await expect(sfdPage.passwordValidationRules.specialChar).toHaveClass(/match-invalid/);
    });

    test("Verify Name fields reject numbers and accept letters", async ({ sfdPage }) => {
        await sfdPage.goto();
        await sfdPage.firstNameInput.fill('Test123');
        await sfdPage.lastNameInput.fill('Test123');
        await sfdPage.lastNameInput.blur();

        await expect(sfdPage.firstNameValidationRule).toHaveClass(/c-form__input-footer--error/);
        await expect(sfdPage.lastNameValidationRule).toHaveClass(/c-form__input-footer--error/);

        await sfdPage.firstNameInput.fill('TestName');
        await sfdPage.lastNameInput.fill('TestName');
        await sfdPage.lastNameInput.blur();

        await expect(sfdPage.firstNameValidationRule).not.toHaveClass(/c-form__input-footer--error/);
        await expect(sfdPage.lastNameValidationRule).not.toHaveClass(/c-form__input-footer--error/);
    });

    test("Verify Mobile number field functionality and errors", async ({ sfdPage }) => {
        await sfdPage.goto();
        await sfdPage.mobileNumberInput.fill('abcde');
        await sfdPage.mobileNumberInput.blur();
        await expect(sfdPage.mobileNumberInput).toHaveValue("(");
        await expect(sfdPage.mobileNumberValidationRule).toHaveClass(/c-form__input-footer--error/);

        await sfdPage.mobileNumberInput.fill('!@@');
        await sfdPage.mobileNumberInput.blur();
        await expect(sfdPage.mobileNumberInput).toHaveValue("(");
        await expect(sfdPage.mobileNumberValidationRule).toHaveClass(/c-form__input-footer--error/);

        await sfdPage.mobileNumberInput.fill('123456789123');
        await sfdPage.mobileNumberInput.blur();
        await expect(sfdPage.mobileNumberInput).toHaveValue("(123) 456-7891");
        await expect(sfdPage.mobileNumberValidationRule).toBeHidden();
        await expect(sfdPage.mobileNumberValidationRulePositive).toBeVisible();


        let partialPhoneNumber = "";
        for (let i = 0; i < 10; i++) {
            await sfdPage.mobileNumberInput.fill(partialPhoneNumber);
            await sfdPage.mobileNumberInput.blur();

            await expect(sfdPage.mobileNumberValidationRule).toHaveClass(/c-form__input-footer--error/);
            partialPhoneNumber += "5";
        }

        // Final check at exactly 10 digits
        await sfdPage.mobileNumberInput.fill(partialPhoneNumber);
        await sfdPage.mobileNumberInput.blur();
        await expect(sfdPage.mobileNumberValidationRule).toBeHidden();
        await expect(sfdPage.mobileNumberValidationRulePositive).toBeVisible();
    });

    test("Verify Negative Email field functionality and errors", async ({ sfdPage }) => {
        await sfdPage.goto();
        const invalidEmails = [
            "plainText",              // Missing @ and domain
            "missingDomain@.com",     // Dot immediately after @
            "@missingUsername.com",   // Missing username
            "username@domain",        // Missing top-level domain (.com, .net, etc)
            "user name@domain.com",   // Contains spaces
            "user@domain..com",       // Double dots in domain
            "",                        // Empty string
            "user@.com",                // Missing username
        ];

        for (const email of invalidEmails) {
            await sfdPage.emailInput.fill(email);
            await sfdPage.emailInput.blur();

            await expect(sfdPage.emailValidationRule).toHaveClass(/c-form__input-footer--error/);
        }
    });

    test("Verify Positive Email field functionality and errors", async ({ sfdPage }) => {
        await sfdPage.goto();

        const validEmails = [
            "test.user@empower.com",     // Standard dot separator
            "user+mailbox@domain.co.uk", // Plus tagging and multi-part TLD
            "12345@domain.com",          // Purely numeric username
            "u@d.org"                    // Single character limits
        ];

        for (const email of validEmails) {
            await sfdPage.emailInput.fill(email);
            await sfdPage.emailInput.blur();

            // Asserts that the error styling is cleanly removed
            await expect(sfdPage.emailValidationRule).not.toHaveClass(/c-form__input-footer--error/);
        }
    });

    test("Verify Positive username rules comprehensively validate all positive, negative, and symbol boundaries", async ({ sfdPage }) => {
        await sfdPage.goto();

        const inputs = [
            "abc123", // Min length & letters & numbers met perfectly
            "abcde1", // Min number limit met perfectly (5 letters, 1 number)
            "abc-12", // Uses allowed dash symbol
            "abc_12", // Uses allowed underscore symbol
            "abc@12", // Uses allowed at-sign symbol
        ];


        // Execution Loop
        for (const input of inputs) {
            await sfdPage.usernameInput.fill(input);
            await sfdPage.usernameInput.blur();

            // Verify all 4 rule layouts are in their exact expected state simultaneously
            await expect(sfdPage.usernameValidationRules.general).toBeHidden();
            await expect(sfdPage.usernameValidationRules.length).toBeHidden();
            await expect(sfdPage.usernameValidationRules.letters).toBeHidden();
            await expect(sfdPage.usernameValidationRules.number).toBeHidden();
            await expect(sfdPage.usernameValidationRules.allowedChars).toBeHidden();

            await expect(sfdPage.isSubmitButton).toBeVisible();
            await expect(sfdPage.isSubmitButton).toBeDisabled();
        }
    });

    test("Verify Negative username rules comprehensively validate all negative, and symbol boundaries", async ({ sfdPage }) => {
        await sfdPage.goto();

        const scenarios = [
            // === 1. LENGTH BOUNDARY TESTS (Rule: >= 6 chars) ===
            {
                description: "Negative Boundary: Exactly 5 characters (Too short, but has 4 letters and 1 number)",
                input: "abcd1",
                expectations: { general: /c-form__input-footer--error/, length: /match-invalid/, letters: /match-valid/, number: /match-valid/, allowedChars: /match-valid/ }
            },

            // === 2. LETTER COUNT BOUNDARY TESTS (Rule: >= 3 letters) ===
            {
                description: "Negative Boundary: Exactly 2 letters (Too few, but meets length and number rule)",
                input: "ab1234",
                expectations: { general: /c-form__input-footer--error/, length: /match-valid/, letters: /match-invalid/, number: /match-valid/, allowedChars: /match-valid/ }
            },

            // === 3. NUMBER COUNT BOUNDARY TESTS (Rule: >= 1 number) ===
            {
                description: "Negative Boundary: Exactly 0 numbers (Missing a number entirely, but has length and letters)",
                input: "abcdef",
                expectations: { general: /c-form__input-footer--error/, length: /match-valid/, letters: /match-valid/, number: /match-invalid/, allowedChars: /match-valid/ }
            },

            // === 5. FORBIDDEN SYMBOLS TESTS (Rule: Block everything else) ===
            {
                description: "Negative: Injects forbidden symbol ($) into a otherwise completely valid username",
                input: "abc123$",
                expectations: { general: /c-form__input-footer--error/, length: /match-valid/, letters: /match-valid/, number: /match-valid/, allowedChars: /match-invalid/ }
            },
            {
                description: "Negative: Injects a forbidden space character (' ') which often causes bugs",
                input: "abc 123",
                expectations: { general: /c-form__input-footer--error/, length: /match-valid/, letters: /match-valid/, number: /match-valid/, allowedChars: /match-invalid/ }
            },

            // === 6. EXTRA EXTREME EDGE CASE ===
            {
                description: "Negative: Special characters do NOT count towards the 3-letter requirement",
                input: "ab_@12", // 6 chars total, 2 numbers, 2 symbols, but only 2 letters ('a','b')
                expectations: { general: /c-form__input-footer--error/, length: /match-valid/, letters: /match-invalid/, number: /match-valid/, allowedChars: /match-valid/ }
            }
        ];

        for (const scenario of scenarios) {
            await sfdPage.usernameInput.fill(scenario.input);
            await sfdPage.usernameInput.blur();

            // Verify all 4 rule layouts are in their exact expected state simultaneously
            await expect(sfdPage.usernameValidationRules.general).toHaveClass(scenario.expectations.general);
            await expect(sfdPage.usernameValidationRules.length).toHaveClass(scenario.expectations.length);
            await expect(sfdPage.usernameValidationRules.letters).toHaveClass(scenario.expectations.letters);
            await expect(sfdPage.usernameValidationRules.number).toHaveClass(scenario.expectations.number);
            await expect(sfdPage.usernameValidationRules.allowedChars).toBeVisible();

            await expect(sfdPage.isSubmitButton).toBeVisible();
            await expect(sfdPage.isSubmitButton).toBeDisabled();
        }
    });

    test("Verify Positive password rules completely satisfy all validation rules", async ({ sfdPage }) => {
        await sfdPage.goto();

        const validPasswords = [
            "Abcde123", // 8 chars: Uppercase, Lowercase, Number (No special)
            "abcdeF@_", // 8 chars: Lowercase, Number, Special
            "ABCDEf1-", // 8 chars: Uppercase, Number, Special
            "Aa1@bbcc", // 8 chars: Meets all 4 conditions perfectly
        ];

        const allRules = Object.values(sfdPage.passwordValidationRules);

        for (const password of validPasswords) {
            await sfdPage.passwordInput.fill(password);
            await sfdPage.passwordInput.blur();

            // All instructions and criteria headers should completely disappear
            for (const ruleLocator of allRules) {
                await expect(ruleLocator).toBeHidden();

                await expect(sfdPage.isSubmitButton).toBeVisible();
                await expect(sfdPage.isSubmitButton).toBeDisabled();
            }
        }
    });

    test("Verify Negative password rules flag specific missing criteria dynamically", async ({ sfdPage }) => {
        await sfdPage.goto();

        const isError = /c-form__input-footer--error|match-invalid/;

        const negativeScenarios = [
            {
                description: "Too short: Contains 3 criteria but fails length",
                input: "Ab1@", // 4 characters total (Has Upper, Lower, Num, Special)
                expectations: {
                    generalLine1: isError,
                    generalLine2: isError,
                    uppercase: /match-valid/, // individual criteria are technically met
                    lowercase: /match-valid/,
                    number: /match-valid/,
                    specialChar: /match-valid/
                }
            },
            {
                description: "Missing uppercase and numbers: Only has lowercase and special",
                input: "abcdef@@", // 8 characters total (Fails 3-of-4 rule)
                expectations: {
                    generalLine1: isError,
                    generalLine2: isError, // length is fine
                    uppercase: isError,
                    lowercase: /match-valid/,
                    number: isError,
                    specialChar: /match-valid/
                }
            },
            {
                description: "Missing special and lowercase: Only has uppercase and numbers",
                input: "ABCDEF12", // 8 characters total (Fails 3-of-4 rule)
                expectations: {
                    generalLine1: isError,
                    generalLine2: isError, // length is fine
                    uppercase: /match-valid/,
                    lowercase: isError,
                    number: /match-valid/,
                    specialChar: isError
                }
            }
        ];

        for (const scenario of negativeScenarios) {
            await sfdPage.passwordInput.fill(scenario.input);
            await sfdPage.passwordInput.blur();

            // Assert the exact expected broken state for each sub-rule
            if (scenario.input.length < 8) {
                await expect(sfdPage.passwordValidationRules.generalFirstLine).toHaveClass(scenario.expectations.generalLine1);
            }
            await expect(sfdPage.passwordValidationRules.generalSecondLine).toHaveClass(scenario.expectations.generalLine2);
            await expect(sfdPage.passwordValidationRules.uppercase).toHaveClass(scenario.expectations.uppercase);
            await expect(sfdPage.passwordValidationRules.lowercase).toHaveClass(scenario.expectations.lowercase);
            await expect(sfdPage.passwordValidationRules.number).toHaveClass(scenario.expectations.number);
            await expect(sfdPage.passwordValidationRules.specialChar).toHaveClass(scenario.expectations.specialChar);
            await expect(sfdPage.isSubmitButton).toBeVisible();
            await expect(sfdPage.isSubmitButton).toBeDisabled();
        }
    });

    test("Verify password visabilty icon functionality", async ({ sfdPage }) => {
        await sfdPage.goto();
        await sfdPage.passwordInput.fill("Abcde123");
        await expect(sfdPage.passwordInput).toHaveAttribute("type", "password");

        await sfdPage.passwordInput.blur();
        await sfdPage.clickIconPasswordVisibilityToggle();
        await expect(sfdPage.passwordInput).toHaveAttribute("type", "text");
    });
});