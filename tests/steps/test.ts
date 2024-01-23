import {Given, When, Then} from '@cucumber/cucumber'
import { chromium, Browser } from '@playwright/test'
import { pageFixture } from '../../hooks/pageFixture';
//const { chromium } = require('playwright');


Given('User navigates to the application',{timeout: 9000}, async function() {
    await pageFixture.page.goto('https://www.google.it/');
})

Then('Take a screenshot', async function () {
    await pageFixture.page.screenshot({path: 'screenshot.png'});
})