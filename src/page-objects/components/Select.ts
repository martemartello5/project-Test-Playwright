import { Locator, Page, expect } from '@playwright/test'
export class Select {
  readonly page: Page
  readonly component: Locator

  constructor(page: Page, selector: string) {
    this.page = page
    this.component = page.locator(selector)
  }
  async click() {
    await this.component.click()
  }
  async selectOption(value: string) {
    await this.component.getByRole('option', { name: value }).click()
  }
}
