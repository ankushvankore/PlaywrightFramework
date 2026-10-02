import test from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage"
import { CartPage } from "../Pages/CartPage"
import { InventoryPage } from "../Pages/InventoryPage"
import { CheckoutPage } from "../Pages/CheckoutPage"
import { OverviewPage } from "../Pages/OverviewPage"

let loginPage;
let invPage;
let cartPage;
let checkoutPage;
let overviewPage;

test("Overview Test", async({page})=>{
    loginPage = new LoginPage(page);
    invPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.gotoLoginPage();
    invPage = await loginPage.directLogin("standard_user", "secret_sauce");
    await invPage.addToCart("Sauce Labs Fleece Jacket");
    invPage.goToCartPage();
    checkoutPage = cartPage.checkout();

    overviewPage = (await checkoutPage).doCheckout('Ankush', 'Vankore', '416202');

    (await overviewPage).getSummary();
    (await overviewPage).completeCheckoutProcess();


    await page.waitForTimeout(2000);
})

//Try to execute all tests via npx playwright test --heaed(without any test case name)

/*
Now lets create some test data inside TestData folder
1. create auth.json file inside TestData folder
*/