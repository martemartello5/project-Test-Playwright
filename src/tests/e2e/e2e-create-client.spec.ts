import { test, expect, Page } from '@playwright/test'
import { faker } from '@faker-js/faker'
import { LoginPage } from '../../page-objects/loginPage'
import { NewClientPopUp } from '../../page-objects/NewClientPopUp'
import { ClientInfoPage } from '../../page-objects/ClientInfoPage'
import { Navbar } from '../../page-objects/components/Navbar'
import { generateClient } from '../../generator/factory'
import { Types } from '../../generator/types'
let loginPage: LoginPage
let newClientPopUp: NewClientPopUp
let clientInfoPage: ClientInfoPage
let navBar: Navbar

test.describe('Create client', () => {
  let clientData: Types.CLIENT
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    newClientPopUp = new NewClientPopUp(page)
    clientInfoPage = new ClientInfoPage(page)
    navBar = new Navbar(page)
    await loginPage.visit()
    await loginPage.login(
      'test.admin@pSapient.onmicrosoft.com',
      '1q2w3e4rA+New2024',
    )
    await expect(navBar.clients).toBeVisible()
    clientData = generateClient()
  })

  test('Create client + Edit client', async ({ page }) => {
    await navBar.clickOnTab('Clients')
    await newClientPopUp.openCreatePopUp()
    await newClientPopUp.enterName(clientData.name)
    await page.keyboard.press('Enter')
    const errorMessage = page.locator(`text=can't be blank`)
    await expect(errorMessage).toHaveCount(2)
    await newClientPopUp.selectPriority(clientData.priority)
    await newClientPopUp.selectType(clientData.type)
    await newClientPopUp.createClient()
    await clientInfoPage.assertName(clientData.name)
    await clientInfoPage.openEditMode()
    await clientInfoPage.editType(clientData.type)
    await clientInfoPage.saveChanges()
    await clientInfoPage.assertType(clientData.type)
  })
})
