import { DbGetSquad } from 'data/use-cases/db-get-squad-use-case'
import { GetSquad } from 'domain/use-cases/get-squad-use-case'
import { DynamoGetSquadRepository } from 'infra/repositories/dynamo/repositories/squads/dynamo-get-squads-repository'

export function makeDbGetSquadUseCase(): GetSquad {
  const repositoty = new DynamoGetSquadRepository()
  return new DbGetSquad(repositoty)
}
