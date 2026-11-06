# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: D05OverviewPage.spec.js >> Overview Test
- Location: tests\D05OverviewPage.spec.js:14:5

# Error details

```
TypeError: checkoutPage.getSummary is not a function
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e10]: Swag Labs
        - button "Cart, 1 items" [ref=e13]:
          - generic [ref=e14]: "1"
      - generic [ref=e15]: "Checkout: Your Information"
    - main [ref=e17]:
      - form "Checkout information" [ref=e19]:
        - generic [ref=e20]:
          - textbox "First Name" [ref=e22]: Ankush
          - textbox "Last Name" [ref=e24]: Vankore
          - textbox "Zip/Postal Code" [active] [ref=e26]: "416202"
        - generic [ref=e28]:
          - button "Cancel" [ref=e29] [cursor=pointer]
          - button "Continue" [ref=e30] [cursor=pointer]
  - contentinfo [ref=e31]:
    - list [ref=e32]:
      - listitem [ref=e33]:
        - link "X" [ref=e34] [cursor=pointer]:
          - /url: https://x.com/saucelabs
      - listitem [ref=e35]:
        - link "Facebook" [ref=e36] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e37]:
        - link "LinkedIn" [ref=e38] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e39]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import test from "@playwright/test"
  2  | import { LoginPage } from "../Pages/LoginPage"
  3  | import { CartPage } from "../Pages/CartPage"
  4  | import { InventoryPage } from "../Pages/InventoryPage"
  5  | import { CheckoutPage } from "../Pages/CheckoutPage"
  6  | import { OverviewPage } from "../Pages/OverviewPage"
  7  | 
  8  | let loginPage;
  9  | let invPage;
  10 | let cartPage;
  11 | let checkoutPage;
  12 | let overviewPage;
  13 | 
  14 | test("Overview Test", async({page})=>{
  15 |     loginPage = new LoginPage(page);
  16 |     invPage = new InventoryPage(page);
  17 |     cartPage = new CartPage(page);
  18 |     checkoutPage = new CheckoutPage(page);
  19 | 
  20 |     await loginPage.gotoLoginPage();
  21 |     invPage = await loginPage.directLogin("standard_user", "secret_sauce");
  22 |     await invPage.addToCart("Sauce Labs Fleece Jacket");
  23 |     invPage.goToCartPage();
  24 |     checkoutPage = cartPage.checkout();
  25 | 
  26 |     (await checkoutPage).doCheckout('Ankush', 'Vankore', '416202');
  27 | 
> 28 |     await checkoutPage.getSummary();
     |                        ^ TypeError: checkoutPage.getSummary is not a function
  29 | 
  30 | 
  31 |     await page.waitForTimeout(2000);
  32 | })
```