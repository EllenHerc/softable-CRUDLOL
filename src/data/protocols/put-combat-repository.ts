import { Combat } from 'domain/entities/combat'

export interface PutCombatRepository {
  put: (combat: Combat) => Promise<any>
}
