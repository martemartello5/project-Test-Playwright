import { Page } from '@playwright/test'

export class AbstractPage {
  constructor(readonly page: Page) {}

  async wait(time: number) {
    await this.page.waitForTimeout(time)
  }
}
