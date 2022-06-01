import { Squad } from 'domain/entities/squad'
import { PostSquad } from 'domain/use-cases/post-squad-use-case'
import { serverError, badRequest, created } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class PostSquadController implements Controller {
  constructor(private readonly postSquad: PostSquad) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const AWS = require('aws-sdk')
      const genaretID = () => AWS.util.uuid.v4()
      console.log(httpRequest)
      const name = httpRequest.body.name
      const members = httpRequest.body.members
      const coach = httpRequest.body.coach
      const squadId = genaretID()
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
        await this.postSquad.post(squad)
        return created(squad)
      } catch (err) {
        return badRequest(err)
      }
    } catch (error) {
      console.log('error: ', error)
      return serverError(error as Error)
    }
  }
}
