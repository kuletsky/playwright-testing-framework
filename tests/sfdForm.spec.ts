import { test, expect } from "../fixtures";
import { suppressCookieBanner } from "../utils/stabilize";

test.describe("SFD Form functionality", () => {
    test("Verify SFD form is visible", async ({ page, individualsPage, individualsSignupPage, sfdPage }) => {
        await individualsPage.gotoIndividualsPage();
        await individualsPage.clickOpenAccountButton();

        await individualsSignupPage.clickPersonalCashOpenAccount();
        await suppressCookieBanner(page);

        // await expect(page).toHaveURL(/\/signup\/cash|cloudflare|challenge|verify/i);
        await expect(sfdPage.url).toHaveURL(/\/signup\/cash|cloudflare|challenge|verify/i);
        await expect(sfdPage.heading).toBeVisible();
        await expect(sfdPage.isSubmitButton).toBeVisible();
        await expect(sfdPage.isSubmitButton).toBeDisabled();
    });

    test("Verify submit button 'Start now' is enabled", async ({ sfdPage }) => {
        await sfdPage.goto();
        await sfdPage.fillOutSfdForm();
        await sfdPage.sideClck();

        await expect(sfdPage.isSubmitButton).toBeVisible();
        await expect(sfdPage.isSubmitButton).toBeEnabled();
    });

    test("Verify there is no Validation rules when form is filled out", async ({ sfdPage }) => {
        await sfdPage.goto();
        await sfdPage.fillOutSfdForm();
        await sfdPage.sideClck();

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
        await sfdPage.sideClck();


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
});