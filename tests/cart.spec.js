import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { inventoryPage } from '../pages/inventoryPage';
import { cartPage } from '../pages/cartPage';

test.beforeEach(async ({ page }) => {
    const LoginPage = new loginPage(page);
    await LoginPage.gotologinpage();
    await LoginPage.login('standard_user', 'secret_sauce');
});

test('Product count verification', async ({ page }) => {
    const InventoryPage = new inventoryPage(page);
    expect(InventoryPage.prod_box).toHaveCount(6);
});