const { chromium } = require('playwright');
const { test, expect } = require('@playwright/test');

test.describe('My Test Suite', () => {
  test('TC1', async ({}) => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await search(page);

  await browser.close();

  });
});

async function search(page) {
    await page.goto('https://www.moto.it');
    await page.getByRole('button', {name:'Prosegui gratis'}).click()
    await page.getByRole('combobox', {name:'MARCA'}).first().click()
    await page.getByRole('treeitem', {name:'Aprilia'}).click()
    //await page.pause()
    await page.getByRole('link', {name:'Ricerca'}).nth(1).click() 
    expect(await page.locator('.app-leaf').first().innerText()).toMatch('Aprilia')
  }