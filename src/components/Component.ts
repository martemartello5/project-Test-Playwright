import { Locator, Page } from '@playwright/test'
export class BaseComponent {
  readonly component: Locator
  readonly page: Page
  constructor(page: Page, selector: string) {
    this.page = page
    this.component = page.locator(selector)
  }
  async click() {
    await this.component.click()
  }
  async isVisible() {
    return this.component.isVisible()
  }
}
