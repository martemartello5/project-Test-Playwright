import { Locator, Page } from '@playwright/test'
import { Types } from '../../../../generator/types'
import { Button } from '../../../components/Button'

export namespace New {
  export class IndexPage {
    readonly addClientButton: Button
    readonly clientName: Locator
    readonly clientPrioriy: Locator
    readonly clientType: Locator
    readonly createButton: Button

    constructor(readonly page: Page) {
      this.addClientButton = new Button(page, 'text=Add client')
      this.clientName = page.locator('[label="Name"]')
      this.clientPrioriy = page.locator('[data-test-id="priority-select"]')
      this.clientType = page.locator('[data-test-id="client-type-select"]')
      this.createButton = new Button(page, 'text=Create client')
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
