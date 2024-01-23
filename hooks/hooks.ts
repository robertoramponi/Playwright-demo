import { BeforeAll, AfterAll, After, Status } from "@cucumber/cucumber";
import { chromium, Page, Browser } from '@playwright/test'
import { pageFixture } from "./pageFixture";
//const { chromium } = require('playwright');
let browser: Browser;
let page: Page;

BeforeAll(async function () {
    browser= await chromium.launch();
    //const browser = await chromium.launch();
    page = await browser.newPage();
    pageFixture.page = page;
})
After(async function ({ pickle, result }) {
    console.log(result?.status);
    //screenshot
    if (result?.status == Status.FAILED)   {
        const img = await pageFixture.page.screenshot({path:'./test-results/screenshot/${pickle.name}.png', type: "png"});
        await this.attach(img, "image/png");
    }
    const img = await pageFixture.page.screenshot({path:'./test-results/screenshot/${pickle.name}.png', type: "png"});
    await this.attach(img, "image/png");
    await pageFixture.page.close();
})
AfterAll(async function () {
    await browser.close();
})