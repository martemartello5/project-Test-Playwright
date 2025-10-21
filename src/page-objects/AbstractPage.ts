import { Page } from '@playwright/test'
import { Navbar } from 'components/Navbar'

export class AbstractPage {
  readonly navbar: Navbar
  constructor(readonly page: Page) {
    this.navbar = new Navbar(page)
  }

  async wait(time: number) {
    await this.page.waitForTimeout(time)
  }
  async selectTab(tab: string) {
    await this.navbar.clickOnTab(tab)
  }
  async visit(env: string) {
    await this.page.goto(env)
  }
}
