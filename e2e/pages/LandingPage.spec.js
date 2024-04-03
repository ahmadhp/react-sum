const { test, expect } = require('@playwright/test');
test('Has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/React App/);
});
test('Checks the response process', async ({ page }) => {
  await page.goto('/');
  await page.fill('#number', '1,2,3,4');
  await page.waitForSelector('text=sum');
});
