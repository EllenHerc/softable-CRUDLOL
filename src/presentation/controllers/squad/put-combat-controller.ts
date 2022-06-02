import { Combat } from 'domain/entities/combat'
import { Squad } from 'domain/entities/squad'
import { GetSquad } from 'domain/use-cases/get-squad-use-case'
import { PutCombat } from 'domain/use-cases/put-combat-use-case'
import { PutSquad } from 'domain/use-cases/put-squad-use-case'
import {
  serverError,
  badRequest,
  created,
  notFound
} from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'
const AWS = require('aws-sdk')
const generateID = () => AWS.util.uuid.v4()

export class PutCombatController implements Controller {
  constructor(
    private readonly putCombat: PutCombat,
    private readonly getSquad: GetSquad,
    private readonly putSquad: PutSquad
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const combatId = generateID()
      const squadsCombat = httpRequest.body.squadsCombat
      const winnerSquad = httpRequest.body.winnerSquad
      const combatDate = new Date().toISOString()

      const squad1 = await this.getSquad.get(squadsCombat[0])
      const squad2 = await this.getSquad.get(squadsCombat[1])

      if (!squad1 || !squad2) {
        return notFound('Combat squads not found')
      }

      const combat: Combat = {
        combatId,
        squadsCombat,
        winnerSquad,
        combatDate
      }
      try {
        const response = await this.putCombat.put(combat)
        console.log('response: ' + response)
        const squadUpdate: Squad =
          winnerSquad.squadId === squad1.squadId ? squad1 : squad2
        squadUpdate.score = squadUpdate.score + 1000
        await this.putSquad.put(squadUpdate)
        return created(JSON.stringify(combat))
      } catch (err) {
        return badRequest(err)
      }
    } catch (error) {
      console.log('error: ', error)
      return serverError(error as Error)
    }
  }
}
