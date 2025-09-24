import { faker } from '@faker-js/faker'
import { getRandomItemFromArray } from '../utils/data-helpers'
import { Entities } from './entities'
import { Types } from './types'
// TODO: add parameters to modify client data
export function generateClient(options?: {type?: string}): Types.CLIENT {
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
