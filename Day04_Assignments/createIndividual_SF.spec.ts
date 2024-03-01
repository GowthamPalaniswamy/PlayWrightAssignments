/*
Assignment: 3 Create Individuals
Test Steps: 
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Dropdown icon in the Individuals tab
5. Click on New Individual
6. Enter the Last Name
7. Click save and verify Individuals Name
*/
import {chromium, test} from '@playwright/test'


test('Create Individual in Salesforce', async() => {
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();

    await page.goto('https://login.salesforce.com');

    await page.locator('#username').fill('gowthamp@testleaf.com')
    await page.locator('#password').fill('Salesforce@2574')
    await page.click('#Login')
    console.log('login successful')
    await page.click("(//div[@class='tooltipTrigger tooltip-trigger uiTooltip'])[6]");
    await page.click("//button[text()='View All']");
    await page.click("//p[text()='Individuals']");
    //await page.click("(//a[@role='button'])[16]");
    //await page.click("//div[@class='slds-context-bar__label-action slds-p-left--none slds-p-right--x-small']");
    //await page.click("//span[text()='New Individual']");
    //await page.locator("[class='slds-dropdown-trigger slds-dropdown-trigger--click']").last().click();
    let lastName = 'Palaniswamy'
    await page.waitForTimeout(3000)
    await page.locator("(//span[text()='Recently Viewed | Individuals']/following::div)[1]").click();
    await page.click("//span[text()='New Individual']");
    await page.locator("//input[@placeholder='Last Name']").fill(lastName)
    await page.click("(//span[text()='Save'])[2]");
    const pageName = await page.locator("(//span[@class='uiOutputText'])[1]").textContent()
    console.log(pageName)
    if(pageName?.includes(lastName)){
        console.log('Individual created successfully')
    }
    await page.waitForTimeout(3000)
})