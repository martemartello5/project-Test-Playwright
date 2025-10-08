import { expect, Locator, Page } from '@playwright/test'
import { AbstractPage } from '../AbstractPage'

export namespace LoginPage {
  export class IndexPage extends AbstractPage{
    readonly userNameInput: Locator
    readonly passwordInput: Locator
    readonly submitButton: Locator
    readonly errorMessage: Locator
    constructor(page: Page) {
      super(page)
      this.userNameInput = page.locator('[name="login"]')
      this.passwordInput = page.locator('[name="password"]')
      this.submitButton = page.locator('text=Sign i')
      this.errorMessage = page.locator(
        'text=Incorrect email or password, please try again.',
      )
    }
    //define login page methods
    async visit(env) {
      await this.page.goto(env)
    }
    async login(username, password) {
      await this.userNameInput.fill(username)
      await this.passwordInput.fill(password)
      await this.submitButton.click()
    }

    async assertErrorMessage() {
      await expect(this.errorMessage).toContainText(
        'Incorrect email or password, please try again.',
      )
    }
    async snapshotPasswordInput() {
      expect(await this.passwordInput.screenshot()).toMatchSnapshot(
        'password-input.png',
      )
    }
    async snaphotErrorMessage() {
      expect(await this.errorMessage.screenshot()).toMatchSnapshot(
        'loginErrorMessage.png',
      )
    }
  }
}
