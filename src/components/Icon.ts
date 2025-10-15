import { Locator, Page } from '@playwright/test'
import { BaseComponent } from './Component'
export class Icon extends BaseComponent {
  constructor(page: Page, selector: string) {
    super(page, selector)
  }
  async click() {
    await this.component.click()
  }
  async dblclick() {
    await this.component.dblclick()
  }
}
