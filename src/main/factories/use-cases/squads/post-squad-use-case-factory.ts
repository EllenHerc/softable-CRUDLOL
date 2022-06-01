import { DbPostSquad } from 'data/use-cases/db-post-squad-use-case'
import { PostSquad } from 'domain/use-cases/post-squad-use-case'
import { DynamoPostSquadRepository } from 'infra/repositories/dynamo/repositories/squads/dynamo-post-squad-repository'

export function makeDbPostSquadUseCase(): PostSquad {
  const repositoty = new DynamoPostSquadRepository()
  return new DbPostSquad(repositoty)
}
