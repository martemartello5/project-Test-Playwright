import { Locator, Page } from '@playwright/test'
import { Types } from '../../../../generator/types'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { Select } from '../../../components/Select'
export namespace New {
  export class IndexPage {
    readonly addClientButton: Button
    readonly clientName: Input
    readonly clientPrioriy: Select
    readonly clientType: Select
    readonly createButton: Button

    constructor(readonly page: Page) {
      this.addClientButton = new Button(page, 'text=Add client')
      this.clientName = new Input(page, '[label="Name"]')
      this.clientPrioriy = new Select(page, '[data-test-id="priority-select"]')
      this.clientType = new Select(page, '[data-test-id="client-type-select"]')
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
      await this.clientPrioriy.selectOption(client.priority)
    }
    async selectType(client: Types.CLIENT) {
      await this.clientType.click()
      await this.clientType.selectOption(client.type)
    }
    async createClient() {
      await this.createButton.click()
    }
  }
}
