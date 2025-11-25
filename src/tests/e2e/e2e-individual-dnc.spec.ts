import { test } from '@playwright/test'
import { Admin } from 'page-objects/admin'
import { Shared } from 'page-objects/shared'
import { Generators } from 'generator/factory'
import { Types } from 'generator/types'
import { AbstractPage } from 'page-objects/AbstractPage'
require('dotenv').config()
test.describe('Individual DNC expert', () => {
  let individualDncExpertData: Types.INDIVIDUAL_DNC_EXPERT
  const admin_email = process.env.ADMIN_EMAIL!
  const admin_password = process.env.ADMIN_PASSWORD!
  const environment = process.env.E2E_PLATFORM_URL
  test.beforeEach(async ({ page }) => {
    const loginPage = new Shared.LoginPage.IndexPage(page)
    const signupPage = new AbstractPage(page)
    await signupPage.visit(environment)
    await loginPage.login(admin_email, admin_password)
    individualDncExpertData = Generators.generateIndividualDncExpert()
  })
  test('Create Individual DNC expert', async ({ page }) => {
    const individualDncPage = new Admin.Dnc.IndividualDnc.IndexPage(page)
    const navBar = new AbstractPage(page)
    await navBar.selectTab('DNC')
    await individualDncPage.openIndividualDncTab()
    await individualDncPage.addIndividualDncExpert(individualDncExpertData)
    const dncRecordItem = individualDncPage.fetchDncRecord(
      individualDncExpertData.email,
    )
    await dncRecordItem.assertPresence()
  })
})
