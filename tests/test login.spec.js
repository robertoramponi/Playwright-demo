const { chromium } = require('playwright');
const { test, expect } = require('@playwright/test');

test.describe('My Test Suite', () => {
  test('My Test Case', async ({}) => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await authenticate(page);

  await browser.close();

  });
});

async function authenticate(page) {
  await page.goto('https://bitheap.tech');
  await page.getByLabel('Do not consent', { exact: true }).click()
  await page.click('#menu-item-1311'); 
  await page.locator("[name='xoo-el-username']").fill(process.env.BITHEAP_USERNAME)
  await page.locator("[name='xoo-el-password']").fill(process.env.PASS)
  await page.locator('.xoo-el-login-btn').click()
  const text = await page.locator('css=#menu-item-1314 > a').textContent()
  if(text != "Hello, Playwright") 
    console.error("The authentication was not successful!")
  await page.screenshot({ path: 'screenshot1.png' });
}




