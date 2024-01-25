import { test, expect } from "@playwright/test";

import { goToMainPage } from "..//helpers"

test.describe.parallel("My first test suit", () => {    
    test("Clicking on elements", async ({page}) => {
        await goToMainPage(page)
        await page.click("[data-tid='TopBarLogin']")
        await page.fill("[data-tid='i-login'] input", "Iam97@tester.ru")
        await page.fill("input#password", "123123")
        await page.click("[data-tid='Button__root']")})

    test("Working with input", async ({page}) => 
    {
        await page.goto("https://normativ.kontur.ru/")
        await page.click("[data-tid='SearchInput']")
        await page.fill("[data-tid='SearchInput']", "ввод")
        await page.click("[data-tid='SearchSubmitButton']")})

    test("Assertions", async ({page}) => {
        await page.goto("https://example.com/")
        await expect(page).toHaveURL("https://example.com/")
        await expect(page).toHaveTitle("Example Domain")
        
        const header = await page.locator("h1")
        await expect(header).toBeVisible()
        await expect(header).toHaveText("Example Domain")
        await expect(header).toHaveCount(1)
        
        const nonExistingElement = await page.locator("h5")
        await expect(nonExistingElement).not.toBeVisible()})
})