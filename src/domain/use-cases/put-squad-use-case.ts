import { CreateSquad } from 'domain/entities/create-squad'

export interface PutSquad {
  put: (createSquad: CreateSquad) => Promise<any>
}
