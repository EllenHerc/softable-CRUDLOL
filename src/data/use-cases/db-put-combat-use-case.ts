import { PutCombatRepository } from 'data/protocols/put-combat-repository'
import { Combat } from 'domain/entities/combat'
import { PutCombat } from 'domain/use-cases/put-combat-use-case'

export class DbPutCombat implements PutCombat {
  constructor(private readonly putCombatRepository: PutCombatRepository) {}
  async put(combat: Combat): Promise<any> {
    return await this.putCombatRepository.put(combat)
  }
}
