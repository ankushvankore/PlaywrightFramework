/*
To check current status of current test case in Playwright we have special object
called as testInfo.
It is like Listner in TestNG
*/

import test from "@playwright/test"

test("Test for current status of TC", async({page}, testInfo)=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    console.log("Status: " + testInfo.status);
    console.log("Title: " + testInfo.title);
    console.log("Duration: " + testInfo.duration);
    console.log("Expected Status: " + testInfo.expectedStatus);

    /*
    Create a folder for storing Screenshots
    Create a fixture for taking screenshots after every test case
    
    */
    
    await page.waitForTimeout(2000);
})