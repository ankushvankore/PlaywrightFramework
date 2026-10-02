import { OverviewPage } from "./OverviewPage";

export class CheckoutPage{
    #page;
    #firstName;
    #lastName;
    #postalCode;
    #continueButton;

    constructor(page){
        this.#page = page;
        this.#firstName = page.locator("#first-name");
        this.#lastName = page.locator("#last-name");
        this.#postalCode = page.locator("#postal-code");
        this.#continueButton = page.locator("#continue");
    }

    async doCheckout(fName, lName, pCode) {
        await this.#firstName.fill(fName)
        await this.#lastName.fill(lName);
        await this.#postalCode.fill(pCode);
        await this.#continueButton.click();
        //Navigating to Overview Page

        return new OverviewPage(this.#page);
    }


}