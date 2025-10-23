import { Page } from 'playwright/test'
import { AbstractPage } from 'page-objects/AbstractPage'
import { Button } from 'components/Button'
import { Tab } from 'components/Tab'
export namespace IndividualDnc {
  export class IndexPage extends AbstractPage {
    readonly addExpertButton: Button
    readonly individualDncTab: Tab
    readonly globalDncTab: Tab
    readonly clientDncTab: Tab
    constructor(readonly page: Page) {
      super(page)
      this.addExpertButton = new Button(
        page,
        '[data-test-id="add-expert-button"]',
      )
      this.individualDncTab = new Tab(page, 'text=Individual DNC')
      this.globalDncTab = new Tab(page, 'text=Global DNC')
      this.clientDncTab = new Tab(page, 'text=Client DNC')
    }
    async openAddPopUp() {
      await this.addExpertButton.click()
    }
    async openIndividualDncTab() {
      await this.individualDncTab.navigate()
    }
    async openglobalDncTab() {
      await this.globalDncTab.navigate()
    }
    async openclientDncTab() {
      await this.clientDncTab.navigate()
    }
  }
}
