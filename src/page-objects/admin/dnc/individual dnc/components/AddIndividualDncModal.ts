import { Page } from '@playwright/test'
import { Types } from 'generator/types'
import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { Select } from 'components/Select'

export class IndividualDncExpertModal {
  readonly email: Select
  readonly linkedinUrl: Select
  readonly firstName: Input
  readonly lastName: Input
  readonly reason: Select
  readonly requestedBy: Select
  readonly saveButton: Button
  readonly cancelButton: Button

  constructor(readonly page: Page) {
    ;(((this.email = new Select(
      page,
      '[data-test-id="individual-dnc-email-select"]',
    )),
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
    await this.email.click()
    await this.email.typeValue(dncExpert.email)
    await this.email.selectOption(dncExpert.email)
  }
  async enterLinkedinUrl(dncExpert: Types.INDIVIDUAL_DNC_EXPERT) {
    await this.linkedinUrl.click()
    await this.linkedinUrl.typeValue(dncExpert.linkedinUrl)
    await this.linkedinUrl.selectOption(dncExpert.linkedinUrl)
  }
  async enterFirstName(dncExpert: Types.INDIVIDUAL_DNC_EXPERT) {
    await this.firstName.assertValue(dncExpert.firstName)
  }
  async enterLastName(dncExpert: Types.INDIVIDUAL_DNC_EXPERT) {
    await this.lastName.assertValue(dncExpert.lastName)
  }
  async selectReason(dncExpert: Types.INDIVIDUAL_DNC_EXPERT) {
    await this.reason.click()
    await this.reason.selectOption(dncExpert.reason)
  }
  async selectRequestedBy(dncExpert: Types.INDIVIDUAL_DNC_EXPERT) {
    await this.requestedBy.click()
    await this.requestedBy.selectOption(dncExpert.requestedBy)
  }
  async saveIndividualDnc() {
    await this.saveButton.click()
  }
  async cancelIndividualDnc() {
    await this.cancelButton.click()
  }
}
