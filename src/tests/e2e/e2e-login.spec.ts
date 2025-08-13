import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/loginPage'
test.describe.parallel('Login/Logout Flow', () => {
  let loginPage: LoginPage
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    await loginPage.visit()
  })
  test('Negative Scenario for Login', async ({ page }) => {
    await loginPage.login('some user', 'some password')
    await loginPage.assertErrorMessage()
  })
  test('Positive Scenario for login + logout', async ({ page }) => {
    await loginPage.login(
      'test.admin@pSapient.onmicrosoft.com',
      '1q2w3e4rA+New2024',
    )
    await expect(page.getByText('All Clients')).toBeVisible()
    await page.click('text=Super Admin')
    await page.click('text=Log Out')
    await expect(page).toHaveURL(/\/iam\.test\.prosapient/)
  })
})
