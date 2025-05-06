import { expect } from '@playwright/test';

export class RegistrationForm {
    constructor(page) {
        this.page = page;
        this.userNameInputReg = page.locator('#signupName');
        this.lastNameInputReg = page.locator('#signupLastName');
        this.emailInputReg = page.locator('#signupEmail');
        this.passwordInputReg = page.locator('#signupPassword');
        this.repeatPasswordInput = page.locator('#signupRepeatPassword');
        this.registerButton = page.locator('button:has-text("Register")');
        this.clickOut = page.locator('.modal-header');
    }
    async fillRegistrationForm(userName, lastName, email, password, repeatPassword) {
        await this.userNameInputReg.fill(userName);
        await this.lastNameInputReg.fill(lastName);
        await this.emailInputReg.fill(email);
        await this.passwordInputReg.fill(password);
        await this.repeatPasswordInput.fill(repeatPassword);
    }

    async clickRegisterButton() {
        await this.registerButton.click();
    }

    async getErrorText(text) {
        return this.page.locator(`p:has-text("${text}")`);
    }

    getAllErrorMessages() {
        return this.page.locator('p'); //Used to verify that no error message is displayed when long name has spaces 
    }

    async clickOutsideField() {
        await this.clickOut.click();
    }

}
