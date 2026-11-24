class Login{
constructor(page){
        this.page = page;
        this.UserName = page.locator("#user-name");
        this.Password = page.locator("#password");
        this.LoginButton = page.locator("#login-button");
    };

    async gotoLoginPage(){
        await this.page.goto("https://www.saucedemo.com/")

    };
    async loginToPage(username,password){
        await this.UserName.fill(username);
        await this.Password.fill(password);
        await this.LoginButton.click();

    };
};

module.exports = Login // To export