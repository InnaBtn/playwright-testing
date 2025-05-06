import { LoginForm } from '../components/LoginForm.js';
import { BasePage } from './BasePage.js';
import { expect } from '@playwright/test';


export class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.loginForm = new LoginForm(page);
        this.myProfileButton = page.locator('button:has-text("My profile")');
        this.logoutButton = page.locator('button:has-text("Logout")');
    }

    async login(email, password) {
        await this.loginForm.openLoginModal();
        await this.loginForm.fillLoginForm(email, password);
        await this.loginForm.submitLogin();
    }

    async logout() {
        await this.myProfileButton.click();
        await this.logoutButton.click();
    }

    async isLoggedIn() {
        await expect(this.myProfileButton).toBeVisible();
    }
}
