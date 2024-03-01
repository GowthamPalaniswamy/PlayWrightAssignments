/*Test Steps:
Assignment: 1 Create Lead
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab 
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the CompanyName 
9. Click Save and Verify Leads name created
*/
import {chromium, test} from '@playwright/test'

test('Create Lead in Salesforce', async() => {
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();

    await page.goto('https://login.salesforce.com');

    await page.locator('#username').fill('gowthamp@testleaf.com')
    await page.locator('#password').fill('Salesforce@2574')
    await page.click('#Login')
    console.log('login successful')
    await page.waitForTimeout(3000)
    await page.click("(//div[@class='tooltipTrigger tooltip-trigger uiTooltip'])[6]");
    await page.click("//button[text()='View All']");
    await page.click("(//a[@class='slds-text-heading_small'])[8]");
    await page.click("//span[text()='Leads']");
    await page.click("//button[text()='New']");
    await page.click("//button[@name='salutation']");
    await page.click("//span[text()='Mr.']");
    let leadLastName = 'Palaniswamy';
    await page.locator("//input[@name='lastName']").fill(leadLastName)
    await page.locator("//input[@name='Company']").fill('Acc')
    await page.click("(//button[text()='Save'])[2]");
    const leadname = await page.locator("//slot[@name='primaryField']/lightning-formatted-name").textContent()
    console.log(leadname)
    if(leadname?.includes(leadLastName)){
        console.log('Lead created successfully')
    }
    await page.waitForTimeout(3000)
})