import { Page } from 'playwright/test'
import { AbstractPage } from 'page-objects/AbstractPage'
import { $ as _$ } from './$'
import { Button } from 'components/Button'
import { CreateClientModal } from './components/CreateClientModal'
export namespace Clients {
  export const $ = _$
  export class IndexPage extends AbstractPage {
    readonly addClientButton: Button
    readonly createClientModal: CreateClientModal
    constructor(readonly page: Page) {
      super(page)
      this.addClientButton = new Button(page, 'text=Add client')
      this.createClientModal = new CreateClientModal(page)
    }
    async openCreatePopUp() {
      await this.addClientButton.click()
    }
  }
}
