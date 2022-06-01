import { Squad } from 'domain/entities/squad'

export interface PostSquadRepository {
  post: (squad: Squad) => Promise<Squad>
}
