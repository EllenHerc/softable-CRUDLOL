import { Squad } from './squad'

export interface CreateCombat {
  squadsCombats: Array<Squad>
  winnerSquad: Squad
  combatDate: string
}
