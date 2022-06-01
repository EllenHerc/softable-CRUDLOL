import { makeDbGetSquadUseCase } from 'main/factories/use-cases/squads/get-squad-use-case-factory'
import { GetSquadController } from 'presentation/controllers/squad/get-squad-controller'
import { Controller } from 'presentation/protocols'

export function makeGetSquadController(): Controller {
  return new GetSquadController(makeDbGetSquadUseCase())
}
