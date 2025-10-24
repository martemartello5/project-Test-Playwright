import { ReadSyncOptions } from "fs"

export namespace Types {
  export type CLIENT = {
    name: string
    priority: string
    type: string
    isChargeCodeRequired: boolean
  }
  export type INDIVIDUAL_DNC_EXPERT ={
    firstName: string
    lastName: string
    email: string
    linkedinUrl: string
    name: string
    reason: string
    requestedBy: string
  }
}
