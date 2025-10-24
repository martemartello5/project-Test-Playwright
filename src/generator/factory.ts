import { faker } from '@faker-js/faker'
import { getRandomItemFromArray } from '../utils/data-helpers'
import { Entities } from './entities'
import { Types } from './types'
import { S } from '@faker-js/faker/dist/airline-CLphikKp'
export function generateClient(options?: {
  name?: string
  priority?: string
  type?: string
  isChargeCodeRequired?: boolean
}): Types.CLIENT {
  const name = faker.company.name()
  const priority = getRandomItemFromArray(Entities.priorityList)
  const type = getRandomItemFromArray(Entities.typeList)
  return {
    name: name,
    priority: priority,
    type: type,
    isChargeCodeRequired: true,
  }
}
export function generateFakeEmail() {
  const random = Math.random().toString(36).substring(2, 10)
  return `user_${random}@aqa.prosapient.com`
}
export function generateFakeLinkedinUrl() {
  const random = Math.random().toString(36).substring(2, 10)
  return `https://www.linkedin.com/in/random/${random}`
}

export function generateIndividualDncExpert(options?: {
  email?: string
  linkedinUrl?: string
  firstName?: string
  lastName?: string
  reason?: string
  requestedBy?: string
}) {
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  const email = generateFakeEmail()
  const reason = getRandomItemFromArray(Entities.individualDncReasonList)
  const requestedBy = 'AQA SuperAdmin'
  const linkedinUrl = generateFakeLinkedinUrl()
  return {
    email: email,
    firstName: firstName,
    lastName: lastName,
    reason: reason,
    requestedBy: requestedBy,
    linkedinUrl: linkedinUrl,
  }
}
