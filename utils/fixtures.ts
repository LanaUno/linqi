import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { BasePage } from "../pages/base.page";
import { DashboardPage } from "../pages/dashboard.page";
import { ProcessPage } from "../pages/process.page";
import "dotenv/config";

type MyFixtures = {
    basePage: BasePage;
    loginPage: LoginPage;
    dashBoardPage: DashboardPage;
    processPage: ProcessPage;
};

export const test = base.extend<MyFixtures>({
    basePage: async ({ page }, use) => {
        const basePage = new BasePage(page);
        await use(basePage);
    },

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    dashBoardPage: async ({ page }, use) => {
        const dashBoardPage = new DashboardPage(page);
        await use(dashBoardPage);
    },

    processPage: async ({ page }, use) => {
        const processPage = new ProcessPage(page);
        await use(processPage);
    },
});
