import {chromium, test} from "@playwright/test"


test("Login GHL", async()=>{

    const browser= await chromium.launch({
        headless:false
    });
    const context= await browser.newContext();
    const page= await browser.newPage();
    await page.goto("https://staging.gohighlevel.com/");
    await page.locator("//input[@id='email']").type("madhuvanapalli4050@gmail.com");
    await page.locator("//input[@id='password']").type("Madvan@4050");
    await page.locator("//button[normalize-space()='Sign in']").click();
    await page.locator("//button[normalize-space()='Send Security Code']").click();
    await page.locator("(//input[@type='number'])[1]").click();
    await page.locator("//button[normalize-space()='Confirm Code']").isEnabled()

await page.locator("//button[normalize-space()='Confirm Code']").click()

await page.context().storageState({ path: 'storageState.json' });

//await page.locator("//span[@class='hl_text-overflow w-full hl_switcher-loc-name font-medium']").click();
//await page.locator("//input[@placeholder='Search for a sub-account']").type("");

    


})