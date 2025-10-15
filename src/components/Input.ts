import { Locator, Page, expect } from '@playwright/test'
import { BaseComponent } from './Component'
export class Input extends BaseComponent {
  constructor(page: Page, selector: string) {
    super(page, selector)
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
