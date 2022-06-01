import { Squad } from 'domain/entities/squad'

export interface GetSquad {
  get: (squadId: string) => Promise<Squad>
}
