import { DbDeleteSquad } from 'data/use-cases/db-delete-squad-use-case'
import { DeleteSquad } from 'domain/use-cases/delete-squad-use-case'
import { DynamoDeleteSquadRepository } from 'infra/repositories/dynamo/repositories/squads/dynamo-delete-squad-repository'

export function makeDbDeleteSquadUseCase(): DeleteSquad {
  const repositoty = new DynamoDeleteSquadRepository()
  return new DbDeleteSquad(repositoty)
}
