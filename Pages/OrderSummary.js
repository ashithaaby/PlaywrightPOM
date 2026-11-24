class OrderSummary{
    constructor(page){
        this.page = page;
        this.cancel1 = page.locator('[data-test="cancel"]');
        this.Finish = page.getByRole("button",{name:"finish"});
    }

    async gotoOrderSummaryPage() {
        await this.Finish.click();
        
}
    async gotoCancelfromOrderSummary(){
        await this.cancel1.click();
    }
}


module.exports = OrderSummary // To export