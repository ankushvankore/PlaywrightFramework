# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: D01LoginPage.spec.js >> Test for login with valid credtionals @login, @smoke, @sanity
- Location: tests\D01LoginPage.spec.js:6:5

# Error details

```
Error: page.waitForTimeout: Test ended.
```

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /inventory/
Received string:  "https://www.saucedemo.com/"

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    5 × locator resolved to <html lang="en">…</html>
      - unexpected value "https://www.saucedemo.com/"
  - Test ended.

```

```yaml
- text: Swag Labs
- main:
  - form "Login":
    - textbox "Username": standard_user
    - textbox "Password": secret_sauce
    - button "Login"
  - heading "Accepted usernames are:" [level=4]
  - text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
  - heading "Password for all users:" [level=4]
  - text: secret_sauce
```

# Test source

```ts
  1   | //import {test, expect} from "@playwright/test"
  2   | import { LoginPage } from "../Pages/LoginPage"
  3   | //Add this line later and also comment 1st line later after creating fixture
  4   | import {test, expect} from "../Fixture/baseFixture.js"
  5   | 
  6   | test("Test for login with valid credtionals @login, @smoke, @sanity", async({page})=>{
  7   |     let l1 = new LoginPage(page);
  8   | 
  9   |     l1.gotoLoginPage();
  10  |     l1.directLogin("standard_user", "secret_sauce");
  11  |     await page.waitForTimeout(2000);
> 12  |     expect (page).toHaveURL(/inventory/);
      |                   ^ Error: expect(page).toHaveURL(expected) failed
  13  | 
  14  |     await page.waitForTimeout(2000);
  15  | })
  16  | 
  17  | test("Login test for blank user name and password @login, @smoke", async({page})=>{
  18  |     let l1 = new LoginPage(page);
  19  | 
  20  |     l1.gotoLoginPage();
  21  |     l1.directLogin("", "");
  22  |     let message = await l1.getWarningMessage();
  23  |     await expect (message).toContain("Epic sadface: Username is required");
  24  | 
  25  |     await page.waitForTimeout(2000);
  26  | })
  27  | 
  28  | /*Now you can see some of the steps like open page and login are same for both the
  29  | test cases
  30  | so rather calling those every time lets create a fixtire
  31  | bassfixtrue.js
  32  | */
  33  | 
  34  | test("Test login with fixture @smoke", async({page, loginFixture})=>{
  35  |     console.log("Test with fixtue get complited");
  36  | 
  37  |     await page.waitForTimeout(2000);
  38  | })
  39  | 
  40  | test("Login with JSON Data", async({page, loginWithJson})=>{
  41  |     console.log("Login with JSON Data test executed...");
  42  |     
  43  | 
  44  |     await page.waitForTimeout(2000);
  45  | })
  46  | //To run any test case in slow motion add launchOptions: {slowMo:500} after video:'on',
  47  | //now lets create next page ie inventory page
  48  | 
  49  | //Explain this after explaining all 5 tests
  50  | 
  51  | /*
  52  | if you want to create a shortcuts for executing the tests or other commands those you 
  53  | execute on terminal like npx playwright test ./tests/XXX
  54  | you can create a script / shortcuts in package.jsone file inside script{} tag
  55  | 
  56  | "scripts": {
  57  |     "test": "npx playwright test",
  58  |     "test:LoginPage": "npx playwright test .\\tests\\D01LoginPage.spec.js --headed",
  59  |     "allure:generate": "npx allure generate allure-results --clean -o allure-report",
  60  |     "allure:showReport": "npx allure open allure-report"
  61  |   },
  62  | 
  63  |   while executing simpally call
  64  |   npm run test:LoginPage
  65  | 
  66  | */
  67  | 
  68  | test("Login using CSV file @sanity", async({loginWithCSV, page})=>{
  69  |     console.log("Login with csv file data...");
  70  |     
  71  |     await page.waitForTimeout(2000);
  72  | })
  73  | 
  74  | /*
  75  | We can create multiple configuration files for multiple environments
  76  | copy contents from your playwright.config.js file
  77  | create a new file in same folder with name playwright.config.dev.js 
  78  | inside this file paste the code and change the browser setup from this file to firefox
  79  | 
  80  | you can do the same for other browsers too like edge, chrome, webkit etc
  81  | just create a saperate files for each environment
  82  | while executing call 
  83  | npx playwright test tests/D01LoginPage.spec.js --headed --config=playwright.config.dev.js
  84  | 
  85  | Even if you want you can add this command in package.json file as a shortcut as
  86  | While executing call
  87  | npm run test:dev
  88  | 
  89  | This is called as Multi Environment Testing
  90  | */
  91  | 
  92  | /*
  93  | Using baseURL property from config file
  94  | add baseURL: your URL
  95  | IMP: purposly make these changes in playwright.config.dev.js file so that
  96  | other files may not get distrubed
  97  | 
  98  | in fixture add new fixture
  99  | 
  100 | */
  101 | 
  102 | test("Login with baseUrl fixture @flicky", async({page, loginWithBaseURL})=>{
  103 | 
  104 | })
  105 | 
  106 | test("For taking the screenshot @smoke", async({page})=>{
  107 |     let l1 = new LoginPage(page);
  108 | 
  109 |     l1.gotoLoginPage();
  110 |     l1.directLogin("standard_user", "secret_sauce123");
  111 |     await page.waitForTimeout(2000);
  112 |     expect (page).toHaveURL(/inventory/);
```