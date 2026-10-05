//import {test, expect} from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage"
//Add this line later and also comment 1st line later after creating fixture
import {test, expect} from "../Fixture/baseFixture.js"

test("Test for login with valid credtionals", async({page})=>{
    let l1 = new LoginPage(page);

    l1.gotoLoginPage();
    l1.directLogin("standard_user", "secret_sauce");
    await page.waitForTimeout(2000);
    expect (page).toHaveURL(/inventory/);

    await page.waitForTimeout(2000);
})

test("Login test for blank user name and password", async({page})=>{
    let l1 = new LoginPage(page);

    l1.gotoLoginPage();
    l1.directLogin("", "");
    let message = await l1.getWarningMessage();
    await expect (message).toContain("Epic sadface: Username is required");

    await page.waitForTimeout(2000);
})

/*Now you can see some of the steps like open page and login are same for both the
test cases
so rather calling those every time lets create a fixtire
bassfixtrue.js
*/

test("Test login with fixture", async({page, loginFixture})=>{
    console.log("Test with fixtue get complited");

    await page.waitForTimeout(2000);
})

test("Login with JSON Data", async({page, loginWithJson})=>{
    console.log("Login with JSON Data test executed...");
    

    await page.waitForTimeout(2000);
})
//To run any test case in slow motion add launchOptions: {slowMo:500} after video:'on',
//now lets create next page ie inventory page

//Explain this after explaining all 5 tests

/*
if you want to create a shortcuts for executing the tests or other commands those you 
execute on terminal like npx playwright test ./tests/XXX
you can create a script / shortcuts in package.jsone file inside script{} tag

"scripts": {
    "test": "npx playwright test",
    "test:LoginPage": "npx playwright test .\\tests\\D01LoginPage.spec.js --headed",
    "allure:generate": "npx allure generate allure-results --clean -o allure-report",
    "allure:showReport": "npx allure open allure-report"
  },

  while executing simpally call
  npm run test:LoginPage

*/

test.only("Login using CSV file", async({loginWithCSV, page})=>{
    console.log("Login with csv file data...");
    
    await page.waitForTimeout(2000);
})