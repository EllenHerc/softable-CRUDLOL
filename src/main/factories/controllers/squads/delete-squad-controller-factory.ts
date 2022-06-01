import { makeDbDeleteSquadUseCase } from 'main/factories/use-cases/squads/delete-squad-use-case-factory'
import { DeleteSquadController } from 'presentation/controllers/squad/delete-squad-controller'
import { Controller } from 'presentation/protocols'

export function makeDeleteSquadController(): Controller {
  return new DeleteSquadController(makeDbDeleteSquadUseCase())
}
