import { DeleteSquad } from 'domain/use-cases/delete-squad-use-case'
import { serverError, ok, notFound } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class DeleteSquadController implements Controller {
  constructor(private readonly deleteSquad: DeleteSquad) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      console.log(httpRequest)
      const id = httpRequest.pathParameters.squadId
      const response = await this.deleteSquad.delete(id)
      if (!response) {
        console.log(response)
        return notFound()
      }
      return ok(JSON.stringify(response))
    } catch (error) {
      console.log('error: ', error)
      return serverError(error as Error)
    }
  }
}
