import {Given, When, Then} from '@cucumber/cucumber'
import { chromium, Page, Browser } from '@playwright/test'
//const { chromium } = require('playwright');
let browser: Browser;
let page: Page;

Given('User navigates to the application',{timeout: 9000}, async function() {
    browser= await chromium.launch({headless: false});
    //const browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto('https://www.google.it/');
})

Then('Take a screenshot', async function () {
    await page.screenshot({path: 'screenshot.png'});
    await browser.close();
})