const { chromium } = require('playwright');

(async ()=> {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://moto.it');
    await page.screenshot({path: 'prova.png'});
    await browser.close();
}
)();