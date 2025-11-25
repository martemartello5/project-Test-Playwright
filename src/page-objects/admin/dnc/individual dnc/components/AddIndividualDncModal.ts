import { Page } from '@playwright/test'
import { Types } from 'generator/types'
import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { Select } from 'components/Select'

export class IndividualDncExpertModal {
  private readonly emailSelect: Select
  private readonly emailField: Input
  readonly emailMenuSelect: Select
  readonly linkedinUrl: Select
  readonly firstName: Input
  readonly lastName: Input
  readonly reason: Select
  readonly requestedBy: Select
  readonly saveButton: Button
  readonly cancelButton: Button

  constructor(readonly page: Page) {
    ;(((this.emailSelect = new Select(
      page,
      '[data-test-id="individual-dnc-email-select"]',
    )),
    (this.emailField = new Input(
      page,
      '[data-test-id="select-input-individual-dnc-email-select"]',
    )),
    (this.emailMenuSelect = new Select(page, `text=Create`)),
    (this.linkedinUrl = new Select(
      page,
      '[data-test-id="individual-dnc-linkedin-select"]',
    ))),
      (this.firstName = new Input(
        page,
        '[data-test-id="individual-dnc-first-name"]',
      )))
    this.lastName = new Input(page, '[data-test-id="individual-dnc-last-name"]')
    this.reason = new Select(
      page,
      '[data-test-id="individual-dnc-reason-select"]',
    )
    this.requestedBy = new Select(
      page,
      '[data-test-id="individual-dnc-requested-by-select"]',
    )
    this.saveButton = new Button(
      page,
      '[data-test-id="individual-dnc-submit-button"]',
    )
    this.cancelButton = new Button(
      page,
      '[data-test-id="individual-dnc-cancel-button"]',
    )
  }

  async enterEmail(dncExpert: Types.INDIVIDUAL_DNC_EXPERT) {
    await this.emailSelect.click()
    await this.emailField.fill(dncExpert.email)
    await this.emailMenuSelect.click()
  }
  async enterLinkedinUrl(dncExpert: Types.INDIVIDUAL_DNC_EXPERT) {
    await this.linkedinUrl.click()
    await this.linkedinUrl.typeValue(dncExpert.linkedinUrl)
    await this.linkedinUrl.selectOption(dncExpert.linkedinUrl)
  }
  async enterFirstName(dncExpert: Types.INDIVIDUAL_DNC_EXPERT) {
    await this.firstName.fill(dncExpert.firstName)
  }
  async enterLastName(dncExpert: Types.INDIVIDUAL_DNC_EXPERT) {
    await this.lastName.fill(dncExpert.lastName)
  }
  async selectReason(dncExpert: Types.INDIVIDUAL_DNC_EXPERT) {
    await this.reason.click()
    await this.reason.selectOptionbyText(dncExpert.reason)
  }
  async selectRequestedBy(dncExpert: Types.INDIVIDUAL_DNC_EXPERT) {
    await this.requestedBy.click()
    await this.requestedBy.selectOptionbyText(dncExpert.requestedBy)
  }
  async saveIndividualDnc() {
    await this.saveButton.click()
    await this.page.waitForLoadState('networkidle')
    await this.saveButton.waitFor({ state: 'detached' })
  }
  async cancelIndividualDnc() {
    await this.cancelButton.click()
  }
}
