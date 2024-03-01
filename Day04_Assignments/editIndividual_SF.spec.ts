/*
Assignment: 4 Edit Individuals
Test Steps:
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher 
4. Click on the Individuals tab 
5. Search the Individuals last name
6. Click on the Dropdown icon and Select Edit
7. Select Salutation as 'Mr'
8. Now enter the first name
9. Click on Save and Verify the first name 
*/

import {chromium, test} from '@playwright/test'


test('Edit Individual in Salesforce', async() => {
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();

    await page.goto('https://login.salesforce.com');

    await page.locator('#username').fill('gowthamp@testleaf.com')
    await page.locator('#password').fill('Salesforce@2574')
    await page.click('#Login')
    console.log('login successful')
    let firstName = 'Gowtham'
    let lastName = 'Palaniswamy'
    await page.click("(//div[@class='tooltipTrigger tooltip-trigger uiTooltip'])[6]");
    await page.click("//button[text()='View All']");
    await page.click("//p[text()='Individuals']");
    await page.locator("//input[@name='Individual-search-input']").fill(lastName)
    await page.keyboard.press('Enter');
    await page.click("(//span[@class='slds-icon_container slds-icon-utility-down'])[1]");
    await page.click("//a[@title='Edit']");
    await page.click("(//a[@class='select'])[1]");
    await page.click("//a[@title='Mr.']");
    await page.locator("//input[contains(@class,'firstName')]").fill(firstName)
    await page.click("(//span[text()='Save'])[2]");
    await page.click("//a[contains(@title,'Palaniswamy')]");
    const pageFirstName = await page.locator("(//span[@class='uiOutputText'])[1]").textContent()
    console.log(pageFirstName)
    if(pageFirstName?.includes(firstName)){
        console.log('Individual updated successfully')
    }
    await page.waitForTimeout(3000)
})