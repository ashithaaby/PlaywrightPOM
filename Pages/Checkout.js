class Checkout{
    constructor(page) {
        this.page = page;
        this.cancel = page.locator("#cancel") 
        this.FirstName = page.getByPlaceholder("First Name")
        this.LastName = page.getByPlaceholder("Last Name")
        this.ZipCode = page.getByPlaceholder("Zip/Postal Code")
        this.continue = page.getByRole("button", {name: "continue"})
    }

    async gotoCheckoutPage() {
        await this.FirstName.fill("Ashitha");
        await this.LastName.fill("Sebastian");
        await this.ZipCode.fill("123456");   
    }

    async ContinuefromCheckout(){
        await this.continue.click();
    }
    

    async gotoCancelfromCheckout(){
        await this.cancel.click();
    }
}
module.exports = Checkout // To export