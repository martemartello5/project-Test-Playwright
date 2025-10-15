import { Locator, Page, expect } from '@playwright/test'
import { BaseComponent } from './Component'
export class Select extends BaseComponent {
  constructor(page: Page, selector: string) {
    super(page, selector)
  }
  async click() {
    await this.component.click()
  }
  async selectOption(value: string) {
    await this.component.getByRole('option', { name: value }).click()
  }
}
