import { Combat } from 'domain/entities/combat'
import { CreateCombat } from 'domain/entities/create-combat'

export interface PostCombat {
  post: (creatCombat: CreateCombat) => Promise<Combat>
}
