import { Squad } from 'domain/entities/squad'
import { PutSquad } from 'domain/use-cases/put-squad-use-case'
import {
  serverError,
  badRequest,
  created,
  forbidden
} from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'
const AWS = require('aws-sdk')
const generateID = () => AWS.util.uuid.v4()

export class PutSquadController implements Controller {
  constructor(private readonly putSquad: PutSquad) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      console.log(httpRequest)
      const name = httpRequest.body.name
      const members = httpRequest.body.members
      if (members.length < 5) {
        let err: Error
        err.name = 'Invalid Input!'
        err.message = 'members < 5'
        return forbidden(err)
      }
      const coach = httpRequest.body.coach
      const squadId = generateID()
      const score = 0
      const createdAt = new Date().toISOString()
      const squad: Squad = {
        squadId,
        name,
        members,
        coach,
        score,
        createdAt
      }
      try {
        await this.putSquad.put(squad)
        return created(JSON.stringify(squad))
      } catch (err) {
        return badRequest(err)
      }
    } catch (error) {
      console.log('error: ', error)
      return serverError(error as Error)
    }
  }
}
