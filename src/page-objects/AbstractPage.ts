import { Page } from '@playwright/test'

export class AbstractPage {
  constructor(readonly page: Page) {}

  async wait(time) {
    await this.page.waitForTimeout(time)
  }
}
