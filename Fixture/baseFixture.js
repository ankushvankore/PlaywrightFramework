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
    },

    loginWithBaseURL: async({page, baseURL}, use)=>{
        const loginPage = new LoginPage(page);
        loginPage.goToWebApplication(baseURL);
        loginPage.directLogin("standard_user", "secret_sauce");

        use(loginPage);
    },
    page:async({page},use, testInfo)=>{
        await use(page);
        //The code after this will execute after every test case
        //Only for every failed testcase we will capture screenshot

        //exectedStatus is always pass
        if(testInfo.status!=testInfo.expectedStatus){
            const ssFile = await page.screenshot({path:`Screenshots/${testInfo.title}.png`});
            await testInfo.attach('screenshot', {body:ssFile, contentType:'image/png'});
            //This will attach the screenshot to the report
        }
    }
});



export {expect};

//After this create a test case using this fixture in LoginPage.spec.js file

