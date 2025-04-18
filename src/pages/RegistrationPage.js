import { BasePage } from './BasePage.js';
import { RegistrationForm } from '../components/RegistrationForm.js';
import { expect } from '@playwright/test';


export class RegistrationPage extends BasePage {
    constructor(page) {
        super(page, 'https://guest:welcome2qauto@qauto.forstudy.space/');
        this.signUpBtn = '.hero-descriptor_btn.btn.btn-primary';
        this.registrationForm = new RegistrationForm(page);
        this.myProfileButton = this.page.locator('button:has-text("My profile")');
    }
    async openRegistrationModal() {
        await this.page.click(this.signUpBtn);
    }

    async userRegistration(userName, lastName, email, password, repeatPassword) {
        await this.registrationForm.fillRegistrationForm(userName, lastName, email, password, repeatPassword);
        await this.registrationForm.clickRegisterButton();
    }

    async isMyProfileVisible() {
        await expect(this.myProfileButton).toBeVisible();
    }
}
