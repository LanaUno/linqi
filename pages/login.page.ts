import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
    // ==================== LOCATORS ====================
    readonly userLogin: Locator;
    readonly userPassword: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.userLogin = page.locator('[data-automation-id="login-username"]');
        this.userPassword = page.locator('[data-automation-id="login-password"]');
        this.loginButton = page.locator('[data-automation-id="login-submit"]');
    }

    async login(login: any, password: any): Promise<void> {
        await this.userLogin.fill(login);
        await this.userPassword.fill(password);
        await this.click(this.loginButton);
    }
}
