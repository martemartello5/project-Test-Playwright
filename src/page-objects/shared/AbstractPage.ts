import { Page } from '@playwright/test'

export namespace AbstractPage {
  export class IndexPage {
    constructor(readonly page: Page) {}

    async wait(time: number) {
      await this.page.waitForTimeout(time)
    }
  }
}
