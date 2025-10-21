import { Locator, Page } from '@playwright/test'
import { Component } from './Component'
export class Button extends Component {
  constructor(page: Page, selector: string) {
    super(page, selector)
  }
  async click() {
    await this.component.click()
  }
}
