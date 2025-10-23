import { Page } from '@playwright/test'
import { Component } from './Component'
export class Tab extends Component {
  constructor(page: Page, selector: string) {
    super(page, selector)
  }
  async navigate() {
    await this.component.click()
  }
}
