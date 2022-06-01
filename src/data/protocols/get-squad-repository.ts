import { Squad } from 'domain/entities/squad'

export interface GetSquadRepository {
  get: (squadId: string) => Promise<Squad>
}
