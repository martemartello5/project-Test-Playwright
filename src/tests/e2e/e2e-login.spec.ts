import { test, expect } from '@playwright/test'
import { Shared } from '../../page-objects/shared'
//import { LoginPage } from '../../page-objects/loginPage'
test.describe.parallel('Login/Logout Flow', () => {
  let loginPage
  const admin_email = process.env.ADMIN_EMAIL
  const admin_password = process.env.ADMIN_PASSWORD
  const environment = process.env.E2E_PLATFORM_URL
  test.beforeEach(async ({ page }) => {
    loginPage = new Shared.LoginPage.LoginPage(page)
    await loginPage.visit(environment)
  })
  test('Negative Scenario for Login', async ({ page }) => {
    await loginPage.login('some user', 'some password')
    await loginPage.assertErrorMessage()
  })
  test('Positive Scenario for login + logout', async ({ page }) => {
    await loginPage.login(admin_email, admin_password)
    await expect(page.getByText('All Clients')).toBeVisible()
    await page.click('text=Super Admin')
    await page.click('text=Log Out')
    await expect(page).toHaveURL(/\/iam\.test\.prosapient/)
  })
})
