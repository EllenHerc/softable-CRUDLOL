import { Squad } from './squad'

export interface Combat {
  combatId: String
  squadsCombat: Array<Squad>
  winnerSquad: Squad
  combatDate: string
}
