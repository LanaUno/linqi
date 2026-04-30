import { expect } from "@playwright/test";
import { test } from "../utils/fixtures";
import * as data from "../testData/data";
import { ProcessPage } from "../pages/process.page";

test.describe("Linqi", () => {
    test.beforeEach(async ({ page, basePage, loginPage }) => {
        await basePage.goto("/");
        await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
    });
    test("C001 Add process", async ({ dashBoardPage, context }) => {
        await dashBoardPage.clickProcessButton();
        const [newPage] = await Promise.all([context.waitForEvent("page"), dashBoardPage.clickCreateProcessBtn()]);
        await newPage.waitForLoadState();
        const processPage = new ProcessPage(newPage);
        await processPage.waitForProcessNameField();
        await processPage.fillProcessNameInput(data.processName);
        await processPage.clickActionBtn();
        await processPage.dragProcessStart();
        await processPage.clickActionsCloseBtn();
        await processPage.clickSaveButton();

        const processName = await processPage.processNameInput.inputValue();

        expect(processName).toBe(data.processName);

        const parent = processPage.grafPaper;
        const child = parent.locator(processPage.processStartIcon)

        await expect(child).toBeVisible();
    });
});
