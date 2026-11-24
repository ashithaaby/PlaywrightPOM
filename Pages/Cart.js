class Cart {
    constructor(page) {
        this.page = page;
        this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
        this.removeItem2 = page.locator("#remove-sauce-labs-bike-light");
        this.continueshopping = page.locator("#continue-shopping");
        this.checkout = page.locator('[data-test="checkout"]');
    }

     async gotoCheckoutfromCart() {
        await this.checkout.click();
    }


    async removeItemFromCart() {
        await this.removeItem2.click();
    }

    async gotoContinueshoppingfromCart(){
        await this.continueshopping.click();
    }
}

module.exports = Cart;