import { Page } from '@playwright/test'
import { AbstractPage } from 'page-objects/AbstractPage'
import { Button } from 'components/Button'
import { Input } from 'components/Input'
export namespace LoginPage {
  export class IndexPage extends AbstractPage {
    readonly userNameInput: Input
    readonly passwordInput: Input
    readonly submitButton: Button
    readonly errorMessage: Input
    constructor(page: Page) {
      super(page)
      this.userNameInput = new Input(page, '[name="login"]')
      this.passwordInput = new Input(page, '[name="password"]')
      this.submitButton = new Button(page, 'text=Sign i')
      this.errorMessage = new Input(
        page,
        'text=Incorrect email or password, please try again.',
      )
    }
    async login(username: string, password: string) {
      await this.userNameInput.fill(username)
      await this.passwordInput.fill(password)
      await this.submitButton.click()
    }

    async assertErrorMessage() {
      await this.errorMessage.assertValue(
        'Incorrect email or password, please try again.',
      )
    }
  }
}
