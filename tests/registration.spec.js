import { locators } from './locators/registrationLocators.js';
import { test, expect } from '../fixtures.js';
const testRegistrationData = require('./testdata/testRegistrationData.js');

test.beforeEach(async ({ page }) => {
    await page.goto('https://qauto.forstudy.space/');
});

test.describe('Registration Form Tests', () => {
    test('Should show an error messages when an invalid name is entered', async ({ page }) => {
        await page.click(locators.signUpButton);
        await page.fill(locators.userNameInputReg, testRegistrationData.invalidUser.firstNameInvalid);
        await page.click(locators.clickOut);
        await expect(page.locator(locators.invalidNameMessage)).toHaveText('Name is invalid');
        await expect(page.locator(locators.userNameInputReg)).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });

    test('Should show an error message when a name is too short or too long', async ({ page }) => {
        await page.click(locators.signUpButton);
        await page.fill(locators.userNameInputReg, testRegistrationData.invalidUser.longFirstName);
        await page.click(locators.clickOut);
        await expect(page.locator(locators.invalidNameLengthMessage)).toHaveText('Name has to be from 2 to 20 characters long');
        await expect(page.locator(locators.userNameInputReg)).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });

    test('Should show an error message that name is required when no name is entered', async ({ page }) => {
        await page.click(locators.signUpButton);
        await page.click(locators.userNameInputReg);
        await page.click(locators.clickOut);
        await expect(page.locator(locators.nameRequiredMessage)).toHaveText('Name required');
        await expect(page.locator(locators.userNameInputReg)).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });
    test('Should show an error message when an invalid last name is entered', async ({ page }) => {
        await page.click(locators.signUpButton);
        await page.fill(locators.lastNameInputReg, testRegistrationData.invalidUser.lastNameInvalid);
        await page.click(locators.clickOut);
        await expect(page.locator(locators.invalidLastnameMessage)).toHaveText('Last name is invalid');
        await expect(page.locator(locators.lastNameInputReg)).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });
    test('Should show an error message when a last name is too short or too long', async ({ page }) => {
        await page.click(locators.signUpButton);
        await page.fill(locators.lastNameInputReg, testRegistrationData.invalidUser.shortLastName);
        await page.click(locators.clickOut);
        await expect(page.locator(locators.invalidLastnameLengthMessage)).toHaveText('Last name has to be from 2 to 20 characters long');
        await expect(page.locator(locators.lastNameInputReg)).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });
    test('Should show an error message that last name is required when no last name is entered', async ({ page }) => {
        await page.click(locators.signUpButton);
        await page.click(locators.lastNameInputReg);
        await page.click(locators.clickOut);
        await expect(page.locator(locators.lastnameRequiredMessag)).toHaveText('Last name required');
        await expect(page.locator(locators.lastNameInputReg)).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });
    test('Should show an error message when invalid email is entered', async ({ page }) => {
        await page.click(locators.signUpButton);
        await page.fill(locators.emailInputReg, testRegistrationData.invalidUser.emailInvalid);
        await page.click(locators.clickOut);
        await expect(page.locator(locators.invalidEmailMessage)).toHaveText('Email is incorrect');
        await expect(page.locator(locators.emailInputReg)).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });
    test('Should show an error message that email is required when no imail is entered', async ({ page }) => {
        await page.click(locators.signUpButton);
        await page.click(locators.emailInputReg);
        await page.click(locators.clickOut);
        await expect(page.locator(locators.emailRequiredMessage)).toHaveText('Email required');
        await expect(page.locator(locators.emailInputReg)).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });
    test('Should show an error message when invalid password is entered', async ({ page }) => {
        await page.click(locators.signUpButton);
        await page.fill(locators.passwordInputReg, testRegistrationData.invalidUser.passwordInvalid);
        await page.click(locators.clickOut);
        await expect(page.locator(locators.invalidPasswordMessage)).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        await expect(page.locator(locators.passwordInputReg)).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });
    test('Should show an error message when no password is entered', async ({ page }) => {
        await page.click(locators.signUpButton);
        await page.click(locators.passwordInputReg);
        await page.click(locators.clickOut);
        await expect(page.locator(locators.passwordRequiredMessage)).toHaveText('Password required');
        await expect(page.locator(locators.passwordInputReg)).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });
    test('Should show an error message when password and repeat password dont match', async ({ page }) => {
        await page.click(locators.signUpButton);
        await page.fill(locators.passwordInputReg, testRegistrationData.invalidUser.passwordNotMatch);
        password: 'Qwerty123',
            await page.fill(locators.repeatPasswordInput, testRegistrationData.validUser.password);
        await page.click(locators.clickOut);
        await expect(page.locator(locators.passwordsNotMatchMessage)).toHaveText('Passwords do not match');
        await expect(page.locator(locators.repeatPasswordInput)).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });
    test('Should show an error message when no repeat password is entered', async ({ page }) => {
        await page.click(locators.signUpButton);
        await page.click(locators.repeatPasswordInput);
        await page.click(locators.clickOut);
        await expect(page.locator(locators.repeatPasswordRequiredMessage)).toHaveText('Re-enter password required');
        await expect(page.locator(locators.repeatPasswordInput)).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });
    test('Should ignore spaces in the name field', async ({ page }) => { //this test will fail because there is a bug in the app
        await page.click(locators.signUpButton);
        await page.fill(locators.userNameInputReg, testRegistrationData.validUser.trimmedFirstNameLastName);
        await page.click(locators.clickOut);
        await expect(page.locator(locators.invalidNameLengthMessage)).toHaveCount(0);
        await expect(page.locator(locators.userNameInputReg)).not.toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });
    test('Should ignore spaces in the last name field', async ({ page }) => { //this test will fail because there is a bug in the app
        await page.click(locators.signUpButton);
        await page.fill(locators.lastNameInputReg, testRegistrationData.validUser.trimmedFirstNameLastName);
        await page.click(locators.clickOut);
        await expect(page.locator(locators.invalidLastnameLengthMessage)).toHaveCount(0);
        await expect(page.locator(locators.lastNameInputReg)).not.toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });
    test('Should successfully register a new user account with valid data and login with the same email', async ({ page }) => {
        const uniqueEmail = testRegistrationData.dynamicEmail();
        await page.click(locators.signUpButton);
        const titleLocator = page.locator(locators.textRegistrationTitle);
        await expect(titleLocator).toBeVisible();

        await test.step('Register a new user', async () => {
            await page.fill(locators.userNameInputReg, testRegistrationData.validUser.firstName);
            await page.fill(locators.lastNameInputReg, testRegistrationData.validUser.lastName);

            await page.fill(locators.emailInputReg, uniqueEmail);
            await page.fill(locators.passwordInputReg, testRegistrationData.validUser.password);
            await page.fill(locators.repeatPasswordInput, testRegistrationData.validUser.repeatPassword);
            await page.click(locators.clickRegisterButton);

            const myProfileLocator = page.locator(locators.myProfileButton);
            await expect(myProfileLocator).toBeVisible();
        });
        await test.step('Log out', async () => {
            await page.click(locators.myProfileButton);
            await page.click(locators.logOutButton);
        });
        await test.step('Login with the same user', async () => {
            await page.click(locators.SignInButton);


            await page.fill(locators.emailFieldSignIn, uniqueEmail);
            await page.fill(locators.passwordFieldSignIn, testRegistrationData.validUser.password);
            await page.click(locators.loginButton);

            const myProfileLocator = page.locator(locators.myProfileButton);
            await expect(myProfileLocator).toBeVisible();
        });

    });
});
