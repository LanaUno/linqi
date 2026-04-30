import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";

export class DashboardPage extends BasePage {
    // ==================== LOCATORS ====================
    readonly processButton: Locator;
    readonly createProcessBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.processButton = page.locator('[data-automation-id="mainNav-Prozess-Dashboard"]');
        this.createProcessBtn = page.locator('[data-automation-id="processList-addProcess-click"]');
    }
    async clickProcessButton() {
        await this.click(this.processButton);
    }

    async clickCreateProcessBtn() {
        await this.click(this.createProcessBtn);
    }
}
