import { test, expect, Page } from '@playwright/test'

test.describe('Create expert', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://spot-crm-sq-new-table-master.test.prosapient.app/')
    await page.fill('[name="login"]', 'test.admin@pSapient.onmicrosoft.com')
    await page.fill('[name="password"]', '1q2w3e4rA+New2024')
    await page.click('text=Sign in')
    await expect(page.getByText('Experts Search')).toBeVisible()
    await page.click('text=Experts Search')
  })
  test('Submit empty expert form', async ({ page }) => {
    const context = page.context()
    const [newTab] = await Promise.all([
      context.waitForEvent('page'),
      page.click('text=Create new expert'),
    ])
    const firtNameInput = newTab
      .frameLocator('#iframe')
      .locator('[id="expert_first_name"]')
    await firtNameInput.waitFor({ state: 'attached' })
    await expect(firtNameInput).toBeVisible()
    await firtNameInput.fill('Marta')
    await newTab
      .frameLocator('#iframe')
      .locator('[id="expert_last_name"]')
      .fill('AQA')
    await newTab.frameLocator('#iframe').locator('text=Create').click()
    const emailInput = newTab
      .frameLocator('#iframe')
      .locator('[id="expert_email"]')
    const anyErrorLabel = newTab
      .frameLocator('#iframe')
      .locator(`text=can't be blank`)
      .first()
    await expect(anyErrorLabel).toBeVisible()
  })
})
