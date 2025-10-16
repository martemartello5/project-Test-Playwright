import { Page } from '@playwright/test'
import { Types } from 'generator/types'
import { Button } from 'components/Button'
import { Icon } from 'components/Icon'
import { Input } from 'components/Input'
export namespace ClientInfo {
  export class IndexPage {
    readonly editTypeField: Icon
    readonly typeField: Input
    readonly name: Input
    readonly saveButton: Button

    constructor(readonly page: Page) {
      this.name = new Input(page, '[data-test-id="details-client-name"]')
      this.editTypeField = new Icon(
        page,
        '[data-test-id="select-input-type-select"]',
      )
      this.typeField = new Input(page, '[data-test-id="details-type"]')
      this.saveButton = new Button(page, 'text=Save')
    }

    async openEditMode() {
      await this.name.doubleClick()
    }

    async editType(client: Types.CLIENT) {
      await this.editTypeField.click()
      await this.page.getByRole('option', { name: client.type }).click()
    }

    async saveChanges() {
      await this.saveButton.click()
    }

    async assertName(client: Types.CLIENT) {
      await this.name.assertValue(client.name)
    }

    async assertType(client: Types.CLIENT) {
      await this.typeField.assertValue(client.type)
    }
  }
}
