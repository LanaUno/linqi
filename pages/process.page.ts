import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";

export class ProcessPage extends BasePage {
    // ==================== LOCATORS ====================
    readonly processNameInput: Locator;
    readonly actionBtn: Locator;
    readonly modulProcessStart: Locator;
    readonly grafPaper: Locator;
    readonly actionsCloseBtn: Locator;
    readonly saveButton: Locator;
    readonly processStartIcon: Locator;

    constructor(page: Page) {
        super(page);
        this.processNameInput = page.locator('[data-automation-id="txt-processName"]');
        this.actionBtn = page.locator('[data-automation-id="pdActions-click"]');
        this.modulProcessStart = page.locator('[data-automation-id="pd-actions-11"]');
        this.grafPaper = page.locator('[class="linqi-graph-paper"]');
        this.actionsCloseBtn = page.locator('[class*="closeButton"]');
        this.saveButton = page.locator('[data-automation-id="pdSave-click"]');
        this.processStartIcon = page.locator('[class*="linqi-graph-nodeContainer"]');
    }

    async fillProcessNameInput(name: string) {
        await this.processNameInput.fill(name);
    }

    async clickActionBtn() {
        await this.click(this.actionBtn);
    }

    async waitForProcessNameField() {
        await this.processNameInput.waitFor({ state: "visible" });
    }

    async dragProcessStart() {
        await this.modulProcessStart.hover();
        await this.page.mouse.down();
        await this.grafPaper.hover();
        await this.page.mouse.up();
    }

    async clickActionsCloseBtn() {
        await this.click(this.actionsCloseBtn);
    }

    async clickSaveButton() {
        await this.click(this.saveButton);
    }
}
