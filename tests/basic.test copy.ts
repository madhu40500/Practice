import {chromium, test} from "@playwright/test"

test("get text", async()=>{

const browser = await chromium.launch()
const context = await browser.newContext({
    storageState: 'storageState.json'
})
const page = await context.newPage()

await page.goto("https://staging.gohighlevel.com/agency_dashboard")

await page.waitForTimeout(5000)

})