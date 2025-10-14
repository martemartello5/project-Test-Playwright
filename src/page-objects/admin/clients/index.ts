import { Page } from 'playwright/test'
import { AbstractPage } from '../../AbstractPage'
import { $ as _$ } from './$'
import { Button } from '../../components/Button'
import { CreateClientModal } from './components/CreateClientModal'
export namespace Clients {
  export const $ = _$
  export class IndexPage extends AbstractPage {
    readonly createClientModal: CreateClientModal
    readonly addClientButton: Button
    constructor(readonly page: Page) {
      super(page)
      this.createClientModal = new CreateClientModal(page)
      this.addClientButton = new Button(page, 'text=Add client')
    }
    async openCreatePopUp() {
      await this.addClientButton.click()
    }
  }
}
//add button to open modal
// read about camelcase - when name from capital letter
