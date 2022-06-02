import { DbPutSquad } from 'data/use-cases/db-put-squad-use-case'
import { PutSquad } from 'domain/use-cases/put-squad-use-case'
import { DynamoPutSquadRepository } from 'infra/repositories/dynamo/repositories/squads/dynamo-put-squad-repository'

export function makeDbPutSquadUseCase(): PutSquad {
  const repositoty = new DynamoPutSquadRepository()
  return new DbPutSquad(repositoty)
}
