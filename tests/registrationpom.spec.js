import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../src/pages/RegistrationPage.js';
import { LoginPage } from '../src/pages/LoginPage.js';
const testRegistrationData = require('../testdata/testRegistrationData.js');

let registrationPage;
let loginPage;

test.beforeEach(async ({ page }) => {
    registrationPage = new RegistrationPage(page);
    await registrationPage.open();
});

test.describe('Registration Form Tests (POM)', () => {
    test('Should show an error messages when an invalid name is entered', async ({ page }) => {
        await registrationPage.openRegistrationModal();
        await registrationPage.registrationForm.userNameInputReg.fill(testRegistrationData.invalidUser.firstNameInvalid);
        await registrationPage.registrationForm.clickOutsideField();
        const errorTextElement = await registrationPage.registrationForm.getErrorText('Name is invalid');
        await expect(errorTextElement).toBeVisible();
        await expect(registrationPage.registrationForm.userNameInputReg).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });

    test('Should show an error message when a name is too short or too long', async ({ page }) => {
        await registrationPage.openRegistrationModal();
        await registrationPage.registrationForm.userNameInputReg.fill(testRegistrationData.invalidUser.longFirstName);
        await registrationPage.registrationForm.clickOutsideField();
        const errorTextElement = await registrationPage.registrationForm.getErrorText('Name has to be from 2 to 20 characters long');
        await expect(errorTextElement).toBeVisible();
        await expect(registrationPage.registrationForm.userNameInputReg).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });

    test('Should show an error message that name is required when no name is entered', async ({ page }) => {
        await registrationPage.openRegistrationModal();
        await registrationPage.registrationForm.userNameInputReg.click();
        await registrationPage.registrationForm.clickOutsideField();
        const errorTextElement = await registrationPage.registrationForm.getErrorText('Name required');
        await expect(errorTextElement).toBeVisible();
        await expect(registrationPage.registrationForm.userNameInputReg).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });

    test('Should show an error message when an invalid last name is entered', async ({ page }) => {
        await registrationPage.openRegistrationModal();
        await registrationPage.registrationForm.lastNameInputReg.fill(testRegistrationData.invalidUser.lastNameInvalid);
        await registrationPage.registrationForm.clickOutsideField();
        const errorTextElement = await registrationPage.registrationForm.getErrorText('Last name is invalid');
        await expect(errorTextElement).toBeVisible();
        await expect(registrationPage.registrationForm.lastNameInputReg).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });

    test('Should show an error message when a last name is too short or too long', async ({ page }) => {
        await registrationPage.openRegistrationModal();
        await registrationPage.registrationForm.lastNameInputReg.fill(testRegistrationData.invalidUser.shortLastName);
        await registrationPage.registrationForm.clickOutsideField();
        const errorTextElement = await registrationPage.registrationForm.getErrorText('Last name has to be from 2 to 20 characters long');
        await expect(errorTextElement).toBeVisible();
        await expect(registrationPage.registrationForm.lastNameInputReg).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });

    test('Should show an error message that last name is required when no last name is entered', async ({ page }) => {
        await registrationPage.openRegistrationModal();
        await registrationPage.registrationForm.lastNameInputReg.click();
        await registrationPage.registrationForm.clickOutsideField();
        const errorTextElement = await registrationPage.registrationForm.getErrorText('Last name required');
        await expect(errorTextElement).toBeVisible();
        await expect(registrationPage.registrationForm.lastNameInputReg).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });

    test('Should show an error message when invalid email is entered', async ({ page }) => {
        await registrationPage.openRegistrationModal();
        await registrationPage.registrationForm.emailInputReg.fill(testRegistrationData.invalidUser.emailInvalid);
        await registrationPage.registrationForm.clickOutsideField();
        const errorTextElement = await registrationPage.registrationForm.getErrorText('Email is incorrect');
        await expect(errorTextElement).toBeVisible();
        await expect(registrationPage.registrationForm.emailInputReg).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });

    test('Should show an error message that email is required when no imail is entered', async ({ page }) => {
        await registrationPage.openRegistrationModal();
        await registrationPage.registrationForm.emailInputReg.click();
        await registrationPage.registrationForm.clickOutsideField();
        const errorTextElement = await registrationPage.registrationForm.getErrorText('Email required');
        await expect(errorTextElement).toBeVisible();
        await expect(registrationPage.registrationForm.emailInputReg).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });

    test('Should show an error message when invalid password is entered', async ({ page }) => {
        await registrationPage.openRegistrationModal();
        await registrationPage.registrationForm.passwordInputReg.fill(testRegistrationData.invalidUser.passwordInvalid);
        await registrationPage.registrationForm.clickOutsideField();
        const errorTextElement = await registrationPage.registrationForm.getErrorText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        await expect(errorTextElement).toBeVisible();
        await expect(registrationPage.registrationForm.passwordInputReg).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });

    test('Should show an error message when no password is entered', async ({ page }) => {
        await registrationPage.openRegistrationModal();
        await registrationPage.registrationForm.passwordInputReg.click();
        await registrationPage.registrationForm.clickOutsideField();
        const errorTextElement = await registrationPage.registrationForm.getErrorText('Password required');
        await expect(errorTextElement).toBeVisible();
        await expect(registrationPage.registrationForm.passwordInputReg).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });

    test('Should show an error message when password and repeat password dont match', async ({ page }) => {
        await registrationPage.openRegistrationModal();
        await registrationPage.registrationForm.passwordInputReg.fill(testRegistrationData.validUser.password);
        await registrationPage.registrationForm.repeatPasswordInput.fill(testRegistrationData.invalidUser.passwordNotMatch)
        await registrationPage.registrationForm.clickOutsideField();
        const errorTextElement = await registrationPage.registrationForm.getErrorText('Passwords do not match');
        await expect(errorTextElement).toBeVisible();
        await expect(registrationPage.registrationForm.repeatPasswordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });

    test('Should show an error message when no repeat password is entered', async ({ page }) => {
        await registrationPage.openRegistrationModal();
        await registrationPage.registrationForm.repeatPasswordInput.click();
        await registrationPage.registrationForm.clickOutsideField();
        const errorTextElement = await registrationPage.registrationForm.getErrorText('Re-enter password required');
        await expect(errorTextElement).toBeVisible();
        await expect(registrationPage.registrationForm.repeatPasswordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });

    test('Should ignore spaces in the name field', async ({ page }) => { //This test will fail because there is a bug in the app
        await registrationPage.openRegistrationModal();
        await registrationPage.registrationForm.userNameInputReg.fill(testRegistrationData.validUser.trimmedFirstNameLastName);
        await registrationPage.registrationForm.clickOutsideField();
        await expect(registrationPage.registrationForm.getAllErrorMessages()).toHaveCount(0);
        await expect(registrationPage.registrationForm.userNameInputReg).not.toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });

    test('Should ignore spaces in the last name field', async ({ page }) => { //This test will fail because there is a bug in the app
        await registrationPage.openRegistrationModal();
        await registrationPage.registrationForm.lastNameInputReg.fill(testRegistrationData.validUser.trimmedFirstNameLastName);
        await registrationPage.registrationForm.clickOutsideField();
        await expect(registrationPage.registrationForm.getAllErrorMessages()).toHaveCount(0);
        await expect(registrationPage.registrationForm.lastNameInputReg).not.toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });

    test('Should successfully register a new user account with valid data and login with the same email', async ({ page }) => {
        const uniqueEmail = testRegistrationData.dynamicEmail();
        await registrationPage.openRegistrationModal();
        await registrationPage.registrationForm.fillRegistrationForm(
            testRegistrationData.validUser.firstName,
            testRegistrationData.validUser.lastName,
            uniqueEmail,
            testRegistrationData.validUser.password,
            testRegistrationData.validUser.repeatPassword
        );
        await registrationPage.registrationForm.clickRegisterButton();
        await registrationPage.isMyProfileVisible();


        await test.step('Log out', async () => {
            loginPage = new LoginPage(page);
            await loginPage.logout();
        });

        await test.step('Login with the same user', async () => {
            loginPage = new LoginPage(page);
            await loginPage.login(uniqueEmail, testRegistrationData.validUser.password);
            await loginPage.isLoggedIn();

        });
    });

});

