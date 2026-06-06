exports.loginPage = class loginPage{

    constructor(page){
        this.page = page;
        this.username_tb = page.locator('[data-test="username"]');
        this.password_tb = page.locator('[data-test="password"]');
        this.login_btn = page.locator('[data-test="login-button"]');

        this.nxtpage_assertion = page.locator("span.title");
        this.error_assertion = page.locator(".error-message-container h3");
    }

    async gotologinpage(){
        await this.page.goto('https://www.saucedemo.com/');
    }
    async login(user_name, pass_name){
        await this.username_tb.fill(user_name);
        await this.password_tb.fill(pass_name);
        await this.login_btn.click();
        await this.page.waitForLoadState('networkidle');
    }

}