import {InventoryPage} from "../Pages/InventoryPage"
import { CheckoutPage } from "./CheckoutPage";

export class CartPage{
    #page;
    #productName;
    #removeButton;
    #continueShoppingBtn;
    #checkoutBtn;

    constructor(page){
        this.#page = page;
        this.#productName = this.#page.locator(".inventory_item_name");
        this.#removeButton = this.#page.locator("//button[text()='Remove']");
        this.#continueShoppingBtn = this.#page.locator("#continue-shopping");
        this.#checkoutBtn = this.#page.locator("#checkout");
    }

    async getProductName(){
        return await this.#productName.innerText();
    }

    async doRemoveProduct(){
        let product = await this.#productName.innerText();
        await this.#removeButton.click();

        return product;
    }

    async doContinueShopping(){
        await this.#continueShoppingBtn.click();
        //Navigate to InventaryPage
        return new InventoryPage(this.#page);
    }

    async checkout(){
        await this.#checkoutBtn.click();
        return new CheckoutPage(this.#page);
    }


}