# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: D01LoginPage.spec.js >> Login using CSV file
- Location: tests\D01LoginPage.spec.js:68:6

# Error details

```
Error: page.waitForTimeout: Test ended.
```

# Test source

```ts
  1  | //import {test, expect} from "@playwright/test"
  2  | import { LoginPage } from "../Pages/LoginPage"
  3  | //Add this line later and also comment 1st line later after creating fixture
  4  | import {test, expect} from "../Fixture/baseFixture.js"
  5  | 
  6  | test("Test for login with valid credtionals", async({page})=>{
  7  |     let l1 = new LoginPage(page);
  8  | 
  9  |     l1.gotoLoginPage();
  10 |     l1.directLogin("standard_user", "secret_sauce");
  11 |     await page.waitForTimeout(2000);
  12 |     expect (page).toHaveURL(/inventory/);
  13 | 
  14 |     await page.waitForTimeout(2000);
  15 | })
  16 | 
  17 | test("Login test for blank user name and password", async({page})=>{
  18 |     let l1 = new LoginPage(page);
  19 | 
  20 |     l1.gotoLoginPage();
  21 |     l1.directLogin("", "");
  22 |     let message = await l1.getWarningMessage();
  23 |     await expect (message).toContain("Epic sadface: Username is required");
  24 | 
  25 |     await page.waitForTimeout(2000);
  26 | })
  27 | 
  28 | /*Now you can see some of the steps like open page and login are same for both the
  29 | test cases
  30 | so rather calling those every time lets create a fixtire
  31 | bassfixtrue.js
  32 | */
  33 | 
  34 | test("Test login with fixture", async({page, loginFixture})=>{
  35 |     console.log("Test with fixtue get complited");
  36 | 
  37 |     await page.waitForTimeout(2000);
  38 | })
  39 | 
  40 | test("Login with JSON Data", async({page, loginWithJson})=>{
  41 |     console.log("Login with JSON Data test executed...");
  42 |     
  43 | 
  44 |     await page.waitForTimeout(2000);
  45 | })
  46 | //To run any test case in slow motion add launchOptions: {slowMo:500} after video:'on',
  47 | //now lets create next page ie inventory page
  48 | 
  49 | //Explain this after explaining all 5 tests
  50 | 
  51 | /*
  52 | if you want to create a shortcuts for executing the tests or other commands those you 
  53 | execute on terminal like npx playwright test ./tests/XXX
  54 | you can create a script / shortcuts in package.jsone file inside script{} tag
  55 | 
  56 | "scripts": {
  57 |     "test": "npx playwright test",
  58 |     "test:LoginPage": "npx playwright test .\\tests\\D01LoginPage.spec.js --headed",
  59 |     "allure:generate": "npx allure generate allure-results --clean -o allure-report",
  60 |     "allure:showReport": "npx allure open allure-report"
  61 |   },
  62 | 
  63 |   while executing simpally call
  64 |   npm run test:LoginPage
  65 | 
  66 | */
  67 | 
  68 | test.only("Login using CSV file", async({loginWithCSV, page})=>{
  69 |     console.log("Login with csv file data...");
  70 |     
> 71 |     page.waitForTimeout(2000);
     |          ^ Error: page.waitForTimeout: Test ended.
  72 | })
```