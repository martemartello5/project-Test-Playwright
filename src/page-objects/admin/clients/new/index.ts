import { Locator, Page } from '@playwright/test'
import { Types } from '../../../../generator/types'

export namespace New {
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

    async enterName(client: Types.CLIENT) {
      await this.clientName.fill(client.name)
    }
    async selectPriority(client: Types.CLIENT) {
      await this.clientPrioriy.click()
      await this.clientPrioriy
        .getByRole('option', { name: client.priority })
        .click()
    }
    async selectType(client: Types.CLIENT) {
      await this.clientType.click()
      await this.clientType.getByRole('option', { name: client.type }).click()
    }
    async createClient() {
      await this.createButton.click()
    }
  }
}
