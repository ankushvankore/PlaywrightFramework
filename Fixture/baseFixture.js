import {test as base, expect} from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage.js"
import { readJsonData } from "../Utilities/ReadJson.js";
import { readCSVData, readData } from "../Utilities/ReadFromCSV.js";

export const test = base.extend({
    loginFixture: async({page},use)=>{
        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.directLogin("standard_user", "secret_sauce");

        await use(loginPage);
    },
    loginWithJson:async({page}, use)=>{
        console.log("Data reading from JSON file...");
        

        let data = readJsonData("TestData\\auth.json");
        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.directLogin(data.UserName, data.Password);

        await use(loginPage);
    },

    loginWithCSV:async({page}, use)=>{
        console.log("Data reading from CSV file...");
        
        let data = readCSVData();

        console.log(data);
        
        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.directLogin(data[0].UserName, data[0].Password);

        await use(loginPage);
    }
});



export {expect};

//After this create a test case using this fixture in LoginPage.spec.js file

