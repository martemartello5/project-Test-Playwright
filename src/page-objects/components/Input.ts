import { Locator, Page, expect } from '@playwright/test'
export class Input {
  readonly page: Page
  readonly component: Locator

  constructor(page: Page, selector: string) {
    this.page = page
    this.component = page.locator(selector)
  }
  async fill(value: string) {
    await this.component.fill(value)
  }
  async asserValue(value: string) {
    await expect(this.component).toContainText(value.toString())
  }
  async doubleClick() {
    await this.component.dblclick()
  }
}
