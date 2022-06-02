import { Combat } from 'domain/entities/combat'

export interface PutCombat {
  put: (combat: Combat) => Promise<any>
}
