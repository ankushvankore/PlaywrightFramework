import { CartPage } from "./CartPage";

export class InventoryPage{
    #page;
    #allProducts;
    #addToCartBtn;
    #cartIcon;

    constructor(page){
        this.#page = page;
        this.#allProducts = this.#page.locator(".inventory_list .inventory_item_name");
        this.#addToCartBtn = this.#page.locator("//button[text()='Add to cart']");
        this.#cartIcon = this.#page.locator(".shopping_cart_link");
    }

    async getTotalProductCount(){
        let products = await this.#allProducts.all();
        return await products.length;
    }

    async getProductDetails(){
        await this.#page.waitForTimeout(2000);
        let products = await this.#allProducts.all();
        for(let i of products)
        {
            console.log(await i.innerText());        
        }
    }

    async addToCart(pName){
        await this.#page.waitForTimeout(2000);
        let products = await this.#allProducts.all();

        for(let p of products){
            if((await p.innerText()).includes(pName)){
                await p.click();
                break;
            }
        }

        await this.#addToCartBtn.click();
        console.log("Product added to cart: " + pName);        
    }

    async goToCartPage(){
        await this.#cartIcon.click();

        //Navigate to cart page
        return new CartPage(this.#page);
    }
}