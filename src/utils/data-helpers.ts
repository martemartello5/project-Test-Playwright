import { faker } from '@faker-js/faker'

const crypto = require('crypto')

export async function getRandomNumber() {
  return Math.floor(Math.random() * 1000 + 1)
}

export async function getRandomString() {
  return crypto.randomBytes(20).toString('hex')
}
export async function loadHomepage(page) {
  await page.goto('https://spot-crm-sq-new-table-master.test.prosapient.app/')
}

export async function assertTitle(page) {
  await page.waitForSelector('#submit-login')
}
export function getRandomItemFromArray(array: string[]) {
  const lenght = array.length
  const randomIndex = faker.number.int(lenght - 1)
  return array[randomIndex]
}
