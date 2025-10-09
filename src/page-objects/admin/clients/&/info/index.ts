import { expect, Locator, Page } from '@playwright/test'
import { Types } from '../../../../../generator/types'
import { Button } from '../../../../components/Button'
import { Icon } from '../../../../components/Icon'
export namespace ClientInfo {
  export class IndexPage {
    readonly editTypeField: Icon
    readonly typeField: Locator
    readonly name: Locator
    readonly saveButton: Button

    constructor(readonly page: Page) {
      this.name = page.locator('[data-test-id="details-client-name"]')
      this.editTypeField = new Icon(
        page,
        '[data-test-id="select-input-type-select"]',
      )
      this.typeField = page.locator('[data-test-id="details-type"]')
      this.saveButton = new Button(page, 'text=Save')
    }

    async openEditMode() {
      await this.name.dblclick()
    }

    async editType(client: Types.CLIENT) {
      await this.editTypeField.click()
      await this.page.getByRole('option', { name: client.type }).click()
    }

    async saveChanges() {
      await this.saveButton.click()
    }

    async assertName(client: Types.CLIENT) {
      await expect(this.name).toContainText(client.name)
    }

    async assertType(client: Types.CLIENT) {
      await expect(this.typeField).toContainText(client.type)
    }
  }
}
