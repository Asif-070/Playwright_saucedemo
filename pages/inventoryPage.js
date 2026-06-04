exports.inventoryPage = class inventoryPage{

    constructor(page){
        this.page = page;
        this.prod_box = page.locator(".inventory_item");
        this.sort_dropdown = page.locator(".product_sort_container");
        this.item_name = page.locator(".inventory_item_name");
        this.item_price = page.locator(".inventory_item_price");
        this.addtocart_btn = page.locator(".btn_inventory");
        this.cart_badge = page.locator(".shopping_cart_badge");
        this.cart_btn = page.locator(".shopping_cart_link");
    }

}