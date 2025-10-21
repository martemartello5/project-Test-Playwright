import { test } from '@playwright/test'
import { Admin } from 'page-objects/admin'
import { Shared } from 'page-objects/shared'
import { generateClient } from 'generator/factory'
import { Types } from 'generator/types'
import { AbstractPage } from 'page-objects/AbstractPage'
require('dotenv').config()
test.describe('Create client', () => {
  let clientData: Types.CLIENT
  let updatedClientData: Types.CLIENT
  const admin_email = process.env.ADMIN_EMAIL!
  const admin_password = process.env.ADMIN_PASSWORD!
  const environment = process.env.E2E_PLATFORM_URL
  test.beforeEach(async ({ page }) => {
    const loginPage = new Shared.LoginPage.IndexPage(page)
    const signupPage = new AbstractPage(page)
    await signupPage.visit(environment)
    await loginPage.login(admin_email, admin_password)
    clientData = generateClient()
    updatedClientData = generateClient({ type: clientData.type })
  })

  test('Create client + Edit client', async ({ page }) => {
    const clientInfoPage = new Admin.Clients.$.ClientInfo.IndexPage(page)
    const navBar = new AbstractPage(page)
    await navBar.selectTab('Clients')
    const clientsPage = new Admin.Clients.IndexPage(page)
    await clientsPage.openCreatePopUp()
    await clientsPage.createClientModal.enterName(clientData)
    await clientsPage.createClientModal.selectPriority(clientData)
    await clientsPage.createClientModal.selectType(clientData)
    await clientsPage.createClientModal.createClient()
    await clientInfoPage.assertName(clientData)
    await clientInfoPage.openEditMode()
    await clientInfoPage.editType(updatedClientData)
    await clientInfoPage.saveChanges()
    await clientInfoPage.assertType(updatedClientData)
  })
})
