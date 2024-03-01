/*
Assignment: 2 Edit Lead
http://leaftaps.com/opentaps/control/main			
1. Launch the browser
2. Enter the username
3. Enter the password
4. Click Login
5. Click CRM/SFA link
6. Click Leads link
7. Click on Create Lead
8. Enter company name
9. Enter first name
10.Enter last name
11.Click on Create Lead button  
12.Click Edit
13.Change the company name
14.Click Update
*/

import {chromium, test} from '@playwright/test'

test('Edit Lead - Leaftaps', async() => {
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();

    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator('#username').fill('demosalesManager')
    await page.fill('#password','crmsfa')
    page.click('.decorativeSubmit')
    await page.click("//a[contains(text(),'CRM/SFA')]");
    await page.click("//a[text()='Create Lead']");
    await page.fill('#createLeadForm_companyName','Google');
    await page.fill('#createLeadForm_firstName','Gowtham');
    await page.fill('#createLeadForm_lastName','Palaniswamy')
    await page.click('.smallSubmit');
    console.log('Lead Created');
    await page.click("//a[text()='Edit']");
    await page.fill('#updateLeadForm_companyName','Microsoft');
    await page.click("(//input[@class='smallSubmit'])[1]");
    console.log("Company name updated successfully")
    await page.waitForTimeout(3000)

})