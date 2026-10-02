import {test as base, expect} from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage.js"

export const test = base.extend({
    loginFixture: async({page},use)=>{
        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.directLogin("standard_user", "secret_sauce");

        await use(loginPage);
    }
})

export {expect};

//After this create a test case using this fixture in LoginPage.spec.js file