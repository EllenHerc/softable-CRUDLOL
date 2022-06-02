import { CreateSquad } from 'domain/entities/create-squad'

export interface PutSquadRepository {
  put: (createSquad: CreateSquad) => Promise<any>
}
