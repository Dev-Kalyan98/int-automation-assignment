const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('SauceDemo Login Tests', () => {
  test('TC_LOGIN_001: Successful login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    // Step 1: Open site
    await loginPage.goto();
    
    // Step 2: Login with valid credentials
    await loginPage.login('standard_user', 'secret_sauce');
    
    // Step 3: Verify redirection and inventory page display
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');
  });
});