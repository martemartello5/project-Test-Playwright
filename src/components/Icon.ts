import { Locator, Page } from '@playwright/test'
import { Component } from './Component'
export class Icon extends Component {
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
