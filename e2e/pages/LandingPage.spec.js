const { test, expect } = require('@playwright/test');
import { FRONTEND_URL } from '../constants';
// test('Has title', async ({ page }) => {
//   await page.goto(FRONTEND_URL); //NOTE You can also use base url configuration option playwright.config.js
//   await expect(page).toHaveTitle(/React Sum/);
// });
test('Checks the response process ', async ({ page }) => {
  await page.goto(FRONTEND_URL);
  await page.fill('#number', '1,2,3,4');
  await page.waitForSelector('text=sum');
});
