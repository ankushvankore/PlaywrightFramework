//import {test, expect} from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage"
//Add this line later and also comment 1st line later after creating fixture
import {test, expect} from "../Fixture/baseFixture.js"

test("Test for login with valid credtionals @login, @smoke, @sanity", async({page})=>{
    let l1 = new LoginPage(page);

    l1.gotoLoginPage();
    l1.directLogin("standard_user", "secret_sauce");
    await page.waitForTimeout(2000);
    expect (page).toHaveURL(/inventory/);

    await page.waitForTimeout(2000);
})

test("Login test for blank user name and password @login, @smoke", async({page})=>{
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

test("Test login with fixture @smoke", async({page, loginFixture})=>{
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

test("Login using CSV file @sanity", async({loginWithCSV, page})=>{
    console.log("Login with csv file data...");
    
    await page.waitForTimeout(2000);
})

/*
We can create multiple configuration files for multiple environments
copy contents from your playwright.config.js file
create a new file in same folder with name playwright.config.dev.js 
inside this file paste the code and change the browser setup from this file to firefox

you can do the same for other browsers too like edge, chrome, webkit etc
just create a saperate files for each environment
while executing call 
npx playwright test tests/D01LoginPage.spec.js --headed --config=playwright.config.dev.js

Even if you want you can add this command in package.json file as a shortcut as
While executing call
npm run test:dev

This is called as Multi Environment Testing
*/

/*
Using baseURL property from config file
add baseURL: your URL
IMP: purposly make these changes in playwright.config.dev.js file so that
other files may not get distrubed

in fixture add new fixture

*/

test("Login with baseUrl fixture @flicky", async({page, loginWithBaseURL})=>{

})

test("For taking the screenshot @smoke", async({page})=>{
    let l1 = new LoginPage(page);

    l1.gotoLoginPage();
    l1.directLogin("standard_user", "secret_sauce123");
    await page.waitForTimeout(2000);
    expect (page).toHaveURL(/inventory/);

    await page.waitForTimeout(2000);

    await expect(page).toHaveURL(/inventory/);
})

/*
Tags in Playwright
This concept is same like tags in cucumber
We can have multiple tags for every test case
You need to add the tags in the title of test case
Tags starts with @ and you can add anywhere in the title of test case
For execution you need to use --grep "@tagName"
Multiple Tags --grep "@tagName|@tagName" note - no @ before second tag
For skip tags --grep-invert "@tagName"
*/
