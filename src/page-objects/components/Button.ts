import { Locator, Page } from '@playwright/test'
export class Button {
  readonly page: Page
  readonly component: Locator

  constructor(page: Page, selector: string) {
    this.page = page
    this.component = page.locator(selector)
  }
  async click() {
    await this.component.click()
  }
}
