import { Locator, Page, expect } from '@playwright/test'
import { Component } from './Component'
export class Select extends Component {
  constructor(page: Page, selector: string) {
    super(page, selector)
  }
  async click() {
    await this.component.click()
  }
  async typeValue(value: string) {
    await this.component.fill(value)
  }
  async selectOption(value: string) {
    await this.component.getByRole('option', { name: value }).click()
  }
}
