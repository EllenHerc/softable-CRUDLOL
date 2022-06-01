import { Squad } from 'domain/entities/squad'

export interface PostSquad {
  post: (squad: Squad) => Promise<Squad>
}
