import { GetCompany } from 'domain/use-cases/get-company-use-case'
import { Controller, HttpRequest, HttpResponse } from 'presentation/protocols'

export class GetCompanyController implements Controller {
  constructor(private getCompany: GetCompany) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    return null
  }
}
