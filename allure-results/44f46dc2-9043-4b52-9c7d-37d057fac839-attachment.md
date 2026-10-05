# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: D01LoginPage.spec.js >> Login using CSV file
- Location: tests\D01LoginPage.spec.js:68:6

# Error details

```
Error: locator.fill: value: expected string, got undefined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - main [ref=e5]:
    - form "Login" [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import {InventoryPage} from "../Pages/InventoryPage.js"
  2  | export class LoginPage{
  3  |     #page
  4  |     #userName
  5  |     #password
  6  |     #loginBtn
  7  | 
  8  |     constructor(page){
  9  |         this.#page = page;
  10 |         this.#userName = page.locator("#user-name");
  11 |         this.#password = page.locator("#password");
  12 |         this.#loginBtn = page.locator("#login-button");
  13 |     }
  14 | 
  15 |     async gotoLoginPage(){
  16 |         await this.#page.goto("https://www.saucedemo.com/", {setTimeout: 3000, waitUntil: 'load'});
  17 |         //await this.#page.waitForTimeout(2000);
  18 |     }
  19 | 
  20 |     async enterUserName(un){
  21 |         await this.#userName.fill(un);
  22 |     }
  23 | 
  24 |     async enterPassword(ps){
  25 |         await this.#password.fill(ps);
  26 |     }
  27 | 
  28 |     async clickLoginBtn(){
  29 |         await this.#loginBtn.click();
  30 |         return new InventoryPage(this.#page);
  31 |     }
  32 | 
  33 |     async directLogin(un, ps){
> 34 |         await this.#userName.fill(un);
     |                              ^ Error: locator.fill: value: expected string, got undefined
  35 |         await this.#password.fill(ps);
  36 |         await this.#loginBtn.click();
  37 | 
  38 |         return new InventoryPage(this.#page);
  39 |         //As we are navigating to the inventory page, we should return 
  40 |         //object of the same page means next page
  41 |         //as this is page chaining - means one page is passing the data to next page.
  42 |     }
  43 | 
  44 |     async getTitle(){
  45 |         return await this.#page.getTitle();
  46 |     }
  47 | 
  48 |     async getWarningMessage(){
  49 |         let message = await this.#page.locator("h3[data-test='error']").innerText();
  50 |         return message;
  51 |     }
  52 | }
  53 | 
```