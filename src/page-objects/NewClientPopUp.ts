import { Locator, Page } from '@playwright/test'

export class NewClientPopUp {
  readonly addClientButton: Locator
  readonly clientName: Locator
  readonly clientPrioriy: Locator
  readonly clientType: Locator
  readonly createButton: Locator

  constructor(readonly page: Page) {
    this.addClientButton = page.locator('text=Add client')
    this.clientName = page.locator('[label="Name"]')
    this.clientPrioriy = page.locator('[data-test-id="priority-select"]')
    this.clientType = page.locator('[data-test-id="client-type-select"]')
    this.createButton = page.locator('text=Create client')
  }

  async openCreatePopUp() {
    await this.addClientButton.click()
  }

  async enterName(name: string) {
    await this.clientName.fill(name)
  }
  async selectPriority(priority: string) {
    await this.clientPrioriy.click()
    await this.clientPrioriy.getByRole('option', { name: priority }).click()
  }
  async selectType(type: string) {
    await this.clientType.click()
    await this.clientType.getByRole('option', { name: type }).click()
  }
  async createClient() {
    await this.createButton.click()
  }
}
