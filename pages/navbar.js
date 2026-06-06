exports.navbar = class navbar{

    constructor(page){
        this.page = page;
        this.burger_menu = page.locator("#react-burger-menu-btn");
        this.logout_btn = page.locator("#logout_sidebar_link");
    }

    async logout(){
        this.burger_menu.click();
        this.logout_btn.click();
    }

}