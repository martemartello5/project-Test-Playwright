import { expect, Locator, Page } from '@playwright/test'
export class ClientInfoPage {
  readonly editTypeField: Locator
  readonly typeField: Locator
  readonly name: Locator
  readonly saveButton: Locator

  constructor(readonly page: Page) {
    this.name = page.locator('[data-test-id="details-client-name"]')
    this.editTypeField = page.locator(
      '[data-test-id="select-input-type-select"]',
    )
    this.typeField = page.locator('[data-test-id="details-type"]')
    this.saveButton = page.locator('text=Save')
  }

  async openEditMode() {
    await this.name.dblclick()
  }

  async editType(type: string) {
    await this.editTypeField.click()
    await this.page.getByRole('option', { name: type }).click()
  }

  async saveChanges() {
    await this.saveButton.click()
  }

  async assertName(name: string) {
    await expect(this.name).toContainText(name)
  }

  async assertType(type: string) {
    await expect(this.typeField).toContainText(type)
  }
}
