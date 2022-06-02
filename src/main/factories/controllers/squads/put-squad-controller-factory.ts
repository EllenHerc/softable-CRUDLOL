import { makeDbPutSquadUseCase } from 'main/factories/use-cases/squads/put-squad-use-case-factory'
import { PutSquadController } from 'presentation/controllers/squad/put-squad-controller'
import { Controller } from 'presentation/protocols'

export function makePutSquadController(): Controller {
  return new PutSquadController(makeDbPutSquadUseCase())
}
