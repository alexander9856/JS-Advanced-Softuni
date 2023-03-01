const { chromium } = require('playwright-chromium');
const { expect } = require('chai');
// const { it } = require('node:test');

let browser, page;
describe('E2E tests', async function () {
    this.timeout(5000);

    before(async () => { browser = await chromium.launch(); });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    it('loads articles titles', async () => {
        await page.goto('http://localhost:5500');
        await page.screenshot({ path: 'page.png' })
    })
})