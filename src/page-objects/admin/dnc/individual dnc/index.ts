import { Page } from 'playwright/test'
import { AbstractPage } from 'page-objects/AbstractPage'
import { Button } from 'components/Button'
import { Tab } from 'components/Tab'
import { IndividualDncExpertModal } from 'page-objects/admin/dnc/individual dnc/components/AddIndividualDncModal'
import { DncRecord } from './components/DncRecord'
import { Types } from 'generator/types'
import { generateFakeEmail } from 'generator/factory'
export namespace IndividualDnc {
  export class IndexPage extends AbstractPage {
    readonly addExpertButton: Button
    readonly individualDncTab: Tab
    readonly globalDncTab: Tab
    readonly clientDncTab: Tab
    readonly individualDncExpertModal: IndividualDncExpertModal
    constructor(readonly page: Page) {
      super(page)
      this.addExpertButton = new Button(
        page,
        '[data-test-id="add-expert-button"]',
      )
      this.individualDncTab = new Tab(page, 'text=Individual DNC')
      this.globalDncTab = new Tab(page, 'text=Global DNC')
      this.clientDncTab = new Tab(page, 'text=Client DNC')
      this.individualDncExpertModal = new IndividualDncExpertModal(page)
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
    async addIndividualDncExpert(dncExpert: Types.INDIVIDUAL_DNC_EXPERT) {
      await this.addExpertButton.click()
      await this.individualDncExpertModal.enterEmail(dncExpert)
      await this.individualDncExpertModal.enterFirstName(dncExpert)
      await this.individualDncExpertModal.enterLastName(dncExpert)
      await this.individualDncExpertModal.selectReason(dncExpert)
      await this.individualDncExpertModal.saveIndividualDnc()
    }

    fetchDncRecord(email: string) {
      return new DncRecord(this.page, email)
    }
  }
}
