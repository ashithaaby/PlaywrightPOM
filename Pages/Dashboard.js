class Dashboard {

    constructor(page){
        this.page = page;
        this.additem1 = page.locator("#add-to-cart-sauce-labs-backpack");
        this.additem2 = page.locator("#add-to-cart-sauce-labs-bike-light");
        this.additem3 = page.locator("#add-to-cart-sauce-labs-bolt-t-shirt");
        this.additem4 = page.locator("#add-to-cart-sauce-labs-fleece-jacket");
        this.removeItem1 = page.locator("#remove-sauce-labs-fleece-jacket");
        this.cartIcon = page.locator(".shopping_cart_link");
    };

    async gotoDashboardPagetoCart(){
        await this.cartIcon.click();

    };

    async DashboardPage(items){
        await this.additem1.click(items);
        await this.additem2.click(items);
        await this.additem3.click(items);
         await this.additem4.click(items);

    };


    async removeItem(){
        await this.removeItem1.click();
    }
}
module.exports = Dashboard // To export