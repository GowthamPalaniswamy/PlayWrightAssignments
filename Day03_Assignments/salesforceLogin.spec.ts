 /* Create a new browser instance
 * Create a new browser context
 * Create a new page
 * Load the url 
 * https://login.salesforce.com/
 * Print the url
 * Enter the username vidyar@testleaf.com
 * Enter the password Testleaf@1234
 * Click Login button
 * Verify the title of the page (using page.title() method)
 * 
 */// Try Implementing Fixtures in the above testcase 

import {chromium, test} from "@playwright/test"

test('Sales force login', async()=>{
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();

    await page.goto('https://login.salesforce.com/')
    console.log(page.url())
    //page.locator('#username').fill('vidyar@testleaf.com')
    await page.locator('#username').fill('gowthamp@testleaf.com')
    await page.locator('#password').fill('Salesforce@2574')
    await page.click('#Login')
    console.log(await page.title())
    //await page.waitForTimeout(3000)


})