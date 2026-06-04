exports.cartPage = class cartPage{

    constructor(page){
        this.page = page;
        this.prod_box = page.locator(".inventory_item");
        this.sort_dropdown = page.locator(".product_sort_container");
        this.item_name = page.locator(".inventory_item_name");
        this.item_price = page.locator(".inventory_item_price");
    }

}