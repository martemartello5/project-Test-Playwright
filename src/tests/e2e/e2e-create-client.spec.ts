import { test, expect, Page } from '@playwright/test'
import { Admin } from '../../page-objects/admin'
import { Shared } from '../../page-objects/shared'
import { generateClient } from '../../generator/factory'
import { Types } from '../../generator/types'
import dotenv from 'dotenv'
import { New } from '../../page-objects/admin/clients/new'
import { ClientInfo } from '../../page-objects/admin/clients/&/info'
import { LoginPage } from '../../page-objects/shared/LoginPage'
import { Navbar } from '../../page-objects/shared/Navbar'
dotenv.config()
let loginPage: LoginPage.IndexPage
let newClientPopUp: New.IndexPage
let clientInfoPage: ClientInfo.IndexPage
let navBar: Navbar.IndexPage
test.describe('Create client', () => {
  let clientData: Types.CLIENT
  let updatedClientData: Types.CLIENT
  const admin_email = process.env.ADMIN_EMAIL!
  const admin_password = process.env.ADMIN_PASSWORD!
  const environment = process.env.E2E_PLATFORM_URL
  test.beforeEach(async ({ page }) => {
    loginPage = new Shared.LoginPage.IndexPage(page)
    newClientPopUp = new Admin.Clients.New.IndexPage(page)
    clientInfoPage = new Admin.Clients.ClientGeneral.ClientInfo.IndexPage(page)
    navBar = new Shared.Navbar.IndexPage(page)
    await loginPage.visit(environment)
    await loginPage.login(admin_email, admin_password)
    await expect(navBar.clients).toBeVisible()
    clientData = generateClient()
    updatedClientData = generateClient({ type: clientData.type })
  })

  test('Create client + Edit client', async ({ page }) => {
    await navBar.clickOnTab('Clients')
    await newClientPopUp.openCreatePopUp()
    await newClientPopUp.enterName(clientData)
    await newClientPopUp.createClient()
    const errorMessage = page.locator(`text=can't be blank`)
    await expect(errorMessage).toHaveCount(2)
    await newClientPopUp.selectPriority(clientData)
    await newClientPopUp.selectType(clientData)
    await newClientPopUp.createClient()
    await clientInfoPage.assertName(clientData)
    await clientInfoPage.openEditMode()
    await clientInfoPage.editType(updatedClientData)
    await clientInfoPage.saveChanges()
    await clientInfoPage.assertType(updatedClientData)
  })
})
