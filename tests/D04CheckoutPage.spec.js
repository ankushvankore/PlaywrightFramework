import test from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage"
import { InventoryPage } from "../Pages/InventoryPage"
import { CartPage } from "../Pages/CartPage"
import { CheckoutPage } from "../Pages/CheckoutPage"

let loginPage;
let invPage;
let cartPage;
let checkoutPage;

test("Test for checkout", async({page})=>{
    loginPage = new LoginPage(page);
    invPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.gotoLoginPage();
    invPage = await loginPage.directLogin("standard_user", "secret_sauce");
    await invPage.addToCart("Sauce Labs Fleece Jacket");
    invPage.goToCartPage();
    checkoutPage = cartPage.checkout();

    (await checkoutPage).doCheckout('Ankush', 'Vankore', '416202');

    await page.waitForTimeout(5000);
})