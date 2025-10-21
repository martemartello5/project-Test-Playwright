import { test, expect } from '@playwright/test'
import { Shared } from 'page-objects/shared'
import { AbstractPage } from 'page-objects/AbstractPage'
test.describe.parallel('Login/Logout Flow', () => {
  const admin_email = process.env.ADMIN_EMAIL
  const admin_password = process.env.ADMIN_PASSWORD
  const environment = process.env.E2E_PLATFORM_URL
  test.beforeEach(async ({ page }) => {
    const signupPage = new AbstractPage(page)
    await signupPage.visit(environment)
  })
  test('Negative Scenario for Login', async ({ page }) => {
    const loginPage = new Shared.LoginPage.IndexPage(page)
    await loginPage.login('some user', 'some password')
    await loginPage.assertErrorMessage()
  })
  test('Positive Scenario for login + logout', async ({ page }) => {
    const loginPage = new Shared.LoginPage.IndexPage(page)
    await loginPage.login(admin_email, admin_password)
    await expect(page.getByText('All Clients')).toBeVisible()
    await page.click('text=Super Admin')
    await page.click('text=Log Out')
    await expect(page).toHaveURL(/\/iam\.test\.prosapient/)
  })
})
