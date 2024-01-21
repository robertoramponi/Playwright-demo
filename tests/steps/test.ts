import {Given, When} from '@cucumber/cucumber'
const { chromium } = require('playwright');

Given('a calculator', async function() {
    console.log('Hello, world')
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://online-calculator.com/');
})
When