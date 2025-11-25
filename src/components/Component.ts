import { expect, Locator, Page } from '@playwright/test'
export class Component {
  readonly component: Locator
  constructor(
    readonly page: Page,
    selector: string,
  ) {
    this.component = page.locator(selector)
  }
  async click() {
    await this.component.click()
  }
  async isVisible() {
    return this.component.isVisible()
  }
  async assertPresence() {
    await expect(this.component).toBeVisible()
  }
  async waitFor(options?: {
    state?: 'attached' | 'detached' | 'visible' | 'hidden'
    timeout?: number
  }) {
    await this.component.waitFor(options)
  }
}
