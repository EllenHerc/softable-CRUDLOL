import { makeDbPostSquadUseCase } from 'main/factories/use-cases/squads/post-squad-use-case-factory'
import { PostSquadController } from 'presentation/controllers/squad/post-squad-controller'
import { Controller } from 'presentation/protocols'

export function makePostSquadController(): Controller {
  return new PostSquadController(makeDbPostSquadUseCase())
}
