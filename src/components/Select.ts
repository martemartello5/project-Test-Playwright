import { Locator, Page, expect } from '@playwright/test'
import { Component } from './Component'
import { v } from '@faker-js/faker/dist/airline-CLphikKp'
export class Select extends Component {
  readonly selectMenu: Component
  constructor(page: Page, selector: string) {
    super(page, selector)
    //this.selectMenu = new Component(page, `${selectorTestID.slice(0, index)}select-menu-${selectorTestID.slice(index)}`)
    // this.selectMenu = new Component(page, `text=Create`);
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
  async selectOptionbyText(value: string) {
    await this.component.getByText(value, { exact: true }).click()
  }
}
