import { makeDbGetSquadUseCase } from 'main/factories/use-cases/squads/get-squad-use-case-factory'
import { makeDbPutCombatUseCase } from 'main/factories/use-cases/squads/put-combat-use-case-factory'
import { makeDbPutSquadUseCase } from 'main/factories/use-cases/squads/put-squad-use-case-factory'
import { PutCombatController } from 'presentation/controllers/squad/put-combat-controller'
import { Controller } from 'presentation/protocols'

export function makePutCombatsController(): Controller {
  return new PutCombatController(
    makeDbPutCombatUseCase(),
    makeDbGetSquadUseCase(),
    makeDbPutSquadUseCase()
  )
}
