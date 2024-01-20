const { chromium } = require('playwright');
const { test, expect } = require('@playwright/test');

test.describe('My Test Suite', () => {
  test('TC1', async ({}) => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await landing(page);
//test
  await browser.close();

  });
});

async function landing(page) {
    await page.goto('https://www.moto.it');
    await expect(page).toHaveURL('https://www.moto.it')
  }
  