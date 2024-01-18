import { test, expect } from "@playwright/test";

test("Clicking on elements", async ({page}) => {
    await page.goto("https://normativ.kontur.ru/")
    await page.click("[data-tid='TopBarLogin']")
    await page.fill("[data-tid='i-login'] input", "Iam97@tester.ru")
    await page.fill("input#password", "123123")
    await page.click("[data-tid='Button__root']")
})