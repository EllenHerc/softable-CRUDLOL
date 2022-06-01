import { Combat } from 'domain/entities/combat'
import { CreateCombat } from 'domain/entities/create-combat'

export interface PostCombatRepository {
  post: (createCombat: CreateCombat) => Promise<Combat>
}
