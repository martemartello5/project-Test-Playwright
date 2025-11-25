import { Page } from '@playwright/test'
import { Types } from 'generator/types'
import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { Select } from 'components/Select'
import { Component } from 'components/Component'

export class DncRecord {
  readonly component: Component
  constructor(page: Page, email: string) {
    this.component = new Component(page, `[data-test-id="record-${email}"]`)
  }

  async assertPresence() {
    this.component.assertPresence()
  }
}
