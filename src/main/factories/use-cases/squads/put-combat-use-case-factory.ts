import { DbPutCombat } from 'data/use-cases/db-put-combat-use-case'
import { PutCombat } from 'domain/use-cases/put-combat-use-case'
import { DynamoPutCombatRepository } from 'infra/repositories/dynamo/repositories/squads/dynamo-put-combat-repository'

export function makeDbPutCombatUseCase(): PutCombat {
  const repositoty = new DynamoPutCombatRepository()
  return new DbPutCombat(repositoty)
}
