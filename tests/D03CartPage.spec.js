import {test} from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage"
import { InventoryPage } from "../Pages/InventoryPage"
import { CartPage } from "../Pages/CartPage";

let loginPage;
let inventoryPage;
let cartPage;


test.beforeEach("Before each", async({page})=>{
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);

    await loginPage.gotoLoginPage();
    inventoryPage = await loginPage.directLogin("standard_user", "secret_sauce");
    await inventoryPage.addToCart("Sauce Labs Fleece Jacket");
})

test("Get Product name Test", async({page})=>{
    // loginPage = new LoginPage(page);
    // inventoryPage = new InventoryPage(page);
    // cartPage = new CartPage(page);

    // await loginPage.gotoLoginPage();
    // inventoryPage = await loginPage.directLogin("standard_user", "secret_sauce");
    // await inventoryPage.addToCart("Sauce Labs Fleece Jacket");
    
    cartPage = await inventoryPage.goToCartPage();
    let product = await cartPage.getProductName();

    console.log("Product in Cart: " + product);

    await page.waitForTimeout(2000);    
})

test("Remove Product Test", async({page})=>{
    // loginPage = new LoginPage(page);
    // inventoryPage = new InventoryPage(page);
    // cartPage = new CartPage(page);

    // await loginPage.gotoLoginPage();
    // inventoryPage = await loginPage.directLogin("standard_user", "secret_sauce");
    // await inventoryPage.addToCart("Sauce Labs Fleece Jacket");
    
    cartPage = await inventoryPage.goToCartPage();
    let product = await cartPage.getProductName();

    console.log("Product in Cart: " + product);

    let removedProduct = await cartPage.doRemoveProduct();
    console.log("Removed Product is: " + removedProduct);    

    await page.waitForTimeout(2000);    
})

test("Continue shopping Test", async({page})=>{
    // loginPage = new LoginPage(page);
    // inventoryPage = new InventoryPage(page);
    // cartPage = new CartPage(page);

    // await loginPage.gotoLoginPage();
    // inventoryPage = await loginPage.directLogin("standard_user", "secret_sauce");
    // await inventoryPage.addToCart("Sauce Labs Fleece Jacket");
    
    cartPage = await inventoryPage.goToCartPage();
    
    await cartPage.doContinueShopping();
    await inventoryPage.addToCart("Sauce Labs Onesie"); 

    inventoryPage.goToCartPage();
    

    await page.waitForTimeout(2000);    
})

test("Checkout Test", async({page})=>{
    // loginPage = new LoginPage(page);
    // inventoryPage = new InventoryPage(page);
    // cartPage = new CartPage(page);

    // await loginPage.gotoLoginPage();
    // inventoryPage = await loginPage.directLogin("standard_user", "secret_sauce");
    // await inventoryPage.addToCart("Sauce Labs Fleece Jacket");
    
    cartPage = await inventoryPage.goToCartPage();
   
    cartPage.checkout();
    

    await page.waitForTimeout(2000);    
})

//Explain Alluer report
/*
Steps
1. install library using following command
    npm install -D allure-playwright
2. In config file's reporter section make following change
    reporter: [['html'],['line'], ['allure-playwright']],
3. Execute the test and you will see the report in alluer-report folder
    note - this folder contains some files but this is not a report
    to generate a report use following report
    allure generate allure-results --clean -o allure-report
4. To open report call following command on terminal
    allure open allure-report
*/

/*
HTML Report
open https://github.com/nhiendohao/playwright-html
Scroll down
copy this part
    ['playwright-html', { 
      testFolder: 'tests',
      title: 'Playwright HTML Report',
      project: 'QA Tests',
      release: '9.87.6',
      testEnvironment: 'DEV',
      embedAssets: true,
      embedAttachments: true,
      outputFolder: 'playwright-html-report',
      minifyAssets: true,
      startServer: true,
    }]
      paste this after 
      reporter: [['html'],['line'], ['allure-playwright']XXX],
      XXX you need to paste the code here
      make the changes whenever required like title, project, release etc.

Now run you project and after execution you will able to see a very beautiful report

*/