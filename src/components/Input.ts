import { Page, expect } from '@playwright/test'
import { Component } from './Component'
export class Input extends Component {
  constructor(page: Page, selector: string) {
    super(page, selector)
  }
  async fill(value: string) {
    await this.component.fill(value)
  }
  async assertValue(value: string) {
    await expect(this.component).toContainText(value.toString())
  }
  async doubleClick() {
    await this.component.dblclick()
  }
}
