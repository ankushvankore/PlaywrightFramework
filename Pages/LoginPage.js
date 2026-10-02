import {InventoryPage} from "../Pages/InventoryPage.js"
export class LoginPage{
    #page
    #userName
    #password
    #loginBtn

    constructor(page){
        this.#page = page;
        this.#userName = page.locator("#user-name");
        this.#password = page.locator("#password");
        this.#loginBtn = page.locator("#login-button");
    }

    async gotoLoginPage(){
        await this.#page.goto("https://www.saucedemo.com/", {setTimeout: 3000, waitUntil: 'load'});
        //await this.#page.waitForTimeout(2000);
    }

    async enterUserName(un){
        await this.#userName.fill(un);
    }

    async enterPassword(ps){
        await this.#password.fill(ps);
    }

    async clickLoginBtn(){
        await this.#loginBtn.click();
        return new InventoryPage(this.#page);
    }

    async directLogin(un, ps){
        await this.#userName.fill(un);
        await this.#password.fill(ps);
        await this.#loginBtn.click();

        return new InventoryPage(this.#page);
        //As we are navigating to the inventory page, we should return 
        //object of the same page means next page
        //as this is page chaining - means one page is passing the data to next page.
    }

    async getTitle(){
        return await this.#page.getTitle();
    }

    async getWarningMessage(){
        let message = await this.#page.locator("h3[data-test='error']").innerText();
        return message;
    }
}
