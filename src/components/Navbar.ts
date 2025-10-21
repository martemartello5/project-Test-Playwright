import { Locator, Page } from '@playwright/test'
export class Navbar {
  readonly dashboard: Locator
  readonly clients: Locator
  readonly projects: Locator
  readonly proAgent: Locator
  readonly expertSearch: Locator

  constructor(private readonly page: Page) {
    this.dashboard = page
      .locator('[data-test-id="admin-navigation-sidebar"] ul > li')
      .nth(1)
    this.clients = page
      .locator('[data-test-id="admin-navigation-sidebar"] ul > li')
      .nth(2)
    this.projects = page
      .locator('[data-test-id="admin-navigation-sidebar"] ul > li')
      .nth(3)
    this.proAgent = page
      .locator('[data-test-id="admin-navigation-sidebar"] ul > li')
      .nth(4)
    this.expertSearch = page
      .locator('[data-test-id="admin-navigation-sidebar"] ul > li')
      .nth(5)
  }

  async clickOnTab(tabName: string) {
    switch (tabName) {
      case 'Clients':
        await this.clients.click()
        break
      case 'Projects':
        await this.projects.click()
        break
      case 'Dashboar':
        await this.dashboard.click()
        break
      case 'proAgent':
        await this.proAgent.click()
        break
      case 'Expert Search':
        await this.expertSearch.click()
        break
      default:
        throw new Error('This tab does not exist')
    }
  }
}
