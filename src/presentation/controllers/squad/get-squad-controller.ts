import { GetSquad } from 'domain/use-cases/get-squad-use-case'
import { serverError, ok, notFound } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class GetSquadController implements Controller {
  constructor(private readonly getSquad: GetSquad) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      console.log(httpRequest)
      const id = httpRequest.pathParameters.squadId
      const squad = await this.getSquad.get(id)
      if (!squad) return notFound()
      return ok(JSON.stringify(squad))
    } catch (error) {
      console.log('error: ', error)
      return serverError(error as Error)
    }
  }
}
