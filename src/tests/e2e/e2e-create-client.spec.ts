import { test, expect, Page } from '@playwright/test'
import { Admin } from '../../page-objects/admin'
import { Shared } from '../../page-objects/shared'
import { generateClient } from '../../generator/factory'
import { Types } from '../../generator/types'
import dotenv from 'dotenv'
//import { New } from '../../page-objects/admin/clients/new'
import { ClientInfo } from '../../page-objects/admin/clients/$/info'
import { LoginPage } from '../../page-objects/shared/LoginPage'
import { Navbar } from '../../page-objects/components/Navbar'
dotenv.config()
// let loginPage: LoginPage.IndexPage
// letclientsPage. createClientModal: New.IndexPage
// let clientInfoPage: ClientInfo.IndexPage
//let navBar: Navbar
test.describe('Create client', () => {
  let clientData: Types.CLIENT
  let updatedClientData: Types.CLIENT
  const admin_email = process.env.ADMIN_EMAIL!
  const admin_password = process.env.ADMIN_PASSWORD!
  const environment = process.env.E2E_PLATFORM_URL
  test.beforeEach(async ({ page }) => {
    const loginPage = new Shared.LoginPage.IndexPage(page)
    const clientInfoPage = new Admin.Clients.$.ClientInfo.IndexPage(page)
    const navBar = new Navbar(page) //add to abstract page
    await loginPage.visit(environment)
    await loginPage.login(admin_email, admin_password)
    await expect(navBar.clients).toBeVisible()
    clientData = generateClient()
    updatedClientData = generateClient({ type: clientData.type })
  })

  test.only('Create client + Edit client', async ({ page }) => {
    const clientInfoPage = new Admin.Clients.$.ClientInfo.IndexPage(page)
    const navBar = new Navbar(page)
    await navBar.clickOnTab('Clients')
    const clientsPage = new Admin.Clients.IndexPage(page)
    await clientsPage.openCreatePopUp()
    await clientsPage.createClientModal.enterName(clientData)
    await clientsPage.createClientModal.createClient()
    const errorMessage = page.locator(`text=can't be blank`)
    await expect(errorMessage).toHaveCount(2)
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
//check comments and move component to the same level as pom
