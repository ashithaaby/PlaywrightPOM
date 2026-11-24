class Logout{
    constructor(page){
        this.page = page;
        this.BurgerMenu = page.getByRole('button', { name: 'Open Menu' });
        this.Logout = page.locator("#logout_sidebar_link");
    }

    async gotoMainMenu(){
        await this.BurgerMenu.click();
        await this.Logout.click();
    }
}
module.exports = Logout // To export