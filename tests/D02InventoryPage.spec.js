//import {test, expect} from "../Fixture/baseFixture.js";
import {test, expect} from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage.js"
import { InventoryPage } from "../Pages/InventoryPage.js";
import { CartPage } from "../Pages/CartPage.js";

/*
test("Test for getting product count", async({page})=>{
    let l1 = new LoginPage(page);
    await l1.gotoLoginPage();
    let invPage = new InventoryPage(page);
    invPage = await l1.directLogin("standard_user", "secret_sauce");

    //uncomment the code of inventory page in login page?

    await page.waitForTimeout(2000);
    let count = await invPage.getTotalProductCount();
    console.log("Total Products: " + count);    

    await page.waitForTimeout(2000);
})

test("Test for product details", async({page})=>{
    let l1 = new LoginPage(page);
    await l1.gotoLoginPage();
    let invPage = new InventoryPage(page);
    invPage = await l1.directLogin("standard_user", "secret_sauce");

    await invPage.getProductDetails();

    await page.waitForTimeout(2000);
})

test("Test for add product to cart", async({page})=>{
    let l1 = new LoginPage(page);
    await l1.gotoLoginPage();
    let invPage = new InventoryPage(page);
    invPage = await l1.directLogin("standard_user", "secret_sauce");

    await invPage.getProductDetails();

    await invPage.addToCart("Sauce Labs Bike Light");

    await page.waitForTimeout(2000);
})

test("Test for open cart page", async({page})=>{
    let l1 = new LoginPage(page);
    await l1.gotoLoginPage();
    let invPage = new InventoryPage(page);
    invPage = await l1.directLogin("standard_user", "secret_sauce");

    await invPage.getProductDetails();
    await invPage.addToCart("Sauce Labs Bike Light");

    let cartPage = new CartPage(page);
    cartPage = await invPage.goToCartPage();

    await page.waitForTimeout(2000);
})*/

//First show this part then show the part of hook beforeTest

let loginPage;
let invPage;

test.beforeEach(async({page})=>{
    loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    invPage = new InventoryPage(page);
    invPage = await loginPage.directLogin("standard_user", "secret_sauce");
})

test("Test for getting product count", async({page})=>{
    await page.waitForTimeout(2000);
    let count = await invPage.getTotalProductCount();
    console.log("Total Products: " + count);    

    await page.waitForTimeout(2000);
})

test("Test for product details", async({page})=>{
    await invPage.getProductDetails();

    await page.waitForTimeout(2000);
})

test("Test for add product to cart", async({page})=>{  
    await invPage.getProductDetails();

    await invPage.addToCart("Sauce Labs Bike Light");

    await page.waitForTimeout(2000);
})

test("Test for open cart page", async({page})=>{    
    await invPage.getProductDetails();
    await invPage.addToCart("Sauce Labs Bike Light");

    let cartPage = new CartPage(page);
    cartPage = await invPage.goToCartPage();

    await page.waitForTimeout(2000);
})
