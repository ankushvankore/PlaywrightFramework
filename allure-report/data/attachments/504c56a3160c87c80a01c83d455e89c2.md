# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: D05OverviewPage.spec.js >> Overview Test
- Location: tests\D05OverviewPage.spec.js:14:5

# Error details

```
TypeError: checkoutPage.doCheckout is not a function
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
      - generic [ref=e15]: Your Cart
    - main [ref=e17]:
      - generic [ref=e18]:
        - generic [ref=e19]:
          - generic [ref=e20]: QTY
          - generic [ref=e21]: Description
          - generic [ref=e22]:
            - generic [ref=e23]: "1"
            - generic [ref=e24]:
              - button "View details for Sauce Labs Fleece Jacket" [ref=e25] [cursor=pointer]:
                - generic [ref=e26]: Sauce Labs Fleece Jacket
              - generic [ref=e27]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
              - generic [ref=e28]:
                - generic [ref=e29]: $49.99
                - button "Remove" [ref=e30] [cursor=pointer]
        - generic [ref=e31]:
          - button "Continue Shopping" [ref=e32] [cursor=pointer]
          - button "Checkout" [ref=e33] [cursor=pointer]
  - contentinfo [ref=e34]:
    - list [ref=e35]:
      - listitem [ref=e36]:
        - link "X" [ref=e37] [cursor=pointer]:
          - /url: https://x.com/saucelabs
      - listitem [ref=e38]:
        - link "Facebook" [ref=e39] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e40]:
        - link "LinkedIn" [ref=e41] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e42]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
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
  19 |     overviewPage = new OverviewPage(page);
  20 | 
  21 |     await loginPage.gotoLoginPage();
  22 |     invPage = await loginPage.directLogin("standard_user", "secret_sauce");
  23 |     await invPage.addToCart("Sauce Labs Fleece Jacket");
  24 |     invPage.goToCartPage();
  25 |     checkoutPage = cartPage.checkout();
  26 | 
> 27 |     overviewPage = await checkoutPage.doCheckout('Ankush', 'Vankore', '416202');
     |                                       ^ TypeError: checkoutPage.doCheckout is not a function
  28 |     await overviewPage.getSummary();
  29 |     await overviewPage.completeCheckoutProcess();
  30 | 
  31 |     await page.waitForTimeout(2000);
  32 | })
```