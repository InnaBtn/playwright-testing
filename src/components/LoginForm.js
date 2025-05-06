export class LoginForm {
    constructor(page) {
        this.page = page;
        this.signInButton = page.locator('button:has-text("Sign In")');
        this.emailFieldSignIn = page.locator('#signinEmail');
        this.passwordFieldSignIn = page.locator('#signinPassword');
        this.loginButton = page.locator('button:has-text("Login")');
    }

    async fillLoginForm(email, password) {
        await this.emailFieldSignIn.fill(email);
        await this.passwordFieldSignIn.fill(password);
    }

    async submitLogin() {
        await this.loginButton.click();
    }

    async openLoginModal() {
        await this.signInButton.click();
    }
}
